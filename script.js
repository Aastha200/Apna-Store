let searchForm= document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    // searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}
let shoppingCart= document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    // shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}
let loginForm= document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    // loginForm.classList.remove('active');
}

let navbar= document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    // navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    
}

// var swiper = new Swiper(".product-slider", {
//     loop:true,
//     // slidesPerView: 1,
//     spaceBetween: 20,
//     autoplay: {
//         delay:7500,
//         disableOnIntraction:false,
//     },
//     centeredSlides: true,
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
       
//       },
//       768: {
//         slidesPerView: 2,
        
//       },
//       1020: {
//         slidesPerView: 3,
       
//       },
//     },
//   });
  var swiper = new Swiper(".review-slider", {
    loop:true,
    // slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay:7500,
        disableOnIntraction:false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
        
      },
      1020: {
        slidesPerView: 3,
       
      },
    },
  });
  function validateForm() {
   
    var password = document.getElementById("password").value;
    var passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.");
        return false;
    }
    return true;
}
  
  
