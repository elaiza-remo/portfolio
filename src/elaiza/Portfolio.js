import React, { useEffect, useState } from "react";
import "./portfolio.css";
import { links, projects, pillars, jobs, education, skills, ticker } from "./content";
import { Plane, Westie, Schnauzer, Cloud, NumberPlane, Stars, Postmark } from "./Art";

const asset = name => `${process.env.PUBLIC_URL}/assets/${name}`;
const MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

// An image that quietly disappears (showing the placeholder behind it) if the file is missing
function OptionalImage({ src, alt, ...rest }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  return <img src={src} alt={alt} onError={() => setFailed(true)} {...rest} />;
}

function Wordmark({ className = "word serif" }) {
  return (
    <span className={className}>
      Elaiza <span className="accent italic">Remo</span>
    </span>
  );
}

// The sky is chosen in public/index.html before the page paints; read it back here
function currentSky() {
  return document.documentElement.getAttribute("data-sky") || "day";
}

function firstVisit() {
  try {
    if (sessionStorage.getItem("er-intro-seen")) return false;
    sessionStorage.setItem("er-intro-seen", "1");
  } catch (e) {
    /* storage blocked: just play it */
  }
  return true;
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(firstVisit);
  const [sky] = useState(currentSky);
  const today = new Date();
  const postDate = `${today.getDate()} ${MONTHS[today.getMonth()]} ${today.getFullYear()}`;

  useEffect(() => {
    const t = setTimeout(() => setShowIntro(false), 3000);
    if (window.console) {
      console.log("%c✈ Hi, fellow inspector!", "font: 600 16px sans-serif; color: #4B44C8");
      console.log(`Like what you see? Let's talk: ${links.email}`);
    }
    return () => clearTimeout(t);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const marqueeName = "Elaiza Remo · Elaiza Remo · Elaiza Remo · Elaiza Remo · ";
  const marqueeTag = "full-stack · people-first · full-stack · people-first · ";

  return (
    <div className="er">
      {showIntro && (
        <div className="intro" aria-hidden="true">
          <div className="sheet" />
          <Wordmark className="name serif" />
        </div>
      )}

      <a className="sr-only" href="#projects">Skip to projects</a>

      <header className="site-header">
        <a className="logo" href="#top" aria-label="Elaiza Remo, back to top">
          <span className="mark">
            {/* The two co-pilots peek out when you hover the logo */}
            <Westie className="dog westie" />
            <Schnauzer className="dog schnauzer" />
            <Plane className="plane" />
          </span>
          <svg aria-hidden="true" width="26" height="10" viewBox="0 0 26 10">
            <path d="M2 8 Q 12 2, 24 5" fill="none" stroke="var(--accent)" strokeWidth="1.6" strokeDasharray="1.5 4" strokeLinecap="round" />
          </svg>
          <Wordmark />
        </a>
        <nav className={`nav${menuOpen ? " open" : ""}`} id="nav" aria-label="Sections" onClick={closeMenu}>
          <a href="#projects">Projects</a>
          <a href="#approach">Approach</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <a className="btn btn-solid btn-sm" href={links.resume} target="_blank" rel="noopener noreferrer">View resume</a>
          <a className="btn btn-sm btn-outline" href={`mailto:${links.email}`}>Email</a>
          <button className="menu-btn" type="button" aria-expanded={menuOpen} aria-controls="nav" onClick={() => setMenuOpen(o => !o)}>
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <Stars />
        <p className="status">
          <Plane width={16} height={12} light="#8F88FF" mid="var(--accent)" dark={null} />
          Open to junior developer roles · Building Shelf &amp; eFit
        </p>

        <div className="stage">
          <div className="bands serif" aria-hidden="true">
            <div className="marq"><span>{marqueeName}</span><span>{marqueeName}</span></div>
            <div className="marq rev"><span>{marqueeTag}</span><span>{marqueeTag}</span></div>
          </div>

          <div className="portrait">
            <span>[ Your portrait ]</span>
            <OptionalImage src={asset("portrait.jpg")} alt="Portrait of Elaiza Remo" />
          </div>

          <svg className="trail" aria-hidden="true" viewBox="0 0 1200 460" preserveAspectRatio="none">
            <path d="M60 420 C 220 380, 260 200, 420 230 S 640 120, 820 60" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="2 10" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="hero-plane fly" aria-hidden="true">
            <Plane width={120} height={90} light="#D9D6FF" />
          </div>
          <div className="cloud one drift" aria-hidden="true"><Cloud width={150} height={70} fill="var(--cloud1)" /></div>
          <div className="cloud two drift" aria-hidden="true"><Cloud width={110} height={52} fill="var(--cloud2)" /></div>

          <div className="chips">
            <div className="chip tag c1">Full-stack × Human-centred</div>
            <div className="chip card c2"><b>University of Alberta</b><span>BSc Computing Science · 2026</span></div>
            <div className="chip card c3"><b>Catalis</b><span>Technical Support Specialist</span></div>
            <div className="chip outline c4">Edmonton, AB</div>
          </div>
        </div>

        <h1 className="serif">Turning everyday problems into intuitive tools. Recent CS graduate, full-stack developer.</h1>
        <div className="ctas">
          <a className="btn btn-solid" href={links.resume} target="_blank" rel="noopener noreferrer">View resume</a>
          <a className="btn" href="#contact">Contact me</a>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="marq"><span>{ticker}</span><span>{ticker}</span></div>
      </div>

      <main>
        <section className="section" id="projects">
          <h2 className="h-section serif">Projects</h2>
          {projects.map((p, i) => (
            <article className="project" key={p.title}>
              <div className="text">
                <div className="num serif">{i + 1} <NumberPlane /></div>
                <h3 className="serif">{p.title}</h3>
                <div className="tags">
                  <span className="pill">{p.category}</span>
                  {p.status && <span className="pill pill-accent">{p.status}</span>}
                </div>
                <p className="desc">{p.desc}</p>
                <p className="stack">{p.stack}</p>
                {p.link && p.link.url && (
                  <a className="visit" href={p.link.url} target="_blank" rel="noopener noreferrer">{p.link.label} →</a>
                )}
                {p.why && (
                  <div className="why">
                    <div className="label">Why I built it</div>
                    <p>{p.why}</p>
                  </div>
                )}
              </div>
              <div className={`shot${p.image || p.wip ? " framed" : ""}`}>
                {p.image || p.wip ? (
                  <div className="frame">
                    <div className="bar" aria-hidden="true">
                      <i /><i /><i />
                      <span className="url">{p.site}</span>
                    </div>
                    <div className="screen">
                      {p.image ? (
                        <OptionalImage src={asset(p.image)} alt={`Screenshot of the ${p.title.split(":")[0]} home page`} loading="lazy" />
                      ) : (
                        <div className="skeleton" aria-hidden="true">
                          <b style={{ width: "38%" }} /><b style={{ width: "62%" }} /><b style={{ width: "50%" }} />
                          <div className="blocks"><b /><b /><b /></div>
                        </div>
                      )}
                    </div>
                    {p.wip && (
                      <div className="wip-tape" role="img" aria-label="Work in progress">
                        <span>Work in progress</span>
                      </div>
                    )}
                  </div>
                ) : p.icon ? (
                  <div className="icon-tile">
                    <img src={asset(p.icon)} alt={`${p.title.split(":")[0]} icon`} loading="lazy" />
                  </div>
                ) : (
                  <div className="soon">
                    <Plane width={96} height={72} light="#D9D6FF" />
                    <span>Screenshots coming soon</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </section>

        <section className="section" id="approach">
          <p className="statement serif">
            Technical skills build software. <span className="accent italic">Curiosity and empathy make it good.</span>
          </p>
          <p className="lede">I'm a developer who cares about the people using what I build. I ask a lot of questions, listen closely, and I'm always open to learning something new.</p>
          <ol className="pillars">
            {pillars.map((p, i) => (
              <li key={p.title}>
                <div className="n serif">{String(i + 1).padStart(2, "0")}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="experience">
          <h2 className="h-section serif">Experience</h2>
          <div className="jobs">
            {jobs.map(j => (
              <div className="job" key={j.role}>
                <div className="top">
                  {j.current && <span className="current">Current</span>}
                  <span className="dates">{j.dates}</span>
                </div>
                <h3 className="serif">{j.role}</h3>
                <div className="org">{j.org}</div>
                <p>{j.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <h2 className="h-section serif">Education</h2>
          <div className="edu">
            <div>
              <div className="dates">{education.dates}</div>
              <h3 className="serif">{education.degree}</h3>
              <div className="org">{education.school}</div>
            </div>
            <ul>
              {education.points.map(pt => <li key={pt}>{pt}</li>)}
            </ul>
          </div>
        </section>

        <section className="section" id="skills">
          <h2 className="h-section serif">Skills</h2>
          {skills.map(g => (
            <div className="skill-row" key={g.label}>
              <div className="label serif">{g.label}</div>
              <ul>{g.items.map(s => <li key={s}>{s}</li>)}</ul>
            </div>
          ))}
        </section>

        <section className="section contact" id="contact">
          <h2 className="h-section serif">Contact</h2>
          <p className="sub serif">Wish you were here.</p>
          <div className="postcard">
            <div className="msg">
              <p>Hi there! If you're hiring, building something, or just want to chat about apps that make everyday life a little easier, I'd love to hear from you.</p>
              <p className="sign">— Elaiza</p>
            </div>
            <div className="addr">
              <div className="stamps" aria-hidden="true">
                <Postmark date={postDate} />
                <div className="stamp">
                  <div>
                    <Plane width={52} height={39} light="#FFFFFF" mid="#D9D6FF" dark={null} />
                    <span>ER · {today.getFullYear()}</span>
                  </div>
                </div>
              </div>
              <div className="to">TO:</div>
              <a href={`mailto:${links.email}`}>{links.email}</a>
              <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={links.resume} target="_blank" rel="noopener noreferrer">View resume →</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <Plane width={20} height={15} dark={null} mid="var(--accent)" />
        <Wordmark />
        <span>© {today.getFullYear()} · Today's sky: {sky}, matched to your local time</span>
      </footer>
    </div>
  );
}
