const backdrop = document.querySelector('.backdrop');
const toggleButton = document.querySelector('.toggle-button__container');
const nav = document.querySelector('.mobile-nav');
const closeNav = document.querySelector('.close-nav');
const displayContent = document.querySelectorAll('.about-content');
const body = document.body;
const parentNav = document.querySelector('.mobile-nav__items');
const header = document.querySelector('.main-header');
const feedback = document.querySelector('.feedback');
const feedbackForm = document.querySelector('.feedback-form');
const closeAll = document.querySelector('.close-button');
const login = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const signup = document.querySelector('.signup');
const signupForm = document.querySelector('.signup-form');
const signupBtn = document.querySelector('.sign-up__button');

const closeBlock = () => {
  closeAll.style.display = 'none';
  backdrop.style.display = 'none';
  signupForm.style.display = 'none';
  loginForm.style.display = 'none';
};

let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  header.style.transition = 'transform 0.4s';

  if (window.scrollY > 100) {
    if (currentScroll < lastScroll) {
      header.style.transform = 'translateY(0)';
    } else {
      header.style.transform = 'translateY(-100%)';
    }

    lastScroll = currentScroll;
  }
});

// toggle button
toggleButton.addEventListener('click', () => {
  setTimeout(() => {
    backdrop.style.display = 'block';
    nav.style.display = 'flex';
    nav.style.animation = 'slideIn 0.5s linear';
    toggleButton.style.opacity = '0';
  }, 200);
});

// back drop
backdrop.addEventListener('click', () => {
  setTimeout(() => {
    closeBlock();
    if (body.offsetWidth > 720 && feedbackForm.style.animation === '') {
      feedbackForm.style.display = 'none';
    } else {
      feedbackForm.style.animation = 'feedbackSlideOut 0.2s linear';
      setTimeout(() => {
        feedbackForm.style.display = 'none';
      }, 190);
    }
    setTimeout(() => {
      feedbackForm.style.display = 'none';
    }, 190);
    nav.style.animation = 'slideOut 0.3s linear';
    setTimeout(() => {
      nav.style.display = 'none';
    }, 290);
    toggleButton.style.opacity = '1';
  }, 200);
});

//  navigation close button
closeNav.addEventListener('click', () => {
  setTimeout(() => {
    backdrop.style.display = 'none';
    nav.style.animation = 'slideOut 0.3s linear';
    setTimeout(() => {
      nav.style.display = 'none';
    }, 290);
    toggleButton.style.opacity = '1';
  }, 200);
});

// navigation child
Array.from(parentNav.children).forEach((cur) => {
  cur.addEventListener('click', () => {
    setTimeout(() => {
      backdrop.style.display = 'none';
      nav.style.animation = 'slideOut 0.3s linear';
      setTimeout(() => {
        nav.style.display = 'none';
      }, 290);
      toggleButton.style.opacity = '1';
    }, 100);
  });
});

// Display more content in about
Array.from(displayContent).forEach((cur) => {
  if (window.innerWidth < 1024.1) {
    cur.addEventListener('click', () => {
      if (
        cur.nextElementSibling.style.display === 'block' &&
        cur.lastElementChild.style.transform === 'rotateZ(270deg)'
      ) {
        cur.nextElementSibling.style.display = 'none';
        cur.lastElementChild.style.transform = 'rotateZ(0deg)';
      } else {
        cur.nextElementSibling.style.display = 'block';
        cur.lastElementChild.style.transform = 'rotateZ(270deg)';
      }
    });
  }
});

// feedback form control
feedback.addEventListener('click', () => {
  backdrop.style.display = 'block';
  closeAll.style.display = 'block';
  feedbackForm.style.display = 'flex';
  if (body.offsetWidth <= 720) {
    feedbackForm.style.animation = 'feedbackSlideIn 0.5s linear';
  }
});

// backdrop close button
closeAll.addEventListener('click', () => {
  closeBlock();
  if (body.offsetWidth > 720 && feedbackForm.style.animation === '') {
    feedbackForm.style.display = 'none';
  } else {
    feedbackForm.style.animation = 'feedbackSlideOut 0.2s linear';
    setTimeout(() => {
      feedbackForm.style.display = 'none';
    }, 190);
  }
});

// login form control
login.addEventListener('click', () => {
  backdrop.style.display = 'block';
  closeAll.style.display = 'block';
  loginForm.style.display = 'flex';
});

// Sign form control
if (window.innerWidth > 720) {
  [signup, signupBtn].forEach((cur) => {
    cur.addEventListener('click', (e) => {
      e.preventDefault();

      backdrop.style.display = 'block';
      closeAll.style.display = 'block';
      signupForm.style.display = 'flex';
    });
  });
}

const minWidth = () => {
  const swiper = document.querySelector('#packages');

  if (
    window.innerWidth > 720 &&
    swiper.classList.contains('swiper-container')
  ) {
    swiper.classList.remove('swiper-container');
  } else {
    swiper.classList.add('swiper-container');
  }
};

minWidth();
