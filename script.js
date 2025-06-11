// Nouveau script.js modernisé
document.addEventListener('DOMContentLoaded', function() {
  // Animation au scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service, .about-content, form');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if(elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Initial state for animations
  document.querySelectorAll('.service, .about-content, form').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease-out';
  });
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
  
  // Form submission amélioré
  const contactForm = document.getElementById('contact-form');
  if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulation d'envoi
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Message envoyé!';
        
        // Réinitialiser après 3 secondes
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
          contactForm.reset();
        }, 3000);
      }, 1500);
    });
  }
  // Dans script.js
document.getElementById('book-btn').addEventListener('click', function() {
  // Lien vers votre système de réservation ou modal
  window.location.href = '#contact'; 
  // Ou ouvrir un modal :
  // openBookingModal();
});

// Optionnel : Géolocalisation
if (navigator.geolocation && document.querySelector('.location-map')) {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log("Position : ", position.coords);
    // Vous pourriez mettre à jour l'iframe avec la position
  });
}
  // Navigation fluide
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: 'smooth'
      });
    });
  });
});