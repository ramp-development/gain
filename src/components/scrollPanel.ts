import { getCurrentBreakpoint } from '@finsweet/ts-utils';

export const scrollPanel = (): void => {
  const panels = document.querySelectorAll<HTMLElement>('.scroll_panel');
  handlePanels(panels);
  window.addEventListener('resize', () => {
    handlePanels(panels);
  });

  function handlePanels(panels: NodeListOf<HTMLElement>): void {
    const breakpoint = getCurrentBreakpoint();
    const { innerHeight } = window;

    [...panels].forEach((panel) => {
      if (breakpoint !== 'main') {
        panel.style.removeProperty('top');
        return;
      }

      const height = panel.offsetHeight;
      panel.style.top = `${innerHeight - height}px`;
    });
  }
};
