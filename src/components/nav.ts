import { gsap } from 'gsap';

export const nav = (): void => {
  const navMain = document.querySelector<HTMLElement>('.nav_component.is-main');
  const navScrolled = document.querySelector<HTMLElement>('.nav_component.is-scrolled');
  if (!navMain || !navScrolled) return;

  const scrollThreshold = 256;
  let lastScrollY = 0;

  const timeline = gsap.timeline({
    paused: true,
    defaults: {
      duration: 0.5,
      ease: 'power2.out',
    },
  });

  timeline.fromTo(navMain, { opacity: 1 }, { opacity: 0 }, 0);
  timeline.fromTo(navScrolled, { opacity: 0 }, { opacity: 1 }, 0);

  setNav();
  window.addEventListener('scroll', setNav);

  function setNav() {
    const currentScrollY = window.scrollY;
    const isScrollingDown = currentScrollY > lastScrollY;

    if (currentScrollY > scrollThreshold && isScrollingDown) timeline.play();
    else if (currentScrollY <= scrollThreshold / 2 && !isScrollingDown) timeline.reverse();

    lastScrollY = currentScrollY;
  }
};
