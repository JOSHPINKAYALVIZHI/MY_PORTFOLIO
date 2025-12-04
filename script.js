// Theme handling
(function(){
  const root = document.documentElement;
  const body = document.body;
  const toggle = () => {
    const isDark = body.classList.toggle('dark');
    try{ localStorage.setItem('theme','' + (isDark? 'dark':'light')) }catch(e){}
    updateToggleIcon();
  }
  function updateToggleIcon(){
    const btn = document.getElementById('theme-toggle');
    if(!btn) return;
    btn.textContent = body.classList.contains('dark') ? 'Light' : 'Dark';
  }
  document.addEventListener('DOMContentLoaded', ()=>{
    const saved = (localStorage.getItem('theme')||'').toLowerCase();
    if(saved==='dark') document.body.classList.add('dark');
    else if(!saved && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) document.body.classList.add('dark');
    // wire toggle
    const btn = document.getElementById('theme-toggle');
    if(btn) btn.addEventListener('click', toggle);
    updateToggleIcon();

    // Render projects if container exists — use the projects that are currently in projects.html
    const projects = [
      {
        title: 'Smart Farming System For Precision Agriculture',
        desc: `This project leverages IoT technology to monitor environmental conditions such as soil moisture, temperature, and humidity. The system automates irrigation based on sensor readings and weather forecasts, reducing manual effort and improving efficiency. The data is visualized on a web dashboard, allowing farmers to make informed decisions.`,
        repo: 'https://github.com/PYEXPO25/T038_CodeWizards.git'
      },
      {
        title: 'AI Life Style Analyser',
        desc: `A webpage that includes a to-do list, current mood tracker, and a personal diary. Built to manage daily tasks and record progress. Implemented in Python using Pandas and Streamlit for interaction.`,
        repo: 'https://github.com/JOSHPINKAYALVIZHI/AI_Lifestyle_Analyzer'
      },
      {
        title: 'Sales Dashboard with AI Forecasting',
        desc: `A sales dashboard that utilizes AI to forecast future sales trends. The project handles messy data and visualizes patterns using Streamlit, Pandas, Plotly, and Scikit-learn.`,
        repo: 'https://github.com/JOSHPINKAYALVIZHI/sales_dashboard_project.git'
      },
      {
        title: 'Study Partner',
        desc: `A web application that summarizes notes (text or PDF) and generates expected questions and multiple-choice questions. Technologies: Python, Streamlit, PyPDF2, NLTK, Transformers.`,
        repo: 'https://github.com/JOSHPINKAYALVIZHI/Ds_Project_study_partner.git'
      },
      {
        title: 'Mini Projects on Full Stack',
        desc: `Several mini projects demonstrating full-stack development skills using HTML, CSS, JavaScript, Node.js, and MongoDB. Examples: Basic website, form validation, random profile generation, translation and text-to-speech using APIs.`,
        repo: 'https://github.com/JOSHUA-MELVIN-777/jkjm_07.git'
      }
    ];

    const ul = document.getElementById('projects-list');
    if(ul){
      // replace any existing static content with dynamic cards
      ul.innerHTML = '';
      projects.forEach((p, i)=>{
        const li = document.createElement('li');
        li.className = 'project-card';

        // Build card content with description and a repo button
        const title = document.createElement('h3');
        title.textContent = p.title;

        const desc = document.createElement('p');
        desc.textContent = p.desc;

        const actions = document.createElement('div');
        actions.className = 'project-actions';
        const view = document.createElement('a');
        view.className = 'btn';
        view.href = p.repo;
        view.target = '_blank';
        view.rel = 'noopener noreferrer';
        view.textContent = 'View Repo';
        actions.appendChild(view);

        li.appendChild(title);
        li.appendChild(desc);
        li.appendChild(actions);
        ul.appendChild(li);

        // stagger reveal for nicer UX
        setTimeout(()=> li.classList.add('visible'), 80 * i);
      });
    }
  });
})();
