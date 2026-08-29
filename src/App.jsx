import { useCallback, useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import logoMark from "../brand/tahanivo-mark-ink.svg";
import { collection } from "./catalog";

const pageStops = ["hero", "collection-intro", "collection-first", "collection-last", "craft", "quote"];

function shouldPlayIntro() {
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="TAHANIVO home">
      <img src={logoMark} alt="" />
      <span>TAHANIVO</span>
    </a>
  );
}

function App() {
  const [introMode] = useState(shouldPlayIntro);
  const [introVisible, setIntroVisible] = useState(introMode);
  const [introSkipped, setIntroSkipped] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteState, setQuoteState] = useState("idle");
  const [activeStop, setActiveStop] = useState(0);

  const finishIntro = useCallback((skipped = false) => {
    setIntroSkipped(skipped);
    setIntroVisible(false);
  }, []);

  useEffect(() => {
    if (!introVisible) return;

    document.body.classList.add("intro-active");

    function handleIntroKey(event) {
      if (event.key === "Escape") finishIntro(true);
    }

    window.addEventListener("keydown", handleIntroKey);
    return () => {
      document.body.classList.remove("intro-active");
      window.removeEventListener("keydown", handleIntroKey);
    };
  }, [finishIntro, introVisible]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const root = document.documentElement;
    const targets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "-45% 0px -45% 0px" });

    root.classList.add("motion-ready");
    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  useEffect(() => {
    const stops = document.querySelectorAll("[data-scroll-stop]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setActiveStop(pageStops.indexOf(entry.target.id));
      });
    }, { rootMargin: "-45% 0px -45% 0px" });

    stops.forEach((stop) => observer.observe(stop));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleArrowNavigation(event) {
      const isArrow = event.key === "ArrowUp" || event.key === "ArrowDown";
      const isEditing = event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable='true']");

      if (introVisible || !isArrow || isEditing || event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;

      event.preventDefault();
      const direction = event.key === "ArrowDown" ? 1 : -1;
      const nextStop = Math.min(Math.max(activeStop + direction, 0), pageStops.length - 1);
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

      setActiveStop(nextStop);
      document.getElementById(pageStops[nextStop])?.scrollIntoView({ behavior, block: "start" });
    }

    window.addEventListener("keydown", handleArrowNavigation);
    return () => window.removeEventListener("keydown", handleArrowNavigation);
  }, [activeStop, introVisible]);

  function closeMenu() {
    setMenuOpen(false);
  }

  function saveQuote(event) {
    event.preventDefault();
    setQuoteState("saving");

    try {
      const request = Object.fromEntries(new FormData(event.currentTarget));
      localStorage.setItem("tahanivo-quote-draft", JSON.stringify(request));
      event.currentTarget.reset();
      setQuoteState("saved");
    } catch {
      setQuoteState("error");
    }
  }

  return (
    <>
      {introVisible && (
        <div
          className="intro-gate"
          aria-hidden="true"
          onClick={() => finishIntro(true)}
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget) finishIntro(false);
          }}
        >
          <div className="intro-mark">
            <span className="intro-wordmark">TAHANIVO</span>
            <span className="intro-rule" />
          </div>
        </div>
      )}

      <main
        id="top"
        className={introMode && !introSkipped ? "intro-choreographed" : undefined}
        inert={introVisible ? true : undefined}
      >
      <header className="site-header">
        <Brand />

        <nav id="mobile-navigation" className={menuOpen ? "primary-nav is-open" : "primary-nav"} aria-label="Primary">
          <a href="#collection" onClick={closeMenu}>Collection</a>
          <a href="#craft" onClick={closeMenu}>Craft</a>
          <a href="#quote" onClick={closeMenu}>Quote</a>
        </nav>

        <div className="header-actions">
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </header>

      <section className="hero" id="hero" data-scroll-stop aria-labelledby="hero-title">
        <div className="hero-image">
          <div className="hero-image-pan">
            <img src="/images/hero-chair.jpg" alt="Sculptural upholstered chair in dark timber" width="1600" height="1200" fetchPriority="high" />
          </div>
        </div>
        <div className="hero-copy">
          <h1 id="hero-title">
            <span className="hero-line"><span>Objects with</span></span>
            <span className="hero-line"><span>presence.</span></span>
          </h1>
          <div className="hero-actions">
            <a className="button button-primary" href="#collection">View collection</a>
          </div>
        </div>
      </section>

      <section className="collection-section" id="collection" aria-labelledby="collection-title">
        <div className="collection-intro" id="collection-intro" data-scroll-stop>
          <div className="section-heading" data-reveal="title">
            <h2 id="collection-title"><span>The collection.</span></h2>
          </div>
        </div>

        <div className="collection-grid">
          {[collection.slice(0, 2), collection.slice(2)].map((items, pairIndex) => (
            <div
              className={`collection-pair pair-${pairIndex + 1}`}
              id={pairIndex ? "collection-last" : "collection-first"}
              data-scroll-stop
              key={pairIndex}
            >
              {items.map((item, itemIndex) => {
                const index = pairIndex * 2 + itemIndex;
                return (
                  <article className={`collection-item item-${index + 1}`} data-reveal="collection" key={item.id}>
                    <div className="collection-image">
                      <img
                        src={item.image}
                        alt={item.alt}
                        width={index ? 1200 : 1600}
                        height={index ? 900 : 1200}
                        loading={index ? "lazy" : "eager"}
                        decoding="async"
                      />
                    </div>
                    <div className="collection-copy">
                      <p>{item.category}</p>
                      <h3>{item.name}</h3>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      <section className="craft-section" id="craft" data-scroll-stop aria-labelledby="craft-title">
        <div className="craft-copy" data-reveal="left">
          <h2 id="craft-title">Made to be noticed up close.</h2>
          <p>Proportion. Finish. Joinery.</p>
        </div>
        <div className="craft-image" data-reveal="right">
          <img src="/images/craft-detail.jpg" alt="Close detail of furniture joinery and textured upholstery" width="1200" height="1200" loading="lazy" decoding="async" />
        </div>
      </section>

      <section className="quote-section" id="quote" data-scroll-stop aria-labelledby="quote-title">
        <div>
          <h2 id="quote-title">Request a quote.</h2>
        </div>
        <form onSubmit={saveQuote}>
          <label>
            Name
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Furniture interest
            <select name="interest" defaultValue="">
              <option value="" disabled>Select a category</option>
              {collection.map(({ id, category }) => <option value={id} key={id}>{category}</option>)}
            </select>
          </label>
          <label className="full-field">
            What are you looking for?
            <textarea name="message" rows="4" required />
          </label>
          <button className="button button-primary" type="submit" disabled={quoteState === "saving"}>
            {quoteState === "saving" ? "Saving" : "Save request"}
          </button>
          <div className="form-status" aria-live="polite">
            {quoteState === "saved" && <p>Your quote request is saved on this device.</p>}
            {quoteState === "error" && <p>We could not save the request. Copy your details and try again.</p>}
          </div>
        </form>
      </section>

      <footer>
        <Brand />
        <a href="#quote">Request a quote</a>
      </footer>

      </main>
    </>
  );
}

export default App;
