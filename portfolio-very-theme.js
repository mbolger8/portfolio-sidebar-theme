/**
 * Copyright 2025 mbolger8
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `portfolio-very-theme`
 * 
 * @demo index.html
 * @element portfolio-very-theme
 */
export class PortfolioVeryTheme extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "portfolio-very-theme";
  }

  constructor() {
    super();
    this.activeScreen = 'screen-1';
  }

  // Lit reactive properties
  static get properties() {
    return {
      activeScreen: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: flex;
        height: 100vh;
      }
      
      .home-screen {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: linear-gradient(135deg, #1a1a1a, #444);
        color: white;
        padding-left: 250px;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      .home-screen h1 {
        font-size: 3em;
        font-weight: bold;
        letter-spacing: 1px;
        padding-top: 10px;
      }
      .home-screen p {
        font-size: 1.4em;
        color: #ddd;
        margin-top: 10px;
      }

      .resume-screen {
        background: #f8f9fa;
        color: #222;
        padding-left: 250px;
        margin: auto;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        border-radius: 10px;
        border-bottom: 6px solid #444;
      }
      .resume-screen h1 {
        text-align: center;
        font-size: 2.5em;
      }
      .resume-screen h4 {
        font-size: 1.5em;
        margin-top: 20px;
        color: #444;
      }
      .resume-screen p {
        font-size: 1.2em;
        line-height: 1.6;
        color: #333;
      }

      .experience-screen {
        background: #f8f9fa;
        color: #222;
        padding-left: 250px;
        margin: auto;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        border-radius: 10px;
        border-bottom: 6px solid #444;
      }
      .experience-screen h1 {
        text-align: center;
        font-size: 2.5em;
      }
      .experience-screen h4 {
        font-size: 1.5em;
        margin-top: 20px;
        color: #444;
      }
      .experience-screen p {
        font-size: 1.2em;
        line-height: 1.6;
        color: #333;
      }

      .about-screen {
        background: #f8f9fa;
        color: #222;
        padding-left: 250px;
        margin: auto;
        box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        border-radius: 10px;
        border-bottom: 6px solid #444;
      }
      .about-screen h1 {
        text-align: center;
        font-size: 2.5em;
      }
      .about-screen h4 {
        font-size: 1.5em;
        margin-top: 20px;
        color: #444;
      }
      .about-screen p {
        font-size: 1.2em;
        line-height: 1.6;
        color: #333;
      }

      .contact-screen {
        background: linear-gradient(135deg, #111, #444);
        color: white;
        padding-left: 250px;
        text-align: center;
        border-bottom: 6px solid #444;
      }
      .contact-screen h1 {
        font-size: 2.5em;
      }
      .contact-screen iframe {
        max-width: 90%;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(255,255,255,0.2);
      }

      nav {
        width: 250px;
        background: linear-gradient(45deg, #222, #444);
        height: 100%;
        position: fixed;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

      }
      nav button {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        width: 100%;
        padding: 25px 0;
        font-size: 22px;
        font-weight: bold;
        transition: background-color 0.3s ease;

      }
      nav button:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
      main {
        flex: 1;
        overflow-y: auto;
        scroll-snap-type: y mandatory;
      }
      section {
        height: 100vh;
        scroll-snap-align: start;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .profile-pic {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid white;
        transition: transform 0.3s ease-in-out;

      }
      .profile-pic:hover {
        transform: scale(1.05);
      }

      .scroll-top-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #222;
        color: white;
        border: none;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        font-size: 24px;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      }
      iframe {
        border: none;
        max-width: 90%;
        height: 600px;
      }
      p {
        max-width: 100%;
        font-size: 1.2em;
        line-height: 1.6;
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        margin-left: 50px;
        margin-right: 50px;
      }
      h1 {
        font-size: 2.5em;
        margin-top: 0;
        padding-top: 0;
      }
    `];
  }

  firstUpdated() {
    this._handleHashScroll();
    window.addEventListener('hashchange', () => this._handleHashScroll());
  }

  _scrollTo(id) {
    const el = this.renderRoot.querySelector(`#${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', `#${id}`);
      this.activeScreen = id;
    }
  }

  _handleHashScroll() {
    const id = location.hash.replace('#', '');
    if (id) {
      setTimeout(() => {
        this._scrollTo(id);
        this.activeScreen = id;
      }, 100);
    }
  }

  _scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  
  
  

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <nav>
    <button @click="${() => this._scrollTo('screen-1')}">Home</button>
    <button @click="${() => this._scrollTo('screen-2')}">Resume</button>
    <button @click="${() => this._scrollTo('screen-3')}">Experience</button>
    <button @click="${() => this._scrollTo('screen-4')}">About Me</button>
    <button @click="${() => this._scrollTo('screen-5')}">Contact</button>
  </nav>
  <main>
    <div class="home-screen">
    <section id="screen-1">
      <img class="profile-pic" src="headshot.jpeg" alt="Profile Picture">
      <h1>Matthew Bolger</h1>
          <p>Cyber Security Undergraduate at Penn State University</p>
          <P>Chester Springs, Pennsylvania, United States</p>
    </section>
    </div>

    <div class="resume-screen">
    <section id="screen-2">
      <h1>Resume</h1>
      <h3>Matthew James Bolger</h3>
      <p>Chester Springs, PA  | (484) 883-4912</p>
      <p>Email: mjbolger462@gmail.com / mmb7354@psu.edu</p>
      <h4>Experience</h4>
      <p>Al PAstor Server</p>
      <p>Revival Pizza Pub Server</p>
      <p>Moonshine Chocolate Sales Representative</p>
      <h4>Education</h4>
      <p>Pennsylvania State University, University Park, PA | Cybersecurity</p>
      <h4>Skills</h4>
      <p>Java, SQL, Javascript, CSS, HTML</p>
    </section>
    </div>

    <div class="experience-screen">
    <section id="screen-3"> <h1>Experience</h1>
      <h3>Al Pastor Server</h3>
      <p>Worked as a server at Al Pastor, a restaurant in Chester Springs, PA. Responsibilities included taking orders, serving food, and ensuring customer satisfaction.</p>
      <h3>Revival Pizza Pub Server</h3>
      <p>Worked as a server at Revival Pizza Pub, a restaurant in Chester Springs, PA. Responsibilities included taking orders, serving food, and ensuring customer satisfaction.</p>
      <h3>Moonshine Chocolate Sales Representative</h3>
      <p>Worked as a sales representative for Moonshine Chocolate, a chocolate company. Responsibilities included selling products and promoting the brand.</p>
    </p>
    </section>
    </div>    

    <div class="about-screen">
    <section id="screen-4">
      <h1>About Me</h1>
      <div class="about-me-text">
        <p>Hi! I'm Matthew Bolger, a cybersecurity student at Pennsylvania State University.</p>
        <p>I have a passion for technology and a keen interest in cybersecurity.</p>
        <p>I enjoy learning about new technologies and how they can be used to improve security.</p>
        <p>In my free time, I like to play video games, go to the gym, and spend time with my friends and family.</p>
      </div>
    </section>
    </div>

    <div class="contact-screen">
    <section id="screen-5">
      <h1>Contact</h1>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfkpSvKz7pwQT0SH4qd125BcVRp4od1O_MBV-OTv77rNP8VRg/viewform?embedded=true"></iframe>
    </section>  
  </main>
  </div>

  <button class="scroll-top-button" @click="${this._scrollToTop}">↑</button>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(PortfolioVeryTheme.tag, PortfolioVeryTheme);