// Avistar Dashboard DS — bundled library (generated from ds/*.js)
(function(){
const T = (() => {

// Avistar Dashboard — design tokens (single source of truth)
// [category, token, dark, light, usage]
const COLOR_TOKENS = [
  ['Background','--av-background','#0B0B0C','#F4F2EE','App / page canvas'],
  ['Background','--av-background-intro','#060708','#F4F2EE','Org & client picker canvas'],
  ['Background','--av-background-header','rgba(11,11,12,.86)','rgba(244,242,238,.86)','Sticky top bar (with backdrop blur)'],
  ['Background','--av-background-hover','rgba(255,255,255,.04)','rgba(20,20,20,.04)','Hover on transparent rows'],
  ['Background','--av-background-active','rgba(255,255,255,.08)','rgba(20,20,20,.08)','Pressed transparent rows'],
  ['Background','--av-background-selected','rgba(31,221,255,.08)','rgba(0,106,130,.08)','Selected rows / items'],
  ['Background','--av-background-inverse','#F2F2F0','#141414','Tooltip, selected switcher, toast'],
  ['Background','--av-background-inverse-hover','#FFFFFF','#2A2A2C','Hover on inverse surfaces'],
  ['Background','--av-background-brand','#FF4B1F','#141414','Primary CTA fill'],
  ['Background','--av-background-glow-signal','rgba(255,75,31,.16)','rgba(194,48,10,.07)','Radial glow — attention cards'],
  ['Background','--av-background-glow-ion','rgba(31,221,255,.14)','rgba(0,106,130,.07)','Radial glow — positive / interactive'],
  ['Background','--av-background-glow-amber','rgba(255,181,71,.14)','rgba(138,83,0,.07)','Radial glow — AWS / caution'],

  ['Layer','--av-layer-01','#0F0F11','#FFFFFF','Cards, tables, panels'],
  ['Layer','--av-layer-02','#121214','#FAF9F7','Raised inside a card, fields'],
  ['Layer','--av-layer-03','#141416','#F3F1ED','Hover / chips / nav active'],
  ['Layer','--av-layer-04','#18181B','#EDEBE7','Pressed, tag fill, progress track'],
  ['Layer','--av-layer-05','#1A1A1D','#ECEAE6','Menu highlight, badge fill'],
  ['Layer','--av-layer-hover-01','#141416','#F3F1ED','Hover on layer-01'],
  ['Layer','--av-layer-hover-02','#18181B','#EDEBE7','Hover on layer-02'],
  ['Layer','--av-layer-active-01','#1A1A1D','#ECEAE6','Pressed on layer-01'],
  ['Layer','--av-layer-selected-01','rgba(31,221,255,.06)','rgba(0,106,130,.06)','Selected table row'],
  ['Layer','--av-layer-intro','#0B0C0E','#FFFFFF','Client / org card on intro'],
  ['Layer','--av-layer-intro-hover','#101114','#FAF9F7','Hover on intro card'],
  ['Layer','--av-field-01','#121214','#FFFFFF','Inputs, selects, textareas'],
  ['Layer','--av-field-hover-01','#141416','#FAF9F7','Field hover'],
  ['Layer','--av-field-02','#0D0E10','#F3F1ED','Segmented / switcher track'],

  ['Border','--av-border-subtle-00','#1E1E21','#E6E4E0','Card hairline, table rules'],
  ['Border','--av-border-subtle-01','#232326','#DFDDD9','Dividers inside cards, menu border'],
  ['Border','--av-border-subtle-02','#26262A','#D8D6D2','Disabled borders'],
  ['Border','--av-border-strong-01','#2A2A2E','#D4D2CE','Inputs, secondary buttons'],
  ['Border','--av-border-strong-02','#3A3A40','#BDBBB7','Checkbox, tags, link underline'],
  ['Border','--av-border-interactive','#1FDDFF','#006A82','Focused field, checked control'],
  ['Border','--av-border-dashed','rgba(255,255,255,.16)','rgba(20,20,20,.18)','Intro cards & frames (dashed)'],
  ['Border','--av-border-dashed-hover','rgba(255,255,255,.5)','rgba(20,20,20,.5)','Dashed card hover'],
  ['Border','--av-border-selected','rgba(255,255,255,.6)','rgba(20,20,20,.7)','Selected intro card (solid)'],
  ['Border','--av-border-divider','rgba(255,255,255,.08)','rgba(20,20,20,.08)','Card footer rule'],
  ['Border','--av-border-nav-active','rgba(31,221,255,.18)','rgba(0,106,130,.22)','Active sidebar item ring'],
  ['Border','--av-border-error','#FF6A45','#C2300A','Invalid field'],
  ['Border','--av-border-inverse','#F2F2F0','#141414','Selected icon button'],

  ['Text','--av-text-primary','#F2F2F0','#141414','Headings, values, primary copy'],
  ['Text','--av-text-secondary','#D9D7D2','#2A2A2C','Labels, KPI titles'],
  ['Text','--av-text-tertiary','#A3A19C','#454440','Body muted, subtitles'],
  ['Text','--av-text-helper','#7A7874','#5E5D59','Helper text, eyebrow, meta'],
  ['Text','--av-text-placeholder','#5A5955','#6E6C68','Placeholder'],
  ['Text','--av-text-disabled','#5A5955','#BDBBB7','Disabled text'],
  ['Text','--av-text-meta','#8C8A85','#5E5D59','Card meta (“3 accounts”)'],
  ['Text','--av-text-muted-intro','#B8B6B1','#454440','Intro body, role tag'],
  ['Text','--av-text-label','#6B6A67','#6E6C68','Mono micro labels (POSTURE)'],
  ['Text','--av-text-on-color','#FFFFFF','#FFFFFF','On brand / danger fills'],
  ['Text','--av-text-inverse','#060708','#FFFFFF','On inverse surfaces'],
  ['Text','--av-text-error','#FF6A45','#C2300A','Error messages'],
  ['Text','--av-text-success','#3DDC97','#0E7A4E','Success messages'],
  ['Text','--av-text-warning','#FFB547','#8A5300','Warnings'],
  ['Text','--av-text-info','#1FDDFF','#006A82','Info, positive deltas, IDs'],

  ['Link','--av-link-primary','#F2F2F0','#141414','Inline & action links'],
  ['Link','--av-link-primary-hover','#1FDDFF','#006A82','Link hover'],
  ['Link','--av-link-secondary','#A3A19C','#454440','Breadcrumb / quiet links'],
  ['Link','--av-link-secondary-hover','#F2F2F0','#141414','Quiet link hover'],
  ['Link','--av-link-underline','#3A3A40','#BDBBB7','Underline colour'],
  ['Link','--av-link-underline-hover','#1FDDFF','#006A82','Underline on hover'],
  ['Link','--av-link-visited','#9FEFFF','#0A6F8C','Visited (docs only)'],
  ['Link','--av-link-inverse','#060708','#FFFFFF','Links on inverse surfaces'],

  ['Icon','--av-icon-primary','#F2F2F0','#141414','Default icon'],
  ['Icon','--av-icon-secondary','#A3A19C','#454440','Icon buttons at rest'],
  ['Icon','--av-icon-tertiary','#7A7874','#5E5D59','Decorative / search glyph'],
  ['Icon','--av-icon-disabled','#5A5955','#BDBBB7','Disabled icon'],
  ['Icon','--av-icon-interactive','#1FDDFF','#006A82','Active / selected icon'],
  ['Icon','--av-icon-on-color','#FFFFFF','#FFFFFF','On brand fills'],
  ['Icon','--av-icon-inverse','#060708','#FFFFFF','On inverse fills'],
  ['Icon','--av-icon-notify','#FF4B1F','#C2300A','Notification dot'],

  ['Button','--av-button-primary','#FF4B1F','#141414','Primary fill'],
  ['Button','--av-button-primary-hover','#FF6A45','#2A2A2C','Primary hover'],
  ['Button','--av-button-primary-active','#E63E14','#000000','Primary pressed'],
  ['Button','--av-button-secondary-border','#2A2A2E','#D4D2CE','Secondary outline'],
  ['Button','--av-button-secondary-border-hover','#A3A19C','#454440','Secondary outline hover'],
  ['Button','--av-button-secondary-hover','#141416','#F3F1ED','Secondary fill on hover'],
  ['Button','--av-button-tertiary','#141416','#F3F1ED','Tertiary fill'],
  ['Button','--av-button-tertiary-hover','#18181B','#EDEBE7','Tertiary hover'],
  ['Button','--av-button-ghost-hover','#141416','#F3F1ED','Ghost / nav hover'],
  ['Button','--av-button-danger','rgba(255,75,31,.08)','rgba(194,48,10,.06)','Danger (soft) fill'],
  ['Button','--av-button-danger-border','rgba(255,75,31,.4)','rgba(194,48,10,.4)','Danger outline'],
  ['Button','--av-button-danger-hover','rgba(255,75,31,.14)','rgba(194,48,10,.1)','Danger hover'],
  ['Button','--av-button-danger-solid','#FF6A45','#C2300A','Destructive confirm'],
  ['Button','--av-button-disabled','#18181B','#EDEBE7','Disabled fill'],
  ['Button','--av-button-selected','#F2F2F0','#141414','Selected switcher / icon btn'],
  ['Button','--av-button-icon-fill','rgba(255,255,255,.06)','rgba(20,20,20,.06)','Round arrow button'],

  ['Support','--av-support-critical','#FF4B1F','#C2300A','Critical severity'],
  ['Support','--av-support-high','#FF8A5B','#B23A0E','High severity'],
  ['Support','--av-support-medium','#FFB547','#8A5300','Medium severity / warning'],
  ['Support','--av-support-low','#1FDDFF','#006A82','Low severity / info'],
  ['Support','--av-support-success','#3DDC97','#0E7A4E','Healthy / success'],
  ['Support','--av-support-neutral','#6B6A67','#6E6C68','Archived / unknown'],
  ['Support','--av-support-critical-bg','rgba(255,75,31,.14)','rgba(194,48,10,.10)','Critical chip fill'],
  ['Support','--av-support-high-bg','rgba(255,138,91,.14)','rgba(178,58,14,.10)','High chip fill'],
  ['Support','--av-support-medium-bg','rgba(255,181,71,.14)','rgba(138,83,0,.10)','Medium chip fill'],
  ['Support','--av-support-low-bg','rgba(31,221,255,.10)','rgba(0,106,130,.08)','Low / info / delta chip'],
  ['Support','--av-support-success-bg','rgba(61,220,151,.14)','rgba(14,122,78,.10)','Success chip fill'],
  ['Support','--av-posture-poor','#FF4B1F','#C2300A','Posture < 65'],
  ['Support','--av-posture-fair','#FFB547','#8A5300','Posture 65–79'],
  ['Support','--av-posture-good','#1FDDFF','#006A82','Posture ≥ 80'],

  ['Focus','--av-focus','#1FDDFF','#006A82','Focus outline (2px)'],
  ['Focus','--av-focus-ring','rgba(31,221,255,.15)','rgba(0,106,130,.18)','3px halo around focused fields'],
  ['Focus','--av-focus-inset','#0B0B0C','#FFFFFF','Gap between control and outline'],
  ['Focus','--av-focus-error-ring','rgba(255,75,31,.18)','rgba(194,48,10,.16)','Halo on invalid field'],

  ['Miscellaneous','--av-overlay','rgba(0,0,0,.55)','rgba(20,20,20,.35)','Modal scrim'],
  ['Miscellaneous','--av-overlay-sheet','rgba(0,0,0,.35)','rgba(20,20,20,.2)','Side sheet scrim'],
  ['Miscellaneous','--av-skeleton-base','#141416','#EDEBE7','Skeleton base'],
  ['Miscellaneous','--av-skeleton-shine','#1E1E21','#F7F6F3','Skeleton highlight'],
  ['Miscellaneous','--av-toggle-off','#3A3A40','#BDBBB7','Toggle track (off)'],
  ['Miscellaneous','--av-toggle-thumb','#FFFFFF','#FFFFFF','Toggle thumb'],
  ['Miscellaneous','--av-scrollbar','#1E1E21','#D8D6D2','Scrollbar thumb'],
  ['Miscellaneous','--av-gradient-start','#FF4B1F','#FF4B1F','Brand gradient start (Signal)'],
  ['Miscellaneous','--av-gradient-end','#1FDDFF','#1FDDFF','Brand gradient end (Ion)'],
  ['Miscellaneous','--av-gradient-brand','linear-gradient(90deg,#FF4B1F,#1FDDFF)','linear-gradient(90deg,#FF4B1F,#1FDDFF)','Wordmark highlight, progress, charts'],
  ['Miscellaneous','--av-gradient-brand-45','linear-gradient(45deg,#FF4B1F,#1FDDFF)','linear-gradient(45deg,#FF4B1F,#1FDDFF)','Score numerals'],
  ['Miscellaneous','--av-gradient-nav-active','linear-gradient(90deg,rgba(31,221,255,.10),rgba(31,221,255,.02))','linear-gradient(90deg,rgba(0,106,130,.10),rgba(0,106,130,.02))','Active sidebar item'],
  ['Miscellaneous','--av-pattern-filter','none','invert(1)','Applied to white line patterns'],

  ['Tag','--av-tag-outline-border','#2E2E33','#D4D2CE','Mono outline tag (AWS, OWNER)'],
  ['Tag','--av-tag-outline-text','#B8B6B1','#454440','Mono outline tag text'],
  ['Tag','--av-tag-gray-bg','#1A1A1D','#ECEAE6','Neutral pill (“3 new”)'],
  ['Tag','--av-tag-gray-text','#A3A19C','#454440','Neutral pill text'],
  ['Tag','--av-tag-signal-bg','rgba(255,75,31,.14)','rgba(194,48,10,.10)','Count badge (Findings 293)'],
  ['Tag','--av-tag-signal-text','#FF8A5B','#B23A0E','Count badge text'],
  ['Tag','--av-tag-ion-bg','rgba(31,221,255,.10)','rgba(0,106,130,.08)','Positive / NEW'],
  ['Tag','--av-tag-ion-text','#1FDDFF','#006A82','Positive text'],
  ['Tag','--av-tag-amber-bg','rgba(255,181,71,.12)','rgba(138,83,0,.10)','AWS provider chip'],
  ['Tag','--av-tag-amber-text','#FFB547','#8A5300','AWS text'],
  ['Tag','--av-tag-azure-bg','rgba(159,239,255,.10)','rgba(10,111,140,.08)','Azure provider chip'],
  ['Tag','--av-tag-azure-text','#9FEFFF','#0A6F8C','Azure text'],
  ['Tag','--av-tag-green-bg','rgba(61,220,151,.14)','rgba(14,122,78,.10)','Healthy chip'],
  ['Tag','--av-tag-green-text','#3DDC97','#0E7A4E','Healthy text'],
];

const PRIMITIVES = [
  ['Neutral', [['1000','#060708'],['950','#0B0B0C'],['900','#0F0F11'],['850','#121214'],['800','#141416'],['750','#18181B'],['700','#1E1E21'],['650','#232326'],['600','#2A2A2E'],['550','#3A3A40'],['500','#5A5955'],['450','#6B6A67'],['400','#7A7874'],['350','#8C8A85'],['300','#A3A19C'],['250','#B8B6B1'],['200','#D9D7D2'],['150','#F2F2F0'],['100','#F4F2EE'],['0','#FFFFFF']]],
  ['Signal', [['700','#C2300A'],['600','#E63E14'],['500','#FF4B1F'],['400','#FF6A45'],['300','#FF8A5B']]],
  ['Ion', [['700','#006A82'],['600','#0A6F8C'],['500','#1FDDFF'],['300','#9FEFFF'],['100','#E8FCFF']]],
  ['Amber', [['700','#8A5300'],['500','#FFB547']]],
  ['Green', [['700','#0E7A4E'],['500','#3DDC97']]],
];

const BASE_TOKENS = [
  ['Type','--av-font-sans',"'Inter', system-ui, sans-serif",'UI & data'],
  ['Type','--av-font-mono',"'JetBrains Mono', ui-monospace, monospace",'Labels, IDs, numbers in tags'],
  ['Space','--av-space-1','4px','Icon gap'],['Space','--av-space-2','8px','Inline gap'],['Space','--av-space-3','12px','Control gap'],['Space','--av-space-4','16px','Card grid gap'],['Space','--av-space-5','20px','Card padding'],['Space','--av-space-6','24px','Hero card padding'],['Space','--av-space-7','28px','Main column gap'],['Space','--av-space-8','32px','Page top padding'],['Space','--av-space-9','40px','Page gutter (max)'],['Space','--av-space-10','56px','Intro section gap'],['Space','--av-space-11','72px','Doc section rhythm'],
  ['Radius','--av-radius-xs','4px','Intro cards, checkbox'],['Radius','--av-radius-sm','6px','Mono tags'],['Radius','--av-radius-md','8px','Menu items, icon btn (sm)'],['Radius','--av-radius-lg','10px','Inputs, nav items, icon btn'],['Radius','--av-radius-xl','14px','KPI grid, popovers, toasts'],['Radius','--av-radius-2xl','16px','Cards, tables, modals'],['Radius','--av-radius-pill','999px','Buttons, badges, switchers'],
  ['Elevation','--av-shadow-hairline','0 0 0 .5px var(--av-border-subtle-00)','KPI grid cells'],['Elevation','--av-shadow-toast','0 8px 24px rgba(0,0,0,.18)','Toast'],['Elevation','--av-shadow-popover','0 20px 50px rgba(0,0,0,.5)','Menu, popover, dropdown'],['Elevation','--av-shadow-modal','0 24px 60px rgba(0,0,0,.55)','Modal'],['Elevation','--av-shadow-sheet','-24px 0 60px rgba(0,0,0,.35)','Side sheet'],
  ['Motion','--av-ease-standard','cubic-bezier(.3,.7,.4,1)','State changes, sidebar'],['Motion','--av-ease-enter','cubic-bezier(.2,.8,.2,1)','Page / card enter'],['Motion','--av-ease-spring','cubic-bezier(.3,1.6,.5,1)','Icon pops, checkmarks'],['Motion','--av-duration-fast','150ms','Hover colour'],['Motion','--av-duration-base','200ms','Toggle, border'],['Motion','--av-duration-slow','250ms','Sidebar collapse'],['Motion','--av-duration-enter','500ms','Card stagger enter'],
  ['Layout','--av-gutter','clamp(1rem, 4vw, 2rem)','Fluid page gutter / section rhythm'],['Layout','--av-card-pad','clamp(1rem, 3vw, 1.25rem)','Fluid card padding'],['Layout','--av-section-gap','clamp(1.25rem, 3vw, 1.75rem)','Fluid gap between page sections'],['Layout','--av-touch','44px','Minimum touch target'],['Layout','--av-sidebar-w','clamp(220px, 20vw, 248px)','Sidebar open'],['Layout','--av-drawer-w','min(300px, 86vw)','Mobile nav drawer'],['Layout','--av-sidebar-w-collapsed','72px','Sidebar collapsed'],['Layout','--av-header-h','64px','Top bar'],['Layout','--av-content-max','1280px','Main column max width'],['Layout','--av-intro-max','1240px','Intro column max width'],
  ['Z-index','--av-z-sidebar','20','Sidebar'],['Z-index','--av-z-header','30','Top bar'],['Z-index','--av-z-dropdown','40','Menus'],['Z-index','--av-z-intro','50','Intro takeover'],['Z-index','--av-z-modal','60','Modal / sheet'],['Z-index','--av-z-toast','70','Toast'],
];

const TYPE_SCALE = [
  ['display','Display','clamp(40px,4.6vw,72px)',600,'-0.045em','0.98','sans','Welcome back, Zalak.'],
  ['heading-01','Heading 01 · Page title','clamp(28px,3vw,36px)',600,'-0.03em','1.05','sans','Overview'],
  ['heading-02','Heading 02 · Section','clamp(16px, 1.6vw, 18px)',600,'-0.015em','1.3','sans','Fix these first'],
  ['heading-03','Heading 03 · Card title','16px',600,'-0.01em','1.3','sans','Everything flows into one score.'],
  ['kpi','KPI numeral','clamp(28px, 3.2vw, 34px)',600,'-0.035em','1','sans','293'],
  ['score','Score numeral','clamp(36px, 4vw, 44px)',600,'-0.04em','1','sans','64'],
  ['body-01','Body 01','15px',400,'0','1.55','sans','Last scan finished 2 hours ago.'],
  ['body-02','Body 02 / UI','13px',400,'0','1.5','sans','Every scan feeds the number below.'],
  ['label','Label (mono eyebrow)','11px',500,'.14em','1.2','mono','HYDROPONIC CLOUD INDUSTRIES · 3 ACCOUNTS'],
  ['code','Code / numeric mono','12px',400,'0','1.5','mono','arn:aws:iam::0105:role/ci'],
];

function tokensCSS() {
  const dark = COLOR_TOKENS.map(t => `  ${t[1]}: ${t[2]};`).join('\n');
  const light = COLOR_TOKENS.filter(t => t[2] !== t[3]).map(t => `  ${t[1]}: ${t[3]};`).join('\n');
  const base = BASE_TOKENS.map(t => `  ${t[1]}: ${t[2]};`).join('\n');
  const type = TYPE_SCALE.map(t => `  --av-type-${t[0]}-size: ${t[2]};\n  --av-type-${t[0]}-weight: ${t[3]};\n  --av-type-${t[0]}-tracking: ${t[4]};\n  --av-type-${t[0]}-leading: ${t[5]};`).join('\n');
  return `/* Avistar Dashboard · tokens.css · v2.0
   Fonts: <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
   Theme: dark is default. Add data-theme="light" on <html> (or any wrapper) for light. */
:root, [data-theme="dark"] {
  color-scheme: dark;
${dark}
${base}
${type}
}
[data-theme="light"] {
  color-scheme: light;
${light}
}
`;
}

return { COLOR_TOKENS, PRIMITIVES, BASE_TOKENS, TYPE_SCALE, tokensCSS };
})();
const C = (() => {

// Avistar Dashboard — component library (CSS + HTML variants). Every preview renders the exact snippet shown as code.
const ICONS = {
  plus:'M12 5v14M5 12h14', x:'M6 6l12 12M18 6 6 18', check:'M5 12l5 5 9-10', chevDown:'M6 9l6 6 6-6', chevRight:'M9 6l6 6-6 6', chevLeft:'M15 6l-6 6 6 6', chevUp:'M6 15l6-6 6 6',
  arrow:'M5 12h14M13 6l6 6-6 6', arrowLeft:'M19 12H5M11 6l-6 6 6 6', up:'M12 19V5M6 11l6-6 6 6', down:'M12 5v14M6 13l6 6 6-6',
  search:'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4', bell:'M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15zM10 20.5a2 2 0 0 0 4 0',
  download:'M12 4v11M7.5 10.5 12 15l4.5-4.5M5 20h14', upload:'M12 20V9M7.5 13.5 12 9l4.5 4.5M5 4h14', calendar:'M4 6h16v14H4zM4 10h16M8 3v4M16 3v4', play:'M7 5v14l11-7z',
  ext:'M14 4h6v6M20 4l-9 9M18 14v6H4V6h6', list:'M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01', grid:'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  copy:'M9 9h11v11H9zM5 15H4V4h11v1', report:'M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5', refresh:'M20 11a8 8 0 0 0-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.5L20 16M20 20v-4h-4',
  dots:'M5 12h.01M12 12h.01M19 12h.01', logout:'M15 4h4v16h-4M10 8l-4 4 4 4M6 12h10', mail:'M4 6h16v12H4zM4 7l8 6 8-6', filter:'M4 5h16l-6 8v6l-4-2v-4z',
  gear:'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
  eye:'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', eyeOff:'M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.4 5.2A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4M6.1 6.1C3.6 7.8 2 12 2 12s3.5 7 10 7a9.8 9.8 0 0 0 4.3-1',
  info:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01', alert:'M12 3l10 18H2zM12 10v4M12 17h.01', file:'M6 3h9l4 4v14H6zM14 3v5h5',
  sun:'M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4', moon:'M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z',
  collapse:'M4 4h16v16H4zM9 4v16M15 10l-2 2 2 2', key:'M15 7a4 4 0 1 0-3.9 5L4 19v2h3v-2h2v-2h2l1.1-1.1A4 4 0 0 0 15 7z', lock:'M6 11h12v10H6zM8 11V7a4 4 0 0 1 8 0v4',
  shield:'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z', cloud:'M7 18a5 5 0 1 1 1-9.9A6 6 0 0 1 19 10a4 4 0 0 1-1 8z', minus:'M5 12h14', trash:'M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13',
  edit:'M4 20h4L19 9l-4-4L4 16zM14 6l4 4', link:'M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1', spark:'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z'
};
const ic = (n, s = 16, w = 1.8, fill) => `<svg class="av-icon" width="${s}" height="${s}" viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="${fill ? 'none' : 'currentColor'}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ICONS[n]}"/></svg>`;

const BASE_CSS = `/* Avistar Dashboard · components.css · v2.0 — requires tokens.css */
.av-root{font-family:var(--av-font-sans);color:var(--av-text-primary);-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4}
.av-root *,.av-root *::before,.av-root *::after{box-sizing:border-box}
.av-icon{display:inline-block;flex-shrink:0;vertical-align:middle}
.av-mono{font-family:var(--av-font-mono)}
.av-eyebrow{font:500 11px/1.45 var(--av-font-mono);text-wrap:balance;letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-helper)}
.av-text-gradient{background:var(--av-gradient-brand);-webkit-background-clip:text;background-clip:text;color:transparent}
.av-sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.av-stack{display:flex;flex-direction:column;gap:12px}.av-row{display:flex;flex-wrap:wrap;align-items:center;gap:12px}
.av-demo-stage{position:relative;height:380px;overflow:hidden;border-radius:var(--av-radius-2xl);border:1px solid var(--av-border-subtle-00);background:var(--av-background)}
@keyframes av-spin{to{transform:rotate(360deg)}}
@keyframes av-shimmer{0%{background-position:-200px 0}100%{background-position:200px 0}}
@keyframes av-pulse{50%{opacity:.35}}
@keyframes av-ctx-in{0%{opacity:0;transform:translateY(-8px) scale(.94);filter:blur(6px)}60%{opacity:1;filter:blur(0)}100%{transform:none}}
@keyframes av-sheet-in{from{transform:translateX(40px);opacity:0}}
@keyframes av-slide-up{from{opacity:0;transform:translateY(8px)}}
@keyframes av-indet{0%{transform:translateX(-100%)}100%{transform:translateX(250%)}}
@keyframes av-pop{0%{transform:scale(0) rotate(-30deg)}60%{transform:scale(1.35)}100%{transform:none}}
@keyframes av-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
`;

const cal = (sel = [14], range) => {
  const cells = ['27','28','29','30'].map(d => `<span class="av-calendar__day av-calendar__day--muted">${d}</span>`);
  for (let d = 1; d <= 31; d++) {
    let c = 'av-calendar__day';
    if (d === 30) c += ' av-calendar__day--today';
    if (range && d > range[0] && d < range[1]) c += ' av-calendar__day--range';
    if (sel.includes(d)) c += ' av-calendar__day--selected';
    cells.push(`<button class="${c}"${sel.includes(d) ? ' aria-pressed="true"' : ''}>${d}</button>`);
  }
  return `<div class="av-calendar" role="dialog" aria-label="Choose date">
  <div class="av-calendar__head">
    <button class="av-icon-btn av-icon-btn--ghost" aria-label="Previous month">${ic('chevLeft')}</button>
    <span>October 2026</span>
    <button class="av-icon-btn av-icon-btn--ghost" aria-label="Next month">${ic('chevRight')}</button>
  </div>
  <div class="av-calendar__grid">
    ${['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => `<span class="av-calendar__dow">${d}</span>`).join('')}
    ${cells.join('\n    ')}
  </div>
</div>`;
};
const menuItems = `<button class="av-menu__item" role="menuitem">${ic('ext')}Open details<kbd class="av-menu__kbd">↵</kbd></button>
  <button class="av-menu__item" role="menuitem">${ic('copy')}Copy ARN<kbd class="av-menu__kbd">⌘C</kbd></button>
  <button class="av-menu__item" role="menuitem">${ic('shield')}Request approval</button>
  <div class="av-menu__sep" role="separator"></div>
  <button class="av-menu__item av-menu__item--danger" role="menuitem">${ic('trash')}Revoke access<kbd class="av-menu__kbd">⌫</kbd></button>`;

const NAVF0 = {"portfolio":["<rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/><path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3\"/><path d=\"M12 12V8\"/>","<rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/>","M7.9 12h2.2"],"clients":["<rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\"/><path d=\"M6 6h.01\"/><path d=\"M6 18h.01\"/>","<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\"/>","M13.9 2h2.2M13.9 22h2.2"],"members":["<path d=\"M16 10h2\"/><path d=\"M16 14h2\"/><path d=\"M6.17 15a3 3 0 0 1 5.66 0\"/><circle cx=\"9\" cy=\"11\" r=\"2\"/><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/>","<rect x=\"2\" y=\"5\" width=\"10\" height=\"14\" rx=\"2\"/>","M10.9 5h2.2M10.9 19h2.2"],"overview":["<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>","<circle cx=\"12\" cy=\"12\" r=\"3\"/>",""],"findings":["<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/>","<path d=\"M4.83 13.5L2.27 18A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3l-2.56-4.5z\"/>","M10.9 21h2.2"],"identities":["<path d=\"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4\"/><path d=\"M14 13.12c0 2.38 0 6.38-1 8.88\"/><path d=\"M17.29 21.02c.12-.6.43-2.3.5-3.02\"/><path d=\"M2 12a10 10 0 0 1 18-6\"/><path d=\"M2 16h.01\"/><path d=\"M21.8 16c.2-2 .131-5.354 0-6\"/><path d=\"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2\"/><path d=\"M8.65 22c.21-.66.45-1.32.57-2\"/><path d=\"M9 6.8a6 6 0 0 1 9 5.2v2\"/>","<circle cx=\"12\" cy=\"13\" r=\"4.5\"/>",""],"scans":["<path d=\"M19.07 4.93A10 10 0 0 0 6.99 3.34\"/><path d=\"M4 6h.01\"/><path d=\"M2.29 9.62A10 10 0 1 0 21.31 8.35\"/><path d=\"M16.24 7.76A6 6 0 1 0 8.23 16.67\"/><path d=\"M12 18h.01\"/><path d=\"M17.99 11.66A6 6 0 0 1 15.77 16.67\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"m13.41 10.59 5.66-5.66\"/>","<path d=\"M12 12L19.07 4.93A10 10 0 0 0 12 2z\"/>",""],"bulletins":["<path d=\"m8 2 1.88 1.88\"/><path d=\"M14.12 3.88 16 2\"/><path d=\"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1\"/><path d=\"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6\"/><path d=\"M12 20v-9\"/><path d=\"M6.53 9C4.6 8.8 3 7.1 3 5\"/><path d=\"M6 13H2\"/><path d=\"M3 21c0-2.1 1.7-3.9 3.8-4\"/><path d=\"M20.97 5c0 2.1-1.6 3.8-3.5 4\"/><path d=\"M22 13h-4\"/><path d=\"M17.2 17c2.1.1 3.8 1.9 3.8 4\"/>","<path d=\"M6 11a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3H6z\"/>","M12 14.9v2.2"],"settings":["<path d=\"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z\"/><circle cx=\"16.5\" cy=\"7.5\" r=\".5\"/>","<circle cx=\"15.5\" cy=\"8.5\" r=\"6.5\"/>",""]};
const navG0 = id => { const f = NAVF0[id] || NAVF0.overview; return `<svg class="av-nav-glyph" viewBox="0 0 24 24" aria-hidden="true"><g class="av-nav-glyph__hi">${f[1]}</g><g class="av-nav-glyph__line">${f[0]}</g>${f[2] ? `<path class="av-nav-glyph__gap" d="${f[2]}"/>` : ''}</svg>`; };
const COMPONENTS = [
{ id:'button', label:'Button', desc:'Pill-shaped actions. One primary (Signal) per view. Heights 32 / 40 / 44 / 52. Ghost and link styles for secondary navigation actions like “Schedule scans →”.',
css:`.av-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:40px;padding:0 20px;border-radius:var(--av-radius-pill);border:1px solid transparent;background:transparent;color:var(--av-text-primary);font:500 13px/1 var(--av-font-sans);cursor:pointer;white-space:nowrap;text-decoration:none;transition:background var(--av-duration-fast),border-color var(--av-duration-fast),color var(--av-duration-fast)}
.av-btn:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px}
.av-btn--primary{background:var(--av-button-primary);color:var(--av-text-on-color);font-size:14px;font-weight:600}
.av-btn--primary:hover{background:var(--av-button-primary-hover)}.av-btn--primary:active{background:var(--av-button-primary-active)}
.av-btn--secondary{padding:0 16px;border-color:var(--av-button-secondary-border)}
.av-btn--secondary:hover{border-color:var(--av-button-secondary-border-hover);background:var(--av-button-secondary-hover)}
.av-btn--tertiary{padding:0 14px;background:var(--av-button-tertiary)}.av-btn--tertiary:hover{background:var(--av-button-tertiary-hover)}
.av-btn--ghost{padding:0 12px}.av-btn--ghost:hover{background:var(--av-button-ghost-hover)}
.av-btn--link{height:44px;padding:0 4px;font-size:14px;text-decoration:underline;text-underline-offset:5px;text-decoration-thickness:1px}
.av-btn--link:hover{color:var(--av-link-primary-hover)}
.av-btn--danger{padding:0 16px;background:var(--av-button-danger);border-color:var(--av-button-danger-border);color:var(--av-text-error)}
.av-btn--danger:hover{background:var(--av-button-danger-hover)}
.av-btn--danger-solid{background:var(--av-button-danger-solid);color:var(--av-text-on-color);font-weight:600}
.av-btn--sm{height:32px;padding:0 14px;font-size:12px}.av-btn--lg{height:44px;padding:0 24px;font-size:15px}.av-btn--xl{height:52px;padding:0 28px;font-size:16px}
.av-btn:disabled,.av-btn[aria-disabled="true"]{background:var(--av-button-disabled);border-color:transparent;color:var(--av-text-disabled);cursor:not-allowed}
.av-btn[aria-busy="true"]{cursor:wait;opacity:.85}
.av-btn__spinner{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.35);border-top-color:#fff;animation:av-spin .8s linear infinite}
.av-icon-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;flex-shrink:0;padding:0;border-radius:var(--av-radius-lg);border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01);color:var(--av-icon-secondary);cursor:pointer;transition:color var(--av-duration-fast),border-color var(--av-duration-fast),background var(--av-duration-fast)}
.av-icon-btn:hover{color:var(--av-icon-primary);border-color:var(--av-border-strong-01)}
.av-icon-btn:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px}
.av-icon-btn--ghost{width:32px;height:32px;border-radius:var(--av-radius-md);border-color:transparent;background:transparent}.av-icon-btn--ghost:hover{background:var(--av-button-ghost-hover)}
.av-icon-btn--round{width:44px;height:44px;border-radius:50%;background:transparent;border-color:var(--av-tag-outline-border);color:var(--av-text-meta)}
.av-icon-btn--round[aria-pressed="true"]{background:var(--av-button-selected);border-color:var(--av-border-inverse);color:var(--av-icon-inverse)}
.av-icon-btn--arrow{width:32px;height:32px;border-radius:50%;border:0;background:var(--av-button-icon-fill);color:var(--av-text-muted-intro)}
.av-icon-btn--arrow[aria-pressed="true"]{background:var(--av-button-selected);color:var(--av-icon-inverse)}
.av-icon-btn__dot{position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--av-icon-notify);box-shadow:0 0 0 2px var(--av-layer-01)}`,
variants:[
 {name:'Kinds', html:`<div class="av-row">
  <button class="av-btn av-btn--primary">${ic('plus',14,2.2)}Connect account</button>
  <button class="av-btn av-btn--secondary">Portfolio report</button>
  <button class="av-btn av-btn--tertiary">Export CSV</button>
  <button class="av-btn av-btn--ghost">Cancel</button>
  <button class="av-btn av-btn--link">Schedule scans${ic('arrow',16,2)}</button>
</div>`},
 {name:'Danger', html:`<div class="av-row">
  <button class="av-btn av-btn--danger">${ic('trash',14)}Remove client</button>
  <button class="av-btn av-btn--danger-solid">Revoke key</button>
</div>`},
 {name:'Sizes', html:`<div class="av-row">
  <button class="av-btn av-btn--primary av-btn--sm">Small · 32</button>
  <button class="av-btn av-btn--primary">Medium · 40</button>
  <button class="av-btn av-btn--primary av-btn--lg">Large · 44</button>
  <button class="av-btn av-btn--primary av-btn--xl">${ic('plus',16,2.2)}Create organization</button>
</div>`},
 {name:'With icon', html:`<div class="av-row">
  <button class="av-btn av-btn--primary">${ic('play',14,0,true)}Run scan</button>
  <button class="av-btn av-btn--secondary">${ic('download',14)}Download PDF</button>
  <button class="av-btn av-btn--secondary">${ic('refresh',14)}Rescan</button>
</div>`},
 {name:'States', html:`<div class="av-row">
  <button class="av-btn av-btn--primary" disabled>Disabled</button>
  <button class="av-btn av-btn--secondary" disabled>Disabled</button>
  <button class="av-btn av-btn--primary" aria-busy="true"><span class="av-btn__spinner"></span>Scanning…</button>
</div>`},
 {name:'Icon buttons', note:'Bell with unread dot (top bar), round gear (org row), arrow (org row), ghost overflow.', html:`<div class="av-row">
  <button class="av-icon-btn" aria-label="Notifications">${ic('bell',18,1.6)}<span class="av-icon-btn__dot"></span></button>
  <button class="av-icon-btn av-icon-btn--round" aria-label="Organization settings">${ic('gear',18,1.6)}</button>
  <button class="av-icon-btn av-icon-btn--round" aria-pressed="true" aria-label="Organization settings">${ic('gear',18,1.6)}</button>
  <button class="av-icon-btn av-icon-btn--arrow" aria-label="Open">${ic('arrow',14,2)}</button>
  <button class="av-icon-btn av-icon-btn--arrow" aria-pressed="true" aria-label="Collapse">${ic('chevDown',14,2)}</button>
  <button class="av-icon-btn av-icon-btn--ghost" aria-label="More">${ic('dots',18,2.6)}</button>
</div>`},
]},

{ id:'accordion', label:'Accordion', desc:'Native <details> disclosure. Used for FAQ in the help guide, remediation steps and advanced settings.',
css:`.av-accordion{border-top:1px solid var(--av-border-subtle-00)}
.av-accordion__item{border-bottom:1px solid var(--av-border-subtle-00)}
.av-accordion__title{list-style:none;display:flex;align-items:center;gap:12px;min-height:48px;padding:0 16px;font-size:14px;font-weight:500;color:var(--av-text-primary);cursor:pointer;transition:background var(--av-duration-fast)}
.av-accordion__title::-webkit-details-marker{display:none}
.av-accordion__title:hover{background:var(--av-layer-hover-01)}
.av-accordion__title:focus-visible{outline:2px solid var(--av-focus);outline-offset:-2px}
.av-accordion__chev{margin-left:auto;color:var(--av-icon-tertiary);transition:transform var(--av-duration-base) var(--av-ease-standard)}
.av-accordion__item[open] .av-accordion__chev{transform:rotate(180deg)}
.av-accordion__body{padding:0 16px 16px;font-size:13px;line-height:1.55;color:var(--av-text-tertiary)}
.av-accordion__meta{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-accordion--contained{border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);overflow:hidden}
.av-accordion--contained .av-accordion__item:last-child{border-bottom:0}
.av-accordion--flush .av-accordion__title,.av-accordion--flush .av-accordion__body{padding-left:0;padding-right:0}
.av-accordion__item--disabled .av-accordion__title{color:var(--av-text-disabled);cursor:not-allowed;pointer-events:none}`,
variants:[
 {name:'Default', html:`<div class="av-accordion">
  <details class="av-accordion__item"><summary class="av-accordion__title">How is the posture score calculated?${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary><div class="av-accordion__body">Each open finding subtracts points weighted by severity and blast radius.</div></details>
  <details class="av-accordion__item"><summary class="av-accordion__title">How often do scans run?${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary><div class="av-accordion__body">Every 6 hours by default. Change it in Schedule scans.</div></details>
</div>`},
 {name:'Open', html:`<div class="av-accordion">
  <details class="av-accordion__item" open><summary class="av-accordion__title">Step 1 · Block public access<span class="av-accordion__meta">~2 min</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary><div class="av-accordion__body">Open the S3 console, select the bucket and enable “Block all public access”.</div></details>
</div>`},
 {name:'Contained', html:`<div class="av-accordion av-accordion--contained">
  <details class="av-accordion__item" open><summary class="av-accordion__title">Advanced scan options${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary><div class="av-accordion__body">Include archived regions and inactive identities.</div></details>
  <details class="av-accordion__item"><summary class="av-accordion__title">Notifications${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary><div class="av-accordion__body">Slack and email digests.</div></details>
</div>`},
 {name:'Flush', html:`<div class="av-accordion av-accordion--flush">
  <details class="av-accordion__item"><summary class="av-accordion__title">What does read-only mean?${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary><div class="av-accordion__body">Avistar never writes to your cloud.</div></details>
</div>`},
 {name:'Disabled item', html:`<div class="av-accordion">
  <details class="av-accordion__item av-accordion__item--disabled"><summary class="av-accordion__title" aria-disabled="true">Azure policies (connect Azure first)${ic('chevDown',16,2).replace('av-icon','av-icon av-accordion__chev')}</summary></details>
</div>`},
]},

{ id:'breadcrumb', label:'Breadcrumb', desc:'Org / client / account path. In the top bar it becomes a context pill with provider logo and switcher chevron.',
css:`.av-breadcrumb{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:0;padding:0;list-style:none;font-size:13px;color:var(--av-link-secondary)}
.av-breadcrumb a{color:inherit;text-decoration:none;transition:color var(--av-duration-fast)}.av-breadcrumb a:hover{color:var(--av-link-secondary-hover)}
.av-breadcrumb__sep{color:var(--av-text-placeholder)}
.av-breadcrumb [aria-current="page"]{color:var(--av-text-primary);font-weight:500}
.av-breadcrumb__logo{width:22px;height:14px;object-fit:contain}
.av-breadcrumb--context{height:44px;padding:0 14px 0 20px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-xl);background:var(--av-layer-01);font-size:14px;flex-wrap:nowrap;cursor:pointer;transition:border-color var(--av-duration-fast)}
.av-breadcrumb--context:hover{border-color:var(--av-border-strong-01)}
.av-breadcrumb--context .av-breadcrumb__chev{margin-left:8px;color:var(--av-icon-tertiary)}
.av-breadcrumb--mono{font:500 11px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-helper)}
.av-breadcrumb__more{border:0;background:transparent;color:inherit;cursor:pointer;padding:0 4px;border-radius:6px}.av-breadcrumb__more:hover{background:var(--av-layer-03)}`,
variants:[
 {name:'Default', html:`<nav aria-label="Breadcrumb"><ol class="av-breadcrumb">
  <li><a href="#">Avistar Demo Org</a></li><li class="av-breadcrumb__sep">/</li>
  <li><a href="#">Tidewell</a></li><li class="av-breadcrumb__sep">/</li>
  <li><span aria-current="page">Findings</span></li>
</ol></nav>`},
 {name:'Current page only', html:`<nav aria-label="Breadcrumb"><ol class="av-breadcrumb"><li><a href="#">${ic('arrowLeft',14,2)} All clients</a></li></ol></nav>`},
 {name:'Overflow', html:`<nav aria-label="Breadcrumb"><ol class="av-breadcrumb">
  <li><a href="#">Avistar Demo Org</a></li><li class="av-breadcrumb__sep">/</li>
  <li><button class="av-breadcrumb__more" aria-label="Show path">…</button></li><li class="av-breadcrumb__sep">/</li>
  <li><span aria-current="page">ci-deploy-runner</span></li>
</ol></nav>`},
 {name:'Context switcher (top bar)', html:`<nav aria-label="Context"><ol class="av-breadcrumb av-breadcrumb--context">
  <li>Avistar Demo Org</li><li class="av-breadcrumb__sep">/</li>
  <li><span style="color:var(--av-text-primary)">Tidewell</span></li><li class="av-breadcrumb__sep">/</li>
  <li style="display:flex;align-items:center;gap:8px"><img class="av-breadcrumb__logo" src="assets/logo-aws-dark.svg" alt="AWS"><span aria-current="page">Production Demo Account</span></li>
  <li class="av-breadcrumb__chev">${ic('chevDown',16,2)}</li>
</ol></nav>`},
 {name:'Mono eyebrow', html:`<ol class="av-breadcrumb av-breadcrumb--mono"><li>Avistar Demo Org</li><li class="av-breadcrumb__sep">·</li><li>10 clients</li></ol>`},
 {name:'With provider logo', html:`<ol class="av-breadcrumb"><li><a href="#">Ashgrove Health</a></li><li class="av-breadcrumb__sep">/</li><li style="display:flex;align-items:center;gap:6px"><img class="av-breadcrumb__logo" src="assets/logo-gcp.svg" alt=""><span aria-current="page">Analytics project</span></li></ol>`},
]},

{ id:'checkbox', label:'Checkbox', desc:'18px box, 5px radius, Ion fill when checked. Use for multi-select filters, table rows and settings.',
css:`.av-checkbox{display:inline-flex;align-items:center;gap:10px;min-height:32px;font-size:14px;color:var(--av-text-secondary);cursor:pointer}
.av-checkbox input{appearance:none;-webkit-appearance:none;margin:0;width:18px;height:18px;flex-shrink:0;border-radius:5px;border:1.5px solid var(--av-border-strong-02);background:transparent;display:grid;place-content:center;cursor:pointer;transition:background var(--av-duration-fast),border-color var(--av-duration-fast)}
.av-checkbox input::before{content:"";width:10px;height:10px;background:var(--av-text-inverse);clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0,43% 62%);transform:scale(0);transition:transform var(--av-duration-base) var(--av-ease-spring)}
.av-checkbox input:checked,.av-checkbox input:indeterminate{background:var(--av-border-interactive);border-color:var(--av-border-interactive)}
.av-checkbox input:checked::before{transform:scale(1)}
.av-checkbox input:indeterminate::before{clip-path:none;height:2px;transform:scale(1)}
.av-checkbox input:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px}
.av-checkbox:has(input:disabled){color:var(--av-text-disabled);cursor:not-allowed}
.av-checkbox input:disabled{border-color:var(--av-border-subtle-02);cursor:not-allowed}
.av-checkbox input:disabled:checked{background:var(--av-border-subtle-02)}
.av-checkbox--invalid input{border-color:var(--av-border-error)}
.av-checkbox--sm input{width:16px;height:16px;border-radius:4px}
.av-checkbox__text{display:flex;flex-direction:column;gap:2px}.av-checkbox__helper{font-size:12px;color:var(--av-text-helper)}
.av-fieldset{border:0;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}
.av-fieldset legend{padding:0 0 8px;font:500 10px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-placeholder)}
.av-field__error{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--av-text-error)}`,
variants:[
 {name:'Unchecked', html:`<label class="av-checkbox"><input type="checkbox">Include archived</label>`},
 {name:'Checked', html:`<label class="av-checkbox"><input type="checkbox" checked>Only production</label>`},
 {name:'Indeterminate', note:'Set via JS: el.indeterminate = true', html:`<label class="av-checkbox"><input type="checkbox" class="av-js-indeterminate">Select all (3 of 12)</label>`},
 {name:'Disabled', html:`<label class="av-checkbox"><input type="checkbox" disabled>Managed by SSO</label>`},
 {name:'Disabled checked', html:`<label class="av-checkbox"><input type="checkbox" checked disabled>Read-only access</label>`},
 {name:'Invalid', html:`<div class="av-stack" style="gap:4px"><label class="av-checkbox av-checkbox--invalid"><input type="checkbox" aria-invalid="true">I confirm this role is read-only</label><span class="av-field__error">${ic('alert',12,2)}Required to continue</span></div>`},
 {name:'With helper', html:`<label class="av-checkbox" style="align-items:flex-start"><input type="checkbox" checked style="margin-top:2px"><span class="av-checkbox__text">Notify owners<span class="av-checkbox__helper">Email identity owners when a finding is assigned.</span></span></label>`},
 {name:'Group', html:`<fieldset class="av-fieldset"><legend>Severity</legend>
  <label class="av-checkbox"><input type="checkbox" checked>Critical</label>
  <label class="av-checkbox"><input type="checkbox" checked>High</label>
  <label class="av-checkbox"><input type="checkbox">Medium</label>
  <label class="av-checkbox"><input type="checkbox">Low</label>
</fieldset>`},
 {name:'Small (table)', html:`<label class="av-checkbox av-checkbox--sm"><input type="checkbox" checked aria-label="Select row"></label>`},
]},

{ id:'code-snippet', label:'Code snippet', desc:'JetBrains Mono on layer-02. Used for role ARNs, CLI setup steps and external IDs in Connect account.',
css:`.av-code{position:relative;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-lg);background:var(--av-layer-02);font:12px/1.65 var(--av-font-mono);color:var(--av-text-secondary)}
.av-code pre{margin:0;padding:14px 52px 14px 16px;overflow:auto;white-space:pre}
.av-code .av-code__copy{position:absolute;top:6px;right:6px}
.av-code__c{color:var(--av-text-helper)}.av-code__k{color:var(--av-text-info)}.av-code__s{color:var(--av-support-medium)}
.av-code--single{display:flex;align-items:center;gap:8px;height:44px;padding:0 6px 0 14px}
.av-code--single span{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-code--single .av-code__copy{position:static}
.av-code-inline{padding:2px 6px;border-radius:6px;background:var(--av-layer-04);font:12px var(--av-font-mono);color:var(--av-text-info)}`,
variants:[
 {name:'Inline', html:`<p style="margin:0;font-size:14px;color:var(--av-text-tertiary)">Attach <code class="av-code-inline">SecurityAudit</code> to the role.</p>`},
 {name:'Single line', html:`<div class="av-code av-code--single"><span>arn:aws:iam::010545334631:role/AvistarReadOnly</span><button class="av-icon-btn av-icon-btn--ghost av-code__copy" aria-label="Copy">${ic('copy',16)}</button></div>`},
 {name:'Multi line', html:`<div class="av-code"><pre><span class="av-code__c"># Create the read-only role</span>
<span class="av-code__k">aws</span> iam create-role \\
  --role-name AvistarReadOnly \\
  --assume-role-policy-document <span class="av-code__s">file://trust.json</span></pre><button class="av-icon-btn av-icon-btn--ghost av-code__copy" aria-label="Copy">${ic('copy',16)}</button></div>`},
]},

{ id:'contained-list', label:'Contained list', desc:'Bordered list in a card. Connected clouds, accounts, members.',
css:`.av-clist{border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);overflow:hidden}
.av-clist__head{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:48px;padding:0 16px;border-bottom:1px solid var(--av-border-subtle-00);font-size:14px;font-weight:600}
.av-clist__item{display:flex;align-items:center;gap:14px;min-height:56px;padding:10px 16px;border-bottom:1px solid var(--av-border-subtle-00);font-size:14px;color:var(--av-text-primary)}
.av-clist__item:last-child{border-bottom:0}
.av-clist__item--interactive{cursor:pointer;transition:background var(--av-duration-fast)}.av-clist__item--interactive:hover{background:var(--av-layer-hover-01)}
.av-clist__glyph{width:32px;height:32px;flex-shrink:0;object-fit:contain}.av-clist__item>.av-nav-glyph{width:22px;height:22px}
.av-clist__text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.av-clist__title{font-weight:500}.av-clist__sub{font-size:12px;color:var(--av-text-helper)}
.av-clist__end{display:flex;align-items:center;gap:8px;color:var(--av-icon-tertiary)}
.av-clist__search{padding:10px 12px;border-bottom:1px solid var(--av-border-subtle-00)}`,
variants:[
 {name:'Simple', html:`<div class="av-clist"><div class="av-clist__head">Members<span class="av-tag">3</span></div>
  <div class="av-clist__item">Zalak Patel</div><div class="av-clist__item">Arjun Kapoor</div><div class="av-clist__item">Maya Ross</div></div>`},
 {name:'With icon & description', html:`<div class="av-clist">
  <div class="av-clist__item">${navG0('portfolio')}<span class="av-clist__text"><span class="av-clist__title">AWS · Production</span><span class="av-clist__sub">14 accounts · synced 2m ago</span></span></div>
  <div class="av-clist__item">${navG0('scans')}<span class="av-clist__text"><span class="av-clist__title">Kubernetes · prod-eu</span><span class="av-clist__sub">212 service accounts</span></span></div>
</div>`},
 {name:'Interactive', html:`<div class="av-clist">
  <div class="av-clist__item av-clist__item--interactive" tabindex="0">${navG0('identities')}<span class="av-clist__text"><span class="av-clist__title">Vault · secrets</span><span class="av-clist__sub">1,028 tracked</span></span><span class="av-clist__end">${ic('chevRight',14,2)}</span></div>
  <div class="av-clist__item av-clist__item--interactive" tabindex="0">${navG0('clients')}<span class="av-clist__text"><span class="av-clist__title">GCP · Analytics</span><span class="av-clist__sub">3 projects</span></span><span class="av-clist__end">${ic('chevRight',14,2)}</span></div>
</div>`},
 {name:'With actions', html:`<div class="av-clist"><div class="av-clist__head">Connected accounts<button class="av-btn av-btn--secondary av-btn--sm">${ic('plus',12,2.2)}Connect</button></div>
  <div class="av-clist__item"><span class="av-clist__text"><span class="av-clist__title">Production Demo Account</span><span class="av-clist__sub av-mono">010545334631</span></span><span class="av-tag av-tag--success"><span class="av-tag__dot"></span>Healthy</span><button class="av-icon-btn av-icon-btn--ghost" aria-label="More">${ic('dots',18,2.6)}</button></div>
</div>`},
 {name:'With search', html:`<div class="av-clist"><div class="av-clist__search"><div class="av-search av-search--field av-search--sm">${ic('search',16,2)}<input class="av-search__input" placeholder="Filter accounts"></div></div>
  <div class="av-clist__item">Production Demo Account</div><div class="av-clist__item">Staging Account</div></div>`},
]},

{ id:'content-switcher', label:'Content switcher', desc:'Pill segmented control. Selected = inverse fill (Cards / List on Your clients).',
css:`.av-switcher{display:inline-flex;gap:2px;padding:3px;border-radius:var(--av-radius-pill);border:1px solid var(--av-tag-outline-border);background:var(--av-field-02)}
.av-switcher button{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 14px;border:0;border-radius:var(--av-radius-pill);background:transparent;color:var(--av-text-muted-intro);font:500 13px var(--av-font-sans);cursor:pointer;white-space:nowrap;transition:background var(--av-duration-base),color var(--av-duration-base)}
.av-switcher button:hover{color:var(--av-text-primary)}
.av-switcher button[aria-pressed="true"]{background:var(--av-button-selected);color:var(--av-text-inverse)}
.av-switcher button:focus-visible{outline:2px solid var(--av-focus);outline-offset:1px}
.av-switcher--sm button{height:28px;padding:0 10px;font-size:12px}
.av-switcher--icon button{width:36px;padding:0;justify-content:center}
.av-switcher--soft{border-color:var(--av-border-subtle-01);background:var(--av-layer-03)}
.av-switcher--soft button[aria-pressed="true"]{background:var(--av-layer-01);color:var(--av-text-primary)}`,
variants:[
 {name:'Icon + label', html:`<div class="av-switcher" role="group" aria-label="View"><button aria-pressed="true">${ic('grid',14)}Cards</button><button aria-pressed="false">${ic('list',14)}List</button></div>`},
 {name:'Text', html:`<div class="av-switcher" role="group"><button aria-pressed="false">24h</button><button aria-pressed="true">7 days</button><button aria-pressed="false">30 days</button></div>`},
 {name:'Small', html:`<div class="av-switcher av-switcher--sm" role="group"><button aria-pressed="true">All</button><button aria-pressed="false">Human</button><button aria-pressed="false">Machine</button></div>`},
 {name:'Soft', html:`<div class="av-switcher av-switcher--soft" role="group"><button aria-pressed="true">Open</button><button aria-pressed="false">Resolved</button><button aria-pressed="false">Ignored</button></div>`},
 {name:'Icon only', html:`<div class="av-switcher av-switcher--icon" role="group"><button aria-pressed="true" aria-label="Cards">${ic('grid',14)}</button><button aria-pressed="false" aria-label="List">${ic('list',14)}</button></div>`},
]},

{ id:'data-table', label:'Data table', desc:'56px rows, mono uppercase headers, tabular numerals, selectable rows. Dashed variant is used on the intro client list.',
css:`.av-table-wrap{border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);overflow:auto}
.av-table-toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;border-bottom:1px solid var(--av-border-subtle-00)}
.av-table-toolbar__title{font-size:14px;font-weight:600}.av-table-toolbar__count{margin-left:6px;font:400 11px var(--av-font-mono);color:var(--av-text-helper)}
.av-table{width:100%;min-width:640px;border-collapse:collapse;font-size:13px}
.av-table th{height:40px;padding:0 16px;text-align:left;font:500 10px var(--av-font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--av-text-label);border-bottom:1px solid var(--av-border-subtle-00);white-space:nowrap}
.av-table th button{all:unset;display:inline-flex;align-items:center;gap:4px;cursor:pointer}.av-table th[aria-sort] button{color:var(--av-text-primary)}
.av-table td{height:56px;padding:8px 16px;border-bottom:1px solid var(--av-border-subtle-00);color:var(--av-text-tertiary);vertical-align:middle}
.av-table tbody tr:last-child td{border-bottom:0}
.av-table tbody tr{transition:background var(--av-duration-fast)}.av-table tbody tr:hover{background:var(--av-layer-hover-01)}
.av-table tbody tr[aria-selected="true"]{background:var(--av-layer-selected-01)}
.av-table__primary{display:block;color:var(--av-text-primary);font-weight:500}
.av-table__id{display:block;font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-table__num{text-align:right;font-variant-numeric:tabular-nums}
.av-table__check{width:40px}
.av-table--compact td{height:44px}
.av-table-batch{display:flex;align-items:center;gap:12px;padding:10px 16px;background:var(--av-background-selected);border-bottom:1px solid var(--av-border-nav-active);font-size:13px}
.av-table-wrap--dashed{border:1px dashed var(--av-border-dashed);border-radius:var(--av-radius-xs);background:var(--av-layer-intro)}
.av-table-wrap--dashed td{border-bottom-color:var(--av-border-divider)}`,
variants:(() => {
  const rows = [['ci-deploy-runner','arn:aws:iam::0105:role/ci','AWS','critical','Critical','2m ago'],['svc-billing-writer','arn:aws:iam::0105:role/billing','AWS','high','High','1h ago'],['gke-node-sa','node@prod.iam.gserviceaccount.com','GCP','medium','Medium','3h ago'],['backup-agent','sp-7f2c-backup','AZURE','low','Low','1d ago']];
  const tr = (r, sel, chk) => `    <tr${sel ? ' aria-selected="true"' : ''}>${chk ? `<td class="av-table__check"><label class="av-checkbox av-checkbox--sm"><input type="checkbox"${sel ? ' checked' : ''} aria-label="Select ${r[0]}"></label></td>` : ''}<td><span class="av-table__primary">${r[0]}</span><span class="av-table__id">${r[1]}</span></td><td><span class="av-tag av-tag--mono">${r[2]}</span></td><td><span class="av-tag av-tag--${r[3]}"><span class="av-tag__dot"></span>${r[4]}</span></td><td class="av-table__num">${r[5]}</td></tr>`;
  const head = (chk, sort) => `<thead><tr>${chk ? '<th class="av-table__check"><label class="av-checkbox av-checkbox--sm"><input type="checkbox" aria-label="Select all"></label></th>' : ''}<th${sort ? ' aria-sort="ascending"' : ''}>${sort ? `<button>Identity${ic('chevUp',12,2)}</button>` : 'Identity'}</th><th>Provider</th><th>Risk</th><th class="av-table__num">${sort ? `<button>Last used${ic('chevDown',12,2)}</button>` : 'Last used'}</th></tr></thead>`;
  return [
   {name:'Basic', html:`<div class="av-table-wrap"><table class="av-table">${head()}
  <tbody>
${rows.slice(0,3).map(r => tr(r)).join('\n')}
  </tbody></table></div>`},
   {name:'Toolbar + selection', html:`<div class="av-table-wrap"><div class="av-table-toolbar"><span class="av-table-toolbar__title">Machine identities<span class="av-table-toolbar__count">48</span></span><div class="av-row" style="gap:8px"><div class="av-search av-search--field av-search--sm" style="width:min(220px,100%)">${ic('search',16,2)}<input class="av-search__input" placeholder="Search identities"></div><button class="av-btn av-btn--secondary av-btn--sm">${ic('filter',12)}Filter</button></div></div><table class="av-table">${head(true)}
  <tbody>
${rows.map((r, i) => tr(r, i === 1, true)).join('\n')}
  </tbody></table></div>`},
   {name:'Sortable', html:`<div class="av-table-wrap"><table class="av-table">${head(false, true)}<tbody>
${rows.slice(0,2).map(r => tr(r)).join('\n')}
  </tbody></table></div>`},
   {name:'Compact', html:`<div class="av-table-wrap"><table class="av-table av-table--compact">${head()}<tbody>
${rows.map(r => tr(r)).join('\n')}
  </tbody></table></div>`},
   {name:'Batch actions', html:`<div class="av-table-wrap"><div class="av-table-batch"><strong>2 selected</strong><button class="av-btn av-btn--secondary av-btn--sm">Assign owner</button><button class="av-btn av-btn--danger av-btn--sm">Revoke</button><button class="av-btn av-btn--ghost av-btn--sm" style="margin-left:auto">Clear</button></div><table class="av-table">${head(true)}<tbody>
${rows.slice(0,3).map((r, i) => tr(r, i < 2, true)).join('\n')}
  </tbody></table></div>`},
   {name:'Findings (with action)', html:`<div class="av-table-wrap"><table class="av-table"><thead><tr><th>Finding</th><th>Severity</th><th>Resource</th><th class="av-table__num">Fix time</th><th></th></tr></thead><tbody>
    <tr><td><span class="av-table__primary">S3 bucket is publicly readable</span><span class="av-table__id">AV-S3-001</span></td><td><span class="av-tag av-tag--critical"><span class="av-tag__dot"></span>Critical</span></td><td class="av-mono" style="font-size:12px">hci-exports-prod</td><td class="av-table__num">~2 min</td><td style="text-align:right"><button class="av-btn av-btn--secondary av-btn--sm">Fix</button></td></tr>
    <tr><td><span class="av-table__primary">Access key unused for 412 days</span><span class="av-table__id">AV-IAM-014</span></td><td><span class="av-tag av-tag--high"><span class="av-tag__dot"></span>High</span></td><td class="av-mono" style="font-size:12px">AKIA…7Q2F</td><td class="av-table__num">~1 min</td><td style="text-align:right"><button class="av-btn av-btn--secondary av-btn--sm">Fix</button></td></tr>
  </tbody></table></div>`},
   {name:'Dashed (intro list)', html:`<div class="av-table-wrap av-table-wrap--dashed"><table class="av-table"><thead><tr><th>Client</th><th>Clouds</th><th class="av-table__num">Posture</th><th>Findings</th></tr></thead><tbody>
    <tr><td><span class="av-table__primary">Hydroponic Cloud</span><span class="av-table__id">AgriTech · 3 accounts</span></td><td><span class="av-row" style="gap:6px"><span class="av-tag av-tag--mono">AWS</span><span class="av-tag av-tag--mono">AZURE</span></span></td><td class="av-table__num av-mono av-posture--poor" style="font-size:16px">64</td><td>293 open · scanned 2h ago</td></tr>
    <tr><td><span class="av-table__primary">Corvane</span><span class="av-table__id">SaaS · 5 accounts</span></td><td><span class="av-tag av-tag--mono">GCP</span></td><td class="av-table__num av-mono av-posture--good" style="font-size:16px">86</td><td>38 open · scanned 15m ago</td></tr>
  </tbody></table></div>`},
  ];
})()},

{ id:'date-picker', label:'Date picker', desc:'Input + calendar popover. Today has a ring, selected uses the inverse fill, ranges use background-selected.',
css:`.av-date{position:relative;display:flex;align-items:center}
.av-date .av-input{padding-right:44px}.av-date__icon{position:absolute;right:14px;color:var(--av-icon-tertiary);pointer-events:none}
.av-date-range{display:flex;align-items:center;gap:8px}.av-date-range__sep{color:var(--av-text-placeholder)}
.av-calendar{width:min(288px,100%);padding:12px;border-radius:var(--av-radius-xl);background:var(--av-layer-01);border:1px solid var(--av-border-subtle-01);box-shadow:var(--av-shadow-popover)}
.av-calendar__head{display:flex;align-items:center;justify-content:space-between;height:36px;margin-bottom:6px;font-size:13px;font-weight:600}
.av-calendar__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px 0;text-align:center}
.av-calendar__dow{height:28px;line-height:28px;font:500 10px var(--av-font-mono);color:var(--av-text-label)}
.av-calendar__day{height:36px;padding:0;border:0;border-radius:var(--av-radius-md);background:transparent;color:var(--av-text-secondary);font:400 13px var(--av-font-sans);font-variant-numeric:tabular-nums;cursor:pointer;display:flex;align-items:center;justify-content:center}
.av-calendar__day:hover{background:var(--av-layer-hover-01)}
.av-calendar__day--muted{color:var(--av-text-placeholder);cursor:default}
.av-calendar__day--today{box-shadow:inset 0 0 0 1px var(--av-border-strong-02)}
.av-calendar__day--range{border-radius:0;background:var(--av-background-selected);color:var(--av-text-primary)}
.av-calendar__day--selected{background:var(--av-button-selected);color:var(--av-text-inverse);font-weight:600}
.av-presets{display:flex;flex-wrap:wrap;gap:6px}`,
variants:[
 {name:'Single input', html:`<label class="av-field" style="max-width:240px"><span class="av-field__label">Scan from</span><span class="av-date"><input class="av-input" value="10/14/2026"><span class="av-date__icon">${ic('calendar',16)}</span></span></label>`},
 {name:'Calendar', html:cal([14])},
 {name:'Range input', html:`<div class="av-date-range"><span class="av-date"><input class="av-input" value="Oct 6, 2026" aria-label="Start"><span class="av-date__icon">${ic('calendar',16)}</span></span><span class="av-date-range__sep">–</span><span class="av-date"><input class="av-input" value="Oct 14, 2026" aria-label="End"><span class="av-date__icon">${ic('calendar',16)}</span></span></div>`},
 {name:'Range calendar', html:cal([6,14],[6,14])},
 {name:'Presets', html:`<div class="av-presets"><button class="av-tag av-tag--filter" aria-pressed="false">Last 24h</button><button class="av-tag av-tag--filter" aria-pressed="true">Last 7 days</button><button class="av-tag av-tag--filter" aria-pressed="false">Last 30 days</button><button class="av-tag av-tag--filter" aria-pressed="false">Custom…</button></div>`},
 {name:'Disabled', html:`<span class="av-date" style="max-width:240px"><input class="av-input" value="10/14/2026" disabled><span class="av-date__icon">${ic('calendar',16)}</span></span>`},
 {name:'Invalid', html:`<label class="av-field" style="max-width:240px"><span class="av-field__label">End date</span><span class="av-date"><input class="av-input" value="10/02/2026" aria-invalid="true"><span class="av-date__icon">${ic('calendar',16)}</span></span><span class="av-field__error">${ic('alert',12,2)}End date is before start</span></label>`},
]},

{ id:'dropdown', label:'Dropdown', desc:'Custom listbox trigger + menu. Use for rich options (logos, scores). Use Select for plain native lists.',
css:`.av-dropdown{position:relative;display:inline-flex;flex-direction:column;gap:4px;min-width:min(260px,100%)}
.av-dropdown__trigger{display:flex;align-items:center;gap:10px;height:44px;padding:0 14px;border-radius:var(--av-radius-lg);border:1px solid var(--av-border-strong-01);background:var(--av-field-01);color:var(--av-text-primary);font:400 14px var(--av-font-sans);text-align:left;cursor:pointer;transition:border-color var(--av-duration-fast),background var(--av-duration-fast)}
.av-dropdown__trigger:hover{background:var(--av-field-hover-01)}
.av-dropdown__value{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-dropdown__chev{color:var(--av-icon-tertiary);transition:transform var(--av-duration-base)}
.av-dropdown__trigger[aria-expanded="true"]{border-color:var(--av-border-interactive);box-shadow:0 0 0 3px var(--av-focus-ring)}
.av-dropdown__trigger[aria-expanded="true"] .av-dropdown__chev{transform:rotate(180deg)}
.av-dropdown__trigger:disabled{border-style:dashed;background:transparent;color:var(--av-text-disabled);cursor:not-allowed}
.av-dropdown__trigger[aria-invalid="true"]{border-color:var(--av-border-error)}
.av-dropdown--inline .av-dropdown__trigger{height:32px;padding:0 10px;border-color:transparent;background:transparent;font-size:13px;color:var(--av-text-tertiary)}
.av-dropdown--inline .av-dropdown__trigger:hover{background:var(--av-layer-03);color:var(--av-text-primary)}
.av-dropdown--inline{min-width:0}
.av-dropdown__label{font-size:13px;font-weight:500;color:var(--av-text-secondary)}`,
variants:[
 {name:'Closed', html:`<div class="av-dropdown"><span class="av-dropdown__label">Environment</span><button class="av-dropdown__trigger" aria-haspopup="listbox" aria-expanded="false"><span class="av-dropdown__value">All environments</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-dropdown__chev')}</button></div>`},
 {name:'Open', html:`<div class="av-dropdown"><button class="av-dropdown__trigger" aria-haspopup="listbox" aria-expanded="true"><span class="av-dropdown__value">Production</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-dropdown__chev')}</button>
  <div class="av-menu" role="listbox"><button class="av-menu__item" role="option">All environments</button><button class="av-menu__item" role="option" aria-selected="true">Production${ic('check',14,2.2).replace('av-icon','av-icon av-menu__check')}</button><button class="av-menu__item" role="option">Staging</button></div></div>`},
 {name:'Rich (account switcher)', html:`<div class="av-dropdown" style="min-width:min(300px,100%)"><button class="av-dropdown__trigger" aria-expanded="true"><img src="assets/logo-aws-dark.svg" alt="" style="width:20px;height:14px;object-fit:contain"><span class="av-dropdown__value">Production Demo Account</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-dropdown__chev')}</button>
  <div class="av-menu" role="listbox">
    <button class="av-menu__item av-menu__item--rich" role="option" aria-selected="true"><span class="av-menu__logo"><img src="assets/logo-aws-dark.svg" alt=""></span><span class="av-menu__text"><span>Production Demo Account</span><span class="av-menu__sub">010545334631</span></span><span class="av-menu__score av-posture--poor">58</span>${ic('check',14,2.2).replace('av-icon','av-icon av-menu__check')}</button>
    <button class="av-menu__item av-menu__item--rich" role="option"><span class="av-menu__logo"><img src="assets/logo-gcp.svg" alt=""></span><span class="av-menu__text"><span>Northwind Commerce</span><span class="av-menu__sub">alvl-vulnlab-d6a0cd</span></span><span class="av-menu__score av-posture--good">96</span></button>
  </div></div>`},
 {name:'Inline filter', html:`<div class="av-row"><div class="av-dropdown av-dropdown--inline"><button class="av-dropdown__trigger">Severity: All${ic('chevDown',14,2).replace('av-icon','av-icon av-dropdown__chev')}</button></div><div class="av-dropdown av-dropdown--inline"><button class="av-dropdown__trigger">Provider: AWS${ic('chevDown',14,2).replace('av-icon','av-icon av-dropdown__chev')}</button></div></div>`},
 {name:'With icon', html:`<div class="av-dropdown"><button class="av-dropdown__trigger"><img src="assets/icons-3d/users.png" alt="" style="width:20px;height:20px"><span class="av-dropdown__value">Avistar Demo Org</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-dropdown__chev')}</button></div>`},
 {name:'Disabled', html:`<div class="av-dropdown"><button class="av-dropdown__trigger" disabled><span class="av-dropdown__value">Region locked by policy</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-dropdown__chev')}</button></div>`},
 {name:'Invalid', html:`<div class="av-dropdown"><span class="av-dropdown__label">Owner</span><button class="av-dropdown__trigger" aria-invalid="true"><span class="av-dropdown__value" style="color:var(--av-text-placeholder)">Choose an owner</span>${ic('chevDown',16,2).replace('av-icon','av-icon av-dropdown__chev')}</button><span class="av-field__error">${ic('alert',12,2)}Every identity needs an owner</span></div>`},
]},

{ id:'file-uploader', label:'File uploader', desc:'Dashed drop zone + file rows. Used to import CloudFormation outputs and certificates (Azure).',
css:`.av-upload{display:flex;flex-direction:column;align-items:center;gap:8px;padding:32px 24px;border:1px dashed var(--av-border-dashed);border-radius:var(--av-radius-2xl);text-align:center;font-size:13px;color:var(--av-text-tertiary);cursor:pointer;transition:border-color var(--av-duration-base),background var(--av-duration-base)}
.av-upload:hover{border-color:var(--av-border-dashed-hover);background:var(--av-background-hover)}
.av-upload--dragover{border-style:solid;border-color:var(--av-border-interactive);background:var(--av-background-selected)}
.av-upload__icon{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--av-layer-03);color:var(--av-icon-interactive)}
.av-upload__title{font-size:14px;font-weight:600;color:var(--av-text-primary)}
.av-upload__hint{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-file{display:flex;align-items:center;gap:12px;min-height:52px;padding:8px 8px 8px 14px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-lg);background:var(--av-layer-02);font-size:13px}
.av-file__body{flex:1;min-width:0;display:flex;flex-direction:column;gap:6px}
.av-file__name{color:var(--av-text-primary);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-file__meta{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-file--error{border-color:var(--av-border-error)}.av-file--error .av-file__meta{color:var(--av-text-error)}
.av-file__ok{color:var(--av-support-success)}`,
variants:[
 {name:'Drop zone', html:`<label class="av-upload"><input type="file" class="av-sr-only"><span class="av-upload__icon">${ic('upload',20)}</span><span class="av-upload__title">Drop certificate or browse</span><span class="av-upload__hint">.PEM .CER .PFX · MAX 2 MB</span></label>`},
 {name:'Drag over', html:`<label class="av-upload av-upload--dragover"><span class="av-upload__icon">${ic('upload',20)}</span><span class="av-upload__title">Release to upload</span></label>`},
 {name:'Uploading', html:`<div class="av-file"><span style="color:var(--av-icon-tertiary)">${ic('file',18)}</span><span class="av-file__body"><span class="av-file__name">avistar-entra.pfx</span><span class="av-progress av-progress--sm"><span class="av-progress__track"><span class="av-progress__fill" style="width:62%"></span></span></span></span><button class="av-icon-btn av-icon-btn--ghost" aria-label="Cancel">${ic('x',16)}</button></div>`},
 {name:'Uploaded list', html:`<div class="av-stack" style="gap:8px">
  <div class="av-file"><span class="av-file__ok">${ic('check',18,2.2)}</span><span class="av-file__body"><span class="av-file__name">outputs.json</span><span class="av-file__meta">4.2 KB · VALIDATED</span></span><button class="av-icon-btn av-icon-btn--ghost" aria-label="Remove">${ic('trash',16)}</button></div>
  <div class="av-file"><span class="av-file__ok">${ic('check',18,2.2)}</span><span class="av-file__body"><span class="av-file__name">trust-policy.json</span><span class="av-file__meta">1.1 KB · VALIDATED</span></span><button class="av-icon-btn av-icon-btn--ghost" aria-label="Remove">${ic('trash',16)}</button></div>
</div>`},
 {name:'Error', html:`<div class="av-file av-file--error"><span style="color:var(--av-text-error)">${ic('alert',18)}</span><span class="av-file__body"><span class="av-file__name">cert.txt</span><span class="av-file__meta">UNSUPPORTED FILE TYPE</span></span><button class="av-btn av-btn--ghost av-btn--sm">Retry</button></div>`},
]},

{ id:'form', label:'Form', desc:'Label above field, 8px label gap, 20px between fields, actions bottom-right. Field primitives: .av-field, .av-field__label, __helper, __error.',
css:`.av-form{display:flex;flex-direction:column;gap:20px;max-width:520px}
.av-form__row{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:16px}
.av-form__section{display:flex;flex-direction:column;gap:16px;padding-top:20px;border-top:1px solid var(--av-border-subtle-01)}
.av-form__title{margin:0;font-size:16px;font-weight:600;letter-spacing:-0.01em}
.av-form__actions{display:flex;justify-content:flex-end;gap:8px;padding-top:4px}
.av-field{display:flex;flex-direction:column;gap:8px;min-width:0}
.av-field__label{display:flex;justify-content:space-between;gap:8px;font-size:13px;font-weight:500;color:var(--av-text-secondary)}
.av-field__optional{font-weight:400;color:var(--av-text-helper)}
.av-field__helper{font-size:12px;line-height:1.45;color:var(--av-text-helper)}
.av-field__counter{align-self:flex-end;font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-form-card{border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);overflow:hidden}
.av-form-card__body{padding:20px;display:flex;flex-direction:column;gap:20px}
.av-form-card__foot{display:flex;justify-content:flex-end;gap:8px;padding:14px 20px;border-top:1px solid var(--av-border-subtle-01)}
.av-setting{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);gap:24px;align-items:start;padding:20px 0;border-bottom:1px solid var(--av-border-subtle-00)}
.av-setting__k{display:flex;flex-direction:column;gap:4px}.av-setting__t{font-size:14px;font-weight:500}.av-setting__d{font-size:13px;color:var(--av-text-helper)}`,
variants:[
 {name:'Stacked', html:`<form class="av-form">
  <label class="av-field"><span class="av-field__label">Client name</span><input class="av-input" placeholder="e.g. Northwind Health"></label>
  <label class="av-field"><span class="av-field__label">Industry<span class="av-field__optional">Optional</span></span><input class="av-input" placeholder="Healthcare"></label>
  <div class="av-form__actions"><button type="button" class="av-btn av-btn--ghost">Cancel</button><button class="av-btn av-btn--primary">Add client</button></div>
</form>`},
 {name:'Two column', html:`<form class="av-form"><div class="av-form__row">
  <label class="av-field"><span class="av-field__label">Account name</span><input class="av-input" value="Production AWS"></label>
  <label class="av-field"><span class="av-field__label">Region</span><span class="av-select"><select><option>us-east-1</option><option>eu-west-1</option></select>${ic('chevDown',14,2).replace('av-icon','av-icon av-select__chev')}</span></label>
</div></form>`},
 {name:'Sections', html:`<form class="av-form">
  <h3 class="av-form__title">Organization</h3>
  <label class="av-field"><span class="av-field__label">Name</span><input class="av-input" value="Avistar Demo Org"></label>
  <div class="av-form__section"><span class="av-eyebrow">Security</span><label class="av-toggle"><input type="checkbox" role="switch" checked>Require SSO</label></div>
</form>`},
 {name:'Validation', html:`<form class="av-form">
  <label class="av-field"><span class="av-field__label">IAM role ARN</span><input class="av-input av-input--mono" value="not-an-arn" aria-invalid="true"><span class="av-field__error">${ic('alert',12,2)}Enter a valid role ARN — arn:aws:iam::&lt;account&gt;:role/&lt;name&gt;</span></label>
  <label class="av-field"><span class="av-field__label">External ID</span><input class="av-input av-input--mono" value="av-7f2c9d" readonly><span class="av-field__helper">Generated by Avistar. Paste into the trust policy.</span></label>
</form>`},
 {name:'Settings rows', html:`<div>
  <div class="av-setting"><div class="av-setting__k"><span class="av-setting__t">Scan frequency</span><span class="av-setting__d">How often Avistar re-reads your cloud.</span></div><span class="av-select"><select><option>Every 6 hours</option><option>Daily</option></select>${ic('chevDown',14,2).replace('av-icon','av-icon av-select__chev')}</span></div>
  <div class="av-setting"><div class="av-setting__k"><span class="av-setting__t">Weekly digest</span><span class="av-setting__d">Email summary every Monday.</span></div><label class="av-toggle"><input type="checkbox" role="switch" checked></label></div>
</div>`},
 {name:'In card', html:`<form class="av-form-card" style="max-width:480px"><div class="av-form-card__body"><h3 class="av-form__title">Invite member</h3>
  <label class="av-field"><span class="av-field__label">Email</span><input class="av-input" placeholder="name@company.com"></label>
  <label class="av-field"><span class="av-field__label">Role</span><span class="av-select"><select><option>Analyst</option><option>Owner</option></select>${ic('chevDown',14,2).replace('av-icon','av-icon av-select__chev')}</span></label>
</div><div class="av-form-card__foot"><button type="button" class="av-btn av-btn--ghost">Cancel</button><button class="av-btn av-btn--primary">Send invite</button></div></form>`},
 {name:'Multi-step', html:`<div class="av-form" style="max-width:560px"><ol class="av-steps"><li class="av-step av-step--done"><span class="av-step__dot">${ic('check',12,3)}</span>Provider<span class="av-step__line"></span></li><li class="av-step av-step--current"><span class="av-step__dot">2</span>Credentials<span class="av-step__line"></span></li><li class="av-step"><span class="av-step__dot">3</span>Verify</li></ol>
  <label class="av-field"><span class="av-field__label">Role ARN</span><input class="av-input av-input--mono" placeholder="arn:aws:iam::…"></label>
  <div class="av-form__actions"><button class="av-btn av-btn--ghost">Back</button><button class="av-btn av-btn--primary">Continue</button></div></div>`},
]},

{ id:'link', label:'Link', desc:'Underlined by default, Ion on hover. Action links carry an arrow and sit next to primary buttons.',
css:`.av-link{color:var(--av-link-primary);text-decoration:underline;text-decoration-thickness:1px;text-underline-offset:4px;text-decoration-color:var(--av-link-underline);cursor:pointer;transition:color var(--av-duration-fast),text-decoration-color var(--av-duration-fast)}
.av-link:hover{color:var(--av-link-primary-hover);text-decoration-color:var(--av-link-underline-hover)}
.av-link:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px;border-radius:2px}
.av-link--action{display:inline-flex;align-items:center;gap:8px;font-size:14px;font-weight:500;text-underline-offset:5px;text-decoration-color:currentColor}
.av-link--quiet{color:var(--av-link-secondary);text-decoration:none}.av-link--quiet:hover{color:var(--av-link-secondary-hover)}
.av-link--standalone{text-decoration-color:transparent}.av-link--standalone:hover{text-decoration-color:currentColor}
.av-link--sm{font-size:12px}
.av-link--disabled,.av-link[aria-disabled="true"]{color:var(--av-text-disabled);text-decoration-color:transparent;pointer-events:none}
.av-link--inverse{color:var(--av-link-inverse);text-decoration-color:currentColor}`,
variants:[
 {name:'Inline', html:`<p style="margin:0;font-size:14px;color:var(--av-text-tertiary)">Close the 2 public buckets to reach 71. <a class="av-link" href="#">See which ones</a>.</p>`},
 {name:'Action', html:`<div class="av-row" style="gap:24px"><a class="av-link av-link--action" href="#">Schedule scans${ic('arrow',16,2)}</a><a class="av-link av-link--action" href="#">Help guide${ic('arrow',14,2)}</a></div>`},
 {name:'Quiet', html:`<a class="av-link av-link--quiet" href="#">View all bulletins</a>`},
 {name:'Standalone', html:`<a class="av-link av-link--standalone" href="#">Open →</a>`},
 {name:'External', html:`<a class="av-link av-link--action" href="#" target="_blank" rel="noopener">Open AWS console${ic('ext',14,2)}</a>`},
 {name:'Small', html:`<a class="av-link av-link--sm" href="#">Start with this fix</a>`},
 {name:'Disabled', html:`<a class="av-link" aria-disabled="true">Download report</a>`},
]},

{ id:'loading', label:'Loading', desc:'Spinner (Ion head on layer-04 track), inline status, skeleton shimmer.',
css:`.av-spinner{display:inline-block;width:20px;height:20px;border-radius:50%;border:2px solid var(--av-layer-04);border-top-color:var(--av-focus);animation:av-spin .8s linear infinite;flex-shrink:0}
.av-spinner--sm{width:14px;height:14px}.av-spinner--lg{width:32px;height:32px;border-width:3px}
.av-loading-inline{display:inline-flex;align-items:center;gap:10px;font-size:13px;color:var(--av-text-tertiary)}
.av-skeleton{display:block;border-radius:6px;background:linear-gradient(90deg,var(--av-skeleton-base),var(--av-skeleton-shine),var(--av-skeleton-base));background-size:400px 100%;animation:av-shimmer 1.4s linear infinite}
.av-skeleton--circle{border-radius:50%}
.av-live-dot{width:8px;height:8px;border-radius:50%;background:var(--av-support-low);animation:av-pulse 1.4s ease-in-out infinite}`,
variants:[
 {name:'Spinner sizes', html:`<div class="av-row" style="gap:24px"><span class="av-spinner av-spinner--sm" role="status" aria-label="Loading"></span><span class="av-spinner" role="status" aria-label="Loading"></span><span class="av-spinner av-spinner--lg" role="status" aria-label="Loading"></span></div>`},
 {name:'Inline status', html:`<div class="av-stack"><span class="av-loading-inline"><span class="av-spinner av-spinner--sm"></span>Syncing AWS accounts…</span><span class="av-loading-inline"><span class="av-live-dot"></span>Scan in progress · 64%</span></div>`},
 {name:'Button', html:`<button class="av-btn av-btn--primary" aria-busy="true"><span class="av-btn__spinner"></span>Running scan…</button>`},
 {name:'Skeleton card', html:`<div class="av-tile" style="max-width:320px"><div class="av-row"><span class="av-skeleton av-skeleton--circle" style="width:40px;height:40px"></span><span class="av-stack" style="flex:1;gap:8px"><span class="av-skeleton" style="height:12px;width:70%"></span><span class="av-skeleton" style="height:10px;width:45%"></span></span></div><span class="av-skeleton" style="height:64px;border-radius:10px"></span></div>`},
 {name:'Skeleton rows', html:`<div class="av-stack" style="gap:14px">${[80,64,72].map(w => `<div class="av-row"><span class="av-skeleton" style="height:14px;width:${w}%"></span><span class="av-skeleton" style="height:14px;width:12%;margin-left:auto"></span></div>`).join('')}</div>`},
]},

{ id:'menu', label:'Menu', desc:'Popover list with 6px padding, 36px items, kbd hints, danger at the bottom after a separator. Enters with ctxIn (scale + blur).',
css:`.av-menu{min-width:min(220px,100%);padding:6px;border-radius:var(--av-radius-xl);background:var(--av-layer-01);border:1px solid var(--av-border-subtle-01);box-shadow:var(--av-shadow-popover);display:flex;flex-direction:column;animation:av-ctx-in .32s var(--av-ease-standard);transform-origin:top left}
.av-menu__item{display:flex;align-items:center;gap:10px;width:100%;min-height:36px;padding:0 10px;border:0;border-radius:var(--av-radius-md);background:transparent;color:var(--av-text-primary);font:400 13px var(--av-font-sans);text-align:left;cursor:pointer}
.av-menu__item .av-icon{color:var(--av-icon-tertiary)}
.av-menu__item:hover,.av-menu__item:focus-visible{background:var(--av-layer-05);outline:none}
.av-menu__item--danger,.av-menu__item--danger .av-icon{color:var(--av-text-error)}
.av-menu__item[aria-disabled="true"]{color:var(--av-text-disabled);pointer-events:none}
.av-menu__kbd{margin-left:auto;font:11px var(--av-font-mono);color:var(--av-text-placeholder)}
.av-menu__check{margin-left:auto;color:var(--av-icon-interactive)!important;animation:av-pop .45s var(--av-ease-spring) .12s both}
.av-menu__sep{height:1px;margin:6px 4px;background:var(--av-border-subtle-01)}
.av-menu__group{padding:8px 10px 4px;font:500 10px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-label)}
.av-menu__item--rich{min-height:52px;padding:6px 10px}
.av-menu__logo{width:36px;height:36px;flex-shrink:0;border-radius:9px;background:var(--av-layer-04);border:1px solid var(--av-border-subtle-00);display:flex;align-items:center;justify-content:center}
.av-menu__logo img{width:20px;height:20px;object-fit:contain}
.av-menu__text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;font-weight:500}
.av-menu__sub{font-size:11px;font-weight:400;color:var(--av-text-helper)}
.av-menu__score{font:500 13px var(--av-font-mono)}
.av-menu__foot{display:flex;align-items:center;padding:4px 10px 0;margin-top:6px;border-top:1px solid var(--av-border-subtle-01)}`,
variants:[
 {name:'Basic', html:`<div class="av-menu" role="menu"><button class="av-menu__item" role="menuitem">Rename</button><button class="av-menu__item" role="menuitem">Move to org</button><button class="av-menu__item" role="menuitem">Archive</button></div>`},
 {name:'Shortcuts + danger', html:`<div class="av-menu" role="menu">
  ${menuItems}
</div>`},
 {name:'Groups', html:`<div class="av-menu" role="menu"><span class="av-menu__group">Client</span><button class="av-menu__item">Hydroponic Cloud</button><button class="av-menu__item">Acme Health · Archived</button><div class="av-menu__sep"></div><span class="av-menu__group">Account</span><button class="av-menu__item">Production Demo Account</button></div>`},
 {name:'Selectable', html:`<div class="av-menu" role="listbox"><button class="av-menu__item" role="option">Newest first</button><button class="av-menu__item" role="option" aria-selected="true">Severity${ic('check',14,2.2).replace('av-icon','av-icon av-menu__check')}</button><button class="av-menu__item" role="option">Fix time</button></div>`},
 {name:'Rich', html:`<div class="av-menu" style="width:min(300px,100%)"><button class="av-menu__item av-menu__item--rich"><span class="av-menu__logo"><img src="assets/logo-azure.svg" alt=""></span><span class="av-menu__text"><span>Ashgrove Azure</span><span class="av-menu__sub">tenant 4c1e…b20</span></span><span class="av-menu__score av-posture--fair">78</span></button><button class="av-menu__item av-menu__item--rich"><span class="av-menu__logo"><img src="assets/logo-gcp.svg" alt=""></span><span class="av-menu__text"><span>Ashgrove Analytics</span><span class="av-menu__sub">ash-analytics-01</span></span><span class="av-menu__score av-posture--good">88</span></button></div>`},
 {name:'With footer action', html:`<div class="av-menu" style="width:min(280px,100%)"><button class="av-menu__item" aria-selected="true">Production Demo Account${ic('check',14,2.2).replace('av-icon','av-icon av-menu__check')}</button><button class="av-menu__item">Staging Account</button><div class="av-menu__foot"><button class="av-btn av-btn--ghost av-btn--sm" style="padding:0">${ic('plus',14,2)}Connect account</button></div></div>`},
]},

{ id:'menu-buttons', label:'Menu buttons', desc:'Buttons that open a Menu. Chevron rotates when expanded.',
css:`.av-menubtn{position:relative;display:inline-flex;flex-direction:column;align-items:flex-start;gap:6px}
.av-menubtn .av-btn .av-menubtn__chev{transition:transform var(--av-duration-base)}
.av-menubtn .av-btn[aria-expanded="true"] .av-menubtn__chev{transform:rotate(180deg)}
.av-split{display:inline-flex}
.av-split .av-btn:first-child{border-radius:var(--av-radius-pill) 0 0 var(--av-radius-pill);padding-right:16px}
.av-split .av-btn:last-child{border-radius:0 var(--av-radius-pill) var(--av-radius-pill) 0;padding:0 12px;border-left:1px solid rgba(255,255,255,.25)}
.av-account-btn{display:inline-flex;align-items:center;gap:10px;height:40px;padding:0 10px 0 4px;border:1px solid transparent;border-radius:var(--av-radius-pill);background:transparent;color:var(--av-text-muted-intro);font:400 13px var(--av-font-sans);cursor:pointer}
.av-account-btn:hover,.av-account-btn[aria-expanded="true"]{border-color:var(--av-border-subtle-01);background:var(--av-layer-03)}`,
variants:[
 {name:'Secondary', html:`<div class="av-menubtn"><button class="av-btn av-btn--secondary" aria-haspopup="menu" aria-expanded="false">${ic('download',14)}Export${ic('chevDown',14,2).replace('av-icon','av-icon av-menubtn__chev')}</button></div>`},
 {name:'Open', html:`<div class="av-menubtn"><button class="av-btn av-btn--secondary" aria-haspopup="menu" aria-expanded="true">Export${ic('chevDown',14,2).replace('av-icon','av-icon av-menubtn__chev')}</button><div class="av-menu" role="menu"><button class="av-menu__item">${ic('report')}PDF report</button><button class="av-menu__item">${ic('file')}CSV findings</button></div></div>`},
 {name:'Split primary', html:`<div class="av-split"><button class="av-btn av-btn--primary">${ic('play',14,0,true)}Run scan</button><button class="av-btn av-btn--primary" aria-label="Scan options" aria-haspopup="menu">${ic('chevDown',14,2.2)}</button></div>`},
 {name:'Overflow', html:`<div class="av-menubtn"><button class="av-icon-btn av-icon-btn--ghost" aria-label="Row actions" aria-haspopup="menu" aria-expanded="true">${ic('dots',18,2.6)}</button><div class="av-menu" role="menu">${menuItems}</div></div>`},
 {name:'Account', html:`<button class="av-account-btn" aria-haspopup="menu" aria-expanded="false"><span class="av-avatar">Z</span>zalak@avistar.ai${ic('chevDown',14,2)}</button>`},
]},

{ id:'modal', label:'Modal', desc:'16px radius on layer-01, scrim 55% black. Title 18/600, body 14 tertiary, footer right-aligned. Side sheet for drill-ins (fix drawer). .av-demo-stage is only for docs — use position:fixed in product.',
css:`.av-modal-scrim{position:fixed;inset:0;z-index:var(--av-z-modal);display:flex;align-items:center;justify-content:center;padding:20px;background:var(--av-overlay)}
.av-demo-stage .av-modal-scrim,.av-demo-stage .av-sheet-scrim{position:absolute}
.av-modal{width:min(440px,100%);max-height:calc(100% - 40px);display:flex;flex-direction:column;border-radius:var(--av-radius-2xl);background:var(--av-layer-01);border:1px solid var(--av-border-subtle-01);box-shadow:var(--av-shadow-modal);animation:av-slide-up .3s var(--av-ease-enter)}
.av-modal--lg{width:min(640px,100%)}
.av-modal__head{display:flex;align-items:flex-start;gap:12px;padding:20px 20px 0}
.av-modal__heading{flex:1;display:flex;flex-direction:column;gap:6px}
.av-modal__title{margin:0;font-size:18px;font-weight:600;letter-spacing:-0.02em}
.av-modal__body{padding:12px 20px 20px;font-size:14px;line-height:1.55;color:var(--av-text-tertiary);overflow:auto;display:flex;flex-direction:column;gap:16px}
.av-modal__foot{display:flex;justify-content:flex-end;gap:8px;padding:14px 20px;border-top:1px solid var(--av-border-subtle-01)}
.av-modal__art{width:56px;height:56px;object-fit:contain}
.av-sheet-scrim{position:fixed;inset:0;z-index:var(--av-z-modal);background:var(--av-overlay-sheet)}
.av-sheet{position:absolute;top:0;right:0;bottom:0;width:min(420px,90%);display:flex;flex-direction:column;background:var(--av-layer-01);border-left:1px solid var(--av-border-subtle-01);box-shadow:var(--av-shadow-sheet);animation:av-sheet-in .36s var(--av-ease-standard)}
.av-sheet__head{display:flex;align-items:flex-start;gap:12px;padding:20px;border-bottom:1px solid var(--av-border-subtle-01)}
.av-sheet__body{flex:1;overflow:auto;padding:20px;display:flex;flex-direction:column;gap:16px;font-size:13px;color:var(--av-text-tertiary)}
.av-sheet__foot{display:flex;gap:8px;padding:14px 20px;border-top:1px solid var(--av-border-subtle-01)}`,
variants:(() => { const close = `<button class="av-icon-btn av-icon-btn--ghost" aria-label="Close">${ic('x',16)}</button>`; return [
 {name:'Passive', html:`<div class="av-demo-stage"><div class="av-modal-scrim"><div class="av-modal" role="dialog" aria-modal="true" aria-labelledby="m1"><div class="av-modal__head"><div class="av-modal__heading"><span class="av-eyebrow">Help</span><h2 class="av-modal__title" id="m1">Everything flows into one score</h2></div>${close}</div><div class="av-modal__body">Every scan feeds the posture number. Close the top three fixes and watch it climb.</div></div></div></div>`},
 {name:'Transactional', html:`<div class="av-demo-stage"><div class="av-modal-scrim"><div class="av-modal" role="dialog" aria-modal="true"><div class="av-modal__head"><div class="av-modal__heading"><h2 class="av-modal__title">Run a full scan?</h2></div>${close}</div><div class="av-modal__body">This reads 3 accounts and takes about 6 minutes. You can keep working.</div><div class="av-modal__foot"><button class="av-btn av-btn--ghost">Cancel</button><button class="av-btn av-btn--primary">${ic('play',14,0,true)}Run scan</button></div></div></div></div>`},
 {name:'Danger', html:`<div class="av-demo-stage"><div class="av-modal-scrim"><div class="av-modal" role="alertdialog" aria-modal="true"><div class="av-modal__head"><div class="av-modal__heading"><h2 class="av-modal__title">Revoke access key?</h2></div>${close}</div><div class="av-modal__body">AKIA…7Q2F stops working immediately. 2 workloads depend on it.</div><div class="av-modal__foot"><button class="av-btn av-btn--secondary">Cancel</button><button class="av-btn av-btn--danger-solid">Revoke key</button></div></div></div></div>`},
 {name:'Form', html:`<div class="av-demo-stage" style="height:440px"><div class="av-modal-scrim"><div class="av-modal" role="dialog" aria-modal="true"><div class="av-modal__head"><div class="av-modal__heading"><h2 class="av-modal__title">Create organization</h2></div>${close}</div><div class="av-modal__body"><label class="av-field"><span class="av-field__label">Name</span><input class="av-input" placeholder="Ridgeway Partners MSP"></label><label class="av-checkbox"><input type="checkbox" checked>I'm the owner</label></div><div class="av-modal__foot"><button class="av-btn av-btn--ghost">Cancel</button><button class="av-btn av-btn--primary">Create</button></div></div></div></div>`},
 {name:'With illustration', html:`<div class="av-demo-stage"><div class="av-modal-scrim"><div class="av-modal" role="dialog" aria-modal="true"><div class="av-modal__body" style="padding-top:24px;align-items:center;text-align:center"><img class="av-modal__art" src="assets/mascots/shield.png" alt=""><h2 class="av-modal__title" style="color:var(--av-text-primary)">Account connected</h2>First scan starts now. We'll notify you when it's done.</div><div class="av-modal__foot" style="justify-content:center"><button class="av-btn av-btn--primary">View first scan${ic('arrow',16,2)}</button></div></div></div></div>`},
 {name:'Side sheet', html:`<div class="av-demo-stage" style="height:420px"><div class="av-sheet-scrim"></div><aside class="av-sheet" role="dialog" aria-modal="true"><div class="av-sheet__head"><div class="av-modal__heading"><span class="av-tag av-tag--critical" style="align-self:flex-start"><span class="av-tag__dot"></span>Critical</span><h2 class="av-modal__title">S3 bucket is publicly readable</h2><span class="av-table__id">hci-exports-prod · us-east-1</span></div>${close}</div><div class="av-sheet__body">Anyone with the URL can list and download objects.<div class="av-code av-code--single"><span>aws s3api put-public-access-block …</span><button class="av-icon-btn av-icon-btn--ghost av-code__copy" aria-label="Copy">${ic('copy',16)}</button></div></div><div class="av-sheet__foot"><button class="av-btn av-btn--primary">Mark fixed</button><button class="av-btn av-btn--secondary">Assign</button></div></aside></div>`},
]; })()},

{ id:'notification', label:'Notification', desc:'Inline notices (info / success / warning / error), toasts (inverse) and the dismissible banner.',
css:`.av-notice{--av-n:var(--av-support-low);--av-n-bg:var(--av-support-low-bg);display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border-radius:var(--av-radius-xl);border:1px solid color-mix(in srgb,var(--av-n) 38%,transparent);background:var(--av-n-bg)}
.av-notice--success{--av-n:var(--av-support-success);--av-n-bg:var(--av-support-success-bg)}
.av-notice--warning{--av-n:var(--av-support-medium);--av-n-bg:var(--av-support-medium-bg)}
.av-notice--error{--av-n:var(--av-support-critical);--av-n-bg:var(--av-support-critical-bg)}
.av-notice__icon{width:20px;height:20px;flex-shrink:0;border-radius:50%;background:var(--av-n);color:var(--av-text-inverse);display:flex;align-items:center;justify-content:center;font:700 12px var(--av-font-sans)}
.av-notice__body{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.av-notice__title{font-size:14px;font-weight:600}.av-notice__text{font-size:13px;line-height:1.45;color:var(--av-text-tertiary)}
.av-notice__action{align-self:center;font-size:13px;white-space:nowrap}
.av-notice--subtle{border-color:var(--av-border-subtle-01);background:var(--av-layer-01)}
.av-toast{display:inline-flex;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;background:var(--av-background-inverse);color:var(--av-text-inverse);box-shadow:var(--av-shadow-toast);font-size:13px;font-weight:500;animation:av-slide-up .3s var(--av-ease-enter)}
.av-toast__dot{width:8px;height:8px;border-radius:50%;background:var(--av-support-success)}
.av-toast a{color:inherit;text-underline-offset:3px}
.av-toast--quiet{background:var(--av-layer-01);color:var(--av-text-primary);border:1px solid var(--av-border-subtle-01)}
.av-toast--error{background:var(--av-layer-01);color:var(--av-text-error);border:1px solid var(--av-button-danger-border)}`,
variants:[
 {name:'Inline kinds', html:`<div class="av-stack">
  <div class="av-notice" role="status"><span class="av-notice__icon">i</span><span class="av-notice__body"><span class="av-notice__title">Scan scheduled</span><span class="av-notice__text">Next full scan runs tonight at 02:00 UTC.</span></span><a class="av-link av-notice__action" href="#">Change</a></div>
  <div class="av-notice av-notice--success" role="status"><span class="av-notice__icon">✓</span><span class="av-notice__body"><span class="av-notice__title">Guardrail applied</span><span class="av-notice__text">“Rotate keys every 90 days” now enforced on 4 clients.</span></span></div>
  <div class="av-notice av-notice--warning" role="status"><span class="av-notice__icon">!</span><span class="av-notice__body"><span class="av-notice__title">Credentials expiring</span><span class="av-notice__text">Azure service principal expires in 6 days.</span></span><a class="av-link av-notice__action" href="#">Renew</a></div>
  <div class="av-notice av-notice--error" role="alert"><span class="av-notice__icon">!</span><span class="av-notice__body"><span class="av-notice__title">Critical exposure</span><span class="av-notice__text">A key for ci-deploy-runner was found in a public repo.</span></span><a class="av-link av-notice__action" href="#">Revoke now</a></div>
</div>`},
 {name:'Toasts', html:`<div class="av-stack" style="align-items:flex-start">
  <div class="av-toast" role="status"><span class="av-toast__dot"></span>Scan complete · 3 new findings<a href="#">View</a></div>
  <div class="av-toast av-toast--quiet" role="status"><span class="av-spinner av-spinner--sm"></span>Syncing AWS accounts…</div>
  <div class="av-toast av-toast--error" role="alert">Couldn't reach GCP. Retrying in 30s</div>
  <div class="av-toast" role="status">ARN copied</div>
</div>`},
 {name:'Dismissible', html:`<div class="av-notice av-notice--subtle"><span class="av-notice__icon">i</span><span class="av-notice__body"><span class="av-notice__title">New: guardrails</span><span class="av-notice__text">Block risky changes before they ship.</span></span><button class="av-icon-btn av-icon-btn--ghost" aria-label="Dismiss">${ic('x',16)}</button></div>`},
 {name:'Actionable', html:`<div class="av-notice av-notice--warning"><span class="av-notice__icon">!</span><span class="av-notice__body"><span class="av-notice__title">1 of 3 accounts not scanned</span><span class="av-notice__text">Staging is missing permissions.</span></span><button class="av-btn av-btn--secondary av-btn--sm" style="align-self:center">Fix permissions</button></div>`},
]},

{ id:'number-input', label:'Number input', desc:'Field with stepper buttons and optional unit. Focus ring applies to the whole group.',
css:`.av-number{display:flex;align-items:stretch;height:44px;max-width:220px;border:1px solid var(--av-border-strong-01);border-radius:var(--av-radius-lg);background:var(--av-field-01);overflow:hidden;transition:border-color var(--av-duration-fast),box-shadow var(--av-duration-fast)}
.av-number:focus-within{border-color:var(--av-border-interactive);box-shadow:0 0 0 3px var(--av-focus-ring)}
.av-number input{flex:1;min-width:0;padding:0 14px;border:0;background:transparent;color:var(--av-text-primary);font:400 14px var(--av-font-sans);font-variant-numeric:tabular-nums;outline:none;-moz-appearance:textfield}
.av-number input::-webkit-inner-spin-button,.av-number input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}
.av-number__unit{display:flex;align-items:center;padding-right:10px;font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-number button{width:40px;border:0;border-left:1px solid var(--av-border-subtle-01);background:transparent;color:var(--av-icon-secondary);cursor:pointer;display:flex;align-items:center;justify-content:center}
.av-number button:hover{background:var(--av-layer-hover-01);color:var(--av-icon-primary)}
.av-number--invalid{border-color:var(--av-border-error)}
.av-number--disabled{border-style:dashed;background:transparent}.av-number--disabled input,.av-number--disabled button{color:var(--av-text-disabled);cursor:not-allowed}
.av-number--sm{height:36px}.av-number--sm button{width:32px}`,
variants:(() => { const n = (v, cls = '', unit, dis) => `<div class="av-number ${cls}"><input type="number" value="${v}"${dis ? ' disabled' : ''} aria-label="Value">${unit ? `<span class="av-number__unit">${unit}</span>` : ''}<button aria-label="Decrease"${dis ? ' disabled' : ''}>${ic('minus',14,2)}</button><button aria-label="Increase"${dis ? ' disabled' : ''}>${ic('plus',14,2)}</button></div>`; return [
 {name:'Default', html:`<label class="av-field"><span class="av-field__label">Retention</span>${n(30)}</label>`},
 {name:'With unit', html:n(90,'','DAYS')},
 {name:'Invalid', html:`<label class="av-field"><span class="av-field__label">Key max age</span>${n(400,'av-number--invalid','DAYS')}<span class="av-field__error">${ic('alert',12,2)}Max 365 days</span></label>`},
 {name:'Disabled', html:n(6,'av-number--disabled','HOURS',true)},
 {name:'Small', html:n(3,'av-number--sm')},
]; })()},

{ id:'pagination', label:'Pagination', desc:'32px page buttons, current page has strong border + layer-03.',
css:`.av-pagination{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;font-size:12px;color:var(--av-text-helper)}
.av-pagination__pages{display:flex;align-items:center;gap:4px}
.av-page{min-width:32px;height:32px;padding:0 8px;border-radius:var(--av-radius-md);border:1px solid transparent;background:transparent;color:var(--av-text-tertiary);font:400 12px var(--av-font-sans);font-variant-numeric:tabular-nums;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
.av-page:hover{background:var(--av-layer-hover-01);color:var(--av-text-primary)}
.av-page[aria-current="page"]{border-color:var(--av-border-strong-02);background:var(--av-layer-03);color:var(--av-text-primary)}
.av-page:disabled{color:var(--av-text-disabled);cursor:not-allowed;background:transparent}
.av-pagination__size{display:flex;align-items:center;gap:8px}
.av-pagination__more{display:flex;justify-content:center;padding:12px}`,
variants:[
 {name:'Numbered', html:`<nav class="av-pagination" aria-label="Pagination"><span>1–25 of 293</span><div class="av-pagination__pages"><button class="av-page" disabled aria-label="Previous">${ic('chevLeft',14,2)}</button><button class="av-page" aria-current="page">1</button><button class="av-page">2</button><button class="av-page">3</button><span class="av-page" aria-hidden="true">…</span><button class="av-page">12</button><button class="av-page" aria-label="Next">${ic('chevRight',14,2)}</button></div></nav>`},
 {name:'With page size', html:`<nav class="av-pagination"><span class="av-pagination__size">Rows<span class="av-select av-select--sm"><select><option>25</option><option>50</option></select>${ic('chevDown',12,2).replace('av-icon','av-icon av-select__chev')}</span></span><span>26–50 of 293</span><div class="av-pagination__pages"><button class="av-page">${ic('chevLeft',14,2)}</button><button class="av-page">1</button><button class="av-page" aria-current="page">2</button><button class="av-page">3</button><button class="av-page">${ic('chevRight',14,2)}</button></div></nav>`},
 {name:'Simple', html:`<nav class="av-pagination"><span>Page 2 of 12</span><div class="av-pagination__pages"><button class="av-btn av-btn--secondary av-btn--sm">${ic('chevLeft',12,2)}Previous</button><button class="av-btn av-btn--secondary av-btn--sm">Next${ic('chevRight',12,2)}</button></div></nav>`},
 {name:'Load more', html:`<div class="av-pagination__more"><button class="av-btn av-btn--secondary">Show 25 more</button></div>`},
]},

{ id:'password-input', label:'Password input', desc:'Text input with reveal toggle; optional 4-segment strength meter.',
css:`.av-input-group{position:relative;display:flex;align-items:center}
.av-input-group__icon{position:absolute;left:14px;color:var(--av-icon-tertiary);pointer-events:none}
.av-input-group--start .av-input{padding-left:40px}
.av-input-group__end{position:absolute;right:6px;display:flex;align-items:center;gap:4px}
.av-input-group--end .av-input{padding-right:48px}
.av-strength{display:flex;gap:4px}.av-strength span{flex:1;height:4px;border-radius:var(--av-radius-pill);background:var(--av-layer-04)}
.av-strength[data-level="1"] span:nth-child(-n+1){background:var(--av-support-critical)}
.av-strength[data-level="2"] span:nth-child(-n+2){background:var(--av-support-medium)}
.av-strength[data-level="3"] span:nth-child(-n+3){background:var(--av-support-low)}
.av-strength[data-level="4"] span{background:var(--av-support-success)}`,
variants:(() => { const p = (v, type, extra = '', eye = 'eye') => `<span class="av-input-group av-input-group--end"><input class="av-input" type="${type}" value="${v}"${extra}><span class="av-input-group__end"><button class="av-icon-btn av-icon-btn--ghost" aria-label="${eye === 'eye' ? 'Show' : 'Hide'} password">${ic(eye,16)}</button></span></span>`; return [
 {name:'Hidden', html:`<label class="av-field" style="max-width:320px"><span class="av-field__label">Password</span>${p('correct horse','password')}</label>`},
 {name:'Visible', html:`<label class="av-field" style="max-width:320px"><span class="av-field__label">Client secret</span>${p('Zx8~q1Lr-2mp','text',' class="av-input av-input--mono"','eyeOff').replace('class="av-input" type="text" value="Zx8~q1Lr-2mp" class="av-input av-input--mono"','class="av-input av-input--mono" type="text" value="Zx8~q1Lr-2mp"')}</label>`},
 {name:'Strength', html:`<label class="av-field" style="max-width:320px"><span class="av-field__label">New password</span>${p('hunter22','password')}<span class="av-strength" data-level="2"><span></span><span></span><span></span><span></span></span><span class="av-field__helper">Fair · add a symbol or 4 more characters</span></label>`},
 {name:'Invalid', html:`<label class="av-field" style="max-width:320px"><span class="av-field__label">Password</span>${p('abc','password',' aria-invalid="true"')}<span class="av-field__error">${ic('alert',12,2)}Incorrect password</span></label>`},
]; })()},

{ id:'popover', label:'Popover', desc:'Rich floating panel (280px) with optional caret. Anchor with Floating UI or CSS anchor positioning.',
css:`.av-popover{position:relative;width:min(280px,100%);padding:16px;border-radius:var(--av-radius-xl);background:var(--av-layer-01);border:1px solid var(--av-border-subtle-01);box-shadow:var(--av-shadow-popover);display:flex;flex-direction:column;gap:10px;font-size:13px;line-height:1.5;color:var(--av-text-tertiary);animation:av-ctx-in .32s var(--av-ease-standard)}
.av-popover__title{font-size:14px;font-weight:600;color:var(--av-text-primary)}
.av-popover__actions{display:flex;gap:8px}
.av-popover--caret-bottom::after,.av-popover--caret-top::after{content:"";position:absolute;left:24px;width:12px;height:12px;background:inherit;border:1px solid var(--av-border-subtle-01);transform:rotate(45deg)}
.av-popover--caret-bottom::after{bottom:-7px;border-top:0;border-left:0}
.av-popover--caret-top::after{top:-7px;border-bottom:0;border-right:0}
.av-popover__stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;padding-top:10px;border-top:1px solid var(--av-border-subtle-01)}
.av-popover__stat{display:flex;flex-direction:column;gap:2px}.av-popover__stat b{font-size:18px;font-weight:600;color:var(--av-text-primary);font-variant-numeric:tabular-nums}`,
variants:[
 {name:'Basic', html:`<div class="av-popover" role="dialog"><span class="av-popover__title">svc-billing-writer</span>Has s3:PutObject on 14 buckets. Used by 1 workload.</div>`},
 {name:'With actions', html:`<div class="av-popover" role="dialog"><span class="av-popover__title">Scope down?</span>Remove write access on 12 unused buckets.<div class="av-popover__actions"><button class="av-btn av-btn--primary av-btn--sm">Scope down</button><button class="av-btn av-btn--secondary av-btn--sm">Details</button></div></div>`},
 {name:'Caret top', html:`<div style="padding-top:8px"><div class="av-popover av-popover--caret-top"><span class="av-popover__title">Posture score</span>0–64 poor · 65–79 fair · 80+ good.</div></div>`},
 {name:'Caret bottom', html:`<div style="padding-bottom:8px"><div class="av-popover av-popover--caret-bottom"><span class="av-popover__title">Last scan</span>Finished 2 hours ago in 5m 41s.</div></div>`},
 {name:'Rich', html:`<div class="av-popover" style="width:min(300px,100%)"><div class="av-row" style="gap:10px"><span class="av-avatar av-avatar--square">CI</span><span class="av-stack" style="gap:2px"><span class="av-popover__title">ci-deploy-runner</span><span class="av-table__id">arn:aws:iam::0105:role/ci</span></span></div><div class="av-popover__stats"><span class="av-popover__stat"><b>14</b>policies</span><span class="av-popover__stat"><b class="av-posture--poor">3</b>critical</span><span class="av-popover__stat"><b>2m</b>last used</span></div></div>`},
]},

{ id:'progress-bar', label:'Progress bar', desc:'6px track on layer-04. Brand gradient for coverage/score, status colours for compliance, indeterminate for scanning.',
css:`.av-progress{display:flex;flex-direction:column;gap:6px;width:100%}
.av-progress__head{display:flex;justify-content:space-between;gap:12px;font-size:13px;color:var(--av-text-secondary)}
.av-progress__value{font-variant-numeric:tabular-nums;color:var(--av-text-helper)}
.av-progress__track{position:relative;display:block;height:6px;border-radius:var(--av-radius-pill);background:var(--av-layer-04);overflow:hidden}
.av-progress__fill{display:block;height:100%;border-radius:inherit;background:var(--av-gradient-brand);transition:width .6s var(--av-ease-standard)}
.av-progress--ion .av-progress__fill{background:var(--av-support-low)}
.av-progress--amber .av-progress__fill{background:var(--av-support-medium)}
.av-progress--success .av-progress__fill{background:var(--av-support-success)}
.av-progress--error .av-progress__fill{background:var(--av-support-critical)}
.av-progress--indeterminate .av-progress__fill{width:40%;animation:av-indet 1.4s var(--av-ease-standard) infinite}
.av-progress--sm .av-progress__track{height:4px}
.av-progress__helper{font-size:12px;color:var(--av-text-helper)}.av-progress--error .av-progress__helper{color:var(--av-text-error)}`,
variants:[
 {name:'Brand', html:`<div class="av-progress"><div class="av-progress__head"><span>Identity coverage</span><span class="av-progress__value">72%</span></div><span class="av-progress__track" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"><span class="av-progress__fill" style="width:72%"></span></span></div>`},
 {name:'Status', html:`<div class="av-stack" style="gap:16px">
  <div class="av-progress av-progress--amber"><div class="av-progress__head"><span>Rotation compliance</span><span class="av-progress__value">48%</span></div><span class="av-progress__track"><span class="av-progress__fill" style="width:48%"></span></span></div>
  <div class="av-progress av-progress--success"><div class="av-progress__head"><span>MFA enforced</span><span class="av-progress__value">96%</span></div><span class="av-progress__track"><span class="av-progress__fill" style="width:96%"></span></span></div>
</div>`},
 {name:'Indeterminate', html:`<div class="av-progress av-progress--ion av-progress--indeterminate"><div class="av-progress__head"><span>Scanning Production Demo Account</span></div><span class="av-progress__track"><span class="av-progress__fill"></span></span><span class="av-progress__helper">Reading IAM roles…</span></div>`},
 {name:'Error', html:`<div class="av-progress av-progress--error"><div class="av-progress__head"><span>Upload</span><span class="av-progress__value">31%</span></div><span class="av-progress__track"><span class="av-progress__fill" style="width:31%"></span></span><span class="av-progress__helper">Connection lost</span></div>`},
]},

{ id:'progress-indicator', label:'Progress indicator', desc:'Stepper for multi-step flows (Connect account). Done = Ion, current = Signal, upcoming = outline.',
css:`.av-steps{display:flex;flex-wrap:wrap;gap:8px;margin:0;padding:0;list-style:none}
.av-step{display:flex;align-items:center;gap:10px;flex:1 1 150px;font-size:13px;color:var(--av-text-helper)}
.av-step__dot{width:28px;height:28px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid var(--av-border-strong-02);font:600 12px var(--av-font-mono)}
.av-step__line{flex:1;min-width:16px;height:1px;background:var(--av-border-subtle-01)}
.av-step__text{display:flex;flex-direction:column;gap:2px}.av-step__desc{font-size:12px;color:var(--av-text-helper)}
.av-step--done{color:var(--av-text-primary)}.av-step--done .av-step__dot{border-color:transparent;background:var(--av-border-interactive);color:var(--av-text-inverse)}
.av-step--done .av-step__line{background:var(--av-border-interactive)}
.av-step--current{color:var(--av-text-primary);font-weight:500}.av-step--current .av-step__dot{border-color:transparent;background:var(--av-button-primary);color:var(--av-text-on-color)}
.av-step--invalid{color:var(--av-text-error)}.av-step--invalid .av-step__dot{border-color:var(--av-border-error);color:var(--av-text-error)}
.av-steps--vertical{flex-direction:column;gap:0}
.av-steps--vertical .av-step{flex:none;align-items:flex-start;position:relative;padding-bottom:20px}
.av-steps--vertical .av-step__line{position:absolute;left:14px;top:32px;bottom:4px;width:1px;height:auto;min-width:0}`,
variants:(() => { const s = (vert, desc, inv) => `<ol class="av-steps${vert ? ' av-steps--vertical' : ''}">${[['Connect cloud','Read-only role','done'],['Scan identities','~6 min','done'],['Review findings','293 open', inv ? 'invalid' : 'current'],['Set guardrails','Optional','']].map(([n,d,st],i,a) => `
  <li class="av-step${st ? ' av-step--' + st : ''}"${st === 'current' ? ' aria-current="step"' : ''}><span class="av-step__dot">${st === 'done' ? ic('check',12,3) : st === 'invalid' ? '!' : i + 1}</span>${desc ? `<span class="av-step__text">${n}<span class="av-step__desc">${d}</span></span>` : n}${i < a.length - 1 ? '<span class="av-step__line"></span>' : ''}</li>`).join('')}
</ol>`; return [
 {name:'Horizontal', html:s()}, {name:'Vertical', html:s(true,true)}, {name:'With descriptions', html:s(false,true)}, {name:'Invalid step', html:s(false,false,true)},
]; })()},

{ id:'radio-button', label:'Radio button', desc:'18px ring, 8px Ion dot. Radio cards for choosing a connect method.',
css:`.av-radio{display:inline-flex;align-items:center;gap:10px;min-height:32px;font-size:14px;color:var(--av-text-secondary);cursor:pointer}
.av-radio input{appearance:none;-webkit-appearance:none;margin:0;width:18px;height:18px;flex-shrink:0;border-radius:50%;border:1.5px solid var(--av-border-strong-02);display:grid;place-content:center;cursor:pointer;transition:border-color var(--av-duration-fast)}
.av-radio input::before{content:"";width:8px;height:8px;border-radius:50%;background:var(--av-border-interactive);transform:scale(0);transition:transform var(--av-duration-base) var(--av-ease-spring)}
.av-radio input:checked{border-color:var(--av-border-interactive)}.av-radio input:checked::before{transform:scale(1)}
.av-radio input:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px}
.av-radio:has(input:disabled){color:var(--av-text-disabled);cursor:not-allowed}.av-radio input:disabled{border-color:var(--av-border-subtle-02)}
.av-radio--invalid input{border-color:var(--av-border-error)}
.av-radio-group{display:flex;flex-direction:column;gap:4px}.av-radio-group--row{flex-direction:row;flex-wrap:wrap;gap:20px}
.av-radio-card{display:flex;align-items:flex-start;gap:12px;padding:14px 16px;border:1px solid var(--av-border-strong-01);border-radius:var(--av-radius-xl);background:var(--av-layer-01);cursor:pointer;transition:border-color var(--av-duration-fast),background var(--av-duration-fast)}
.av-radio-card:hover{border-color:var(--av-border-strong-02)}
.av-radio-card:has(input:checked){border-color:var(--av-border-interactive);background:var(--av-background-selected)}
.av-radio-card__body{flex:1;display:flex;flex-direction:column;gap:2px}.av-radio-card__title{font-size:14px;font-weight:500;color:var(--av-text-primary)}.av-radio-card__desc{font-size:12px;color:var(--av-text-helper)}`,
variants:[
 {name:'Group', html:`<fieldset class="av-fieldset"><legend>Scan frequency</legend><div class="av-radio-group"><label class="av-radio"><input type="radio" name="f1" checked>Every 6 hours</label><label class="av-radio"><input type="radio" name="f1">Daily</label><label class="av-radio"><input type="radio" name="f1">Weekly</label></div></fieldset>`},
 {name:'Horizontal', html:`<div class="av-radio-group av-radio-group--row"><label class="av-radio"><input type="radio" name="f2" checked>AWS</label><label class="av-radio"><input type="radio" name="f2">Azure</label><label class="av-radio"><input type="radio" name="f2">GCP</label></div>`},
 {name:'Disabled', html:`<div class="av-radio-group"><label class="av-radio"><input type="radio" name="f3" disabled checked>Read-only (required)</label><label class="av-radio"><input type="radio" name="f3" disabled>Read-write</label></div>`},
 {name:'Invalid', html:`<div class="av-stack" style="gap:4px"><div class="av-radio-group"><label class="av-radio av-radio--invalid"><input type="radio" name="f4">Owner</label><label class="av-radio av-radio--invalid"><input type="radio" name="f4">Analyst</label></div><span class="av-field__error">${ic('alert',12,2)}Choose a role</span></div>`},
 {name:'With helper', html:`<label class="av-radio" style="align-items:flex-start"><input type="radio" name="f5" checked style="margin-top:2px"><span class="av-checkbox__text">Quick connect<span class="av-checkbox__helper">CloudFormation stack · ~2 min</span></span></label>`},
 {name:'Radio cards', html:`<div class="av-stack" style="gap:8px;max-width:420px"><label class="av-radio-card"><span class="av-radio"><input type="radio" name="f6" checked></span><span class="av-radio-card__body"><span class="av-radio-card__title">Quick connect</span><span class="av-radio-card__desc">One-click CloudFormation stack · ~2 min</span></span></label><label class="av-radio-card"><span class="av-radio"><input type="radio" name="f6"></span><span class="av-radio-card__body"><span class="av-radio-card__title">Manual</span><span class="av-radio-card__desc">Create the IAM role yourself · ~5 min</span></span></label></div>`},
]},

{ id:'search', label:'Search', desc:'Pill search on the client picker; field search inside tables and lists. ⌘K hint in the top bar.',
css:`.av-search{position:relative;display:flex;align-items:center;width:100%;color:var(--av-icon-tertiary)}
.av-search>.av-icon{position:absolute;left:16px;pointer-events:none}
.av-search__input{width:100%;height:44px;padding:0 48px 0 44px;border-radius:var(--av-radius-pill);border:1px solid var(--av-tag-outline-border);background:transparent;color:var(--av-text-primary);font:400 14px var(--av-font-sans);outline:none;transition:border-color var(--av-duration-fast),box-shadow var(--av-duration-fast)}
.av-search__input::placeholder{color:var(--av-text-placeholder)}
.av-search__input:hover{border-color:var(--av-border-strong-02)}
.av-search__input:focus{border-color:var(--av-border-interactive);box-shadow:0 0 0 3px var(--av-focus-ring)}
.av-search__end{position:absolute;right:8px;display:flex;align-items:center;gap:4px}
.av-kbd{padding:2px 7px;border-radius:6px;border:1px solid var(--av-border-strong-01);font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-search--field .av-search__input{border-radius:var(--av-radius-lg);border-color:var(--av-border-strong-01);background:var(--av-field-01)}
.av-search--sm>.av-icon{left:12px}.av-search--sm .av-search__input{height:36px;padding-left:36px;font-size:13px}
.av-search--collapsed{width:auto}.av-search--collapsed .av-search__input{width:40px;padding:0;cursor:pointer}.av-search--collapsed>.av-icon{left:12px}`,
variants:[
 {name:'Pill (client picker)', html:`<div class="av-search" style="max-width:420px">${ic('search',18,2)}<input class="av-search__input" type="search" placeholder="Search clients" aria-label="Search clients"></div>`},
 {name:'Field', html:`<div class="av-search av-search--field" style="max-width:360px">${ic('search',16,2)}<input class="av-search__input" placeholder="Search identities, keys, roles"></div>`},
 {name:'With shortcut', html:`<div class="av-search av-search--field av-search--sm" style="max-width:280px">${ic('search',16,2)}<input class="av-search__input" placeholder="Search"><span class="av-search__end"><kbd class="av-kbd">⌘K</kbd></span></div>`},
 {name:'With value + clear', html:`<div class="av-search" style="max-width:360px">${ic('search',18,2)}<input class="av-search__input" value="tide"><span class="av-search__end"><button class="av-icon-btn av-icon-btn--ghost" aria-label="Clear">${ic('x',14,2)}</button></span></div>`},
 {name:'Collapsed', html:`<div class="av-search av-search--collapsed av-search--sm">${ic('search',16,2)}<input class="av-search__input" aria-label="Search"></div>`},
]},

{ id:'select', label:'Select', desc:'Native <select> styled as a field. Inline variant for compact toolbars.',
css:`.av-select{position:relative;display:flex;width:100%}
.av-select select{flex:1;appearance:none;-webkit-appearance:none;height:44px;padding:0 40px 0 14px;border-radius:var(--av-radius-lg);border:1px solid var(--av-border-strong-01);background:var(--av-field-01);color:var(--av-text-primary);font:400 14px var(--av-font-sans);outline:none;cursor:pointer}
.av-select select:hover{background:var(--av-field-hover-01)}
.av-select select:focus{border-color:var(--av-border-interactive);box-shadow:0 0 0 3px var(--av-focus-ring)}
.av-select select[aria-invalid="true"]{border-color:var(--av-border-error)}
.av-select select:disabled{border-style:dashed;background:transparent;color:var(--av-text-disabled);cursor:not-allowed}
.av-select__chev{position:absolute;right:14px;top:50%;margin-top:-7px;color:var(--av-icon-tertiary);pointer-events:none}
.av-select--sm{width:auto}.av-select--sm select{height:32px;padding:0 30px 0 10px;font-size:12px}.av-select--sm .av-select__chev{right:10px;margin-top:-6px}
.av-select--inline{width:auto}.av-select--inline select{height:32px;padding:0 28px 0 10px;border-color:transparent;background:transparent;font-size:13px;color:var(--av-text-tertiary)}
.av-select--inline select:hover{background:var(--av-layer-03);color:var(--av-text-primary)}`,
variants:(() => { const sel = (cls = '', opts = '<option>All environments</option><option>Production</option><option>Staging</option>', a = '') => `<span class="av-select ${cls}"><select${a}>${opts}</select>${ic('chevDown',14,2).replace('av-icon','av-icon av-select__chev')}</span>`; return [
 {name:'Default', html:`<div style="max-width:280px">${sel()}</div>`},
 {name:'With label', html:`<label class="av-field" style="max-width:280px"><span class="av-field__label">Region</span>${sel('','<option>us-east-1</option><option>eu-west-1</option>')}<span class="av-field__helper">Where the role lives.</span></label>`},
 {name:'Inline', html:sel('av-select--inline','<option>Sort: Severity</option><option>Sort: Newest</option>')},
 {name:'Invalid', html:`<label class="av-field" style="max-width:280px"><span class="av-field__label">Owner</span>${sel('','<option>Choose…</option>',' aria-invalid="true"')}<span class="av-field__error">${ic('alert',12,2)}Required</span></label>`},
 {name:'Disabled', html:`<div style="max-width:280px">${sel('','<option>Managed by policy</option>',' disabled')}</div>`},
]; })()},

{ id:'slider', label:'Slider', desc:'Gradient fill track with white thumb + Ion halo. Set --av-pct inline (or via JS on input) to paint the fill.',
css:`.av-slider{display:flex;flex-direction:column;gap:10px;width:100%;max-width:420px}
.av-slider__head{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--av-text-secondary)}
.av-slider__value{font:500 13px var(--av-font-mono);color:var(--av-text-primary)}
.av-slider input[type="range"]{--av-pct:50%;-webkit-appearance:none;appearance:none;width:100%;height:6px;margin:6px 0;border-radius:var(--av-radius-pill);background:linear-gradient(90deg,var(--av-gradient-start),var(--av-gradient-end)) 0/var(--av-pct) 100% no-repeat,var(--av-layer-04);outline:none;cursor:pointer}
.av-slider input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 0 0 4px var(--av-focus-ring),0 2px 6px rgba(0,0,0,.4)}
.av-slider input[type="range"]::-moz-range-thumb{width:18px;height:18px;border:0;border-radius:50%;background:#fff;box-shadow:0 0 0 4px var(--av-focus-ring),0 2px 6px rgba(0,0,0,.4)}
.av-slider input[type="range"]:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 4px var(--av-focus),0 2px 6px rgba(0,0,0,.4)}
.av-slider input[type="range"]:disabled{opacity:.4;cursor:not-allowed}
.av-slider__scale{display:flex;justify-content:space-between;font:10px var(--av-font-mono);letter-spacing:.08em;color:var(--av-text-label)}
.av-slider__row{display:flex;align-items:center;gap:12px}.av-slider__row input[type="range"]{flex:1}`,
variants:[
 {name:'Default', html:`<div class="av-slider"><div class="av-slider__head"><span>Alert threshold</span><span class="av-slider__value">65</span></div><input type="range" min="0" max="100" value="65" style="--av-pct:65%" oninput="this.style.setProperty('--av-pct',this.value+'%')"></div>`},
 {name:'With input', html:`<div class="av-slider"><span class="av-field__label">Key max age (days)</span><div class="av-slider__row"><input type="range" min="30" max="365" value="90" style="--av-pct:18%"><div class="av-number av-number--sm" style="width:96px"><input type="number" value="90" aria-label="Days"></div></div></div>`},
 {name:'With scale', html:`<div class="av-slider"><div class="av-slider__head"><span>Severity floor</span><span class="av-slider__value">HIGH</span></div><input type="range" min="0" max="3" value="2" style="--av-pct:66%"><div class="av-slider__scale"><span>LOW</span><span>MEDIUM</span><span>HIGH</span><span>CRITICAL</span></div></div>`},
 {name:'Disabled', html:`<div class="av-slider"><div class="av-slider__head"><span>Retention</span><span class="av-slider__value">30</span></div><input type="range" value="30" disabled style="--av-pct:30%"></div>`},
]},

{ id:'structured-list', label:'Structured list', desc:'Key / value rows for detail panels (identity details, account info).',
css:`.av-slist{display:flex;flex-direction:column;border-top:1px solid var(--av-border-subtle-00)}
.av-slist__row{display:grid;grid-template-columns:minmax(110px,1fr) minmax(0,2fr);gap:16px;align-items:center;min-height:48px;padding:12px 0;border-bottom:1px solid var(--av-border-subtle-00);font-size:13px}
.av-slist__k{color:var(--av-text-helper)}.av-slist__v{color:var(--av-text-primary);min-width:0;overflow-wrap:anywhere}
.av-slist__v--mono{font:12px var(--av-font-mono)}
.av-slist__row--head{min-height:36px;font:500 10px var(--av-font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--av-text-label)}
.av-slist__row--head .av-slist__v{color:inherit}
.av-slist--3 .av-slist__row{grid-template-columns:minmax(0,1.5fr) minmax(0,1fr) minmax(0,1fr)}
.av-slist--condensed .av-slist__row{min-height:36px;padding:6px 0}
.av-slist--selectable .av-slist__row{grid-template-columns:28px minmax(0,1.5fr) minmax(0,1fr);cursor:pointer}
.av-slist--selectable .av-slist__row:hover{background:var(--av-layer-hover-01)}
.av-slist--card{border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);padding:0 16px}
.av-slist--card .av-slist__row:last-child{border-bottom:0}
.av-slist__copy{display:flex;align-items:center;gap:6px}`,
variants:[
 {name:'Key / value', html:`<div class="av-slist"><div class="av-slist__row"><span class="av-slist__k">Provider</span><span class="av-slist__v">AWS</span></div><div class="av-slist__row"><span class="av-slist__k">Owner</span><span class="av-slist__v">Platform team</span></div><div class="av-slist__row"><span class="av-slist__k">Created</span><span class="av-slist__v">Mar 2024</span></div></div>`},
 {name:'With header', html:`<div class="av-slist av-slist--3"><div class="av-slist__row av-slist__row--head"><span>Policy</span><span>Type</span><span>Attached</span></div><div class="av-slist__row"><span class="av-slist__v">SecurityAudit</span><span class="av-slist__k">AWS managed</span><span class="av-slist__k">2y ago</span></div><div class="av-slist__row"><span class="av-slist__v">ci-deploy-inline</span><span class="av-slist__k">Inline</span><span class="av-slist__k">14d ago</span></div></div>`},
 {name:'Condensed', html:`<div class="av-slist av-slist--condensed"><div class="av-slist__row"><span class="av-slist__k">Region</span><span class="av-slist__v">us-east-1</span></div><div class="av-slist__row"><span class="av-slist__k">Resources</span><span class="av-slist__v">214</span></div></div>`},
 {name:'Selectable', html:`<div class="av-slist av-slist--selectable"><label class="av-slist__row"><span class="av-radio"><input type="radio" name="sl" checked></span><span class="av-slist__v">Production Demo Account</span><span class="av-slist__k">AWS</span></label><label class="av-slist__row"><span class="av-radio"><input type="radio" name="sl"></span><span class="av-slist__v">Northwind Commerce</span><span class="av-slist__k">GCP</span></label></div>`},
 {name:'In card', html:`<div class="av-slist av-slist--card"><div class="av-slist__row"><span class="av-slist__k">Status</span><span class="av-slist__v"><span class="av-tag av-tag--success"><span class="av-tag__dot"></span>Complete coverage</span></span></div><div class="av-slist__row"><span class="av-slist__k">Last scan</span><span class="av-slist__v">2 hours ago</span></div></div>`},
 {name:'Mono + copy', html:`<div class="av-slist"><div class="av-slist__row"><span class="av-slist__k">Account ID</span><span class="av-slist__v av-slist__copy"><span class="av-slist__v--mono">010545334631</span><button class="av-icon-btn av-icon-btn--ghost" aria-label="Copy">${ic('copy',14)}</button></span></div><div class="av-slist__row"><span class="av-slist__k">External ID</span><span class="av-slist__v av-slist__copy"><span class="av-slist__v--mono">av-7f2c9d</span><button class="av-icon-btn av-icon-btn--ghost" aria-label="Copy">${ic('copy',14)}</button></span></div></div>`},
]},

{ id:'tabs', label:'Tabs', desc:'Line tabs with Signal 2px indicator; pill tabs for in-card switching; vertical for settings.',
css:`.av-tabs{display:flex;gap:4px;border-bottom:1px solid var(--av-border-subtle-00);overflow-x:auto}
.av-tab{display:inline-flex;align-items:center;gap:8px;height:44px;padding:0 12px;margin-bottom:-1px;border:0;border-bottom:2px solid transparent;background:transparent;color:var(--av-text-helper);font:500 13px var(--av-font-sans);white-space:nowrap;cursor:pointer;transition:color var(--av-duration-fast),border-color var(--av-duration-fast)}
.av-tab:hover{color:var(--av-text-primary)}
.av-tab[aria-selected="true"]{color:var(--av-text-primary);border-bottom-color:var(--av-button-primary)}
.av-tab:focus-visible{outline:2px solid var(--av-focus);outline-offset:-2px}
.av-tab:disabled{color:var(--av-text-disabled);cursor:not-allowed}
.av-tab__count{padding:1px 7px;border-radius:var(--av-radius-pill);background:var(--av-tag-gray-bg);color:var(--av-tag-gray-text);font:11px var(--av-font-mono)}
.av-tabs--pill{display:inline-flex;gap:4px;padding:4px;border:1px solid var(--av-border-subtle-01);border-radius:12px;background:var(--av-layer-02)}
.av-tabs--pill .av-tab{height:32px;margin:0;border:0;border-radius:var(--av-radius-md)}
.av-tabs--pill .av-tab[aria-selected="true"]{background:var(--av-layer-05);box-shadow:inset 0 0 0 1px var(--av-border-subtle-00)}
.av-tabs--vertical{flex-direction:column;gap:2px;width:min(220px,100%);border:0}
.av-tabs--vertical .av-tab{height:40px;margin:0;border:0;border-radius:var(--av-radius-lg);justify-content:flex-start}
.av-tabs--vertical .av-tab[aria-selected="true"]{background:var(--av-layer-03)}
.av-tab{flex-shrink:0;white-space:nowrap}.av-tab[hidden]{display:none!important}
.av-tabs:not(.av-tabs--vertical){scrollbar-width:none}.av-tabs:not(.av-tabs--vertical)::-webkit-scrollbar{display:none}
.av-tabs__more{position:relative;display:flex;margin-left:auto;flex-shrink:0}.av-tabs__more[hidden]{display:none}
.av-tabs__more-btn{width:var(--av-touch);justify-content:center;padding:0}
.av-tabs__menu{position:absolute;top:calc(100% + 6px);right:0;z-index:var(--av-z-dropdown,50);min-width:200px;max-width:min(280px,90vw);display:flex;flex-direction:column;padding:6px;border:1px solid var(--av-border-subtle-01);border-radius:var(--av-radius-xl,14px);background:var(--av-layer-02);box-shadow:var(--av-shadow-dropdown,0 16px 40px rgba(0,0,0,.4))}
.av-tabs__menu[hidden]{display:none}
.av-tabs__menu .av-menu__item{display:flex;align-items:center;gap:8px;min-height:var(--av-touch);padding:0 12px;border:0;border-radius:var(--av-radius-md);background:transparent;color:var(--av-text-secondary);font:inherit;font-size:13px;text-align:left;cursor:pointer}
.av-tabs__menu .av-menu__item:hover{background:var(--av-layer-hover-01);color:var(--av-text-primary)}`,
variants:[
 {name:'Line', html:`<div class="av-tabs" role="tablist"><button class="av-tab" role="tab" aria-selected="true">Summary</button><button class="av-tab" role="tab">Permissions</button><button class="av-tab" role="tab">Activity</button><button class="av-tab" role="tab" disabled>Policies</button></div>`},
 {name:'With counts', html:`<div class="av-tabs" role="tablist"><button class="av-tab" role="tab" aria-selected="true">Open<span class="av-tab__count">293</span></button><button class="av-tab" role="tab">Resolved<span class="av-tab__count">1,204</span></button><button class="av-tab" role="tab">Ignored<span class="av-tab__count">12</span></button></div>`},
 {name:'Pill', html:`<div class="av-tabs av-tabs--pill" role="tablist"><button class="av-tab" role="tab" aria-selected="true">Trend</button><button class="av-tab" role="tab">By severity</button><button class="av-tab" role="tab">By provider</button></div>`},
 {name:'Vertical', html:`<div class="av-tabs av-tabs--vertical" role="tablist"><button class="av-tab" role="tab" aria-selected="true">General</button><button class="av-tab" role="tab">Members</button><button class="av-tab" role="tab">Billing</button><button class="av-tab" role="tab">Danger zone</button></div>`},
 {name:'Overflow → more menu', note:'Tabs that don’t fit collapse into a ⋯ menu (priority+). The selected tab always stays visible. Runtime: AvCharts.hydrate() in av-charts.js.', html:`<div style="max-width:340px;width:100%"><div class="av-tabs" role="tablist"><button class="av-tab" role="tab" aria-selected="true">Summary</button><button class="av-tab" role="tab">Permissions</button><button class="av-tab" role="tab">Activity</button><button class="av-tab" role="tab">Policies</button><button class="av-tab" role="tab">Access keys</button><button class="av-tab" role="tab">Settings</button></div></div>`},
]},

{ id:'tag', label:'Tag', desc:'Severity pills with dot, mono outline tags (providers, roles), count badges, delta chips, filter chips.',
css:`.av-tag{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 10px;border:0;border-radius:var(--av-radius-pill);background:var(--av-tag-gray-bg);color:var(--av-tag-gray-text);font:500 12px var(--av-font-sans);white-space:nowrap;vertical-align:middle}
.av-tag__dot{width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.av-tag--critical{background:var(--av-support-critical-bg);color:var(--av-support-critical)}
.av-tag--high{background:var(--av-support-high-bg);color:var(--av-support-high)}
.av-tag--medium{background:var(--av-support-medium-bg);color:var(--av-support-medium)}
.av-tag--low{background:var(--av-support-low-bg);color:var(--av-support-low)}
.av-tag--success{background:var(--av-tag-green-bg);color:var(--av-tag-green-text)}
.av-tag--mono{height:auto;padding:3px 7px;border:1px solid var(--av-tag-outline-border);border-radius:5px;background:transparent;color:var(--av-tag-outline-text);font:500 10px/1.3 var(--av-font-mono);letter-spacing:.04em}
.av-tag--role{padding:3px 8px;font-size:11px;letter-spacing:.08em;border-color:var(--av-border-strong-02);color:var(--av-text-muted-intro)}
.av-tag--aws{background:var(--av-tag-amber-bg);color:var(--av-tag-amber-text)}
.av-tag--gcp{background:var(--av-tag-ion-bg);color:var(--av-tag-ion-text)}
.av-tag--azure{background:var(--av-tag-azure-bg);color:var(--av-tag-azure-text)}
.av-tag--count{height:20px;padding:0 7px;font:500 11px var(--av-font-mono);background:var(--av-tag-signal-bg);color:var(--av-tag-signal-text)}
.av-tag--count-neutral{height:20px;padding:0 7px;font:500 11px var(--av-font-mono)}
.av-tag--delta{height:24px;padding:0 8px;gap:4px;background:var(--av-support-low-bg);color:var(--av-text-info)}
.av-tag--delta-up{background:var(--av-support-high-bg);color:var(--av-support-high)}
.av-tag--filter{height:28px;padding:0 12px;border:1px solid var(--av-border-subtle-01);background:var(--av-layer-03);color:var(--av-text-secondary);cursor:pointer}
.av-tag--filter[aria-pressed="true"]{border-color:var(--av-border-inverse);background:var(--av-button-selected);color:var(--av-text-inverse)}
.av-tag__remove{width:18px;height:18px;margin-right:-6px;padding:0;border:0;border-radius:50%;background:var(--av-layer-05);color:var(--av-text-tertiary);display:inline-flex;align-items:center;justify-content:center;cursor:pointer}
.av-status{display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--av-text-secondary)}
.av-status__dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;background:var(--av-support-neutral)}
.av-status--ring .av-status__dot{width:8px;height:8px;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 18%,transparent)}`,
variants:[
 {name:'Severity', html:`<div class="av-row" style="gap:8px"><span class="av-tag av-tag--critical"><span class="av-tag__dot"></span>Critical</span><span class="av-tag av-tag--high"><span class="av-tag__dot"></span>High</span><span class="av-tag av-tag--medium"><span class="av-tag__dot"></span>Medium</span><span class="av-tag av-tag--low"><span class="av-tag__dot"></span>Low</span><span class="av-tag"><span class="av-tag__dot"></span>Info</span></div>`},
 {name:'Provider (mono)', html:`<div class="av-row" style="gap:6px"><span class="av-tag av-tag--mono">AWS</span><span class="av-tag av-tag--mono">AZURE</span><span class="av-tag av-tag--mono">GCP</span><span class="av-tag av-tag--aws">AWS</span><span class="av-tag av-tag--azure">Azure</span><span class="av-tag av-tag--gcp">GCP</span></div>`},
 {name:'Role', html:`<div class="av-row" style="gap:8px"><span class="av-tag av-tag--mono av-tag--role">OWNER</span><span class="av-tag av-tag--mono av-tag--role">ANALYST</span><span class="av-tag av-tag--mono av-tag--role">VIEWER</span></div>`},
 {name:'Count badges', html:`<div class="av-row" style="gap:8px"><span class="av-tag av-tag--count">293</span><span class="av-tag av-tag--count-neutral">3 new</span><span class="av-tag av-tag--low av-tag--count-neutral">NEW</span></div>`},
 {name:'Delta chips', html:`<div class="av-row" style="gap:8px"><span class="av-tag av-tag--delta">${ic('up',12,2.2)}6 this week</span><span class="av-tag av-tag--delta">${ic('down',12,2.2)}12 fewer</span><span class="av-tag av-tag--delta av-tag--delta-up">${ic('up',12,2.2)}3 new</span></div>`},
 {name:'Status dot', html:`<div class="av-row" style="gap:20px"><span class="av-status" style="color:var(--av-posture-poor)"><span class="av-status__dot" style="background:currentColor"></span><span style="color:var(--av-text-meta)">293 open · scanned 2h ago</span></span><span class="av-status av-status--ring" style="color:var(--av-support-success)"><span class="av-status__dot" style="background:currentColor"></span><span style="color:var(--av-text-secondary)">Healthy</span></span><span class="av-status av-status--ring" style="color:var(--av-support-low)"><span class="av-status__dot" style="background:currentColor"></span><span style="color:var(--av-text-secondary)">Scanning</span></span></div>`},
 {name:'Filter chips', html:`<div class="av-row" style="gap:6px"><button class="av-tag av-tag--filter" aria-pressed="true">Critical</button><button class="av-tag av-tag--filter" aria-pressed="false">High</button><span class="av-tag av-tag--filter">env: staging<button class="av-tag__remove" aria-label="Remove">${ic('x',10,3)}</button></span></div>`},
]},

{ id:'text-area', label:'Text area', desc:'Same field chrome as Text input, min-height 96px, vertical resize, optional counter.',
css:`.av-textarea{display:block;width:100%;min-height:96px;padding:12px 14px;border-radius:var(--av-radius-lg);border:1px solid var(--av-border-strong-01);background:var(--av-field-01);color:var(--av-text-primary);font:400 14px/1.5 var(--av-font-sans);resize:vertical;outline:none;transition:border-color var(--av-duration-fast),box-shadow var(--av-duration-fast)}
.av-textarea::placeholder{color:var(--av-text-placeholder)}
.av-textarea:focus{border-color:var(--av-border-interactive);box-shadow:0 0 0 3px var(--av-focus-ring)}
.av-textarea[aria-invalid="true"]{border-color:var(--av-border-error)}
.av-textarea:disabled{border-style:dashed;background:transparent;color:var(--av-text-disabled);resize:none}
.av-textarea[readonly]{background:transparent;border-color:var(--av-border-subtle-01)}`,
variants:[
 {name:'Default', html:`<label class="av-field" style="max-width:440px"><span class="av-field__label">Approval note</span><textarea class="av-textarea" placeholder="Why does this identity need write access?"></textarea></label>`},
 {name:'With counter', html:`<label class="av-field" style="max-width:440px"><span class="av-field__label">Description</span><textarea class="av-textarea" maxlength="200">Read-only role used by the nightly export job.</textarea><span class="av-field__counter">46 / 200</span></label>`},
 {name:'Invalid', html:`<label class="av-field" style="max-width:440px"><span class="av-field__label">Justification</span><textarea class="av-textarea" aria-invalid="true"></textarea><span class="av-field__error">${ic('alert',12,2)}Add a reason before requesting access</span></label>`},
 {name:'Disabled', html:`<textarea class="av-textarea" style="max-width:440px" disabled>Locked by policy</textarea>`},
 {name:'Read-only', html:`<textarea class="av-textarea av-input--mono" style="max-width:440px" readonly>{ "Effect": "Allow", "Action": "sts:AssumeRole" }</textarea>`},
]},

{ id:'text-input', label:'Text input', desc:'44px, 10px radius, field-01 fill. Focus = Ion border + 3px halo. Mono modifier for IDs/ARNs.',
css:`.av-input{display:block;width:100%;height:44px;padding:0 14px;border-radius:var(--av-radius-lg);border:1px solid var(--av-border-strong-01);background:var(--av-field-01);color:var(--av-text-primary);font:400 14px var(--av-font-sans);outline:none;transition:border-color var(--av-duration-fast),box-shadow var(--av-duration-fast),background var(--av-duration-fast)}
.av-input::placeholder{color:var(--av-text-placeholder)}
.av-input:hover{background:var(--av-field-hover-01)}
.av-input:focus,.av-input.is-focus{border-color:var(--av-border-interactive);box-shadow:0 0 0 3px var(--av-focus-ring)}
.av-input[aria-invalid="true"]{border-color:var(--av-border-error);background:color-mix(in srgb,var(--av-support-critical) 5%,var(--av-field-01))}
.av-input[aria-invalid="true"]:focus{box-shadow:0 0 0 3px var(--av-focus-error-ring)}
.av-input:disabled{border-style:dashed;background:transparent;color:var(--av-text-disabled);cursor:not-allowed}
.av-input[readonly]{background:transparent;border-color:var(--av-border-subtle-01)}
.av-input--mono{font-family:var(--av-font-mono);font-size:13px}
.av-input--sm{height:36px;font-size:13px}.av-input--lg{height:52px;font-size:16px}`,
variants:[
 {name:'Default', html:`<label class="av-field" style="max-width:360px"><span class="av-field__label">Client name</span><input class="av-input" placeholder="e.g. Northwind Health"><span class="av-field__helper">Shown on reports and invoices.</span></label>`},
 {name:'Focused', note:'.is-focus mirrors :focus for docs/screenshots.', html:`<input class="av-input av-input--mono is-focus" value="aws-prod-0921" style="max-width:360px">`},
 {name:'Invalid', html:`<label class="av-field" style="max-width:360px"><span class="av-field__label">Email</span><input class="av-input" value="zalak@" aria-invalid="true"><span class="av-field__error">${ic('alert',12,2)}Enter a full email address</span></label>`},
 {name:'Disabled', html:`<input class="av-input" value="Managed by SSO" disabled style="max-width:360px">`},
 {name:'Read-only', html:`<input class="av-input av-input--mono" value="av-7f2c9d" readonly style="max-width:360px">`},
 {name:'Sizes', html:`<div class="av-stack" style="max-width:360px"><input class="av-input av-input--sm" placeholder="Small · 36"><input class="av-input" placeholder="Medium · 44"><input class="av-input av-input--lg" placeholder="Large · 52"></div>`},
 {name:'With icon', html:`<span class="av-input-group av-input-group--start" style="max-width:360px">${ic('mail',16).replace('av-icon','av-icon av-input-group__icon')}<input class="av-input" placeholder="name@company.com"></span>`},
]},

{ id:'tile', label:'Tile', desc:'Base card (16px radius, layer-01, hairline). Clickable lifts 2px. Selectable shows an Ion ring and check. Glow modifiers for emphasis.',
css:`.av-tile{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);color:var(--av-text-primary);text-align:left;font:inherit}
.av-tile__title{font-size:16px;font-weight:600;letter-spacing:-0.01em}
.av-tile__text{font-size:13px;line-height:1.5;color:var(--av-text-tertiary)}
.av-tile--clickable{cursor:pointer;transition:border-color var(--av-duration-base),transform var(--av-duration-base)}
.av-tile--clickable:hover{border-color:var(--av-border-strong-02);transform:translateY(-2px)}
.av-tile--clickable:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px}
.av-tile--selectable{cursor:pointer}
.av-tile--selectable[aria-pressed="true"]{border-color:var(--av-border-interactive);background:var(--av-background-selected)}
.av-tile__check{position:absolute;top:14px;right:14px;width:20px;height:20px;border-radius:50%;border:1.5px solid var(--av-border-strong-02);display:flex;align-items:center;justify-content:center;color:transparent}
.av-tile--selectable[aria-pressed="true"] .av-tile__check{border-color:transparent;background:var(--av-border-interactive);color:var(--av-text-inverse)}
.av-tile--glow-signal{background:radial-gradient(70% 90% at 100% 0%,var(--av-background-glow-signal),transparent 60%),var(--av-layer-01)}
.av-tile--glow-ion{background:radial-gradient(70% 90% at 100% 0%,var(--av-background-glow-ion),transparent 60%),var(--av-layer-01)}`,
variants:[
 {name:'Base + glows', html:`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:16px">
  <div class="av-tile"><span class="av-eyebrow">Default</span><span class="av-tile__title">Identity coverage</span><span class="av-tile__text">Machine identities with an owner and rotation policy.</span></div>
  <div class="av-tile av-tile--glow-signal"><span class="av-eyebrow" style="color:var(--av-text-error)">Attention</span><span class="av-tile__title">3 keys older than 365 days</span><span class="av-tile__text">Rotate before the audit window closes.</span></div>
  <div class="av-tile av-tile--glow-ion"><span class="av-eyebrow" style="color:var(--av-text-info)">Positive</span><span class="av-tile__title">Posture up 6</span><span class="av-tile__text">Best week this quarter.</span></div>
</div>`},
 {name:'Clickable', html:`<button class="av-tile av-tile--clickable" style="max-width:320px"><span class="av-tile__title">Northwind Health</span><span class="av-tile__text">4 clouds · 1,284 identities · last scan 2h ago</span><span class="av-link av-link--standalone" style="font-size:13px">Open client →</span></button>`},
 {name:'Selectable', html:`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:12px"><button class="av-tile av-tile--selectable" aria-pressed="true"><span class="av-tile__check">${ic('check',12,3)}</span><img src="assets/logo-aws-dark.svg" alt="" style="height:22px;align-self:flex-start"><span class="av-tile__title">AWS</span><span class="av-tile__text">IAM role · ~2 min</span></button><button class="av-tile av-tile--selectable" aria-pressed="false"><span class="av-tile__check">${ic('check',12,3)}</span><img src="assets/logo-azure.svg" alt="" style="height:22px;align-self:flex-start"><span class="av-tile__title">Azure</span><span class="av-tile__text">Entra ID app · ~5 min</span></button></div>`},
]},

{ id:'toggle', label:'Toggle', desc:'36×20 track; Ion when on. Use for instant-apply settings.',
css:`.av-toggle{display:inline-flex;align-items:center;gap:12px;font-size:14px;color:var(--av-text-secondary);cursor:pointer}
.av-toggle input{appearance:none;-webkit-appearance:none;position:relative;flex-shrink:0;margin:0;width:36px;height:20px;border-radius:var(--av-radius-pill);background:var(--av-toggle-off);cursor:pointer;transition:background var(--av-duration-base)}
.av-toggle input::before{content:"";position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;background:var(--av-toggle-thumb);transition:transform var(--av-duration-base) var(--av-ease-standard)}
.av-toggle input:checked{background:var(--av-support-low)}.av-toggle input:checked::before{transform:translateX(16px)}
.av-toggle input:focus-visible{outline:2px solid var(--av-focus);outline-offset:2px}
.av-toggle:has(input:disabled){opacity:.45;cursor:not-allowed}
.av-toggle--sm input{width:28px;height:16px}.av-toggle--sm input::before{width:12px;height:12px}.av-toggle--sm input:checked::before{transform:translateX(12px)}
.av-toggle__state{font:11px var(--av-font-mono);letter-spacing:.08em;color:var(--av-text-helper);min-width:24px}
.av-toggle--row{display:flex;justify-content:space-between;width:100%;padding:14px 0;border-bottom:1px solid var(--av-border-subtle-00)}`,
variants:[
 {name:'Default', html:`<div class="av-stack"><label class="av-toggle"><input type="checkbox" role="switch" checked>Auto-remediate</label><label class="av-toggle"><input type="checkbox" role="switch">Slack alerts</label></div>`},
 {name:'Small + state', html:`<label class="av-toggle av-toggle--sm"><input type="checkbox" role="switch" checked><span class="av-toggle__state">ON</span></label>`},
 {name:'Settings row', html:`<div style="max-width:420px"><label class="av-toggle av-toggle--row"><span class="av-setting__k"><span class="av-setting__t" style="color:var(--av-text-primary)">Weekly digest</span><span class="av-setting__d">Every Monday 09:00</span></span><input type="checkbox" role="switch" checked></label></div>`},
 {name:'Disabled', html:`<label class="av-toggle"><input type="checkbox" role="switch" checked disabled>Required by org policy</label>`},
]},

{ id:'toggletip', label:'Toggletip', desc:'Click-to-open info bubble next to labels. Holds links (tooltips cannot).',
css:`.av-toggletip{position:relative;display:inline-flex;flex-direction:column;align-items:flex-start;gap:8px}
.av-toggletip__btn{width:20px;height:20px;padding:0;border-radius:50%;border:1px solid var(--av-border-strong-02);background:transparent;color:var(--av-text-tertiary);font:600 11px var(--av-font-mono);cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
.av-toggletip__btn:hover,.av-toggletip__btn[aria-expanded="true"]{border-color:var(--av-border-inverse);color:var(--av-text-primary)}
.av-toggletip__bubble{width:min(240px,100%);padding:12px 14px;border-radius:12px;background:var(--av-layer-01);border:1px solid var(--av-border-subtle-01);box-shadow:var(--av-shadow-popover);font-size:13px;line-height:1.5;color:var(--av-text-tertiary);display:flex;flex-direction:column;gap:8px;animation:av-ctx-in .32s var(--av-ease-standard)}`,
variants:[
 {name:'Closed', html:`<span class="av-row" style="gap:6px;font-size:13px;color:var(--av-text-secondary)">Posture score<button class="av-toggletip__btn" aria-expanded="false" aria-label="About posture score">i</button></span>`},
 {name:'Open', html:`<div class="av-toggletip"><button class="av-toggletip__btn" aria-expanded="true" aria-label="Info">i</button><div class="av-toggletip__bubble" role="status">0–64 poor · 65–79 fair · 80+ good.</div></div>`},
 {name:'With link', html:`<div class="av-toggletip"><button class="av-toggletip__btn" aria-expanded="true">i</button><div class="av-toggletip__bubble">External ID stops confused-deputy attacks.<a class="av-link av-link--sm" href="#">Learn more</a></div></div>`},
 {name:'In label', html:`<label class="av-field" style="max-width:320px"><span class="av-field__label" style="justify-content:flex-start;align-items:center">External ID<button type="button" class="av-toggletip__btn" aria-label="What is this?">i</button></span><input class="av-input av-input--mono" value="av-7f2c9d" readonly></label>`},
]},

{ id:'tooltip', label:'Tooltip', desc:'Inverse bubble, 12px/500, 8px radius. Hover/focus only — no interactive content.',
css:`.av-tooltip{position:relative;display:inline-block;padding:7px 10px;border-radius:var(--av-radius-md);background:var(--av-background-inverse);color:var(--av-text-inverse);font:500 12px var(--av-font-sans);white-space:nowrap}
.av-tooltip::after{content:"";position:absolute;width:8px;height:8px;background:inherit;transform:rotate(45deg)}
.av-tooltip--top::after{left:50%;bottom:-4px;margin-left:-4px}.av-tooltip--bottom::after{left:50%;top:-4px;margin-left:-4px}
.av-tooltip--right::after{left:-4px;top:50%;margin-top:-4px}.av-tooltip--left::after{right:-4px;top:50%;margin-top:-4px}
.av-tip{position:relative;display:inline-flex}
.av-tip .av-tooltip{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%) translateY(4px);opacity:0;pointer-events:none;transition:opacity var(--av-duration-fast),transform var(--av-duration-fast);z-index:var(--av-z-dropdown)}
.av-tip:hover .av-tooltip,.av-tip:focus-within .av-tooltip{opacity:1;transform:translateX(-50%)}
.av-definition{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline dotted;text-underline-offset:4px;text-decoration-color:var(--av-text-helper);cursor:help}`,
variants:[
 {name:'Top', html:`<span class="av-tooltip av-tooltip--top" role="tooltip">Last rotated 412 days ago</span>`},
 {name:'Bottom', html:`<span class="av-tooltip av-tooltip--bottom" role="tooltip">Copy ARN</span>`},
 {name:'Right', html:`<span class="av-tooltip av-tooltip--right" role="tooltip">Collapse sidebar</span>`},
 {name:'Hover (live)', note:'Hover or tab to the button.', html:`<div style="padding-top:44px"><span class="av-tip"><button class="av-icon-btn" aria-describedby="tt1">${ic('copy',16)}</button><span class="av-tooltip av-tooltip--top" id="tt1" role="tooltip">Copy account ID</span></span></div>`},
 {name:'Definition', html:`<div style="padding-top:44px;font-size:14px;color:var(--av-text-tertiary)">Fix the <span class="av-tip"><button class="av-definition">blast radius</button><span class="av-tooltip av-tooltip--top" role="tooltip">Resources reachable from this identity</span></span> first.</div>`},
]},
];

return { ICONS, ic, BASE_CSS, COMPONENTS };
})();
const P = (() => {
const { ic } = C; const { PRIMITIVES, TYPE_SCALE, BASE_TOKENS } = T;
// Avistar Dashboard — foundations + dashboard patterns

const spark = (arr, w = 72, h = 24) => { const mx = Math.max(...arr), mn = Math.min(...arr), r = mx - mn || 1; return arr.map((v, i) => (i ? 'L' : 'M') + (2 + i * ((w - 4) / (arr.length - 1))).toFixed(1) + ' ' + (h - 3 - (v - mn) / r * (h - 6)).toFixed(1)).join(' '); };
const sw = (n, hex, t) => `<div class="avd-swatch"><span class="avd-swatch__chip" style="background:${hex}"></span><span class="avd-swatch__n">${n}</span><span class="avd-swatch__v">${t || hex}</span></div>`;

const DOC_CSS = `/* docs-only helpers (not needed in product) */
.avd-swatches{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,112px),1fr));gap:10px;width:100%}
.avd-swatch{display:flex;flex-direction:column;gap:3px;font-size:12px}
.avd-swatch__chip{height:56px;border-radius:10px;border:1px solid var(--av-border-subtle-00);margin-bottom:6px}
.avd-swatch__n{font-weight:500;color:var(--av-text-primary)}.avd-swatch__v{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.avd-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,96px),1fr));gap:10px;width:100%}
.avd-cell{display:flex;flex-direction:column;align-items:center;gap:10px;padding:16px 8px 12px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-xl);background:var(--av-layer-01);color:var(--av-icon-primary)}
.avd-cell span{font:10.5px var(--av-font-mono);color:var(--av-text-helper);text-align:center}
.avd-cell img{width:32px;height:32px;object-fit:contain}
.avd-bar{display:grid;grid-template-columns:110px 56px minmax(0,1fr);gap:16px;align-items:center;font:12px var(--av-font-mono);color:var(--av-text-helper)}
.avd-bar b{font-weight:500;color:var(--av-text-primary)}.avd-bar i{display:block;height:12px;border-radius:3px;background:var(--av-gradient-brand)}
.avd-box{display:flex;flex-direction:column;justify-content:flex-end;gap:3px;height:110px;padding:14px;border-radius:14px;border:1px solid var(--av-border-subtle-01);background:var(--av-layer-01);font-size:13px;font-weight:600}
.avd-box span{font:10.5px var(--av-font-mono);font-weight:400;color:var(--av-text-helper)}
.avd-measure{position:relative;outline:1px dashed color-mix(in srgb,var(--av-support-low) 60%,transparent);background:color-mix(in srgb,var(--av-support-low) 8%,transparent)}
.avd-label{position:absolute;font:500 10px var(--av-font-mono);letter-spacing:.06em;color:var(--av-text-info);background:var(--av-background);padding:1px 4px;border-radius:3px}
.avd-principle{display:flex;flex-direction:column;gap:6px;padding:18px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01)}
.avd-principle b{font-size:15px}.avd-principle span{font-size:13px;line-height:1.5;color:var(--av-text-tertiary)}
`;

const typeCSS = TYPE_SCALE.map(t => `.av-type-${t[0]}{font-family:var(--av-font-${t[6]});font-size:var(--av-type-${t[0]}-size);font-weight:var(--av-type-${t[0]}-weight);letter-spacing:var(--av-type-${t[0]}-tracking);line-height:var(--av-type-${t[0]}-leading)${t[6] === 'mono' && t[0] === 'label' ? ';text-transform:uppercase' : ''}${['kpi','score'].includes(t[0]) ? ';font-variant-numeric:tabular-nums' : ''}}`).join('\n');
const LINE = ['plus','x','check','chevDown','chevRight','arrow','up','down','search','bell','download','upload','calendar','play','ext','list','grid','copy','report','refresh','dots','logout','mail','filter','gear','eye','info','alert','file','sun','moon','collapse','key','lock','shield','cloud','trash','edit','link','spark'];
const DUO = ['overview','identity','clients','members','cloud','server','network','monitor','key','lock','shield','fingerprint','scan','threat','alert','bulletin','settings'];
const MASCOTS = ['magnifier','shield','key','chip','clipboard','bucket','idcard','lock'];


const RESPONSIVE_CSS = `/* ── Responsive layer · fluid, container-driven (320px → 2560px) ── */
.av-root{container:av-root/inline-size}
.av-root img{max-width:100%}.av-root img:not([height]):not([style*="height"]){height:auto}
.av-media{position:relative;width:100%;aspect-ratio:var(--av-ratio,16/9);overflow:hidden;border-radius:var(--av-radius-lg);background:var(--av-layer-03)}
.av-media>img,.av-media>video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.av-media--square{--av-ratio:1/1}.av-media--4x3{--av-ratio:4/3}.av-media--21x9{--av-ratio:21/9}
/* touch targets: visual size unchanged, hit area ≥ 44×44 */
.av-btn--sm,.av-icon-btn--ghost,.av-icon-btn--arrow,.av-page,.av-tag--filter,.av-tag__remove,.av-switcher--sm button,.av-toggletip__btn,.av-breadcrumb__more,.av-activity__cta,.av-sev-chip,.av-tab,.av-period button{position:relative}
.av-btn--sm::after,.av-icon-btn--ghost::after,.av-icon-btn--arrow::after,.av-page::after,.av-tag--filter::after,.av-tag__remove::after,.av-switcher--sm button::after,.av-toggletip__btn::after,.av-breadcrumb__more::after,.av-activity__cta::after,.av-sev-chip::after{content:"";position:absolute;left:50%;top:50%;width:max(100%,var(--av-touch));height:max(100%,var(--av-touch));transform:translate(-50%,-50%)}
.av-checkbox,.av-radio,.av-toggle{min-height:var(--av-touch)}
.av-nav-item,.av-sidebar__head,.av-sidebar__action{flex-shrink:0}.av-nav-item{min-height:var(--av-touch)}
@media (pointer:coarse){.av-btn,.av-input,.av-select select,.av-dropdown__trigger,.av-search__input,.av-switcher button,.av-menu__item,.av-nav-item,.av-sidebar__action,.av-period button,.av-calendar__day{min-height:var(--av-touch)}.av-icon-btn{min-width:var(--av-touch);min-height:var(--av-touch)}}
/* fluid rhythm */
.av-main{padding:clamp(1.25rem,4vw,2rem) var(--av-gutter) clamp(3rem,8vw,5rem);gap:var(--av-section-gap)}
.av-topbar{flex-wrap:wrap;height:auto;min-height:var(--av-header-h);padding:8px var(--av-gutter)}
.av-topbar>nav{flex:0 1 auto;min-width:0}
.av-card,.av-tile,.av-kpi,.av-stat,.av-fix-card,.av-chart-card{padding:var(--av-card-pad)}
.av-card--flush{padding:0}
.av-score-card{padding:clamp(1rem,3vw,1.5rem);gap:clamp(1rem,3vw,1.5rem)}
.av-modal__head,.av-modal__body,.av-modal__foot,.av-sheet__head,.av-sheet__body,.av-sheet__foot{padding-inline:var(--av-card-pad)}
.av-empty-card{padding:clamp(1.25rem,5vw,3.5rem);gap:clamp(1rem,4vw,2rem)}
.av-empty-card__img{width:min(180px,100%);height:auto;aspect-ratio:1}
.av-story__media{width:clamp(56px,14vw,72px)}
/* reflow: flex-wrap rows instead of fixed grids */
.av-breadcrumb--context{max-width:100%;min-width:0;overflow:hidden}.av-breadcrumb--context li{flex-shrink:0;white-space:nowrap}.av-breadcrumb--context li:has([aria-current]){flex-shrink:1;min-width:0;overflow:hidden}.av-breadcrumb--context li:has([aria-current])>span{display:block;min-width:0;overflow:hidden;text-overflow:ellipsis}.av-breadcrumb__sep,.av-breadcrumb__chev{flex-shrink:0}
.av-setting{grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:clamp(.75rem,3vw,1.5rem)}
.av-fix{display:flex;flex-wrap:wrap;align-items:center;gap:8px 16px}.av-fix__body{flex:1 1 220px}
.av-acct{display:flex;flex-wrap:wrap;align-items:center;gap:12px 16px}.av-acct__id{flex:2 1 220px}.av-acct__score{flex:1 1 140px}.av-acct__status{flex:1 1 120px}
.av-org-row{flex-wrap:wrap}.av-org-row__text{flex:1 1 160px}.av-org-row__actions{margin-left:auto}
.av-client-card__name{white-space:normal}
.av-bigstat{flex:1 1 160px}
.av-pagination{justify-content:center}.av-pagination>span{flex:1 1 100%;text-align:center}
.av-slist__row{grid-template-columns:repeat(auto-fit,minmax(min(100%,120px),1fr))}
.av-slist--3 .av-slist__row,.av-slist--selectable .av-slist__row{grid-template-columns:repeat(auto-fit,minmax(min(100%,110px),1fr))}
.av-table-wrap,.av-graph-scroll{max-width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}
/* mobile drawer navigation */
.av-mobilebar{display:none;position:sticky;top:0;z-index:var(--av-z-header);align-items:center;gap:8px;min-height:56px;padding:6px var(--av-gutter);border-bottom:1px solid var(--av-border-subtle-00);background:var(--av-background-header);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}
.av-mobilebar__brand{display:flex;align-items:center;gap:8px;flex:1;min-width:0}
.av-sidebar--drawer{position:fixed;top:0;left:0;bottom:0;width:var(--av-drawer-w);height:100dvh;z-index:var(--av-z-modal);transform:translateX(-100%);transition:transform var(--av-duration-slow) var(--av-ease-standard)}
.av-sidebar--drawer[data-open="true"]{transform:none;box-shadow:var(--av-shadow-sheet)}
.av-drawer-scrim{position:fixed;inset:0;z-index:calc(var(--av-z-modal) - 1);background:var(--av-overlay-sheet)}
.av-demo-stage .av-sidebar--drawer,.av-demo-stage .av-drawer-scrim{position:absolute;height:auto}
@container av-root (max-width: 900px){
  .av-shell{flex-direction:column}
  .av-shell>.av-sidebar{position:fixed;top:0;left:0;bottom:0;width:var(--av-drawer-w);height:100dvh;z-index:var(--av-z-modal);transform:translateX(-100%);transition:transform var(--av-duration-slow) var(--av-ease-standard)}
  .av-shell>.av-sidebar[data-open="true"]{transform:none;box-shadow:var(--av-shadow-sheet)}
  .av-shell .av-mobilebar{display:flex}
  .av-shell .av-topbar{position:relative;top:auto}
}
@container av-root (max-width: 560px){
  .av-month-labels span:nth-child(4n+2){visibility:hidden}
  .av-page-head__actions{width:100%}.av-page-head__actions>.av-btn{flex:1 1 auto}
  .av-modal__foot{flex-wrap:wrap}.av-modal__foot>.av-btn{flex:1 1 auto}
  .av-frame__stats{flex-direction:column;gap:6px;padding:0}
  .av-score-card{flex-direction:column;align-items:flex-start}
  .av-split .av-btn:first-child{flex:1}
}
/* mobile: topbar menu, tables → cards, modals → bottom sheets */
.av-topbar__menu{display:none;flex-shrink:0}
.av-main>*{flex-shrink:0}
.av-table-toolbar__title{display:flex;flex-wrap:wrap;align-items:baseline;gap:0 6px;line-height:1.35}.av-table-toolbar__count{margin-left:0}
@container av-root (max-width: 900px){
  .av-topbar__menu{display:inline-flex}
}
@container av-root (max-width: 560px){
  .av-topbar{flex-wrap:nowrap;gap:8px}
  .av-topbar>nav{flex:1 1 auto}.av-topbar>nav+.av-topbar__spacer{display:none}
  .av-topbar .av-btn--primary{width:var(--av-touch);min-width:var(--av-touch);padding:0;gap:0;font-size:0;justify-content:center;flex-shrink:0}
  .av-topbar .av-breadcrumb--context>li:nth-child(-n+2){display:none}
  .av-tabs--pill{display:flex;width:100%}.av-tabs--pill>.av-tab{flex:1 1 0;justify-content:center;min-width:0;padding:0 8px}
  .av-table-toolbar>*{flex:1 1 100%}.av-table-toolbar .av-row{flex-wrap:nowrap}.av-table-toolbar .av-row>.av-search{flex:1 1 auto;min-width:0;width:auto!important}
  .av-table-wrap{overflow-x:hidden}.av-table tbody tr{width:100%;min-width:0}
  .av-table{display:block;min-width:0}.av-table thead{display:none}.av-table tbody{display:block}
  .av-table tbody tr{display:flex;flex-wrap:wrap;align-items:center;gap:8px 10px;padding:14px 16px;border-bottom:1px solid var(--av-border-subtle-00)}
  .av-table tbody tr:last-child{border-bottom:0}
  .av-table td{display:block;height:auto;padding:0;border:0}
  .av-table td:first-child:not(.av-table__check),.av-table__check+td{flex:1 1 calc(100% - 52px);min-width:0}
  .av-table__check{width:auto}.av-table td.av-table__num{margin-left:auto}
  .av-table__id{overflow-wrap:anywhere}
  .av-modal-scrim{align-items:flex-end;padding:0}
  .av-modal,.av-modal--lg{width:100%;max-height:92%;border-radius:20px 20px 0 0;border-bottom:0;padding-bottom:env(safe-area-inset-bottom)}
  .av-modal::before{content:"";align-self:center;flex-shrink:0;width:36px;height:4px;margin-top:8px;border-radius:2px;background:var(--av-border-strong-01)}
  .av-modal__foot>.av-btn{flex:1 1 0}
}
@container av-root (min-width: 1800px){.av-main{max-width:min(1440px,100%)}}
`;

const FOUNDATIONS = [
{ id:'overview', label:'Overview', desc:'One ecosystem for the Avistar dashboard: tokens.css (all variables, dark + light) → components.css (every .av-* class) → copy-paste HTML. Inter + JetBrains Mono. Dark is default.',
css:`/* Load order */\n@import url("tokens.css");\n@import url("components.css");`,
variants:[
 {name:'Install', html:`<div class="av-stack" style="max-width:560px"><div class="av-clist"><div class="av-clist__item"><span class="av-tag av-tag--mono">1</span><span class="av-clist__text"><span class="av-clist__title">Fonts</span><span class="av-clist__sub">Inter 400–700 · JetBrains Mono 400–600</span></span></div><div class="av-clist__item"><span class="av-tag av-tag--mono">2</span><span class="av-clist__text"><span class="av-clist__title">tokens.css</span><span class="av-clist__sub">--av-* colour, type, space, radius, elevation, motion, layout</span></span></div><div class="av-clist__item"><span class="av-tag av-tag--mono">3</span><span class="av-clist__text"><span class="av-clist__title">components.css</span><span class="av-clist__sub">.av-* classes for every component and dashboard pattern</span></span></div><div class="av-clist__item"><span class="av-tag av-tag--mono">4</span><span class="av-clist__text"><span class="av-clist__title">assets/</span><span class="av-clist__sub">mark-shape2.svg, wordmarks, icons-duo, mascots, logos, patterns</span></span></div></div></div>`,
  code:`<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/styles/tokens.css">
<link rel="stylesheet" href="/styles/components.css">

<body class="av-root" style="margin:0;background:var(--av-background)">
  …
</body>`},
 {name:'Theming', note:'Every colour token has a light value. Switch at any level.', html:`<div class="av-row"><button class="av-btn av-btn--secondary">${ic('sun',14)}Light mode</button><code class="av-code-inline">document.documentElement.dataset.theme = 'light'</code></div>`,
  code:`<!-- dark (default) -->\n<html>\n<!-- light -->\n<html data-theme="light">\n<!-- scoped: any wrapper -->\n<section data-theme="light">…</section>`},
 {name:'Naming', html:`<div class="av-slist" style="max-width:560px"><div class="av-slist__row"><span class="av-slist__k">Token</span><span class="av-slist__v av-slist__v--mono">--av-{category}-{role}-{state}</span></div><div class="av-slist__row"><span class="av-slist__k">Block</span><span class="av-slist__v av-slist__v--mono">.av-btn</span></div><div class="av-slist__row"><span class="av-slist__k">Element</span><span class="av-slist__v av-slist__v--mono">.av-modal__title</span></div><div class="av-slist__row"><span class="av-slist__k">Modifier</span><span class="av-slist__v av-slist__v--mono">.av-btn--primary .av-btn--sm</span></div><div class="av-slist__row"><span class="av-slist__k">State</span><span class="av-slist__v av-slist__v--mono">aria-pressed / aria-selected / aria-current / aria-invalid / :disabled</span></div></div>`},
 {name:'Principles', html:`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));gap:12px;width:100%"><div class="avd-principle"><b>Neutral first</b><span>Surfaces are warm greys. Signal and Ion are earned — brand, severity, focus.</span></div><div class="avd-principle"><b>One primary</b><span>One Signal button per view. Everything else is secondary, ghost or link.</span></div><div class="avd-principle"><b>Numbers lead</b><span>Scores and counts are the largest type on a card. Tabular numerals always.</span></div><div class="avd-principle"><b>Mono for machines</b><span>IDs, ARNs, labels and tags use JetBrains Mono. People-text uses Inter.</span></div></div>`},
]},

{ id:'responsive', label:'Responsive', desc:'Fluid from 320px to 2560px. Containers use %, min() and clamp() — never fixed px for structure. Grid with auto-fit + minmax() reflows without breakpoints; container queries (on .av-root) handle the few real layout switches. Touch targets ≥ 44×44. Media sits in fixed-ratio wrappers with object-fit: cover.',
css:RESPONSIVE_CSS,
variants:[
 {name:'Fluid tokens', html:`<div class="av-slist" style="width:100%">${BASE_TOKENS.filter(t => ['--av-gutter','--av-card-pad','--av-section-gap','--av-touch','--av-sidebar-w','--av-drawer-w','--av-content-max'].includes(t[1])).map(t => `<div class="av-slist__row"><span class="av-slist__v av-slist__v--mono">${t[1]}</span><span class="av-slist__k">${t[2]} — ${t[3]}</span></div>`).join('')}</div>`, code:`--av-gutter: clamp(1rem, 4vw, 2rem);\n--av-card-pad: clamp(1rem, 3vw, 1.25rem);\n--av-section-gap: clamp(1.25rem, 3vw, 1.75rem);\n--av-touch: 44px;\n--av-sidebar-w: clamp(220px, 20vw, 248px);\n--av-drawer-w: min(300px, 86vw);`},
 {name:'Viewport reference', html:`<div class="av-slist" style="width:100%">${[['320','Smallest phone · single column, drawer nav, full-width actions'],['560','Container switch · stacked score card, wrapped footers'],['900','Container switch · sidebar becomes drawer + mobile bar'],['1280','--av-content-max · main column stops growing'],['1800+','Ultra-wide · main column caps at 1440px'],['2560','Max tested width · everything centred']].map(([w,d]) => `<div class="av-slist__row"><span class="av-slist__v av-slist__v--mono">${w}px</span><span class="av-slist__k">${d}</span></div>`).join('')}</div>`},
 {name:'Auto-fit grid', note:'Resize the preview width (top of page) — columns reflow with no media queries.', html:`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:clamp(.75rem,2vw,1rem)">${['Open findings','Critical + high','Risky identities','Coverage'].map(l => `<div class="av-tile"><span class="av-eyebrow">${l}</span><span class="av-kpi__num">293</span></div>`).join('')}</div>`, code:`.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,180px),1fr));gap:clamp(.75rem,2vw,1rem)}`},
 {name:'Fluid flex row', html:`<div style="display:flex;flex-wrap:wrap;gap:16px"><div class="av-tile" style="flex:1 1 min(100%,340px)">Score card · flex 1 1 340px</div><div class="av-tile" style="flex:2 1 min(100%,520px)">KPI grid · flex 2 1 520px</div></div>`, code:`.row{display:flex;flex-wrap:wrap;gap:16px}\n.row>.a{flex:1 1 min(100%,340px)}\n.row>.b{flex:2 1 min(100%,520px)}`},
 {name:'Media wrappers', html:`<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,160px),1fr));gap:12px"><div class="av-media"><img src="assets/illus/clay-flow-1k.jpg" alt=""></div><div class="av-media av-media--4x3"><img src="assets/illus/clay-vault-1k.jpg" alt=""></div><div class="av-media av-media--square"><img src="assets/illus/clay-console-1k.jpg" alt=""></div></div>`, code:`<div class="av-media av-media--4x3"><img src="…" alt=""></div>\n/* .av-media{aspect-ratio:var(--av-ratio,16/9);overflow:hidden} .av-media>img{width:100%;height:100%;object-fit:cover} */`},
 {name:'Touch targets', note:'Dashed outline shows the 44×44 hit area around small visual controls.', html:`<div class="av-row" style="gap:24px">${['<button class="av-btn av-btn--secondary av-btn--sm">Small · 32</button>','<button class="av-icon-btn av-icon-btn--ghost" aria-label="More">'+ic('dots',18,2.6)+'</button>','<button class="av-page" aria-current="page">1</button>','<button class="av-icon-btn av-icon-btn--arrow" aria-label="Open">'+ic('arrow',14,2)+'</button>'].map(b => `<span style="position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:44px;min-height:44px;outline:1px dashed color-mix(in srgb,var(--av-support-low) 60%,transparent);border-radius:6px">${b}</span>`).join('')}</div>`, code:`.av-btn--sm{position:relative}\n.av-btn--sm::after{content:"";position:absolute;left:50%;top:50%;width:max(100%,var(--av-touch));height:max(100%,var(--av-touch));transform:translate(-50%,-50%)}`},
 {name:'Container query', html:`<p style="margin:0;font-size:13px;color:var(--av-text-tertiary)">.av-root is the query container, so components respond to the space they're given — the same rules work in a sidebar panel or full page.</p>`, code:`.av-root{container:av-root / inline-size}\n@container av-root (max-width: 900px){\n  .av-shell>.av-sidebar{position:fixed;transform:translateX(-100%)}\n  .av-shell>.av-sidebar[data-open="true"]{transform:none}\n  .av-shell .av-mobilebar{display:flex}\n}`},
]},

{ id:'color', label:'Color', desc:'Primitive ramps. Never use primitives directly in product code — use the semantic tokens under Color tokens.',
css:`:root{\n${PRIMITIVES.map(([f, r]) => r.map(([s, h]) => `  --av-${f.toLowerCase()}-${s}: ${h};`).join('\n')).join('\n')}\n}`,
variants:[
 ...PRIMITIVES.map(([f, r]) => ({ name:f, html:`<div class="avd-swatches">${r.map(([s, h]) => sw(`${f} ${s}`, h)).join('')}</div>`, code:r.map(([s, h]) => `--av-${f.toLowerCase()}-${s}: ${h};`).join('\n') })),
 {name:'Brand gradient', html:`<div style="width:100%;height:72px;border-radius:14px;background:var(--av-gradient-brand);display:flex;align-items:center;justify-content:space-between;padding:0 18px;font:600 11px var(--av-font-mono);color:#0B0B0C"><span>#FF4B1F SIGNAL</span><span>ION #1FDDFF</span></div>`, code:`background: var(--av-gradient-brand); /* linear-gradient(90deg,#FF4B1F,#1FDDFF) */`},
 {name:'Posture scale', note:'score < 65 poor · 65–79 fair · ≥ 80 good · null = none', html:`<div class="avd-swatches">${sw('Poor < 65','var(--av-posture-poor)','--av-posture-poor')}${sw('Fair 65–79','var(--av-posture-fair)','--av-posture-fair')}${sw('Good ≥ 80','var(--av-posture-good)','--av-posture-good')}${sw('None','var(--av-support-neutral)','--av-support-neutral')}</div>`,
  code:`const postureColor = s => s == null ? 'var(--av-support-neutral)'\n  : s >= 80 ? 'var(--av-posture-good)'\n  : s >= 65 ? 'var(--av-posture-fair)'\n  : 'var(--av-posture-poor)';`},
 {name:'Severity scale', html:`<div class="avd-swatches">${sw('Critical','var(--av-support-critical)','--av-support-critical')}${sw('High','var(--av-support-high)','--av-support-high')}${sw('Medium','var(--av-support-medium)','--av-support-medium')}${sw('Low','var(--av-support-low)','--av-support-low')}${sw('Success','var(--av-support-success)','--av-support-success')}</div>`},
]},

{ id:'type', label:'Type', desc:'Inter for UI and data, JetBrains Mono for labels, IDs and numeric tags. Tight negative tracking on display sizes.',
css:typeCSS,
variants:TYPE_SCALE.map(t => ({ name:t[1], note:`${t[2]} · ${t[3]} · ${t[4]} · lh ${t[5]} · ${t[6] === 'mono' ? 'JetBrains Mono' : 'Inter'}`, html:t[0] === 'display' ? `<p class="av-type-display" style="margin:0">Welcome back, <span class="av-text-gradient">Zalak</span>.</p>` : t[0] === 'score' ? `<span class="av-type-score av-text-gradient" style="background-image:var(--av-gradient-brand-45)">64</span>` : `<p class="av-type-${t[0]}" style="margin:0">${t[7]}</p>` }))},

{ id:'icons', label:'Icons', desc:'Line icons (24 grid, 1.6–2.2 stroke, currentColor) for actions. Duotone set for KPI and empty states. 3D mascots for sidebar nav and moments.',
css:`.av-icon{display:inline-block;flex-shrink:0;vertical-align:middle}\n/* sizes: 12 delta · 14 in buttons · 16 inline · 18 icon buttons · 24 nav */`,
variants:[
 {name:'Line set', html:`<div class="avd-grid">${LINE.map(n => `<div class="avd-cell">${ic(n,20)}<span>${n}</span></div>`).join('')}</div>`, code:`<svg class="av-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`},
 {name:'Sizes & stroke', html:`<div class="av-row" style="gap:28px;align-items:flex-end">${[[12,2.2],[14,2],[16,1.8],[18,1.6],[24,1.6]].map(([s,w]) => `<span class="av-stack" style="align-items:center;gap:8px">${ic('shield',s,w)}<span class="av-mono" style="font-size:10px;color:var(--av-text-helper)">${s}/${w}</span></span>`).join('')}</div>`},
 {name:'Duotone (icons-duo)', html:`<div class="avd-grid">${DUO.map(n => `<div class="avd-cell"><img src="assets/icons-duo/${n}.svg" alt=""><span>${n}</span></div>`).join('')}</div>`, code:`<img src="assets/icons-3d/shield.png" alt="" width="24" height="24">`},
 {name:'Glass (icons-glass)', html:`<div class="avd-grid">${DUO.map(n => `<div class="avd-cell"><img src="assets/icons-glass/${n}.svg" alt=""><span>${n}</span></div>`).join('')}</div>`, code:`<img src="assets/icons-3d/threat.png" alt="" width="28" height="28">`},
 {name:'Tile (icons-tile)', html:`<div class="avd-grid">${['alert','cloud','fingerprint','identity','key','lock','monitor','network','scan','server','shield','threat'].map(n => `<div class="avd-cell"><img src="assets/icons-tile/${n}.svg" alt=""><span>${n}</span></div>`).join('')}</div>`},
 {name:'Mascots', note:'Sidebar nav glyphs, org avatars, empty states. 24–52px.', html:`<div class="avd-grid">${MASCOTS.map(n => `<div class="avd-cell"><img src="assets/mascots/${n}.png" alt="" style="width:44px;height:44px"><span>${n}</span></div>`).join('')}</div>`, code:`<img src="assets/mascots/magnifier.png" alt="" width="24" height="24" style="object-fit:contain">`},
 {name:'Provider logos', html:`<div class="avd-grid">${[['aws-dark','AWS (dark)'],['aws','AWS (light)'],['azure','Azure'],['gcp','GCP']].map(([f,n]) => `<div class="avd-cell"><img src="assets/logo-${f}.svg" alt="" style="width:40px;height:24px"><span>${n}</span></div>`).join('')}</div>`, code:`<img src="assets/logo-aws-dark.svg" alt="AWS" height="14"> <!-- use logo-aws.svg on light -->`},
 {name:'Brand mark', note:'Always mark-shape2.svg (rounded cube stack).', html:`<div class="av-row" style="gap:24px"><img src="assets/mark-shape2.svg" alt="Avistar" style="width:28px;height:25px"><span class="av-row" style="gap:10px"><img src="assets/mark-shape2.svg" alt="" style="width:28px;height:25px"><img src="assets/avistar-wordmark-light.svg" alt="avistar" style="height:15px"></span></div>`, code:`<a class="av-brand" href="/"><img src="assets/mark-shape2.svg" alt="Avistar" width="28" height="25"><img src="assets/avistar-wordmark-light.svg" alt="" height="15"></a>\n<!-- light theme: avistar-wordmark-ink.svg -->`},
]},

{ id:'space', label:'Space & elevation', desc:'4px base grid. Radius scale from 4 (intro cards) to 16 (cards, modals) and pill. Five elevation levels.',
css:BASE_TOKENS.filter(t => ['Space','Radius','Elevation','Z-index'].includes(t[0])).map(t => `${t[1]}: ${t[2]};`).join('\n'),
variants:[
 {name:'Spacing scale', html:`<div class="av-stack" style="width:100%;gap:8px">${BASE_TOKENS.filter(t => t[0] === 'Space').map(t => `<div class="avd-bar"><b>${t[1].replace('--av-','')}</b><span>${t[2]}</span><span class="av-row" style="gap:12px;flex-wrap:nowrap"><i style="width:${t[2]}"></i><span style="font-family:var(--av-font-sans)">${t[3]}</span></span></div>`).join('')}</div>`, code:BASE_TOKENS.filter(t => t[0] === 'Space').map(t => `${t[1]}: ${t[2]}; /* ${t[3]} */`).join('\n')},
 {name:'Radius', html:`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,130px),1fr));gap:12px;width:100%">${BASE_TOKENS.filter(t => t[0] === 'Radius').map(t => `<div class="av-stack" style="gap:8px"><div style="height:84px;border:1px solid var(--av-border-strong-01);background:var(--av-layer-03);border-radius:var(${t[1]})"></div><span style="font-size:13px;font-weight:500">${t[1].replace('--av-radius-','')} · <span class="av-mono" style="color:var(--av-text-helper);font-size:11px">${t[2]}</span></span><span style="font-size:12px;color:var(--av-text-helper)">${t[3]}</span></div>`).join('')}</div>`, code:BASE_TOKENS.filter(t => t[0] === 'Radius').map(t => `${t[1]}: ${t[2]}; /* ${t[3]} */`).join('\n')},
 {name:'Elevation', html:`<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,180px),1fr));gap:16px;width:100%;padding:12px">${BASE_TOKENS.filter(t => t[0] === 'Elevation').map(t => `<div class="avd-box" style="box-shadow:var(${t[1]})">${t[3]}<span>${t[1]}</span></div>`).join('')}</div>`, code:BASE_TOKENS.filter(t => t[0] === 'Elevation').map(t => `${t[1]}: ${t[2]};`).join('\n')},
 {name:'Z-index', html:`<div class="av-slist" style="width:100%;max-width:480px">${BASE_TOKENS.filter(t => t[0] === 'Z-index').map(t => `<div class="av-slist__row"><span class="av-slist__v av-slist__v--mono">${t[1]}</span><span class="av-slist__k">${t[2]} · ${t[3]}</span></div>`).join('')}</div>`},
]},

{ id:'spacing-block', label:'Spacing block', desc:'Layout anatomy measured from the live dashboard.',
css:BASE_TOKENS.filter(t => t[0] === 'Layout').map(t => `${t[1]}: ${t[2]};`).join('\n'),
variants:[
 {name:'App shell', html:`<div style="display:flex;width:100%;height:260px;border:1px solid var(--av-border-subtle-00);border-radius:14px;overflow:hidden;font:10px var(--av-font-mono);color:var(--av-text-helper)"><div class="avd-measure" style="width:min(124px,100%);display:flex;align-items:center;justify-content:center">SIDEBAR<br>248 / 72</div><div style="flex:1;display:flex;flex-direction:column"><div class="avd-measure" style="height:40px;display:flex;align-items:center;justify-content:center">TOP BAR · 64</div><div style="flex:1;display:flex;justify-content:center;padding:16px 20px"><div class="avd-measure" style="width:100%;max-width:420px;display:flex;align-items:center;justify-content:center;text-align:center">MAIN · max 1280<br>pad 32 · clamp(16px,3vw,40px)<br>gap 28</div></div></div></div>`,
  code:`<div class="av-shell">\n  <aside class="av-sidebar">…</aside>\n  <div class="av-shell__body">\n    <header class="av-topbar">…</header>\n    <main class="av-main">…</main>\n  </div>\n</div>`},
 {name:'Card', html:`<div class="av-tile" style="max-width:360px;padding:0;gap:0;overflow:visible"><div class="avd-measure" style="margin:0;padding:20px;display:flex;flex-direction:column;gap:14px;border-radius:16px"><span class="avd-label" style="top:-8px;left:12px">PAD 20</span><span class="avd-measure" style="height:20px;background:var(--av-layer-03)"></span><span class="avd-label" style="top:44px;right:8px">GAP 14</span><span class="avd-measure" style="height:34px;background:var(--av-layer-03)"></span><span class="avd-measure" style="height:14px;background:var(--av-layer-03)"></span></div></div>`},
 {name:'Grids', html:`<div class="av-stack" style="width:100%;gap:16px"><div><span class="av-eyebrow">Client grid · minmax(min(100%,250px),1fr) · gap 12</span><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:12px;margin-top:8px">${'<span class="avd-measure" style="height:56px"></span>'.repeat(4)}</div></div><div><span class="av-eyebrow">KPI grid · minmax(min(100%,220px),1fr) · gap 0 · hairline</span><div style="display:grid;grid-template-columns:repeat(4,1fr);margin-top:8px">${'<span class="avd-measure" style="height:56px"></span>'.repeat(4)}</div></div><div><span class="av-eyebrow">Hero row · flex 1 1 340 / 2 1 520 · gap 16</span><div style="display:flex;gap:16px;margin-top:8px"><span class="avd-measure" style="flex:1;height:56px"></span><span class="avd-measure" style="flex:2;height:56px"></span></div></div></div>`},
 {name:'Page header', html:`<div class="avd-measure" style="width:100%;padding:12px;display:flex;justify-content:space-between;align-items:flex-end;gap:16px"><div class="av-stack" style="gap:8px"><span class="av-eyebrow">Eyebrow · 11 mono</span><span style="font-size:28px;font-weight:600;letter-spacing:-0.03em">Title · 28–36</span><span style="font-size:13px;color:var(--av-text-tertiary)">Subtitle · 15 · gap 8</span></div><span class="av-mono" style="font-size:10px;color:var(--av-text-info)">ACTIONS · GAP 12/20</span></div>`},
 {name:'Intro column', html:`<div class="avd-measure" style="width:100%;padding:14px;display:flex;gap:16px;font:10px var(--av-font-mono);color:var(--av-text-helper)"><span class="avd-measure" style="flex:1;height:90px;display:flex;align-items:center;justify-content:center">TEXT · flex 1 1 440</span><span class="avd-measure" style="flex:1;height:90px;display:flex;align-items:center;justify-content:center">FRAME · dashed</span></div>`},
]},

{ id:'effects', label:'Effects', desc:'Gradients, glows, patterns, dashed frames, focus, blur and motion — the texture layer of the dashboard.',
css:`/* glows */\n.av-glow-signal{background:radial-gradient(70% 90% at 100% 0%,var(--av-background-glow-signal),transparent 60%),var(--av-layer-01)}\n.av-glow-ion{background:radial-gradient(70% 90% at 100% 0%,var(--av-background-glow-ion),transparent 60%),var(--av-layer-01)}\n.av-glow-dual{background:radial-gradient(90% 120% at 0% 100%,var(--av-background-glow-signal),transparent 60%),radial-gradient(80% 110% at 100% 0%,var(--av-background-glow-ion),transparent 60%),var(--av-layer-01)}\n/* corner line pattern */\n.av-weave{position:absolute;right:0;top:0;width:min(220px,100%);height:160px;background:url(assets/patterns/line-weave-white.svg) right top/40px auto;opacity:.55;-webkit-mask-image:radial-gradient(100% 100% at 100% 0%,#000,transparent 72%);mask-image:radial-gradient(100% 100% at 100% 0%,#000,transparent 72%);filter:var(--av-pattern-filter);pointer-events:none}\n.av-lift{transition:transform var(--av-duration-base),border-color var(--av-duration-base)}.av-lift:hover{transform:translateY(-2px)}\n.av-blur-header{background:var(--av-background-header);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}\n.av-focus-ring{outline:2px solid var(--av-focus);outline-offset:2px}`,
variants:[
 {name:'Brand gradient', html:`<div style="width:100%;height:56px;border-radius:14px;background:var(--av-gradient-brand)"></div>`, code:`background: var(--av-gradient-brand);`},
 {name:'Text gradient', html:`<span class="av-type-display">AI-<span class="av-text-gradient">powered</span></span>`, code:`<span class="av-text-gradient">Zalak</span>`},
 {name:'Glow · signal', html:`<div class="av-tile av-glow-signal" style="width:100%;height:120px"></div>`, code:`<div class="av-tile av-glow-signal">…</div>`},
 {name:'Glow · ion', html:`<div class="av-tile av-glow-ion" style="width:100%;height:120px"></div>`, code:`<div class="av-tile av-glow-ion">…</div>`},
 {name:'Glow · dual (score card)', html:`<div class="av-tile av-glow-dual" style="width:100%;height:140px"></div>`, code:`<div class="av-tile av-glow-dual">…</div>`},
 {name:'Line-weave corner', html:`<div class="av-tile" style="position:relative;overflow:hidden;width:100%;height:160px"><div class="av-weave" aria-hidden="true"></div></div>`, code:`<div class="av-tile" style="position:relative;overflow:hidden">\n  <div class="av-weave" aria-hidden="true"></div>\n  …\n</div>`},
 {name:'Dashed frame', html:`<div class="av-frame" style="width:100%;height:160px"></div>`},
 {name:'Focus ring', html:`<div class="av-row"><button class="av-btn av-btn--secondary av-focus-ring">Focused</button><input class="av-input is-focus" style="max-width:220px" value="Focused field"></div>`, code:`:focus-visible { outline: 2px solid var(--av-focus); outline-offset: 2px; }\n/* fields */ box-shadow: 0 0 0 3px var(--av-focus-ring); border-color: var(--av-border-interactive);`},
 {name:'Hover lift', html:`<button class="av-tile av-tile--clickable" style="width:min(240px,100%)">Hover me</button>`},
 {name:'Backdrop blur', html:`<div style="position:relative;width:100%;height:120px;border-radius:14px;overflow:hidden;background:url(assets/patterns/line-weave-white.svg) 0 0/40px,var(--av-layer-03)"><div class="av-blur-header" style="position:absolute;inset:0 0 auto;height:56px;border-bottom:1px solid var(--av-border-subtle-00)"></div></div>`, code:`<header class="av-topbar av-blur-header">…</header>`},
 {name:'Motion · easing', html:`<div class="av-slist" style="width:100%">${BASE_TOKENS.filter(t => t[0] === 'Motion').map(t => `<div class="av-slist__row"><span class="av-slist__v av-slist__v--mono">${t[1]}</span><span class="av-slist__k">${t[2]} — ${t[3]}</span></div>`).join('')}</div>`, code:BASE_TOKENS.filter(t => t[0] === 'Motion').map(t => `${t[1]}: ${t[2]};`).join('\n')},
 {name:'Keyframes', html:`<div class="av-row" style="gap:20px"><span class="av-spinner"></span><span class="av-skeleton" style="width:min(120px,100%);height:14px"></span><span class="av-live-dot"></span><div class="av-menu" style="min-width:min(140px,100%)"><button class="av-menu__item">ctx-in</button></div></div>`, code:`av-spin · av-shimmer · av-pulse · av-ctx-in · av-sheet-in · av-slide-up · av-indet · av-pop · av-draw\n/* defined in components.css */`},
]},
];

const PATTERNS = [
{ id:'app-shell', label:'App shell', desc:'Sticky sidebar + sticky blurred top bar + centred main column.',
css:`.av-shell{display:flex;min-height:100vh;background:var(--av-background);color:var(--av-text-primary)}
.av-shell__body{flex:1;min-width:0;display:flex;flex-direction:column}
.av-main{width:100%;max-width:var(--av-content-max);margin:0 auto;padding:32px clamp(16px,3vw,40px) 80px;display:flex;flex-direction:column;gap:28px}`,
variants:[{name:'Shell', html:`<div class="av-shell" style="min-height:0;height:420px;border:1px solid var(--av-border-subtle-00);border-radius:16px;overflow:hidden">
  <aside class="av-sidebar av-sidebar--collapsed" style="height:auto"><div class="av-sidebar__brand"><img src="assets/mark-shape2.svg" alt="Avistar" width="28" height="25"></div><nav class="av-sidebar__nav"><a class="av-nav-item" aria-current="page" href="#"><img class="av-nav-item__glyph" src="assets/mascots/magnifier.png" alt=""></a><a class="av-nav-item" href="#"><img class="av-nav-item__glyph" src="assets/mascots/shield.png" alt=""></a><a class="av-nav-item" href="#"><img class="av-nav-item__glyph" src="assets/mascots/key.png" alt=""></a></nav></aside>
  <div class="av-shell__body"><header class="av-topbar" style="position:relative"><button class="av-icon-btn av-topbar__menu" aria-label="Open menu">${ic('list',18,1.8)}</button><span class="av-breadcrumb" style="min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Avistar Demo Org / Tidewell</span><span style="flex:1"></span><button class="av-btn av-btn--primary">${ic('plus',14,2.2)}Connect account</button></header>
  <main class="av-main" style="padding-top:24px"><div class="av-page-head"><div class="av-page-head__text"><span class="av-eyebrow">Tidewell · 2 accounts</span><h1 class="av-page-head__title">Overview</h1></div></div></main></div>
</div>`}]},

{ id:'sidebar', label:'Sidebar nav', desc:'Section heads in mono, 3D mascot glyphs (scale + tilt when active), Ion gradient active pill, count badges, user footer with theme + collapse.',
css:`.av-sidebar{width:var(--av-sidebar-w);flex-shrink:0;position:sticky;top:0;height:100vh;display:flex;flex-direction:column;border-right:1px solid var(--av-border-subtle-00);background:var(--av-background);overflow:hidden;z-index:var(--av-z-sidebar);transition:width var(--av-duration-slow) var(--av-ease-standard)}
.av-sidebar--collapsed{width:var(--av-sidebar-w-collapsed)}
.av-sidebar__brand{height:var(--av-header-h);flex-shrink:0;display:flex;align-items:center;gap:10px;padding:0 20px;border-bottom:1px solid var(--av-border-subtle-00)}
.av-sidebar__nav{flex:1;overflow-y:auto;padding:16px 12px;display:flex;flex-direction:column;gap:2px}
.av-sidebar__head{display:block;padding:18px 10px 8px;font:500 10px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-placeholder);white-space:nowrap}
.av-sidebar__head:first-child{padding-top:4px}
.av-nav-item{display:flex;align-items:center;gap:12px;width:100%;height:44px;padding:0 10px;border:0;border-radius:var(--av-radius-lg);background:transparent;color:var(--av-text-tertiary);font:500 14px var(--av-font-sans);text-align:left;text-decoration:none;white-space:nowrap;cursor:pointer;transition:background var(--av-duration-fast),color var(--av-duration-fast)}
.av-nav-item:hover{background:var(--av-button-ghost-hover);color:var(--av-text-primary)}
.av-nav-item[aria-current="page"]{background:var(--av-gradient-nav-active);box-shadow:inset 0 0 0 1px var(--av-border-nav-active);color:var(--av-text-primary)}
.av-nav-item__glyph{width:24px;height:24px;flex-shrink:0;margin:0 -1px;object-fit:contain;opacity:.8;transition:opacity var(--av-duration-base),transform var(--av-duration-slow) var(--av-ease-spring)}
.av-nav-item[aria-current="page"] .av-nav-item__glyph{opacity:1;transform:scale(1.12) rotate(-6deg)}
.av-nav-item__label{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis}
.av-nav-item__badge{padding:2px 7px;border-radius:var(--av-radius-pill);background:var(--av-tag-gray-bg);color:var(--av-tag-gray-text);font:11px var(--av-font-mono)}
.av-nav-item__badge--alert{background:var(--av-tag-signal-bg);color:var(--av-tag-signal-text)}
.av-sidebar--collapsed .av-nav-item__label,.av-sidebar--collapsed .av-nav-item__badge,.av-sidebar--collapsed .av-sidebar__head,.av-sidebar--collapsed .av-user__text{display:none}
.av-sidebar__foot{flex-shrink:0;border-top:1px solid var(--av-border-subtle-00);padding:12px;display:flex;flex-direction:column;gap:2px}
.av-user{display:flex;align-items:center;gap:10px;padding:8px 6px;white-space:nowrap}
.av-user__text{display:flex;flex-direction:column;min-width:0}.av-user__name{font-size:13px}.av-user__mail{font-size:12px;color:var(--av-text-helper);overflow:hidden;text-overflow:ellipsis}
.av-sidebar__action{display:flex;align-items:center;gap:12px;height:36px;padding:0 10px;border:0;border-radius:var(--av-radius-md);background:transparent;color:var(--av-text-helper);font:400 13px var(--av-font-sans);cursor:pointer;white-space:nowrap}
.av-sidebar__action:hover{background:var(--av-button-ghost-hover);color:var(--av-text-primary)}`,
variants:(() => { const item = (m, l, cur, b, alert) => `<a class="av-nav-item" href="#"${cur ? ' aria-current="page"' : ''}><img class="av-nav-item__glyph" src="assets/mascots/${m}.png" alt=""><span class="av-nav-item__label">${l}</span>${b ? `<span class="av-nav-item__badge${alert ? ' av-nav-item__badge--alert' : ''}">${b}</span>` : ''}</a>`;
 const foot = `<div class="av-sidebar__foot"><div class="av-user"><span class="av-avatar">Z</span><span class="av-user__text"><span class="av-user__name">Zalak</span><span class="av-user__mail">zalak@avistar.ai</span></span></div><button class="av-sidebar__action">${ic('sun',18,1.6)}Light mode</button><button class="av-sidebar__action">${ic('collapse',18,1.6)}Collapse</button></div>`;
 const nav = `<nav class="av-sidebar__nav">
    <span class="av-sidebar__head">Organization</span>
    ${item('clipboard','All clients')}
    ${item('bucket','Manage clients')}
    ${item('idcard','Members')}
    <span class="av-sidebar__head">Client</span>
    ${item('magnifier','Overview',true)}
    ${item('shield','Findings',false,'293',true)}
    ${item('key','Identities')}
    ${item('chip','Scans')}
    <span class="av-sidebar__head">Intel</span>
    ${item('clipboard','Bulletins',false,'3 new')}
    <span class="av-sidebar__head">Workspace</span>
    ${item('bucket','Settings')}
  </nav>`;
 const brand = `<div class="av-sidebar__brand"><img src="assets/mark-shape2.svg" alt="Avistar" width="28" height="25"><img src="assets/avistar-wordmark-light.svg" alt="" height="15" class="av-nav-item__label" style="flex:none"></div>`;
 return [
 {name:'Full', html:`<aside class="av-sidebar" style="height:760px;position:relative">\n  ${brand}\n  ${nav}\n  ${foot}\n</aside>`},
 {name:'Collapsed', html:`<aside class="av-sidebar av-sidebar--collapsed" style="height:560px;position:relative">\n  ${brand}\n  ${nav}\n  ${foot}\n</aside>`},
 {name:'Mobile drawer (open)', note:'Below 900px container width. Toggle data-open on the sidebar from the menu button; close on scrim tap / Esc / nav.', html:`<div class="av-demo-stage" style="height:600px;max-width:390px">
  <header class="av-mobilebar" style="display:flex"><button class="av-icon-btn" aria-label="Open menu" aria-expanded="true" aria-controls="av-nav">${ic('list',18,1.8)}</button><span class="av-mobilebar__brand"><img src="assets/mark-shape2.svg" alt="Avistar" width="24" height="22"><span style="font-size:14px;font-weight:600">Overview</span></span><button class="av-icon-btn" aria-label="Notifications">${ic('bell',18,1.6)}<span class="av-icon-btn__dot"></span></button></header>
  <div class="av-drawer-scrim"></div>
  <aside class="av-sidebar av-sidebar--drawer" id="av-nav" data-open="true">
    ${brand}
    ${nav}
    ${foot}
  </aside>
</div>`, code:`<header class="av-mobilebar">…menu button…</header>\n<aside class="av-sidebar" id="av-nav" data-open="false">…</aside>\n<script>\n  const nav = document.getElementById('av-nav');\n  menuBtn.onclick = () => { const o = nav.dataset.open !== 'true'; nav.dataset.open = o; menuBtn.setAttribute('aria-expanded', o); };\n<\/script>`},
 {name:'Mobile bar', html:`<header class="av-mobilebar" style="display:flex;position:relative"><button class="av-icon-btn" aria-label="Open menu" aria-expanded="false">${ic('list',18,1.8)}</button><span class="av-mobilebar__brand"><img src="assets/mark-shape2.svg" alt="Avistar" width="24" height="22"><span style="font-size:14px;font-weight:600">Overview</span></span><button class="av-icon-btn" aria-label="Notifications">${ic('bell',18,1.6)}<span class="av-icon-btn__dot"></span></button></header>`},
 {name:'Nav item states', html:`<div class="av-stack" style="width:min(240px,100%);gap:2px">${item('magnifier','Active',true)}${item('key','Default')}${item('shield','With alert badge',false,'293',true)}${item('clipboard','With neutral badge',false,'3 new')}</div>`},
 {name:'Footer', html:`<div style="width:min(248px,100%);border:1px solid var(--av-border-subtle-00);border-radius:14px">${foot}</div>`},
]; })()},

{ id:'top-bar', label:'Top bar', desc:'64px, blurred background, context breadcrumb pill, primary CTA and notifications.',
css:`.av-topbar{position:sticky;top:0;z-index:var(--av-z-header);height:var(--av-header-h);display:flex;align-items:center;gap:12px;padding:0 clamp(16px,3vw,40px);border-bottom:1px solid var(--av-border-subtle-00);background:var(--av-background-header);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}
.av-topbar__spacer{flex:1}
.av-topbar--intro{height:72px;padding:0 clamp(20px,4vw,48px);border-bottom-color:var(--av-border-divider);background:var(--av-background-intro)}`,
variants:[
 {name:'Dashboard', html:`<header class="av-topbar" style="position:relative">
  <button class="av-icon-btn av-topbar__menu" aria-label="Open menu">${ic('list',18,1.8)}</button>
  <nav aria-label="Context"><ol class="av-breadcrumb av-breadcrumb--context"><li>Avistar Demo Org</li><li class="av-breadcrumb__sep">/</li><li style="color:var(--av-text-primary)">Tidewell</li><li class="av-breadcrumb__sep">/</li><li style="display:flex;align-items:center;gap:8px"><img class="av-breadcrumb__logo" src="assets/logo-aws-dark.svg" alt="AWS"><span aria-current="page">Production Demo Account</span></li><li class="av-breadcrumb__chev">${ic('chevDown',16,2)}</li></ol></nav>
  <span class="av-topbar__spacer"></span>
  <button class="av-btn av-btn--primary">${ic('plus',14,2.2)}Connect account</button>
  <button class="av-icon-btn" aria-label="Notifications">${ic('bell',18,1.6)}<span class="av-icon-btn__dot"></span></button>
</header>`},
 {name:'Intro (org picker)', html:`<header class="av-topbar av-topbar--intro" style="position:relative">
  <span class="av-row" style="gap:10px"><img src="assets/mark-shape2.svg" alt="Avistar" width="28" height="25"><img src="assets/avistar-wordmark-light.svg" alt="" height="15"></span>
  <span class="av-topbar__spacer"></span>
  <span class="av-row" style="gap:12px"><span class="av-avatar av-avatar--md">Z</span><span style="font-size:13px;color:var(--av-text-muted-intro)">zalak@avistar.ai</span></span>
</header>`},
]},

{ id:'story-banner', label:'Story banner', desc:'Contextual help strip at the top of each page: illustration, title, one line, “Help guide →”.',
css:`.av-story{position:relative;display:flex;align-items:center;gap:14px;padding:8px 16px 8px 8px;border-radius:var(--av-radius-2xl);border:1px solid var(--av-border-subtle-01);background:radial-gradient(60% 160% at 0% 100%,color-mix(in srgb,var(--av-support-critical) 8%,transparent),transparent 60%),var(--av-layer-01);overflow:hidden}
.av-story__media{flex:0 0 auto;width:72px;aspect-ratio:4/3;border-radius:var(--av-radius-md);background:var(--av-layer-03) center/cover no-repeat}
.av-story__body{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.av-story__title{font-size:14px;font-weight:600;letter-spacing:-0.01em;line-height:1.3}
.av-story__text{font-size:13px;line-height:1.45;color:var(--av-text-tertiary)}
.av-story--lg{padding:16px 24px 16px 16px;gap:20px}.av-story--lg .av-story__media{width:min(144px,100%)}.av-story--lg .av-story__title{font-size:17px}.av-story--lg .av-story__text{font-size:15px}`,
variants:[
 {name:'Default', html:`<div class="av-story"><div class="av-story__media" style="background-image:url(assets/illus/clay-flow-1k.jpg)" aria-hidden="true"></div><div class="av-story__body"><span class="av-story__title">Everything flows into one score.</span><span class="av-story__text">Every scan feeds the number below. Close the top three fixes and watch it climb.</span></div><a class="av-link av-link--action" href="#" style="font-size:13px">Help guide${ic('arrow',14,2)}</a></div>`},
 {name:'Large', html:`<div class="av-story av-story--lg"><div class="av-story__media" style="background-image:url(assets/illus/clay-flow-1k.jpg)" aria-hidden="true"></div><div class="av-story__body"><span class="av-story__title">Everything flows into one score.</span><span class="av-story__text">Every scan feeds the number below.</span></div><a class="av-link av-link--action" href="#">Help guide${ic('arrow',16,2)}</a></div>`},
]},

{ id:'page-header', label:'Page header', desc:'Mono eyebrow (context) → H1 → one-line status. Actions bottom-right: link action then primary.',
css:`.av-page-head{display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px}
.av-page-head__text{display:flex;flex-direction:column;gap:8px;min-width:0;flex:1 1 min(100%,280px)}
.av-page-head__title{margin:0;font-size:clamp(28px,3vw,36px);font-weight:600;letter-spacing:-0.03em;line-height:1.05}
.av-page-head__sub{margin:0;font-size:15px;color:var(--av-text-tertiary);text-wrap:pretty}
.av-page-head__actions{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px}`,
variants:[
 {name:'Overview', html:`<div class="av-page-head"><div class="av-page-head__text"><span class="av-eyebrow">Hydroponic Cloud Industries · 3 accounts</span><h1 class="av-page-head__title">Overview</h1><p class="av-page-head__sub">Last scan finished 2 hours ago. Your posture improved 6 points this week.</p></div><div class="av-page-head__actions"><a class="av-link av-link--action" href="#">Schedule scans${ic('arrow',16,2)}</a><button class="av-btn av-btn--primary">${ic('play',14,0,true)}Run scan</button></div></div>`},
 {name:'With search + switcher', html:`<div class="av-page-head"><div class="av-page-head__text"><span class="av-eyebrow">Avistar Demo Org · 10 clients</span><h1 class="av-page-head__title">Your clients</h1></div><div class="av-page-head__actions" style="gap:12px"><div class="av-search" style="width:min(320px,100%)">${ic('search',18,2)}<input class="av-search__input" placeholder="Search clients"></div><div class="av-switcher"><button aria-pressed="true">${ic('grid',14)}Cards</button><button aria-pressed="false">${ic('list',14)}List</button></div></div></div>`},
 {name:'Secondary actions', html:`<div class="av-page-head"><div class="av-page-head__text"><span class="av-eyebrow">Avistar Demo Org</span><h1 class="av-page-head__title">All clients</h1><p class="av-page-head__sub">10 clients · 30 cloud accounts</p></div><div class="av-page-head__actions" style="gap:10px"><button class="av-btn av-btn--secondary">Portfolio report</button><button class="av-btn av-btn--primary">${ic('plus',14,2.2)}Add client</button></div></div>`},
]},

{ id:'posture-score', label:'Posture score', desc:'Hero card. Ring with brand-gradient value, gradient numeral, rating + delta chip, next-step hint, link. SVG ring = lightweight fallback. The production dot-matrix ring lives in Cards & graphs › Posture score card.',
css:`.av-score-card{position:relative;overflow:hidden;isolation:isolate;display:flex;flex-wrap:wrap;align-items:center;gap:24px;padding:24px;border:1px solid var(--av-border-subtle-01);border-radius:var(--av-radius-2xl);background:radial-gradient(90% 120% at 0% 100%,var(--av-background-glow-signal),transparent 60%),radial-gradient(80% 110% at 100% 0%,var(--av-background-glow-ion),transparent 60%),var(--av-layer-01)}
.av-score-ring{position:relative;width:min(160px,100%);height:160px;flex-shrink:0}
.av-score-ring svg{display:block;width:100%;height:100%;transform:rotate(-90deg)}
.av-score-ring__track{stroke:var(--av-layer-04);stroke-dasharray:2 4}
.av-score-ring__value{stroke-linecap:round;transition:stroke-dashoffset 1.2s var(--av-ease-standard)}
.av-score-ring__center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}
.av-score-ring__num{font-size:44px;font-weight:600;letter-spacing:-0.04em;line-height:1;font-variant-numeric:tabular-nums;background:var(--av-gradient-brand-45);-webkit-background-clip:text;background-clip:text;color:transparent}
.av-score-ring__of{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-score-card__body{position:relative;flex:1;min-width:min(180px,100%);display:flex;flex-direction:column;gap:10px}
.av-score-card__rating{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:20px;font-weight:600;letter-spacing:-0.02em}
.av-score-card__hint{margin:0;font-size:14px;line-height:1.5;color:var(--av-text-tertiary)}.av-score-card__hint b{color:var(--av-text-primary);font-weight:500}
.av-score-ring--sm{width:96px;height:96px}.av-score-ring--sm .av-score-ring__num{font-size:24px}`,
variants:(() => { const ring = (v, cls = '', id = 'g1') => { const C = 389.6; return `<div class="av-score-ring ${cls}"><svg viewBox="0 0 140 140" aria-hidden="true"><defs><linearGradient id="${id}" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#FF4B1F"/><stop offset="1" stop-color="#1FDDFF"/></linearGradient></defs><circle class="av-score-ring__track" cx="70" cy="70" r="62" fill="none" stroke-width="10"/><circle class="av-score-ring__value" cx="70" cy="70" r="62" fill="none" stroke="url(#${id})" stroke-width="10" stroke-dasharray="${C}" stroke-dashoffset="${(C * (1 - v / 100)).toFixed(1)}"/></svg><div class="av-score-ring__center"><span class="av-score-ring__num">${v}</span><span class="av-score-ring__of">/ 100</span></div></div>`; }; return [
 {name:'Card', html:`<div class="av-score-card"><div class="av-weave" aria-hidden="true"></div>
  ${ring(64)}
  <div class="av-score-card__body"><span class="av-eyebrow">Posture score</span><div class="av-score-card__rating">Fair<span class="av-tag av-tag--delta">${ic('up',12,2.2)}6 this week</span></div><p class="av-score-card__hint">Close the 2 public buckets to reach <b>71</b>. That's about 4 minutes of work.</p><a class="av-link av-link--action" href="#" style="font-size:13px">Start with this fix${ic('arrow',14,2)}</a></div>
</div>`},
 {name:'Ring sizes', html:`<div class="av-row" style="gap:32px">${ring(86,'','g2')}${ring(58,'av-score-ring--sm','g3')}</div>`},
]; })()},

{ id:'kpi', label:'KPI tile', desc:'4-up grid with hairline dividers. Glyph + label + sparkline · big number + unit · delta. Ion = improving, Orange = worsening. Glow tint per tile.',
css:`.av-kpi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-xl);background:var(--av-layer-01);overflow:hidden}
.av-kpi{position:relative;overflow:hidden;isolation:isolate;display:flex;flex-direction:column;gap:14px;min-width:0;padding:20px;border:0;box-shadow:var(--av-shadow-hairline);background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;transition:filter var(--av-duration-fast)}
.av-kpi:hover{filter:brightness(1.12)}
.av-kpi--ion{background:radial-gradient(80% 100% at 100% 0%,color-mix(in srgb,var(--av-support-low) 9%,transparent),transparent 65%)}
.av-kpi--signal{background:radial-gradient(80% 100% at 100% 0%,color-mix(in srgb,var(--av-support-critical) 12%,transparent),transparent 65%)}
.av-kpi__head{display:flex;justify-content:space-between;align-items:center;gap:8px}
.av-kpi__label{display:flex;align-items:center;gap:10px;min-width:0;font-size:13px;color:var(--av-text-secondary);white-space:nowrap}
.av-kpi__glyph{width:28px;height:28px;flex-shrink:0;object-fit:contain}
.av-kpi__spark{flex-shrink:1;min-width:40px}
.av-kpi__spark path{stroke-dasharray:1;animation:av-draw 1.2s var(--av-ease-standard) both}
.av-kpi__value{display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}
.av-kpi__num{font-size:34px;font-weight:600;letter-spacing:-0.035em;line-height:1;font-variant-numeric:tabular-nums}
.av-kpi__unit{font-size:13px;color:var(--av-text-helper)}
.av-kpi__delta{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--av-text-info)}
.av-kpi__delta--up{color:var(--av-support-high)}`,
variants:(() => { const k = (g, l, n, u, d, up, data, tint) => `  <button class="av-kpi av-kpi--${tint}"><div class="av-kpi__head"><span class="av-kpi__label"><img class="av-kpi__glyph" src="assets/icons-glass/${g}.svg" alt="">${l}</span><svg class="av-kpi__spark" width="72" height="24" viewBox="0 0 72 24" fill="none"><path d="${spark(data)}" stroke="${up ? 'var(--av-support-high)' : 'var(--av-support-low)'}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1"/></svg></div><div class="av-kpi__value"><span class="av-kpi__num">${n}</span><span class="av-kpi__unit">${u}</span></div><span class="av-kpi__delta${up ? ' av-kpi__delta--up' : ''}">${ic(up ? 'up' : 'down',12,2.2)}${d}</span></button>`; return [
 {name:'Grid', html:`<div class="av-kpi-grid">
${k('alert','Open findings','293','across 139 resources','12 fewer than last scan',0,[320,310,318,300,305,296,300,293],'ion')}
${k('threat','Critical + high','69','need action','3 new since Oct 6',1,[60,72,64,66,62,63,60,69],'signal')}
${k('fingerprint','Risky identities','18','of 48 non-human','2 fewer this week',0,[24,23,23,22,22,21,20,18],'ion')}
${k('cloud','Coverage','2/3','accounts scanned','1 waiting on permissions',1,[1,1,1,1,2,2,2,2],'signal')}
</div>`},
 {name:'Single', html:`<div class="av-kpi-grid" style="max-width:320px">${k('alert','Open findings','293','across 139 resources','12 fewer than last scan',0,[320,310,318,300,305,296,300,293],'ion')}</div>`},
]; })()},

{ id:'client-card', label:'Client card', desc:'Intro picker card — dashed border, 4px radius. Name + meta, posture numeral coloured by scale, provider mono tags, footer with status dot and “Open →”. Archived = 50% + not-allowed.',
css:`.av-client-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,250px),1fr));gap:12px}
.av-client-card{position:relative;display:flex;flex-direction:column;gap:14px;width:100%;min-height:168px;padding:18px;border:1px dashed var(--av-border-dashed);border-radius:var(--av-radius-xs);background:var(--av-layer-intro);color:var(--av-text-primary);font:inherit;text-align:left;cursor:pointer;animation:av-slide-up .5s var(--av-ease-enter) both;transition:border-color var(--av-duration-base),background var(--av-duration-base),transform var(--av-duration-base)}
.av-client-card:hover{border-color:var(--av-border-dashed-hover);background:var(--av-layer-intro-hover);transform:translateY(-2px)}
.av-client-card:disabled{opacity:.5;cursor:not-allowed;transform:none}
.av-client-card__top{display:flex;align-items:flex-start;gap:12px}
.av-client-card__id{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}
.av-client-card__name{font-size:16px;font-weight:500;letter-spacing:-0.01em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-client-card__meta{font-size:13px;color:var(--av-text-meta)}
.av-client-card__score{display:flex;flex-direction:column;align-items:flex-end;gap:2px}
.av-client-card__num{font:500 22px/1 var(--av-font-mono)}
.av-client-card__label{font:10px var(--av-font-mono);letter-spacing:.1em;color:var(--av-text-label)}
.av-client-card__tags{display:flex;flex-wrap:wrap;gap:6px}
.av-client-card__foot{margin-top:auto;display:flex;align-items:center;gap:10px;padding-top:12px;border-top:1px solid var(--av-border-divider);font-size:12px;color:var(--av-text-meta)}
.av-client-card__dot{width:6px;height:6px;border-radius:50%;flex-shrink:0;background:currentColor}
.av-client-card__status{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-client-card__open{color:var(--av-text-primary)}
.av-posture--poor{color:var(--av-posture-poor)}.av-posture--fair{color:var(--av-posture-fair)}.av-posture--good{color:var(--av-posture-good)}.av-posture--none{color:var(--av-support-neutral)}`,
variants:(() => { const c = (n, m, s, cls, tags, foot, dis) => `  <button class="av-client-card"${dis ? ' disabled' : ''}>
    <span class="av-client-card__top"><span class="av-client-card__id"><span class="av-client-card__name">${n}</span><span class="av-client-card__meta">${m}</span></span><span class="av-client-card__score"><span class="av-client-card__num av-posture--${cls}">${s}</span><span class="av-client-card__label">POSTURE</span></span></span>
    <span class="av-client-card__tags">${tags.map(t => `<span class="av-tag av-tag--mono">${t}</span>`).join('')}</span>
    <span class="av-client-card__foot"><span class="av-client-card__dot av-posture--${cls}"></span><span class="av-client-card__status">${foot}</span>${dis ? '' : '<span class="av-client-card__open">Open →</span>'}</span>
  </button>`; return [
 {name:'Grid · all states', html:`<div class="av-client-grid">
${c('Hydroponic Cloud','AgriTech · 3 accounts',64,'poor',['AWS','AZURE','GCP'],'293 open · scanned 2h ago')}
${c('Ashgrove Health','Healthcare · 4 accounts',78,'fair',['AWS','AZURE'],'141 open · scanned 40m ago')}
${c('Corvane','SaaS · 5 accounts',86,'good',['AWS','AZURE','GCP'],'38 open · scanned 15m ago')}
${c('Acme Health','Archived · no accounts','—','none',[],'Archived',true)}
</div>`},
 {name:'Poor', html:`<div style="max-width:300px">${c('Northpeak Clinics','Healthcare · 2 accounts',58,'poor',['AZURE'],'204 open · scanned 5h ago')}</div>`},
 {name:'Good', html:`<div style="max-width:300px">${c('Harbor Dental Group','Healthcare · 1 account',91,'good',['AWS'],'12 open · scanned 1h ago')}</div>`},
]; })()},

{ id:'org-row', label:'Organization row', desc:'Mascot avatar with initials badge, name + meta, mono role tag, round settings button, arrow. Selected = solid border + inverse arrow.',
css:`.av-org-list{display:flex;flex-direction:column;gap:10px}
.av-org-row{position:relative;display:flex;align-items:center;gap:16px;width:100%;min-height:76px;padding:14px 18px;border:1px dashed var(--av-border-dashed);border-radius:var(--av-radius-xs);background:transparent;color:var(--av-text-primary);font:inherit;text-align:left;cursor:pointer;transition:border-color var(--av-duration-base),background var(--av-duration-base)}
.av-org-row:hover{border-color:var(--av-border-dashed-hover);background:var(--av-background-hover)}
.av-org-row[aria-pressed="true"]{border-style:solid;border-color:var(--av-border-selected);background:var(--av-background-hover)}
.av-org-row__avatar{position:relative;width:52px;height:52px;flex-shrink:0;margin:-4px 0}
.av-org-row__avatar img{width:100%;height:100%;object-fit:contain}
.av-org-row__init{position:absolute;right:-6px;bottom:-2px;min-width:24px;height:20px;padding:0 5px;border-radius:6px;background:var(--av-layer-05);border:1px solid var(--av-border-strong-01);display:flex;align-items:center;justify-content:center;font:600 10px var(--av-font-mono)}
.av-org-row__text{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}
.av-org-row__name{font-size:16px;font-weight:500;letter-spacing:-0.01em}
.av-org-row__meta{font-size:13px;color:var(--av-text-meta)}
.av-org-row__actions{display:flex;align-items:center;gap:12px}`,
variants:(() => { const o = (m, i, c, n, meta, role, sel) => `  <div class="av-org-row" role="button" tabindex="0"${sel ? ' aria-pressed="true"' : ''}>
    <span class="av-org-row__avatar"><img src="assets/mascots/${m}.png" alt=""><span class="av-org-row__init" style="color:${c}">${i}</span></span>
    <span class="av-org-row__text"><span class="av-org-row__name">${n}</span><span class="av-org-row__meta">${meta}</span></span>
    <span class="av-org-row__actions"><span class="av-tag av-tag--mono av-tag--role">${role}</span><button class="av-icon-btn av-icon-btn--round" aria-label="Settings for ${n}">${ic('gear',18,1.6)}</button><button class="av-icon-btn av-icon-btn--arrow"${sel ? ' aria-pressed="true"' : ''} aria-label="Open">${ic(sel ? 'chevDown' : 'arrow',14,2)}</button></span>
  </div>`; return [
 {name:'List', html:`<div class="av-org-list">
${o('shield','AD','var(--av-support-critical)','Avistar Demo Org','10 clients · 30 cloud accounts','OWNER')}
${o('key','RP','var(--av-support-low)','Ridgeway Partners MSP','3 clients · 7 cloud accounts','ANALYST')}
</div>`},
 {name:'Selected', html:o('shield','AD','var(--av-support-critical)','Avistar Demo Org','10 clients · 30 cloud accounts','OWNER',true)},
]; })()},

{ id:'welcome', label:'Welcome hero', desc:'Intro screen: brand chip, display heading with gradient name, intro copy, list label, XL primary.',
css:`.av-brand-chip{align-self:flex-start;display:inline-flex;align-items:center;gap:8px;padding:6px 12px;border:1px solid var(--av-border-strong-02);border-radius:var(--av-radius-sm);font:500 11px var(--av-font-mono);letter-spacing:.14em;color:var(--av-text-muted-intro)}
.av-brand-chip img{width:14px;height:12px}
.av-welcome{display:flex;flex-direction:column;gap:28px;max-width:640px}
.av-welcome__title{margin:0;font-size:clamp(40px,4.6vw,72px);font-weight:600;letter-spacing:-0.045em;line-height:.98;text-wrap:balance}
.av-welcome__lead{margin:0;font-size:17px;line-height:1.55;color:var(--av-text-muted-intro);max-width:30em}`,
variants:[{name:'Hero', html:`<div class="av-welcome">
  <span class="av-brand-chip"><img src="assets/mark-shape2.svg" alt="">SECURITY COMMAND CENTER</span>
  <h1 class="av-welcome__title">Welcome back, <span class="av-text-gradient">Zalak</span>.</h1>
  <p class="av-welcome__lead">Choose an organization, then the client whose cloud you want to review. You can switch either one later from the account menu.</p>
  <span class="av-eyebrow" style="color:var(--av-text-label)">Organizations</span>
  <button class="av-btn av-btn--primary av-btn--xl" style="align-self:flex-start">${ic('plus',16,2.2)}Create organization</button>
</div>`}]},

{ id:'intro-frame', label:'Intro frame', desc:'Dashed panel (16px radius), centred statement and mono stats footer.',
css:`.av-frame{position:relative;display:flex;flex-direction:column;border:1px dashed var(--av-border-dashed);border-radius:var(--av-radius-2xl);padding:24px}
.av-frame__body{flex:1;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px}
.av-frame__statement{margin:0;font-size:clamp(24px,2.6vw,40px);font-weight:600;letter-spacing:-0.035em;line-height:1.08}
.av-frame__stats{display:flex;justify-content:space-between;gap:16px;padding:0 16px;font:500 11px var(--av-font-mono);letter-spacing:.14em;color:var(--av-text-helper)}`,
variants:[{name:'Frame', html:`<div class="av-frame" style="min-height:340px">
  <div class="av-frame__body"><p class="av-frame__statement">Secure non-human identities<br>with <span class="av-text-gradient">AI-powered</span> filtering.</p></div>
  <div class="av-frame__stats"><span>2 ORGANIZATIONS</span><span>LAST SIGN-IN · TODAY 09:12</span></div>
</div>`}]},

{ id:'avatar', label:'Avatar', desc:'Initial circle (Ion letter on layer-03), square org/identity avatar, stacked group, presence dot.',
css:`.av-avatar{position:relative;display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;flex-shrink:0;border-radius:50%;background:var(--av-layer-03);border:1px solid var(--av-border-strong-01);font:600 12px var(--av-font-sans);color:var(--av-text-info)}
.av-avatar--sm{width:24px;height:24px;font-size:10px}.av-avatar--md{width:32px;height:32px}.av-avatar--lg{width:44px;height:44px;font-size:15px}
.av-avatar--square{border-radius:var(--av-radius-lg);width:36px;height:36px;font:600 11px var(--av-font-mono);color:var(--av-support-medium)}
.av-avatar__presence{position:absolute;right:-1px;bottom:-1px;width:10px;height:10px;border-radius:50%;background:var(--av-support-success);border:2px solid var(--av-background)}
.av-avatar-stack{display:flex}.av-avatar-stack .av-avatar{margin-left:-8px;border:2px solid var(--av-layer-01)}.av-avatar-stack .av-avatar:first-child{margin-left:0}`,
variants:[
 {name:'Sizes', html:`<div class="av-row" style="gap:20px"><span class="av-avatar av-avatar--sm">Z</span><span class="av-avatar">Z</span><span class="av-avatar av-avatar--md">Z</span><span class="av-avatar av-avatar--lg">ZP</span></div>`},
 {name:'Square', html:`<div class="av-row"><span class="av-avatar av-avatar--square">NW</span><span class="av-avatar av-avatar--square" style="color:var(--av-support-low)">CI</span></div>`},
 {name:'Stack', html:`<span class="av-avatar-stack"><span class="av-avatar av-avatar--md">ZP</span><span class="av-avatar av-avatar--md" style="color:var(--av-support-medium)">AK</span><span class="av-avatar av-avatar--md" style="color:var(--av-support-high)">MR</span><span class="av-avatar av-avatar--md" style="color:var(--av-text-tertiary)">+4</span></span>`},
 {name:'With presence + text', html:`<div class="av-user"><span class="av-avatar av-avatar--md">Z<span class="av-avatar__presence"></span></span><span class="av-user__text"><span class="av-user__name">Zalak</span><span class="av-user__mail">zalak@avistar.ai</span></span></div>`},
]},

{ id:'fix-list', label:'Fix list', desc:'“Fix these first” — ranked findings with severity, resource, effort and one action each.',
css:`.av-fix-list{border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01);overflow:hidden}
.av-fix{display:grid;grid-template-columns:28px minmax(0,1fr) auto auto;gap:16px;align-items:center;padding:14px 16px;border-bottom:1px solid var(--av-border-subtle-00);transition:background var(--av-duration-fast)}
.av-fix:last-child{border-bottom:0}.av-fix:hover{background:var(--av-layer-hover-01)}
.av-fix__rank{font:500 12px var(--av-font-mono);color:var(--av-text-label)}
.av-fix__body{min-width:0;display:flex;flex-direction:column;gap:4px}
.av-fix__title{font-size:14px;font-weight:500}.av-fix__meta{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-fix__effort{font-size:12px;color:var(--av-text-helper);white-space:nowrap}
.av-section-head{display:flex;align-items:center;gap:12px}.av-section-head img{width:52px;height:52px;object-fit:contain;margin:-8px 0 -8px -6px}
.av-section-head__title{margin:0;font-size:18px;font-weight:600;letter-spacing:-0.015em}.av-section-head__sub{font-size:13px;color:var(--av-text-helper)}`,
variants:[{name:'List', html:`<div class="av-stack" style="gap:14px"><div class="av-section-head"><img src="assets/mascots/magnifier.png" alt=""><div class="av-stack" style="gap:4px"><h2 class="av-section-head__title">Fix these first</h2><span class="av-section-head__sub">Ranked by score impact. One fix each.</span></div></div>
<div class="av-fix-list">
  <div class="av-fix"><span class="av-fix__rank">01</span><span class="av-fix__body"><span class="av-fix__title">S3 bucket is publicly readable</span><span class="av-fix__meta"><span class="av-tag av-tag--critical"><span class="av-tag__dot"></span>Critical</span>hci-exports-prod · +4 pts</span></span><span class="av-fix__effort">~2 min</span><button class="av-btn av-btn--secondary av-btn--sm">Fix</button></div>
  <div class="av-fix"><span class="av-fix__rank">02</span><span class="av-fix__body"><span class="av-fix__title">Access key unused for 412 days</span><span class="av-fix__meta"><span class="av-tag av-tag--high"><span class="av-tag__dot"></span>High</span>AKIA…7Q2F · +2 pts</span></span><span class="av-fix__effort">~1 min</span><button class="av-btn av-btn--secondary av-btn--sm">Fix</button></div>
  <div class="av-fix"><span class="av-fix__rank">03</span><span class="av-fix__body"><span class="av-fix__title">Role allows iam:* on all resources</span><span class="av-fix__meta"><span class="av-tag av-tag--medium"><span class="av-tag__dot"></span>Medium</span>ci-deploy-runner · +1 pt</span></span><span class="av-fix__effort">~5 min</span><button class="av-btn av-btn--secondary av-btn--sm">Fix</button></div>
</div></div>`}]},

{ id:'findings-tree', label:'Findings tree', desc:'Resource → findings hierarchy. One-line child rows hang off a vertical guide with curved connectors; the guide lights up (Ion) down to the selected finding. One finding open at a time; details use tabs (Fix steps · Evidence) instead of stacked panels.',
css:`.av-ftree{display:flex;flex-direction:column;padding:4px 0 12px var(--av-ftree-indent,58px)}
.av-ftree__node{position:relative;padding-left:34px}
.av-ftree__node::before{content:"";position:absolute;left:0;top:0;bottom:0;width:1.5px;background:var(--av-border-strong-02)}
.av-ftree__node:last-child::before{display:none}
.av-ftree__node::after{content:"";position:absolute;left:0;top:0;width:22px;height:22px;border-left:1.5px solid var(--av-border-strong-02);border-bottom:1.5px solid var(--av-border-strong-02);border-bottom-left-radius:10px}
.av-ftree__node.is-past::before{background:var(--av-border-interactive)}
.av-ftree__node.is-active::after{border-color:var(--av-border-interactive)}
.av-ftree__row{display:flex;align-items:center;gap:10px;min-height:44px;padding:0 6px 0 10px;border-radius:10px;cursor:pointer}
.av-ftree__node.is-active .av-ftree__row{background:var(--av-layer-02)}
.av-ftree__dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;background:currentColor;box-shadow:0 0 0 3px color-mix(in srgb,currentColor 18%,transparent)}
.av-ftree__title{flex:1;min-width:0;font-size:14px;font-weight:500;color:var(--av-text-tertiary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-ftree__node.is-active .av-ftree__title{font-weight:600;color:var(--av-text-primary)}
.av-ftree__code{font:11px var(--av-font-mono);color:var(--av-text-helper);white-space:nowrap}
.av-ftree__detail{display:flex;flex-direction:column;gap:12px;padding:6px 6px 14px 28px}
.av-ftree__desc{margin:0;font-size:13.5px;line-height:1.5;color:var(--av-text-secondary);text-wrap:pretty}
.av-ftree__bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px}
.av-seg{display:flex;flex-shrink:0;gap:2px;padding:3px;border-radius:8px;border:1px solid var(--av-border-subtle-01)}
.av-seg__btn{height:28px;padding:0 10px;white-space:nowrap;border:0;border-radius:6px;background:transparent;color:var(--av-text-helper);font:500 12px var(--av-font-sans,inherit);cursor:pointer}
.av-seg__btn.is-on{background:var(--av-layer-03);color:var(--av-text-primary)}
.av-ftree__steps{display:flex;flex-direction:column;gap:6px}
.av-ftree__step{display:grid;grid-template-columns:24px minmax(0,1fr);gap:6px;font-size:13.5px;line-height:1.5;color:var(--av-text-secondary)}
.av-ftree__step span:first-child{font:11.5px var(--av-font-mono);color:var(--av-text-helper);padding-top:2px}`,
variants:(() => { const node = (sev, label, title, code, cls, open) => `  <div class="av-ftree__node ${cls}">
    <div class="av-ftree__row"><span class="av-ftree__dot" style="color:var(--av-support-${sev})"></span><span class="av-ftree__title">${title}</span><span class="av-ftree__code">${code}</span><span class="av-tag av-tag--${sev}"><span class="av-tag__dot"></span>${label}</span><button class="av-btn av-btn--primary av-btn--sm">Remediate</button></div>${open ? `
    <div class="av-ftree__detail">
      <p class="av-ftree__desc">This role can do anything in the account, with no conditions.</p>
      <div class="av-ftree__bar"><div class="av-seg"><button class="av-seg__btn is-on">Fix steps</button><button class="av-seg__btn">Evidence</button></div><span class="av-row" style="gap:12px;font-size:12px;color:var(--av-text-tertiary)">SOC 2 · ISO 27001 · NIST · HIPAA</span></div>
      <div class="av-ftree__steps"><div class="av-ftree__step"><span>01</span><span>Generate a least-privilege policy from CloudTrail activity.</span></div><div class="av-ftree__step"><span>02</span><span>Attach the new policy and detach AdministratorAccess.</span></div><div class="av-ftree__step"><span>03</span><span>Use just-in-time elevation for rare admin tasks.</span></div></div>
    </div>` : ''}
  </div>`;
 return [
 {name:'Open resource', note:'Click a row to select it. The guide fills Ion down to the selected node (.is-past on earlier nodes, .is-active on the selected one).', html:`<div style="border:1px solid var(--av-border-subtle-00);border-radius:14px;background:var(--av-layer-01);overflow:hidden;width:100%"><div style="display:flex;align-items:center;gap:14px;padding:14px 20px"><span class="av-mono" style="font-size:11px;color:var(--av-text-helper)">01</span><span style="display:flex;flex-direction:column;gap:4px;min-width:0"><span style="font-size:14px;font-weight:500">ci-deploy-role</span><span class="av-mono" style="font-size:11.5px;color:var(--av-text-helper)">arn:aws:iam::010545334631:role/ci-deploy-role</span></span></div>
<div class="av-ftree">
${node('medium','Medium','Admin rights unused for 90 days','stale','is-past',false)}
${node('high','High','AdministratorAccess attached directly','admin','is-active',true)}
${node('low','Low','No permission boundary set','boundary','',false)}
</div></div>`},
 {name:'Collapsed rows', html:`<div class="av-ftree" style="--av-ftree-indent:0;width:100%">
${node('critical','Critical','Bucket policy allows public read','public','is-active',false)}
${node('high','High','Versioning disabled','versioning','',false)}
${node('medium','Medium','No lifecycle rule','lifecycle','',false)}
</div>`},
 ]; })()},

{ id:'buddy-launcher', label:'Buddy launcher', desc:'Floating “Ask Avistar Buddy” pill. Fixed 24px from the bottom, centred in the main column (not the viewport) so it tracks the sidebar width.',
css:`.av-buddy{position:fixed;bottom:24px;left:calc((var(--av-sidebar-w) + 100vw) / 2);transform:translateX(-50%);z-index:var(--av-z-header);display:flex;align-items:center;gap:10px;height:56px;padding:0 22px 0 6px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:#060708 url(assets/buddy-bg.jpg) 30% 60%/cover no-repeat;color:#FFFFFF;font-size:15px;font-weight:600;text-shadow:0 1px 8px rgba(0,0,0,.6);box-shadow:0 14px 36px rgba(0,0,0,.45);cursor:pointer;transition:left .25s cubic-bezier(.2,.7,.2,1),transform .2s}
.av-buddy:hover{border-color:rgba(255,255,255,.35);transform:translateX(-50%) translateY(-2px)}
.av-shell--collapsed .av-buddy{left:calc((var(--av-sidebar-w-collapsed) + 100vw) / 2)}
.av-buddy img{width:46px;height:46px;object-fit:contain}`,
variants:[{name:'Default', note:'Shown in place here; in product it is position:fixed.', html:`<button class="av-buddy" style="position:relative;left:auto;bottom:auto;transform:none"><img src="assets/mascots/magnifier.png" alt="">Ask Avistar Buddy</button>`, code:`<button class="av-buddy" aria-label="Ask Avistar Buddy"><img src="assets/mascots/magnifier.png" alt="">Ask Avistar Buddy</button>`}]},

{ id:'charts', label:'Charts', desc:'Sparkline (72×24, 1.5 stroke), stacked severity bar, trend bars with brand gradient, legend rows.',
css:`.av-chart-card{display:flex;flex-direction:column;gap:14px;padding:20px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01)}
.av-chart-card__head{display:flex;justify-content:space-between;align-items:baseline;font-size:14px;font-weight:600}
.av-bars{display:flex;align-items:flex-end;gap:8px;height:160px;border-bottom:1px solid var(--av-border-subtle-01)}
.av-bars__bar{flex:1;border-radius:4px 4px 0 0;background:linear-gradient(0deg,var(--av-gradient-start),var(--av-gradient-end));transition:height .6s var(--av-ease-standard)}
.av-stackbar{display:flex;gap:2px;height:12px;border-radius:var(--av-radius-pill);overflow:hidden}
.av-legend{display:flex;flex-direction:column;gap:8px}.av-legend__row{display:flex;align-items:center;gap:10px;font-size:13px}
.av-legend__sw{width:10px;height:10px;border-radius:3px}.av-legend__n{flex:1;color:var(--av-text-secondary)}.av-legend__v{font-variant-numeric:tabular-nums;color:var(--av-text-helper)}`,
variants:[
 {name:'Sparklines', html:`<div class="av-row" style="gap:24px"><svg width="72" height="24" viewBox="0 0 72 24" fill="none"><path d="${spark([320,310,318,300,305,296,300,293])}" stroke="var(--av-support-low)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg><svg width="72" height="24" viewBox="0 0 72 24" fill="none"><path d="${spark([60,72,64,66,62,63,60,69])}" stroke="var(--av-support-high)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>`},
 {name:'Severity stack', html:`<div class="av-chart-card" style="max-width:420px"><div class="av-chart-card__head">Open by severity<span class="av-mono" style="font-size:11px;color:var(--av-text-helper)">293</span></div><div class="av-stackbar"><span style="flex:5;background:var(--av-support-critical)"></span><span style="flex:64;background:var(--av-support-high)"></span><span style="flex:133;background:var(--av-support-medium)"></span><span style="flex:91;background:var(--av-support-low)"></span></div><div class="av-legend"><div class="av-legend__row"><span class="av-legend__sw" style="background:var(--av-support-critical)"></span><span class="av-legend__n">Critical</span><span class="av-legend__v">5</span></div><div class="av-legend__row"><span class="av-legend__sw" style="background:var(--av-support-high)"></span><span class="av-legend__n">High</span><span class="av-legend__v">64</span></div><div class="av-legend__row"><span class="av-legend__sw" style="background:var(--av-support-medium)"></span><span class="av-legend__n">Medium</span><span class="av-legend__v">133</span></div><div class="av-legend__row"><span class="av-legend__sw" style="background:var(--av-support-low)"></span><span class="av-legend__n">Low</span><span class="av-legend__v">91</span></div></div></div>`},
 {name:'Trend bars', html:`<div class="av-chart-card" style="max-width:420px"><div class="av-chart-card__head">Findings by week<span class="av-eyebrow">12 weeks</span></div><div class="av-bars">${[40,55,35,70,62,85,48,66,90,58,52,44].map(h => `<span class="av-bars__bar" style="height:${h}%"></span>`).join('')}</div></div>`},
]},

{ id:'empty-state', label:'Empty & error', desc:'Mascot + title + one line + one action. Dashed border for empty, solid for error.',
css:`.av-empty{display:flex;flex-direction:column;align-items:center;gap:12px;padding:40px 24px;border:1px dashed var(--av-border-strong-01);border-radius:var(--av-radius-2xl);text-align:center}
.av-empty--error{border-style:solid;border-color:var(--av-border-subtle-00);background:var(--av-layer-01)}
.av-empty__art{width:72px;height:72px;object-fit:contain}
.av-empty__title{margin:0;font-size:16px;font-weight:600}
.av-empty__text{margin:0;max-width:34ch;font-size:13px;line-height:1.5;color:var(--av-text-tertiary)}
.av-empty--inline{flex-direction:row;text-align:left;padding:10px;border:0;gap:10px;font-size:13px}`,
variants:[
 {name:'Empty', html:`<div class="av-empty"><img class="av-empty__art" src="assets/mascots/bucket.png" alt=""><h3 class="av-empty__title">No clouds connected</h3><p class="av-empty__text">Connect AWS, GCP or Azure to start mapping machine identities.</p><button class="av-btn av-btn--primary">${ic('plus',14,2.2)}Connect a cloud</button></div>`},
 {name:'Error', html:`<div class="av-empty av-empty--error"><img class="av-empty__art" src="assets/mascots/chip.png" alt=""><h3 class="av-empty__title">Couldn't load findings</h3><p class="av-empty__text">The scanner timed out. Your data is safe — try again.</p><button class="av-btn av-btn--secondary">${ic('refresh',14)}Retry</button></div>`},
 {name:'No results', html:`<div class="av-empty"><img class="av-empty__art" src="assets/mascots/magnifier.png" alt=""><h3 class="av-empty__title">No clients match “zeta”</h3><button class="av-btn av-btn--ghost">Clear search</button></div>`},
 {name:'Inline (in menu)', html:`<div class="av-empty av-empty--inline"><img src="assets/mascots/bucket.png" alt="" style="width:44px;height:44px;object-fit:contain">This client is archived and has no accounts.</div>`},
]},
];

return { DOC_CSS, RESPONSIVE_CSS, FOUNDATIONS, PATTERNS };
})();
const K = (() => {
const { ic } = C;
// Avistar Dashboard — cards & graphs (every card + chart used on the dashboard pages)

const ring = (vals, cols, size, num, label, o = {}) => o.grad ? solidRing(vals[0], size, num, o.fs || 26, label) : solidDonut(vals, cols, size, num, label, { hi: o.hi, fs: o.fs || 26 });
const head = (glyph, title, sub, tile) => `<div class="av-card__head">${tile ? `<span class="av-card__tile"><img src="assets/icons-glass/${glyph}.svg" alt=""></span>` : `<img class="av-card__glyph" src="assets/icons-glass/${glyph}.svg" alt="">`}<span class="av-card__heading"><h2 class="av-card__title">${title}</h2>${sub ? `<span class="av-card__sub">${sub}</span>` : ''}</span></div>`;
const legend = rows => `<div class="av-legend-rows">${rows.map(([c, l, n, p]) => `<div class="av-legend-rows__row"><span class="av-legend-rows__dot" style="background:${c}"></span><span class="av-legend-rows__label">${l}</span><span class="av-legend-rows__n">${n}</span>${p != null ? `<span class="av-legend-rows__pct">${p}</span>` : ''}</div>`).join('')}</div>`;
const legendGrid = rows => `<div class="av-legend-grid">${rows.map(([c, l, n]) => `<div class="av-legend-grid__row"><span class="av-legend-rows__dot" style="background:${c}"></span><span class="av-legend-rows__label">${l}</span><span class="av-legend-rows__n">${n}</span></div>`).join('')}</div>`;
const SEVC = ['var(--av-support-critical)', 'var(--av-support-high)', 'var(--av-support-medium)', 'var(--av-support-low)'];
const INK = 'var(--av-text-primary)', MUT = 'var(--av-support-neutral)';

// severity trend geometry
const sevSeries = [212, 224, 219, 238, 256, 252, 271, 293, 305, 322, 338], NOW = 7, W = 400, H = 190;
const lo = Math.min(...sevSeries), hi = Math.max(...sevSeries), pad = (hi - lo) * .18;
const P = sevSeries.map((y, i) => [i / (sevSeries.length - 1) * W, H - 6 - (y - lo + pad * .3) / (hi - lo + pad) * (H - 20)]);
const curve = pts => pts.map((p, i) => { if (!i) return `M${p[0].toFixed(1)} ${p[1].toFixed(1)}`; const a = pts[i - 1], m = (p[0] - a[0]) / 2; return `C${(a[0] + m).toFixed(1)} ${a[1].toFixed(1)} ${(p[0] - m).toFixed(1)} ${p[1].toFixed(1)} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`; }).join(' ');
const solid = curve(P.slice(0, NOW + 1)), fc = curve(P.slice(NOW)), area = solid + ` L${P[NOW][0].toFixed(1)} ${H} L0 ${H} Z`;
const pct = (v, t) => (v / t * 100).toFixed(1) + '%';
const MV = [3010, 8690, 5070, 6180, 4590, 7860, 4080, 9100, 5960, 4950, 8010, 2330, 3020, 7570, 4690, 5860, 4190, 7180, 3700, 8850, 5620, 4590, 7380, 2240], MN = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], MMX = Math.max(...MV);

const CARDS_CSS = `.av-card{position:relative;overflow:hidden;isolation:isolate;display:flex;flex-direction:column;gap:18px;min-width:0;padding:20px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-layer-01)}
.av-card--flush{padding:0;gap:0}
.av-card--glow-ion{background:radial-gradient(80% 90% at 100% 0%,color-mix(in srgb,var(--av-support-low) 10%,transparent),transparent 60%),var(--av-layer-01)}
.av-card--glow-signal{background:radial-gradient(80% 90% at 100% 0%,color-mix(in srgb,var(--av-support-critical) 10%,transparent),transparent 60%),var(--av-layer-01)}
.av-card--glow-hero{border-color:var(--av-border-subtle-01);background:radial-gradient(70% 140% at 0% 100%,color-mix(in srgb,var(--av-support-high) 14%,transparent),transparent 60%),radial-gradient(60% 120% at 100% 0%,color-mix(in srgb,var(--av-support-low) 10%,transparent),transparent 60%),var(--av-layer-01)}
.av-card__head{display:flex;align-items:center;gap:10px;min-width:0}
.av-card__glyph{width:28px;height:28px;flex-shrink:0;object-fit:contain}
.av-card__tile{width:44px;height:44px;flex-shrink:0;border-radius:12px;background:var(--av-layer-04);display:flex;align-items:center;justify-content:center}.av-card__tile img{width:28px;height:28px}
.av-card__heading{display:flex;flex-direction:column;gap:2px;min-width:0}
.av-card__title{margin:0;font-size:18px;font-weight:600;letter-spacing:-0.015em}
.av-card__sub{font-size:13px;color:var(--av-text-helper)}
.av-card__rule{border-top:1px dashed var(--av-border-strong-01)}
.av-weave--bl{left:0;right:auto;top:auto;bottom:0;background-position:left bottom;-webkit-mask-image:radial-gradient(100% 100% at 0% 100%,#000,transparent 72%);mask-image:radial-gradient(100% 100% at 0% 100%,#000,transparent 72%)}
.av-card .av-weave{z-index:-1}

/* v2 solid donut (replaces dot-matrix) */
.av-sdn{position:relative;aspect-ratio:1;margin:0 auto;flex-shrink:0;max-width:100%}
.av-sdn__track,.av-sdn__seg{position:absolute;inset:2%;border-radius:50%;-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 20%),#000 calc(100% - 20%));mask:radial-gradient(farthest-side,transparent calc(100% - 20%),#000 calc(100% - 20%));transition:opacity .25s,transform .25s var(--av-ease-standard)}
.av-sdn__track{background:var(--av-layer-03)}
.av-sdn__c{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}
.av-sdn__num{font-weight:600;letter-spacing:-0.03em;line-height:1;font-variant-numeric:tabular-nums}.av-sdn__num--brand{background:linear-gradient(45deg,#FF4B1F,#1FDDFF);-webkit-background-clip:text;background-clip:text;color:transparent}.av-sdn__lbl{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-card:has(.av-legend-rows__row:nth-child(1):hover) .av-sdn__seg:not([data-i="0"]),.av-card:has(.av-sev-chip:nth-child(1):hover) .av-sdn__seg:not([data-i="0"]){opacity:.25}
.av-card:has(.av-legend-rows__row:nth-child(2):hover) .av-sdn__seg:not([data-i="1"]),.av-card:has(.av-sev-chip:nth-child(2):hover) .av-sdn__seg:not([data-i="1"]){opacity:.25}
.av-card:has(.av-legend-rows__row:nth-child(3):hover) .av-sdn__seg:not([data-i="2"]),.av-card:has(.av-sev-chip:nth-child(3):hover) .av-sdn__seg:not([data-i="2"]){opacity:.25}
.av-card:has(.av-legend-rows__row:nth-child(4):hover) .av-sdn__seg:not([data-i="3"]),.av-card:has(.av-sev-chip:nth-child(4):hover) .av-sdn__seg:not([data-i="3"]){opacity:.25}
.av-card:has(.av-legend-rows__row:nth-child(5):hover) .av-sdn__seg:not([data-i="4"]),.av-card:has(.av-sev-chip:nth-child(5):hover) .av-sdn__seg:not([data-i="4"]){opacity:.25}
/* legacy dot-matrix ring (unused in v2) */
.av-dotring{position:relative;aspect-ratio:1;max-width:100%;flex-shrink:0;margin:0 auto}
.av-dotring canvas{display:block;width:100%;height:100%}
.av-dotring__center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;pointer-events:none}
.av-dotring__num{font-weight:600;letter-spacing:-0.035em;line-height:1;font-variant-numeric:tabular-nums}
.av-dotring__num--brand{letter-spacing:-0.04em;background:var(--av-gradient-brand-45);-webkit-background-clip:text;background-clip:text;color:transparent}
.av-dotring__label{font:11px var(--av-font-mono);color:var(--av-text-helper)}
/* legends */
.av-legend-rows{display:flex;flex-direction:column}
.av-legend-rows__row{display:grid;grid-template-columns:10px minmax(0,1fr) auto 44px;align-items:center;gap:12px;height:48px;border-bottom:1px solid var(--av-layer-05);background:transparent;transition:background var(--av-duration-fast)}
.av-legend-rows__row:hover{background:var(--av-layer-02)}
.av-legend-rows__dot{width:10px;height:10px;border-radius:50%}
.av-legend-rows__label{font-size:14px;color:var(--av-text-secondary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-legend-rows__n{font-size:16px;font-weight:600;font-variant-numeric:tabular-nums}
.av-legend-rows__pct{text-align:right;font:12px var(--av-font-mono);color:var(--av-text-helper)}
.av-legend-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,150px),1fr));gap:0 20px}
.av-legend-grid__row{display:grid;grid-template-columns:10px minmax(0,1fr) auto;align-items:center;gap:10px;height:40px;border-bottom:1px solid var(--av-layer-05)}
.av-legend-grid .av-legend-rows__label{font-size:13px}.av-legend-grid .av-legend-rows__n{font-size:14px}
/* fix card */
.av-fix-card{--av-fix:var(--av-support-critical);position:relative;overflow:hidden;isolation:isolate;display:flex;flex-direction:column;gap:16px;padding:20px;border-radius:var(--av-radius-2xl);border:1px solid color-mix(in srgb,var(--av-fix) 22%,transparent);background:radial-gradient(110% 90% at 0% 0%,color-mix(in srgb,var(--av-fix) 13%,transparent),transparent 58%),linear-gradient(180deg,var(--av-layer-02),var(--av-layer-01));animation:av-slide-up .6s var(--av-ease-standard) both}
.av-fix-card--high{--av-fix:var(--av-support-high)}.av-fix-card--medium{--av-fix:var(--av-support-medium)}.av-fix-card--low{--av-fix:var(--av-support-low)}
.av-fix-card__top{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
.av-fix-card__orb{display:block;flex-shrink:0;width:56px;height:56px}
.av-sev-pill{--av-sev:var(--av-support-critical);font:500 11px var(--av-font-mono);letter-spacing:.06em;text-transform:uppercase;padding:3px 8px;border-radius:6px;border:1px solid color-mix(in srgb,var(--av-sev) 28%,transparent);background:color-mix(in srgb,var(--av-sev) 12%,transparent);color:var(--av-sev)}
.av-sev-pill--high{--av-sev:var(--av-support-high)}.av-sev-pill--medium{--av-sev:var(--av-support-medium)}.av-sev-pill--low{--av-sev:var(--av-support-low)}
.av-fix-card__body{display:flex;flex-direction:column;gap:6px}
.av-fix-card__title{font-size:16px;font-weight:600;line-height:1.3;letter-spacing:-0.01em}
.av-fix-card__meta{font-size:13px;color:var(--av-text-helper)}
.av-fix-card__stats{display:flex;flex-wrap:wrap;gap:16px;padding-top:14px;border-top:1px dashed var(--av-border-subtle-01)}
.av-fix-card__stat{display:flex;flex-direction:column;gap:2px}.av-fix-card__stat span{font-size:11px;color:var(--av-text-helper)}.av-fix-card__stat b{font-size:15px;font-weight:600}
.av-fix-card__gain{color:var(--av-text-info)}
.av-fix-card .av-btn{margin-top:auto;width:100%;height:44px}
.av-fix-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));gap:12px}
/* findings raised (bars) */
.av-bigstats{display:flex;flex-wrap:wrap;align-items:stretch;gap:16px 0}
.av-bigstat{display:flex;flex-direction:column;gap:10px;padding-right:28px}.av-bigstat+.av-bigstat{padding:0 0 0 28px;border-left:1px dashed var(--av-border-strong-01)}
.av-bigstat__k{font:13px var(--av-font-mono);color:var(--av-text-helper)}
.av-bigstat__v{font:500 clamp(36px,4vw,52px)/1 var(--av-font-mono);letter-spacing:-0.03em;font-variant-numeric:tabular-nums}
.av-bigstat__s{font-size:12px;color:var(--av-text-helper)}
.av-axis-note{display:flex;flex-direction:column;gap:6px;align-self:center;font:12px var(--av-font-mono);color:var(--av-text-helper)}.av-axis-note b{font-weight:400;color:var(--av-text-primary)}
.av-month-bars{position:relative;height:clamp(180px,24vw,260px);display:flex;align-items:flex-end}
.av-month-bars__col{flex:1;min-width:0;height:100%;display:flex;align-items:flex-end;justify-content:center;cursor:pointer}
.av-month-bars__bar{display:block;width:2px;border-radius:2px;background:var(--av-text-secondary);transition:height .9s var(--av-ease-standard),background .2s,width .2s}
.av-month-bars:hover .av-month-bars__bar{background:var(--av-border-strong-02)}
.av-month-bars__col:hover .av-month-bars__bar,.av-month-bars__col[aria-current="true"] .av-month-bars__bar{width:4px;background:var(--av-support-critical)}
.av-month-labels{display:flex}.av-month-labels span{flex:1;min-width:0;text-align:center;font-size:12px;color:var(--av-text-helper);white-space:nowrap}
/* severity trend (line) */
.av-trend{position:relative;width:100%;aspect-ratio:400/190;margin-top:28px}
.av-trend svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.av-trend__grid{stroke:var(--av-border-subtle-01)}
.av-trend__now{position:absolute;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:var(--av-support-low);box-shadow:0 0 0 3px var(--av-layer-01)}
.av-trend__end{position:absolute;width:14px;height:14px;margin:-7px 0 0 -7px;border-radius:50%;background:var(--av-support-low);box-shadow:0 0 0 3px var(--av-text-primary)}
.av-trend__tip{position:absolute;right:28px;transform:translateY(-50%);padding:6px 10px;border-radius:8px;background:var(--av-background-inverse);color:var(--av-text-inverse);font-size:12px;font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums}
.av-trend__fc{position:absolute;bottom:6px;font:10px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-helper)}
.av-trend-axis{display:flex;justify-content:space-between;font:10px var(--av-font-mono);color:var(--av-text-helper)}
.av-sev-rows{display:flex;flex-direction:column}
.av-sev-rows__row{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto;align-items:center;gap:12px;height:48px;padding:0 4px;border:0;border-bottom:1px solid var(--av-layer-05);background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}
.av-sev-rows__row:hover{background:var(--av-layer-02)}
.av-sev-rows__dot{width:8px;height:8px;border-radius:50%}.av-sev-rows__l{font-size:14px}.av-sev-rows__n{font-size:14px;font-weight:600;font-variant-numeric:tabular-nums}.av-sev-rows__p{width:44px;text-align:right;font:11px var(--av-font-mono);color:var(--av-text-helper)}
/* period segmented (squared) */
.av-period{display:flex;flex-wrap:wrap;gap:2px;padding:4px;border:1px solid var(--av-border-subtle-01);border-radius:12px;background:var(--av-background)}
.av-period button{height:36px;padding:0 14px;border:0;border-radius:9px;background:transparent;color:var(--av-text-tertiary);font:500 13px var(--av-font-sans);cursor:pointer;transition:background .2s,color .2s}
.av-period button[aria-pressed="true"]{background:var(--av-layer-05);color:var(--av-text-primary)}
/* compliance */
.av-comp{display:grid;grid-template-columns:48px minmax(0,1fr) auto;align-items:center;gap:14px;padding:6px 0;border-bottom:1px solid var(--av-layer-05)}
.av-minring{position:relative;width:48px;height:48px}.av-minring svg{transform:rotate(-90deg)}
.av-minring__v{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;font-variant-numeric:tabular-nums}
.av-comp__text{display:flex;flex-direction:column;gap:2px;min-width:0}.av-comp__name{font-size:14px;font-weight:500}.av-comp__fail{font-size:12px;color:var(--av-text-helper)}
.av-comp__delta{font-size:12px;white-space:nowrap;color:var(--av-text-helper)}.av-comp__delta--up{color:var(--av-text-info)}.av-comp__delta--down{color:var(--av-support-high)}
/* cloud accounts */
.av-acct-head{display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px;padding:20px 20px 12px}
.av-acct{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr) minmax(0,.8fr) 20px;align-items:center;gap:16px;width:100%;padding:14px 20px;border:0;border-top:1px solid var(--av-layer-05);background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}
.av-acct:hover{background:var(--av-layer-02)}
.av-acct__id{display:flex;align-items:center;gap:12px;min-width:0}
.av-acct__prov{flex-shrink:0;padding:4px 7px;border-radius:5px;font:500 10px var(--av-font-mono)}
.av-acct__name{display:flex;flex-direction:column;gap:2px;min-width:0}.av-acct__name b{font-size:14px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.av-acct__name span{font:11px var(--av-font-mono);color:var(--av-text-helper);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.av-acct__score{display:flex;flex-direction:column;gap:6px;min-width:0}.av-acct__score-row{display:flex;justify-content:space-between;font-size:12px}.av-acct__score-row span{color:var(--av-text-tertiary)}.av-acct__score-row b{font-weight:600;font-variant-numeric:tabular-nums}
.av-acct__bar{height:4px;border-radius:999px;background:var(--av-layer-05);overflow:hidden}.av-acct__bar i{display:block;height:100%;background:var(--av-gradient-brand)}
.av-acct__status{display:flex;flex-direction:column;gap:2px;font-size:13px}.av-acct__status span{font-size:12px;color:var(--av-text-helper)}
/* activity */
.av-activity{display:grid;grid-template-columns:12px minmax(0,1fr);gap:12px;padding:8px 0}
.av-activity__dot{width:8px;height:8px;margin-top:6px;border-radius:50%}
.av-activity__body{display:flex;flex-direction:column;gap:3px;min-width:0}.av-activity__t{font-size:13px;line-height:1.45;color:var(--av-text-secondary)}
.av-activity__meta{display:flex;gap:10px;align-items:center;font-size:12px;color:var(--av-text-helper)}
.av-activity__cta{padding:0;border:0;background:transparent;color:var(--av-text-info);font:500 12px var(--av-font-sans);cursor:pointer;text-decoration:underline;text-underline-offset:3px}
/* stat strip */
.av-stat-strip{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-xl);background:var(--av-layer-01);overflow:hidden}
.av-stat{position:relative;display:flex;flex-direction:column;gap:6px;padding:18px 20px;box-shadow:var(--av-shadow-hairline)}
.av-stat__label{display:flex;align-items:center;gap:10px;font-size:13px;color:var(--av-text-tertiary)}.av-stat__label img{width:26px;height:26px}
.av-stat__v{font-size:30px;font-weight:600;letter-spacing:-0.035em;line-height:1;font-variant-numeric:tabular-nums}
.av-stat__s{font-size:12px;color:var(--av-text-helper)}
.av-sev-chip{display:flex;align-items:center;gap:8px;height:36px;padding:0 12px;border-radius:8px;border:1px solid var(--av-border-subtle-01);background:transparent;color:var(--av-text-primary);font:400 13px var(--av-font-sans);cursor:pointer;transition:all .15s}
.av-sev-chip[aria-pressed="true"]{border-color:var(--av-border-strong-02);background:var(--av-layer-04)}
.av-sev-chip i{width:8px;height:8px;border-radius:50%}.av-sev-chip span{font:11px var(--av-font-mono);color:var(--av-text-helper)}
/* identity graph */
.av-graph{position:relative;width:100%;min-width:640px;border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-2xl);background:var(--av-background);overflow:hidden}
.av-graph svg{display:block;width:100%;height:auto}
.av-graph__edge{fill:none;stroke-width:1.25;stroke-dasharray:1;stroke-dashoffset:1;animation:av-draw 1s var(--av-ease-standard) forwards}
.av-graph__flow{fill:none;stroke:#fff;stroke-width:2.5;stroke-linecap:round;stroke-dasharray:.001 .999;animation:av-flow 3.4s linear 1.2s infinite both}
@keyframes av-flow{to{stroke-dashoffset:-1}}
.av-graph__hub{position:absolute;width:20.5%;aspect-ratio:1;transform:translate(-50%,-50%)}
.av-graph__hub canvas{width:100%;height:100%;display:block}
.av-graph__hub-label{position:absolute;left:50%;top:100%;transform:translateX(-50%);margin-top:4px;white-space:nowrap;font:500 11px var(--av-font-mono);letter-spacing:.1em;color:var(--av-text-helper)}
.av-gnode{position:absolute;display:flex;align-items:center;gap:12px;transform:translateY(-50%);cursor:pointer}
.av-gnode__dot{width:28px;height:28px;flex-shrink:0;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--av-layer-03);border:1px solid var(--av-border-strong-01)}
.av-gnode__dot img{width:18px;height:18px}
.av-gnode__t{display:flex;flex-direction:column;gap:2px;min-width:0}.av-gnode__t b{font-size:13px;font-weight:500;white-space:nowrap}.av-gnode__t span{font:11px var(--av-font-mono);color:var(--av-text-helper);white-space:nowrap}
.av-gnode__kind{font-style:normal;font-weight:500;letter-spacing:.1em;text-transform:uppercase}
.av-graph__legend{position:absolute;left:16px;bottom:14px;display:flex;gap:16px;font:11px var(--av-font-mono);color:var(--av-text-helper)}.av-graph__legend span{display:flex;align-items:center;gap:6px}.av-graph__legend i{width:14px;height:2px;border-radius:2px}
/* empty account */
.av-empty-card{display:flex;flex-wrap:wrap;align-items:center;gap:32px;padding:clamp(24px,5vw,56px);border:1px solid var(--av-border-subtle-00);border-radius:var(--av-radius-xl);background:var(--av-layer-01)}
.av-empty-card__img{width:min(180px,100%);height:180px;flex-shrink:0;border-radius:14px;background:var(--av-layer-03) center/cover no-repeat}
.av-empty-card__body{flex:1;min-width:min(240px,100%);display:flex;flex-direction:column;align-items:flex-start;gap:12px}
.av-empty-card__title{margin:0;font-size:24px;font-weight:600;letter-spacing:-0.02em}
.av-empty-card__text{margin:0;max-width:460px;font-size:15px;line-height:1.55;color:var(--av-text-tertiary)}`;

const fix = (sev, title, meta, gain, clears, effort) => `  <article class="av-fix-card av-fix-card--${sev}">
    <div class="av-weave" aria-hidden="true"></div>
    <div class="av-fix-card__top"><canvas class="av-fix-card__orb" data-av-orb="${sev}" aria-hidden="true"></canvas><span class="av-sev-pill av-sev-pill--${sev}">${sev}</span></div>
    <div class="av-fix-card__body"><span class="av-fix-card__title">${title}</span><span class="av-fix-card__meta">${meta}</span></div>
    <div class="av-fix-card__stats"><div class="av-fix-card__stat"><span>Score</span><b class="av-fix-card__gain">${gain}</b></div><div class="av-fix-card__stat"><span>Clears</span><b>${clears}</b></div><div class="av-fix-card__stat"><span>Effort</span><b>${effort}</b></div></div>
    <button class="av-btn av-btn--primary">Fix now</button>
  </article>`;
const minring = (p) => { const C = 2 * Math.PI * 19; return `<div class="av-minring"><svg width="48" height="48" viewBox="0 0 48 48"><defs><linearGradient id="avgh" x1="0" x2="1"><stop offset="0" stop-color="#FF4B1F"/><stop offset="1" stop-color="#1FDDFF"/></linearGradient></defs><circle cx="24" cy="24" r="19" fill="none" stroke="var(--av-layer-05)" stroke-width="5"/><circle cx="24" cy="24" r="19" fill="none" stroke="url(#avgh)" stroke-width="5" stroke-linecap="round" stroke-dasharray="${(C * p / 100).toFixed(1)} ${C.toFixed(1)}"/></svg><span class="av-minring__v">${p}%</span></div>`; };

// identity graph layout (static)
const GN = [['f','threat','S3 bucket publicly readable','Critical · 2 resources','#FF4B1F','#FFB547'],['f','alert','Unused key > 365 days','High · 1 resource','#FF4B1F','#FFB547'],['i','identity','ci-deploy-runner','role · 3 findings','#FF4B1F','#1FDDFF'],['i','identity','svc-billing-writer','role · 2 findings','#FF4B1F','#1FDDFF'],['r','server','hci-exports-prod','s3 · us-east-1','#1FDDFF','#F2F2F0'],['r','network','vpc-0a12 · sg-web','ec2 · us-east-1','#1FDDFF','#F2F2F0']];
const GW = 760, GH = 460, HUB = [190, 230], R0 = 78, NX = 420;
const gEdges = GN.map((n, i) => { const y = 55 + i * 70, a = Math.atan2(y - HUB[1], NX - HUB[0]), x0 = HUB[0] + Math.cos(a) * R0, y0 = HUB[1] + Math.sin(a) * R0, ex = NX - 18, mx = x0 + (ex - x0) * .55, d = `M${x0.toFixed(1)} ${y0.toFixed(1)} C${mx.toFixed(1)} ${y0.toFixed(1)} ${mx.toFixed(1)} ${y} ${ex} ${y}`; return { n, i, y, d, x0, y0 }; });

function solidRing(v, sz, num, fs, lbl = '/ 100') { const p = Math.max(0, Math.min(100, +v)); return `<div class="av-sdn" style="width:clamp(${Math.min(sz, 120)}px,36vw,${sz}px)"><div class="av-sdn__track"></div><div class="av-sdn__seg" style="background:conic-gradient(from 0deg,#1FDDFF 0%,#FF4B1F ${p}%,transparent ${p}% 100%)"></div><div class="av-sdn__c"><span class="av-sdn__num av-sdn__num--brand" style="font-size:${Math.round(fs * .85)}px">${num}</span><span class="av-sdn__lbl">${lbl}</span></div></div>`; }

const zv2_SVC2 = { IAM:'#F0663F', S3:'#C38A7E', Transmission:'#93A3AB', Logging:'#4FC6DC', 'Security groups':'#E6E4DF' };
const zv2_SEV2 = [['Critical','#FF4B1F','C'],['High','#FF8A5B','H'],['Medium','#FFB547','M'],['Low','#1FDDFF','L'],['Info','#8C8A85','I']];
function zv2_tnt(h, a) { const n = parseInt(h.slice(1), 16); return 'rgba(' + (n >> 16) + ',' + (n >> 8 & 255) + ',' + (n & 255) + ',' + a + ')'; }
function zv2_V2_CSS_LATE() { return `.av-v2-strip{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr));border:1px solid var(--av-border-subtle-00);border-radius:16px;overflow:hidden;background:var(--av-layer-01)}
.av-v2-stat{position:relative;overflow:hidden;box-shadow:0 0 0 .5px var(--av-border-subtle-00);padding:18px clamp(1rem,3vw,1.25rem);display:flex;flex-direction:column;gap:6px}
.av-v2-stat__l{display:flex;align-items:center;gap:10px;font-size:13px;color:var(--av-text-tertiary)}.av-v2-stat__l img{width:36px;height:36px;margin:-6px 0;object-fit:contain;flex-shrink:0}
.av-v2-stat__v{font-size:30px;font-weight:600;letter-spacing:-0.035em;line-height:1;font-variant-numeric:tabular-nums}.av-v2-stat__v--sm{font-size:22px;letter-spacing:-0.025em}.av-v2-stat__s{font-size:12px;color:var(--av-text-helper)}
.av-v2-chip{display:flex;align-items:center;gap:8px;height:36px;padding:0 12px;border-radius:8px;border:1px solid var(--av-border-subtle-01);background:var(--av-layer-02);color:var(--av-text-primary);font:13px var(--av-font-sans);cursor:pointer;transition:all .15s}
.av-v2-chip:hover{border-color:var(--av-border-strong-01)}.av-v2-chip i{width:8px;height:8px;border-radius:50%}.av-v2-chip span{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-v2-clear{height:36px;padding:0 10px;border:0;background:transparent;color:var(--av-text-tertiary);font-size:13px;cursor:pointer;text-decoration:underline;text-underline-offset:3px}
.av-v2-leg{display:flex;flex-direction:column}.av-v2-leg__r{display:grid;grid-template-columns:8px minmax(0,1fr) auto 48px;gap:14px;align-items:center;padding:12px 0;border-bottom:1px solid var(--av-layer-05);font-size:14px;color:var(--av-text-secondary)}
.av-v2-leg__r i{width:8px;height:20px;border-radius:2px}.av-v2-leg__r b{font-size:16px;font-weight:600;color:var(--av-text-primary);font-variant-numeric:tabular-nums;text-align:right}.av-v2-leg__r small{font:11px var(--av-font-mono);color:var(--av-text-helper);text-align:right}
.av-v2-ctag{padding:1px 6px;border-radius:4px;font:11px var(--av-font-mono);font-variant-numeric:tabular-nums}
.av-v2-hist,.av-v2-res{border:1px solid var(--av-border-subtle-00);border-radius:14px;overflow:hidden;background:var(--av-layer-01)}
.av-v2-hist__scroll{overflow-x:auto}
.av-v2-hist__row{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1.6fr) 56px 20px;min-width:600px;gap:16px;align-items:center;padding:14px clamp(1rem,3vw,1.25rem);border-bottom:1px solid var(--av-layer-05);font-size:13px;color:var(--av-text-tertiary)}
.av-v2-hist__row--head{padding-top:12px;padding-bottom:12px;font:10px var(--av-font-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--av-text-placeholder)}
.av-v2-hist__row:not(.av-v2-hist__row--head):hover{background:var(--av-layer-02)}
.av-v2-bar{display:flex;height:6px;border-radius:2px;overflow:hidden;gap:2px;background:var(--av-layer-05);min-width:8px}
.av-v2-tabs{display:flex;gap:28px;border-bottom:1px solid var(--av-border-subtle-00)}.av-v2-tabs button{display:flex;align-items:center;gap:8px;height:44px;padding:0;border:0;border-bottom:2px solid transparent;margin-bottom:-1px;background:transparent;color:var(--av-text-tertiary);font:14px var(--av-font-sans);cursor:pointer}.av-v2-tabs button[aria-selected="true"]{color:var(--av-text-primary);border-bottom-color:var(--av-text-primary);font-weight:500}
.av-v2-beta{padding:1px 7px;border-radius:999px;background:rgba(31,221,255,.12);color:var(--av-text-info);font-size:11px;font-weight:500}
.av-v2-cov{display:inline-flex;align-items:center;gap:6px;padding:3px 10px;border-radius:999px;background:rgba(31,221,255,.1);color:var(--av-text-info);font-size:12px}.av-v2-cov i{width:6px;height:6px;border-radius:50%;background:currentColor}
.av-v2-res__row{display:grid;grid-template-columns:24px 40px minmax(0,1fr) auto;align-items:center;gap:14px;padding:14px clamp(1rem,3vw,1.25rem);border-top:1px solid var(--av-layer-05)}
.av-v2-res__row:hover{background:var(--av-layer-02)}
.av-v2-res__ic{width:40px;height:40px;border-radius:10px;background:var(--av-layer-03);border:1px solid var(--av-border-subtle-01);display:flex;align-items:center;justify-content:center}.av-v2-res__ic img{width:24px;height:24px;object-fit:contain}
.av-v2-type{padding:3px 8px;border-radius:6px;background:var(--av-layer-03);border:1px solid var(--av-border-subtle-01);font:11px var(--av-font-mono);color:var(--av-text-tertiary);white-space:nowrap}`; }
function zv2_I2(n) { return `assets/icons-3d/${n}.png`; }
function zv2_v2Stat(g, l, v, tint, sub) { return `<div class="av-v2-stat" style="background:radial-gradient(90% 120% at 100% 0%,${tint},transparent 60%)"><span class="av-v2-stat__l"><img src="${zv2_I2(g)}" alt="">${l}</span><span class="av-v2-stat__v${sub ? ' av-v2-stat__v--sm' : ''}">${v}</span>${sub ? `<span class="av-v2-stat__s">${sub}</span>` : ''}</div>`; }
function zv2_ctag(s, v) { return `<span class="av-v2-ctag" title="${s[0]}" style="border:1px solid ${zv2_tnt(s[1], .45)};background:${zv2_tnt(s[1], .12)};color:${s[1]}">${s[2]} ${v}</span>`; }
function zv2_findingsSummaryV2L(sel) { const counts = [5,64,133,91,0]; return `<div class="av-card av-card--flush" style="border-radius:16px;padding:0;gap:0"><div class="av-v2-strip" style="border:0;border-radius:0">${zv2_v2Stat('fix','Open findings','293','rgba(255,75,31,.12)')}${zv2_v2Stat('cost3','Resources affected','139','rgba(255,181,71,.09)')}${zv2_v2Stat('blog','Resources scanned','214','rgba(31,221,255,.10)')}</div>
  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px 24px;padding:16px clamp(1rem,3vw,1.25rem);border-top:1px solid var(--av-border-subtle-00)">${solidDonut(counts.slice(0,4), zv2_SEV2.slice(0,4).map(s => s[1]), 120, sel == null ? '293' : counts[sel], sel == null ? 'open' : zv2_SEV2[sel][0].toLowerCase(), { hi: sel == null ? undefined : sel, fs: 22 })}
  <div style="flex:1;min-width:min(240px,100%);display:flex;flex-wrap:wrap;align-items:center;gap:6px">${zv2_SEV2.map(([n, c], i) => `<button class="av-v2-chip" aria-pressed="${i === sel}"${i === sel ? ` style="background:${zv2_tnt(c,.14)};border-color:${zv2_tnt(c,.5)}"` : ''}><i style="background:${c}"></i>${n}<span>${counts[i]}</span></button>`).join('')}${sel != null ? '<button class="av-v2-clear">Clear</button>' : ''}</div></div></div>`; }
function zv2_scannerCardV2L() { const L = [['IAM',151],['S3',76],['Transmission',31],['Logging',35],['Security groups',0]]; return `<div class="av-card av-card--glow-signal" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,260px),1fr));gap:24px;align-items:center"><div class="av-stack" style="gap:16px"><div class="av-card__head"><img class="av-i3" src="${zv2_I2('blog')}" alt=""><span class="av-stack" style="gap:2px"><b style="font-size:18px;font-weight:600">Findings by scanner</b><span style="font-size:13px;color:var(--av-text-helper)">Latest sweep · Oct 13, 3:33 PM</span></span></div>${solidDonut(L.map(x => x[1]), L.map(x => zv2_SVC2[x[0]]), 200, '293', 'findings', { fs: 30 })}</div><div class="av-v2-leg">${L.map(([n, v]) => `<div class="av-v2-leg__r"><i style="background:${zv2_SVC2[n]}"></i>${n}<b>${v}</b><small>${Math.round(v / 293 * 100)}%</small></div>`).join('')}</div></div>`; }
const zv2_HIST2 = [['IAM',[0,52,8,91]],['S3',[5,11,30,30]],['Transmission',[0,0,31,0]],['Logging',[0,1,34,0]],['Security groups',[0,0,0,0]]];
function zv2_histV2() { return `<div class="av-v2-hist"><div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;padding:16px clamp(1rem,3vw,1.25rem);border-bottom:1px solid var(--av-border-subtle-00)"><b style="font-size:15px;font-weight:600">Scan history</b><span style="display:flex;flex-wrap:wrap;gap:14px;font-size:12px;color:var(--av-text-tertiary)">${zv2_SEV2.slice(0,4).map(([n,c]) => `<span style="display:flex;align-items:center;gap:6px"><i style="width:8px;height:8px;border-radius:2px;background:${c}"></i>${n}</span>`).join('')}</span></div><div class="av-v2-hist__scroll"><div class="av-v2-hist__row av-v2-hist__row--head"><span>Status</span><span>Scanner</span><span>Started</span><span>Findings by severity</span><span style="text-align:right">Total</span><span></span></div>${zv2_HIST2.map(([n, v]) => { const t = v.reduce((a,b)=>a+b,0); return `<div class="av-v2-hist__row"><span style="display:flex;align-items:center;gap:8px;font-size:14px;color:var(--av-text-primary)"><i style="width:8px;height:8px;border-radius:50%;background:var(--av-text-primary)"></i>Completed</span><span style="display:flex;align-items:center;gap:8px;color:var(--av-text-primary);font-weight:500"><i style="width:8px;height:20px;border-radius:2px;background:${zv2_SVC2[n]}"></i>${n}</span><span>Oct 13, 03:33 PM</span><span style="display:flex;flex-direction:column;gap:6px;min-width:0"><span class="av-v2-bar" style="width:${t ? Math.max(8, t / 151 * 100) : 6}%">${t ? v.map((x,i) => x ? `<span style="flex:${x};background:${zv2_SEV2[i][1]}"></span>` : '').join('') : ''}</span><span style="display:flex;flex-wrap:wrap;gap:4px">${t ? v.map((x,i) => x ? zv2_ctag(zv2_SEV2[i], x) : '').join('') : '<span style="font-size:12px;color:var(--av-text-helper)">No findings</span>'}</span></span><b style="text-align:right;font-size:14px;color:var(--av-text-primary)">${t}</b>${ic('chevRight',16,2)}</div>`; }).join('')}</div></div>`; }
function zv2_resRow(i, g, name, arn, sev, type) { return `<div class="av-v2-res__row"><span style="font:11px var(--av-font-mono);color:var(--av-text-placeholder)">0${i}</span><span class="av-v2-res__ic"><img src="${zv2_I2(g)}" alt=""></span><span style="display:flex;flex-direction:column;gap:4px;min-width:0"><span style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><span style="font-size:14px;font-weight:500">${name}</span><span class="av-v2-ctag" style="font-weight:500;background:${zv2_tnt(zv2_SEV2[sev][1],.14)};color:${zv2_SEV2[sev][1]}">1${zv2_SEV2[sev][2]}</span></span><span style="font:11.5px var(--av-font-mono);color:var(--av-text-helper);overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${arn}</span></span><span style="display:flex;align-items:center;gap:10px;justify-content:flex-end;flex-wrap:wrap"><span style="font-size:13px;color:var(--av-text-tertiary)">1 finding</span><span class="av-v2-type">${type}</span><span style="font-size:12px;color:var(--av-text-helper)">us-east-1</span>${ic('chevDown',16,2)}</span></div>`; }

function solidDonut(v, colors, sz, num, lbl, o = {}) { const t = v.reduce((a, b) => a + b, 0) || 1, g = .35; let acc = 0; const segs = v.map((n, i) => { const a = acc / t * 100, b = (acc += n) / t * 100; return `<div class="av-sdn__seg" data-i="${i}" style="background:conic-gradient(transparent 0 ${(a + g / 2).toFixed(2)}%,${colors[i]} ${(a + g / 2).toFixed(2)}% ${(b - g / 2).toFixed(2)}%,transparent ${(b - g / 2).toFixed(2)}% 100%)${o.hi != null && o.hi !== i ? ';opacity:.25' : ''}"></div>`; }).join(''); return `<div class="av-sdn" style="width:clamp(140px,40vw,${sz}px)"><div class="av-sdn__track"></div>${segs}<div class="av-sdn__c"><span class="av-sdn__num" style="font-size:${o.fs || 34}px">${num}</span><span class="av-sdn__lbl">${lbl}</span></div></div>`; }
const CARDS = [
{ id:'card-anatomy', label:'Card anatomy', desc:'Every dashboard card = .av-card (16px radius, layer-01, hairline) + optional glow + optional line-weave corner + head (glass glyph 28 or tile 44, title 18/600, sub 13).',
css:CARDS_CSS,
variants:[
 {name:'Default', html:`<div class="av-card">${head('monitor','Activity','Last 24 hours')}<p style="margin:0;font-size:13px;color:var(--av-text-tertiary)">Card content</p></div>`},
 {name:'Glow · ion + weave', html:`<div class="av-card av-card--glow-ion"><div class="av-weave" aria-hidden="true"></div>${head('shield','Compliance','Controls passing per framework')}</div>`},
 {name:'Glow · signal + weave', html:`<div class="av-card av-card--glow-signal"><div class="av-weave" aria-hidden="true"></div>${head('alert','By severity','Open findings over 30 days')}</div>`},
 {name:'Weave bottom-left', html:`<div class="av-card" style="min-height:160px"><div class="av-weave av-weave--bl" aria-hidden="true"></div>${head('identity','Identity mix','4,602 identities discovered',true)}</div>`},
 {name:'Hero glow', html:`<div class="av-card av-card--glow-hero" style="min-height:140px"><div class="av-weave" aria-hidden="true"></div>${head('fingerprint','Identities found','Last run · Oct 13, 8:41 PM')}</div>`},
]},

{ id:'posture-card', label:'Posture score card', desc:'Dashboard v2 hero. Solid ring: conic Ion→Signal on the scored arc, faint track for the rest (canvas in product, CSS conic here). Ring 128–160px via clamp(), gradient numeral 44px, rating + delta, hint, underlined link. Signal + Ion glows with line-weave in two corners.',
css:`.av-score-card{position:relative;overflow:hidden;isolation:isolate;display:flex;flex-wrap:wrap;align-items:center;gap:24px;padding:24px;border:1px solid var(--av-border-subtle-01);border-radius:var(--av-radius-2xl);background:radial-gradient(90% 120% at 0% 100%,var(--av-background-glow-signal),transparent 60%),radial-gradient(80% 110% at 100% 0%,var(--av-background-glow-ion),transparent 60%),var(--av-layer-01)}
.av-score-ring{position:relative;width:min(160px,100%);height:160px;flex-shrink:0}
.av-score-ring svg{display:block;width:100%;height:100%;transform:rotate(-90deg)}
.av-score-ring__track{stroke:var(--av-layer-04);stroke-dasharray:2 4}
.av-score-ring__value{stroke-linecap:round;transition:stroke-dashoffset 1.2s var(--av-ease-standard)}
.av-score-ring__center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}
.av-score-ring__num{font-size:44px;font-weight:600;letter-spacing:-0.04em;line-height:1;font-variant-numeric:tabular-nums;background:var(--av-gradient-brand-45);-webkit-background-clip:text;background-clip:text;color:transparent}
.av-score-ring__of{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-score-card__body{position:relative;flex:1;min-width:min(180px,100%);display:flex;flex-direction:column;gap:10px}
.av-score-card__rating{display:flex;align-items:center;gap:8px;flex-wrap:wrap;font-size:20px;font-weight:600;letter-spacing:-0.02em}
.av-score-card__hint{margin:0;font-size:14px;line-height:1.5;color:var(--av-text-tertiary)}.av-score-card__hint b{color:var(--av-text-primary);font-weight:500}
.av-score-ring--sm{width:96px;height:96px}.av-score-ring--sm .av-score-ring__num{font-size:24px}`,
variants:[
 {name:'Card', html:`<div class="av-score-card"><div class="av-weave" aria-hidden="true"></div><div class="av-weave av-weave--bl" aria-hidden="true"></div>
  ${solidRing(64,200,'64',52)}
  <div class="av-score-card__body"><span class="av-eyebrow">Posture score</span><div class="av-score-card__rating">Fair<span class="av-tag av-tag--delta">${ic('up',12,2.2)}6 this week</span></div><p class="av-score-card__hint">Close the 2 public buckets to reach <b>71</b>. That's about 4 minutes of work.</p><a class="av-link av-link--action" href="#" style="font-size:13px">Start with this fix${ic('arrow',14,2)}</a></div>
</div>`},
 {name:'Compact', html:`<div class="av-score-card" style="max-width:420px"><div class="av-weave" aria-hidden="true"></div><div class="av-weave av-weave--bl" aria-hidden="true"></div>
  ${solidRing(64,160,'64',44)}
  <div class="av-score-card__body"><span class="av-eyebrow">Posture score</span><div class="av-score-card__rating">Fair<span class="av-tag av-tag--delta">${ic('up',12,2.2)}6 this week</span></div><p class="av-score-card__hint">Close the 2 public buckets to reach <b>71</b>.</p></div>
</div>`},
 {name:'Score states', html:`<div class="av-row" style="gap:28px">${[[42,'Poor'],[64,'Fair'],[88,'Good']].map(([v,l]) => `<div class="av-stack" style="align-items:center;gap:8px">${solidRing(v,120,v,30)}<span class="av-eyebrow">${l}</span></div>`).join('')}</div>`},
]},

{ id:'fix-card', label:'Fix card', desc:'“Fix these first” cards: WebGL orb (orb.js) tinted by severity, mono severity pill, title + resource, dashed stat row (score gain in Ion), full-width Fix now. Tint = severity colour at 13% glow / 22% border.',
variants:[
 {name:'Row of three', html:`<div class="av-fix-grid">
${fix('critical','Block public write on 2 buckets','S3 · Production Demo','+7','2 critical','~4 min')}
${fix('high','Rotate 3 stale access keys','IAM · Production Demo','+4','3 high','~3 min')}
${fix('medium','Enable TLS on 31 endpoints','Transmission · Production Demo','+3','31 medium','~5 min')}
</div>`},
 {name:'Single', html:`<div style="max-width:320px">${fix('critical','Block public write on 2 buckets','S3 · Production Demo','+7','2 critical','~4 min')}</div>`},
 {name:'Severity pills', html:`<div class="av-row" style="gap:8px"><span class="av-sev-pill">Critical</span><span class="av-sev-pill av-sev-pill--high">High</span><span class="av-sev-pill av-sev-pill--medium">Medium</span><span class="av-sev-pill av-sev-pill--low">Low</span></div>`},
]},

{ id:'findings-raised', label:'Findings raised', desc:'24-month bar chart: thin 2px ink bars (hover → 4px Signal), mono big stats with dashed divider, axis note. Bar height = value / max × 92%.',
variants:[{name:'Card', html:`<div class="av-card av-card--glow-ion"><div class="av-weave" aria-hidden="true"></div>
  <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:16px 24px">
    <div class="av-bigstats"><div class="av-bigstat"><span class="av-bigstat__k">[!] Findings raised</span><span class="av-bigstat__v">${MV.slice(12).reduce((a,b)=>a+b,0).toLocaleString('en-US')}</span><span class="av-bigstat__s">Last 12 months · all accounts</span></div><div class="av-bigstat"><span class="av-bigstat__k">[↑] Peak month</span><span class="av-bigstat__v">Aug</span><span class="av-bigstat__s">8,850 findings</span></div></div>
    <div class="av-axis-note"><span>// X-AXIS: <b>MONTHS</b></span><span>// Y-AXIS: <b>FINDINGS</b></span></div>
  </div>
  <div class="av-card__rule"></div>
  <div class="av-stack" style="gap:12px;padding-top:8px">
    <div class="av-month-bars">${MV.map((v,i) => `<div class="av-month-bars__col" title="${MN[i%12]} ${i<12?2025:2026}: ${v.toLocaleString('en-US')}"${i===19?' aria-current="true"':''}><span class="av-month-bars__bar" style="height:${(v/MMX*92).toFixed(1)}%"></span></div>`).join('')}</div>
    <div class="av-month-labels">${MV.map((v,i) => `<span>${i%2?MN[i%12]:''}</span>`).join('')}</div>
  </div>
</div>`}]},

{ id:'severity-trend', label:'Severity trend', desc:'Line + area (30 days) with dashed forecast (+14d), “now” marker, projected end marker with inverse tooltip, and severity rows that recolour the projection tag on hover (Critical/High white text, Medium/Low ink, 33% glow).',
css:`.av-sdn{position:relative;aspect-ratio:1;margin:0 auto;flex-shrink:0}
.av-sdn__track,.av-sdn__seg{position:absolute;inset:2%;border-radius:50%;-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 20%),#000 calc(100% - 20%));mask:radial-gradient(farthest-side,transparent calc(100% - 20%),#000 calc(100% - 20%));transition:opacity .25s,transform .25s var(--av-ease-standard)}
.av-sdn__track{background:var(--av-layer-03)}
.av-sdn__c{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}
.av-sdn__num{font-weight:600;letter-spacing:-0.03em;line-height:1;font-variant-numeric:tabular-nums}.av-sdn__lbl{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-card:has(.av-legend-rows__row:nth-child(1):hover) .av-sdn__seg:not([data-i="0"]){opacity:.25}.av-card:has(.av-legend-rows__row:nth-child(1):hover) .av-sdn__seg[data-i="0"]{transform:scale(1.03)}
.av-card:has(.av-legend-rows__row:nth-child(2):hover) .av-sdn__seg:not([data-i="1"]){opacity:.25}.av-card:has(.av-legend-rows__row:nth-child(2):hover) .av-sdn__seg[data-i="1"]{transform:scale(1.03)}
.av-card:has(.av-legend-rows__row:nth-child(3):hover) .av-sdn__seg:not([data-i="2"]){opacity:.25}.av-card:has(.av-legend-rows__row:nth-child(3):hover) .av-sdn__seg[data-i="2"]{transform:scale(1.03)}
.av-card:has(.av-legend-rows__row:nth-child(4):hover) .av-sdn__seg:not([data-i="3"]){opacity:.25}.av-card:has(.av-legend-rows__row:nth-child(4):hover) .av-sdn__seg[data-i="3"]{transform:scale(1.03)}
.av-card:has(.av-legend-rows__row:nth-child(5):hover) .av-sdn__seg:not([data-i="4"]){opacity:.25}.av-card:has(.av-legend-rows__row:nth-child(5):hover) .av-sdn__seg[data-i="4"]{transform:scale(1.03)}
.av-trend__tip--s{display:none;transition:background .25s}
.av-card:has(.av-sev-rows__row:nth-child(1):hover) .av-trend__tip--d{display:none}.av-card:has(.av-sev-rows__row:nth-child(1):hover) .av-trend__tip--s0{display:inline-flex}
.av-card:has(.av-sev-rows__row:nth-child(2):hover) .av-trend__tip--d{display:none}.av-card:has(.av-sev-rows__row:nth-child(2):hover) .av-trend__tip--s1{display:inline-flex}
.av-card:has(.av-sev-rows__row:nth-child(3):hover) .av-trend__tip--d{display:none}.av-card:has(.av-sev-rows__row:nth-child(3):hover) .av-trend__tip--s2{display:inline-flex}
.av-card:has(.av-sev-rows__row:nth-child(4):hover) .av-trend__tip--d{display:none}.av-card:has(.av-sev-rows__row:nth-child(4):hover) .av-trend__tip--s3{display:inline-flex}`,
variants:[{name:'Card', html:`<div class="av-card av-card--glow-signal" style="max-width:460px"><div class="av-weave" aria-hidden="true"></div>
  ${head('alert','By severity','Open findings over 30 days · hover a severity')}
  <div class="av-stack" style="gap:10px">
    <div style="display:flex;align-items:baseline;gap:8px"><span class="av-kpi__num">293</span><span style="font-size:13px;color:var(--av-text-tertiary)">open today</span></div>
    <div class="av-trend">
      <svg viewBox="0 0 400 190" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="svLine" x1="0" x2="1"><stop offset="0" stop-color="#FF4B1F"/><stop offset="1" stop-color="#1FDDFF"/></linearGradient><linearGradient id="svArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1FDDFF" stop-opacity=".22"/><stop offset="1" stop-color="#1FDDFF" stop-opacity="0"/></linearGradient></defs>
        <line class="av-trend__grid" x1="0" y1="10" x2="400" y2="10" vector-effect="non-scaling-stroke"/><line class="av-trend__grid" x1="0" y1="70" x2="400" y2="70" vector-effect="non-scaling-stroke"/><line class="av-trend__grid" x1="0" y1="130" x2="400" y2="130" vector-effect="non-scaling-stroke"/><line class="av-trend__grid" x1="0" y1="190" x2="400" y2="190" vector-effect="non-scaling-stroke"/>
        <path d="${area}" fill="url(#svArea)"/>
        <line x1="${P[NOW][0].toFixed(1)}" y1="0" x2="${P[NOW][0].toFixed(1)}" y2="190" stroke="var(--av-border-strong-02)" stroke-dasharray="3 4" vector-effect="non-scaling-stroke"/>
        <path d="${solid}" fill="none" stroke="url(#svLine)" stroke-width="2.5" stroke-linecap="round" vector-effect="non-scaling-stroke"/>
        <path d="${fc}" fill="none" stroke="#1FDDFF" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="5 6" vector-effect="non-scaling-stroke"/>
      </svg>
      <span class="av-trend__now" style="left:${(P[NOW][0]/W*100).toFixed(1)}%;top:${(P[NOW][1]/H*100).toFixed(1)}%"></span>
      <span class="av-trend__end" style="left:100%;top:${(P[10][1]/H*100).toFixed(1)}%"></span>
      <span class="av-trend__tip av-trend__tip--d" style="top:${(P[10][1]/H*100).toFixed(1)}%">338 projected</span>${[['Critical','+60%','#FF4B1F','#FFF'],['High','+22%','#FF8A5B','#FFF'],['Medium','+7%','#FFB547','#141414'],['Low','+7%','#1FDDFF','#141414']].map(([n,p,bg,fg],i) => `<span class="av-trend__tip av-trend__tip--s av-trend__tip--s${i}" style="top:${(P[10][1]/H*100).toFixed(1)}%;background:${bg};color:${fg};box-shadow:0 6px 18px ${bg}55">${n} · ${p} in 14d</span>`).join('')}
      <span class="av-trend__fc" style="left:calc(${(P[NOW][0]/W*100).toFixed(1)}% + 8px)">Forecast</span>
    </div>
    <div class="av-trend-axis"><span>30d ago</span><span>Today</span><span>+14d</span></div>
  </div>
  <div class="av-sev-rows">${[['Critical',5],['High',64],['Medium',133],['Low',91]].map(([l,n],i) => `<button class="av-sev-rows__row"><span class="av-sev-rows__dot" style="background:${SEVC[i]}"></span><span class="av-sev-rows__l">${l}</span><span class="av-sev-rows__n">${n}</span><span class="av-sev-rows__p">${pct(n,293)}</span></button>`).join('')}</div>
</div>`}]},

{ id:'identity-mix', label:'Identity mix', desc:'Dashboard v2 donut: solid segments with a hairline gap on a faint track, centred total. Hovering a legend row dims the other segments to 25% and lifts the hovered one. Period switcher top-right.',
css:`.av-sdn{position:relative;aspect-ratio:1;margin:0 auto;flex-shrink:0}
.av-sdn__track,.av-sdn__seg{position:absolute;inset:2%;border-radius:50%;-webkit-mask:radial-gradient(farthest-side,transparent calc(100% - 20%),#000 calc(100% - 20%));mask:radial-gradient(farthest-side,transparent calc(100% - 20%),#000 calc(100% - 20%));transition:opacity .25s,transform .25s var(--av-ease-standard)}
.av-sdn__track{background:var(--av-layer-03)}
.av-sdn__c{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px}
.av-sdn__num{font-weight:600;letter-spacing:-0.03em;line-height:1;font-variant-numeric:tabular-nums}.av-sdn__lbl{font:11px var(--av-font-mono);color:var(--av-text-helper)}
.av-card:has(.av-legend-rows__row:nth-child(1):hover) .av-sdn__seg:not([data-i="0"]){opacity:.25}.av-card:has(.av-legend-rows__row:nth-child(1):hover) .av-sdn__seg[data-i="0"]{transform:scale(1.03)}
.av-card:has(.av-legend-rows__row:nth-child(2):hover) .av-sdn__seg:not([data-i="1"]){opacity:.25}.av-card:has(.av-legend-rows__row:nth-child(2):hover) .av-sdn__seg[data-i="1"]{transform:scale(1.03)}
.av-card:has(.av-legend-rows__row:nth-child(3):hover) .av-sdn__seg:not([data-i="2"]){opacity:.25}.av-card:has(.av-legend-rows__row:nth-child(3):hover) .av-sdn__seg[data-i="2"]{transform:scale(1.03)}
.av-card:has(.av-legend-rows__row:nth-child(4):hover) .av-sdn__seg:not([data-i="3"]){opacity:.25}.av-card:has(.av-legend-rows__row:nth-child(4):hover) .av-sdn__seg[data-i="3"]{transform:scale(1.03)}
.av-card:has(.av-legend-rows__row:nth-child(5):hover) .av-sdn__seg:not([data-i="4"]){opacity:.25}.av-card:has(.av-legend-rows__row:nth-child(5):hover) .av-sdn__seg[data-i="4"]{transform:scale(1.03)}
.av-trend__tip--s{display:none;transition:background .25s}
.av-card:has(.av-sev-rows__row:nth-child(1):hover) .av-trend__tip--d{display:none}.av-card:has(.av-sev-rows__row:nth-child(1):hover) .av-trend__tip--s0{display:inline-flex}
.av-card:has(.av-sev-rows__row:nth-child(2):hover) .av-trend__tip--d{display:none}.av-card:has(.av-sev-rows__row:nth-child(2):hover) .av-trend__tip--s1{display:inline-flex}
.av-card:has(.av-sev-rows__row:nth-child(3):hover) .av-trend__tip--d{display:none}.av-card:has(.av-sev-rows__row:nth-child(3):hover) .av-trend__tip--s2{display:inline-flex}
.av-card:has(.av-sev-rows__row:nth-child(4):hover) .av-trend__tip--d{display:none}.av-card:has(.av-sev-rows__row:nth-child(4):hover) .av-trend__tip--s3{display:inline-flex}`,
variants:(() => { const mv = [1180,1904,412,866,240], t = mv.reduce((a,b)=>a+b,0), MC = [INK,'#FF4B1F','#1FDDFF','#FFB547',MUT], ML = ['Clinical & staff users','Service accounts','AI agents','API keys','OAuth apps']; return [
 {name:'Card', html:`<div class="av-card"><div class="av-weave av-weave--bl" aria-hidden="true"></div>
  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px"><div style="flex:1;min-width:min(220px,100%)">${head('identity','Identity mix',t.toLocaleString('en-US') + ' identities discovered',true)}</div><div class="av-period" role="group"><button aria-pressed="false">Week</button><button aria-pressed="true">Month</button><button aria-pressed="false">Quarter</button><button aria-pressed="false">Year</button></div></div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,220px),1fr));gap:24px;align-items:center">
    ${solidDonut(mv,MC,240,t.toLocaleString('en-US'),'identities',{fs:34})}
    ${legend(mv.map((n,i) => [MC[i],ML[i],n.toLocaleString('en-US'),pct(n,t)]))}
  </div>
</div>`},
 {name:'Highlighted segment', html:`<div class="av-row" style="gap:28px">${solidDonut(mv,MC,180,'1,904','service accts',{hi:1,fs:28})}</div>`},
]; })()},

{ id:'compliance', label:'Compliance', desc:'Framework list with 48px gradient mini rings, failing-control count and weekly delta.',
variants:[{name:'Card', html:`<div class="av-card av-card--glow-ion" style="max-width:420px;gap:14px">${head('shield','Compliance','Controls passing per framework')}
  ${[['HIPAA',88,6,'+4 pts','up'],['SOC 2',82,11,'+3 pts','up'],['ISO 27001',76,19,'+2 pts','up'],['NIST 800-53',71,34,'No change',''],['CIS AWS',64,41,'−1 pts','down']].map(([n,p,f,d,k]) => `<div class="av-comp">${minring(p)}<span class="av-comp__text"><span class="av-comp__name">${n}</span><span class="av-comp__fail">${f} failing controls</span></span><span class="av-comp__delta${k ? ' av-comp__delta--' + k : ''}">${d}</span></div>`).join('\n  ')}
</div>`}, {name:'Mini ring', html:`<div class="av-row" style="gap:20px">${minring(88)}${minring(64)}${minring(32)}</div>`}]},

{ id:'cloud-accounts', label:'Cloud accounts', desc:'Account list card: provider chip (tinted), name + mono ID, posture bar (brand gradient), status + last scan, chevron.',
variants:[{name:'Card', html:`<div class="av-card av-card--flush">
  <div class="av-acct-head">${head('cloud','Cloud accounts')}<a class="av-link av-link--action" href="#" style="font-size:13px">Connect account${ic('arrow',14,2)}</a></div>
  ${[['AWS','av-tag--aws','Production Demo Account','010545334631',58,'Complete coverage','var(--av-text-success)','2 hours ago'],['GCP','av-tag--gcp','Northwind Commerce Account','alvl-vulnlab-d6a0cd',96,'Complete coverage','var(--av-text-success)','40 min ago'],['AZ','av-tag--azure','Ashgrove Azure','4c1e…b20',0,'Needs permissions','var(--av-text-warning)','never']].map(([p,c,n,id,s,st,sc,l]) => `<button class="av-acct"><span class="av-acct__id"><span class="av-acct__prov av-tag ${c}" style="height:auto">${p}</span><span class="av-acct__name"><b>${n}</b><span>${id}</span></span></span><span class="av-acct__score"><span class="av-acct__score-row"><span>Posture</span><b>${s ? s : '—'}</b></span><span class="av-acct__bar"><i style="width:${s}%"></i></span></span><span class="av-acct__status"><b style="font-weight:400;color:${sc}">${st}</b><span>Scanned ${l}</span></span>${ic('chevRight',16,2).replace('av-icon','av-icon" style="color:var(--av-icon-disabled)')}</button>`).join('\n  ')}
</div>`}]},

{ id:'activity', label:'Activity', desc:'Feed card: severity dot, sentence, time + optional inline Ion action.',
variants:[{name:'Card', html:`<div class="av-card" style="max-width:420px;gap:6px"><div class="av-weave av-weave--bl" aria-hidden="true"></div><div style="margin-bottom:8px">${head('monitor','Activity')}</div>
  ${[['var(--av-support-critical)','New critical: S3 bucket hci-exports-prod is publicly readable','12 min ago','Review'],['var(--av-support-low)','Scan finished on Production Demo Account · 293 open','2 h ago',''],['var(--av-support-medium)','Access key AKIA…7Q2F unused for 412 days','5 h ago','Rotate'],['var(--av-support-success)','Zalak resolved 4 findings in IAM','Yesterday',''],['var(--av-support-neutral)','Northwind Commerce connected','Oct 12','']].map(([c,t,w,a]) => `<div class="av-activity"><span class="av-activity__dot" style="background:${c}"></span><span class="av-activity__body"><span class="av-activity__t">${t}</span><span class="av-activity__meta">${w}${a ? `<button class="av-activity__cta">${a}</button>` : ''}</span></span></div>`).join('\n  ')}
</div>`}]},

{ id:'findings-summary', label:'Findings summary', desc:'Dashboard v2: stat strip (3D icons, tinted corners) above the severity donut and filter chips. Selecting a chip tints it, dims the other segments and shows that severity in the donut centre; Clear resets.',
css:zv2_V2_CSS_LATE(),
variants:[{name:'Default', html:zv2_findingsSummaryV2L(null)},{name:'Critical selected', html:zv2_findingsSummaryV2L(0)}]},

{ id:'ring-summary', label:'Ring summary cards', css:zv2_V2_CSS_LATE(), desc:'Solid donut + titled legend grid. Used on Scans, Identities, Bulletins, Clients and Members.',
variants:[
 {name:'Findings by scanner', html:zv2_scannerCardV2L()},
 {name:'Identities hero', html:`<div class="av-card av-card--glow-hero" style="flex-direction:row;flex-wrap:wrap;gap:28px;align-items:center;padding:24px"><div class="av-weave" aria-hidden="true"></div><img src="assets/mascots/idcard.png" alt="" style="width:min(108px,100%);height:108px;object-fit:contain;margin:-12px -10px -16px -8px"><div class="av-stack" style="gap:4px;min-width:min(140px,100%)"><span style="font-size:13px;color:var(--av-text-tertiary)">Identities found</span><span style="font-size:44px;font-weight:600;letter-spacing:-0.04em;line-height:1">48</span><span style="font-size:12px;color:var(--av-text-helper)">Last run · Oct 13, 8:41 PM</span></div><div style="flex:1;min-width:min(260px,100%);display:flex;flex-wrap:wrap;align-items:center;gap:20px 28px">${ring([31,14,3],['#FF8A5B','#1FDDFF','#FFB547'],150,'48','non-human')}<div class="av-stack" style="gap:10px">${[['#FF8A5B','Service accounts',31],['#1FDDFF','AI agents',14],['#FFB547','API keys',3]].map(([c,l,n]) => `<span style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--av-text-tertiary)"><span style="width:8px;height:8px;border-radius:2px;background:${c}"></span>${l}<b style="color:var(--av-text-primary)">${n}</b></span>`).join('')}</div></div></div>`},
 {name:'Advisories (Bulletins)', html:`<div class="av-card" style="flex-direction:row;flex-wrap:wrap;align-items:center;gap:20px 28px"><div class="av-weave" aria-hidden="true"></div>${ring([1,2,2,3],SEVC,150,'8','advisories')}<div style="flex:1;min-width:min(220px,100%);display:flex;flex-direction:column;gap:6px"><div style="margin-bottom:6px">${head('alert','Advisories by severity','Last 30 days · all providers')}</div>${legendGrid([[SEVC[0],'Critical',1],[SEVC[1],'High',2],[SEVC[2],'Medium',2],[SEVC[3],'Low',3]])}</div></div>`},
 {name:'Accounts by provider (Clients)', html:`<div class="av-card" style="flex-direction:row;flex-wrap:wrap;align-items:center;gap:20px 28px"><div class="av-weave" aria-hidden="true"></div>${ring([1,1,1],['#FFB547','#1FDDFF',INK],150,'3','accounts')}<div style="flex:1;min-width:min(220px,100%);display:flex;flex-direction:column;gap:6px"><div style="margin-bottom:6px">${head('clients','Accounts by provider','Across all clients')}</div>${legendGrid([['#FFB547','AWS',1],['#1FDDFF','GCP',1],[INK,'Azure',1]])}</div></div>`},
 {name:'Roles (Members)', html:`<div class="av-card" style="flex-direction:row;flex-wrap:wrap;align-items:center;gap:20px 28px"><div class="av-weave" aria-hidden="true"></div>${ring([4,3,1],['#1FDDFF','#FFB547',MUT],150,'8','members')}<div style="flex:1;min-width:min(220px,100%);display:flex;flex-direction:column;gap:6px"><div style="margin-bottom:6px">${head('members','Roles','Least privilege applies to people too')}</div>${legendGrid([['#1FDDFF','Owners',4],['#FFB547','Analysts',3],[MUT,'Invited',1]])}</div></div>`},
]},

{ id:'stat-strip', label:'Stat strip', desc:'Compact KPI row used atop Findings and Scans: tinted cells, glass glyph, 30px value, optional sub.',
variants:[{name:'Strip', html:`<div class="av-stat-strip">${[['scan','Last scan','2h ago','5m 41s · 214 resources','rgba(31,221,255,.10)'],['alert','New findings','+12','since previous scan','rgba(255,75,31,.12)'],['shield','Resolved','24','this week','rgba(61,220,151,.10)']].map(([g,l,v,s,t]) => `<div class="av-stat" style="background:radial-gradient(90% 120% at 100% 0%,${t},transparent 60%)"><span class="av-stat__label"><img src="assets/icons-glass/${g}.svg" alt="">${l}</span><span class="av-stat__v" style="font-size:22px;letter-spacing:-0.025em">${v}</span><span class="av-stat__s">${s}</span></div>`).join('')}</div>`}]},

{ id:'identity-graph', label:'Identity graph', desc:'Dashboard v2 graph view (Findings › Graph). Account hub = voice cube (orb-cube.js, tinted by worst severity) inside a dotted halo, name + “AWS · N resources in view” below. Three labelled columns — FINDINGS, IDENTITIES, RESOURCES — each with a 1px vertical rail. Nodes: 44px dark circle with 3D icon, red dot on findings, a + badge to branch (amber findings, Ion identities, ink resources), title + meta. Bezier edges carry the kind gradient with a white flow dot. Click a node to branch; Esc steps back.',
css:`.av-g2{position:relative;width:100%;min-width:720px;aspect-ratio:1000/740;border-radius:16px;border:1px solid var(--av-border-subtle-00);overflow:hidden;background:radial-gradient(40% 60% at 21% 48%,rgba(31,221,255,.07),transparent 70%),var(--av-background)}
.av-g2 svg{position:absolute;inset:0;width:100%;height:100%}
.av-g2__edge{fill:none;stroke-width:1.6;stroke-linecap:round}
.av-g2__flow{fill:#F2F2F0}
.av-g2__halo{position:absolute;left:21%;top:48%;width:29%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;border:1px dashed var(--av-border-strong-01)}
.av-g2__hub{position:absolute;left:21%;top:48%;width:19%;aspect-ratio:1;transform:translate(-50%,-50%)}.av-g2__hub canvas{display:block;width:100%;height:100%}
.av-g2__hubt{position:absolute;left:21%;top:73%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:4px;white-space:nowrap}.av-g2__hubt b{font-size:16px;font-weight:600}.av-g2__hubt span{font-size:13px;color:var(--av-text-helper)}
.av-g2__col{position:absolute;font:11px var(--av-font-mono);letter-spacing:.16em;text-transform:uppercase;color:var(--av-text-helper);transform:translate(-50%,-50%)}
.av-g2__rail{position:absolute;width:1px;background:var(--av-border-strong-01)}
.av-g2__node{position:absolute;display:flex;align-items:center;gap:14px;transform:translate(-22px,-50%);max-width:34%;border:0;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer;padding:0}
.av-g2__dot{position:relative;width:44px;height:44px;flex-shrink:0;border-radius:50%;background:var(--av-layer-02);border:1px solid var(--av-border-subtle-01);display:flex;align-items:center;justify-content:center;transition:border-color .2s,transform .2s var(--av-ease-standard)}
.av-g2__node:hover .av-g2__dot{border-color:var(--av-border-strong-02);transform:scale(1.06)}
.av-g2__dot img{width:28px;height:28px;object-fit:contain}
.av-g2__sev{position:absolute;top:2px;right:2px;width:7px;height:7px;border-radius:50%;background:#FF4B1F}
.av-g2__plus{position:absolute;right:-5px;bottom:-5px;width:18px;height:18px;border-radius:50%;background:var(--av-background);border:1.5px solid currentColor;display:flex;align-items:center;justify-content:center}
.av-g2__t{min-width:0;display:flex;flex-direction:column;gap:3px}.av-g2__t b{font-size:16px;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.av-g2__t span{font-size:13px;color:var(--av-text-helper);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.av-g2__hint{position:absolute;right:16px;bottom:12px;font-size:12px;color:var(--av-text-placeholder)}`,
variants:(() => {
  const W = 1000, H = 740, NX = 530, RX = 482, HX = 210, HY = 355;
  const N = [
    ['f','fix','Public write access via ACL','Critical · 2 resources',62],['f','fix','SSH open to the internet','Critical · 1 resource',132],['f','fix','No network restrictions','Medium · 2 resources',202],['f','fix','Insecure transport allowed','Medium · 2 resources',272],
    ['i','access','ci-deploy-role','iam:role · 1 finding',378],['i','access','billing-sync','iam:user · 1 finding',448],
    ['r','cost3','northwind-tmp-transfer-402864','s3:bucket · 4 findings',552],['r','cost3','northwind-partner-uploads-402864','s3:bucket · 3 findings',622],['r','connect','sg-0a41c9e2 · bastion','ec2:security-group · 1 finding',692]];
  const K = { f:['#FF4B1F','#FFB547','#FFB547'], i:['#FF4B1F','#1FDDFF','#1FDDFF'], r:['#1FDDFF','#F2F2F0','var(--av-text-primary)'] };
  const E = N.map((n, i) => { const y0 = 270 + i * 25, x0 = 315 + Math.sin(i / (N.length - 1) * Math.PI) * 40, x1 = NX - 22, mx = (x0 + x1) / 2; const d = `M${x0.toFixed(1)} ${y0} C${mx.toFixed(1)} ${y0} ${mx.toFixed(1)} ${n[4]} ${x1} ${n[4]}`; const t = .5, u = 1 - t; const fx = u*u*u*x0 + 3*u*u*t*mx + 3*u*t*t*mx + t*t*t*x1, fy = u*u*u*y0 + 3*u*u*t*y0 + 3*u*t*t*n[4] + t*t*t*n[4]; return { i, n, d, x0, y0, x1, fx, fy }; });
  const P = (x, a) => (x / a * 100).toFixed(2) + '%';
  const plus = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>';
  const cols = [['Findings',24,40,300],['Identities',338,352,470],['Resources',512,526,716]];
  const graph = `<div style="overflow-x:auto"><div class="av-g2">
  <svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" aria-hidden="true"><defs>${E.map(e => `<linearGradient id="g2e${e.i}" gradientUnits="userSpaceOnUse" x1="${e.x0.toFixed(1)}" y1="${e.y0}" x2="${e.x1}" y2="${e.n[4]}"><stop offset="0" stop-color="${K[e.n[0]][0]}"/><stop offset="1" stop-color="${K[e.n[0]][1]}"/></linearGradient>`).join('')}</defs>
    ${E.map(e => `<path class="av-g2__edge" d="${e.d}" stroke="url(#g2e${e.i})" vector-effect="non-scaling-stroke"/>`).join('')}
  </svg>
  ${E.map(e => `<span class="av-g2__flow" style="position:absolute;left:${P(e.fx, W)};top:${P(e.fy, H)};width:4px;height:4px;border-radius:50%;background:#F2F2F0;transform:translate(-50%,-50%)"></span>`).join('')}
  <div class="av-g2__halo"></div><div class="av-g2__hub"><canvas data-av-orb="critical"></canvas></div>
  <div class="av-g2__hubt"><b>Production Demo</b><span>AWS · 5 resources in view</span></div>
  ${cols.map(([l, y, r0, r1]) => `<span class="av-g2__col" style="left:${P(RX, W)};top:${P(y, H)}">${l}</span><span class="av-g2__rail" style="left:${P(RX, W)};top:${P(r0, H)};height:${P(r1 - r0, H)}"></span>`).join('')}
  ${N.map(n => `<button class="av-g2__node" style="left:${P(NX, W)};top:${P(n[4], H)}"><span class="av-g2__dot"><img src="${zv2_I2(n[1])}" alt="">${n[0] === 'f' ? '<i class="av-g2__sev"></i>' : ''}<span class="av-g2__plus" style="color:${K[n[0]][2]}">${plus}</span></span><span class="av-g2__t"><b>${n[2]}</b><span>${n[3]}</span></span></button>`).join('')}
  <span class="av-g2__hint">Click a node to branch · Esc to step back</span>
</div></div>`;
  const nodes = `<div class="av-row" style="gap:28px;align-items:center">${[['f','fix','Finding','Critical · 2 resources'],['i','access','Identity','iam:role · 1 finding'],['r','cost3','Resource','s3:bucket · 4 findings']].map(n => `<div style="position:relative;height:60px;min-width:240px"><button class="av-g2__node" style="left:22px;top:50%;max-width:none"><span class="av-g2__dot"><img src="${zv2_I2(n[1])}" alt="">${n[0] === 'f' ? '<i class="av-g2__sev"></i>' : ''}<span class="av-g2__plus" style="color:${K[n[0]][2]}">${plus}</span></span><span class="av-g2__t"><b>${n[2]}</b><span>${n[3]}</span></span></button></div>`).join('')}</div>`;
  return [{ name:'Graph', html:graph }, { name:'Node kinds', note:'Badge colour = kind: amber finding, Ion identity, ink resource. Red dot only on findings.', html:nodes }];
})()},

{ id:'kpi-cards', label:'KPI tiles', desc:'See Dashboard patterns › KPI tile for the 4-up grid (sparkline + delta). Repeated here with the posture card as the Overview hero row.',
variants:[{name:'Overview hero row', html:`<div style="display:flex;flex-wrap:wrap;gap:16px"><div class="av-score-card" style="flex:1 1 340px"><div class="av-weave" aria-hidden="true"></div>${ring([64,36],['#FF4B1F','var(--av-border-strong-02)'],160,'64','/ 100',{grad:true,gradNum:true,fs:44})}<div class="av-score-card__body"><span class="av-eyebrow">Posture score</span><div class="av-score-card__rating">Fair<span class="av-tag av-tag--delta">${ic('up',12,2.2)}6 this week</span></div></div></div>
  <div class="av-kpi-grid" style="flex:2 1 520px">${[['alert','Open findings','293','across 139 resources','12 fewer than last scan',0],['threat','Critical + high','69','need action','3 new since Oct 6',1]].map(([g,l,n,u,d,up]) => `<button class="av-kpi av-kpi--${up ? 'signal' : 'ion'}"><div class="av-kpi__head"><span class="av-kpi__label"><img class="av-kpi__glyph" src="assets/icons-glass/${g}.svg" alt="">${l}</span></div><div class="av-kpi__value"><span class="av-kpi__num">${n}</span><span class="av-kpi__unit">${u}</span></div><span class="av-kpi__delta${up ? ' av-kpi__delta--up' : ''}">${ic(up ? 'up' : 'down',12,2.2)}${d}</span></button>`).join('')}</div></div>`}]},

{ id:'empty-account', label:'Empty account', desc:'Dashboard v2: shown on Findings / Scans / Identities when the account has no scan. Mascot on a #F2F1ED tile (clamp 140–200px, 20px radius), 24/600 title, 15px text, 40px primary + outline secondary. Card 14px radius, padding clamp(24px,5vw,56px).',
variants:[{name:'Card', html:`<div class="av-empty-card"><div class="av-empty-card__img" style="background:#F2F1ED url(assets/mascots-v4/clipboard.png) center/cover no-repeat"></div><div class="av-empty-card__body"><h2 class="av-empty-card__title">No scan yet for this account</h2><p class="av-empty-card__text">Run the first scan to see posture, findings and identities. It takes about 6 minutes.</p><div class="av-row" style="gap:8px;margin-top:6px"><button class="av-btn av-btn--primary">${ic('play',14,0,true)}Run first scan</button><button class="av-btn av-btn--secondary">View Production Demo</button></div></div></div>`}]},
];

return { CARDS_CSS, CARDS, V2F: { zv2_V2_CSS_LATE, zv2_findingsSummaryV2L, zv2_scannerCardV2L, zv2_histV2, zv2_resRow, zv2_v2Stat, zv2_ctag, zv2_SEV2 } };
})();
const S = (() => {
const { ic } = C;
// Avistar Dashboard — v2.1 sync layer: screens + pattern updates lifted from "Dashboard - Avistar v2".
// Adds: new tokens, a "Dashboard screens" group, and overrides for patterns/cards whose look changed.
// Runtime path migration: icons-glass → icons-3d, mascots → mascots-v4, sidebar glyphs → duo-tone nav glyphs.

const NAVF = {"portfolio":["<rect x=\"16\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"2\" y=\"16\" width=\"6\" height=\"6\" rx=\"1\"/><rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/><path d=\"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3\"/><path d=\"M12 12V8\"/>","<rect x=\"9\" y=\"2\" width=\"6\" height=\"6\" rx=\"1\"/>","M7.9 12h2.2"],"clients":["<rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\"/><rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\"/><path d=\"M6 6h.01\"/><path d=\"M6 18h.01\"/>","<rect x=\"2\" y=\"2\" width=\"20\" height=\"8\" rx=\"2\"/>","M13.9 2h2.2M13.9 22h2.2"],"members":["<path d=\"M16 10h2\"/><path d=\"M16 14h2\"/><path d=\"M6.17 15a3 3 0 0 1 5.66 0\"/><circle cx=\"9\" cy=\"11\" r=\"2\"/><rect x=\"2\" y=\"5\" width=\"20\" height=\"14\" rx=\"2\"/>","<rect x=\"2\" y=\"5\" width=\"10\" height=\"14\" rx=\"2\"/>","M10.9 5h2.2M10.9 19h2.2"],"overview":["<path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>","<circle cx=\"12\" cy=\"12\" r=\"3\"/>",""],"findings":["<path d=\"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3\"/><path d=\"M12 9v4\"/><path d=\"M12 17h.01\"/>","<path d=\"M4.83 13.5L2.27 18A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3l-2.56-4.5z\"/>","M10.9 21h2.2"],"identities":["<path d=\"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4\"/><path d=\"M14 13.12c0 2.38 0 6.38-1 8.88\"/><path d=\"M17.29 21.02c.12-.6.43-2.3.5-3.02\"/><path d=\"M2 12a10 10 0 0 1 18-6\"/><path d=\"M2 16h.01\"/><path d=\"M21.8 16c.2-2 .131-5.354 0-6\"/><path d=\"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2\"/><path d=\"M8.65 22c.21-.66.45-1.32.57-2\"/><path d=\"M9 6.8a6 6 0 0 1 9 5.2v2\"/>","<circle cx=\"12\" cy=\"13\" r=\"4.5\"/>",""],"scans":["<path d=\"M19.07 4.93A10 10 0 0 0 6.99 3.34\"/><path d=\"M4 6h.01\"/><path d=\"M2.29 9.62A10 10 0 1 0 21.31 8.35\"/><path d=\"M16.24 7.76A6 6 0 1 0 8.23 16.67\"/><path d=\"M12 18h.01\"/><path d=\"M17.99 11.66A6 6 0 0 1 15.77 16.67\"/><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"m13.41 10.59 5.66-5.66\"/>","<path d=\"M12 12L19.07 4.93A10 10 0 0 0 12 2z\"/>",""],"bulletins":["<path d=\"m8 2 1.88 1.88\"/><path d=\"M14.12 3.88 16 2\"/><path d=\"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1\"/><path d=\"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6\"/><path d=\"M12 20v-9\"/><path d=\"M6.53 9C4.6 8.8 3 7.1 3 5\"/><path d=\"M6 13H2\"/><path d=\"M3 21c0-2.1 1.7-3.9 3.8-4\"/><path d=\"M20.97 5c0 2.1-1.6 3.8-3.5 4\"/><path d=\"M22 13h-4\"/><path d=\"M17.2 17c2.1.1 3.8 1.9 3.8 4\"/>","<path d=\"M6 11a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3H6z\"/>","M12 14.9v2.2"],"settings":["<path d=\"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z\"/><circle cx=\"16.5\" cy=\"7.5\" r=\".5\"/>","<circle cx=\"15.5\" cy=\"8.5\" r=\"6.5\"/>",""]};
const X = {
  unplug:'M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4', move:'M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20',
  panel:'M4 4h16v16H4zM9 4v16', swap:'M7 7h11l-3-3M17 17H6l3 3', clock:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2',
  shieldOk:'M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6zM9 12l2 2 4-4', warn:'M12 4l9 16H3zM12 10v4M12 17h.01', send:'M12 19V5M6 11l6-6 6 6',
  lockR:'M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4', info:'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01', back:'M15 6l-6 6 6 6'
};
const xi = (n, s = 16, w = 1.8) => `<svg class="av-icon" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${X[n]}"/></svg>`;
const I3N = n => ({ alert:'fix', threat:'fix', fingerprint:'access', identity:'access', key:'access', lock:'access', idcard:'member', members:'member', cloud:'cost3', server:'cost3', bucket:'cost3', clients:'cost3', chip:'connect', network:'connect', settings:'connect', monitor:'report', overview:'report', scan:'blog', magnifier:'blog', bulletin:'guide', clipboard:'guide', shield:'rank' }[n] || 'report');
const MV4 = n => ({ chip:'clipboard', lock:'key' }[n] || n);
const I = n => `assets/icons-3d/${n}.png`;
const M = n => `assets/mascots-v4/${n}.png`;
const i3 = (n, cls = 'av-i3') => `<img class="${cls}" src="${I(n)}" alt="">`;
const masc = (n, size = '') => `<span class="av-mascot${size ? ' av-mascot--' + size : ''}" style="background-image:url(${M(n)})" aria-hidden="true"></span>`;
const logo = (p, cls = '') => p === 'aws' ? `<img class="av-logo-aws ${cls}" src="assets/logo-aws-dark.svg" alt="AWS">` : `<img class="${cls}" src="assets/logo-${p}.svg" alt="${p === 'gcp' ? 'GCP' : 'Azure'}">`;
const navGlyph = id => { const f = NAVF[id] || NAVF.overview; return `<svg class="av-nav-glyph" viewBox="0 0 24 24" aria-hidden="true"><g class="av-nav-glyph__hi">${f[1]}</g><g class="av-nav-glyph__line">${f[0]}</g>${f[2] ? `<path class="av-nav-glyph__gap" d="${f[2]}"/>` : ''}</svg>`; };
const NAV = [['portfolio','All clients',null,'Organization'],['clients','Manage clients'],['members','Members'],['overview','Overview',null,'Client'],['findings','Findings','293'],['identities','Identities'],['scans','Scans'],['bulletins','Bulletins','3 new','Intel'],['settings','Settings',null,'Workspace']];
const LABEL_NAV = { 'All clients':'portfolio', 'Manage clients':'clients', 'Members':'members', 'Overview':'overview', 'Findings':'findings', 'Identities':'identities', 'Scans':'scans', 'Bulletins':'bulletins', 'Settings':'settings' };
const MASC_NAV = { magnifier:'overview', shield:'findings', key:'identities', chip:'scans', clipboard:'portfolio', bucket:'clients', idcard:'members' };
const arrow = ic('arrow', 14, 2);

const TOKENS_ADD = [
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
const BASE_ADD = [
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
.av-rep-opt__inc{display:flex;flex-direction:column;gap:6px;padding-top:12px;border-top:1px solid var(--av-border-subtle-01)}.av-rep-opt__inc>span{display:grid;grid-template-columns:16px 1fr;gap:8px;font-size:13px;line-height:1.45;color:var(--av-text-secondary)}.av-rep-opt__inc .av-icon{margin-top:2px;color:var(--av-text-info)}
.av-repview{display:flex;flex-direction:column;min-height:460px;border-radius:16px;overflow:hidden;background:#0B0B0C;color:#F5F3F0}
.av-repview__bar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px 20px;padding:12px 20px;border-bottom:1px solid #2a2a2c}
.av-repview__back{width:36px;height:36px;border-radius:999px;border:1px solid #3a3a3c;background:transparent;color:#F5F3F0;cursor:pointer;display:flex;align-items:center;justify-content:center}
.av-repview__t{display:flex;flex-direction:column;gap:2px}.av-repview__t b{font-size:15px;font-weight:500}.av-repview__t span{font-size:12px;color:#a8a6a2}
.av-repview__tabs{display:flex;gap:2px;padding:3px;border-radius:10px;border:1px solid #2a2a2c}.av-repview__tabs button{height:32px;padding:0 14px;border:0;border-radius:7px;background:transparent;color:#a8a6a2;font:500 13px var(--av-font-sans);cursor:pointer;white-space:nowrap}.av-repview__tabs button[aria-pressed="true"]{background:#F5F3F0;color:#141414}
.av-repview__close{padding:6px 0;border:0;background:transparent;color:#F5F3F0;font:500 13px var(--av-font-sans);text-decoration:underline;text-underline-offset:3px;cursor:pointer}
.av-repview__dl{background:#FF4B1F;color:#FFFFFF}
.av-repview__frame{display:block;width:100%;height:clamp(520px,70vh,820px);border:0;background:#E4E1DC}.av-repview__pages{flex:1;display:flex;justify-content:center;padding:28px;background:#E4E1DC}.av-repview__page{width:min(100%,340px);aspect-ratio:8.5/11;background:#FFFFFF;box-shadow:0 8px 30px rgba(0,0,0,.18)}
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
 {name:'Side panel · Report', html:`<div class="av-stage"><div class="av-panel">${pHead('Generate report','Three reports for three readers. Each ends with an execution plan, not a data dump.')}<div class="av-panel__body"><div style="display:flex;justify-content:space-between;gap:12px;font-size:12px;color:var(--av-text-helper)"><span>Production Demo · Oct 19, 2026</span><span>Letter · PDF</span></div>${repOpt('Executive summary','3 pages','Score, top 5 fixes and a 90-day roadmap','leadership, board',1,['Posture score, trend and 14-day forecast','Five fixes ranked by impact, with owner and effort','Score after each fix','30 / 60 / 90 day roadmap and decisions needed'],' style="top:22px;height:8px"')}${repOpt('Full findings','4 pages','13 root causes with evidence and fix steps','engineering, DevOps',0,[],' style="top:20px;height:3px"')}${repOpt('Compliance mapping','3 pages','Failing controls across 5 frameworks','compliance, auditors',0,[],' style="top:0;bottom:0;left:0;right:auto;width:4px"')}</div>${pFoot('Generate PDF')}</div></div>`},
 {name:'Report preview · Executive', note:'Full-screen, always dark (#0B0B0C). Pages render the live report files below the bar on #E4E1DC; tabs swap the report, Back returns to the panel, Download PDF prints.', html:`<div class="av-repview"><div class="av-repview__bar"><div class="av-row" style="gap:14px"><button class="av-repview__back" aria-label="Back to report options">${xi('back',16,2)}</button><div class="av-repview__t"><b>Executive summary</b><span>3 pages · Letter · For Leadership, board</span></div></div><div class="av-repview__tabs"><button aria-pressed="true">Executive</button><button aria-pressed="false">Full findings</button><button aria-pressed="false">Compliance</button></div><div class="av-row" style="gap:16px"><button class="av-repview__close">Close</button><button class="av-btn av-repview__dl">${ic('download',16,2)}Download PDF</button></div></div><iframe class="av-repview__frame" src="Report%20Executive%20Summary%20-%20Avistar.dc.html" title="Executive summary pages" loading="lazy"></iframe></div>`},
 {name:'Report preview · Full findings', html:`<div class="av-repview"><div class="av-repview__bar"><div class="av-row" style="gap:14px"><button class="av-repview__back" aria-label="Back to report options">${xi('back',16,2)}</button><div class="av-repview__t"><b>Full findings</b><span>4 pages · Letter · For Engineering, DevOps</span></div></div><div class="av-repview__tabs"><button aria-pressed="false">Executive</button><button aria-pressed="true">Full findings</button><button aria-pressed="false">Compliance</button></div><div class="av-row" style="gap:16px"><button class="av-repview__close">Close</button><button class="av-btn av-repview__dl">${ic('download',16,2)}Download PDF</button></div></div><iframe class="av-repview__frame" src="Report%20Full%20Findings%20-%20Avistar.dc.html" title="Full findings pages" loading="lazy"></iframe></div>`},
 {name:'Report preview · Compliance', html:`<div class="av-repview"><div class="av-repview__bar"><div class="av-row" style="gap:14px"><button class="av-repview__back" aria-label="Back to report options">${xi('back',16,2)}</button><div class="av-repview__t"><b>Compliance mapping</b><span>3 pages · Letter · For Compliance, auditors</span></div></div><div class="av-repview__tabs"><button aria-pressed="false">Executive</button><button aria-pressed="false">Full findings</button><button aria-pressed="true">Compliance</button></div><div class="av-row" style="gap:16px"><button class="av-repview__close">Close</button><button class="av-btn av-repview__dl">${ic('download',16,2)}Download PDF</button></div></div><iframe class="av-repview__frame" src="Report%20Compliance%20Mapping%20-%20Avistar.dc.html" title="Compliance mapping pages" loading="lazy"></iframe></div>`},
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


const { zv2_V2_CSS_LATE, zv2_findingsSummaryV2L, zv2_scannerCardV2L, zv2_histV2, zv2_resRow, zv2_v2Stat, zv2_ctag, zv2_SEV2 } = K.V2F;
const findingsV2 = { id:'findings-v2', label:'Findings', desc:'Dashboard v2 Findings page: tabs (Latest scan / Account posture + Beta), coverage line, stat strip with 3D icons and tinted corners, severity donut with filter chips (selected chip tinted, other segments dimmed, centre shows that severity, Clear link), toolbar (search · framework · List/Graph), resource rows with a 40px 3D-icon tile, severity count tag, type tag, region and chevron.',
css:zv2_V2_CSS_LATE(),
variants:[
 {name:'Page header + tabs', html:`<div class="av-stack" style="gap:16px"><div style="display:flex;flex-wrap:wrap;align-items:flex-end;justify-content:space-between;gap:16px"><div class="av-stack" style="gap:8px"><span style="font:11px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-helper)">Production Demo · AWS · 010545334631</span><h1 style="margin:0;font-size:clamp(28px,3vw,36px);font-weight:600;letter-spacing:-0.03em;line-height:1.05">Findings</h1></div><div class="av-row" style="gap:8px"><button class="av-btn av-btn--secondary">${ic('download',16,1.6)}Export${ic('chevDown',14,2)}</button><button class="av-btn av-btn--primary">${ic('file',16,1.6)}Generate report</button></div></div><div class="av-v2-tabs" role="tablist"><button role="tab" aria-selected="false">Latest scan</button><button role="tab" aria-selected="true">Account posture<span class="av-v2-beta">Beta</span></button></div><div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px 14px;font-size:13px;color:var(--av-text-secondary)"><span class="av-v2-cov"><i></i>Complete coverage</span>All scanners · Oct 13, 2026, 8:33 PM UTC<span style="font:11px var(--av-font-mono);color:var(--av-text-helper)">5 scanners · schema 1.0</span></div></div>`},
 {name:'Summary · no filter', html:zv2_findingsSummaryV2L(null)},
 {name:'Summary · Critical selected', html:zv2_findingsSummaryV2L(0)},
 {name:'Toolbar', html:`<div style="display:flex;flex-wrap:wrap;align-items:center;gap:10px"><label style="display:flex;align-items:center;gap:8px;flex:1 1 min(100%,260px);min-width:0;height:40px;padding:0 12px;border-radius:10px;border:1px solid var(--av-border-strong-01);background:var(--av-layer-01);color:var(--av-text-helper)">${ic('search',16,1.8)}<input placeholder="Search name, ARN or finding" style="flex:1;min-width:0;height:100%;border:0;background:transparent;color:var(--av-text-primary);font:14px var(--av-font-sans);outline:0"></label><label style="display:flex;align-items:center;gap:8px;height:40px;padding:0 12px;border-radius:10px;border:1px solid var(--av-border-strong-01);background:var(--av-layer-01);font-size:13px;color:var(--av-text-helper)">Framework<select style="border:0;background:transparent;color:var(--av-text-primary);font-size:13px;outline:0"><option>All</option><option>SOC 2</option><option>HIPAA</option></select></label><div class="av-switcher"><button aria-pressed="true">${ic('list',14,1.8)}List</button><button aria-pressed="false">${ic('share',14,1.8)}Graph</button></div></div>`},
 {name:'Resource list', html:`<div class="av-v2-res"><div style="display:flex;justify-content:space-between;align-items:center;padding:14px clamp(1rem,3vw,1.25rem)"><span style="font:10px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-helper)">3 of 139 resources · by severity</span><button class="av-btn av-btn--ghost av-btn--sm">Expand all</button></div>${zv2_resRow(1,'cost3','northwind-tmp-transfer-402864','arn:aws:s3:::northwind-tmp-transfer-402864',0,'aws:s3:bucket')}${zv2_resRow(2,'cost3','northwind-partner-uploads-402864','arn:aws:s3:::northwind-partner-uploads-402864',0,'aws:s3:bucket')}${zv2_resRow(3,'connect','sg-0a41c9e2 · bastion','arn:aws:ec2:us-east-1:010545334631:security-group/sg-0a41c9e2',0,'aws:ec2:security-group')}</div>`},
]};
const scansV2 = { id:'scans-v2', label:'Scans', desc:'Dashboard v2 Scans page: 4-cell KPI strip (3D icon, 22px value, sub-line, tinted corner), Findings by scanner donut with tall square legend marks in scanner colours, Scan history table with a stacked severity bar and mono count tags (C/H/M/L) per run.',
css:zv2_V2_CSS_LATE(),
variants:[
 {name:'KPI strip', html:`<div class="av-v2-strip">${zv2_v2Stat('blog','Runs this week','10','rgba(31,221,255,.10)','5 scanners · 2 sweeps')}${zv2_v2Stat('report','Last run','2 hours ago','rgba(159,239,255,.08)','Completed in 6 min')}${zv2_v2Stat('access','Next run','Tonight 02:00','rgba(255,181,71,.09)','Daily · UTC')}${zv2_v2Stat('fix','Open after last run','293','rgba(255,75,31,.12)','12 fewer than before')}</div>`},
 {name:'Findings by scanner', html:zv2_scannerCardV2L()},
 {name:'Scan history', html:zv2_histV2()},
 {name:'Severity count tags', html:`<div class="av-row" style="gap:6px">${zv2_SEV2.slice(0,4).map((s,i) => zv2_ctag(s, [5,52,30,91][i])).join('')}</div>`},
]};


const DR_CSS = `.av-dr-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,300px),1fr));gap:16px}
.av-dr-flow{display:flex;flex-wrap:wrap;gap:8px;align-items:center;font:11px var(--av-font-mono);color:var(--av-text-helper);letter-spacing:.06em}.av-dr-flow b{padding:4px 8px;border-radius:6px;background:var(--av-layer-03);color:var(--av-text-primary);font-weight:500}
.av-gd{position:relative;display:flex;flex-wrap:wrap;width:min(920px,100%);border-radius:20px;border:1px solid var(--av-border-strong-01);background:var(--av-layer-01);box-shadow:var(--av-shadow-panel);overflow:hidden}
.av-gd__media{position:relative;flex:1 1 min(100%,380px);min-height:360px;aspect-ratio:1;background:#F2F1EE;overflow:hidden}
.av-gd__media::before{content:"";position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'76'%20height%3D'41'%20viewBox%3D'0%200%2076%2041'%3E%3Cpath%20d%3D'M0%200L76%2041M0%2041L76%200'%20fill%3D'none'%20stroke%3D'%23141414'%20stroke-opacity%3D'.07'%20stroke-width%3D'1'%2F%3E%3C%2Fsvg%3E");background-size:76px 41px;-webkit-mask-image:radial-gradient(closest-side at 50% 58%,#000 35%,transparent 100%);mask-image:radial-gradient(closest-side at 50% 58%,#000 35%,transparent 100%)}
.av-gd__media::after{content:"";position:absolute;left:8%;right:8%;top:30%;bottom:0;background:radial-gradient(closest-side,rgba(255,75,31,.14),rgba(31,221,255,.08) 60%,transparent)}
.av-gd__media iframe{position:absolute;inset:28px;width:calc(100% - 56px);height:calc(100% - 56px);border:0;background:transparent;pointer-events:none;z-index:1;color-scheme:normal}.av-gd-step__m iframe,.av-story__m iframe{background:transparent;color-scheme:normal}
.av-gd__side{flex:1 1 min(100%,340px);min-width:0;display:flex;flex-direction:column;justify-content:space-between;padding:56px 0 8px}
.av-gd__copy{padding:0 32px 8px;display:flex;flex-direction:column;gap:12px}.av-gd__copy h2{margin:0;font-size:22px;font-weight:600;letter-spacing:-0.02em;line-height:1.2}.av-gd__copy p{margin:0;font-size:14px;line-height:1.6;color:var(--av-text-secondary)}.av-gd__copy p+p{color:var(--av-text-tertiary)}
.av-gd__foot{padding:16px 32px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
.av-gd__dots{display:flex;gap:6px}.av-gd__dots i{display:block;width:6px;height:6px;border-radius:999px;background:var(--av-border-strong-02);transition:width .3s var(--av-ease-standard),background .3s}.av-gd__dots i.is-on{width:20px;background:var(--av-button-primary)}
.av-gd__x{position:absolute;top:12px;right:12px;z-index:2;width:40px;height:40px;border-radius:999px;border:1px solid var(--av-border-strong-01);background:var(--av-layer-03);color:var(--av-text-primary);display:flex;align-items:center;justify-content:center}
.av-gd-steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,240px),1fr));gap:14px}
.av-gd-step{display:flex;flex-direction:column;border-radius:14px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01);overflow:hidden}
.av-gd-step__m{position:relative;aspect-ratio:4/3;background:#F2F1EE}.av-gd-step__m iframe{position:absolute;inset:10px;width:calc(100% - 20px);height:calc(100% - 20px);border:0;pointer-events:none}
.av-gd-step__b{display:flex;flex-direction:column;gap:6px;padding:14px 16px 16px}.av-gd-step__b span{font:10px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-helper)}.av-gd-step__b b{font-size:15px;font-weight:600}.av-gd-step__b p{margin:0;font-size:13px;line-height:1.5;color:var(--av-text-tertiary)}
.av-story{position:relative;display:flex;flex-wrap:wrap;align-items:center;gap:20px;padding:0 clamp(1rem,3vw,1.5rem) 0 0;border-radius:16px;border:1px solid var(--av-border-subtle-00);background:var(--av-layer-01);overflow:hidden}
.av-story__m{position:relative;width:min(300px,100%);aspect-ratio:2400/1792;background:#F2F1EE;flex-shrink:0}.av-story__m iframe{position:absolute;inset:0;width:100%;height:100%;border:0;pointer-events:none}
.av-story__t{flex:1;min-width:min(100%,220px);display:flex;flex-direction:column;gap:6px;padding:16px 0}.av-story__t span{font:11px var(--av-font-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--av-text-helper)}.av-story__t b{font-size:18px;font-weight:600;letter-spacing:-0.01em}.av-story__t p{margin:0;font-size:14px;line-height:1.5;color:var(--av-text-tertiary)}`;
const panel = (t, s, body, ok, dis, danger) => `<div class="av-stage"><div class="av-panel">${pHead(t, s)}<div class="av-panel__body">${body}</div><div class="av-panel__foot"><button class="av-btn av-btn--secondary">Cancel</button><button class="av-btn ${danger ? 'av-btn--danger-solid' : 'av-btn--primary'}" style="height:44px;font-weight:500"${dis ? ' disabled' : ''}>${ok}</button></div></div></div>`;
const fld = (l, ph, v, h) => `<label class="av-field"><span class="av-field__label">${l}</span><input class="av-input" placeholder="${ph}"${v ? ` value="${v}"` : ''}>${h ? `<span class="av-field__helper">${h}</span>` : ''}</label>`;
const opts = (list, on) => `<div class="av-opt-grid">${list.map(([l, s], i) => `<button class="av-opt" aria-pressed="${i === on}"><b>${l}</b><span>${s}</span></button>`).join('')}</div>`;
const drawersAll = { id:'drawers-all', label:'All drawers & side panels', desc:'Every right-hand panel the dashboard opens, in its real copy. Shell: 480px panel (min(480px,100vw)), slides in from the right over a 45% scrim + 2px blur, 300ms --av-ease-enter; Esc, scrim click or Cancel closes. Head 20/600 title + one line, body scrolls, sticky foot: Cancel (outline) + one primary (Signal; destructive = danger). Primary stays disabled until the form is valid. Every confirm ends in a toast. Buddy pill hides while any panel is open.',
css:OV_CSS + DR_CSS,
variants:[
 {name:'Panel flow', html:`<div class="av-dr-flow"><b>Trigger</b>→<b>Scrim fades 200ms</b>→<b>Panel slides 24px · 300ms</b>→<b>Validate</b>→<b>Primary</b>→<b>Close</b>→<b>Toast bottom-right</b></div>`},
 {name:'Add client', note:'Clients page › Add client, and the account switcher › Add client. Disabled until a name is entered.', html:panel('Add client','Group cloud accounts by customer or team.', fld('Client name','e.g. Northwind Commerce') + fld('Industry','e.g. Retail'), 'Add client', true)},
 {name:'Invite member', note:'Members › Invite. Enabled once the email contains “@”. Adds the person as “Invited”.', html:panel('Invite member','They’ll get an email with a link to join.', fld('Email','name@company.com') + `<span class="av-field__label">Role</span>` + opts([['Admin','Everything, including members and billing'],['Operator','Run scans and remediate'],['Viewer','Read-only access to findings']], 2), 'Send invite', true)},
 {name:'Connect a cloud account', note:'Quick connect from the top bar. The ID field label + placeholder follow the provider: Role ARN · Project ID · Tenant ID.', html:panel('Connect a cloud account','Pick a provider, then paste its ID.', `<div class="av-opt-grid">${[['AWS','Amazon','logo-aws-dark'],['GCP','Google Cloud','logo-gcp'],['Azure','Microsoft','logo-azure']].map(([id, l, lg], i) => `<button class="av-opt" aria-pressed="${i === 0}"><img src="assets/${lg}.svg" alt="" style="height:18px;width:auto;align-self:flex-start;margin-bottom:6px"><b>${id}</b><span>${l}</span></button>`).join('')}</div>` + fld('Account name','e.g. Staging') + fld('Role ARN','arn:aws:iam::123456789012:role/AvistarReadOnly') + `<p style="margin:0;display:flex;gap:8px;font-size:13px;color:var(--av-text-tertiary)">${ic('lock',16,1.8)}Read-only access. Avistar never changes your cloud.</p>`, 'Connect')},
 {name:'Run a scan · Vulnerability', note:'Overview / Scans › Run scan. Primary counts the selection (“Run 5 scanners”); disabled at 0. On confirm the rows show Running, then complete.', html:panel('Run a scan','Production Demo · AWS', `<div class="av-vswitch av-vswitch--block" style="background:var(--av-background)"><button aria-pressed="true">Vulnerability</button><button>Identity</button></div><div class="av-scanner-grid">${[['idcard','IAM','Users, roles, keys, MFA'],['bucket','S3','Bucket ACLs, policies, versioning'],['key','Transmission','TLS and encryption in transit'],['magnifier','Logging','CloudTrail and access logs'],['shield','Security groups','Open ports and ingress']].map(([m, l, s]) => `<button class="av-scanner-tile" aria-pressed="true">${masc(m,'md')}<span class="av-scanner-tile__t"><b>${l}</b><span>${s}</span></span></button>`).join('')}</div>`, 'Run 5 scanners')},
 {name:'Run a scan · Identity', html:panel('Run a scan','Production Demo · AWS', `<div class="av-vswitch av-vswitch--block" style="background:var(--av-background)"><button>Vulnerability</button><button aria-pressed="true">Identity</button></div><div class="av-scanner-grid"><button class="av-scanner-tile" aria-pressed="true">${masc('idcard','md')}<span class="av-scanner-tile__t"><b>Identity discovery</b><span>Classify humans, services and agents</span></span></button></div>`, 'Run 1 scanner')},
 {name:'Schedule scans', note:'Scans › Schedule. Toast: “Scans scheduled daily”.', html:panel('Schedule scans','Avistar runs every scanner on this account automatically.', opts([['Daily','Every night'],['Weekly','Mondays'],['Monthly','1st of month']], 0) + `<label class="av-field"><span class="av-field__label">Time (UTC)</span><input class="av-input" type="time" value="02:00"></label>`, 'Save schedule')},
 {name:'Generate report', note:'Account and Portfolio reports share this panel. The picked option expands to show what’s inside and a “Preview pages →” link that opens the full-screen preview; Generate PDF opens it in print mode.', html:panel('Generate report','Three reports for three readers. Each ends with an execution plan, not a data dump.', `<div style="display:flex;justify-content:space-between;gap:12px;font-size:12px;color:var(--av-text-helper)"><span>Production Demo · Oct 19, 2026</span><span>Letter · PDF</span></div>` + [['Executive summary','3 pages','Score, top 5 fixes and a 90-day roadmap','Leadership, board',['Posture score, trend and 14-day forecast','Five fixes ranked by impact, with owner and effort','Score after each fix','30 / 60 / 90 day roadmap and decisions needed']],['Full findings','4 pages','13 root causes with evidence and fix steps','Engineering, DevOps'],['Compliance mapping','3 pages','Failing controls across 5 frameworks','Compliance, auditors']].map(([t, p, s, w, inc], i) => `<div class="av-rep-opt" style="${i === 0 ? 'border-color:var(--av-text-primary);background:var(--av-layer-03)' : ''}"><div style="display:flex;flex-direction:column;gap:4px"><span style="display:flex;justify-content:space-between;gap:8px"><b style="font-size:14px">${t}</b><span style="font:11px var(--av-font-mono);color:var(--av-text-helper)">${p}</span></span><span style="font-size:13px;color:var(--av-text-tertiary)">${s}</span><span style="font-size:12px;color:var(--av-text-helper)">For ${w}</span></div>${inc ? `<div class="av-stack" style="gap:8px;padding-top:10px;border-top:1px solid var(--av-border-subtle-00)">${inc.map(x => `<span style="display:flex;gap:8px;font-size:13px;color:var(--av-text-secondary)"><span style="color:var(--av-text-info)">${ic('check',14,2.5)}</span>${x}</span>`).join('')}<button class="av-btn av-btn--link" style="align-self:flex-start">Preview pages${arrow}</button></div>` : ''}</div>`).join(''), 'Generate PDF')},
 {name:'Portfolio report', note:'All clients › Generate report: same panel, scoped to the organization.', html:panel('Generate report','One report across every client in Avistar MSP.', `<div style="display:flex;justify-content:space-between;gap:12px;font-size:12px;color:var(--av-text-helper)"><span>Avistar MSP · 6 clients · Oct 19, 2026</span><span>Letter · PDF</span></div>` + opts([['Portfolio summary','Scores, movers and stale scans'],['Client by client','One page per client'],['Compliance roll-up','Frameworks across clients']], 0), 'Generate PDF')},
 {name:'Rename client', html:panel('Rename client','Shown across reports and the account switcher.', fld('Client name','Client name','Hydroponic Cloud'), 'Save')},
 {name:'Remove client', note:'Typed confirm: enabled only when the input equals the client name exactly.', html:panel('Remove Hydroponic Cloud?','Scans stop for all of its accounts. Past reports stay available in Billing.', fld('Type the client name to confirm','Hydroponic Cloud'), 'Remove client', true, true)},
 {name:'Move account', html:panel('Move Production Demo','Scans and findings stay with the account.', `<label class="av-field"><span class="av-field__label">Move to</span><select class="av-select"><option>Choose a client…</option><option>Northpeak Clinics</option><option>Acme Health</option></select></label>`, 'Move account', true)},
 {name:'Remove member', html:panel('Remove maya@avistar.ai?','They lose access right away. You can invite them again later.', '', 'Remove member', false, true)},
 {name:'Leave organization', note:'On confirm: toast, then back to the organization picker.', html:panel('Leave this organization?','You’ll lose access to its clients, scans and reports until someone invites you again.', '', 'Leave organization', false, true)},
 {name:'Disconnect account', note:'Settings › Connected account. Typed confirm with the account name.', html:panel('Disconnect Production Demo?','Scans stop and findings are archived. You can reconnect later.', fld('Type the account name to confirm','Production Demo'), 'Disconnect', true, true)},
 {name:'Edit profile', html:panel('Edit profile','Shown to teammates and on reports you generate.', fld('Full name','Your name','Zalak') + fld('Email','you@company.com','zalak@avistar.ai','Sign-in and alert emails go here.') + fld('Job title','e.g. Security lead'), 'Save changes')},
]};
const HERO = n => `assets/${n}.html`;
const GSTEPS = [['hero-agent-badge','Help guide','Welcome to Avistar','Avistar watches your cloud accounts for the gaps attackers look for.','This two-minute tour shows what each section does and where to start. You can reopen it any time from Help guide.'],['hero-instrument','Step 1 of 8','Overview','Every scan rolls up into one posture score for the client you have selected.','Start here each day. The top three fixes are ranked by how much they raise the score.'],['hero-patchbay','Step 2 of 8','Findings','Each finding is a misconfiguration or exposed resource, sorted by severity.','Filter by account or severity, open one to see why it matters, then remediate in one click.'],['hero-module-rack','Step 3 of 8','Scans','Scanners test IAM, storage, network and logging on a schedule you set.','Run a scan now after a change, or schedule them nightly so findings stay fresh.'],['hero-workstation','Step 4 of 8','Identities','Every person, service account and AI agent that can touch your cloud.','Spot unused keys and over-privileged roles before they become an entry point.'],['hero-vault','Step 5 of 8','Bulletins','New advisories and CVEs, filtered to the services you actually run.','Each bulletin says what is affected and what to do about it.'],['hero-partner-globe','Step 6 of 8','Clients','Group cloud accounts by customer so each one gets its own score and reports.','Switch clients from the sidebar. Every page follows your selection.'],['hero-switchboard','Step 7 of 8','Members','Invite your team and give each person only the access they need.','Owners manage billing, admins connect accounts, viewers read reports.'],['hero-compliance-map','Step 8 of 8','Settings','Alerts, report branding and connected accounts all live here.','Connect your first account to begin, then set where alerts should go.']];
const guideDlg = i => { const g = GSTEPS[i], last = i === GSTEPS.length - 1; return `<div class="av-stage av-stage--center"><div class="av-gd" role="dialog" aria-label="Help guide"><button class="av-gd__x" aria-label="Close guide">${ic('x',16,2)}</button><div class="av-gd__media" aria-hidden="true"><iframe src="${HERO(g[0])}" title="" tabindex="-1" scrolling="no" loading="lazy"></iframe></div><div class="av-gd__side"><div class="av-gd__copy"><span class="av-eyebrow" style="color:var(--av-text-tertiary)">${g[1]}</span><h2>${g[2]}</h2><p>${g[3]}</p><p>${g[4]}</p></div><div class="av-gd__foot"><span class="av-gd__dots" aria-hidden="true">${GSTEPS.map((_, j) => `<i${j === i ? ' class="is-on"' : ''}></i>`).join('')}</span><div class="av-row" style="gap:16px">${i ? '<button class="av-btn av-btn--link">Back</button>' : ''}<button class="av-btn av-btn--primary">${i === 0 ? 'Start tour' : last ? 'Get started' : 'Next'}${arrow}</button></div></div></div></div></div>`; };
const STORIES = [['portfolio','hero-mssp-console','All clients','Every client, one view.','Scores, movers and stale scans across the organization.'],['connect','hero-tech-hub','Connect an account','Read-only, start to finish.','Avistar never changes your resources. Revoke access any time from your cloud console.'],['overview','hero-vault','Your cloud, at a glance','Everything flows into one score.','Every scan feeds the number below. Close the top three fixes and watch it climb.'],['findings','hero-defense-grid','Findings','Gaps an attacker could slip through.','Each finding is a weak brick. Sorted so the worst close first.'],['identities','hero-workstation','Identities','Who walks through the gate.','People, services and AI agents. Each one is a key to your cloud.'],['scans','hero-module-rack','Scans','Checking every part of your cloud.','Scanners run on a schedule, or on demand after a change.'],['bulletins','hero-library','Bulletins','News that actually affects you.','Advisories filtered to the services you run.'],['clients','hero-partner-globe','Clients','One folder per customer.','Each client gets its own score, accounts and reports.'],['members','hero-switchboard','Members','The right access for each person.','Invite teammates and set roles.'],['settings','hero-compliance-map','Settings','Tune how Avistar watches.','Alerts, report branding and the accounts you connect.']];
const helpGuide = { id:'help-guide-v2', label:'Help guide & page stories', desc:'The 9-step Help guide (sidebar › Help guide, profile menu, first sign-in) and the story banner at the top of each page. Both use the animated isometric hero scenes (assets/hero-*.html, rendered in a pointer-less iframe on a #F2F1EE stage with a faint diagonal grid and Signal/Ion glow). Motion: dialog fades + scales from .98 over 300ms; scene cross-fades 250ms between steps; the active dot widens 6→20px in Signal. Keyboard: ← / → step, Esc closes. Dots are clickable and jump to that step (and route the page behind).',
css:OV_CSS + DR_CSS + SPEC_CSS,
variants:[
 ...GSTEPS.map((g, i) => ({ name: i === 0 ? 'Welcome' : g[1] + ' · ' + g[2], html: guideDlg(i) })),
 {name:'All steps · overview', html:`<div class="av-gd-steps">${GSTEPS.map(g => `<div class="av-gd-step"><div class="av-gd-step__m"><iframe src="${HERO(g[0])}" title="" tabindex="-1" scrolling="no" loading="lazy"></iframe></div><div class="av-gd-step__b"><span>${g[1]}</span><b>${g[2]}</b><p>${g[3]}</p></div></div>`).join('')}</div>`},
 {name:'Page story banners', note:'One per page, above the page title. 300px scene (2400/1792), eyebrow = page, title, one line, “Help guide” link opens the guide at that page’s step.', html:`<div class="av-stack" style="gap:12px">${STORIES.map(([p, h, k, t, d]) => `<div class="av-story"><div class="av-story__m"><iframe src="${HERO(h)}" title="" tabindex="-1" scrolling="no" loading="lazy"></iframe></div><div class="av-story__t"><span>${k}</span><b>${t}</b><p>${d}</p></div><button class="av-btn av-btn--link">Help guide${arrow}</button></div>`).join('')}</div>`},
 {name:'Motion spec', html:`<div class="av-spec"><div class="av-spec__row av-spec__row--head"><span>Moment</span><span>Timing</span><span>Detail</span></div>${[['Guide open','300ms · --av-ease-enter','Scrim 0→55% + 3px blur; dialog opacity 0→1, scale .98→1'],['Step change','250ms','Scene iframe cross-fade; copy slides up 8px'],['Active dot','300ms · --av-ease-standard','Width 6→20px, colour → --av-button-primary'],['Hero scenes','Loop · 6–12s','Ambient motion inside each hero-*.html; paused under prefers-reduced-motion'],['Side panel','300ms · --av-ease-enter','translateX(24px)→0 + fade; scrim 45% + 2px blur'],['Report preview','400ms','Full-screen, always dark; pages stagger 80ms'],['Toast','In 200ms · stays 2.6s','slideUp 8px, bottom-right 24px, role="status"']].map(r => `<div class="av-spec__row">${r.map(c => `<span>${c}</span>`).join('')}</div>`).join('')}</div>`},
]};

overlays.css = overlays.css + DR_CSS;
overlays.variants = overlays.variants.map(v => v.name === 'Help guide' ? { name:'Help guide', note:'Same dialog as Dashboard v2: animated isometric scene on a #F2F1EE stage (diagonal grid + Signal/Ion glow), dark copy side, Signal step dots, Start tour → Next → Get started. All 9 steps live in Help guide & page stories.', html: guideDlg(0) } : v);
const SCREENS = [handbook, kit, latest, profile, rowActions, mobileNav, orgPanel, portfolio, connect, findingsV2, scansV2, helpGuide, tables, settings, overlays, buddyChat];

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
const OVERRIDES = {
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
const PATH_PATCH = { I3N, MV4, LABEL_NAV, MASC_NAV, navGlyph };


return { TOKENS_ADD, BASE_ADD, SCREENS, OVERRIDES, PATH_PATCH };
})();
(() => {
  const add = (arr, rows) => rows.forEach(r => { if (!arr.some(x => x[1] === r[1])) arr.push(r); });
  add(T.COLOR_TOKENS, S.TOKENS_ADD); add(T.BASE_TOKENS, S.BASE_ADD);
  const { I3N, MV4, LABEL_NAV, MASC_NAV, navGlyph } = S.PATH_PATCH;
  const mig = h => h && h
    .replace(/<img class="av-nav-item__glyph" src="assets\/mascots\/(\w+)\.png" alt="">(<span class="av-nav-item__label">([^<]+)<\/span>)?/g, (m, n, lab, l) => navGlyph(LABEL_NAV[l] || MASC_NAV[n] || 'overview') + (lab || ''))
    .replace(/assets\/icons-glass\/(\w+)\.svg/g, (m, n) => 'assets/icons-3d/' + I3N(n) + '.png')
    .replace(/assets\/mascots\/(\w+)\.png/g, (m, n) => 'assets/mascots-v4/' + MV4(n) + '.png');
  const apply = (list, migrate) => list.forEach((p, i) => { const o = S.OVERRIDES[p.id] || {}; let v = p.variants || [];
    if (migrate) v = v.map(x => ({ ...x, html: mig(x.html), code: x.code && mig(x.code) }));
    if (o.variants) v = typeof o.variants === 'function' ? o.variants(v) : o.variants;
    const n = { ...p, ...o, variants: v, css: o.cssAdd ? (p.css ? p.css + '\n' : '') + o.cssAdd : p.css }; delete n.cssAdd; list[i] = n; });
  apply(P.PATTERNS, true); apply(K.CARDS, true); apply(C.COMPONENTS, false); apply(P.FOUNDATIONS, false);
})();
window.AvDS = { T, C, P, K, S };
})();
