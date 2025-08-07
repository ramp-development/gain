import { scrollPanel, team } from './components';

window.Webflow ||= [];
window.Webflow.push(() => {
  scrollPanel();
  team();
});
