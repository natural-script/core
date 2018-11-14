export default function getRatings() {
    if (window.jsteFirebase) {
        var ref = window.jsteFirebase.database().ref(`sites/${window.location.hostname}/ratings`);
        ref.once('value').then(function (snapshot) {
            if (snapshots.val()) {
                return sanpshots.val();
            } else {
                return false;
            }
        });
    }
}