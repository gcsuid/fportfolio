import { useEffect, useRef, useState } from 'react'
import './App.css'

const LOADER_DURATION_MS = 3000
const SECTION_SCROLL_GAP = 18

const projectCards = [
  {
    type: 'featured',
    index: '01 / Full-Stack',
    title: 'volops',
    description:
      'Volunteer management platform with role-based auth, QR check-ins, geofencing, photo capture, and real-time org dashboards.',
    tags: ['node.js', 'express', 'javascript'],
    href: 'https://github.com/gcsuid/volops.git',
  },
  {
    index: '02 / AI / RAG',
    title: 'document intelligence qna',
    description:
      'RAG pipeline using LangChain, FAISS, Gemini API, and Streamlit for semantic document search and contextual answers.',
    href: 'https://github.com/gcsuid/chatpdf',
  },
  {
    index: '03 / Practice Platform',
    title: 'pracleecode',
    description:
      'DSA revision platform with spaced repetition, AI-assisted problem rephrasing, and automated approach grading.',
    href: 'https://github.com/gcsuid/leetcode-prac',
  },
]

const currentLearningCards = [
  {
    index: '01 / Language',
    title: 'indian sign language',
    description:
      'Structured YouTube playlist focused on building practical Indian Sign Language vocabulary and everyday communication fluency.',
    href: 'https://www.youtube.com/watch?v=JPV-vboWfhY&list=PLxYMaKXKMMcMgg4f47WkG7AM0bb3AyjTi',
  },
  {
    index: '02 / Full-Stack',
    title: '100xdevs',
    description:
      'Full-stack development coursework covering modern web engineering fundamentals, backend systems, and production-oriented application building.',
    href: 'https://100xdevs.com/',
  },
]

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:dasayush483@gmail.com',
    icon: 'mail',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ayush-das24/',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/gcsuid',
    icon: 'github',
  },
]

const GITHUB_PROFILE_URL = 'https://github.com/gcsuid'

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

const BIRTH_DATE = new Date('2004-03-24T00:00:00+05:30')
const NAV_ITEMS = [
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'currently', label: 'currently' },
  { id: 'skills', label: 'skills' },
]

function getAgeInYears() {
  const elapsedMs = Date.now() - BIRTH_DATE.getTime()
  const yearMs = 365.2425 * 24 * 60 * 60 * 1000

  return elapsedMs / yearMs
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
            <img
              className="portrait-image"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhb95f1-9_2R7nfZNacKsl_4yvfzVljrzYEotmR4I0kNLXuzA_oCN5twJr3gpqy2c_bfdPHs7u9Cx_u740lgT7a0qE5qYe4FbvdEnKZUl9F9YHwVYFTDMahoLk0lbhpZLbc2rEkfIfbbAqdo1AHQwER3jI74zg3c0jNdpSO0UmgGARTI0tipNBCCcoXNhow0VmLwSQdO72Q6CP9OvbSjLRfnGu-JLRjA9jmiDX5BP00kzCBYrBYALTSafzimJMhgrGmm_E-a3dUEu7"
              alt="Minimal line art portrait with glasses behind a laptop."
            />
          </div>
        </div>

        <section className="loader-panel" aria-label="Portfolio loading status">
          <div className="loader-terminal">
            <span>loading to know Ayush</span>
          </div>

          <div className="progress-track" aria-hidden="true">
            <div
              className="progress-fill"
              style={{ transform: `scaleX(${progress / 100})` }}
            />
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

function SocialIcon({ icon }) {
  if (icon === 'linkedin') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12M5.59 9.66h2.71V18H5.59zm4.41 0h2.6v1.14h.04c.36-.69 1.25-1.41 2.58-1.41 2.75 0 3.26 1.81 3.26 4.17V18h-2.71v-3.92c0-.94-.02-2.14-1.3-2.14-1.31 0-1.52 1.02-1.52 2.08V18H10z"
        />
      </svg>
    )
  }

  if (icon === 'github') {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.33-1.74-1.33-1.74-1.09-.75.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.39 1.23-3.24-.12-.3-.53-1.53.12-3.2 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.67.25 2.9.12 3.2.77.85 1.23 1.93 1.23 3.24 0 4.62-2.81 5.64-5.49 5.94.43.38.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5"
        />
      </svg>
    )
  }

  return <span className="material-symbols-outlined">mail</span>
}

function PortfolioPage() {
  const [ageYears, setAgeYears] = useState(() => getAgeInYears())
  const [theme, setTheme] = useState('dark')
  const [activeSection, setActiveSection] = useState('about')
  const [navHeight, setNavHeight] = useState(88)
  const navRef = useRef(null)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setAgeYears(getAgeInYears())
    }, 100)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [])

  useEffect(() => {
    const updateNavHeight = () => {
      const nextHeight = navRef.current?.offsetHeight ?? 88
      setNavHeight(nextHeight)
      document.documentElement.style.setProperty('--nav-height', `${nextHeight}px`)
    }

    updateNavHeight()
    window.addEventListener('resize', updateNavHeight)

    return () => {
      window.removeEventListener('resize', updateNavHeight)
    }
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(
      Boolean,
    )

    if (!sections.length) {
      return undefined
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: `-${navHeight + SECTION_SCROLL_GAP}px 0px -55% 0px`,
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [navHeight])

  const isLightTheme = theme === 'light'

  const handleNavClick = (event, sectionId) => {
    event.preventDefault()
    const section = document.getElementById(sectionId)

    if (!section) {
      return
    }

    const nextTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      navHeight -
      SECTION_SCROLL_GAP

    setActiveSection(sectionId)
    window.scrollTo({
      top: Math.max(nextTop, 0),
      behavior: 'smooth',
    })
    window.history.replaceState(null, '', `#${sectionId}`)
  }

  return (
    <div className={`portfolio-page theme-${theme}`}>
      <nav className="top-nav" ref={navRef}>
        <div className="top-nav__inner">
          <div className="top-nav__links">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                className={`top-nav__link${
                  activeSection === item.id ? ' top-nav__link--active' : ''
                }`}
                href={`#${item.id}`}
                onClick={(event) => handleNavClick(event, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            className="icon-button"
            aria-label={`Switch to ${isLightTheme ? 'dark' : 'light'} theme`}
            onClick={() =>
              setTheme((currentTheme) =>
                currentTheme === 'dark' ? 'light' : 'dark',
              )
            }
            type="button"
          >
            <span
              className={`theme-toggle-icon${
                isLightTheme ? ' theme-toggle-icon--moon' : ' theme-toggle-icon--sun'
              }`}
              aria-hidden="true"
            >
              <span className="theme-toggle-icon__core" />
            </span>
          </button>
        </div>
      </nav>

      <main className="portfolio-main">
        <section className="hero-section">
          <div className="hero-copy">
            <h1>
              ପ୍ରଣାମ! <span className="hero-name-accent">Ayush</span>
              <span>here.</span>
            </h1>
            <div className="hero-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  className="hero-social"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="orbit-anchor" aria-hidden="true">
            <div className="orbit-container">
              <div className="orbit-path" />
              <div className="sun" />
              <div className="earth" />
            </div>
            <p className="orbit-age">{ageYears.toFixed(9)} years alive</p>
          </div>
        </section>

        <section className="content-grid" id="about">
          <div className="section-label-wrap">
            <h2 className="section-label">About</h2>
          </div>
          <div className="about-content">
            <div className="about-copy">
              <p className="about-copy__lead">
                Fresh CS grad who believes working for impact is the only kind
                of work worth doing.
              </p>
              <p className="about-copy__body">
                I've built AI tools at DRDO, led student communities, and
                contributed to social entrepreneurship that reached underserved
                communities. I bring both the technical depth and the
                people-first mindset to back that up.
              </p>
            </div>

            <div className="about-cards">
              <article className="glass-card">
                <span className="material-symbols-outlined card-icon">
                  school
                </span>
                <h3>education</h3>
                <p>
                  KIIT University, 2026. Computer Science graduate with a
                  strong base in full-stack engineering, applied AI, and
                  building systems that solve real problems.
                </p>
              </article>

              <article className="glass-card">
                <span className="material-symbols-outlined card-icon">
                  groups
                </span>
                <h3>impact</h3>
                <p>
                  Through Enactus KIIT, I worked on social entrepreneurship
                  initiatives focused on underserved communities and helped push
                  ideas toward measurable, people-first impact.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="content-grid" id="projects">
          <div className="section-label-wrap">
            <a
              className="section-label section-label--link"
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
            >
              Projects
            </a>
          </div>
          <div className="projects-grid">
            {projectCards.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
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
              </a>
            ))}
          </div>
        </section>

        <section className="content-grid" id="currently">
          <div className="section-label-wrap">
            <h2 className="section-label">Currently</h2>
          </div>
          <div className="currently-grid">
            {currentLearningCards.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="current-card"
              >
                <div className="current-card__head">
                  <span>{item.index}</span>
                  <span className="material-symbols-outlined">north_east</span>
                </div>

                <div className="current-card__body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="current-card__glow" aria-hidden="true" />
              </a>
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

      <footer className="portfolio-footer">
        <div className="portfolio-footer__inner">
          <p className="portfolio-footer__note">
            scrolled this far? You deserve a bonus, might I engross you with
            some handpicked pieces of art,{' '}
            <a
              href="https://open.spotify.com/user/l6p6ltihlrolzunwkm3u5iix6?si=C4cVGWhQSH6j4TuUEHhf1w"
              target="_blank"
              rel="noreferrer"
            >
              click here
            </a>
            .
          </p>
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
