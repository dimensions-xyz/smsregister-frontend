const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const scrollSpy = document.querySelector("[data-scrollspy]");

if (scrollSpy) {
  const links = [...scrollSpy.querySelectorAll("a[data-section]")];
  const sections = links
    .map((link) => document.getElementById(link.dataset.section))
    .filter(Boolean);
  let frameRequested = false;

  const setActiveSection = (sectionId) => {
    links.forEach((link) => {
      const isActive = link.dataset.section === sectionId;
      link.classList.toggle("active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  const updateFromScroll = () => {
    frameRequested = false;
    if (!sections.length) return;

    const marker = Math.min(150, window.innerHeight * 0.28);
    const reachedPageEnd =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 3;
    let activeSection = sections[0];

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= marker) activeSection = section;
      else break;
    }

    if (reachedPageEnd) activeSection = sections.at(-1);
    setActiveSection(activeSection.id);
  };

  const requestUpdate = () => {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(updateFromScroll);
  };

  links.forEach((link) => {
    link.addEventListener("click", () => setActiveSection(link.dataset.section));
  });

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  window.addEventListener("hashchange", requestUpdate);

  const hashId = decodeURIComponent(window.location.hash.slice(1));
  if (hashId && sections.some((section) => section.id === hashId)) {
    setActiveSection(hashId);
  }
  requestUpdate();
}
