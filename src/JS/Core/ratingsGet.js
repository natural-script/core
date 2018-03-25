if (navigator.onLine) {
    var isReachable = await window.isReachable('https://jste-9584c.firebaseio.com/');
    if (isReachable) {
        var ref = window.jsteFirebase.database().ref(`sites/${window.location.hostname}/ratings`);
        ref.once('value').then(function (snapshot) {
            if (snapshots.val()) {

            }
        });
    }
}