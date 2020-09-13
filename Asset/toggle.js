var abc = '<img  class="carousel" src="/Asset/img/header-rossi2020.jpg">';
var xyz = '<img  class="carousel" src="/Asset/img/vale 46.jpg">';
// document.getElementById('foo').innerHTML = abc;
function clickMe() {
    if (document.getElementById('foo').innerHTML == abc) {
        document.getElementById('foo').innerHTML = xyz;
    } else {
        document.getElementById('foo').innerHTML = abc;
    }
}
