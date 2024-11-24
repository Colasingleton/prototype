
const addToCartButtons = document.querySelectorAll('button');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (!window.location.href.includes('cart')) { 
      alert('Item added to cart!');
    }
  });
});


const navLinks = document.querySelectorAll('.nav li a, .nav li button'); 

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    // Check if the element is an icon or contains a specific class
    if (link.classList.contains('home') || link.getAttribute('href') === '/') {
      window.location.href = '/'; 
    } else if (link.getAttribute('href') === '/checkout') {
      const confirmCheckout = confirm('Are you sure you want to checkout?');
      if (!confirmCheckout) {
        event.preventDefault(); 
      }
    }
  });
});
const checkoutButton = document.querySelector('.checkout-button'); 

checkoutButton.addEventListener('click', (event) => {
  // Trigger the confirmation box when clicking checkout
  const confirmCheckout = confirm('Are you sure you want to checkout?');
  
  if (confirmCheckout) {
    window.location.href = 'https://colasingleton.github.io/prototype/index.html'; 
  } else {
    event.preventDefault();
  }
});
