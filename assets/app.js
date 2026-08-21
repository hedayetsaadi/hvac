/* Shared behavior and reusable content for the static HVAC site. */
(function () {
  const site = window.HVAC_SITE;
  const page = document.body.dataset.page || "";
  const header = document.querySelector("[data-header]");
  const footer = document.querySelector("[data-footer]");
  const brand = `<a class="brand" href="index.html" aria-label="${site.business.name} home"><span class="brand-mark">${site.business.initials}</span><span class="brand-words"><strong>${site.business.name}</strong><small>${site.business.descriptor}</small></span></a>`;

  document.querySelectorAll("[data-business-name]").forEach((node) => { node.textContent = site.business.name; });
  document.querySelectorAll("[data-phone]").forEach((node) => { node.textContent = site.contact.phoneDisplay; node.href = `tel:${site.contact.phoneHref}`; });
  document.querySelectorAll("[data-email]").forEach((node) => { node.textContent = site.contact.email; node.href = `mailto:${site.contact.email}`; });
  document.querySelectorAll("[data-address]").forEach((node) => { node.textContent = site.contact.address; });

  if (header) {
    header.innerHTML = `<div class="container nav-row">${brand}<nav class="desktop-nav" aria-label="Primary navigation">${site.nav.map((item) => `<a class="${item.key === page ? "active" : ""}" href="${item.href}">${item.label}</a>`).join("")}</nav><a class="header-phone" href="tel:${site.contact.phoneHref}"><span>Call now</span>${site.contact.phoneDisplay}</a><button class="menu-button" aria-expanded="false" aria-label="Open menu"><i></i><i></i><i></i></button></div><div class="mobile-menu"><nav class="container">${site.nav.map((item) => `<a class="${item.key === page ? "active" : ""}" href="${item.href}">${item.label}<span>→</span></a>`).join("")}<a class="button" href="contact.html">Book service</a></nav></div>`;
    const menuButton = header.querySelector(".menu-button");
    const mobileMenu = header.querySelector(".mobile-menu");
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      menuButton.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      mobileMenu.classList.toggle("open", !open);
    });
    const shrink = () => header.classList.toggle("compact", window.scrollY > 28);
    window.addEventListener("scroll", shrink, { passive: true });
    shrink();
  }

  document.querySelectorAll("[data-services]").forEach((container) => {
    const limit = Number(container.dataset.services) || site.services.length;
    container.innerHTML = site.services.slice(0, limit).map((service, index) => `<article class="service-card ${index === 0 ? "featured" : ""}"><span class="service-icon">${service.icon}</span><div><h3>${service.title}</h3><p>${service.short}</p></div><a href="contact.html?service=${encodeURIComponent(service.title)}">Request service <span>→</span></a></article>`).join("");
  });

  document.querySelectorAll("[data-service-details]").forEach((container) => {
    container.innerHTML = site.services.map((service, index) => `<article class="detail-row"><div class="detail-number">0${index + 1}</div><div><span class="service-icon">${service.icon}</span><h2>${service.title}</h2><p>${service.short}</p></div><ul>${service.features.map((feature) => `<li>${feature}</li>`).join("")}</ul><a class="text-link" href="contact.html?service=${encodeURIComponent(service.title)}">Schedule ${service.title.toLowerCase()} →</a></article>`).join("");
  });

  document.querySelectorAll("[data-service-areas]").forEach((container) => { container.innerHTML = site.serviceAreas.map((area) => `<li><span>✓</span>${area}</li>`).join(""); });
  document.querySelectorAll("[data-hours]").forEach((container) => { container.innerHTML = site.hours.map((line) => `<li>${line}</li>`).join(""); });
  document.querySelectorAll("[data-service-options]").forEach((select) => {
    select.insertAdjacentHTML("beforeend", site.services.map((service) => `<option value="${service.title}">${service.title}</option>`).join(""));
    const requested = new URLSearchParams(window.location.search).get("service");
    if (requested && [...select.options].some((option) => option.value === requested)) select.value = requested;
  });

  document.querySelectorAll("[data-request-form]").forEach((form) => {
    const status = form.querySelector("[data-form-status]");
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const values = Object.fromEntries(new FormData(form));
      status.textContent = "Preparing your request…";
      status.className = "form-status";
      if (site.formEndpoint) {
        try {
          const response = await fetch(site.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
          if (!response.ok) throw new Error("Request failed");
          form.reset();
          status.textContent = "Thank you. Your request has been sent.";
          status.className = "form-status success";
        } catch (error) {
          status.textContent = `We could not send the form. Please call ${site.contact.phoneDisplay}.`;
          status.className = "form-status error";
        }
        return;
      }
      const subject = encodeURIComponent(`Service request: ${values.service || "HVAC assistance"}`);
      const body = encodeURIComponent(`Name: ${values.name}\nPhone: ${values.phone}\nEmail: ${values.email || "Not provided"}\nService: ${values.service}\nPreferred time: ${values.time || "Flexible"}\n\nDetails:\n${values.message}`);
      status.textContent = `Your email app is opening. You can also call ${site.contact.phoneDisplay}.`;
      status.className = "form-status success";
      window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    });
  });

  if (footer) footer.innerHTML = `<div class="container footer-main"><div class="footer-brand">${brand}<p>${site.business.tagline} Local expertise, clear options, and workmanship backed by our satisfaction promise.</p></div><div><h3>Explore</h3><a href="about.html">About us</a><a href="service-area.html">Service area</a><a href="resources.html">Resources</a><a href="financing.html">Financing</a></div><div><h3>Services</h3>${site.services.slice(0, 5).map((service) => `<a href="services.html">${service.title}</a>`).join("")}</div><div><h3>Get in touch</h3><a class="footer-phone" href="tel:${site.contact.phoneHref}">${site.contact.phoneDisplay}</a><a href="mailto:${site.contact.email}">${site.contact.email}</a><address>${site.contact.address}</address></div></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} ${site.business.legalName}. All rights reserved.</span><span><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="accessibility.html">Accessibility</a></span></div>`;
})();
/* End shared static-site behavior. */
