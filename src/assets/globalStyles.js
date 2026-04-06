import { C } from "../data/data";

const globalCss = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: ${C.bg};
    color: ${C.dark};
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-track { background: ${C.bg}; }
  ::-webkit-scrollbar-thumb { background: ${C.accent}; border-radius: 3px; }

  /* ── loader animations ── */
  @keyframes dotPulse  { 0%,100%{transform:scale(.55);opacity:.35} 50%{transform:scale(1.2);opacity:1} }
  @keyframes barFill   { from{width:0} to{width:100%} }

  /* ── avatar blob morph ── */
  @keyframes blobMorph {
    0%,100% { border-radius: 42% 58% 60% 40% / 45% 40% 60% 55%; }
    50%     { border-radius: 55% 45% 40% 60% / 40% 55% 45% 60%; }
  }

  /* ── skill marquee ── */
  @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }

  /* ── earth + orbit ── */
  @keyframes earthSpin { from { transform: rotateY(0) }   to { transform: rotateY(360deg) } }
  @keyframes orbit     {
    from { transform: rotate(0deg)   translateX(50px) rotate(0deg) }
    to   { transform: rotate(360deg) translateX(50px) rotate(-360deg) }
  }
  @keyframes glowPulse {
    0%,100% { opacity: .4; transform: scale(1) }
    50%     { opacity: .1; transform: scale(1.28) }
  }

  /* ── mobile menu ── */
  @keyframes menuSlide { from { opacity:0; transform: translateX(100%) } to { opacity:1; transform: translateX(0) } }

  /* ── modal ── */
  @keyframes backdropFade { from { opacity:0 } to { opacity:1 } }
  @keyframes modalRise {
    from { opacity:0; transform: translateY(22px) scale(.97) }
    to   { opacity:1; transform: none }
  }

  /* ── nav links ── */
  .nav-link {
    position: relative;
    text-decoration: none;
    color: ${C.dark};
    font-weight: 500;
    font-size: .75rem;
    letter-spacing: .06em;
    text-transform: uppercase;
    cursor: pointer;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 1.5px;
    background: ${C.brown};
    transition: width .3s;
  }
  .nav-link:hover::after { width: 100%; }

  /* ── buttons ── */
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 10px 22px;
    border-radius: 40px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 600;
    font-size: .8rem;
    letter-spacing: .04em;
    cursor: pointer;
    border: none;
    transition: all .25s;
    text-decoration: none;
  }
  .btn-solid   { background: ${C.brown}; color: #fff; }
  .btn-solid:hover { background: ${C.dark}; transform: scale(1.04); }
  .btn-outline { background: transparent; color: ${C.dark}; border: 1.5px solid ${C.accent}; }
  .btn-outline:hover { background: rgba(110,71,59,.08); }

  /* ── tag pill ── */
  .tag {
    display: inline-block;
    padding: 2px 9px;
    border-radius: 20px;
    background: rgba(167,141,120,.15);
    color: ${C.brown};
    font-size: .69rem;
    font-weight: 600;
  }

  /* ── marquee ── */
  .marquee-track { display: flex; width: max-content; animation: marquee 26s linear infinite; }
  .marquee-track:hover { animation-play-state: paused; }
  .marquee-rev   { animation-direction: reverse; animation-duration: 20s; }

  /* ── education card hover ── */
  .edu-card { transition: transform .3s ease, box-shadow .3s ease; }
  .edu-card:hover { transform: translateX(5px); box-shadow: 0 10px 30px rgba(41,28,14,.13); }

  /* ── experience card ── */
  .exp-card::before {
    content: '';
    position: absolute; top: 0; left: 0;
    width: 4px; height: 100%;
    background: linear-gradient(to bottom, ${C.brown}, ${C.accent});
    border-radius: 4px 0 0 4px;
  }
  .exp-card {
    position: relative;
    overflow: hidden;
    transition: transform .35s cubic-bezier(.22,.61,.36,1), box-shadow .35s;
  }
  .exp-card:hover { transform: translateY(-7px); box-shadow: 0 20px 40px rgba(41,28,14,.15); }

  /* ── project card ── */
  .proj-card {
    transition: transform .38s cubic-bezier(.22,.61,.36,1), box-shadow .38s, border-color .3s;
  }
  .proj-card:hover {
    transform: translateY(-8px) scale(1.025);
    box-shadow: 0 24px 50px rgba(41,28,14,.18), 0 0 0 2px rgba(167,141,120,.4);
    border-color: rgba(167,141,120,.55);
  }

  /* ── contact links ── */
  .c-link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 11px 15px;
    border-radius: 12px;
    background: rgba(255,255,255,.06);
    text-decoration: none;
    color: ${C.neutral};
    transition: background .25s, transform .2s;
    border: 1px solid rgba(167,141,120,.11);
  }
  .c-link:hover { background: rgba(167,141,120,.13); transform: translateX(4px); }

  /* ── hamburger lines ── */
  .ham-line {
    display: block;
    width: 22px; height: 2px;
    background: ${C.dark};
    border-radius: 2px;
    transition: transform .35s ease, opacity .25s ease, width .3s ease;
  }

  /* ── responsive ── */
  @media (max-width: 640px) {
    .desktop-nav { display: none !important; }
    .ham-btn     { display: flex !important; }
  }
`;

export default globalCss;
