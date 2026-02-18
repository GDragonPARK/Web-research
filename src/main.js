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
    card.className = `card${isWIP ? ' card--wip' : ''}`;
    card.style.animationDelay = `${index * 0.1}s`;

    const shortLabel = project.title.includes(':')
      ? project.title.split(':')[0].trim()
      : project.title.substring(0, 12);

    card.innerHTML = `
      <div class="project-img">
        <span class="project-img__label">${shortLabel}</span>
      </div>
      <div class="card__header">
        <h3>${project.title}</h3>
        ${isWIP
        ? '<span class="card__badge card__badge--wip">🚧 준비 중</span>'
        : '<span class="card__badge card__badge--ready">✦ Ready</span>'}
      </div>
      <p>${project.summary}</p>
      <div class="card__tags">
        ${project.tags.map(t => `<span class="skill-tag skill-tag--sm">${t}</span>`).join('')}
      </div>
    `;

    grid.appendChild(card);
  });

  // Apply scroll reveal to dynamically created cards
  revealOnScroll(grid.querySelectorAll('.card'));
}

// ── Init ──
renderProjects();
revealOnScroll(document.querySelectorAll('.skill-tag'));
revealOnScroll(document.querySelectorAll('.section-title'));
