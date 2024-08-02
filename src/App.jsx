import React, { useState } from 'react';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('es');

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es');

  const content = {
    es: {
      header: 'Portafolio',
      aboutMe: 'Sobre mí',
      projects: 'Proyectos',
      description: 'Desarrollador Full Stack con experiencia en diversas tecnologías. Impulsado por el aprendizaje continuo ' +
                   'y por abordar tareas desafiantes, mi objetivo es especializarme y sobresalir en tecnologías de Back End.',
      project1: { title: 'Surgencia ONG', description: 'Trabajé en el equipo de Back End junto con 5 compañeros para realizar ' + 
        'la página de la ONG Surgencia, comprometida con la conservación de la fauna marítima de Coquimbo, Chile.',
        img: 'https://via.placeholder.com/300', link: 'https://example.com/project1' },
      project2: { title: 'Laboratorio Cívico', description: 'Proyecto para la empresa 3xi. La página web consiste en una encuesta ' +
                'para reducir la brecha de polarizaciones políticas', img: 'https://via.placeholder.com/300', link: 'https://example.com/project2' },
      footer: 'Conéctate conmigo',
    },
    en: {
      header: 'Portfolio',
      aboutMe: 'About Me',
      projects: 'Projects',
      description: 'Full Stack Developer with experience in various technologies. ' +
                   'Driven by continuous learning and tackling challenging tasks, my goal is to specialize and excel in Back End technologies.',
      project1: { title: 'Project 1', description: 'Description of project 1', img: 'https://via.placeholder.com/300', link: 'https://example.com/project1' },
      project2: { title: 'Project 2', description: 'Description of project 2', img: 'https://via.placeholder.com/300', link: 'https://example.com/project2' },
      footer: 'Connect with me',
    },
  };

  const { header, aboutMe, projects, description, project1, project2, footer } = content[language];

  const projectList = [project1, project2];

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <nav>
        <ul>
          <li><a href="#header">{header}</a></li>
          <li><a href="#about-me">{aboutMe}</a></li>
          <li><a href="#projects">{projects}</a></li>
        </ul>
        <div className="buttons">
          <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
          <button onClick={toggleLanguage}>{language === 'es' ? 'English' : 'Español'}</button>
        </div>
      </nav>
      <header id="header">
        <h1>{header}</h1>
        <h2>{language === 'es' ? 'Desarrollador Full Stack' : 'Full Stack Developer'}</h2>
      </header>
      <section id="about-me" className="about-me">
        <img src="https://via.placeholder.com/150" alt="Profile" />
        <div className="about-me-text">
          <h2>{aboutMe}</h2>
          <p>{description}</p>
        </div>
      </section>
      <section id="projects" className="projects">
        <h2>{projects}</h2>
        <div className="project-list">
          {projectList.map((project, index) => (
            <a key={index} href={project.link} className="project-card" target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.title} />
              <div className="project-text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <footer>
        <h3>{footer}</h3>
        <ul>
          <li><a href="https://www.linkedin.com/in/benjaminvaldes91" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://www.github.com/BenjaminValdes" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
