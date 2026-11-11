// Avistar Dashboard — v2.1 sync layer: screens + pattern updates lifted from "Dashboard - Avistar v2".
// Adds: new tokens, a "Dashboard screens" group, and overrides for patterns/cards whose look changed.
// Runtime path migration: icons-glass → icons-3d, mascots → mascots-v4, sidebar glyphs → duo-tone nav glyphs.
import { ic } from './av-components.js';

const NAVF = {"portfolio":["<rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/><path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3\"/><path d=\"M12 12V8\"/>","<rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/>","M7.9 12h2.2"],"clients":["<rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\"/><path d=\"M6 6h.01\"/><path d=\"M6 18h.01\"/>","<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\"/>","M13.9 2h2.2M13.9 22h2.2"],"members":["<path d=\"M16 10h2\"/><path d=\"M16 14h2\"/><path d=\"M6.17 15a3 3 0 0 1 5.66 0\"/><circle cx=\"9\" cy=\"11\" r=\"2\"/><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/>","<rect x=\"2\" y=\"5\" width=\"10\" height=\"14\" rx=\"2\"/>","M10.9 5h2.2M10.9 19h2.2"],"overview":["<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>","<circle cx=\"12\" cy=\"12\" r=\"3\"/>",""],"findings":["<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/>","<path d=\"M4.83 13.5L2.27 18A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3l-2.56-4.5z\"/>","M10.9 21h2.2"],"identities":["<path d=\"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4\"/><path d=\"M14 13.12c0 2.38 0 6.38-1 8.88\"/><path d=\"M17.29 21.02c.12-.6.43-2.3.5-3.02\"/><path d=\"M2 12a10 10 0 0 1 18-6\"/><path d=\"M2 16h.01\"/><path d=\"M21.8 16c.2-2 .131-5.354 0-6\"/><path d=\"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2\"/><path d=\"M8.65 22c.21-.66.45-1.32.57-2\"/><path d=\"M9 6.8a6 6 0 0 1 9 5.2v2\"/>","<circle cx=\"12\" cy=\"13\" r=\"4.5\"/>",""],"scans":["<path d=\"M19.07 4.93A10 10 0 0 0 6.99 3.34\"/><path d=\"M4 6h.01\"/><path d=\"M2.29 9.62A10 10 0 1 0 21.31 8.35\"/><path d=\"M16.24 7.76A6 6 0 1 0 8.23 16.67\"/><path d=\"M12 18h.01\"/><path d=\"M17.99 11.66A6 6 0 0 1 15.77 16.67\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"m13.41 10.59 5.66-5.66\"/>","<path d=\"M12 12L19.07 4.93A10 10 0 0 0 12 2z\"/>",""],"bulletins":["<path d=\"m8 2 1.88 1.88\"/><path d=\"M14.12 3.88 16 2\"/><path d=\"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1\"/><path d=\"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6\"/><path d=\"M12 20v-9\"/><path d=\"M6.53 9C4.6 8.8 3 7.1 3 5\"/><path d=\"M6 13H2\"/><path d=\"M3 21c0-2.1 1.7-3.9 3.8-4\"/><path d=\"M20.97 5c0 2.1-1.6 3.8-3.5 4\"/><path d=\"M22 13h-4\"/><path d=\"M17.2 17c2.1.1 3.8 1.9 3.8 4\"/>","<path d=\"M6 11a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3H6z\"/>","M12 14.9v2.2"],"settings":["<path d=\"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z\"/><circle cx=\"16.5\" cy=\"7.5\" r=\".5\"/>","<circle cx=\"15.5\" cy=\"8.5\" r=\"6.5\"/>",""]};
const X = {
  unplug:'M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4', move:'M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20',
  panel:'M4 4h16v16H4zM9 4v16', swap:'M7 7h11l-3-3M17 17H6l3 3', clock:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  shieldOk:'M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6zM9 12l2 2 4-4', warn:'M12 4l9 16H3zM12 10v4M12 17h.01', send:'M12 19V5M6 11l6-6 6 6',
  lockR:'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4', info:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01', back:'M15 6l-6 6 6 6'
};
const xi = (n, s = 16, w = 1.8) => `<svg class="av-icon" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${X[n]}"/></svg>`;
export const I3N = n => ({ alert:'fix', threat:'fix', fingerprint:'access', identity:'access', key:'access', lock:'access', idcard:'member', members:'member', cloud:'cost3', server:'cost3', bucket:'cost3', clients:'cost3', chip:'connect', network:'connect', settings:'connect', monitor:'report', overview:'report', scan:'blog', magnifier:'blog', bulletin:'guide', clipboard:'guide', shield:'rank' }[n] || 'report');
export const MV4 = n => ({ chip:'clipboard', lock:'key' }[n] || n);
const I = n => `assets/icons-3d/${n}.png`;
const M = n => `assets/mascots-v4/${n}.png`;
const i3 = (n, cls = 'av-i3') => `<img class="${cls}" src="${I(n)}" alt="">`;
const masc = (n, size = '') => `<span class="av-mascot${size ? ' av-mascot--' + size : ''}" style="background-image:url(${M(n)})" aria-hidden="true"></span>`;
const logo = (p, cls = '') => p === 'aws' ? `<img class="av-logo-aws ${cls}" src="assets/logo-aws-dark.svg" alt="AWS">` : `<img class="${cls}" src="assets/logo-${p}.svg" alt="${p === 'gcp' ? 'GCP' : 'Azure'}">`;
export const navGlyph = id => { const f = NAVF[id] || NAVF.overview; return `<svg class="av-nav-glyph" viewBox="0 0 24 24" aria-hidden="true"><g class="av-nav-glyph__hi">${f[1]}</g><g class="av-nav-glyph__line">${f[0]}</g>${f[2] ? `<path class="av-nav-glyph__gap" d="${f[2]}"/>` : ''}</svg>`; };
const NAV = [['portfolio','All clients',null,'Organization'],['clients','Manage clients'],['members','Members'],['overview','Overview',null,'Client'],['findings','Findings','293'],['identities','Identities'],['scans','Scans'],['bulletins','Bulletins','3 new','Intel'],['settings','Settings',null,'Workspace']];
const LABEL_NAV = { 'All clients':'portfolio', 'Manage clients':'clients', 'Members':'members', 'Overview':'overview', 'Findings':'findings', 'Identities':'identities', 'Scans':'scans', 'Bulletins':'bulletins', 'Settings':'settings' };
const MASC_NAV = { magnifier:'overview', shield:'findings', key:'identities', chip:'scans', clipboard:'portfolio', bucket:'clients', idcard:'members' };
const arrow = ic('arrow', 14, 2);

export const TOKENS_ADD = [
  ['Layer','--av-layer-mascot','#F2F1ED','#F2F1ED','Mascot tile backdrop (constant in both themes)'],
  ['Layer','--av-layer-panel-intro','#0D0E10','#FFFFFF','Org settings / create-org panel'],
  ['Layer','--av-layer-gradient-top','#111113','#FFFFFF','Fix card vertical gradient (top)'],
  ['Layer','--av-layer-gradient-bottom','#0D0D0F','#FBFAF8','Fix card vertical gradient (bottom)'],
  ['Layer','--av-layer-report','#F5F3F0','#F5F3F0','Report paper / branding preview'],
  ['Border','--av-border-intro','#2E2E33','#D4D2CE','Intro fields, switchers, mono tags'],
  ['Border','--av-border-card-intro','rgba(255,255,255,.10)','rgba(20,20,20,.10)','Org row, client card, intro tables (solid)'],
  ['Border','--av-border-card-intro-hover','rgba(255,255,255,.45)','rgba(20,20,20,.45)','Intro card hover'],
  ['Border','--av-border-selected-scanner','#1FDDFF','#006A82','Selected scanner tile (1.5px)'],
  ['Text','--av-text-caption','#8A8884','#5E5D59','Graph captions (t3b)'],
  ['Text','--av-text-notice-warning','#E8D3B0','#6B4A10','Read-only / warning notice copy'],
  ['Miscellaneous','--av-pattern-weave','url(assets/patterns/line-weave-white.svg)','url(assets/patterns/line-weave-white.svg)','Card corner texture (36–40px tile)'],
  ['Miscellaneous','--av-pattern-blend','lighten','multiply','Blend mode for line patterns'],
  ['Miscellaneous','--av-fade','rgba(15,15,17,.72)','rgba(255,255,255,.7)','Fade over clipped content'],
  ['Miscellaneous','--av-overlay-dialog','rgba(0,0,0,.55)','rgba(20,20,20,.35)','Help guide / drawer scrim (+3px blur)'],
  ['Miscellaneous','--av-overlay-panel','rgba(0,0,0,.45)','rgba(20,20,20,.25)','Side panel scrim (+2px blur)'],
];
export const BASE_ADD = [
  ['Radius','--av-radius-3xl','20px','Help guide dialog, empty-state art'],
  ['Elevation','--av-shadow-panel','0 24px 60px rgba(0,0,0,.28)','Notifications panel'],
  ['Elevation','--av-shadow-chat','0 30px 80px rgba(0,0,0,.55)','Avistar Buddy chat'],
  ['Elevation','--av-shadow-dialog','0 32px 80px rgba(0,0,0,.45)','Help guide dialog'],
  ['Elevation','--av-shadow-glyph','0 8px 20px rgba(0,0,0,.35)','Mascot glyph on fix cards'],
  ['Layout','--av-drawer-lg','min(560px, 100vw)','Remediate drawer'],
  ['Layout','--av-panel-w','min(480px, 100vw)','Side panel (run scan, schedule, report…)'],
  ['Layout','--av-popover-w','min(400px, calc(100vw - 32px))','Notifications panel'],
  ['Layout','--av-chat-w','min(420px, calc(100vw - 32px))','Avistar Buddy chat'],
];

const KIT_CSS = `.av-mascot{display:block;flex-shrink:0;width:48px;height:48px;border-radius:12px;background:var(--av-layer-mascot) center/cover no-repeat}
.av-mascot--sm{width:36px;height:36px;border-radius:9px}.av-mascot--md{width:56px;height:56px;border-radius:12px}.av-mascot--lg{width:64px;height:64px;border-radius:14px;box-shadow:var(--av-shadow-glyph)}.av-mascot--xl{width:80px;height:80px;border-radius:16px}.av-mascot--2xl{width:96px;height:96px;border-radius:18px}.av-mascot--hero{width:200px;height:200px;border-radius:var(--av-radius-3xl)}
.av-mascot--bare{background-color:transparent;background-size:contain;border-radius:0;box-shadow:none}
.av-i3{display:block;flex-shrink:0;width:40px;height:40px;object-fit:contain}.av-i3--sm{width:24px;height:24px}.av-i3--md{width:36px;height:36px}
[data-theme="light"] .av-logo-aws{content:url(assets/logo-aws.svg)}
.av-nav-glyph{display:block;width:20px;height:20px;flex-shrink:0}
.av-nav-glyph__hi{fill:#1FDDFF}.av-nav-glyph__line{fill:none;stroke:var(--av-icon-primary);stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}.av-nav-glyph__gap{fill:none;stroke:var(--av-background);stroke-width:3}
.av-btn--lg{height:48px;padding:0 24px;font-size:14px;font-weight:500}.av-btn--xl{height:52px;padding:0 28px;font-size:15px;font-weight:500}.av-btn--block{width:100%}
.av-btn--soft-danger{border:1px solid var(--av-button-danger-border);background:var(--av-button-danger);color:var(--av-tag-signal-text);border-radius:8px;padding:0 14px}
.av-status-pill{display:inline-flex;align-items:center;gap:6px;flex-shrink:0;padding:3px 9px;border-radius:var(--av-radius-pill);font-size:11px;white-space:nowrap;background:var(--av-layer-04);color:var(--av-text-helper)}
.av-status-pill::before{content:"";width:6px;height:6px;border-radius:50%;background:currentColor}
.av-status-pill--att{background:var(--av-tag-signal-bg);color:var(--av-border-error)}.av-status-pill--watch{background:var(--av-tag-amber-bg);color:var(--av-support-medium)}.av-status-pill--ok{background:var(--av-tag-ion-bg);color:var(--av-text-info)}
.av-find{display:flex;align-items:center;gap:8px;height:40px;min-width:0;padding:0 12px;border-radius:10px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01);color:var(--av-icon-tertiary)}
.av-find--strong{border-radius:10px;border-color:var(--av-border-strong-01)}.av-find--pill{height:44px;padding:0 14px;border-radius:10px;border-color:var(--av-border-intro);background:var(--av-layer-panel-intro)}
.av-find input{flex:1;min-width:0;border:0;outline:0;background:transparent;color:var(--av-text-primary);font:13px var(--av-font-sans)}
.av-vswitch{display:inline-flex;gap:2px;padding:3px;border-radius:10px;border:1px solid var(--av-border-strong-01);background:var(--av-layer-01)}
.av-vswitch button{display:flex;align-items:center;justify-content:center;gap:6px;height:32px;padding:0 12px;border:0;border-radius:7px;background:transparent;color:var(--av-text-helper);font:500 13px var(--av-font-sans);cursor:pointer;white-space:nowrap}
.av-vswitch button[aria-pressed="true"]{background:var(--av-layer-04);color:var(--av-text-primary)}
.av-vswitch--pill{border-radius:10px;border-color:var(--av-border-intro);background:var(--av-layer-panel-intro)}.av-vswitch--pill button{height:36px;padding:0 14px;border-radius:7px}.av-vswitch--pill button[aria-pressed="true"],.av-vswitch--pill button[aria-selected="true"]{background:var(--av-button-selected);color:var(--av-text-inverse)}
.av-vswitch--block{display:flex}.av-vswitch--block button{flex:1}
.av-filter-tabs{display:inline-flex;flex-wrap:wrap;gap:4px;padding:4px;border-radius:10px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01)}
.av-filter-tabs button{display:flex;align-items:center;gap:8px;height:34px;padding:0 14px;border:0;border-radius:7px;background:transparent;color:var(--av-text-tertiary);font:500 13px var(--av-font-sans);cursor:pointer;white-space:nowrap}
.av-filter-tabs button[aria-selected="true"]{background:var(--av-button-selected);color:var(--av-text-inverse)}.av-filter-tabs .av-mono{font-size:11px;opacity:.7}
.av-utabs{display:flex;gap:24px;border-bottom:1px solid var(--av-border-subtle-00)}
.av-utabs button{display:flex;align-items:center;gap:8px;height:44px;padding:0 2px;margin-bottom:-1px;border:0;border-bottom:2px solid transparent;background:transparent;color:var(--av-text-tertiary);font:500 14px var(--av-font-sans);cursor:pointer}
.av-utabs button[aria-selected="true"]{border-bottom-color:var(--av-text-primary);color:var(--av-text-primary)}
.av-beta{padding:2px 7px;border-radius:999px;background:var(--av-tag-ion-bg);color:var(--av-text-info);font-size:11px}
.av-ifield{display:flex;flex-direction:column;gap:8px;min-width:0;font-size:13px;color:var(--av-text-muted-intro)}
.av-iinput{width:100%;height:48px;padding:0 14px;border-radius:10px;border:1px solid var(--av-border-intro);background:var(--av-layer-intro);color:var(--av-text-primary);font:14px var(--av-font-sans);outline:0;transition:border-color var(--av-duration-base)}
.av-iinput:focus{border-color:var(--av-border-interactive)}.av-iinput:disabled{opacity:.6}
select.av-iinput{padding-right:40px;appearance:none;-webkit-appearance:none;cursor:pointer;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='%238C8A85' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") right 14px center/14px no-repeat,var(--av-layer-intro)}
.av-iinput--sm{height:36px;width:auto;padding:0 32px 0 10px;font-size:13px;background-position:right 10px center,0 0}
.av-ifield__help{font-size:12px;color:var(--av-text-label)}
.av-grid-fit{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:14px}
.av-callout{display:flex;gap:10px;margin:0;padding:12px 14px;border-radius:8px;border:1px solid var(--av-border-intro);background:var(--av-layer-intro);font-size:13px;line-height:1.5;color:var(--av-text-muted-intro)}
.av-callout>.av-icon{flex-shrink:0;margin-top:2px;color:var(--av-text-info)}
.av-callout--warn{border-color:color-mix(in srgb,var(--av-support-medium) 30%,transparent);background:color-mix(in srgb,var(--av-support-medium) 6%,transparent);color:var(--av-text-notice-warning)}.av-callout--warn>.av-icon{color:var(--av-support-medium)}
.av-callout--amber{border-radius:10px;border-color:color-mix(in srgb,var(--av-support-medium) 25%,transparent);background:color-mix(in srgb,var(--av-support-medium) 8%,transparent);color:var(--av-text-secondary)}.av-callout--amber>.av-icon{color:var(--av-support-medium)}
.av-safe{display:flex;align-items:center;gap:10px;margin:0;font-size:13px;color:var(--av-text-tertiary)}.av-safe>.av-icon{flex-shrink:0;color:var(--av-text-info)}
.av-cnt{padding:1px 6px;border-radius:5px;font:500 11px var(--av-font-mono);background:var(--av-layer-04);color:var(--av-text-tertiary)}
.av-cnt--critical{background:var(--av-support-critical-bg);color:var(--av-support-critical)}.av-cnt--high{background:var(--av-support-high-bg);color:var(--av-support-high)}.av-cnt--medium{background:var(--av-support-medium-bg);color:var(--av-support-medium)}.av-cnt--low{background:var(--av-support-low-bg);color:var(--av-support-low)}
.av-chip{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 6px 0 12px;border-radius:999px;background:var(--av-layer-04);font-size:13px;color:var(--av-text-primary)}
.av-chip button{width:22px;height:22px;border:0;border-radius:50%;background:transparent;color:var(--av-text-helper);cursor:pointer;display:flex;align-items:center;justify-content:center}
.av-chip--mono{height:auto;padding:5px 10px;border-radius:7px;font:12px var(--av-font-mono);color:var(--av-text-secondary)}
.av-more-btn{width:36px;height:36px;border:0;border-radius:8px;background:transparent;color:var(--av-text-helper);cursor:pointer;display:flex;align-items:center;justify-content:center}.av-more-btn:hover{background:var(--av-layer-04);color:var(--av-text-primary)}
.av-x-btn{width:36px;height:36px;flex-shrink:0;border:0;border-radius:50%;background:transparent;color:var(--av-text-meta);cursor:pointer;display:flex;align-items:center;justify-content:center}.av-x-btn:hover{color:var(--av-support-critical);background:var(--av-button-danger)}
.av-round-x{width:40px;height:40px;flex-shrink:0;border-radius:999px;border:1px solid var(--av-border-strong-02);background:transparent;color:var(--av-icon-secondary);cursor:pointer;display:flex;align-items:center;justify-content:center}
.av-page-sec{display:flex;flex-direction:column;gap:20px;min-width:0}
.av-ph{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px}
.av-ph__text{display:flex;flex-direction:column;gap:8px;min-width:0}.av-ph__title{margin:0;font-size:clamp(28px,3vw,36px);font-weight:600;letter-spacing:-0.03em;line-height:1.05}.av-ph__sub{margin:0;font-size:15px;color:var(--av-text-tertiary);text-wrap:pretty}
.av-ph__actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px}`;

const statusPill = (t, l) => `<span class="av-status-pill av-status-pill--${t}">${l}</span>`;
const kit = { id:'screen-kit', label:'Screen kit', desc:'Shared v2 primitives used across every dashboard screen. Radius rule: controls (fields, search, segmented groups, filter tabs) = 10px outer / 7px inner; buttons and status pills stay pill; cards 14–16px. Includes mascot tiles (mascots-v4 on a constant #F2F1ED tile), 3D icons (icons-3d), duo-tone nav glyphs, tier status pills, search fields, view switches, underline tabs, intro fields and callouts.',
css:KIT_CSS,
variants:[
 {name:'Mascot tiles', note:'mascots-v4 · sm 36 / 48 / md 56 / lg 64 (fix card, with shadow) / xl 80 (empty) / 2xl 96 / hero 200.', html:`<div class="av-row" style="gap:16px;align-items:flex-end">${masc('magnifier','sm')}${masc('shield')}${masc('bucket','md')}${masc('idcard','lg')}${masc('clipboard','xl')}${masc('key','2xl')}</div>`},
 {name:'Mascot set', html:`<div class="av-row" style="gap:16px">${['magnifier','shield','bucket','clipboard','key','idcard','envelope'].map(n => `<div style="display:flex;flex-direction:column;align-items:center;gap:8px">${masc(n,'xl')}<span class="av-mono" style="font-size:11px;color:var(--av-text-helper)">${n}</span></div>`).join('')}</div>`},
 {name:'3D icons', note:'Card heads 40, stat tiles 36 (margin −6px 0), list tiles 24 inside a 40 tile.', html:`<div class="av-row" style="gap:18px">${['fix','access','cost3','report','blog','guide','rank','connect','member','cost','team','settings'].map(n => `<div style="display:flex;flex-direction:column;align-items:center;gap:6px">${i3(n)}<span class="av-mono" style="font-size:10px;color:var(--av-text-helper)">${n}</span></div>`).join('')}</div>`},
 {name:'Nav glyphs', note:'Line stroke follows --av-icon-primary; Ion highlight fill; gap stroke = canvas colour.', html:`<div class="av-row" style="gap:20px">${NAV.map(n => `<div style="display:flex;flex-direction:column;align-items:center;gap:6px">${navGlyph(n[0])}<span class="av-mono" style="font-size:10px;color:var(--av-text-helper)">${n[0]}</span></div>`).join('')}</div>`},
 {name:'Tier status pills', html:`<div class="av-row" style="gap:8px">${statusPill('att','Needs attention')}${statusPill('watch','Watch')}${statusPill('ok','Healthy')}${statusPill('arch','Archived')}</div>`},
 {name:'Search fields', html:`<div class="av-stack" style="max-width:420px"><label class="av-find">${ic('search',16,1.8)}<input placeholder="Find a client"></label><label class="av-find av-find--strong">${ic('search',16,1.8)}<input placeholder="Search name, ARN or finding"></label><label class="av-find av-find--pill">${ic('search',16,1.8)}<input placeholder="Search clients"></label></div>`},
 {name:'View switch & filter tabs', html:`<div class="av-stack"><div class="av-vswitch"><button aria-pressed="true">${ic('list',15)}List</button><button>${ic('grid',15)}Graph</button></div><div class="av-vswitch av-vswitch--pill"><button aria-pressed="true">${ic('grid',14)}Cards</button><button>${ic('list',14)}List</button></div><div class="av-filter-tabs" role="tablist"><button role="tab" aria-selected="true">All<span class="av-mono">6</span></button><button role="tab">Needs attention<span class="av-mono">2</span></button><button role="tab">Watch<span class="av-mono">2</span></button><button role="tab">Healthy<span class="av-mono">1</span></button></div></div>`},
 {name:'Underline tabs', html:`<div class="av-utabs" role="tablist"><button role="tab" aria-selected="true">Posture</button><button role="tab">Identity<span class="av-beta">Beta</span></button></div>`},
 {name:'Intro fields', note:'48px fields on the intro / org panels. Select carries an inline chevron.', html:`<div class="av-stack" style="max-width:480px;gap:16px"><label class="av-ifield">Organization name *<input class="av-iinput" value="Ridgeway Partners"></label><div class="av-grid-fit"><label class="av-ifield">Industry<select class="av-iinput"><option>Managed security (MSP/MSSP)</option></select></label><label class="av-ifield">Company size<select class="av-iinput"><option>51–200</option></select></label></div><label class="av-ifield">Security contact email<input class="av-iinput" placeholder="security@company.com"><span class="av-ifield__help">Receives critical alerts and weekly posture digests.</span></label></div>`},
 {name:'Callouts', html:`<div class="av-stack" style="max-width:520px"><p class="av-callout">${xi('info',16)}<span>Your first scans are free, no credit card needed.</span></p><p class="av-callout av-callout--warn">${xi('lockR',16)}<span>You’re an analyst here. Only owners and admins can change these settings.</span></p><p class="av-callout av-callout--amber">${xi('warn',16)}<span>Use an External ID to stop confused-deputy access.</span></p><p class="av-safe">${xi('shieldOk',16)}<span>Read-only access. You review every permission before anything is connected.</span></p></div>`},
 {name:'Count pills & chips', html:`<div class="av-row" style="gap:8px"><span class="av-cnt av-cnt--critical">2 C</span><span class="av-cnt av-cnt--high">5 H</span><span class="av-cnt av-cnt--medium">12 M</span><span class="av-cnt av-cnt--low">3 L</span><span class="av-chip">security@acme.com<button aria-label="Remove">${ic('x',12,2.2)}</button></span><span class="av-chip av-chip--mono">prod-uploads</span></div>`},
]};


// ── Shell: sidebar, top bar, account switcher, notifications ──
const navItem = ([id, label, badge], cur) => `<a class="av-nav-item" href="#"${cur ? ' aria-current="page"' : ''}>${navGlyph(id)}<span class="av-nav-item__label">${label}</span>${badge ? `<span class="av-nav-item__badge${id === 'findings' ? ' av-nav-item__badge--alert' : ''}">${badge}</span>` : ''}</a>`;
const sideNav = cur => `<nav class="av-sidebar__nav">\n${NAV.map(n => (n[3] ? `    <span class="av-sidebar__head">${n[3]}</span>\n` : '') + '    ' + navItem(n, n[0] === cur)).join('\n')}\n  </nav>`;
const sideBrand = `<div class="av-sidebar__brand"><img src="assets/mark-shape2.svg" alt="Avistar" width="28" height="25"><span class="av-wordmark" aria-hidden="true"></span></div>`;
const sideFoot = `<div class="av-sidebar__foot"><div class="av-user"><span class="av-avatar">Z</span><span class="av-user__text"><span class="av-user__name">Zalak</span><span class="av-user__mail">zalak@avistar.ai</span></span></div><button class="av-sidebar__action">${xi('panel',18,1.6)}<span class="av-nav-item__label">Collapse</span></button></div>`;
const SIDEBAR_CSS = `.av-sidebar__nav{padding:8px 12px 12px;scrollbar-width:none}
.av-sidebar__head{padding:14px 10px 4px}.av-sidebar__head:first-child{padding-top:6px}
.av-nav-item{gap:11px;height:38px;border-radius:9px;font-size:13.5px;color:var(--av-text-tertiary)}
.av-nav-item .av-nav-glyph{margin:0 1px}
.av-wordmark{display:block;width:92px;height:15px;flex:none;background:url(assets/avistar-wordmark-light.svg) left center/contain no-repeat}
[data-theme="light"] .av-wordmark{background-image:url(assets/avistar-wordmark-ink.svg)}
.av-sidebar--collapsed .av-wordmark{display:none}`;

const ctxBtn = (open) => `<button class="av-ctx-btn" aria-haspopup="dialog" aria-expanded="${open ? 'true' : 'false'}"><span class="av-ctx-btn__org">Avistar Demo Org</span><span class="av-ctx-btn__sep">/</span><span class="av-ctx-btn__client">Hydroponic Cloud</span><span class="av-ctx-btn__sep">/</span>${logo('aws','av-ctx-btn__logo')}<span class="av-ctx-btn__acct">Production Demo</span><span class="av-ctx-btn__chev">${ic('chevDown',14,2)}</span></button>`;
const bell = (dot, open) => `<button class="av-bell" aria-label="Notifications" aria-expanded="${open ? 'true' : 'false'}">${ic('bell',18,1.6)}${dot ? '<span class="av-bell__dot"></span>' : ''}</button>`;
const TOPBAR_CSS = `.av-topbar{padding:0 clamp(1rem,4vw,2rem)}
.av-ctx-btn{display:flex;align-items:center;gap:10px;height:40px;max-width:100%;min-width:0;padding:0 12px;border-radius:10px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01);color:var(--av-text-primary);font:13px var(--av-font-sans);cursor:pointer;transition:border-color var(--av-duration-fast),background var(--av-duration-fast)}
.av-ctx-btn:hover{border-color:var(--av-border-strong-01);background:var(--av-layer-03)}
.av-ctx-btn__org,.av-ctx-btn__client,.av-ctx-btn__acct{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.av-ctx-btn__org{color:var(--av-text-helper);max-width:130px}.av-ctx-btn__client{color:var(--av-text-tertiary);max-width:150px}.av-ctx-btn__acct{font-weight:500;max-width:220px}
.av-ctx-btn__sep{color:var(--av-border-strong-02)}.av-ctx-btn__logo{width:18px;height:18px;flex-shrink:0}
.av-ctx-btn__chev{display:flex;color:var(--av-text-helper);transition:transform .35s cubic-bezier(.3,1.5,.5,1)}.av-ctx-btn[aria-expanded="true"] .av-ctx-btn__chev{transform:rotate(180deg)}
.av-bell{position:relative;width:40px;height:40px;flex-shrink:0;border-radius:10px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01);color:var(--av-icon-secondary);cursor:pointer;display:flex;align-items:center;justify-content:center}
.av-bell:hover,.av-bell[aria-expanded="true"]{color:var(--av-text-primary);border-color:var(--av-border-strong-01)}
.av-bell__dot{position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--av-icon-notify);border:2px solid var(--av-layer-01)}
@container av-root (max-width:640px){.av-ctx-btn__org,.av-ctx-btn__client,.av-ctx-btn__sep{display:none}}`;

const acct = (p, name, sub, score, cls, cur) => `<button class="av-ctx-acct"${cur ? ' aria-current="true"' : ''}><span class="av-ctx-acct__logo">${logo(p)}</span><span class="av-ctx-acct__text"><span class="av-ctx-acct__name">${name}</span><span class="av-ctx-acct__sub">${sub}</span></span><span class="av-ctx-acct__score ${cls}">${score}</span><span class="av-ctx-acct__check">${cur ? ic('check',14,2) : ''}</span></button>`;
const ctxMenu = (empty) => `<div class="av-ctx-menu" role="dialog" aria-label="Switch account">
  <div class="av-ctx-menu__scope">
    <button class="av-ctx-menu__switch" title="Switch organization"><span class="av-ctx-menu__k">Org</span><span class="av-ctx-menu__v">Avistar Demo Org</span>${xi('swap',14)}</button>
    <button class="av-ctx-menu__switch" title="Switch client"><span class="av-ctx-menu__k">Client</span><span class="av-ctx-menu__v">${empty ? 'Zeta Archive' : 'Hydroponic Cloud'}</span>${xi('swap',14)}</button>
  </div>
  <div class="av-ctx-menu__label">Account</div>
  <div class="av-ctx-menu__list">
${empty ? `    <div class="av-ctx-menu__empty">${masc('bucket','sm')}This client is archived and has no accounts.</div>` : `    ${acct('aws','Production Demo','010545334631 · us-east-1','64','av-posture--poor',true)}
    ${acct('azure','Production Azure Tenant','Never scanned','—','av-posture--none')}
    ${acct('gcp','Analytics GCP','hci-analytics-prod','82','av-posture--good')}`}
  </div>
  <div class="av-ctx-menu__foot"><button class="av-ctx-menu__connect">${ic('plus',14,2)}Connect account</button></div>
</div>`;
const CTX_CSS = `.av-ctx-menu{width:min(360px,calc(100vw - 32px));display:flex;flex-direction:column;border:1px solid var(--av-border-strong-01);border-radius:14px;background:linear-gradient(color-mix(in srgb,var(--av-layer-02) 55%,transparent),color-mix(in srgb,var(--av-layer-02) 55%,transparent)),url(assets/patterns/line-core-dim.svg) center top/92px 160px repeat,var(--av-layer-02);box-shadow:var(--av-shadow-modal);overflow:hidden;animation:av-ctx-in .45s var(--av-ease-standard)}
.av-ctx-menu__scope{display:flex;flex-direction:column;padding:6px;border-bottom:1px solid var(--av-border-subtle-00)}
.av-ctx-menu__switch{display:grid;grid-template-columns:52px minmax(0,1fr) 16px;align-items:center;gap:8px;width:100%;height:44px;padding:0 10px;border:0;border-radius:8px;background:transparent;color:var(--av-text-primary);text-align:left;cursor:pointer}
.av-ctx-menu__switch:hover{background:var(--av-layer-05)}
.av-ctx-menu__k,.av-ctx-menu__label{font:10px var(--av-font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--av-text-primary)}
.av-ctx-menu__v{font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.av-ctx-menu__label{padding:10px 16px 2px}
.av-ctx-menu__list{display:flex;flex-direction:column;gap:2px;padding:6px}
.av-ctx-acct{display:flex;align-items:center;gap:10px;width:100%;height:52px;padding:6px 10px;border:0;border-radius:8px;background:transparent;color:var(--av-text-primary);text-align:left;cursor:pointer;transition:background .38s cubic-bezier(.3,1.35,.5,1),box-shadow .38s}
.av-ctx-acct:hover,.av-ctx-acct[aria-current="true"]{background:var(--av-layer-05);box-shadow:inset 0 0 0 1px var(--av-border-subtle-00)}
.av-ctx-acct__logo{width:36px;height:36px;flex-shrink:0;border-radius:9px;background:var(--av-layer-04);border:1px solid var(--av-border-subtle-00);display:flex;align-items:center;justify-content:center;transition:transform .35s var(--av-ease-spring)}
.av-ctx-acct:hover .av-ctx-acct__logo{transform:scale(1.08) rotate(-4deg)}
.av-ctx-acct__logo img{width:20px;height:20px}
.av-ctx-acct__text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.av-ctx-acct__name{font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.av-ctx-acct__sub{font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.av-ctx-acct__score{flex-shrink:0;font:500 13px var(--av-font-mono)}
.av-ctx-acct__check{width:14px;flex-shrink:0;display:flex;color:var(--av-text-info)}.av-ctx-acct__check .av-icon{animation:av-pop .45s cubic-bezier(.3,1.4,.5,1) .12s both}
.av-ctx-menu__empty{display:flex;align-items:center;gap:10px;padding:10px;font-size:13px;line-height:1.5}
.av-ctx-menu__foot{display:flex;gap:16px;padding:4px 16px;border-top:1px solid var(--av-border-subtle-00)}
.av-ctx-menu__connect{display:flex;align-items:center;gap:6px;height:44px;padding:0;border:0;background:transparent;color:var(--av-text-primary);font:500 13px var(--av-font-sans);cursor:pointer}.av-ctx-menu__connect:hover{color:var(--av-link-primary-hover)}
[data-theme="light"] .av-ctx-menu{background:linear-gradient(rgba(255,255,255,.82),rgba(255,255,255,.82)),url(assets/patterns/line-core-ink.svg) center top/92px 160px repeat,var(--av-layer-02);box-shadow:0 24px 60px rgba(20,20,20,.14),0 2px 6px rgba(20,20,20,.06)}
[data-theme="light"] .av-notif,[data-theme="light"] .av-chat,[data-theme="light"] .av-guide{box-shadow:0 24px 60px rgba(20,20,20,.14),0 2px 6px rgba(20,20,20,.06)}`;

const notif = (tag, cls, time, title, sub, ic3, unread) => `<button class="av-notif-item${unread ? ' av-notif-item--unread' : ''}">${i3(ic3,'av-i3 av-i3--md')}<span class="av-notif-item__body"><span class="av-notif-item__meta"><span class="av-notif-item__tag av-notif-item__tag--${cls}">${tag}</span><span class="av-notif-item__time">${time}</span></span><span class="av-notif-item__title">${title}</span><span class="av-notif-item__sub">${sub}</span></span><span class="av-notif-item__dot" aria-hidden="true"></span></button>`;
const notifPanel = (empty) => `<div class="av-notif" role="dialog" aria-label="Notifications">
  <div class="av-notif__head"><span class="av-notif__title">Notifications${empty ? '' : '<span class="av-notif__new">3 new</span>'}</span><button class="av-notif__readall">Mark all as read</button></div>
  <div class="av-notif__tabs"><button aria-pressed="true">All</button><button>Unread</button><button>Critical</button></div>
  <div class="av-notif__list">
${empty ? `    <div class="av-notif__empty">${masc('shield','xl')}<span class="av-notif__empty-t">You're all caught up</span><span class="av-notif__empty-s">New findings and scan results will show here.</span></div>` : [
 notif('Critical','critical','12 min ago','Public write enabled on 2 S3 buckets','prod-uploads and partner-drop accept writes from anyone. Fix in 4 min.','fix',1),
 notif('High','high','1 h ago','52 console users without MFA','Turn on MFA from IAM. About 10 minutes of work.','access',1),
 notif('Scan','scan','2 h ago','Weekly scan finished · score 64 (+6)','293 open findings across 139 resources.','blog',1),
 notif('Bulletin','bulletin','Yesterday','New advisory may affect Production Demo','CVE-2026-1182 · Amazon S3 · matched 2 buckets.','guide'),
 notif('Team','team','Oct 12','Priya joined as Analyst','Invited by Zalak.','member')].map(x => '    ' + x).join('\n')}
  </div>
  <button class="av-notif__foot">Notification settings${arrow}</button>
</div>`;
const NOTIF_CSS = `.av-notif{width:var(--av-popover-w);max-height:min(560px,calc(100vh - 100px));display:flex;flex-direction:column;background:var(--av-layer-01);border:1px solid var(--av-border-strong-01);border-radius:16px;box-shadow:var(--av-shadow-panel);overflow:hidden;animation:av-slide-up .2s var(--av-ease-standard)}
.av-notif__head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 16px 12px}
.av-notif__title{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600}
.av-notif__new{padding:2px 7px;border-radius:999px;background:var(--av-tag-signal-bg);color:var(--av-tag-signal-text);font:500 11px var(--av-font-mono);white-space:nowrap}
.av-notif__readall{height:28px;padding:0;border:0;background:transparent;color:var(--av-text-tertiary);font:12.5px var(--av-font-sans);cursor:pointer}.av-notif__readall:hover{color:var(--av-link-primary-hover)}
.av-notif__tabs{display:flex;gap:4px;padding:0 16px 12px;border-bottom:1px solid var(--av-border-subtle-00)}
.av-notif__tabs button{height:30px;padding:0 12px;border-radius:8px;border:1px solid var(--av-border-subtle-00);background:transparent;color:var(--av-text-tertiary);font:500 12.5px var(--av-font-sans);cursor:pointer}
.av-notif__tabs button[aria-pressed="true"]{border-color:var(--av-button-selected);background:var(--av-button-selected);color:var(--av-text-inverse)}
.av-notif__list{flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column}
.av-notif-item{display:flex;align-items:flex-start;gap:12px;width:100%;padding:14px 16px;border:0;border-bottom:1px solid var(--av-border-subtle-00);background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}
.av-notif-item:hover{background:var(--av-layer-03)}
.av-notif-item--unread{background:color-mix(in srgb,var(--av-support-low) 4%,transparent)}
.av-notif-item__body{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}
.av-notif-item__meta{display:flex;align-items:center;gap:8px}
.av-notif-item__tag{padding:1px 6px;border-radius:4px;border:1px solid color-mix(in srgb,currentColor 33%,transparent);font:10.5px var(--av-font-mono);letter-spacing:.08em;text-transform:uppercase}
.av-notif-item__tag--critical{color:var(--av-support-critical)}.av-notif-item__tag--high{color:var(--av-support-high)}.av-notif-item__tag--scan{color:var(--av-support-low)}.av-notif-item__tag--bulletin{color:var(--av-support-medium)}.av-notif-item__tag--team{color:var(--av-tag-outline-text)}
.av-notif-item__time{font-size:12px;color:var(--av-text-helper)}
.av-notif-item__title{font-size:14px;line-height:1.4;text-wrap:pretty}.av-notif-item--unread .av-notif-item__title{font-weight:600}
.av-notif-item__sub{font-size:12.5px;line-height:1.45;color:var(--av-text-tertiary);text-wrap:pretty}
.av-notif-item__dot{width:8px;height:8px;flex-shrink:0;margin-top:6px;border-radius:50%}.av-notif-item--unread .av-notif-item__dot{background:var(--av-support-low)}
.av-notif__empty{display:flex;flex-direction:column;align-items:center;gap:12px;padding:36px 20px;text-align:center}
.av-notif__empty-t{font-size:14px;font-weight:500}.av-notif__empty-s{font-size:12.5px;color:var(--av-text-helper)}
.av-notif__foot{display:flex;align-items:center;justify-content:space-between;height:48px;padding:0 16px;border:0;background:transparent;color:var(--av-text-secondary);font:13px var(--av-font-sans);cursor:pointer}.av-notif__foot:hover{background:var(--av-layer-03);color:var(--av-text-primary)}`;

const topbar = (dot = true) => `<header class="av-topbar" style="position:relative">
  ${ctxBtn(false)}
  <span class="av-topbar__spacer"></span>
  <button class="av-btn av-btn--primary">${ic('plus',14,2.2)}Connect account</button>
  ${bell(dot)}
</header>`;

const ORG_CSS = `.av-org-row{border:1px solid var(--av-border-card-intro);border-radius:var(--av-radius-2xl);background:transparent}
.av-org-row:hover{border-color:var(--av-border-card-intro-hover);background:var(--av-background-hover)}
.av-org-row[aria-pressed="true"]{border-color:var(--av-border-selected)}
.av-org-row__avatar{width:48px;height:48px;margin:0}
.av-org-row__avatar .av-mascot{width:100%;height:100%}
.av-org-row__init{right:-8px;bottom:-4px;min-width:20px;height:16px;padding:0 4px;border-radius:5px;border-color:var(--av-border-intro);font-size:9px}
.av-org-row .av-tag--role{min-width:88px;height:28px;justify-content:center;border-radius:999px;letter-spacing:.08em}`;
const orgRow = (m, i, c, n, meta, role, sel) => `  <div class="av-org-row" role="button" tabindex="0"${sel ? ' aria-pressed="true"' : ''}>
    <span class="av-org-row__avatar">${masc(m)}<span class="av-org-row__init" style="color:${c}">${i}</span></span>
    <span class="av-org-row__text"><span class="av-org-row__name">${n}</span><span class="av-org-row__meta">${meta}</span></span>
    <span class="av-org-row__actions">${role ? `<span class="av-tag av-tag--mono av-tag--role">${role}</span>` : ''}<button class="av-icon-btn av-icon-btn--round" aria-label="Settings for ${n}">${ic('gear',16,1.7)}</button><button class="av-icon-btn av-icon-btn--arrow"${sel ? ' aria-pressed="true"' : ''} aria-label="Open">${ic(sel ? 'chevDown' : 'arrow',14,2)}</button></span>
  </div>`;

const CLIENT_CSS = `.av-client-card{border:1px solid var(--av-border-card-intro);border-radius:var(--av-radius-2xl)}
.av-client-card:hover{border-color:var(--av-border-card-intro-hover)}
.av-client-table{display:flex;flex-direction:column;border:1px solid var(--av-border-card-intro);border-radius:16px;background:var(--av-layer-intro);overflow-x:auto}
.av-client-table__row{display:grid;grid-template-columns:minmax(200px,2fr) minmax(140px,1.2fr) 90px minmax(200px,1.6fr) 80px;gap:16px;align-items:center;min-width:760px;min-height:64px;padding:10px 20px;border:0;border-bottom:1px solid var(--av-border-divider);background:transparent;color:var(--av-text-primary);font:inherit;text-align:left;cursor:pointer;transition:background .15s}
.av-client-table__row:hover{background:var(--av-layer-intro-hover)}
.av-client-table__row--head{min-height:0;padding:12px 20px;cursor:default;font:10px var(--av-font-mono);letter-spacing:.12em;color:var(--av-text-label)}.av-client-table__row--head:hover{background:transparent}
.av-client-table__name{display:flex;flex-direction:column;gap:2px;min-width:0}.av-client-table__name b{font-size:15px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.av-client-table__name span{font-size:12px;color:var(--av-text-meta)}
.av-client-table__score{font:500 18px var(--av-font-mono);text-align:right}
.av-client-table__status{display:flex;align-items:center;gap:10px;min-width:0;font-size:13px;color:var(--av-text-meta)}`;
const cRow = (n, ind, tags, s, cls, foot, dot) => `  <button class="av-client-table__row"><span class="av-client-table__name"><b>${n}</b><span>${ind}</span></span><span class="av-client-card__tags">${tags.map(t => `<span class="av-tag av-tag--mono">${t}</span>`).join('')}</span><span class="av-client-table__score ${cls}">${s}</span><span class="av-client-table__status"><span class="av-client-card__dot" style="color:${dot}"></span>${foot}</span><span style="font-size:13px;text-align:right">Open →</span></button>`;

const BUDDY_CSS = `.av-buddy{border:1px solid rgba(0,0,0,.08);background:var(--av-layer-mascot);color:#141416;text-shadow:none}
.av-buddy:hover{border-color:rgba(0,0,0,.2)}
.av-buddy img{border-radius:999px}`;
const STORY_CSS = `.av-story{gap:12px;padding:6px 14px 6px 6px;border-radius:12px}
.av-story__media{width:64px;display:flex;align-items:center;justify-content:center;background:transparent}
.av-story__media img{width:78%;height:auto;display:block}
.av-story__link{flex:0 0 auto;display:inline-flex;align-items:center;gap:6px;height:44px;padding:0 4px;border:0;background:transparent;color:var(--av-text-primary);font:500 13px var(--av-font-sans);cursor:pointer;white-space:nowrap;text-decoration:underline;text-underline-offset:4px;text-decoration-color:var(--av-border-strong-02)}
.av-story__link:hover{color:var(--av-link-primary-hover)}`;
const story = (t, d) => `<div class="av-story"><div class="av-story__media" aria-hidden="true"><img src="assets/help-guide-book.png" alt=""></div><div class="av-story__body"><span class="av-story__title">${t}</span><span class="av-story__text">${d}</span></div><button class="av-story__link">Help guide${arrow}</button></div>`;
const EMPTY_CSS = `.av-empty__art{width:80px;height:80px;border-radius:16px;background:var(--av-layer-mascot);object-fit:cover}
.av-empty--inline .av-empty__art{width:44px;height:44px;border-radius:10px}`;


// ── Organization panels (intro) ──
const ORGP_CSS = `.av-org-panel{position:relative;display:flex;flex-direction:column;gap:22px;padding:clamp(28px,3.5vw,44px);border-radius:16px;background:radial-gradient(70% 45% at 50% 0%,color-mix(in srgb,var(--av-support-low) 8%,transparent),transparent 70%),var(--av-layer-panel-intro);animation:av-slide-up .4s var(--av-ease-enter)}
.av-org-panel--create{gap:24px;background:radial-gradient(70% 45% at 50% 0%,color-mix(in srgb,var(--av-support-critical) 10%,transparent),transparent 70%),var(--av-layer-panel-intro)}
.av-org-panel__close{position:absolute;top:16px;right:16px;width:44px;height:44px;border:0;border-radius:50%;background:transparent;color:var(--av-text-meta);cursor:pointer;display:flex;align-items:center;justify-content:center}
.av-org-panel__close:hover{color:var(--av-text-primary);background:var(--av-background-hover)}
.av-org-panel__head{display:flex;align-items:center;gap:14px;padding-right:44px}
.av-org-panel__badge{width:48px;height:48px;flex-shrink:0;border-radius:12px;background:var(--av-layer-05);border:1px solid var(--av-border-intro);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:600}
.av-org-panel__ttl{min-width:0;display:flex;flex-direction:column;gap:4px}
.av-org-panel__name{margin:0;font-size:clamp(22px,2.4vw,30px);font-weight:600;letter-spacing:-0.03em;line-height:1.1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.av-org-panel__title{margin:0;font-size:clamp(26px,3vw,36px);font-weight:600;letter-spacing:-0.035em;line-height:1.05}
.av-org-panel__lead{margin:0;font-size:15px;color:var(--av-text-muted-intro)}
.av-org-panel__step{display:flex;flex-direction:column;gap:4px}.av-org-panel__step h3{margin:0;font-size:19px;font-weight:500;letter-spacing:-0.01em}.av-org-panel__step p{margin:0;font-size:14px;line-height:1.5;color:var(--av-text-meta)}
.av-org-panel__actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:10px;padding-top:4px}
.av-org-panel__between{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px}
.av-badge-colors{display:flex;gap:10px}
.av-badge-color{width:36px;height:36px;padding:4px;display:flex;border-radius:50%;border:2px solid transparent;background:var(--av-layer-intro);cursor:pointer}.av-badge-color[aria-pressed="true"]{border-color:var(--av-text-primary)}.av-badge-color span{flex:1;border-radius:50%}
.av-mtable{display:flex;flex-direction:column;border:1px solid var(--av-border-card-intro);border-radius:16px}
.av-mtable__head{display:flex;justify-content:space-between;padding:10px 16px;border-bottom:1px solid var(--av-border-divider);font:10px var(--av-font-mono);letter-spacing:.14em;color:var(--av-text-label)}
.av-mrow{display:flex;align-items:center;gap:12px;min-height:64px;padding:10px 16px;border-bottom:1px solid var(--av-border-divider)}.av-mrow:last-child{border-bottom:0}
.av-mrow__text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.av-mrow__name{font-size:14px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.av-mrow__sub{font-size:12px;color:var(--av-text-meta);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.av-mrow .av-tag--role{padding:3px 8px;border-radius:5px}
.av-zone{display:flex;flex-wrap:wrap;align-items:center;gap:14px;padding:16px;border:1px solid var(--av-border-intro);border-radius:8px}
.av-zone__text{flex:1 1 220px;display:flex;flex-direction:column;gap:4px}.av-zone__t{font-size:14px;font-weight:500}.av-zone__d{font-size:13px;line-height:1.5;color:var(--av-text-meta)}
.av-zone--danger{flex-direction:column;align-items:stretch;border-color:var(--av-button-danger-border);background:color-mix(in srgb,var(--av-support-critical) 5%,transparent)}
.av-zone--danger .av-zone__t{color:var(--av-tag-signal-text)}.av-zone--danger .av-zone__d{color:var(--av-text-muted-intro)}
.av-btn--danger-outline{align-self:flex-start;border:1px solid var(--av-support-critical);color:var(--av-support-critical)}.av-btn--danger-outline:not(:disabled):hover{background:var(--av-support-critical);color:var(--av-text-on-color)}
.av-self-card{display:flex;align-items:center;gap:14px;width:100%;padding:14px 16px;border:1px solid color-mix(in srgb,var(--av-support-low) 28%,transparent);border-radius:8px;background:color-mix(in srgb,var(--av-support-low) 6%,transparent);color:var(--av-text-primary);font:inherit;text-align:left;cursor:pointer;transition:border-color .2s,background .2s}
.av-self-card:hover{border-color:color-mix(in srgb,var(--av-support-low) 60%,transparent);background:color-mix(in srgb,var(--av-support-low) 10%,transparent)}
.av-self-card__mark{width:40px;height:40px;flex-shrink:0;border-radius:10px;background:var(--av-layer-05);border:1px solid var(--av-border-intro);display:flex;align-items:center;justify-content:center}.av-self-card__mark img{width:20px;height:18px}
.av-self-card__text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.av-self-card__text b{font-size:14px;font-weight:500}.av-self-card__text span{font-size:13px;color:var(--av-text-meta)}
.av-self-card>.av-icon{color:var(--av-text-info)}`;
const opHead = `<button class="av-org-panel__close" aria-label="Close settings">${ic('x',16,2)}</button>
  <div class="av-org-panel__head"><span class="av-org-panel__badge" style="color:var(--av-support-critical)">AD</span><div class="av-org-panel__ttl"><span class="av-eyebrow" style="color:var(--av-text-label)">Organization settings</span><h2 class="av-org-panel__name">Avistar Demo Org</h2></div></div>`;
const opTabs = on => `<div class="av-vswitch av-vswitch--pill" role="tablist" style="align-self:flex-start">${['General','Members','Danger zone'].map(t => `<button role="tab" aria-selected="${t === on}">${t}</button>`).join('')}</div>`;
const sel = (label, val) => `<label class="av-ifield">${label}<select class="av-iinput"><option>${val}</option></select></label>`;
const mrow = (i, c, n, s, role, edit) => `<div class="av-mrow"><span class="av-avatar av-avatar--md" style="color:${c}">${i}</span><span class="av-mrow__text"><span class="av-mrow__name">${n}</span><span class="av-mrow__sub">${s}</span></span>${edit ? `<select class="av-iinput av-iinput--sm" aria-label="Role"><option>${role}</option></select><button class="av-x-btn" aria-label="Remove member">${ic('x',14,2)}</button>` : `<span class="av-tag av-tag--mono av-tag--role">${role.toUpperCase()}</span>`}</div>`;
const orgPanel = { id:'org-panel', label:'Organization panels', desc:'Right-hand intro panel opened from an org row’s gear (Settings: General · Members · Danger zone) or from “Create organization” (two steps). Ion glow for settings, Signal glow for create. Fields are 48px intro fields.',
css:ORGP_CSS,
variants:[
 {name:'Settings · General', html:`<div class="av-org-panel">${opHead}
  ${opTabs('General')}
  <div class="av-stack" style="gap:16px">
    <label class="av-ifield">Organization name *<input class="av-iinput" value="Avistar Demo Org"></label>
    <div class="av-grid-fit">${sel('Industry','Managed security (MSP/MSSP)')}${sel('Company size','51–200')}</div>
    <label class="av-ifield">Security contact email<input class="av-iinput" type="email" placeholder="security@company.com"><span class="av-ifield__help">Receives critical alerts and weekly posture digests.</span></label>
    <div class="av-grid-fit">${sel('Data region','US East')}${sel('Default scan schedule','Every 6 hours')}</div>
    <div class="av-ifield">Badge color<div class="av-badge-colors">${['#FF4B1F','#1FDDFF','#FFB547','#3DDC97'].map((c, i) => `<button class="av-badge-color" aria-label="${c}" aria-pressed="${!i}"><span style="background:${c}"></span></button>`).join('')}</div></div>
    <div class="av-org-panel__actions"><button class="av-btn av-btn--secondary av-btn--lg">Discard</button><button class="av-btn av-btn--primary av-btn--lg">Save changes</button></div>
  </div>
</div>`},
 {name:'Settings · Members', html:`<div class="av-org-panel">${opHead}
  ${opTabs('Members')}
  <div class="av-row" style="gap:10px"><input class="av-iinput" type="email" placeholder="name@company.com" style="flex:1 1 220px;width:auto"><select class="av-iinput" style="flex:0 0 140px;width:140px"><option>Analyst</option></select><button class="av-btn av-btn--primary av-btn--lg">Invite</button></div>
  <div class="av-mtable"><div class="av-mtable__head"><span>4 MEMBERS</span><span>ROLE</span></div>
    ${mrow('Z','var(--av-text-info)','Zalak Patel','zalak@avistar.ai · you','Owner')}
    ${mrow('MR','var(--av-support-medium)','Maya Ruiz','maya@avistar.ai','Admin',true)}
    ${mrow('PK','var(--av-support-high)','Priya Kumar','priya@avistar.ai','Analyst',true)}
  </div>
</div>`},
 {name:'Settings · Danger zone', html:`<div class="av-org-panel">${opHead}
  ${opTabs('Danger zone')}
  <div class="av-stack" style="gap:14px">
    <div class="av-zone"><div class="av-zone__text"><span class="av-zone__t">Leave organization</span><span class="av-zone__d">Transfer ownership first — you’re the only owner.</span></div><button class="av-btn av-btn--secondary av-btn--lg" disabled>Leave</button></div>
    <div class="av-zone"><div class="av-zone__text"><span class="av-zone__t">Archive organization</span><span class="av-zone__d">Pauses all scans and hides it from this list. Restore any time from Billing.</span></div><button class="av-btn av-btn--secondary av-btn--lg">Archive</button></div>
    <div class="av-zone av-zone--danger"><div class="av-zone__text"><span class="av-zone__t">Delete organization</span><span class="av-zone__d">Permanently deletes 10 clients, their scan history and all reports. This can’t be undone.</span></div><label class="av-ifield">Type <strong style="color:var(--av-text-primary);font-weight:500">Avistar Demo Org</strong> to confirm<input class="av-iinput"></label><button class="av-btn av-btn--lg av-btn--danger-outline" disabled>Delete organization</button></div>
  </div>
</div>`},
 {name:'Settings · Read-only', note:'Analysts and viewers see a lock callout; fields are disabled and actions hidden.', html:`<div class="av-org-panel">${opHead}
  ${opTabs('General')}
  <p class="av-callout av-callout--warn">${xi('lockR',16)}<span>You’re an analyst here. Only owners and admins can change these settings.</span></p>
  <label class="av-ifield">Organization name *<input class="av-iinput" value="Avistar Demo Org" disabled></label>
</div>`},
 {name:'Create · Step 1', html:`<div class="av-org-panel av-org-panel--create"><button class="av-org-panel__close" aria-label="Close">${ic('x',16,2)}</button>
  <div class="av-stack" style="gap:10px;align-items:flex-start"><h2 class="av-org-panel__title">Set up a new <span class="av-text-gradient">organization</span></h2><p class="av-org-panel__lead">Two quick steps, then your first scan.</p></div>
  <div class="av-stack" style="gap:18px">
    <div class="av-org-panel__step"><h3>Your organization</h3><p>The MSP or company that manages client security environments.</p></div>
    <label class="av-ifield">Organization name *<input class="av-iinput" placeholder="e.g. Ridgeway Partners"></label>
    <div class="av-grid-fit">${sel('Industry','Select…')}${sel('Company size','Select…')}</div>
    <button class="av-btn av-btn--primary av-btn--xl av-btn--block">Continue${ic('arrow',16,2)}</button>
  </div>
</div>`},
 {name:'Create · Step 2', html:`<div class="av-org-panel av-org-panel--create"><button class="av-org-panel__close" aria-label="Close">${ic('x',16,2)}</button>
  <div class="av-stack" style="gap:10px;align-items:flex-start"><h2 class="av-org-panel__title">Set up a new <span class="av-text-gradient">organization</span></h2><p class="av-org-panel__lead">Two quick steps, then your first scan.</p></div>
  <div class="av-stack" style="gap:18px">
    <div class="av-org-panel__step"><h3>Add your first client</h3><p>A client is an organization whose cloud security you manage. You can add more later.</p></div>
    <button class="av-self-card"><span class="av-self-card__mark"><img src="assets/mark-shape2.svg" alt=""></span><span class="av-self-card__text"><b>Scanning your own infrastructure?</b><span>Add “Ridgeway Partners” as your first client. Rename it any time.</span></span>${ic('arrow',16,2)}</button>
    <label class="av-ifield">Client name *<input class="av-iinput" placeholder="e.g. Acme Corp"></label>
    <div class="av-grid-fit">${sel('Client type','External')}${sel('Industry','Optional')}</div>
    <p class="av-callout">${xi('info',16)}<span>Your first scans are free, no credit card needed. Connect a cloud account, review findings, and upgrade from Billing when you’re ready.</span></p>
    <div class="av-org-panel__between"><button class="av-btn av-btn--ghost" style="height:44px;padding:0 4px;color:var(--av-text-muted-intro)">${ic('arrowLeft',16,2)}Back</button><button class="av-btn av-btn--primary av-btn--xl">Finish &amp; start scanning${ic('arrow',16,2)}</button></div>
  </div>
</div>`},
]};

// ── Portfolio (All clients) ──
const PF_CSS = `.av-kpi-strip{position:relative;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));background:var(--av-layer-01);border:1px solid var(--av-border-subtle-00);border-radius:16px;overflow:hidden;isolation:isolate}
.av-kpi-strip .av-weave{z-index:-1;width:200px;height:150px;background-size:36px auto;opacity:.5}
.av-kpi-strip__cell{display:flex;flex-direction:column;gap:12px;padding:20px;box-shadow:var(--av-shadow-hairline)}
.av-kpi-strip__label{display:flex;align-items:center;gap:10px;font-size:13px;color:var(--av-text-secondary)}.av-kpi-strip__label img{width:24px;height:24px}
.av-kpi-strip__value{display:flex;align-items:baseline;flex-wrap:wrap;gap:8px}.av-kpi-strip__num{font-size:34px;font-weight:600;letter-spacing:-0.035em;line-height:1;font-variant-numeric:tabular-nums}.av-kpi-strip__unit{font-size:12px;color:var(--av-text-helper)}
.av-card-head-m{display:flex;align-items:center;gap:12px}.av-card-head-m .av-mascot{width:52px;height:52px;margin:-8px 0 -8px -6px}
.av-card-head-m__t{display:flex;flex-direction:column;gap:2px}.av-card-head-m__t b{font-size:16px;font-weight:600;letter-spacing:-0.01em}.av-card-head-m__t span{font-size:13px;color:var(--av-text-helper)}
.av-focus-row{display:grid;grid-template-columns:28px minmax(0,1fr) auto;align-items:center;gap:14px;width:100%;min-height:72px;padding:12px 4px;border:0;border-top:1px solid var(--av-border-subtle-00);background:transparent;color:var(--av-text-primary);font:inherit;text-align:left;cursor:pointer}
.av-focus-row:hover{background:var(--av-layer-02)}
.av-focus-row__rank{width:28px;height:28px;border-radius:50%;border:1.5px solid var(--av-border-strong-02);display:flex;align-items:center;justify-content:center;font:11px var(--av-font-mono);color:var(--av-text-tertiary)}
.av-focus-row__body{display:flex;flex-direction:column;gap:4px;min-width:0}.av-focus-row__name{display:flex;flex-wrap:wrap;align-items:center;gap:10px;font-size:15px;font-weight:600}
.av-focus-row__fix{font-size:13px;color:var(--av-text-tertiary)}.av-focus-row__fix span{color:var(--av-text-helper)}
.av-focus-row__end{display:flex;align-items:center;gap:14px;color:var(--av-text-helper)}.av-focus-row__score{display:flex;flex-direction:column;align-items:flex-end;gap:2px;font:500 20px var(--av-font-mono)}.av-focus-row__score small{font-size:11px;color:var(--av-text-info)}
.av-stale{display:flex;flex-direction:column}.av-stale__row{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid var(--av-layer-05);font-size:13px;color:var(--av-text-secondary)}.av-stale__row span:last-child{font:12px var(--av-font-mono);color:var(--av-support-medium);white-space:nowrap}
.av-pcard-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,280px),1fr));gap:12px}
.av-pcard{position:relative;overflow:hidden;isolation:isolate;display:flex;flex-direction:column;gap:16px;width:100%;padding:20px;border-radius:16px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01);color:var(--av-text-primary);font:inherit;text-align:left;cursor:pointer;transition:border-color .2s,transform .2s}
.av-pcard:hover{border-color:var(--av-border-strong-02);transform:translateY(-1px)}.av-pcard:disabled{opacity:.55;cursor:default;transform:none}
.av-pcard .av-weave{z-index:-1;width:200px;height:150px;background-size:36px auto;opacity:.5}
.av-pcard--att{background:radial-gradient(120% 100% at 100% 0%,color-mix(in srgb,var(--av-support-critical) 14%,transparent),transparent 60%),var(--av-layer-01)}
.av-pcard--watch{background:radial-gradient(120% 100% at 100% 0%,color-mix(in srgb,var(--av-support-medium) 10%,transparent),transparent 60%),var(--av-layer-01)}
.av-pcard--ok{background:radial-gradient(120% 100% at 100% 0%,color-mix(in srgb,var(--av-support-low) 8%,transparent),transparent 60%),var(--av-layer-01)}
.av-pcard__top{display:flex;align-items:center;gap:12px}.av-pcard__id{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}.av-pcard__name{font-size:16px;font-weight:600;letter-spacing:-0.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.av-pcard__ind{font-size:12px;color:var(--av-text-helper)}
.av-pcard__score{display:flex;align-items:baseline;gap:10px}.av-pcard__num{font-size:36px;font-weight:600;letter-spacing:-0.035em;line-height:1;font-variant-numeric:tabular-nums}.av-pcard__lbl{font-size:12px;color:var(--av-text-helper)}.av-pcard__trend{margin-left:auto;font:12px var(--av-font-mono)}
.av-pcard__bar{height:4px;border-radius:2px;background:var(--av-layer-04);overflow:hidden}.av-pcard__bar span{display:block;height:100%;border-radius:2px;background:currentColor}
.av-pcard__stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}.av-pcard__stats span{display:flex;flex-direction:column;gap:2px;font-size:11px;color:var(--av-text-helper)}.av-pcard__stats b{font-size:14px;font-weight:600;color:var(--av-text-primary);font-variant-numeric:tabular-nums;white-space:nowrap}
.av-pcard__foot{display:flex;align-items:center;gap:8px;padding-top:14px;border-top:1px solid var(--av-border-subtle-00)}
.av-logo-tile{width:30px;height:30px;border-radius:8px;background:var(--av-layer-03);border:1px solid var(--av-border-subtle-00);display:flex;align-items:center;justify-content:center}.av-logo-tile img{width:18px;height:18px}
.av-pcard__cta{margin-left:auto;display:flex;align-items:center;gap:6px;font-size:13px;font-weight:500;color:var(--av-text-secondary)}`;
const pcard = (t, n, ind, st, sc, cls, tr, trc, pct, crit, open, age, ageAmb, provs, cta) => `  <button class="av-pcard av-pcard--${t}"${t === 'arch' ? ' disabled' : ''}>${t === 'att' ? '<span class="av-weave" aria-hidden="true"></span>' : ''}
    <span class="av-pcard__top"><span class="av-pcard__id"><span class="av-pcard__name">${n}</span><span class="av-pcard__ind">${ind}</span></span>${statusPill(t, st)}</span>
    <span class="av-stack" style="gap:8px"><span class="av-pcard__score"><span class="av-pcard__num ${cls}">${sc}</span><span class="av-pcard__lbl">posture</span><span class="av-pcard__trend" style="color:${trc}">${tr}</span></span><span class="av-pcard__bar ${cls}"><span style="width:${pct}%"></span></span></span>
    <span class="av-pcard__stats"><span>Critical<b>${crit}</b></span><span>Open<b>${open}</b></span><span>Last scan<b${ageAmb ? ' style="color:var(--av-support-medium)"' : ''}>${age}</b></span></span>
    <span class="av-pcard__foot">${provs.map(p => `<span class="av-logo-tile" title="${p}">${logo(p)}</span>`).join('')}<span class="av-pcard__cta">${cta}${arrow}</span></span>
  </button>`;
const kpiCell = (g, l, v, u, c) => `<div class="av-kpi-strip__cell"><span class="av-kpi-strip__label"><img src="${I(g)}" alt="">${l}</span><span class="av-kpi-strip__value"><span class="av-kpi-strip__num"${c ? ` style="color:${c}"` : ''}>${v}</span><span class="av-kpi-strip__unit">${u}</span></span></div>`;
const focus = (r, n, t, st, fix, why, sc, cls, gain) => `<button class="av-focus-row"><span class="av-focus-row__rank">${r}</span><span class="av-focus-row__body"><span class="av-focus-row__name">${n}${statusPill(t, st)}</span><span class="av-focus-row__fix">${fix} <span>· ${why}</span></span></span><span class="av-focus-row__end"><span class="av-focus-row__score"><span class="${cls}">${sc}</span><small>${gain}</small></span>${arrow}</span></button>`;
const portfolio = { id:'portfolio', label:'Portfolio · All clients', desc:'Organization-level home: KPI strip, “Start here” (lowest scores first, one fix each), stale scans, advisories, tier filter tabs and client score cards with a tier flare (attention cards also get the weave).',
css:PF_CSS,
variants:[
 {name:'Page header', html:`<div class="av-ph"><div class="av-ph__text"><span class="av-eyebrow">Avistar Demo Org</span><h1 class="av-ph__title">All clients</h1><p class="av-ph__sub">6 clients · 14 cloud accounts · average posture 68</p></div><div class="av-ph__actions"><button class="av-btn av-btn--secondary">Portfolio report</button><button class="av-btn av-btn--primary">${ic('plus',14,2)}Add client</button></div></div>`},
 {name:'KPI strip', html:`<div class="av-kpi-strip"><div class="av-weave" aria-hidden="true"></div>${kpiCell('cost3','Clients','6','active')}${kpiCell('rank','Avg posture','68','/ 100')}${kpiCell('fix','Critical open','14','across 4 clients','var(--av-support-critical)')}${kpiCell('blog','Stale scans','2','5h+','var(--av-support-medium)')}</div>`},
 {name:'Start here + side cards', html:`<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:stretch">
  <div class="av-box" style="flex:2 1 min(100%,520px)"><div class="av-chead av-chead--m"><span class="av-chead__id">${masc('magnifier','lg')}<span class="av-stack" style="gap:2px"><h2>Start here</h2><span>Lowest scores first. One fix each.</span></span></span></div>
    <div class="av-stack" style="gap:0">${focus(1,'Northwind Commerce','att','Needs attention','Block public write on 2 buckets','2 critical','48','av-posture--poor','+7')}${focus(2,'Hydroponic Cloud','att','Needs attention','Turn on MFA for 52 users','52 high','64','av-posture--poor','+5')}${focus(3,'Acme Health','watch','Watch','Require HTTPS on 31 endpoints','scan 6h old','72','av-posture--fair','+3')}</div></div>
  <div style="flex:1 1 300px;min-width:0;display:flex;flex-direction:column;gap:16px">
    <div class="av-card" style="gap:14px;flex:1"><div class="av-weave" aria-hidden="true"></div><span class="av-card-head-m">${masc('clipboard','lg')}<span class="av-card-head-m__t"><b>Stale scans</b><span>Clients not scanned in 5h+</span></span></span><div class="av-stale"><div class="av-stale__row"><span>Acme Health</span><span>6h ago</span></div><div class="av-stale__row"><span>Tidewell Logistics</span><span>2d ago</span></div></div><button class="av-btn av-btn--secondary" style="align-self:flex-start">Scan all now</button></div>
    <div class="av-card" style="gap:14px"><div class="av-weave" aria-hidden="true"></div><span class="av-card__head">${i3('guide')}<span class="av-card__heading"><span class="av-card__title" style="font-size:16px">3 new advisories</span><span class="av-card__sub">May affect clients on AWS and Azure</span></span></span><button class="av-btn av-btn--secondary" style="align-self:flex-start">Review bulletins${arrow}</button></div>
  </div>
</div>`},
 {name:'Filter bar', html:`<div class="av-row" style="gap:12px"><div class="av-filter-tabs" role="tablist"><button role="tab" aria-selected="true">All<span class="av-mono">6</span></button><button role="tab">Needs attention<span class="av-mono">2</span></button><button role="tab">Watch<span class="av-mono">2</span></button><button role="tab">Healthy<span class="av-mono">1</span></button></div><label class="av-find" style="margin-left:auto;flex:0 1 280px">${ic('search',16,1.8)}<input placeholder="Find a client"></label></div>`},
 {name:'Client score cards', html:`<div class="av-pcard-grid">
${pcard('att','Northwind Commerce','Retail','Needs attention','48','av-posture--poor','▼ 6','var(--av-border-error)',48,'5','112','2h',false,['aws','gcp'],'Open dashboard')}
${pcard('watch','Acme Health','Healthcare','Watch','72','av-posture--fair','▲ 2','var(--av-text-info)',72,'1','41','6h',true,['azure'],'Open dashboard')}
${pcard('ok','Ridgeway Labs','Technology / SaaS','Healthy','88','av-posture--good','▲ 4','var(--av-text-info)',88,'0','9','1h',false,['aws','azure','gcp'],'Open dashboard')}
${pcard('arch','Zeta Archive','Logistics','Archived','—','av-posture--none','—','var(--av-text-helper)',0,'0','0','—',false,['aws'],'Archived')}
</div>`},
 {name:'No results', html:`<p class="av-empty" style="margin:0;border-color:var(--av-border-subtle-01);border-radius:14px">${masc('magnifier','xl')}No clients match.</p>`},
]};


// ── Connect account wizard ──
const CX_CSS = `.av-wiz{display:flex;flex-direction:column;gap:28px;max-width:960px}
.av-wiz__prog{display:flex;gap:6px;min-width:0}
.av-wiz__step{display:flex;flex-direction:column;gap:6px;width:clamp(56px,12vw,120px)}
.av-wiz__bar{height:3px;border-radius:2px;background:var(--av-border-strong-01);transition:background .3s}
.av-wiz__lbl{font:10px var(--av-font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--av-text-helper);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.av-wiz__step--done .av-wiz__bar{background:var(--av-support-low)}.av-wiz__step--current .av-wiz__bar{background:var(--av-text-primary)}.av-wiz__step--current .av-wiz__lbl{color:var(--av-text-primary)}
.av-wiz__head{display:flex;flex-direction:column;gap:10px}
.av-wiz__eyebrow{display:flex;align-items:center;gap:10px}.av-wiz__eyebrow img{width:18px;height:18px}
.av-wiz__title{margin:0;font-size:clamp(28px,3.4vw,40px);font-weight:600;letter-spacing:-0.035em;line-height:1.05;text-wrap:balance}
.av-wiz__sub{margin:0;max-width:36em;font-size:15px;line-height:1.55;color:var(--av-text-tertiary);text-wrap:pretty}
.av-prov-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,230px),1fr));gap:12px}
.av-prov-card{position:relative;overflow:hidden;isolation:isolate;display:flex;flex-direction:column;align-items:flex-start;gap:16px;width:100%;min-height:200px;padding:22px;border-radius:16px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01);color:var(--av-text-primary);font:inherit;text-align:left;cursor:pointer;transition:border-color .2s,background .2s,transform .2s}
.av-prov-card:hover{border-color:var(--av-border-strong-02);transform:translateY(-1px)}
.av-prov-card .av-weave{z-index:-1;width:200px;height:150px;background-size:36px auto;opacity:.5}
.av-prov-card--aws{background:radial-gradient(110% 90% at 100% 0%,var(--av-background-glow-amber),transparent 60%),var(--av-layer-01)}
.av-prov-card--azure{background:radial-gradient(110% 90% at 100% 0%,var(--av-background-glow-ion),transparent 60%),var(--av-layer-01)}
.av-prov-card--gcp{background:radial-gradient(110% 90% at 100% 0%,var(--av-background-glow-signal),transparent 60%),var(--av-layer-01)}
.av-prov-card__logo{width:56px;height:56px;flex-shrink:0;border-radius:14px;background:var(--av-layer-03);border:1px solid var(--av-border-subtle-01);display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(0,0,0,.18)}.av-prov-card__logo img{width:32px;height:32px}
.av-prov-card__text{flex:1;display:flex;flex-direction:column;gap:3px}.av-prov-card__text b{font-size:16px;font-weight:600;letter-spacing:-0.01em}.av-prov-card__text span{font-size:13px;color:var(--av-text-helper)}
.av-prov-card__foot{margin-top:auto;width:100%;display:flex;align-items:center;gap:6px;padding-top:14px;border-top:1px solid var(--av-border-subtle-00);font:11px var(--av-font-mono);color:var(--av-text-helper);white-space:nowrap}.av-prov-card__foot>.av-icon:last-child{margin-left:auto}
.av-method-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:10px}
.av-method{display:flex;flex-direction:column;gap:6px;padding:16px 18px;border-radius:14px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01);color:var(--av-text-primary);font:inherit;text-align:left;cursor:pointer;transition:border-color .2s,background .2s}
.av-method[aria-checked="true"]{border-color:var(--av-border-interactive);background:color-mix(in srgb,var(--av-support-low) 6%,var(--av-layer-01))}
.av-method__top{display:flex;align-items:center;gap:8px}.av-method__top b{font-size:15px;font-weight:600}.av-method__top img{width:22px;height:22px}
.av-method__radio{width:18px;height:18px;flex-shrink:0;border-radius:50%;border:1.5px solid var(--av-border-strong-02);display:flex;align-items:center;justify-content:center}
.av-method[aria-checked="true"] .av-method__radio{border-color:var(--av-border-interactive)}.av-method[aria-checked="true"] .av-method__radio::after{content:"";width:8px;height:8px;border-radius:50%;background:var(--av-border-interactive)}
.av-method__rec{padding:2px 6px;border-radius:4px;background:color-mix(in srgb,var(--av-support-critical) 12%,transparent);color:var(--av-border-error);font:10px var(--av-font-mono);letter-spacing:.08em}
.av-method__time{margin-left:auto;font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-method__sub{padding-left:26px;font-size:13px;line-height:1.45;color:var(--av-text-tertiary)}
.av-box{border-radius:14px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01);overflow:hidden}
.av-cov__head{display:flex;align-items:center;gap:12px;width:100%;min-height:56px;padding:12px 18px;border:0;background:transparent;color:var(--av-text-primary);font:inherit;text-align:left;cursor:pointer}.av-cov__head>.av-icon:first-child{color:var(--av-text-info)}
.av-cov__t{flex:1;display:flex;flex-direction:column;gap:2px}.av-cov__t b{font-size:14px;font-weight:600}.av-cov__t span{font-size:12px;color:var(--av-text-helper)}
.av-check-row{display:flex;align-items:flex-start;gap:12px;width:100%;padding:12px 18px;border:0;border-top:1px solid var(--av-border-subtle-00);background:transparent;color:var(--av-text-primary);font:inherit;text-align:left;cursor:pointer}.av-check-row:hover{background:var(--av-layer-02)}
.av-check-row__box{width:18px;height:18px;margin-top:1px;flex-shrink:0;border-radius:5px;border:1.5px solid var(--av-border-strong-02);color:transparent;display:flex;align-items:center;justify-content:center}
.av-check-row[aria-checked="true"] .av-check-row__box{border-color:var(--av-support-low);background:var(--av-support-low);color:var(--av-text-inverse)}
.av-check-row__t{flex:1;display:flex;flex-direction:column;gap:2px}.av-check-row__t b{font-size:14px;font-weight:500}.av-check-row__t span{font-size:12px;line-height:1.45;color:var(--av-text-helper)}
.av-setup-steps{list-style:none;margin:0;padding:0}
.av-setup-step{display:flex;gap:14px;padding:18px;border-bottom:1px solid var(--av-border-subtle-00)}.av-setup-step:last-child{border-bottom:0}
.av-setup-step__n{width:28px;height:28px;flex-shrink:0;border-radius:50%;border:1.5px solid var(--av-border-strong-02);background:transparent;color:var(--av-text-tertiary);font:600 11px var(--av-font-mono);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .2s,border-color .2s}
.av-setup-step__n[aria-pressed="true"]{border-color:var(--av-support-low);background:var(--av-support-low);color:var(--av-text-inverse)}
.av-setup-step__body{flex:1;min-width:0;display:flex;flex-direction:column;gap:10px}
.av-setup-step__row{display:flex;flex-wrap:wrap;align-items:center;gap:10px 16px}.av-setup-step__txt{flex:1 1 240px;display:flex;flex-direction:column;gap:3px;padding-top:3px}
.av-setup-step__t{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:600}.av-setup-step__t img{width:22px;height:22px}.av-setup-step__d{font-size:13px;line-height:1.5;color:var(--av-text-helper)}
.av-copy-row{display:flex;align-items:center;gap:10px;min-height:44px;padding:4px 4px 4px 12px;border-radius:10px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-02)}
.av-copy-row__k{min-width:84px;flex-shrink:0;font-size:12px;color:var(--av-text-helper)}.av-copy-row code{flex:1;min-width:0;font:12px var(--av-font-mono);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.av-wiz__foot{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px}.av-wiz__foot>.av-safe,.av-wiz__foot>.av-wiz__note{flex:1 1 220px}.av-wiz__note{font-size:13px;color:var(--av-text-helper)}
.av-verify{display:flex;flex-direction:column;gap:16px;padding:clamp(18px,3vw,28px)}
.av-verify__label{display:flex;align-items:center;gap:10px;font-weight:500;color:var(--av-text-secondary)}.av-verify__label img{width:22px;height:22px}
.av-verify__hint{font-size:12px;color:var(--av-text-helper)}.av-verify__hint--ok{color:var(--av-text-success)}
.av-run-row{display:flex;align-items:center;gap:14px;min-height:60px;padding:12px 18px;border-bottom:1px solid var(--av-border-subtle-00)}.av-run-row:last-child{border-bottom:0}
.av-run-row__mark{width:28px;height:28px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1.5px solid var(--av-border-strong-01);color:transparent}
.av-run-row--done .av-run-row__mark{border-color:var(--av-support-low);background:var(--av-support-low-bg);color:var(--av-support-low)}
.av-run-row--active .av-run-row__mark{border-color:var(--av-support-low);animation:av-pulse 1.2s infinite}
.av-run-row img{width:22px;height:22px}.av-run-row__t{flex:1;font-size:14px}.av-run-row--pending .av-run-row__t{color:var(--av-text-helper)}.av-run-row__s{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-done{display:flex;flex-direction:column;align-items:flex-start;gap:20px;padding:clamp(20px,3vw,32px);background:radial-gradient(60% 80% at 0% 0%,var(--av-background-glow-ion),transparent 70%),var(--av-layer-01);animation:av-slide-up .4s var(--av-ease-enter)}
.av-done__mark{width:56px;height:56px;border-radius:50%;background:var(--av-support-low-bg);color:var(--av-support-low);display:flex;align-items:center;justify-content:center}
.av-done__grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));gap:12px;width:100%}
.av-done__cell{display:flex;flex-direction:column;gap:4px;padding:12px 14px;border-radius:10px;background:var(--av-layer-02);border:1px solid var(--av-border-subtle-00)}.av-done__cell span{font:10px var(--av-font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--av-text-helper)}.av-done__cell b{font-size:14px;font-weight:500}`;
const prog = n => `<nav class="av-wiz__prog" aria-label="Progress">${['Provider','Setup','Verify','Done'].map((l, i) => `<span class="av-wiz__step${i < n ? ' av-wiz__step--done' : i === n ? ' av-wiz__step--current' : ''}"><span class="av-wiz__bar"></span><span class="av-wiz__lbl">${l}</span></span>`).join('')}</nav>`;
const wizHead = (eyebrow, t, s, p) => `<div class="av-wiz__head"><span class="av-eyebrow av-wiz__eyebrow">${p ? logo(p) : ''}${eyebrow}</span><h1 class="av-wiz__title">${t}</h1><p class="av-wiz__sub">${s}</p></div>`;
const prov = (p, n, how, t) => `<button class="av-prov-card av-prov-card--${p}"><span class="av-weave" aria-hidden="true"></span><span class="av-prov-card__logo">${logo(p)}</span><span class="av-prov-card__text"><b>${n}</b><span>${how}</span></span><span class="av-prov-card__foot">${xi('clock',12,2)}${t}${ic('arrow',16,2)}</span></button>`;
const copyRow = (k, v) => `<div class="av-copy-row"><span class="av-copy-row__k">${k}</span><code>${v}</code><button class="av-more-btn" aria-label="Copy ${k}">${ic('copy',14)}</button></div>`;
const connect = { id:'connect-account', label:'Connect account', desc:'Full-page wizard: 4-step progress bars, provider cards with provider flare + weave, AWS setup method radios, scan coverage checklist, numbered setup steps with copy rows, verify field, live checks, success summary.',
css:CX_CSS,
variants:[
 {name:'1 · Pick provider', html:`<section class="av-wiz">${prog(0)}${wizHead('Hydroponic Cloud · new account','Connect a cloud account','Pick where the workloads live. Avistar reads configuration only — it never changes anything.')}
  <div class="av-prov-grid">${prov('aws','Amazon Web Services','CloudFormation stack or IAM role','~5 min')}${prov('azure','Microsoft Azure','App registration with Reader role','~6 min')}${prov('gcp','Google Cloud','Service account with Viewer role','~4 min')}</div>
  <p class="av-safe">${xi('shieldOk',16)}<span>Read-only access. You review every permission before anything is connected.</span></p></section>`},
 {name:'2 · AWS setup', html:`<section class="av-wiz">${prog(1)}${wizHead('Amazon Web Services','Set up read-only access','Launch the stack in your AWS console, then paste the role ARN it outputs.','aws')}
  <div class="av-method-grid" role="radiogroup" aria-label="Setup method"><button class="av-method" role="radio" aria-checked="true"><span class="av-method__top"><span class="av-method__radio"></span><img src="${I('connect')}" alt=""><b>Quick setup</b><span class="av-method__rec">RECOMMENDED</span><span class="av-method__time">~5 min</span></span><span class="av-method__sub">One-click CloudFormation stack creates the role for you.</span></button><button class="av-method" role="radio" aria-checked="false"><span class="av-method__top"><span class="av-method__radio"></span><img src="${I('settings')}" alt=""><b>Manual role</b><span class="av-method__time">~12 min</span></span><span class="av-method__sub">Create the IAM role and trust policy yourself.</span></button></div>
  <div class="av-grid-fit"><label class="av-field"><span class="av-field__label">Account name</span><input class="av-input" placeholder="e.g. Production"></label><label class="av-field"><span class="av-field__label">Primary region</span><select class="av-select"><option>US East (N. Virginia)</option></select></label></div>
  <div class="av-box"><button class="av-cov__head" aria-expanded="true">${xi('shieldOk',16)}<span class="av-cov__t"><b>Scan coverage</b><span>5 of 6 scanners on</span></span><span style="font-size:13px;color:var(--av-text-tertiary)">Hide</span></button>${[['IAM','Users, roles, keys, MFA',1],['S3','Bucket ACLs, policies, versioning',1],['Identity discovery','Classify humans, services and agents',0]].map(([l, s, on]) => `<button class="av-check-row" role="checkbox" aria-checked="${!!on}"><span class="av-check-row__box">${ic('check',12,2.4)}</span><span class="av-check-row__t"><b>${l}</b><span>${s}</span></span></button>`).join('')}</div>
  <ol class="av-box av-setup-steps">
    <li class="av-setup-step"><button class="av-setup-step__n" aria-pressed="true" aria-label="Step 1 done">${ic('check',12,2.4)}</button><div class="av-setup-step__body"><div class="av-setup-step__row"><div class="av-setup-step__txt"><span class="av-setup-step__t"><img src="${I('connect')}" alt="">Launch the stack</span><span class="av-setup-step__d">Opens AWS in a new tab with everything pre-filled.</span></div><button class="av-btn av-btn--secondary">Open AWS console${ic('ext',14,2)}</button></div>${copyRow('External ID','avs-7Hq2-0105-9xKe')}${copyRow('Trust account','4120 9917 3021')}</div></li>
    <li class="av-setup-step"><button class="av-setup-step__n" aria-label="Step 2">2</button><div class="av-setup-step__body"><div class="av-setup-step__row"><div class="av-setup-step__txt"><span class="av-setup-step__t"><img src="${I('access')}" alt="">Copy the role ARN</span><span class="av-setup-step__d">Find it in the stack’s Outputs tab once it finishes.</span></div></div><p class="av-callout av-callout--amber">${xi('warn',16)}<span>Keep the External ID — it stops confused-deputy access to your account.</span></p></div></li>
  </ol>
  <div class="av-wiz__foot"><span class="av-safe">${xi('shieldOk',16)}<span>Read-only. Revoke any time by deleting the stack.</span></span><button class="av-btn av-btn--primary" style="height:44px">Continue to verify${ic('arrow',16,2)}</button></div></section>`},
 {name:'3 · Verify', html:`<section class="av-wiz">${prog(2)}${wizHead('Amazon Web Services','Paste the role ARN','We’ll assume the role once to confirm it’s read-only.','aws')}
  <div class="av-box av-verify"><label class="av-field"><span class="av-verify__label"><img src="${I('access')}" alt="">Role ARN</span><input class="av-input av-input--mono" value="arn:aws:iam::010545334631:role/AvistarReadOnly" spellcheck="false"><span class="av-verify__hint av-verify__hint--ok">Looks right.</span></label></div>
  <div class="av-wiz__foot"><span class="av-wiz__note">Takes about 10 seconds.</span><button class="av-btn av-btn--primary" style="height:44px">Verify &amp; connect${ic('arrow',16,2)}</button></div></section>`},
 {name:'Checks running', html:`<div class="av-box">${[['done','connect','Assumed role','0.8s'],['done','access','Permissions are read-only','1.2s'],['active','blog','Listing regions','…'],['pending','report','Queue first scan','']].map(([s, g, t, v]) => `<div class="av-run-row av-run-row--${s}"><span class="av-run-row__mark">${ic('check',14,2.4)}</span><img src="${I(g)}" alt=""><span class="av-run-row__t">${t}</span><span class="av-run-row__s">${v}</span></div>`).join('')}</div>`},
 {name:'4 · Connected', html:`<div class="av-box av-done"><span class="av-done__mark">${ic('check',26,2.2)}</span><div class="av-done__grid">${[['Account','Production'],['Provider','AWS · us-east-1'],['First scan','Running · ~6 min']].map(([k, v]) => `<div class="av-done__cell"><span>${k}</span><b>${v}</b></div>`).join('')}</div><div class="av-row" style="gap:10px"><button class="av-btn av-btn--primary" style="height:44px">View first scan${ic('arrow',16,2)}</button><button class="av-btn av-btn--secondary" style="height:44px">Connect another</button></div></div>`},
]};

// ── Findings list ──
const FL_CSS = `.av-fmeta{display:flex;flex-wrap:wrap;align-items:center;gap:8px 14px;font-size:13px;color:var(--av-text-tertiary)}
.av-live-pill{display:flex;align-items:center;gap:6px;padding:3px 9px;border-radius:999px;background:var(--av-tag-ion-bg);color:var(--av-text-info);font-size:12px}.av-live-pill::before{content:"";width:6px;height:6px;border-radius:50%;background:currentColor}
.av-ftool{display:flex;flex-wrap:wrap;align-items:center;gap:10px}.av-ftool .av-find{flex:1 1 260px}
.av-fw{display:flex;align-items:center;gap:8px;height:40px;padding:0 4px 0 12px;border-radius:8px;border:1px solid var(--av-border-strong-01);background:var(--av-layer-01);color:var(--av-text-helper);font-size:13px}.av-fw select{height:38px;border:0;outline:0;background:transparent;color:var(--av-text-primary);font:13px var(--av-font-sans);cursor:pointer}
.av-sevf{display:flex;flex-wrap:wrap;gap:6px}
.av-sevf button{display:flex;align-items:center;gap:8px;height:36px;padding:0 12px;border-radius:8px;border:1px solid var(--av-border-strong-01);background:transparent;color:var(--av-text-primary);font:13px var(--av-font-sans);cursor:pointer;transition:all .15s}
.av-sevf button[aria-pressed="true"]{border-color:var(--av-border-strong-02);background:var(--av-layer-04)}
.av-sevf i{width:8px;height:8px;border-radius:50%}.av-sevf .av-mono{font-size:11px;color:var(--av-text-helper)}
.av-flist{position:relative;background:var(--av-layer-01);border:1px solid var(--av-border-subtle-00);border-radius:14px;overflow:hidden;isolation:isolate}
.av-flist .av-weave{z-index:-1;width:200px;height:150px;background-size:36px auto;opacity:.5}
.av-flist__head{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:12px 20px;border-bottom:1px solid var(--av-border-subtle-00)}
.av-flist__head button{border:0;background:transparent;color:var(--av-text-tertiary);font:12px var(--av-font-sans);cursor:pointer;padding:6px 0}
.av-res{border-bottom:1px solid var(--av-layer-05)}
.av-res__row{width:100%;display:grid;grid-template-columns:24px 40px minmax(0,1fr) auto;align-items:center;gap:14px;padding:14px 20px;border:0;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}
.av-res__row:hover,.av-res__row[aria-expanded="true"]{background:var(--av-layer-02)}
.av-res__idx{font:11px var(--av-font-mono);color:var(--av-text-placeholder)}
.av-res__tile{width:40px;height:40px;border-radius:10px;background:var(--av-layer-03);border:1px solid var(--av-border-subtle-01);display:flex;align-items:center;justify-content:center}.av-res__tile img{width:24px;height:24px}
.av-res__main{display:flex;flex-direction:column;gap:4px;min-width:0}.av-res__name{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font-size:14px;font-weight:500}
.av-res__arn{font:11.5px var(--av-font-mono);color:var(--av-text-helper);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.av-res__end{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;gap:10px;font-size:13px;color:var(--av-text-tertiary);white-space:nowrap}
.av-res__type{padding:3px 8px;border-radius:6px;background:var(--av-layer-03);border:1px solid var(--av-border-subtle-01);font:11px var(--av-font-mono)}
.av-res__region{font-size:12px;color:var(--av-text-helper)}
.av-res__chev{display:inline-flex;color:var(--av-text-helper);transition:transform .25s}.av-res__row[aria-expanded="true"] .av-res__chev{transform:rotate(180deg)}
.av-res__kids{display:flex;flex-direction:column;padding:0 20px 14px 78px;animation:av-slide-up .3s var(--av-ease-standard)}
.av-fnode{position:relative;padding-left:34px}
.av-fnode::before{content:"";position:absolute;left:0;top:0;bottom:0;width:1.5px;background:var(--av-border-strong-01)}.av-fnode:last-child::before{display:none}
.av-fnode::after{content:"";position:absolute;left:0;top:0;width:22px;height:22px;border-left:1.5px solid var(--av-border-strong-01);border-bottom:1.5px solid var(--av-border-strong-01);border-bottom-left-radius:10px}
.av-fnode--active::after{border-color:var(--av-border-strong-02)}
.av-fnode__row{display:flex;align-items:center;gap:10px;min-height:44px;padding:0 6px 0 10px;border-radius:10px}.av-fnode--active .av-fnode__row{background:var(--av-layer-03)}
.av-fnode__sel{flex:1;min-width:0;display:flex;align-items:center;gap:10px;height:44px;padding:0;border:0;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}
.av-fnode__dot{--av-sev:var(--av-support-critical);width:8px;height:8px;flex-shrink:0;border-radius:50%;background:var(--av-sev);box-shadow:0 0 0 3px color-mix(in srgb,var(--av-sev) 12%,transparent)}
.av-fnode__dot--high{--av-sev:var(--av-support-high)}.av-fnode__dot--medium{--av-sev:var(--av-support-medium)}.av-fnode__dot--low{--av-sev:var(--av-support-low)}
.av-fnode__t{font-size:14px;color:var(--av-text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.av-fnode--active .av-fnode__t{font-weight:600;color:var(--av-text-primary)}
.av-fnode__code{font:11px var(--av-font-mono);color:var(--av-text-placeholder);white-space:nowrap}
.av-fnode .av-sev-pill{font-size:10.5px;padding:2px 7px;border-radius:5px}
.av-btn--remediate{height:30px;padding:0 12px;font-size:12.5px}
.av-fnode__detail{display:flex;flex-direction:column;gap:12px;padding:6px 6px 14px 28px;animation:av-slide-up .25s var(--av-ease-standard)}
.av-fnode__desc{margin:0;font-size:13.5px;line-height:1.5;color:var(--av-text-secondary);text-wrap:pretty}
.av-fnode__bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px}
.av-fw-dots{display:flex;flex-wrap:wrap;gap:12px}.av-fw-dots span{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--av-text-tertiary)}.av-fw-dots i{width:6px;height:6px;border-radius:50%;background:var(--av-support-low)}
.av-nsteps{display:flex;flex-direction:column;gap:6px}.av-nsteps div{display:grid;grid-template-columns:24px minmax(0,1fr);gap:6px;font-size:13.5px;line-height:1.5;color:var(--av-text-secondary)}.av-nsteps b{font:400 11.5px var(--av-font-mono);color:var(--av-text-placeholder);padding-top:2px}
.av-ref{display:flex;align-items:center;gap:6px;min-width:0;padding-top:2px;font-size:12.5px;color:var(--av-text-primary);text-decoration:none}.av-ref span{color:var(--av-text-helper);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.av-flist__more{display:flex;justify-content:center;padding:14px 20px}`;
const fnode = (sev, t, code, active) => `<div class="av-fnode${active ? ' av-fnode--active' : ''}"><div class="av-fnode__row"><button class="av-fnode__sel"><span class="av-fnode__dot av-fnode__dot--${sev}"></span><span class="av-fnode__t">${t}</span><span class="av-fnode__code">${code}</span></button><span class="av-sev-pill av-sev-pill--${sev}">${sev}</span><button class="av-btn av-btn--primary av-btn--remediate">${ic('spark',13,1.8)}Remediate</button></div>${active ? `<div class="av-fnode__detail"><p class="av-fnode__desc">Anyone on the internet can upload or overwrite objects in this bucket.</p><div class="av-fnode__bar"><div class="av-seg"><button class="av-seg__btn is-on">How to fix</button><button class="av-seg__btn">Evidence</button></div><div class="av-fw-dots"><span><i></i>SOC 2</span><span><i></i>ISO 27001</span><span><i></i>CIS</span></div></div><div class="av-nsteps"><div><b>01</b><span>Turn on Block Public Access for the bucket.</span></div><div><b>02</b><span>Remove the AllUsers and AuthenticatedUsers grants from the ACL.</span></div></div><a class="av-ref" href="#">${ic('ext',13)}docs.aws.amazon.com<span>/AmazonS3/latest/userguide/access-control-block-public-access.html</span></a></div>` : ''}</div>`;
const resRow = (i, g, n, pills, arn, fl, type, reg, open, kids) => `<div class="av-res"><button class="av-res__row" aria-expanded="${!!open}"><span class="av-res__idx">${i}</span><span class="av-res__tile"><img src="${I(g)}" alt=""></span><span class="av-res__main"><span class="av-res__name">${n}${pills}</span><span class="av-res__arn">${arn}</span></span><span class="av-res__end">${fl}<span class="av-res__type">${type}</span><span class="av-res__region">${reg}</span><span class="av-res__chev">${ic('chevDown',16,2)}</span></span></button>${open ? `<div class="av-res__kids">${kids}</div>` : ''}</div>`;
const findings = { id:'findings-list', label:'Findings list', desc:'Findings page: underline tabs (Posture · Identity Beta), live scan meta, toolbar (search, framework, list/graph), severity filter chips, and the resource list — numbered rows with 3D icon tile, count pills, ARN; expanding into a curved finding tree with inline Remediate and a how-to-fix / evidence detail.',
css:FL_CSS,
variants:[
 {name:'Header & tabs', html:`<div class="av-stack" style="gap:20px"><div class="av-ph"><div class="av-ph__text"><span class="av-eyebrow">Production Demo · AWS · 010545334631</span><h1 class="av-ph__title">Findings</h1></div><div class="av-ph__actions" style="gap:8px"><button class="av-btn av-btn--secondary">${ic('download',16,1.6)}Export${ic('chevDown',14,2)}</button><button class="av-btn av-btn--primary">${ic('report',16,1.6)}Generate report</button></div></div><div class="av-utabs" role="tablist"><button role="tab" aria-selected="true">Posture</button><button role="tab">Identity<span class="av-beta">Beta</span></button></div><div class="av-fmeta"><span class="av-live-pill">Scan complete</span><span>Oct 13, 3:33 PM · 6 scanners</span><span class="av-mono" style="font-size:12px;color:var(--av-text-placeholder)">scan_01J9XK…</span></div></div>`},
 {name:'Toolbar & severity filter', html:`<div class="av-stack"><div class="av-ftool"><label class="av-find av-find--strong">${ic('search',16,1.8)}<input placeholder="Search name, ARN or finding"></label><label class="av-fw">Framework<select><option>All</option></select></label><div class="av-vswitch"><button aria-pressed="true">${ic('list',15)}List</button><button>${ic('grid',15)}Graph</button></div></div><div class="av-sevf"><button aria-pressed="true"><i style="background:var(--av-support-critical)"></i>Critical<span class="av-mono">5</span></button><button><i style="background:var(--av-support-high)"></i>High<span class="av-mono">64</span></button><button><i style="background:var(--av-support-medium)"></i>Medium<span class="av-mono">133</span></button><button><i style="background:var(--av-support-low)"></i>Low<span class="av-mono">91</span></button><button class="av-btn av-btn--link" style="height:36px;font-size:13px">Clear</button></div></div>`},
 {name:'Resource list', html:`<div class="av-flist"><div class="av-weave" aria-hidden="true"></div><div class="av-flist__head"><span class="av-eyebrow">139 resources · 293 findings</span><button>Collapse all</button></div>
${resRow('01','cost3','northwind-partner-uploads','<span class="av-cnt av-cnt--critical">2 C</span><span class="av-cnt av-cnt--medium">1 M</span>','arn:aws:s3:::northwind-partner-uploads-402864','3 findings','S3','us-east-1',true, fnode('critical','Public write access via ACL','PUB_WRITE',true) + fnode('critical','Public read access via policy','PUB_READ') + fnode('medium','Versioning disabled','NO_VERSION'))}
${resRow('02','access','awong','<span class="av-cnt av-cnt--high">2 H</span>','arn:aws:iam::010545334631:user/awong','2 findings','IAM user','global')}
${resRow('03','connect','sg-0a12f9 · web-ingress','<span class="av-cnt av-cnt--high">1 H</span>','arn:aws:ec2:us-east-1:010545334631:security-group/sg-0a12f9','1 finding','Security group','us-east-1')}
<div class="av-flist__more"><button class="av-btn av-btn--secondary av-btn--sm">Load more resources</button></div></div>`},
 {name:'No matches', html:`<div class="av-flist"><div class="av-empty" style="border:0">${masc('magnifier','2xl')}<h3 class="av-empty__title" style="font-size:15px;font-weight:500">No findings match these filters.</h3><button class="av-btn av-btn--secondary av-btn--sm">Clear filters</button></div></div>`},
]};


// ── Tables: scans, identities, bulletins, clients, members ──
const TB_CSS = `.av-gtable{position:relative;background:var(--av-layer-01);border:1px solid var(--av-border-subtle-00);border-radius:14px;overflow-x:auto;overflow-y:hidden;isolation:isolate}
.av-gtable .av-weave{z-index:-1;width:200px;height:150px;background-size:36px auto;opacity:.5}
.av-gtable__bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px 20px;padding:14px 20px;border-bottom:1px solid var(--av-border-subtle-00)}.av-gtable__bar b{font-size:15px;font-weight:600}
.av-gtable__title{display:flex;flex-direction:column;gap:4px;padding:18px 20px 12px}
.av-gtable__row{display:grid;grid-template-columns:var(--av-cols);min-width:600px;gap:16px;align-items:center;padding:14px 20px;border:0;border-bottom:1px solid var(--av-layer-05);background:transparent;color:inherit;font:inherit;text-align:left;width:100%}
button.av-gtable__row{cursor:pointer}button.av-gtable__row:hover{background:var(--av-layer-02)}
.av-gtable__row--head{padding:12px 20px;border-bottom-color:var(--av-border-subtle-00);font:10px var(--av-font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--av-text-placeholder)}
.av-gtable__r{text-align:right}.av-gtable__num{font-size:14px;font-weight:600;font-variant-numeric:tabular-nums}
.av-sev-legend{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:12px;color:var(--av-text-tertiary)}.av-sev-legend span{display:flex;align-items:center;gap:6px}.av-sev-legend i{width:10px;height:10px;border-radius:2px}
.av-scan-status{display:flex;align-items:center;gap:8px;font-size:14px}.av-scan-status i{width:8px;height:8px;border-radius:50%;background:currentColor}
.av-scan-status--ok{color:var(--av-text-info)}.av-scan-status--run{color:var(--av-support-medium)}.av-scan-status--run i{animation:av-pulse 1.2s infinite}.av-scan-status--fail{color:var(--av-border-error)}
.av-scanner{display:flex;align-items:center;gap:8px;min-width:0;font-size:13px;font-weight:500}.av-scanner i{width:8px;height:20px;flex-shrink:0;border-radius:2px}
.av-sevstack{display:flex;flex-direction:column;gap:6px;min-width:0}.av-sevstack__bar{display:flex;gap:2px;height:6px;min-width:8px;border-radius:2px;overflow:hidden;background:var(--av-layer-05)}
.av-sevstack__cnts{display:flex;flex-wrap:wrap;gap:4px}.av-sevstack__cnts span{padding:1px 6px;border-radius:4px;border:1px solid color-mix(in srgb,currentColor 30%,transparent);background:color-mix(in srgb,currentColor 10%,transparent);font:11px var(--av-font-mono);font-variant-numeric:tabular-nums}
.av-nhi__name{display:flex;flex-direction:column;gap:2px;min-width:0}.av-nhi__name b{font:500 14px var(--av-font-mono)}.av-nhi__name span,.av-nhi__why span{font-size:12px;color:var(--av-text-helper)}
.av-nhi__why{display:flex;flex-direction:column;gap:2px;min-width:0;font-size:13px;color:var(--av-text-secondary)}
.av-bul{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:16px;align-items:start;padding:18px 20px;border-bottom:1px solid var(--av-layer-05)}
.av-bul .av-sev-pill{margin-top:2px}.av-bul__body{display:flex;flex-direction:column;gap:8px;min-width:0}.av-bul__t{font-size:15px;font-weight:500;line-height:1.4;text-wrap:pretty}
.av-bul__meta{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;font-size:12px;color:var(--av-text-helper)}.av-bul__cve{font-family:var(--av-font-mono);color:var(--av-tag-signal-text)}
.av-affects{display:flex;align-items:center;gap:6px;padding:2px 8px;border-radius:999px;background:var(--av-tag-ion-bg);color:var(--av-text-info)}
.av-ext-btn{width:36px;height:36px;border-radius:8px;border:1px solid var(--av-border-strong-01);display:flex;align-items:center;justify-content:center;color:var(--av-icon-secondary)}
.av-who{display:flex;align-items:center;gap:12px;min-width:0}.av-who__tile{width:36px;height:36px;flex-shrink:0;border-radius:9px;background:var(--av-layer-03);border:1px solid var(--av-border-subtle-01);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;color:var(--av-text-secondary)}
.av-who__t{display:flex;flex-direction:column;gap:2px;min-width:0}.av-who__t b{font-size:14px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.av-who__t span{font-size:12px;color:var(--av-text-helper)}
.av-you{padding:1px 7px;border:1px solid var(--av-border-strong-01);border-radius:999px;font-size:11px;color:var(--av-text-helper)}
.av-role{padding:3px 9px;border-radius:999px;font-size:12px;background:var(--av-tag-gray-bg);color:var(--av-tag-gray-text)}.av-role--owner{background:var(--av-tag-ion-bg);color:var(--av-tag-ion-text)}.av-role--admin{background:var(--av-tag-amber-bg);color:var(--av-tag-amber-text)}`;
const C4 = ['var(--av-support-critical)','var(--av-support-high)','var(--av-support-medium)','var(--av-support-low)'];
const legend = `<span class="av-sev-legend">${['Critical','High','Medium','Low'].map((l, i) => `<span><i style="background:${C4[i]}"></i>${l}</span>`).join('')}</span>`;
const scanRow = (st, cls, name, svc, date, segs, w) => { const tot = segs.reduce((a, b) => a + b, 0); return `<button class="av-gtable__row" style="--av-cols:minmax(0,1.1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1.6fr) 56px 20px"><span class="av-scan-status av-scan-status--${cls}"><i></i>${st}</span><span class="av-scanner"><i style="background:${svc}"></i>${name}</span><span style="font-size:13px;color:var(--av-text-tertiary)">${date}</span><span class="av-sevstack">${tot ? `<span class="av-sevstack__bar" style="width:${w}%">${segs.map((s, i) => s ? `<span style="flex:${s};background:${C4[i]}"></span>` : '').join('')}</span><span class="av-sevstack__cnts">${segs.map((s, i) => s ? `<span style="color:${C4[i]}">${s} ${'CHML'[i]}</span>` : '').join('')}</span>` : '<span style="font-size:12px;color:var(--av-text-helper)">No findings</span>'}</span><span class="av-gtable__r av-gtable__num">${tot}</span>${ic('chevRight',16,2)}</button>`; };
const tables = { id:'data-tables-v2', label:'Data tables', desc:'Grid-row tables used on Scans, Identities, Bulletins, Manage clients and Members — card container with weave, mono uppercase header, 14px rows on a layer-05 rule, horizontal scroll under 600px.',
css:TB_CSS,
variants:[
 {name:'Scan history', html:`<div class="av-gtable"><div class="av-weave" aria-hidden="true"></div><div class="av-gtable__bar"><b>Scan history</b>${legend}</div>
<div class="av-gtable__row av-gtable__row--head" style="--av-cols:minmax(0,1.1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1.6fr) 56px 20px"><span>Status</span><span>Scanner</span><span>Started</span><span>Findings by severity</span><span class="av-gtable__r">Total</span><span></span></div>
${scanRow('Running','run','S3','var(--av-support-low)','Oct 13, 3:41 PM',[0,0,0,0],0)}
${scanRow('Complete','ok','IAM','var(--av-support-high)','Oct 13, 3:33 PM',[2,52,8,0],90)}
${scanRow('Complete','ok','Transmission','var(--av-support-medium)','Oct 13, 3:33 PM',[0,0,31,12],62)}
${scanRow('Failed','fail','Logging','var(--av-text-helper)','Oct 12, 9:02 PM',[0,0,0,0],0)}</div>`},
 {name:'Riskiest identities', html:`<div class="av-gtable"><div class="av-weave" aria-hidden="true"></div><div class="av-gtable__title"><span class="av-card__head">${i3('access')}<h2 class="av-card__title">Riskiest non-human identities</h2></span><span class="av-card__sub">Machines don't get access reviews. Start here.</span></div>
${[['ci-deploy-role','IAM role · CI/CD','Admin on 14 services','platform-team','2h ago','critical'],['etl-svc-key','Access key · 412 days old','Never rotated','data-eng','6d ago','high'],['slack-bot','Service account','Writes to prod-uploads','—','Never','medium']].map(([n, k, w, o, u, s]) => `<div class="av-gtable__row" style="--av-cols:40px minmax(0,1.4fr) minmax(0,1fr) minmax(0,.8fr) auto;gap:14px;padding:12px 20px;border-bottom:0;border-top:1px solid var(--av-layer-05)"><span class="av-res__tile"><img src="${I('access')}" alt=""></span><span class="av-nhi__name"><b>${n}</b><span>${k}</span></span><span class="av-nhi__why">${w}<span>Owner · ${o}</span></span><span style="font-size:12px;color:var(--av-text-helper)">Used ${u}</span><span class="av-sev-pill av-sev-pill--${s}">${s}</span></div>`).join('\n')}</div>`},
 {name:'Identity runs', html:`<div class="av-gtable"><div class="av-gtable__title"><h2 class="av-card__title">Scan history</h2></div><div class="av-gtable__row av-gtable__row--head" style="--av-cols:minmax(0,2fr) repeat(4,minmax(0,.7fr));gap:12px;border-top:1px solid var(--av-border-subtle-00)"><span>Run</span><span class="av-gtable__r">Total</span><span class="av-gtable__r">Likely NHI</span><span class="av-gtable__r">Human</span><span class="av-gtable__r">Uncertain</span></div>${[['Oct 13, 8:41 PM','idr_01J9Y2',48,31,14,3],['Oct 6, 8:40 PM','idr_01J8QZ',45,29,13,3]].map(([d, id, t, n, h, u]) => `<div class="av-gtable__row" style="--av-cols:minmax(0,2fr) repeat(4,minmax(0,.7fr));gap:12px;padding:12px 20px;font-variant-numeric:tabular-nums"><span class="av-who__t"><b style="font-weight:400">${d}</b><span class="av-mono" style="font-size:11px;color:var(--av-text-placeholder)">${id}</span></span><span class="av-gtable__r av-gtable__num">${t}</span><span class="av-gtable__r" style="color:var(--av-tag-signal-text)">${n}</span><span class="av-gtable__r" style="color:var(--av-text-info)">${h}</span><span class="av-gtable__r" style="color:var(--av-support-medium)">${u}</span></div>`).join('')}</div>`},
 {name:'Bulletins', html:`<div class="av-gtable"><div class="av-weave" aria-hidden="true"></div>${[['critical','S3 bucket ACL bypass when Object Ownership is “Bucket owner preferred”','CVE-2026-1182','Amazon S3','Oct 13','AWS-2026-014',true],['high','Azure AD app consent phishing campaign targets service principals','—','Entra ID','Oct 11','MSRC-2026-221',false],['medium','GKE metadata server exposes node service account tokens','CVE-2026-0991','GKE','Oct 9','GCP-2026-031',false]].map(([s, t, cve, svc, d, id, a]) => `<div class="av-bul"><span class="av-sev-pill av-sev-pill--${s}">${s}</span><div class="av-bul__body"><span class="av-bul__t">${t}</span><div class="av-bul__meta"><span class="av-bul__cve">${cve}</span><span>${svc}</span><span>${d}</span><span class="av-mono">${id}</span>${a ? '<span class="av-affects">Affects Production Demo</span>' : ''}</div></div><a class="av-ext-btn" href="#" aria-label="Open bulletin">${ic('ext',15)}</a></div>`).join('\n')}</div>`},
 {name:'Manage clients', html:`<div class="av-gtable"><div class="av-gtable__row av-gtable__row--head" style="--av-cols:minmax(0,2fr) minmax(0,.8fr) minmax(0,1fr) minmax(0,.8fr) minmax(0,.9fr) 36px"><span>Client</span><span>Type</span><span>Industry</span><span>Accounts</span><span>Status</span><span></span></div>${[['HC','Hydroponic Cloud','Mar 2026','External','Agriculture','3','ok','Healthy'],['AH','Acme Health','Jan 2026','External','Healthcare','1','watch','Watch'],['RP','Ridgeway Partners','Dec 2025','Internal','Security','2','arch','Archived']].map(([i, n, c, t, ind, a, s, sl]) => `<div class="av-gtable__row" style="--av-cols:minmax(0,2fr) minmax(0,.8fr) minmax(0,1fr) minmax(0,.8fr) minmax(0,.9fr) 36px"><span class="av-who"><span class="av-who__tile">${i}</span><span class="av-who__t"><b>${n}</b><span>Since ${c}</span></span></span><span style="font-size:13px;color:var(--av-text-secondary)">${t}</span><span style="font-size:13px;color:var(--av-text-tertiary)">${ind}</span><span style="font-size:13px">${a}</span><span>${statusPill(s, sl)}</span><button class="av-more-btn" aria-label="More">${ic('dots',18,3)}</button></div>`).join('')}</div>`},
 {name:'Members', html:`<div class="av-gtable"><div class="av-gtable__row av-gtable__row--head" style="--av-cols:minmax(0,2fr) minmax(0,1fr) minmax(0,1fr) 36px"><span>Member</span><span>Role</span><span>Joined</span><span></span></div>${[['zalak@avistar.ai','Owner','Jan 4, 2026',1],['maya@avistar.ai','Admin','Feb 11, 2026'],['priya@avistar.ai','Analyst','Oct 12, 2026']].map(([e, r, j, y]) => `<div class="av-gtable__row" style="--av-cols:minmax(0,2fr) minmax(0,1fr) minmax(0,1fr) 36px;padding:12px 20px"><span class="av-who"><span class="av-avatar av-avatar--md" style="color:var(--av-text-secondary)">${e[0].toUpperCase()}</span><span style="font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${e}</span>${y ? '<span class="av-you">You</span>' : ''}</span><span><span class="av-role av-role--${r.toLowerCase()}">${r}</span></span><span style="font-size:13px;color:var(--av-text-tertiary)">${j}</span><button class="av-more-btn" aria-label="More">${ic('dots',18,3)}</button></div>`).join('')}</div>`},
]};

// ── Settings ──
const ST_CSS = `.av-set{display:flex;flex-wrap:wrap;align-items:flex-start;gap:24px}
.av-set__nav{flex:0 0 220px;display:flex;flex-direction:column;gap:2px}
.av-set__tab{display:flex;flex-direction:column;gap:2px;padding:10px 12px;border:0;border-radius:8px;background:transparent;color:var(--av-text-tertiary);font:inherit;text-align:left;cursor:pointer}.av-set__tab:hover,.av-set__tab[aria-selected="true"]{background:var(--av-layer-03)}.av-set__tab[aria-selected="true"]{color:var(--av-text-primary)}
.av-set__tab b{font-size:14px;font-weight:500}.av-set__tab span{font-size:12px;color:var(--av-text-helper)}
.av-set__main{flex:1 1 480px;min-width:0;display:flex;flex-direction:column;gap:16px}
.av-set-card{position:relative;overflow:hidden;isolation:isolate;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:14px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01)}
.av-set-card .av-weave{z-index:-1;width:200px;height:150px;background-size:36px auto;opacity:.5}
.av-set-card--row{flex-direction:row;flex-wrap:wrap;align-items:center;gap:16px}.av-set-card--danger{border-color:color-mix(in srgb,var(--av-support-critical) 30%,transparent)}
.av-set-card__t{flex:1;min-width:220px;display:flex;flex-direction:column;gap:4px}.av-set-card__t b{font-size:15px;font-weight:600}.av-set-card__t span{font-size:13px;color:var(--av-text-helper)}
.av-switch{position:relative;width:44px;height:26px;flex-shrink:0;border:0;border-radius:999px;background:var(--av-toggle-off);cursor:pointer;transition:background .2s}
.av-switch::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:var(--av-toggle-thumb);transition:left .2s}
.av-switch[aria-checked="true"]{background:var(--av-support-low)}.av-switch[aria-checked="true"]::after{left:21px}
.av-tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:8px}
.av-check-tile{display:flex;align-items:flex-start;gap:12px;padding:14px;border-radius:10px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-02);color:inherit;font:inherit;text-align:left;cursor:pointer}
.av-check-tile[aria-checked="true"]{border-color:var(--av-border-interactive)}
.av-check-tile__box{width:18px;height:18px;margin-top:1px;flex-shrink:0;border-radius:5px;border:1px solid var(--av-border-strong-02);color:transparent;display:flex;align-items:center;justify-content:center}
.av-check-tile[aria-checked="true"] .av-check-tile__box{border-color:var(--av-support-low);background:var(--av-support-low);color:var(--av-background)}
.av-check-tile__t{display:flex;flex-direction:column;gap:2px}.av-check-tile__t b{font-size:14px;font-weight:500}.av-check-tile__t span{font-size:12px;color:var(--av-text-helper)}
.av-kv{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:20px}.av-kv div{display:flex;flex-direction:column;gap:4px;min-width:0}.av-kv span{font-size:12px;color:var(--av-text-helper)}.av-kv b{font-size:14px;font-weight:400;overflow-wrap:anywhere}
.av-accents{display:flex;gap:8px}.av-accents button{width:36px;height:36px;border-radius:8px;border:2px solid transparent;cursor:pointer}.av-accents button[aria-pressed="true"]{border-color:var(--av-text-primary)}
.av-brand-prev{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:12px;background:var(--av-layer-report);color:#141414}
.av-brand-prev__top{display:flex;justify-content:space-between;align-items:center}.av-brand-prev__top b{font-size:14px;font-weight:600}.av-brand-prev__top span{font:11px var(--av-font-mono);color:#6B6A67}
.av-brand-prev__bar{height:3px;border-radius:2px}.av-brand-prev__name{font-size:22px;font-weight:600;letter-spacing:-0.02em}.av-brand-prev__sub{font-size:13px;color:#4A4946}`;
const setNav = on => `<div class="av-set__nav" role="tablist">${[['Notifications','Scan email alerts'],['Report branding','Name, logo, accent'],['Cloud account','Production Demo']].map(([l, s]) => `<button class="av-set__tab" role="tab" aria-selected="${l === on}"><b>${l}</b><span>${s}</span></button>`).join('')}</div>`;
const settings = { id:'settings-v2', label:'Settings', desc:'Workspace settings: left tab list with sub-labels, weave-cornered cards, switch, checkbox tiles, recipient chips, report-branding preview on paper, account facts and a danger card.',
css:ST_CSS,
variants:[
 {name:'Notifications', html:`<div class="av-set">${setNav('Notifications')}<div class="av-set__main">
  <div class="av-set-card av-set-card--row"><div class="av-weave" aria-hidden="true"></div><div class="av-set-card__t"><b>Email when a scan finishes</b><span>One summary per scan, with new criticals at the top.</span></div><button class="av-switch" role="switch" aria-checked="true" aria-label="Toggle email"></button></div>
  <div class="av-set-card"><div class="av-weave" aria-hidden="true"></div><div class="av-set-card__t"><b>Send for</b><span>Pick the outcomes your team needs to hear about.</span></div><div class="av-tiles">${[['New critical findings','Within minutes of the scan',1],['Score drops','Down 3 points or more',1],['Scan failures','Credentials or timeouts',0],['Weekly digest','Mondays, 9 AM',0]].map(([l, s, on]) => `<button class="av-check-tile" role="checkbox" aria-checked="${!!on}"><span class="av-check-tile__box">${ic('check',12,3)}</span><span class="av-check-tile__t"><b>${l}</b><span>${s}</span></span></button>`).join('')}</div></div>
  <div class="av-set-card"><div class="av-weave" aria-hidden="true"></div><div class="av-set-card__t"><b>Recipients</b><span>Up to 10 addresses. Recipients can't see each other.</span></div><div class="av-row" style="gap:8px"><label class="av-find av-find--strong" style="flex:1 1 240px;background:var(--av-background)">${ic('mail',16,1.6)}<input placeholder="security@company.com"></label><button class="av-btn av-btn--secondary">${ic('plus',14,2)}Add</button></div><div class="av-row" style="gap:6px"><span class="av-chip">security@hydroponic.io<button aria-label="Remove">${ic('x',12,2.2)}</button></span><span class="av-chip">zalak@avistar.ai<button aria-label="Remove">${ic('x',12,2.2)}</button></span></div></div>
  <div><button class="av-btn av-btn--primary">Save changes</button></div></div></div>`},
 {name:'Report branding', html:`<div class="av-set">${setNav('Report branding')}<div class="av-set__main"><div class="av-set-card" style="gap:16px"><div class="av-weave" aria-hidden="true"></div><div class="av-set-card__t"><b>Report branding</b><span>Shown on client reports you generate.</span></div><label class="av-field"><span class="av-field__label">Company name</span><input class="av-input" value="Acme Managed Security"></label><div class="av-field"><span class="av-field__label">Accent</span><div class="av-accents">${['#FF4B1F','#1FDDFF','#141414','#3DDC97'].map((c, i) => `<button aria-label="${c}" aria-pressed="${!i}" style="background:${c}"></button>`).join('')}</div></div><div class="av-brand-prev"><div class="av-brand-prev__top"><b>Acme Managed Security</b><span>Security report · Oct 2026</span></div><span class="av-brand-prev__bar" style="background:#FF4B1F"></span><span class="av-brand-prev__name">Hydroponic Cloud Industries</span><span class="av-brand-prev__sub">293 open findings · posture 64 / 100</span></div><div><button class="av-btn av-btn--primary">Save branding</button></div></div></div></div>`},
 {name:'Cloud account', html:`<div class="av-set">${setNav('Cloud account')}<div class="av-set__main"><div class="av-set-card"><div class="av-weave" aria-hidden="true"></div><div class="av-kv">${[['Account name','Production Demo'],['Provider','AWS'],['Account ID','010545334631',1],['Role ARN','arn:aws:iam::010545334631:role/AvistarReadOnly',1],['Connected','Mar 2, 2026'],['Last scan','2 hours ago']].map(([k, v, m]) => `<div><span>${k}</span><b${m ? ' class="av-mono"' : ''}>${v}</b></div>`).join('')}</div></div>
  <div class="av-set-card av-set-card--row"><div class="av-weave" aria-hidden="true"></div><div class="av-set-card__t"><b>Move to another client</b><span>Scans and findings stay with the account.</span></div><button class="av-btn av-btn--secondary">${xi('move',16,1.6)}Move</button></div>
  <div class="av-set-card av-set-card--row av-set-card--danger"><div class="av-set-card__t"><b>Disconnect this account</b><span>Stops scans and removes it from the client. Past results are kept.</span></div><button class="av-btn av-btn--soft-danger">${xi('unplug',16,1.6)}Disconnect</button></div></div></div>`},
]};


// ── Overlays: remediate drawer, side panel, report preview, help guide, buddy chat, toast ──
const OV_CSS = `.av-stage{position:relative;display:flex;justify-content:flex-end;min-height:560px;border-radius:16px;border:1px solid var(--av-border-subtle-00);background:var(--av-overlay-panel);overflow:hidden}
.av-stage--center{justify-content:center;align-items:center;padding:16px;background:var(--av-overlay-dialog)}
.av-drawer{width:var(--av-drawer-lg);display:flex;flex-direction:column;background:var(--av-layer-01);border-left:1px solid var(--av-border-strong-01);animation:av-sheet-in .3s var(--av-ease-standard)}
.av-drawer__head{display:flex;align-items:flex-start;gap:12px;padding:20px 24px;border-bottom:1px solid var(--av-border-subtle-00)}
.av-drawer__ttl{flex:1;min-width:0;display:flex;flex-direction:column;gap:8px}.av-drawer__ttl .av-sev-pill{align-self:flex-start}
.av-drawer__ttl h2{margin:0;font-size:22px;font-weight:600;letter-spacing:-0.02em;line-height:1.2;text-wrap:pretty}.av-drawer__ttl p{margin:0;font-size:14px;line-height:1.5;color:var(--av-text-tertiary)}
.av-drawer__body{flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:24px;padding:24px}
.av-drawer__sec{display:flex;flex-direction:column;gap:10px}
.av-tri{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1px;background:var(--av-border-subtle-00);border:1px solid var(--av-border-subtle-00);border-radius:12px;overflow:hidden}
.av-tri div{display:flex;flex-direction:column;gap:4px;padding:14px;background:var(--av-layer-02)}.av-tri span{font-size:12px;color:var(--av-text-helper)}.av-tri b{font-size:18px;font-weight:600}
.av-rstep{display:grid;grid-template-columns:24px minmax(0,1fr);gap:12px;align-items:start;padding:12px;border-radius:10px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-02);color:inherit;font:inherit;text-align:left;cursor:pointer}
.av-rstep__n{width:22px;height:22px;border-radius:50%;border:1px solid var(--av-border-strong-02);display:flex;align-items:center;justify-content:center;font:11px var(--av-font-mono);color:var(--av-text-tertiary)}
.av-rstep__t{font-size:14px;line-height:1.5;color:var(--av-text-primary)}
.av-rstep[aria-checked="true"]{border-color:color-mix(in srgb,var(--av-support-low) 35%,transparent)}.av-rstep[aria-checked="true"] .av-rstep__n{border-color:var(--av-support-low);background:var(--av-support-low);color:var(--av-text-inverse)}.av-rstep[aria-checked="true"] .av-rstep__t{color:var(--av-text-helper);text-decoration:line-through}
.av-cli{margin:0;padding:14px;border-radius:10px;background:var(--av-background);border:1px solid var(--av-border-subtle-00);font:12px/1.6 var(--av-font-mono);color:var(--av-text-info);overflow:auto;white-space:pre}
.av-drawer__foot{display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:16px 24px;border-top:1px solid var(--av-border-subtle-00)}.av-drawer__foot>span{flex:1;font-size:13px;color:var(--av-text-helper)}
.av-panel{width:var(--av-panel-w);display:flex;flex-direction:column;background:var(--av-layer-01);border-left:1px solid var(--av-border-strong-01);box-shadow:var(--av-shadow-sheet);animation:av-sheet-in .32s var(--av-ease-standard)}
.av-panel__head{display:flex;align-items:flex-start;gap:12px;padding:20px 24px;border-bottom:1px solid var(--av-border-subtle-00)}.av-panel__ttl{flex:1;display:flex;flex-direction:column;gap:6px}.av-panel__ttl h2{margin:0;font-size:20px;font-weight:600;letter-spacing:-0.02em}.av-panel__ttl p{margin:0;font-size:14px;line-height:1.5;color:var(--av-text-tertiary)}
.av-panel__body{flex:1;display:flex;flex-direction:column;gap:12px;padding:20px 24px}
.av-panel__foot{position:sticky;bottom:0;display:flex;justify-content:flex-end;gap:8px;padding:16px 24px;border-top:1px solid var(--av-border-subtle-00);background:var(--av-layer-01)}
.av-scanner-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.av-scanner-tile{display:flex;align-items:center;gap:16px;padding:14px 16px;border-radius:12px;border:1.5px solid var(--av-border-subtle-00);background:var(--av-layer-01);color:inherit;font:inherit;text-align:left;cursor:pointer;transition:border-color .15s,background .15s}
.av-scanner-tile[aria-pressed="true"]{border-color:var(--av-border-selected-scanner);background:color-mix(in srgb,var(--av-support-low) 6%,var(--av-layer-01));box-shadow:0 0 0 3px var(--av-focus-ring)}
.av-scanner-tile__t{display:flex;flex-direction:column;gap:4px;min-width:0}.av-scanner-tile__t b{font-size:15px;font-weight:500}.av-scanner-tile__t span{font-size:12.5px;line-height:1.4;color:var(--av-text-helper);text-wrap:pretty}
.av-opt-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
.av-opt{display:flex;flex-direction:column;gap:2px;padding:12px;border-radius:10px;border:1px solid var(--av-border-subtle-01);background:var(--av-layer-02);color:inherit;font:inherit;text-align:left;cursor:pointer}.av-opt[aria-pressed="true"]{border-color:var(--av-text-primary);background:var(--av-layer-04)}.av-opt b{font-size:14px;font-weight:500}.av-opt span{font-size:12px;color:var(--av-text-helper)}
.av-rep-opt{display:flex;flex-direction:column;gap:12px;padding:14px;border-radius:12px;border:1px solid var(--av-border-subtle-01);background:var(--av-layer-02);cursor:pointer}.av-rep-opt[aria-pressed="true"]{border-color:var(--av-text-primary);background:var(--av-layer-04)}
.av-rep-opt__top{display:grid;grid-template-columns:44px minmax(0,1fr);gap:14px;align-items:center}
.av-page-thumb{position:relative;display:block;width:44px;height:57px;border-radius:3px;background:var(--av-layer-report);box-shadow:0 2px 8px rgba(0,0,0,.25);overflow:hidden}
.av-page-thumb i{position:absolute;display:block}.av-page-thumb i:nth-child(1){left:5px;top:6px;width:14px;height:3px;background:#141414}.av-page-thumb i:nth-child(2){left:5px;top:13px;width:30px;height:3px;background:#9a9894}.av-page-thumb i:nth-child(3){left:5px;right:5px;top:22px;height:8px;background:var(--av-gradient-brand)}.av-page-thumb i:nth-child(n+4){left:5px;right:9px;height:1px;background:#c9c6c1}.av-page-thumb i:nth-child(4){top:36px}.av-page-thumb i:nth-child(5){top:42px}.av-page-thumb i:nth-child(6){top:48px}
.av-rep-opt__t{display:flex;flex-direction:column;gap:3px;min-width:0}.av-rep-opt__t div{display:flex;justify-content:space-between;gap:8px;align-items:baseline}.av-rep-opt__t b{font-size:15px;font-weight:500}.av-rep-opt__t small,.av-rep-opt__who{font-size:12px;color:var(--av-text-helper)}.av-rep-opt__t p{margin:0;font-size:13px;line-height:1.4;color:var(--av-text-tertiary)}
.av-rep-opt__inc{display:flex;flex-direction:column;gap:6px;padding-top:12px;border-top:1px solid var(--av-border-subtle-01)}.av-rep-opt__inc span{display:grid;grid-template-columns:16px 1fr;gap:8px;font-size:13px;line-height:1.45;color:var(--av-text-secondary)}.av-rep-opt__inc .av-icon{margin-top:2px;color:var(--av-text-info)}
.av-repview{display:flex;flex-direction:column;min-height:460px;border-radius:16px;overflow:hidden;background:#0B0B0C;color:#F5F3F0}
.av-repview__bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 20px;padding:12px 20px;border-bottom:1px solid #2a2a2c}
.av-repview__back{width:36px;height:36px;border-radius:999px;border:1px solid #3a3a3c;background:transparent;color:#F5F3F0;cursor:pointer;display:flex;align-items:center;justify-content:center}
.av-repview__t{display:flex;flex-direction:column;gap:2px}.av-repview__t b{font-size:15px;font-weight:500}.av-repview__t span{font-size:12px;color:#a8a6a2}
.av-repview__tabs{display:flex;gap:2px;padding:3px;border-radius:10px;border:1px solid #2a2a2c}.av-repview__tabs button{height:32px;padding:0 14px;border:0;border-radius:7px;background:transparent;color:#a8a6a2;font:500 13px var(--av-font-sans);cursor:pointer;white-space:nowrap}.av-repview__tabs button[aria-pressed="true"]{background:#F5F3F0;color:#141414}
.av-repview__close{padding:6px 0;border:0;background:transparent;color:#F5F3F0;font:500 13px var(--av-font-sans);text-decoration:underline;text-underline-offset:3px;cursor:pointer}
.av-repview__dl{background:#FF4B1F;color:#FFFFFF}
.av-repview__pages{flex:1;display:flex;justify-content:center;padding:28px;background:#E4E1DC}.av-repview__page{width:min(100%,340px);aspect-ratio:8.5/11;background:#FFFFFF;box-shadow:0 8px 30px rgba(0,0,0,.18)}
.av-guide{position:relative;width:min(920px,100%);display:flex;flex-wrap:wrap;align-items:stretch;background:var(--av-layer-01);border:1px solid var(--av-border-strong-01);border-radius:var(--av-radius-3xl);box-shadow:var(--av-shadow-dialog);overflow:hidden}
.av-guide__close{position:absolute;top:12px;right:12px;z-index:1;width:36px;height:36px;border-radius:999px;border:1px solid var(--av-border-strong-01);background:var(--av-layer-03);color:var(--av-text-primary);cursor:pointer;display:flex;align-items:center;justify-content:center}
.av-guide__media{position:relative;flex:1 1 380px;min-height:360px;aspect-ratio:1;display:flex;align-items:center;justify-content:center;background:#F2F1EE;border-right:1px solid var(--av-border-subtle-00);overflow:hidden}
.av-guide__media::before{content:"";position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='76' height='41'%3E%3Cpath d='M0 0L76 41M0 41L76 0' fill='none' stroke='%23141414' stroke-opacity='.07'/%3E%3C/svg%3E");background-size:76px 41px;-webkit-mask-image:radial-gradient(closest-side at 50% 58%,#000 35%,transparent 100%);mask-image:radial-gradient(closest-side at 50% 58%,#000 35%,transparent 100%)}
.av-guide__media::after{content:"";position:absolute;left:8%;right:8%;top:30%;bottom:0;background:radial-gradient(closest-side,rgba(255,75,31,.14),rgba(31,221,255,.08) 60%,transparent)}
.av-guide__media img{position:relative;z-index:1;width:62%;height:auto}
.av-guide__side{flex:1 1 340px;min-width:0;display:flex;flex-direction:column;justify-content:space-between;padding:56px 0 8px}
.av-guide__copy{display:flex;flex-direction:column;gap:12px;padding:0 32px 8px}.av-guide__copy h2{margin:0;font-size:22px;font-weight:600;letter-spacing:-0.02em;line-height:1.2;text-wrap:pretty}.av-guide__copy p{margin:0;font-size:14px;line-height:1.6;color:var(--av-text-secondary);text-wrap:pretty}.av-guide__copy p+p{color:var(--av-text-tertiary)}
.av-guide__foot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;padding:16px 32px 24px}
.av-dots{display:flex;gap:6px}.av-dots i{width:6px;height:6px;border-radius:999px;background:var(--av-border-strong-02);transition:width .2s}.av-dots i.is-on{width:20px;background:var(--av-button-primary)}
.av-chat{width:var(--av-chat-w);height:min(640px,calc(100vh - 110px));display:flex;flex-direction:column;background:var(--av-layer-01);border:1px solid var(--av-border-strong-01);border-radius:18px;box-shadow:var(--av-shadow-chat);overflow:hidden;animation:av-slide-up .25s var(--av-ease-standard)}
.av-chat__head{display:flex;align-items:center;gap:12px;padding:14px 14px 14px 12px;border-bottom:1px solid var(--av-border-subtle-00);background:radial-gradient(120% 140% at 0% 0%,var(--av-background-glow-ion),transparent 55%),radial-gradient(100% 140% at 100% 0%,var(--av-background-glow-signal),transparent 60%)}
.av-chat__head>img{width:52px;height:52px;object-fit:contain;filter:drop-shadow(0 6px 12px rgba(0,0,0,.45))}
.av-chat__id{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}.av-chat__id b{font-size:16px;font-weight:600;letter-spacing:-0.01em}.av-chat__id span{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--av-text-helper)}.av-chat__id span::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--av-support-low)}
.av-chat__new{height:32px;padding:0 10px;border-radius:8px;border:1px solid var(--av-border-subtle-00);background:transparent;color:var(--av-text-tertiary);font:12px var(--av-font-sans);cursor:pointer}
.av-chat__x{width:32px;height:32px;border:0;border-radius:8px;background:transparent;color:var(--av-text-tertiary);cursor:pointer;display:grid;place-items:center}
.av-chat__list{flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;gap:14px;padding:16px}
.av-chat__hello{padding:14px;border-radius:12px;background:var(--av-border-subtle-00);font-size:14px;line-height:1.55;color:var(--av-text-secondary)}
.av-chat__sugg{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 14px;border-radius:10px;border:1px solid var(--av-border-subtle-00);background:transparent;color:var(--av-text-primary);font:13.5px/1.4 var(--av-font-sans);text-align:left;cursor:pointer}
.av-chat__sugg:hover{border-color:var(--av-border-interactive);background:color-mix(in srgb,var(--av-support-low) 5%,transparent)}.av-chat__sugg span:last-child{color:var(--av-text-info)}
.av-msg--user{align-self:flex-end;max-width:85%;padding:10px 14px;border-radius:14px 14px 4px 14px;background:var(--av-button-primary);color:var(--av-text-on-color);font-size:14px;line-height:1.45}
.av-msg--bot{display:flex;align-items:flex-start;gap:10px}.av-msg--bot>img{width:30px;height:30px;flex-shrink:0;margin-top:2px;object-fit:contain}
.av-msg__bubble{flex:1;min-width:0;display:flex;flex-direction:column;gap:10px;padding:12px 14px;border-radius:4px 14px 14px 14px;background:var(--av-border-subtle-00)}.av-msg__bubble p{margin:0;font-size:14px;line-height:1.55;text-wrap:pretty}
.av-msg__steps{display:flex;flex-direction:column;gap:6px;padding-top:8px;border-top:1px solid var(--av-border-strong-01)}.av-msg__steps div{display:grid;grid-template-columns:20px minmax(0,1fr);gap:6px;font-size:13px;line-height:1.45;color:var(--av-text-secondary)}.av-msg__steps b{font:400 11px var(--av-font-mono);color:var(--av-text-info);padding-top:1px}
.av-msg__acts{display:flex;flex-wrap:wrap;gap:8px}.av-msg__acts button{height:34px;padding:0 14px;border-radius:999px;border:1px solid var(--av-border-strong-01);background:transparent;color:var(--av-text-primary);font:500 13px var(--av-font-sans);cursor:pointer}.av-msg__acts button:first-child{border-color:var(--av-button-primary);background:var(--av-button-primary);color:var(--av-text-on-color)}
.av-chat__busy{display:flex;align-items:center;gap:10px;font-size:13px;color:var(--av-text-helper)}.av-chat__busy img{width:30px;height:30px;object-fit:contain;animation:av-pulse 1.4s infinite}
.av-chat__form{display:flex;align-items:flex-end;gap:8px;padding:12px;border-top:1px solid var(--av-border-subtle-00)}
.av-chat__form input{flex:1;min-width:0;height:44px;padding:0 14px;border-radius:10px;border:1px solid var(--av-border-strong-01);background:transparent;color:var(--av-text-primary);font:14px var(--av-font-sans);outline:none}.av-chat__form input:focus{border-color:var(--av-border-interactive)}
.av-chat__send{width:44px;height:44px;flex-shrink:0;border:0;border-radius:10px;background:var(--av-button-primary);color:var(--av-text-on-color);cursor:pointer;display:grid;place-items:center}
.av-toast-v2{display:inline-flex;align-items:center;gap:10px;padding:12px 16px;border-radius:10px;background:var(--av-background-inverse);color:var(--av-text-inverse);font-size:14px;font-weight:500;box-shadow:0 16px 40px rgba(0,0,0,.4);animation:av-slide-up .25s var(--av-ease-standard)}`;
const pHead = (t, s) => `<div class="av-panel__head"><div class="av-panel__ttl"><h2>${t}</h2><p>${s}</p></div><button class="av-more-btn" aria-label="Close">${ic('x',16,2)}</button></div>`;
const pFoot = (ok, dis) => `<div class="av-panel__foot"><button class="av-btn av-btn--secondary">Cancel</button><button class="av-btn av-btn--primary" style="height:44px;font-weight:500"${dis ? ' disabled' : ''}>${ok}</button></div>`;
const repOpt = (t, pages, s, who, on, inc, bar) => `<div class="av-rep-opt" role="button" aria-pressed="${!!on}"><div class="av-rep-opt__top"><span class="av-page-thumb" aria-hidden="true"><i></i><i></i><i${bar}></i><i></i><i></i><i></i></span><span class="av-rep-opt__t"><div><b>${t}</b><small>${pages}</small></div><p>${s}</p><span class="av-rep-opt__who">For ${who}</span></span></div>${on ? `<div class="av-rep-opt__inc">${inc.map(x => `<span>${ic('check',14,2.5)}<span>${x}</span></span>`).join('')}<button class="av-btn av-btn--link" style="height:auto;padding:6px 0;font-size:13px;align-self:flex-start">Preview pages →</button></div>` : ''}</div>`;
const overlays = { id:'overlays', label:'Drawers & panels', desc:'Remediate drawer (560px), side panel (480px) for Run scan · Schedule · Report · Invite · Disconnect, full-screen report preview, Help guide dialog and the toast. Scrims: 55% + 2px blur for drawers, 45% for panels.',
css:OV_CSS,
variants:[
 {name:'Remediate drawer', html:`<div class="av-stage"><aside class="av-drawer">
  <div class="av-drawer__head"><div class="av-drawer__ttl"><span class="av-sev-pill">Critical</span><h2>Public write access via ACL</h2><p>Anyone on the internet can upload or overwrite objects in this bucket.</p></div><button class="av-round-x" aria-label="Close">${ic('x',16,2)}</button></div>
  <div class="av-drawer__body">
    <div class="av-tri"><div><span>Score</span><b style="color:var(--av-text-info)">+7</b></div><div><span>Effort</span><b>~2 min</b></div><div><span>Frameworks</span><b>6</b></div></div>
    <div class="av-drawer__sec"><span class="av-eyebrow">Affected</span><div class="av-row" style="gap:6px"><span class="av-chip av-chip--mono">northwind-tmp-transfer-402864</span><span class="av-chip av-chip--mono">northwind-partner-uploads-402864</span></div></div>
    <div class="av-drawer__sec" style="gap:12px"><span class="av-eyebrow">Steps</span><button class="av-rstep" role="checkbox" aria-checked="true"><span class="av-rstep__n">${ic('check',12,2.4)}</span><span class="av-rstep__t">Turn on Block Public Access for the bucket.</span></button><button class="av-rstep" role="checkbox" aria-checked="false"><span class="av-rstep__n">2</span><span class="av-rstep__t">Remove the AllUsers and AuthenticatedUsers grants from the ACL.</span></button></div>
    <div class="av-drawer__sec"><div style="display:flex;justify-content:space-between;align-items:center"><span class="av-eyebrow">AWS CLI</span><button class="av-btn av-btn--secondary av-btn--sm">${ic('copy',13)}Copy</button></div><pre class="av-cli">aws s3api put-public-access-block \\
  --bucket northwind-partner-uploads-402864 \\
  --public-access-block-configuration BlockPublicAcls=true</pre></div>
  </div>
  <div class="av-drawer__foot"><span>1 of 2 steps done</span><button class="av-btn av-btn--secondary">Later</button><button class="av-btn av-btn--primary">Mark fixed &amp; re-scan</button></div>
</aside></div>`},
 {name:'Side panel · Run scan', html:`<div class="av-stage"><div class="av-panel">${pHead('Run a scan','Pick scanners for Production Demo. Takes about 6 minutes.')}<div class="av-panel__body"><div class="av-vswitch av-vswitch--block" style="background:var(--av-background)"><button aria-pressed="true">Vulnerability</button><button>Identity</button></div><div class="av-scanner-grid">${[['idcard','IAM','Users, roles, keys, MFA',1],['bucket','S3','Bucket ACLs, policies, versioning',1],['key','Transmission','TLS and encryption in transit',1],['magnifier','Logging','CloudTrail and access logs',0],['shield','Security groups','Open ports and ingress',1]].map(([m, l, s, on]) => `<button class="av-scanner-tile" aria-pressed="${!!on}">${masc(m,'md')}<span class="av-scanner-tile__t"><b>${l}</b><span>${s}</span></span></button>`).join('')}</div></div>${pFoot('Run 4 scanners')}</div></div>`},
 {name:'Side panel · Schedule', html:`<div class="av-stage"><div class="av-panel">${pHead('Schedule scans','Runs automatically. You’ll get an email when each one finishes.')}<div class="av-panel__body"><div class="av-opt-grid">${[['Daily','Every night',1],['Weekly','Mondays'],['Monthly','1st of month']].map(([l, s, on]) => `<button class="av-opt" aria-pressed="${!!on}"><b>${l}</b><span>${s}</span></button>`).join('')}</div><label class="av-field"><span class="av-field__label">Time (UTC)</span><input class="av-input" type="time" value="02:00"></label></div>${pFoot('Save schedule')}</div></div>`},
 {name:'Side panel · Report', html:`<div class="av-stage"><div class="av-panel">${pHead('Generate report','Pick who it’s for. Every report uses your branding.')}<div class="av-panel__body"><div style="display:flex;justify-content:space-between;gap:12px;font-size:12px;color:var(--av-text-helper)"><span>Production Demo · Oct 19, 2026</span><span>Letter · PDF</span></div>${repOpt('Executive summary','2 pages','Posture score, trend and the three fixes that matter.','leadership',1,['Posture score and 30-day trend','Top 3 fixes with effort','Compliance at a glance'],' style="top:22px;height:8px"')}${repOpt('Full findings','14 pages','Every finding with evidence and fix steps.','engineers',0,[],' style="top:20px;height:3px"')}${repOpt('Compliance mapping','6 pages','Controls passing and failing per framework.','auditors',0,[],' style="top:0;bottom:0;left:0;right:auto;width:4px"')}</div>${pFoot('Download PDF')}</div></div>`},
 {name:'Report preview', html:`<div class="av-repview"><div class="av-repview__bar"><div class="av-row" style="gap:14px"><button class="av-repview__back" aria-label="Back to report options">${xi('back',16,2)}</button><div class="av-repview__t"><b>Executive summary</b><span>2 pages · Letter · For leadership</span></div></div><div class="av-repview__tabs"><button aria-pressed="true">Executive</button><button>Full findings</button><button>Compliance</button></div><div class="av-row" style="gap:16px"><button class="av-repview__close">Close</button><button class="av-btn av-repview__dl">${ic('download',16,2)}Download PDF</button></div></div><div class="av-repview__pages"><div class="av-repview__page" aria-label="Report page"></div></div></div>`},
 {name:'Help guide', html:`<div class="av-stage av-stage--center"><div class="av-guide" role="dialog" aria-label="Help guide"><button class="av-guide__close" aria-label="Close guide">${ic('x',16,2)}</button><div class="av-guide__media" aria-hidden="true"><img src="assets/help-guide-book.png" alt=""></div><div class="av-guide__side"><div class="av-guide__copy"><span class="av-eyebrow" style="color:var(--av-text-tertiary)">Step 1 of 8</span><h2>Overview</h2><p>Every scan rolls up into one posture score for the client you have selected.</p><p>Start here each day. The top three fixes are ranked by how much they raise the score.</p></div><div class="av-guide__foot"><span class="av-dots" aria-hidden="true">${Array.from({ length: 9 }, (_, i) => `<i${i === 1 ? ' class="is-on"' : ''}></i>`).join('')}</span><div class="av-row" style="gap:16px"><button class="av-btn av-btn--link">Back</button><button class="av-btn av-btn--primary">Next${arrow}</button></div></div></div></div></div>`},
 {name:'Toast', html:`<span class="av-toast-v2">${ic('check',16,2.2)}Scan started · about 6 minutes</span>`},
]};
const chatHead = `<header class="av-chat__head"><img src="${M('magnifier')}" alt=""><div class="av-chat__id"><b>Avistar Buddy</b><span>Reads your latest scan · Production Demo</span></div><button class="av-chat__new" aria-label="New conversation">New</button><button class="av-chat__x" aria-label="Close Avistar Buddy">${ic('x',16,2)}</button></header>`;
const chatForm = `<form class="av-chat__form" onsubmit="return false"><input placeholder="Ask Avistar Buddy one question…" aria-label="Your question"><button class="av-chat__send" type="submit" aria-label="Send">${xi('send',18,2.2)}</button></form>`;
const buddyChat = { id:'buddy-chat', label:'Avistar Buddy chat', desc:'AI assistant panel opened from the AviBuddy pill: fixed bottom-right, 420×640, Ion/Signal glow header with mascot, suggestion list when empty, Signal user bubbles, bot bubbles with “Do this next” steps and action pills.',
css:OV_CSS,
variants:[
 {name:'Empty', note:'Shown in place; in product it is position:fixed right/bottom 24px.', html:`<section class="av-chat" role="dialog" aria-label="Avistar Buddy" style="height:600px">${chatHead}<div class="av-chat__list"><div class="av-chat__hello">Hi Zalak. Ask me anything about this account and I’ll tell you what matters and what to do next. No digging required.</div><span class="av-eyebrow" style="font-size:10px">Try asking</span><div class="av-stack" style="gap:8px">${['What should I fix first today?','Why did my score go up this week?','Which identities are the riskiest?','Am I ready for a SOC 2 audit?'].map(q => `<button class="av-chat__sugg"><span>${q}</span><span>→</span></button>`).join('')}</div></div>${chatForm}</section>`},
 {name:'Conversation', html:`<section class="av-chat" role="dialog" aria-label="Avistar Buddy" style="height:600px">${chatHead}<div class="av-chat__list"><div class="av-msg--user">What should I fix first today?</div><div class="av-msg--bot"><img src="${M('magnifier')}" alt=""><div class="av-msg__bubble"><p>Close the two public S3 buckets. It’s the single biggest risk and takes about 4 minutes — your score goes from 64 to 71.</p><div class="av-msg__steps"><span class="av-eyebrow" style="font-size:10px">Do this next</span><div><b>01</b><span>Turn on Block Public Access for both buckets.</span></div><div><b>02</b><span>Remove the AllUsers grants from each ACL.</span></div></div><div class="av-msg__acts"><button>Open fix</button><button>Show buckets</button></div></div></div><div class="av-chat__busy"><img src="${M('magnifier')}" alt="">Reading your findings…</div></div>${chatForm}</section>`},
]};


// ── v2.2 · Engineering handbook + newly shipped dashboard elements ──
const SPEC_CSS = `.av-spec{width:100%;border:1px solid var(--av-border-subtle-00);border-radius:14px;overflow:hidden;background:var(--av-layer-01)}
.av-spec__row{display:grid;grid-template-columns:var(--av-spec-cols,minmax(0,1.1fr) minmax(0,1fr) minmax(0,1.6fr));gap:8px 16px;align-items:center;padding:10px clamp(.75rem,3vw,1.25rem);border-top:1px solid var(--av-layer-05);font-size:13px;color:var(--av-text-secondary)}
.av-spec__row:first-child{border-top:0}
.av-spec__row--head{background:var(--av-layer-02);font:10px var(--av-font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--av-text-placeholder)}
.av-spec code{font:12px var(--av-font-mono);color:var(--av-text-primary);overflow-wrap:anywhere}
.av-spec__sw{display:inline-block;width:14px;height:14px;margin-right:8px;vertical-align:-2px;border-radius:4px;border:1px solid var(--av-border-strong-01)}
.av-rules{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:12px}
.av-rule{display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:14px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01)}
.av-rule b{font-size:14px;font-weight:600}.av-rule p{margin:0;font-size:13px;line-height:1.5;color:var(--av-text-tertiary)}.av-rule code{font:12px var(--av-font-mono);color:var(--av-text-info)}
.av-rule--do{border-color:color-mix(in srgb,var(--av-support-low) 35%,transparent)}.av-rule--dont{border-color:color-mix(in srgb,var(--av-support-critical) 35%,transparent)}
.av-rule__k{font:10px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase}.av-rule--do .av-rule__k{color:var(--av-text-info)}.av-rule--dont .av-rule__k{color:var(--av-border-error)}
.av-radius-demo{display:flex;flex-wrap:wrap;gap:16px;align-items:flex-end}.av-radius-demo div{display:flex;flex-direction:column;align-items:center;gap:8px;font:11px var(--av-font-mono);color:var(--av-text-helper)}.av-radius-demo span{display:block;width:72px;height:52px;border:1.5px solid var(--av-border-strong-02);background:var(--av-layer-03)}`;
const spec = (head, rows, cols) => `<div class="av-spec"${cols ? ` style="--av-spec-cols:${cols}"` : ''}><div class="av-spec__row av-spec__row--head">${head.map(h => `<span>${h}</span>`).join('')}</div>${rows.map(r => `<div class="av-spec__row">${r.map(c => `<span>${c}</span>`).join('')}</div>`).join('')}</div>`;
const rule = (k, t, p) => `<div class="av-rule av-rule--${k}"><span class="av-rule__k">${k === 'do' ? 'Do' : 'Don’t'}</span><b>${t}</b><p>${p}</p></div>`;
const note = (t, p) => `<div class="av-rule"><b>${t}</b><p>${p}</p></div>`;
const sw = c => `<i class="av-spec__sw" style="background:${c}"></i>`;
const handbook = { id:'eng-handbook', label:'Engineering handbook', desc:'The rules behind Dashboard v2 in one place: how the product’s short CSS variables map to tokens, the radius / spacing / elevation scales, breakpoints, z-index, motion, states and accessibility. Every screen page in this group follows these rules — start here before building.',
css:SPEC_CSS,
variants:[
 {name:'Token map · product var → token', note:'The dashboard prototype uses short vars; ship with the --av-* tokens on the right. Light values swap automatically under [data-theme="light"].', html:spec(['Product var','Token','Use'],[
  ['<code>--bg</code>','<code>--av-background</code>','Page canvas'],['<code>--c0 / --c1</code>','<code>--av-layer-01 / -02</code>','Cards · raised fields'],['<code>--c2 / --c3 / --c4</code>','<code>--av-layer-03 / -04 / -05</code>','Hover · chips · row rules'],
  ['<code>--b0 / --b1</code>','<code>--av-border-subtle-00 / -01</code>','Card hairline · dividers'],['<code>--b3 / --b4</code>','<code>--av-border-strong-01 / -02</code>','Inputs · outline buttons'],
  ['<code>--t0 / --t1 / --t2</code>','<code>--av-text-primary / secondary / tertiary</code>','Copy hierarchy'],['<code>--t3 / --t4</code>','<code>--av-text-helper / placeholder</code>','Meta · mono labels'],
  ['<code>--cta</code>','<code>--av-button-primary</code>','Signal in dark, ink in light'],['<code>--ion</code>','<code>--av-text-info · --av-support-low</code>','Positive · selected · links on hover'],
  ['<code>--ora · --amb · --sig</code>','<code>--av-tag-signal-text · --av-support-medium · --av-border-error</code>','High · warning · error'],
  ['<code>--shp · --shs · --shg</code>','<code>--av-shadow-panel · --av-shadow-toast · --av-shadow-glyph</code>','Popover/panel · toast · mascot tile'],['<code>--scrim · --scrim2</code>','<code>--av-overlay-dialog · --av-overlay-panel</code>','Drawer/dialog · side panel'],
  ['<code>--patf</code>','<code>--av-pattern-filter</code>','Inverts white line patterns in light'],['<code>--ctxpat</code>','line-core-dim.svg → line-core-ink.svg','Account switcher texture']])},
 {name:'Radius scale', html:`<div class="av-stack" style="gap:16px"><div class="av-radius-demo">${[['4','Mono tag'],['7','Inner segment'],['8','Small chip / tab'],['10','Control · field · group'],['12','Menu · row menu'],['14','Table card · panel'],['16','Card'],['20','Dialog'],['999','Button · pill']].map(([r, l]) => `<div><span style="border-radius:${r === '999' ? '999px' : r + 'px'}"></span>${r}px · ${l}</div>`).join('')}</div>${spec(['Element','Radius','Rule'],[['Fields, search, selects, segmented groups, filter tabs','10px outer · 7px inner','Never pill. Inner = outer − padding (3px).'],['Menus (profile, row actions, export)','12px','Items inside 8px.'],['Cards','16px (tables / list cards 14px)','Same radius on every card in a row.'],['Buttons, status pills, count badges','999px','Brand shape — only these are pills.'],['Mascot tiles','14px at 64px · 12px at 44px · 16px at 80px','Tile bg --av-layer-mascot.']])}</div>`},
 {name:'Spacing & layout rhythm', html:`<div class="av-stack" style="gap:12px">${spec(['Use','Value','Notes'],[['Page gutter','<code>clamp(1rem, 4vw, 2rem)</code>','Main padding left/right/top'],['Section gap','<code>clamp(1.25rem, 3vw, 1.75rem)</code>','Between stacked blocks on a page'],['Card padding','<code>clamp(1rem, 3vw, 1.25rem)</code>','Hero cards <code>clamp(1rem, 3.4vw, 1.5rem)</code>'],['Row padding','<code>14px clamp(1rem, 3vw, 1.25rem)</code>','Table / list rows'],['Card grid gap','12px · rows <code>clamp(.75rem, 2vw, 1rem)</code>','Fix cards, client cards'],['Main column','<code>max-width: clamp(1280px, 70vw, 1680px)</code>','Centred; intro max 1240px'],['Card grids','<code>repeat(auto-fit, minmax(min(100%, 220–280px), 1fr))</code>','No media queries'],['Flex rows','<code>flex: 2 1 min(100%, 520px)</code> + <code>1 1 min(100%, 300px)</code>','Wrap to full width under 320px'],['Wide tables','<code>min-width: 600–760px</code> inside <code>overflow-x: auto</code>','Scroll, never squash']])}</div>`},
 {name:'Breakpoints & responsive behaviour', html:spec(['Width','Behaviour','Implementation'],[['≥ 980px','Sidebar open (240px) or collapsed rail (68px)','User toggle; state persists'],['640–979px','Sidebar auto-collapses to the 68px rail','Resize listener sets collapsed'],['< 640px','Sidebar hidden → 44px menu button opens a 280px drawer with scrim; header hides org/client crumbs; Connect becomes icon-only','Only JS breakpoint that changes structure'],['Any','Grids reflow by auto-fit; images 100% / auto; canvases max-width 100%; long words break','No other media queries'],['pointer: coarse','Every button, link, input, select ≥ 44 × 44px','Single global rule']],'minmax(0,.6fr) minmax(0,1.6fr) minmax(0,1.2fr)')},
 {name:'Elevation, scrims & z-index', html:`<div class="av-stack" style="gap:12px">${spec(['Layer','z-index','Shadow / scrim (dark → light)'],[['Sidebar','20 (drawer 66)','— · drawer uses --av-shadow-panel'],['Top bar','15 → 50 while notifications open','Blur 12px on --av-background-header'],['Menus & popovers','40 · profile/row menus 70 over a transparent 69 click-catcher','0 24px 60px .55 → .14 + 0 2px 6px .06'],['Remediate drawer','40 scrim · 41 sheet','Scrim .55 → .32 + 2px blur'],['Side panel','58','Scrim .45 → .24 + 2px blur'],['Help guide','55','Scrim .55 → .32 + 3px blur'],['Report preview','60','Always dark #0B0B0C'],['Toast','60 · bottom-right 24px','0 16px 40px .4 → 0 12px 32px .16'],['Buddy pill / chat','44','Hidden while any drawer, panel, guide, report, mobile nav or notifications is open']],'minmax(0,1fr) minmax(0,1fr) minmax(0,1.6fr)')}</div>`},
 {name:'Motion', html:spec(['Token','Value','Use'],[['<code>--av-ease-standard</code>','cubic-bezier(.3,.7,.4,1)','Sheets, rows, bars'],['<code>--av-ease-enter</code>','cubic-bezier(.2,.8,.2,1)','Intro, panels slide-up'],['<code>--av-ease-spring</code>','cubic-bezier(.3,1.6,.5,1)','Checkmarks, logo tilt, chevrons'],['Hover','150ms colour · 200ms border/background','All interactive'],['Enter','slideUp 8px · 180–400ms','Menus 180ms, panels 300–400ms'],['Stagger','80–90ms per item','Fix cards, rows, bars'],['Reduced motion','Disable stagger and orb animation','prefers-reduced-motion']])},
 {name:'States & accessibility', html:`<div class="av-rules">${note('Hover','Rows → --av-layer-02; ghost buttons → --av-layer-03; outline buttons → border --av-border-strong-02; primary → brightness(1.08).')}${note('Focus','2px --av-focus outline, 2px offset. Fields: border --av-border-interactive + 3px --av-focus-ring.')}${note('Selected','Segments: inverse fill (--av-button-selected / --av-text-inverse). Rows/tiles: interactive border + 6% Ion tint.')}${note('Disabled','Opacity .4–.45, cursor default; keep the label readable. Primary disabled = --av-button-disabled.')}${note('Destructive','Always confirm. Removing a client or the org requires typing its name; member removal confirms in a side panel.')}${note('Live regions','Toast uses role="status" aria-live="polite". Menus use role="menu"/"menuitem"; dialogs role="dialog" + aria-label.')}${note('Contrast','Text ≥ 4.5:1 on its surface. On Ion/teal fills use --av-background as the ink so light mode flips correctly.')}${note('No dead ends','Every button opens something, changes state or navigates. External refs open in a new tab with rel="noopener".')}</div>`},
 {name:'Do / don’t', html:`<div class="av-rules">${rule('do','One primary per area','Signal pill for the main action; outline pill for secondary; underlined link for tertiary (“Schedule scans →”).')}${rule('dont','Mix radii in one row','A pill search next to a 10px select reads as two systems. Controls are 10px.')}${rule('do','Same mascot size per level','64px tiles everywhere a mascot heads a card or a fix; 44px only inside menus; 80px for empty states.')}${rule('dont','Hard-code dark colours','Use tokens so light mode works. The intro / org picker is the one always-dark surface.')}${rule('do','Centre header actions','Card header = 16px 20px padding, min-height 72px (96px with a 64px mascot), align-items: center.')}${rule('dont','Fixed pixel widths','Use min(100%, Npx), clamp() or fr tracks for anything structural.')}</div>`},
]};

// ── Profile menu ──
const PM_CSS = `.av-prof-trigger{display:flex;align-items:center;gap:10px;width:100%;min-height:46px;padding:8px 6px;border:0;border-radius:10px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}
.av-prof-trigger:hover,.av-prof-trigger[aria-expanded="true"]{background:var(--av-layer-03)}
.av-prof-trigger__t{flex:1;min-width:0;display:flex;flex-direction:column}.av-prof-trigger__t b{font-size:13px;font-weight:400}.av-prof-trigger__t span{font-size:12px;color:var(--av-text-helper);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.av-prof-trigger--pill{width:auto;height:44px;min-height:0;padding:0 10px 0 6px;border:1px solid transparent;border-radius:999px;color:var(--av-text-muted-intro)}.av-prof-trigger--pill:hover,.av-prof-trigger--pill[aria-expanded="true"]{background:transparent;border-color:var(--av-border-strong-02)}
.av-prof-menu{width:min(260px,calc(100vw - 32px));padding:14px;border-radius:12px;border:1px solid var(--av-border-strong-01);background:#0B0B0C url(assets/profile-iso.png) center 35%/cover no-repeat;box-shadow:var(--av-shadow-panel);animation:av-slide-up .2s var(--av-ease-standard)}
.av-prof-menu__panel{padding:4px;border-radius:10px;border:1px solid var(--av-border-strong-01);background:color-mix(in srgb,var(--av-layer-01) 94%,transparent);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}
.av-prof-menu__id{display:flex;align-items:center;gap:10px;padding:8px 8px 10px;margin-bottom:4px;border-bottom:1px solid var(--av-border-subtle-00)}
.av-prof-menu__id span{min-width:0;display:flex;flex-direction:column;gap:2px}.av-prof-menu__id b{font-size:13px;font-weight:600}.av-prof-menu__id small{font-size:12px;color:var(--av-text-helper);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-mitem{display:flex;align-items:center;gap:10px;width:100%;height:36px;padding:0 8px;border:0;border-radius:8px;background:transparent;color:var(--av-text-primary);font:13px var(--av-font-sans);text-align:left;cursor:pointer}
.av-mitem:hover{background:var(--av-layer-03)}.av-mitem:disabled{opacity:.45;cursor:default}.av-mitem--quiet{color:var(--av-text-tertiary)}.av-mitem--danger{color:var(--av-tag-signal-text)}
.av-mitem .av-nav-glyph{width:18px;height:18px}
.av-msep{height:1px;margin:4px 8px;background:var(--av-border-subtle-00)}
.av-mlabel{padding:8px 8px 6px;font:10px var(--av-font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--av-text-helper);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.av-rowmenu{width:208px;padding:4px;border-radius:12px;border:1px solid var(--av-border-strong-01);background:var(--av-layer-01);box-shadow:var(--av-shadow-panel);animation:av-slide-up .18s var(--av-ease-standard)}`;
const SIGNOUT = ['<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 8l-4 4 4 4"/><path d="M6 12h10"/>','<rect x="15" y="4" width="5" height="16" rx="2"/>','M13.9 12h2.2'];
const outGlyph = `<svg class="av-nav-glyph" viewBox="0 0 24 24" aria-hidden="true"><g class="av-nav-glyph__hi">${SIGNOUT[1]}</g><g class="av-nav-glyph__line">${SIGNOUT[0]}</g><path class="av-nav-glyph__gap" d="${SIGNOUT[2]}"/></svg>`;
const profMenu = (help) => `<div class="av-prof-menu" role="menu" aria-label="Profile"><div class="av-prof-menu__panel"><div class="av-prof-menu__id"><span class="av-avatar av-avatar--md">Z</span><span><b>Zalak</b><small>zalak@avistar.ai</small></span></div><button class="av-mitem" role="menuitem">${navGlyph('members')}Edit profile</button>${help ? `<button class="av-mitem" role="menuitem">${navGlyph('bulletins')}Help guide</button>` : ''}<div class="av-msep"></div><button class="av-mitem av-mitem--quiet" role="menuitem">${outGlyph}Sign out</button></div></div>`;
const profile = { id:'profile-menu', label:'Profile menu', desc:'Opened from the sidebar user row (menu opens upward, fixed 112px above the bottom) and the intro header pill. Cube pattern fills the whole menu with 14px showing on every side; one blurred panel holds identity + actions. Edit profile → side panel; Sign out → toast, then Landing page.',
css:PM_CSS,
variants:[
 {name:'Triggers', html:`<div class="av-stack" style="max-width:260px"><button class="av-prof-trigger" aria-expanded="false"><span class="av-avatar">Z</span><span class="av-prof-trigger__t"><b>Zalak</b><span>zalak@avistar.ai</span></span>${ic('chevUp',14,2)}</button><button class="av-prof-trigger av-prof-trigger--pill" aria-expanded="true"><span class="av-avatar av-avatar--md">Z</span><span style="font-size:13px">zalak@avistar.ai</span>${ic('chevDown',14,2)}</button></div>`},
 {name:'Sidebar menu', note:'Items: Edit profile (members glyph), Help guide (bulletins glyph), Sign out (sign-out glyph, quiet). 36px items, 8px radius.', html:profMenu(true)},
 {name:'Intro menu', html:profMenu(false)},
 {name:'Edit profile panel', html:`<div class="av-stage"><div class="av-panel"><div class="av-panel__head"><div class="av-panel__ttl"><h2>Edit profile</h2><p>Shown to teammates and on reports you generate.</p></div><button class="av-more-btn" aria-label="Close">${ic('x',16,2)}</button></div><div class="av-panel__body"><div class="av-row" style="gap:14px"><span class="av-avatar" style="width:56px;height:56px;font-size:20px">Z</span><span class="av-stack" style="gap:2px"><b style="font-size:15px">Zalak</b><span style="font-size:12px;color:var(--av-text-helper)">Initials are used as your avatar.</span></span></div><label class="av-field"><span class="av-field__label">Full name</span><input class="av-input" value="Zalak"></label><label class="av-field"><span class="av-field__label">Email</span><input class="av-input" value="zalak@avistar.ai"><span class="av-field__helper">Sign-in and alert emails go here.</span></label><label class="av-field"><span class="av-field__label">Job title</span><input class="av-input" placeholder="e.g. Security lead"></label></div><div class="av-panel__foot"><button class="av-btn av-btn--secondary">Cancel</button><button class="av-btn av-btn--primary" style="height:44px">Save changes</button></div></div></div>`},
]};

// ── Row actions ──
const rowMenu = (label, items) => `<div class="av-rowmenu" role="menu" aria-label="${label}"><div class="av-mlabel">${label}</div>${items.map(i => i === '-' ? '<div class="av-msep"></div>' : `<button class="av-mitem${i[1] ? ' av-mitem--' + i[1] : ''}" role="menuitem"${i[2] ? ' disabled' : ''}>${i[0]}</button>`).join('')}</div>`;
const rowActions = { id:'row-actions', label:'Row actions', desc:'The ⋯ button (36px, 8px radius) on Clients and Members rows opens a 208px menu positioned from the button rect: right-aligned, flips above when there’s no room below, closes on scroll, resize or outside click. Destructive items sit last, after a divider, in High text.',
css:PM_CSS + `\n.av-dots-btn{width:36px;height:36px;border:0;border-radius:8px;background:transparent;color:var(--av-text-helper);cursor:pointer;display:flex;align-items:center;justify-content:center}.av-dots-btn:hover,.av-dots-btn[aria-expanded="true"]{background:var(--av-layer-04);color:var(--av-text-primary)}`,
variants:[
 {name:'Trigger', html:`<div class="av-row"><button class="av-dots-btn" aria-label="More actions">${ic('dots',18,3)}</button><button class="av-dots-btn" aria-label="More actions" aria-expanded="true">${ic('dots',18,3)}</button></div>`},
 {name:'Client row', html:rowMenu('Hydroponic Cloud',[['Open dashboard'],['Generate report'],['Rename'],['Archive'],'-',['Remove client','danger']])},
 {name:'Archived client', html:rowMenu('Acme Health',[['Open dashboard','',1],['Generate report','',1],['Rename'],['Restore'],'-',['Remove client','danger']])},
 {name:'Member row', html:rowMenu('maya@avistar.ai',[['Admin (current)','',1],['Make Operator'],['Make Viewer'],'-',['Remove member','danger']])},
 {name:'Invited member', html:rowMenu('new@acme.com',[['Make Admin'],['Make Operator'],['Viewer (current)','',1],'-',['Resend invite'],['Remove member','danger']])},
 {name:'Your own row', html:rowMenu('zalak@avistar.ai',[['Edit profile'],'-',['Leave organization','danger']])},
 {name:'Typed confirm (remove client)', html:`<div class="av-stage"><div class="av-panel"><div class="av-panel__head"><div class="av-panel__ttl"><h2>Remove Hydroponic Cloud?</h2><p>Scans stop for all of its accounts. Past reports stay available in Billing.</p></div><button class="av-more-btn" aria-label="Close">${ic('x',16,2)}</button></div><div class="av-panel__body"><label class="av-field"><span class="av-field__label">Type the client name to confirm</span><input class="av-input" placeholder="Hydroponic Cloud"></label></div><div class="av-panel__foot"><button class="av-btn av-btn--secondary">Cancel</button><button class="av-btn av-btn--danger-solid" style="height:44px" disabled>Remove client</button></div></div></div>`},
]};

// ── Mobile navigation ──
const mobileNav = { id:'mobile-nav', label:'Mobile navigation', desc:'Under 640px the sidebar leaves the layout: a 44px menu button starts the top bar, crumbs collapse to provider + account, Connect becomes icon-only. The drawer is the full sidebar at min(280px, 86vw) over the dialog scrim; picking a page or tapping the scrim closes it.',
css:`.av-mtop{display:flex;align-items:center;gap:10px;height:64px;padding:0 clamp(1rem,4vw,2rem);border-bottom:1px solid var(--av-border-subtle-00);background:var(--av-background-header)}
.av-menu-btn{width:44px;height:44px;flex-shrink:0;margin-left:-6px;border:1px solid var(--av-border-subtle-00);border-radius:10px;background:var(--av-layer-01);color:var(--av-text-primary);display:flex;align-items:center;justify-content:center;cursor:pointer}
.av-btn--icon{width:44px;padding:0}
.av-mdrawer{position:relative;height:560px;border-radius:16px;border:1px solid var(--av-border-subtle-00);overflow:hidden;background:var(--av-background)}
.av-mdrawer__scrim{position:absolute;inset:0;background:var(--av-overlay-dialog);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}
.av-mdrawer .av-sidebar{position:absolute;top:0;left:0;height:100%;width:min(280px,86vw);box-shadow:var(--av-shadow-panel)}`,
variants:[
 {name:'Top bar · 375px', html:`<div style="max-width:375px"><header class="av-mtop"><button class="av-menu-btn" aria-label="Open menu">${ic('list',18,1.8)}</button><button class="av-ctx-btn" style="flex:0 1 auto"><img class="av-logo-aws av-ctx-btn__logo" src="assets/logo-aws-dark.svg" alt="AWS"><span class="av-ctx-btn__acct">Production Demo</span><span class="av-ctx-btn__chev">${ic('chevDown',14,2)}</span></button><span style="flex:1"></span><button class="av-btn av-btn--primary av-btn--icon" aria-label="Connect account">${ic('plus',14,2.2)}</button><button class="av-bell" aria-label="Notifications">${ic('bell',18,1.6)}<span class="av-bell__dot"></span></button></header></div>`},
 {name:'Drawer open', html:`<div class="av-mdrawer" style="max-width:375px"><div class="av-mdrawer__scrim"></div><aside class="av-sidebar">${sideBrand}${sideNav('overview')}${sideFoot.replace('Collapse', 'Close menu')}</aside></div>`},
]};

// ── Patterns refreshed with the latest dashboard decisions ──
const latest = { id:'v2-latest', label:'Latest dashboard decisions', desc:'Small rules shipped after the first v2 sync, collected so nothing is missed: card headers, mascot sizing, CTA hierarchy, the severity forecast tag, toast placement and Buddy visibility.',
css:`.av-chead{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 16px;min-height:72px;padding:16px clamp(1rem,3vw,1.25rem)}
.av-chead--m{min-height:96px;padding:18px clamp(1rem,3vw,1.25rem)}
.av-chead__id{display:flex;align-items:center;gap:14px;min-width:0}.av-chead__id h2{margin:0;font-size:18px;font-weight:600;letter-spacing:-0.015em}.av-chead__id span{font-size:13px;color:var(--av-text-helper)}
.av-fc-tag{display:inline-flex;padding:6px 10px;border-radius:8px;font-size:12px;font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums;transition:background .25s,color .25s,box-shadow .25s}
.av-fc-tag--neutral{background:var(--av-text-primary);color:var(--av-background)}`,
variants:[
 {name:'Card header · icon', note:'Cloud accounts, Activity, Compliance… 40px 3D icon, 18/600 title, CTA vertically centred.', html:`<div class="av-box"><div class="av-chead"><span class="av-chead__id"><img class="av-i3" src="${I('cost3')}" alt=""><span><h2>Cloud accounts</h2></span></span><button class="av-btn av-btn--primary av-btn--sm">Connect account${arrow}</button></div></div>`},
 {name:'Card header · mascot', note:'Start here, Stale scans, Fix these first: 64px mascot tile, header min-height 96px. List rows below run edge-to-edge (14px × card padding) on a layer-05 rule.', html:`<div class="av-box"><div class="av-chead av-chead--m"><span class="av-chead__id">${masc('magnifier','lg')}<span class="av-stack" style="gap:2px"><h2>Start here</h2><span>Lowest scores first. One fix each.</span></span></span><button class="av-btn av-btn--primary av-btn--sm">All findings${arrow}</button></div>${focus(1,'Northpeak Clinics','att','Needs attention','Close the top 3 critical findings','6 critical','58','av-posture--poor','+7 pts').replace('class="av-focus-row"','class="av-focus-row" style="padding:14px clamp(1rem,3vw,1.25rem);border-top-color:var(--av-layer-05)"')}</div>`},
 {name:'CTA hierarchy', html:`<div class="av-row" style="gap:16px"><button class="av-btn av-btn--primary">Run scan</button><button class="av-btn av-btn--primary av-btn--sm">All findings${arrow}</button><button class="av-btn av-btn--secondary" style="height:44px;min-width:220px">Fix now${arrow}</button><button class="av-btn av-btn--link">Schedule scans${arrow}</button></div>`},
 {name:'Forecast tag states', note:'Neutral by default; hovering a severity row recolours it (Critical/High → white text, Medium/Low → ink) and adds a 33% glow of the same colour.', html:`<div class="av-row" style="gap:10px"><span class="av-fc-tag av-fc-tag--neutral">+15% in 14d</span><span class="av-fc-tag" style="background:#FF4B1F;color:#FFF;box-shadow:0 6px 18px #FF4B1F55">Critical · +60% in 14d</span><span class="av-fc-tag" style="background:#FF8A5B;color:#FFF;box-shadow:0 6px 18px #FF8A5B55">High · +22% in 14d</span><span class="av-fc-tag" style="background:#FFB547;color:#141414;box-shadow:0 6px 18px #FFB54755">Medium · +7% in 14d</span><span class="av-fc-tag" style="background:#1FDDFF;color:#141414;box-shadow:0 6px 18px #1FDDFF55">Low · +7% in 14d</span></div>`},
 {name:'Toast placement', note:'Bottom-right 24px, max-width min(360px, 100vw − 48px), role="status". When Buddy chat is open on wide screens it shifts left of the chat.', html:`<div style="position:relative;height:120px;border-radius:14px;border:1px dashed var(--av-border-strong-01)"><span class="av-toast-v2" style="position:absolute;right:16px;bottom:16px">${ic('check',16,2.2)}Profile updated</span></div>`},
]};

export const SCREENS = [handbook, kit, latest, profile, rowActions, mobileNav, orgPanel, portfolio, connect, findings, tables, settings, overlays, buddyChat];

const fixCard = (sev, m, title, meta, gain, clears, effort) => `  <article class="av-fix-card av-fix-card--${sev}">
    <div class="av-weave" aria-hidden="true"></div>
    <div class="av-fix-card__top">${masc(m,'lg')}<span class="av-sev-pill av-sev-pill--${sev}">${sev}</span></div>
    <div class="av-fix-card__body"><span class="av-fix-card__title">${title}</span><span class="av-fix-card__meta">${meta}</span></div>
    <div class="av-fix-card__stats"><div class="av-fix-card__stat"><span>Score</span><b class="av-fix-card__gain">${gain}</b></div><div class="av-fix-card__stat"><span>Clears</span><b>${clears}</b></div><div class="av-fix-card__stat"><span>Effort</span><b>${effort}</b></div></div>
    <button class="av-btn av-btn--secondary av-btn--block" style="margin-top:auto;height:44px">Fix now${arrow}</button>
  </article>`;
const orgList = `<div class="av-org-list">
${orgRow('shield','AD','var(--av-support-critical)','Avistar Demo Org','10 clients · 24 accounts','OWNER',true)}
${orgRow('key','RP','var(--av-text-info)','Ridgeway Partners','3 clients · 5 accounts','ADMIN')}
${orgRow('bucket','NW','var(--av-support-medium)','Northwind MSSP','1 client · 2 accounts','VIEWER')}
</div>`;
export const OVERRIDES = {
  'sidebar': { desc:'Section heads in mono (Organization · Client · Intel · Workspace), 20px duo-tone line glyphs with an Ion highlight, 38px items on a 9px radius, Ion gradient active pill, count badges, user footer with collapse. Wordmark swaps to ink in light theme.', cssAdd:SIDEBAR_CSS,
    variants:[{name:'Full', html:`<aside class="av-sidebar" style="height:640px;position:relative">\n  ${sideBrand}\n  ${sideNav('overview')}\n  ${sideFoot}\n</aside>`},{name:'Collapsed', html:`<aside class="av-sidebar av-sidebar--collapsed" style="height:560px;position:relative">\n  ${sideBrand}\n  ${sideNav('findings')}\n  ${sideFoot}\n</aside>`}] },
  'top-bar': { desc:'64px blurred bar: account switcher (org / client / provider logo + account, chevron flips on open), Connect account CTA and bordered bell with unread dot. Org/client crumbs hide under 640px.', cssAdd:TOPBAR_CSS + '\n' + CTX_CSS + '\n' + NOTIF_CSS,
    variants: orig => [{name:'Dashboard', html:topbar(true)}, {name:'Account switcher · open', html:`<div class="av-stack" style="gap:8px">${ctxBtn(true)}${ctxMenu(false)}</div>`}, {name:'Account switcher · archived client', html:ctxMenu(true)}, {name:'Notifications · bell', html:`<div class="av-row">${bell(true)}${bell(false)}${bell(true, true)}</div>`}, {name:'Notifications · panel', html:notifPanel(false)}, {name:'Notifications · empty', html:notifPanel(true)}, ...orig.filter(v => /Intro/.test(v.name))] },
  'story-banner': { desc:'Contextual help strip at the top of every page: Help guide book art (64px, 4:3), title, one line, underlined “Help guide →” that opens the guide dialog.', cssAdd:STORY_CSS,
    variants:[{name:'Overview', html:story('Everything flows into one score.','Every scan feeds the number below. Close the top three fixes and watch it climb.')},{name:'Findings', html:story('Fix by resource, not by rule.','Each row is one resource. Open it to see every finding and the fastest fix.')}] },
  'org-row': { desc:'Mascot tile avatar (48px, mascots-v4) with initials badge, name + meta, mono pill role tag, round settings button, arrow. Solid 1px border on a 16px radius; selected = stronger border + inverse arrow.', cssAdd:ORG_CSS,
    variants:[{name:'List', html:orgList},{name:'With create', html:`${orgList}\n<button class="av-btn av-btn--primary av-btn--xl" style="margin-top:8px">${ic('plus',16,2)}Create organization</button>`}] },
  'client-card': { desc:'Intro picker card — solid hairline border, 16px radius. Name + meta, posture numeral coloured by scale, provider mono tags, footer with status dot and “Open →”. Cards/List view switch; list = 5-column table. Archived = 50%.', cssAdd:CLIENT_CSS,
    variants: orig => [...orig, {name:'List view', html:`<div class="av-stack"><div class="av-row"><label class="av-find av-find--pill" style="width:min(320px,100%)">${ic('search',16,1.8)}<input placeholder="Search clients"></label><div class="av-vswitch av-vswitch--pill"><button>${ic('grid',14)}Cards</button><button aria-pressed="true">${ic('list',14)}List</button></div></div><div class="av-client-table"><div class="av-client-table__row av-client-table__row--head"><span>CLIENT</span><span>CLOUDS</span><span style="text-align:right">POSTURE</span><span>FINDINGS</span><span></span></div>
${cRow('Hydroponic Cloud','Agriculture',['AWS','AZURE','GCP'],'64','av-posture--poor','293 open · 5 critical','var(--av-support-critical)')}
${cRow('Acme Health','Healthcare',['AZURE'],'72','av-posture--fair','41 open · scanned 6h ago','var(--av-support-medium)')}
${cRow('Ridgeway Labs','Technology / SaaS',['AWS'],'88','av-posture--good','9 open · scanned 1h ago','var(--av-support-low)')}</div></div>`}, {name:'No results', html:`<div class="av-empty" style="border:0">${masc('magnifier','xl')}No clients match “zeta”.</div>`}] },
  'buddy-launcher': { desc:'Floating “Ask AviBuddy” pill on a light mascot tile (#F2F1ED, constant in both themes). Fixed 24px from the bottom, centred in the main column so it tracks the sidebar width. Opens Avistar Buddy chat.', cssAdd:BUDDY_CSS,
    variants:[{name:'Default', note:'Shown in place here; in product it is position:fixed.', html:`<button class="av-buddy" style="position:relative;left:auto;bottom:auto;transform:none"><img src="${M('magnifier')}" alt="">Ask AviBuddy</button>`, code:`<button class="av-buddy" aria-label="Ask AviBuddy"><img src="assets/mascots-v4/magnifier.png" alt="">Ask AviBuddy</button>`}] },
  'empty-state': { desc:'Mascot tile (80px, mascots-v4 on #F2F1ED) + title + one line + one action. Dashed border for empty, solid for error.', cssAdd:EMPTY_CSS },
  'app-shell': { variants: orig => orig.map(v => ({ ...v, html: v.html.replace(/<nav class="av-sidebar__nav">[\s\S]*?<\/nav>/, `<nav class="av-sidebar__nav">${navItem(['overview','Overview'], true)}${navItem(['findings','Findings'])}${navItem(['identities','Identities'])}</nav>`) })) },
  'icons': { desc:'Only what Dashboard v2 ships: line icons for actions, 3D icons for card heads, nav glyphs for the sidebar, mascots for moments, provider logos and the brand mark.', variants: orig => [...orig.filter(v => /Line set|Provider logos|Brand mark/.test(v.name)), ...kit.variants.filter(v => /Mascot set|3D icons|Nav glyphs/.test(v.name)).map(v => ({ ...v, name: v.name + ' · v2' }))] },
  'fix-card': { desc:'“Fix these first” cards: mascot glyph tile (64px, 14px radius, drop shadow), mono severity pill, title + resource, dashed stat row (score gain in Ion), full-width outline “Fix now →” pill. Background = severity glow at 13% over a layer gradient; border = severity at 22%.',
    cssAdd:`.av-fix-card{background:radial-gradient(110% 90% at 0% 0%,color-mix(in srgb,var(--av-fix) 13%,transparent),transparent 58%),linear-gradient(180deg,var(--av-layer-gradient-top),var(--av-layer-gradient-bottom))}`,
    variants: orig => [{name:'Row of three', html:`<div class="av-fix-grid">\n${fixCard('critical','bucket','Block public write on 2 buckets','S3 · Production Demo','+7','2 critical','~4 min')}\n${fixCard('high','idcard','Turn on MFA for 52 console users','IAM · Production Demo','+5','52 high','~10 min')}\n${fixCard('medium','magnifier','Require HTTPS on 31 endpoints','Transmission · Production Demo','+3','31 medium','~5 min')}\n</div>`}, {name:'Single', html:`<div style="max-width:320px">${fixCard('critical','bucket','Block public write on 2 buckets','S3 · Production Demo','+7','2 critical','~4 min')}</div>`}, ...orig.filter(v => /pill/i.test(v.name))] },
};
OVERRIDES['card-anatomy'] = { desc:'Every dashboard card = .av-card (16px radius, layer-01, hairline) + optional glow + optional line-weave corner + head (3D icon 40 from icons-3d, or tile 44; title 18/600, sub 13).', cssAdd:'.av-card__glyph{width:40px;height:40px}.av-card__tile img{width:28px;height:28px;object-fit:contain}.av-kpi__glyph{width:38px;height:38px;margin:-6px 0}.av-stat__label img{width:36px;height:36px;margin:-6px 0;object-fit:contain}.av-gnode__dot img{width:20px;height:20px;object-fit:contain}' };
OVERRIDES['search'] = { cssAdd: "/* v2 radius rule: controls 10px, inner segments 7px — never pill */\n.av-search,.av-search--field,.av-input,.av-select,.av-dropdown__trigger,.av-textarea,.av-number,.av-date,.av-date-range,.av-input-group{border-radius:10px}\n.av-switcher,.av-tabs--pill{border-radius:10px}.av-switcher button,.av-tabs--pill .av-tab{border-radius:7px}", desc: 'Search field — 10px radius like every control. Field and toolbar variants share the same corner.' };
OVERRIDES['tabs'] = { cssAdd: '.av-tabs--pill{border-radius:10px}.av-tabs--pill .av-tab{border-radius:7px}' };
OVERRIDES['content-switcher'] = { cssAdd: '.av-switcher{border-radius:10px}.av-switcher button{border-radius:7px}' };
OVERRIDES['button'] = { cssAdd: ".av-ibtn{width:40px;height:40px;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;border-radius:999px;border:1px solid var(--av-border-strong-01);background:transparent;color:var(--av-text-tertiary);cursor:pointer;position:relative;transition:background .2s,border-color .2s,color .15s}\n.av-ibtn:hover{background:var(--av-layer-04);border-color:var(--av-border-strong-02);color:var(--av-text-primary)}\n.av-ibtn[aria-pressed=\"true\"],.av-ibtn[aria-expanded=\"true\"]{background:var(--av-button-selected,var(--av-text-primary));border-color:transparent;color:var(--av-text-inverse,var(--av-background))}\n.av-ibtn--ghost{width:36px;height:36px;border-color:transparent}.av-ibtn--ghost:hover{border-color:transparent}\n.av-ibtn--primary{border:0;background:var(--av-button-primary);color:#FFF}.av-ibtn--primary:hover{background:var(--av-button-primary);filter:brightness(1.08);color:#FFF}\n.av-ibtn--lg{width:44px;height:44px}\n.av-ibtn__dot{position:absolute;top:8px;right:9px;width:7px;height:7px;border-radius:50%;background:var(--av-support-critical);box-shadow:0 0 0 2px var(--av-background)}\n.av-bell,.av-more-btn,.av-dots-btn,.av-menu-btn{border-radius:999px!important}", variants: orig => [{ name: 'Icon buttons · one system', note: 'Every icon-only button is a circle. Outline 40px is the default (bell, settings, close, back, menu, open link). Ghost 36px only inside rows (⋯, remove). Primary 44px for send / connect. Selected or open = inverse fill. Never square, never a filled grey disc.', html: `<div class="av-stack" style="gap:16px"><div class="av-row" style="gap:12px;align-items:center"><button class="av-ibtn" aria-label="Notifications">${ic('bell',18,1.6)}<span class="av-ibtn__dot"></span></button><button class="av-ibtn" aria-label="Settings">${ic('gear',18,1.6)}</button><button class="av-ibtn" aria-label="Settings" aria-pressed="true">${ic('gear',18,1.6)}</button><button class="av-ibtn" aria-label="Open">${ic('arrow',16,2)}</button><button class="av-ibtn" aria-label="Expand" aria-expanded="true">${ic('chevDown',16,2)}</button><button class="av-ibtn av-ibtn--ghost" aria-label="More actions">${ic('dots',18,3)}</button><button class="av-ibtn av-ibtn--primary av-ibtn--lg" aria-label="Send">${ic('up',16,2.2)}</button></div><div class="av-row" style="gap:24px;font:11px var(--av-font-mono);color:var(--av-text-helper)"><span>Outline 40 · default</span><span>Selected · inverse</span><span>Ghost 36 · in rows</span><span>Primary 44 · send</span></div></div>` }, ...orig] };
export const PATH_PATCH = { I3N, MV4, LABEL_NAV, MASC_NAV, navGlyph };

