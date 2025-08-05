// Simple Portfolio JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed nav
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.nav-menu a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });

  // Navbar background change on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = 'none';
    }
  });

  // Profile image error handling
  const profileImg = document.querySelector('.profile-img');
  if (profileImg) {
    profileImg.addEventListener('error', () => {
      // Create a placeholder with initials
      const profileContainer = document.querySelector('.hero-image');
      if (profileContainer) {
        profileContainer.innerHTML = `
          <div class="profile-placeholder">
            <span>SA</span>
          </div>
        `;
      }
    });
  }

  // Add hover effects for skill tags
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach(tag => {
    tag.addEventListener('mouseenter', () => {
      tag.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', () => {
      tag.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Add hover effects for project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });

  // Add hover effects for experience items
  const experienceItems = document.querySelectorAll('.experience-item');
  experienceItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateX(10px)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateX(0)';
    });
  });

  // Add hover effects for contact items
  const contactItems = document.querySelectorAll('.contact-item');
  contactItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'translateY(-3px)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0)';
    });
  });

  // Add hover effects for social links
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-3px)';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0)';
    });
  });

  // Profile image click effect
  const profileImage = document.querySelector('.profile-img');
  if (profileImage) {
    profileImage.addEventListener('click', () => {
      profileImage.style.transform = 'scale(0.95)';
      setTimeout(() => {
        profileImage.style.transform = 'scale(1.05)';
      }, 150);
    });
  }
});

// Add CSS for mobile menu
const style = document.createElement('style');
style.textContent = `
  @media (max-width: 768px) {
    .nav-menu {
      position: fixed;
      left: -100%;
      top: 70px;
      flex-direction: column;
      background-color: white;
      width: 100%;
      text-align: center;
      transition: 0.3s;
      box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
      padding: 20px 0;
    }

    .nav-menu.active {
      left: 0;
    }

    .nav-menu li {
      margin: 15px 0;
    }

    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.active span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  .profile-placeholder {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid white;
    box-shadow: var(--shadow-hover);
  }

  .profile-placeholder span {
    color: white;
    font-size: 4rem;
    font-weight: bold;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    .profile-placeholder {
      width: 250px;
      height: 250px;
    }
    
    .profile-placeholder span {
      font-size: 3rem;
    }
  }

  @media (max-width: 480px) {
    .profile-placeholder {
      width: 200px;
      height: 200px;
    }
    
    .profile-placeholder span {
      font-size: 2.5rem;
    }
  }
`;
document.head.appendChild(style);