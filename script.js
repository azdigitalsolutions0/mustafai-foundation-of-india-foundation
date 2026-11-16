(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.textContent = '☰';
    }));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const donateButton = document.getElementById('donateBtn');
  if (donateButton) donateButton.addEventListener('click', () => {
    const config = window.SITE_CONFIG || {};
    const upiId = (config.upiId || '').trim();
    if (upiId) {
      const params = new URLSearchParams({
        pa: upiId,
        pn: config.payeeName || 'Mustafai Organization of India Foundation',
        tn: config.donationNote || 'Donation',
        cu: 'INR'
      });
      window.location.href = 'upi://pay?' + params.toString();
      return;
    }
    // No UPI ID has been provided. Open a real WhatsApp chat to request official payment details.
    const number = config.whatsappNumber || '917542001085';
    const message = 'Hello, I would like to donate to Mustafai Organization of India Foundation. Please share the official donation payment details.';
    const whatsappUrl = 'https://wa.me/' + number + '?text=' + encodeURIComponent(message);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  });

  // Reveal animations, with a fallback for browsers without IntersectionObserver.
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }
})();
