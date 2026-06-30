import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './cover.css'
import { NavLink } from 'react-router-dom';

function Cover() {

  return (
    <>
    <div className="home">

      {/* NAVBAR */}
      <nav className="navbar fade-down">
        <h2 className="logo">ProtoDevelop</h2>

        <div className="nav-buttons">
          <NavLink to="/login"><button className="btn ghost">Login</button></NavLink>
          <NavLink to="/signup"><button className="btn primary">Register</button></NavLink>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-left slide-left">
          <h1>Build. Share. Collaborate.</h1>

          <p>
            ProtoDevelop is a modern collaboration platform where creators,
            developers, and innovators come together to host projects, explore ideas,
            and join teams building something meaningful.
          </p>

        </div>

        <div className="hero-right slide-right">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="collaboration"
          />
        </div>

      </section>

      {/* FEATURES */}
      <section className="features">

        <h2 className="fade-up">What You Can Do</h2>

        <div className="feature-grid">

          <div className="card float">
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" alt="" />
            <h3>Create Projects</h3>
            <p>Host technical or non-technical ideas and find collaborators instantly.</p>
          </div>

          <div className="card float delay1">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" alt="" />
            <h3>Join Teams</h3>
            <p>Discover active projects and become part of innovative communities.</p>
          </div>

          <div className="card float delay2">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="" />
            <h3>Collaborate</h3>
            <p>Work together in real-time and bring ideas to life efficiently.</p>
          </div>

        </div>
      </section>

      {/* SHOWCASE */}
      <section className="showcase">

        <div className="showcase-text slide-left">
          <h2>Where Ideas Become Reality</h2>
          <p>
            From startups to student projects, ProtoDevelop gives you the space
            to build anything you imagine with people who share your vision.
          </p>
        </div>

        <div className="showcase-img zoom-in">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
            alt="team work"
          />
        </div>

      </section>

      {/* CTA */}
      <section className="cta glow">

        <div id="cts">
          <h2>Start Your Journey Today</h2>
        <p>Join a growing community of creators and builders.</p>

        <NavLink to="/signup"><button className="btn primary big pulse">Get Started</button></NavLink>
        </div>

      </section>

      <footer className="fade-up">
        <p>© 2026 ProtoDevelop. Built for creators.</p>
      </footer>

    </div>
      
    </>
  )
}

export default Cover
