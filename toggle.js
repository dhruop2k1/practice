var abc = '<img src="header-rossi2020.jpg" width="100%">';
var xyz = '<img src="vale 46.jpg"  width="100%">';
// document.getElementById('foo').innerHTML = abc;
function clickMe() {
    if (document.getElementById('foo').innerHTML == abc) {
        document.getElementById('foo').innerHTML = xyz;
    } else {
        document.getElementById('foo').innerHTML = abc;
    }
}
