export const intro = (): void => {
  const scrollTriggers: ScrollTrigger[] = [];
  const contains = document.querySelectorAll('.section_contain');

  for (const contain of contains) {
    const eyebrowMarker = contain.querySelector<HTMLElement>('.eyebrow_marker');
    const eyebrowText = contain.querySelector<HTMLElement>('.eyebrow_text');
    const introMain = contain.querySelector<HTMLElement>('.intro_main');
    const sectionContent = contain.querySelector<HTMLElement>('.section_content');
    const cards = contain.querySelectorAll<HTMLElement>('.card_primary_wrap');

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: contain,
        start: 'top center',
        once: true,
      },
      defaults: {
        duration: 1,
        ease: 'power2.out',
      },
    });

    // Store the ScrollTrigger instance
    const { scrollTrigger } = timeline;
    if (scrollTrigger) {
      scrollTriggers.push(scrollTrigger);
    }

    if (eyebrowMarker) {
      timeline.from(eyebrowMarker, {
        opacity: 0,
        scale: 0.8,
      });
    }

    if (eyebrowText) {
      timeline.from(
        eyebrowText,
        {
          opacity: 0,
          scale: 0.8,
        },
        '<'
      );
    }

    if (introMain) {
      const richText = introMain.querySelector<HTMLElement>('.w-richtext');
      const richTextChildren = richText?.children;
      if (!richTextChildren) return;

      const split = new SplitText(richTextChildren, {
        type: 'lines',
        mask: 'lines',
      });

      gsap.set(split.lines, {
        yPercent: '100',
      });

      timeline.to(
        split.lines,
        {
          yPercent: '0',
          stagger: 0.05,
        },
        '<0.5'
      );
    }

    if (sectionContent) {
      timeline.from(
        sectionContent,
        {
          opacity: 0,
          y: '2rem',
        },
        '<0.5'
      );
    }

    if (cards.length > 0) {
      timeline.from(
        cards,
        {
          opacity: 0,
          y: '2rem',
          stagger: 0.1,
        },
        '<0.5'
      );
    }
  }

  // Listen for gsapRefresh event
  document.addEventListener('gsapRefresh', () => {
    // Refresh all ScrollTrigger instances
    scrollTriggers.forEach((st) => {
      st.refresh();
    });
  });
};
