particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#808080"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#808080",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  const scrollElements = document.querySelectorAll(".scroll-reveal");
  
  const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add("active");
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove("active");
  };
  
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 85)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  const btn = document.getElementById("back-to-top");
  const navbar = document.getElementById("navbar");
  
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
    
    if (window.pageYOffset > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    
    handleScrollAnimation();
  });
  
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  setTimeout(handleScrollAnimation, 100);
  
  const discordLink = document.querySelector("a.discord");
  const valorantLink = document.querySelector("a.valorant");
  const discordModal = document.getElementById("discordModal");
  const valorantModal = document.getElementById("valorantModal");
  const closeDiscord = document.getElementById("closeDiscord");
  const closeValorant = document.getElementById("closeValorant");
  
  discordLink.addEventListener("click", () => {
    discordModal.style.display = "flex";
  });
  
  valorantLink.addEventListener("click", () => {
    valorantModal.style.display = "flex";
  });
  
  closeDiscord.addEventListener("click", () => {
    discordModal.style.display = "none";
  });
  
  closeValorant.addEventListener("click", () => {
    valorantModal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === discordModal) {
      discordModal.style.display = "none";
    }
    if (e.target === valorantModal) {
      valorantModal.style.display = "none";
    }
  });
  
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const navHeight = document.querySelector('nav').offsetHeight;
      
      window.scrollTo({
        top: targetElement.offsetTop - navHeight,
        behavior: 'smooth'
      });
    });
  });