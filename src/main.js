import './style.css'
import { PROJECTS } from './data.js'

// ── Footer Year ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── Smooth Scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// ── Scroll Reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

const revealOnScroll = (elements) => {
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
};

// ── Dynamic Project Rendering ──
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  grid.innerHTML = '';

  PROJECTS.forEach((project, index) => {
    const isWIP = project.status === 'WIP';
    const card = document.createElement('div');
    card.className = `card card--animate${isWIP ? ' card--wip' : ''}`;
    card.style.animationDelay = `${index * 0.15}s`;

    // Click → navigate (Ready only)
    if (!isWIP) {
      card.addEventListener('click', () => {
        window.location.href = `./view.html?id=${project.id}`;
      });
    }

    // Button label
    const btnClass = isWIP ? 'btn-disabled' : 'btn-primary';
    const btnText = isWIP ? '준비 중 (WIP)' : 'Read Report →';

    // Tags with # prefix
    const tagsHtml = project.tags.map(t => `<span>#${t}</span>`).join(' ');

    card.innerHTML = `
      <div class="card-img-holder">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="card-content">
        <div class="tags">${tagsHtml}</div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="card-action">
          <button class="${btnClass}">${btnText}</button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ── Init ──
renderProjects();
revealOnScroll(document.querySelectorAll('.skill-tag'));
revealOnScroll(document.querySelectorAll('.section-title'));
