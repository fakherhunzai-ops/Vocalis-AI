const github = 'https://github.com/fakherhunzai-ops/Vocalis-AI';
const download = `${github}/releases`;

const icon = (name, className = '') => {
  const paths = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    diagonal: '<path d="M7 17 17 7M8 7h9v9"/>',
    chevron: '<path d="m7 10 5 5 5-5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    play: '<path d="m9 6 10 6-10 6z" fill="currentColor" stroke="none"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.7 1.4a13.1 13.1 0 0 0-6.7 0C5.8 1.1 4.6 1.5 4.6 1.5a4.8 4.8 0 0 0-.1 3.6A5.2 5.2 0 0 0 3.1 8.7c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.7V22"/>',
  };
  return `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${paths[name] || ''}</svg>`;
};

export function meterMark(compact = false) {
  return `<span class="meter-mark${compact ? ' meter-mark--small' : ''}" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>`;
}

export function Header() {
  return `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header" id="top">
      <div class="header-inner">
        <a class="wordmark" href="#top" aria-label="Vocalis home"><span class="brand-sigil" aria-hidden="true">V</span><span>VOCALIS</span></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span class="menu-toggle-lines" aria-hidden="true"></span><span class="sr-only">Open navigation</span></button>
        <nav class="primary-nav" id="primary-nav" aria-label="Main navigation">
          <a href="#workspace">Workspace</a><a href="#meter">Meter</a><a href="#training">Training</a>
          <a class="nav-github" href="${github}" target="_blank" rel="noreferrer">GitHub ${icon('diagonal')}</a>
        </nav>
        <a class="button button--amber header-cta" href="${download}" target="_blank" rel="noreferrer">Download Vocalis ${icon('arrow')}</a>
      </div>
    </header>`;
}

function WorkspacePreview({ hero = false } = {}) {
  const id = hero ? 'hero-workspace' : 'showcase-workspace';
  return `
    <div class="app-window${hero ? ' app-window--hero' : ' app-window--showcase'}" id="${id}" role="img" aria-label="Illustrative interface study, not a product screenshot. Voice library and Meter status shown conceptually.">
      <div class="app-titlebar"><div class="window-lights" aria-hidden="true"><i></i><i></i><i></i></div><span class="app-title">VOCALIS <span>/</span> WORKSPACE STUDY</span><span class="titlebar-state"><b></b> LOCAL SESSION</span></div>
      <div class="app-shell">
        <aside class="app-rail" aria-label="Workspace areas"><span class="rail-monogram">V.</span><span class="rail-icon rail-icon--active">◫</span><span class="rail-icon">◉</span><span class="rail-icon">⌁</span><span class="rail-divider"></span><span class="rail-icon rail-icon--bottom">⚙</span></aside>
        <div class="app-content">
          <div class="app-topline"><span>VOICE WORKSPACE</span><span class="app-build">DESKTOP / LOCAL</span></div>
          <div class="app-heading"><div><div class="eyebrow app-eyebrow">YOUR VOICES</div><h3>Make it yours<span>.</span></h3></div><span class="app-count">ON DEVICE <strong>LOCAL</strong></span></div>
          <div class="app-meter-row"><div class="app-meter-label"><span class="live-dot"></span><span>VOCALIS METER</span><strong>READY</strong></div>${meterMark()}</div>
          <div class="voice-list" role="list" aria-label="Conceptual examples of installed voices and a training bundle">
            <div class="voice-row voice-row--selected" role="listitem"><span class="voice-index">01</span><span class="voice-avatar">A</span><span class="voice-name">Installed voice<small>READY TO GENERATE</small></span><button type="button" class="voice-action" tabindex="-1" aria-hidden="true">${icon('play')}</button><span class="voice-row-arrow">↗</span></div>
            <div class="voice-row" role="listitem"><span class="voice-index">02</span><span class="voice-avatar voice-avatar--soft">B</span><span class="voice-name">Installed voice<small>READY TO GENERATE</small></span><button type="button" class="voice-action" tabindex="-1" aria-hidden="true">${icon('play')}</button><span class="voice-row-arrow">↗</span></div>
            <div class="voice-row voice-row--bundle" role="listitem"><span class="voice-index">03</span><span class="voice-bundle-icon">${icon('plus')}</span><span class="voice-name">Training bundle<small>AVAILABLE BUNDLE</small></span><span class="bundle-tag">BUNDLE</span></div>
          </div>
          <div class="app-bottomline"><span><i></i> GENERATION RUNS ON THIS MACHINE</span><span>DETAILS ${icon('diagonal')}</span></div>
        </div>
      </div>
      <div class="app-footnote"><span>WORKSPACE STUDY</span><span>INTERFACE STUDY / LOCAL</span></div>
    </div>`;
}

export function Hero() {
  return `<section class="hero section-dark" aria-labelledby="hero-title">
    <div class="hero-gridline" aria-hidden="true"></div><div class="hero-inner container">
      <div class="hero-copy"><div class="eyebrow eyebrow--light"><span class="eyebrow-rule"></span> VOICE, BUILT AROUND YOU</div>
        <h1 id="hero-title">Your voice.<br><span>On your machine.</span></h1>
        <p class="hero-intro">Generate, manage, and where supported train voices from one desktop workspace. Your core generation workflow stays on your machine.</p>
        <div class="hero-actions"><a class="button button--amber button--large" href="${download}" target="_blank" rel="noreferrer">Download Vocalis ${icon('arrow')}</a><a class="text-link text-link--light" href="${github}" target="_blank" rel="noreferrer">View on GitHub ${icon('diagonal')}</a></div>
        <div class="hero-note">DESKTOP VOICE WORKSPACE <span></span> LOCAL GENERATION</div>
      </div>
      <div class="hero-visual"><div class="hero-coordinate">01 / VOICE WORKSPACE <span>DESKTOP SOFTWARE</span></div>${WorkspacePreview({ hero: true })}<div class="hero-corner-note"><span>01</span> INPUT / VOICE / OUTPUT</div></div>
      <div class="hero-bottomline">${meterMark(true)}<span>LOCAL BY DESIGN</span><span>SCROLL TO EXPLORE <b>↓</b></span></div>
    </div>
  </section>`;
}

export function Proposition() {
  const items = [
    ['01', 'Generate', 'Create voice output from your desktop workspace.'],
    ['02', 'Manage', 'Keep installed voices and available bundles in one place.'],
    ['03', 'Train', 'Train locally when your hardware is supported.'],
  ];
  return `<section class="proposition section-paper" aria-labelledby="proposition-title"><div class="container proposition-layout">
    <div class="section-stamp"><span>THE PROPOSITION</span><span>01 / 03</span></div>
    <div class="proposition-main"><div class="eyebrow">A WORKSPACE, NOT A BLACK BOX</div><h2 id="proposition-title">A voice workflow<br>that stays <em>yours.</em></h2><p class="large-copy">One desktop place to work with voices, from generation to management. Local training is there when compatible NVIDIA hardware is available.</p>
      <div class="proposition-list">${items.map(([n, title, copy]) => `<article class="proposition-item"><span class="item-number">${n}</span><div><h3>${title}</h3><p>${copy}</p></div>${icon('arrow')}</article>`).join('')}</div>
    </div>
  </div></section>`;
}

export function ProductShowcase() {
  return `<section class="showcase section-graphite" id="workspace" aria-labelledby="showcase-title"><div class="container showcase-inner">
    <div class="section-header section-header--inverse"><div><div class="eyebrow eyebrow--light"><span class="eyebrow-rule"></span> THE WORKSPACE</div><h2 id="showcase-title">Less switching.<br><span>More making.</span></h2></div><p>Bring voice generation and voice management together in a desktop space designed to stay close to the work.</p></div>
    <div class="showcase-stage"><div class="showcase-side-label">VOCALIS / DESKTOP<br>WORKSPACE STUDY</div>${WorkspacePreview()}<div class="showcase-callout"><span class="callout-line"></span><span>INSTALLED VOICES<br><b>IN ONE WORKSPACE</b></span></div><div class="showcase-index">01<span>/</span>04</div></div>
    <div class="showcase-caption"><span>VOICE WORKSPACE</span><span>GENERATE / MANAGE / TRAIN WHEN SUPPORTED</span></div>
  </div></section>`;
}

export function MeterSection() {
  return `<section class="meter-section section-amber" id="meter" aria-labelledby="meter-title"><div class="container meter-layout">
    <div class="meter-copy"><div class="eyebrow eyebrow--dark"><span class="eyebrow-rule"></span> A VOCALIS SIGNATURE</div><h2 id="meter-title">Read the room.<br><span>Read the work.</span></h2><p>The Vocalis Meter makes system state visible. Know when the workspace is ready, processing, or complete without adding noise to the work.</p><a class="text-link text-link--dark" href="#how-it-works">See how Vocalis works ${icon('arrow')}</a></div>
    <div class="meter-console" data-meter="ready"><div class="console-top"><span>VOCALIS METER <b>01</b></span><span class="console-led" aria-hidden="true"></span></div>
      <div class="console-readout" aria-live="polite"><span class="readout-label">SYSTEM STATE</span><strong class="meter-state-label">READY</strong><span class="readout-code">V / 01</span></div>
      <div class="console-track" aria-hidden="true">${Array.from({length: 21}, (_, i) => `<i style="--tick:${i}"></i>`).join('')}</div>
      <div class="console-details"><span>INPUT <b class="meter-input">IDLE</b></span><span>OUTPUT <b class="meter-output">STANDBY</b></span></div>
      <div class="console-bottom"><span>PROCESS FEEDBACK</span><button class="meter-cycle" type="button" aria-label="Cycle meter state">CYCLE STATE ${icon('arrow')}</button></div>
    </div>
    <div class="meter-explainer"><span>STATE / 01 / 03</span><div class="state-definition"><b>READY</b><span>Standing by for a task.</span></div><div class="state-definition"><b>PROCESSING</b><span>Work is underway.</span></div><div class="state-definition"><b>COMPLETE</b><span>The current task has finished.</span></div></div>
  </div></section>`;
}

export function WorkflowSection() {
  const steps = [
    ['01', 'Choose a voice', 'Work with an installed voice or an available training bundle.'],
    ['02', 'Generate locally', 'Run the core generation workflow on your machine.'],
    ['03', 'Follow the Meter', 'See when the workspace is ready, processing, or complete.'],
  ];
  return `<section class="workflow section-paper" aria-labelledby="workflow-title"><div class="container workflow-inner">
    <div class="workflow-heading"><div class="eyebrow">A CLEAR PATH THROUGH THE WORK</div><h2 id="workflow-title">From voice<br>to <em>voice.</em></h2><p>Fewer handoffs. A simple, visible workflow, with the Meter keeping system state in view.</p></div>
    <div class="workflow-steps">${steps.map(([n, title, copy], i) => `<article class="workflow-step"><div class="workflow-step-top"><span>${n} / 03</span>${i < 2 ? '<span class="step-connector" aria-hidden="true"></span>' : '<span class="step-end">●</span>'}</div><div class="workflow-glyph workflow-glyph--${i + 1}" aria-hidden="true">${i === 0 ? '<span>VOICE</span><i></i><i></i>' : i === 1 ? '<span class="workflow-glyph-play">▶</span>' : meterMark()}</div><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div>
  </div></section>`;
}

export function LocalFirstSection() {
  return `<section class="local-section section-graphite" aria-labelledby="local-title"><div class="container local-layout">
    <div class="local-number">02<span>/</span> ARCHITECTURE</div><div class="local-copy"><div class="eyebrow eyebrow--light"><span class="eyebrow-rule"></span> LOCAL FIRST, CLEARLY</div><h2 id="local-title">Your machine<br>does the <em>making.</em></h2><p class="local-lede">The core voice generation workflow runs locally. Some supporting functions, including link fetching and access to the online voice catalogue, may need a network connection.</p>
      <div class="local-diagram"><div class="diagram-node diagram-node--local"><span class="node-overline">ON YOUR MACHINE</span><strong>Core generation</strong><span class="node-status"><i></i> LOCAL WORKFLOW</span></div><div class="diagram-connection"><i></i><span>WHEN NEEDED</span><i></i></div><div class="diagram-node diagram-node--network"><span class="node-overline">NETWORK ACCESS</span><strong>Catalogue / links</strong><span class="node-status">SPECIFIC FUNCTIONS</span></div></div>
      <p class="local-footnote">A network connection may be required for select functions. This is not a claim that every part of the application is offline.</p>
    </div>
  </div></section>`;
}

export function VoiceCatalogue() {
  const entries = [
    ['A', 'Installed voices', 'Ready to use in your workspace.', 'ON DEVICE'],
    ['B', 'Online catalogue', 'Browse voices when connected.', 'NETWORK'],
    ['+', 'Training bundles', 'An available path when local training is not an option.', 'BUNDLES'],
  ];
  return `<section class="catalogue-section section-paper" id="voices" aria-labelledby="catalogue-title"><div class="container">
    <div class="catalogue-header"><div><div class="eyebrow">A PLACE FOR VOICES</div><h2 id="catalogue-title">Find your<br><em>starting point.</em></h2></div><p>Work with installed voices, access the online catalogue when connected, or continue with an available training bundle.</p></div>
    <div class="voice-catalogue">${entries.map(([mark, title, copy, tag], i) => `<article class="catalogue-card catalogue-card--${i + 1}"><div class="catalogue-card-top"><span class="catalogue-index">0${i + 1}</span><span class="catalogue-tag">${tag}</span></div><div class="catalogue-avatar">${mark}</div><div class="catalogue-card-bottom"><div><h3>${title}</h3><p>${copy}</p></div>${icon('diagonal')}</div></article>`).join('')}</div>
    <div class="catalogue-note"><span class="note-mark">i</span><p>Online catalogue access requires a network connection. Installed voices and available bundles remain a path forward without local training.</p></div>
  </div></section>`;
}

export function TrainingSection() {
  return `<section class="training-section section-amber" id="training" aria-labelledby="training-title"><div class="container training-layout">
    <div class="training-stamp"><span>LOCAL TRAINING</span><strong>03</strong><span>HARDWARE<br>MATTERS</span></div>
    <div class="training-main"><div class="eyebrow eyebrow--dark"><span class="eyebrow-rule"></span> TRAINING, WITH THE DETAILS UP FRONT</div><h2 id="training-title">Train where<br>the hardware <em>fits.</em></h2><p class="training-lede">Local voice training requires a compatible NVIDIA GPU. No compatible GPU? You can still use installed voices and available training bundles.</p>
      <div class="training-paths"><article class="training-path"><div class="path-top"><span>PATH / 01</span><span class="path-square">${icon('arrow')}</span></div><div class="path-symbol path-symbol--gpu" aria-hidden="true"><span>NVIDIA</span><i></i></div><h3>Supported NVIDIA GPU</h3><p>Train voices locally on compatible hardware.</p><span class="path-outcome">LOCAL TRAINING</span></article><article class="training-path training-path--alt"><div class="path-top"><span>PATH / 02</span><span class="path-square">${icon('arrow')}</span></div><div class="path-symbol path-symbol--bundle" aria-hidden="true">V<span>+</span></div><h3>Mac or unsupported hardware</h3><p>Continue with installed voices and available training bundles.</p><span class="path-outcome">KEEP CREATING</span></article></div>
      <p class="training-footnote">The specific NVIDIA GPU requirements depend on the current training setup. Check the project documentation before installing.</p>
    </div>
  </div></section>`;
}

export function HowItWorks() {
  const steps = [
    ['01', 'Open your workspace', 'Start with Vocalis on desktop.'],
    ['02', 'Select an available voice', 'Use installed voices or an available bundle.'],
    ['03', 'Generate on your machine', 'The core generation workflow runs locally.'],
    ['04', 'Train if your hardware supports it', 'Local training requires a compatible NVIDIA GPU.'],
  ];
  return `<section class="how-section section-paper" id="how-it-works" aria-labelledby="how-title"><div class="container how-layout"><div class="how-intro"><div class="eyebrow">NO MYSTERY IN THE MIDDLE</div><h2 id="how-title">How Vocalis<br><em>works.</em></h2><p>A desktop workflow with a clear distinction between local generation, online access, and hardware-dependent training.</p></div><ol class="how-list">${steps.map(([n, title, copy]) => `<li><span class="how-count">${n}</span><div><h3>${title}</h3><p>${copy}</p></div>${icon('arrow')}</li>`).join('')}</ol></div></section>`;
}

export function Capabilities() {
  const capabilities = [
    ['01', 'Generate voices', 'Use the core generation workflow on your machine.'],
    ['02', 'Manage voices', 'Keep your voice workspace together on desktop.'],
    ['03', 'Train locally', 'Train when compatible NVIDIA hardware is available.'],
    ['04', 'Track system state', 'Use the Vocalis Meter for processing feedback.'],
    ['05', 'Use training bundles', 'Continue with available bundles on Mac or unsupported hardware.'],
    ['06', 'Reach the catalogue', 'Access online voices when a network connection is available.'],
  ];
  return `<section class="capabilities-section section-graphite" aria-labelledby="capabilities-title"><div class="container">
    <div class="capabilities-heading"><div><div class="eyebrow eyebrow--light"><span class="eyebrow-rule"></span> MADE FOR THE WORK</div><h2 id="capabilities-title">The essentials.<br><span>In one place.</span></h2></div><span class="capability-mark">V / 06</span></div>
    <div class="capability-list">${capabilities.map(([n, title, copy]) => `<article class="capability-row"><span class="capability-number">${n}</span><h3>${title}</h3><p>${copy}</p><span class="capability-arrow" aria-hidden="true">↗</span></article>`).join('')}</div>
  </div></section>`;
}

export function Requirements() {
  const rows = [
    ['Core voice generation', 'Runs locally on your machine.'],
    ['Local voice training', 'Requires a compatible NVIDIA GPU.'],
    ['Mac or unsupported hardware', 'Use installed voices and available training bundles.'],
    ['Online catalogue and link fetching', 'A network connection may be required.'],
  ];
  return `<section class="requirements-section section-paper" id="requirements" aria-labelledby="requirements-title"><div class="container requirements-layout"><div class="requirements-heading"><div class="eyebrow">BEFORE YOU INSTALL</div><h2 id="requirements-title">Know your<br><em>setup.</em></h2><p>Hardware needs vary by task. These are the requirements that shape the workflow.</p><a class="text-link text-link--dark" href="${github}#readme" target="_blank" rel="noreferrer">Read project documentation ${icon('diagonal')}</a></div><div class="requirements-table" role="table" aria-label="Vocalis system requirements"><div class="requirements-head" role="row"><span role="columnheader">WORKFLOW</span><span role="columnheader">WHAT YOU NEED TO KNOW</span></div>${rows.map(([area, need], i) => `<div class="requirement-row" role="row"><span class="requirement-index" role="cell">0${i + 1}</span><strong role="cell">${area}</strong><span class="requirement-copy" role="cell">${need}</span></div>`).join('')}</div></div></section>`;
}

export function FinalCTA() {
  return `<section class="final-cta section-amber" id="download" aria-labelledby="cta-title"><div class="container cta-inner"><div class="cta-topline"><span>VOCALIS / DESKTOP VOICE WORKSPACE</span>${meterMark(true)}</div><div class="cta-main"><div><div class="eyebrow eyebrow--dark"><span class="eyebrow-rule"></span> YOUR VOICE, YOUR WORKFLOW</div><h2 id="cta-title">Make room<br>for <em>your voice.</em></h2></div><div class="cta-action"><p>Get Vocalis from the project releases, or explore the source on GitHub.</p><a class="button button--dark button--large" href="${download}" target="_blank" rel="noreferrer">Download Vocalis ${icon('arrow')}</a><a class="text-link text-link--dark" href="${github}" target="_blank" rel="noreferrer">View the project on GitHub ${icon('diagonal')}</a></div></div><div class="cta-bottomline"><span>DESKTOP / LOCAL GENERATION</span><span>VOCALIS <b>V.</b></span></div></div></section>`;
}

export function Footer() {
  return `<footer class="site-footer section-graphite"><div class="container footer-inner"><div class="footer-main"><a class="wordmark wordmark--footer" href="#top" aria-label="Vocalis home"><span class="brand-sigil" aria-hidden="true">V</span><span>VOCALIS</span></a><p>Voice work, closer to home.</p><a class="footer-up" href="#top">BACK TO TOP ↑</a></div><div class="footer-links"><div><span class="footer-label">EXPLORE</span><a href="#workspace">Workspace</a><a href="#meter">Vocalis Meter</a><a href="#training">Training</a><a href="#requirements">Requirements</a></div><div><span class="footer-label">PROJECT</span><a href="${github}" target="_blank" rel="noreferrer">GitHub ${icon('diagonal')}</a><a href="${download}" target="_blank" rel="noreferrer">Releases ${icon('diagonal')}</a></div></div><div class="footer-bottom"><span>© VOCALIS</span><span>ANODIZED / AMBER</span><span>BUILT FOR DESKTOP</span></div></div></footer>`;
}

export { WorkspacePreview };
