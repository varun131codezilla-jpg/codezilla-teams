/* ============================================
   SHARED COMPONENTS (Navbar & Footer)
   Multi-Page Navigation & Active State Handling
   ============================================ */

const NAVBAR_HTML = `
<nav class="navbar" id="navbar">
  <div class="container navbar__inner">
    <a href="index.html" class="navbar__logo">
      <span class="logo-mark">CT</span>
      <span class="logo-text">Codezilla<span>Teams</span></span>
    </a>
    <ul class="navbar__links">
      <li><a href="index.html" data-page="index.html">Home</a></li>
      <li><a href="services.html" data-page="services.html">Services</a></li>
      <li><a href="how-it-works.html" data-page="how-it-works.html">How It Works</a></li>
      <li><a href="about.html" data-page="about.html">About Us</a></li>
      <li><a href="industries.html" data-page="industries.html">Industries</a></li>
      <li><a href="faq.html" data-page="faq.html">FAQ</a></li>
    </ul>
    <div class="navbar__actions">
      <a href="contact.html" class="btn btn--secondary btn--sm">Talk to an Expert</a>
      <a href="contact.html" class="btn btn--primary btn--sm">Book Consultation <i data-lucide="arrow-right"></i></a>
    </div>
    <button class="navbar__toggle" id="nav-toggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="navbar__mobile" id="nav-mobile">
    <a href="index.html" data-page="index.html">Home</a>
    <a href="services.html" data-page="services.html">Services</a>
    <a href="how-it-works.html" data-page="how-it-works.html">How It Works</a>
    <a href="about.html" data-page="about.html">About Us</a>
    <a href="industries.html" data-page="industries.html">Industries</a>
    <a href="faq.html" data-page="faq.html">FAQ</a>
    <a href="contact.html" class="btn btn--primary">Book Consultation</a>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <a href="index.html" class="navbar__logo">
          <span class="logo-mark">CT</span>
          <span class="logo-text">Codezilla<span>Teams</span></span>
        </a>
        <p>Your trusted Employer of Record partner for building compliant, scalable teams in India without local entity overhead.</p>
        <div class="footer__location"><i data-lucide="map-pin"></i> Headquartered in Indore, India</div>
        <div class="footer__social">
          <a href="#" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="#" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
          <a href="mailto:hello@codezillateams.com" aria-label="Email"><i data-lucide="mail"></i></a>
        </div>
      </div>
      <div class="footer__col">
        <h4>Services</h4>
        <ul>
          <li><a href="services.html#eor">Employer of Record</a></li>
          <li><a href="services.html#payroll">Payroll & Tax Management</a></li>
          <li><a href="services.html#compliance">Statutory Compliance</a></li>
          <li><a href="services.html#benefits">Employee Benefits (Health/PF/ESIC)</a></li>
          <li><a href="services.html#hr">Full Lifecycle HR Administration</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About Us & Indore HQ</a></li>
          <li><a href="how-it-works.html">How It Works</a></li>
          <li><a href="industries.html">Industries We Support</a></li>
          <li><a href="faq.html">Frequently Asked Questions</a></li>
          <li><a href="contact.html">Book a Consultation</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Expansion Resources</h4>
        <ul>
          <li><a href="how-it-works.html">India Hiring Guide & Timelines</a></li>
          <li><a href="services.html">EOR vs Subsidiary Setup</a></li>
          <li><a href="about.html#compliance">Indian Labor Laws Overview</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span>&copy; 2026 Codezilla Teams. All rights reserved. Headquartered in Indore, MP, India.</span>
      <span>Empowering global teams with 100% legal compliance.</span>
    </div>
  </div>
</footer>
`;

function injectComponents() {
  // Inject Navbar
  const navPlaceholder = document.getElementById('navbar-placeholder');
  if (navPlaceholder) {
    navPlaceholder.innerHTML = NAVBAR_HTML;
  } else if (!document.getElementById('navbar')) {
    document.body.insertAdjacentHTML('afterbegin', NAVBAR_HTML);
  }

  // Inject Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = FOOTER_HTML;
  } else if (!document.querySelector('.footer')) {
    document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
  }

  // Highlight active page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll(`.navbar__links a, .navbar__mobile a`).forEach(link => {
    const page = link.getAttribute('data-page');
    if (page === currentPath || (currentPath === '' && page === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Re-initialize navbar scripts
  initNavbarBehavior();

  // Re-trigger Lucide icons if available
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function initNavbarBehavior() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('nav-toggle');
  const mobile = document.getElementById('nav-mobile');

  if (!navbar) return;

  // Scroll detection
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 30);
  }, { passive: true });

  // Mobile toggle
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobile.classList.toggle('open');
      document.body.style.overflow = mobile.classList.contains('open') ? 'hidden' : '';
    });

    mobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        mobile.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

// Automatically inject when DOM is ready or immediately if already ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', injectComponents);
} else {
  injectComponents();
}
