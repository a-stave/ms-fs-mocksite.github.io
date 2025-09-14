function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  const toggle = document.getElementById('menuToggle');
  const isOpen = menu.style.left === '0px';

  menu.style.left = isOpen ? '-250px' : '0px';
  toggle.setAttribute('aria-expanded', !isOpen);
}

document.querySelectorAll('.project-filters button').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    const projects = document.querySelectorAll('.project');

    // Update project visibility
    projects.forEach(project => {
      const category = project.getAttribute('data-category');
      project.style.display = (filter === 'all' || category === filter) ? 'flex' : 'none';
    });

    // Update active button styling and ARIA
    document.querySelectorAll('.project-filters button').forEach(btn => {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    });

    button.classList.add('active');
    button.setAttribute('aria-pressed', 'true');
  });
});
