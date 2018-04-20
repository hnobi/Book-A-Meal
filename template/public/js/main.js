var btn1 = document.getElementById('btn1');
btn1.addEventListener("click", function () {
  document.getElementById('signin').style.display = 'block';
});

var btn2 = document.getElementById('btn2');
btn2.addEventListener("click", function () {
  document.getElementById('signin').style.display = 'none';
});
// When the user clicks anywhere outside of the modal, close it
var signinModal = document.getElementById('signin');
window.onclick = function (event) {
  if (event.target == signinModal) {
    // signinModal.style.display = "none";
    document.getElementById('signin').style.display = 'none';
  }
}
// 

var btn3 = document.getElementById('btn3'); btn3.addEventListener("click", function () {
  document.getElementById('signup').style.display
    = 'block';
});
var btn4 = document.getElementById('btn4'); btn4.addEventListener("click", function () {
  document.getElementById('signup').style.display
    = 'none';
});
var signupModal = document.getElementById('signup');
window.onclick = function (event) {
  if (event.target == signupModal) {
    signupModal.style.display = "none";
  }
}






