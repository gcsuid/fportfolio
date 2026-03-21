import { useEffect, useState } from 'react'
import './App.css'

const LOADER_DURATION_MS = 3000

const projectCards = [
  {
    type: 'featured',
    index: '01 / Full-Stack',
    title: 'the_monolith',
    description:
      'A headless commerce engine built for high-scale luxury editorial brands.',
    tags: ['rust', 'next.js'],
  },
  {
    index: '02 / Tooling',
    title: 'sh_script_clean',
    description:
      'CLI tool to sanitize and minify bash scripts for production environments.',
  },
  {
    index: '03 / UI Kit',
    title: 'ghost_ui',
    description:
      'A collection of glassmorphic primitives for data-heavy dashboards.',
  },
]

const collaborativeSkills = [
  'Strategic Planning',
  'Team Leadership',
  'Cross-functional Communication',
  'User-Centric Design',
]

const technicalSkills = {
  Core: ['TypeScript', 'Rust', 'Go', 'Node.js'],
  Web: ['React / Next', 'Tailwind CSS', 'Three.js', 'PostgreSQL'],
  Infra: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
  Other: ['Redis', 'gRPC', 'Python', 'Framer Motion'],
}

function Preloader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let frameId = 0

    const updateProgress = (now) => {
      const elapsed = now - start
      const nextProgress = Math.min((elapsed / LOADER_DURATION_MS) * 100, 100)

      setProgress(Math.round(nextProgress))

      if (elapsed < LOADER_DURATION_MS) {
        frameId = window.requestAnimationFrame(updateProgress)
      }
    }

    frameId = window.requestAnimationFrame(updateProgress)

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <main className="preloader-screen">
      <div className="status-pill">
        <span className="status-pill__dot" />
        <span>est_connection</span>
      </div>

      <div className="preloader-content">
        <div className="portrait-wrap" aria-hidden="true">
          <div className="portrait-glow" />
          <div className="portrait-shell">
            <div className="face-eyes">
              <span className="eye" />
              <span className="eye" />
            </div>
            <img
              className="portrait-image"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhb95f1-9_2R7nfZNacKsl_4yvfzVljrzYEotmR4I0kNLXuzA_oCN5twJr3gpqy2c_bfdPHs7u9Cx_u740lgT7a0qE5qYe4FbvdEnKZUl9F9YHwVYFTDMahoLk0lbhpZLbc2rEkfIfbbAqdo1AHQwER3jI74zg3c0jNdpSO0UmgGARTI0tipNBCCcoXNhow0VmLwSQdO72Q6CP9OvbSjLRfnGu-JLRjA9jmiDX5BP00kzCBYrBYALTSafzimJMhgrGmm_E-a3dUEu7"
              alt="Minimal line art portrait with glasses behind a laptop."
            />
          </div>
        </div>

        <section className="loader-panel" aria-label="Portfolio loading status">
          <div className="loader-terminal">
            <span>[system]: booting curator_core</span>
            <span className="cursor-blink" />
          </div>

          <div className="progress-track" aria-hidden="true">
            <div
              className="progress-fill"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
          </div>

          <div className="loader-meta">
            <span>ver 2.0.4_stable</span>
            <span>{progress}%</span>
          </div>

          <div className="loader-dots" aria-hidden="true">
            <span className="loader-dot" />
            <span className="loader-dot" />
            <span className="loader-dot" />
          </div>
        </section>
      </div>

      <footer className="preloader-brand">
        <span className="preloader-brand__icon">&gt;_</span>
        <span>terminal_curator</span>
      </footer>
    </main>
  )
}

function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <nav className="top-nav">
        <div className="top-nav__inner">
          <div className="top-nav__links">
            <a className="top-nav__link top-nav__link--active" href="#about">
              about
            </a>
            <a className="top-nav__link" href="#projects">
              projects
            </a>
            <a className="top-nav__link" href="#skills">
              skills
            </a>
            <a className="top-nav__link" href="#contact">
              contact
            </a>
          </div>
          <button className="icon-button" aria-label="Theme toggle">
            <span className="material-symbols-outlined">wb_sunny</span>
          </button>
        </div>
      </nav>

      <main className="portfolio-main">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="hero-status">
              <span className="hero-status__dot" />
              <span>Status: Building in the dark</span>
            </div>
            <h1>
              Howdy! Ayush
              <span>here.</span>
            </h1>
            <p>
              This place shall contact all the hyperlinks to various soc media
              sites, all monochrome color
            </p>
          </div>

          <div className="orbit-anchor" aria-hidden="true">
            <div className="orbit-container">
              <div className="orbit-path" />
              <div className="sun" />
              <div className="earth" />
            </div>
          </div>
        </section>

        <section className="content-grid" id="about">
          <div className="section-label-wrap">
            <h2 className="section-label">About</h2>
          </div>
          <div className="about-content">
            <div className="about-copy">
              <p className="about-copy__lead">
                i believe in the terminal as a tool and the canvas as a
                gallery.
              </p>
              <p className="about-copy__body">
                my work sits at the intersection of high-performance
                architecture and minimalist aesthetics. i strip away the noise
                to leave only the functionality.
              </p>
            </div>

            <div className="about-cards">
              <article className="glass-card">
                <span className="material-symbols-outlined card-icon">
                  terminal
                </span>
                <h3>engineering</h3>
                <p>
                  optimizing for latency and legibility. clean code is
                  non-negotiable.
                </p>
              </article>

              <article className="glass-card">
                <span className="material-symbols-outlined card-icon">
                  auto_awesome
                </span>
                <h3>curation</h3>
                <p>
                  selecting the right stack for the right problem. no bloat,
                  just intent.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="content-grid" id="projects">
          <div className="section-label-wrap">
            <h2 className="section-label">Projects</h2>
          </div>
          <div className="projects-grid">
            {projectCards.map((project) => (
              <article
                key={project.title}
                className={`project-card${
                  project.type === 'featured' ? ' project-card--featured' : ''
                }`}
              >
                <div className="project-card__head">
                  <span>{project.index}</span>
                  <span className="material-symbols-outlined">north_east</span>
                </div>

                <div className="project-card__body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                {project.tags ? (
                  <>
                    <div className="project-card__glow" aria-hidden="true" />
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="content-grid content-grid--skills" id="skills">
          <div className="section-label-wrap">
            <h2 className="section-label">Skills</h2>
          </div>
          <div className="skills-grid">
            <article className="glass-card glass-card--bordered">
              <h3 className="skills-heading">Collaborative Skills</h3>
              <ul className="skill-list">
                {collaborativeSkills.map((skill) => (
                  <li key={skill}>
                    <span className="skill-dot" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="glass-card glass-card--bordered">
              <h3 className="skills-heading">Technical Skills</h3>
              <div className="technical-grid">
                {Object.entries(technicalSkills).map(([group, items]) => (
                  <div key={group} className="technical-group">
                    <span className="technical-group__label">{group}</span>
                    <ul>
                      {items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="portfolio-footer" id="contact">
        <div className="portfolio-footer__inner">
          <div className="portfolio-footer__credit">2024 built by curator.</div>
          <div className="portfolio-footer__links">
            <a href="#" aria-label="GitHub">
              <span className="material-symbols-outlined">hub</span>
            </a>
            <a href="#" aria-label="Layers">
              <span className="material-symbols-outlined">layers</span>
            </a>
            <a href="#" aria-label="Email">
              <span className="material-symbols-outlined">mail_outline</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false)
    }, LOADER_DURATION_MS)

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  return loading ? <Preloader /> : <PortfolioPage />
}

export default App
