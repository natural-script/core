$(function () {
    var report = function (term) {
        if (window.jsteFirebase) {
            if (window.uid) {
                var ref = window.jsteFirebase.database().ref(`sites/${window.location.hostname}/reports/${term}`);
                ref.once('value').then(function (snapshot) {
                    if (!(snapshot.val())) {
                        ref.set([window.uid]);
                    } else if (!(snapshot.val().includes(window.uid))) {
                        ref.set(snapshot.val().push(window.uid));
                    }
                });
            }
        }
    }
    var terms = ['strong language', 'nudity', 'sexual themes', 'sexual appeal', 'partial nudity', 'strong lyrics', 'alcohol and drugs', 'violence', 'spam'];
    for (var i = 0; i < terms.length; i++) {
        (function (report, terms, i) {
            cheet(`↑ ↑ ↓ ↓ ← → ← → b a ${terms[i].split('').join(' ')} ↑ ↑ ↓ ↓ ← → ← → b a`, function () {
                report(terms[i]);
            });
        })(report, terms, i);
    }
}(jQuery));