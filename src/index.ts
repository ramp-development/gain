import { nav, scrollPanel, team } from './components';
import { intro } from './interactions';

window.Webflow ||= [];
window.Webflow.push(() => {
  nav();
  scrollPanel();
  team();
  intro();
});
