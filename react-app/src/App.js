import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <header>
      <h1 class="name">🐱</h1>
      <h1 class="name">Catherine Mai</h1>
      <h1 class="github">github: <a href="https://github.com/stickpenguin/stickpenguin.me">@stickpenguin</a></h1>
      <h1 class="student">computer science / media arts student</h1>
      <h1 class="email">e: <a href="mailto:c.mai@outlook.com.au">c.mai@outlook.com.au</a></h1>
      <h1 class="cv"><a href="https://www.canva.com/design/DAE03QlfRtw/hkn1epkQV1jitmAzd_PVQw/view">cv</a></h1>
    </header>

    <main>
      <section class="projects">
        <ul class="projects-list">
          <li class="project">
            <h2><a href="/trends-ideas/index.html">
              Trends Ideas
            </a></h2>
            <h3>
              Concept site design<br />for interior design magazine
            </h3>
            <p>I designed and wrote the home page and some articles on this site based on <a href="https://trendsideas.com/">Trends Ideas</a>, an architecture and interior design magazine, for the course <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2022/SDES3174">SDES3174: Digital Design - Introduction to Web Design</a> at UNSW.</p>
            <p><i>Best viewed on desktop.</i></p>
          </li>
          <div class="divider"></div>
          <li class="project">
            <h2><a href="https://cybercheckup.org.au/#/">
              Cyber Checkup
            </a></h2>
            <h3>
              Prototype site design<br />for cybersecurity questionnaire
            </h3>
            <p>I designed the UI and UX and wrote the frontend of this prototype website for the Cyber Checkup cybersecurity questionnaire project led by Professor <a href="https://www.education.unsw.edu.au/teaching-excellence/scientia-education-academy/richard-buckland">Richard Buckland</a> at UNSW.</p>
            <p><i>Best viewed on desktop.</i></p>
          </li>
        </ul>
      </section>
    </main>
    </div>
  );
}

export default App;
