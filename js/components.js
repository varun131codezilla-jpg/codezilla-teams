/* ============================================
   SHARED COMPONENTS (Navbar & Footer)
   Multi-Page Navigation & Active State Handling
   ============================================ */

const NAVBAR_HTML = `
<nav class="navbar" id="navbar">
  <div class="container navbar__inner">
    <a href="index.html" class="navbar__logo">
      <img class="logo-mark-img" src="assets/images/logo.svg" alt="CT Logo">
      <span class="logo-text">Codezilla <span>Teams</span></span>
    </a>
    <ul class="navbar__links">
      <li><a href="services.html" data-page="services.html">Services</a></li>
      <li><a href="pricing.html" data-page="pricing.html">Pricing</a></li>
      <li><a href="how-it-works.html" data-page="how-it-works.html">How It Works</a></li>
      <li><a href="about.html" data-page="about.html">About Us</a></li>
      <li><a href="industries.html" data-page="industries.html">Industries</a></li>
      <li><a href="compliance-playbook.html" data-page="compliance-playbook.html">Playbook</a></li>
      <li><a href="faq.html" data-page="faq.html">FAQ</a></li>
    </ul>
    <div class="navbar__actions">
      <a href="contact.html" class="btn btn--secondary btn--sm navbar__expert-btn">Talk to an Expert</a>
      <a href="contact.html" class="btn btn--primary btn--sm">Book Consultation <i data-lucide="arrow-right"></i></a>
    </div>
    <button class="navbar__toggle" id="nav-toggle" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="navbar__mobile" id="nav-mobile">
    <a href="index.html" data-page="index.html">Home</a>
    <a href="services.html" data-page="services.html">Services</a>
    <a href="pricing.html" data-page="pricing.html">Pricing</a>
    <a href="how-it-works.html" data-page="how-it-works.html">How It Works</a>
    <a href="about.html" data-page="about.html">About Us</a>
    <a href="industries.html" data-page="industries.html">Industries</a>
    <a href="compliance-playbook.html" data-page="compliance-playbook.html">Playbook</a>
    <a href="faq.html" data-page="faq.html">FAQ</a>
    <a href="contact.html" class="btn btn--primary">Book Consultation</a>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <!-- Footer Trust & Certifications Bar -->
    <div class="footer__trust-bar">
      <div class="footer__trust-item"><i data-lucide="shield-check"></i> ISO/IEC 27001:2022 Certified</div>
      <div class="footer__trust-item"><i data-lucide="lock"></i> SOC 2 Type II Compliant</div>
      <div class="footer__trust-item"><i data-lucide="file-check-2"></i> GDPR &amp; DPDPA 2023 DPA</div>
      <div class="footer__trust-item"><i data-lucide="shield"></i> 100% Indian Labor Compliant</div>
    </div>

    <div class="footer__grid">
      <div class="footer__brand">
        <a href="index.html" class="navbar__logo">
          <img class="logo-mark-img" src="assets/images/logo.svg" alt="CT Logo">
          <span class="logo-text">Codezilla <span>Teams</span></span>
        </a>
        <p>Your legal Employer of Record partner for building 100% exclusive, compliant engineering and product teams in India without local entity overhead.</p>
        <div class="footer__legal-box">
          <strong>Legal Operating Entity:</strong><br>
          Codezilla Global Technologies Private Limited<br>
          <strong>CIN:</strong> U72900MP2021PTC054321<br>
          <strong>Registered Office (India HQ):</strong> Plot 92, Scheme No 47, 2nd Floor, Sapna Sangeeta Road, Indore, Madhya Pradesh 452001, India<br>
          <strong>United Kingdom Office:</strong> 85 Great Portland Street, First Floor, London W1W 7LT, UK
        </div>
        <div class="footer__social">
          <a href="https://www.linkedin.com/company/codezillians/" target="_blank" rel="noopener" title="LinkedIn Profile" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="https://x.com/codezillians" target="_blank" rel="noopener" title="X (Twitter) Profile" aria-label="X (Twitter)"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
          <a href="https://www.instagram.com/codezilla.io/" target="_blank" rel="noopener" title="Instagram Profile" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
          <a href="mailto:hello@codezilla.io" title="Email Us" aria-label="Email"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></a>
          <a href="tel:+917314945411" title="Call Us (+91 731 494 5411)" aria-label="Phone"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>
        </div>
      </div>
      <div class="footer__col">
        <h4>Services & Pricing</h4>
        <ul>
          <li><a href="services.html#eor">Employer of Record (EOR)</a></li>
          <li><a href="services.html#contractor">Contractor of Record</a></li>
          <li><a href="services.html#recruitment">Recruitment Concierge</a></li>
          <li><a href="services.html#payroll">Payroll & Tax (TDS) Management</a></li>
          <li><a href="services.html#compliance">Statutory Compliance (EPFO/ESIC)</a></li>
          <li><a href="pricing.html">Transparent Pricing</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Why Codezilla Teams</h4>
        <ul>
          <li><a href="about.html#leadership">Indore HQ & Executive Leadership</a></li>
          <li><a href="about.html#compliance">100% Legal & Liability Protection</a></li>
          <li><a href="how-it-works.html#agency-vs-eor">Agency vs. True EOR Comparison</a></li>
          <li><a href="how-it-works.html">3-Day Rapid Onboarding</a></li>
          <li><a href="services.html#transition">$0 Subsidiary Transition Guarantee</a></li>
          <li><a href="compliance-playbook.html">EOR Compliance Playbook</a></li>
          <li><a href="faq.html">Frequently Asked Questions</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Industry Specialties</h4>
        <ul>
          <li><a href="industries.html#saas">SaaS & Enterprise Cloud</a></li>
          <li><a href="industries.html#ai">Artificial Intelligence & Deep Tech</a></li>
          <li><a href="industries.html#healthcare">Healthcare & Regulated HealthTech</a></li>
          <li><a href="industries.html#fintech">FinTech & Banking Infrastructure</a></li>
          <li><a href="industries.html#ecommerce">E-commerce & Retail Tech</a></li>
          <li><a href="industries.html#manufacturing">Manufacturing & Automation</a></li>
        </ul>
      </div>
    </div>

    <!-- Data Privacy & Confidentiality Pledge -->
    <div class="footer__privacy-pledge">
      <div class="footer__privacy-icon"><i data-lucide="shield-alert"></i></div>
      <div>
        <strong>Strict Data Confidentiality & Privacy Pledge:</strong> Candidate resumes, compensation bands, salary structures, and internal hiring roadmaps are protected under strict NDA and DPDPA 2023 protocols. We never share, sell, or distribute your proprietary hiring data before, during, or after engagement.
      </div>
    </div>

    <div class="footer__bottom">
      <span>&copy; 2026 Codezilla Global Technologies Pvt. Ltd. All rights reserved. Headquartered in Indore (MP, India) &amp; London (UK).</span>
      <span>Flat-Fee EOR &bull; Zero Hidden Markups &bull; 100% Exclusive Teams</span>
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
