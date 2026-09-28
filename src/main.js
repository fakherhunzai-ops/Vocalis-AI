import './tokens.css';
import './style.css';
import {
  Header,
  Hero,
  Proposition,
  ProductShowcase,
  MeterSection,
  WorkflowSection,
  LocalFirstSection,
  VoiceCatalogue,
  TrainingSection,
  HowItWorks,
  Capabilities,
  Requirements,
  FinalCTA,
  Footer,
} from './components.js';

const app = document.querySelector('#app');
app.innerHTML = `${Header()}<main id="main">${Hero()}${Proposition()}${ProductShowcase()}${MeterSection()}${WorkflowSection()}${LocalFirstSection()}${VoiceCatalogue()}${TrainingSection()}${HowItWorks()}${Capabilities()}${Requirements()}${FinalCTA()}</main>${Footer()}`;

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
const navLabel = menuButton.querySelector('.sr-only');

function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
  navLabel.textContent = open ? 'Close navigation' : 'Open navigation';
  document.body.classList.toggle('nav-open', open && window.matchMedia('(max-width: 600px)').matches);
}

menuButton.addEventListener('click', () => {
  setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenu(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuButton.focus();
  }
});

window.addEventListener('resize', () => {
  if (!window.matchMedia('(max-width: 600px)').matches) {
    setMenu(false);
  }
});

const meter = document.querySelector('.meter-console');
const cycleButton = document.querySelector('.meter-cycle');
const meterStates = [
  { name: 'READY', input: 'IDLE', output: 'STANDBY' },
  { name: 'PROCESSING', input: 'ACTIVE', output: 'WORKING' },
  { name: 'COMPLETE', input: 'DONE', output: 'READY' },
];
let currentMeter = 0;

cycleButton.addEventListener('click', () => {
  currentMeter = (currentMeter + 1) % meterStates.length;
  const state = meterStates[currentMeter];
  meter.dataset.meter = state.name.toLowerCase();
  meter.querySelector('.meter-state-label').textContent = state.name;
  meter.querySelector('.meter-input').textContent = state.input;
  meter.querySelector('.meter-output').textContent = state.output;
  cycleButton.setAttribute('aria-label', `Meter state is ${state.name}. Cycle to next state`);
});
