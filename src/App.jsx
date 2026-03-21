import { useEffect, useState } from 'react'
import './App.css'

const LOADER_DURATION_MS = 3000

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

function PortfolioShell() {
  return (
    <main className="portfolio-shell">
      <p className="portfolio-shell__eyebrow">Portfolio System Online</p>
      <h1>Portfolio landing is ready for build-out.</h1>
      <p className="portfolio-shell__copy">
        The preloader now runs inside the React app. Next step is replacing
        this shell with your actual portfolio sections.
      </p>
    </main>
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

  return loading ? <Preloader /> : <PortfolioShell />
}

export default App
