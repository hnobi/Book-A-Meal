var btn1 = document.getElementById('btn1');
btn1.addEventListener("click", function () {
  document.getElementById('signin').style.display = 'block';
});

var btn2 = document.getElementById('btn2');
btn2.addEventListener("click", function () {
  document.getElementById('signin').style.display = 'none';
});





var modal = document.getElementById('signin');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// // Get the modal
// var modal = document.getElementById('signin-modal');
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }


// var signIn = document.getElementById('signin-btn');

// signIn.addEventListener('click', signIn);
// function signIn() {
//   document.getElementById('signin-modal').style.display = 'block'
// }


// // When the user clicks anywhere outside of the modal, close it

// var cancelSignin = document.getElementById('calcel-signin');
// cancelSignin.addEventListener('click', cancleForm());
// function cancleForm() {
//   document.getElementById('signin-modal').style.display = 'none'
// }






