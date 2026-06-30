(() => {
  const scenes = [...document.querySelectorAll(".scene")];
  const revealItems = [...document.querySelectorAll(".reveal")];
  const progressFill = document.getElementById("progressFill");
  const autoplayButton = document.getElementById("autoplay");
  const motionButton = document.getElementById("muteMotion");
  const status = document.getElementById("autoplayStatus");
  const chapterButtons = [...document.querySelectorAll("[data-target]")];
  const navButtons = [...document.querySelectorAll(".chapter-nav button")];

  let autoplay = false;
  let autoplayTimer = null;
  let activeSceneIndex = 0;

  function showStatus(message) {
    status.textContent = message;
    status.classList.add("show");
    window.setTimeout(() => status.classList.remove("show"), 1800);
  }

  function goTo(id) {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: document.body.classList.contains("reduced-motion") ? "auto" : "smooth", block: "start" });
  }

  chapterButtons.forEach(button => {
    button.addEventListener("click", () => goTo(button.dataset.target));
  });

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.14 });

  revealItems.forEach(item => revealObserver.observe(item));

  const sceneObserver = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    activeSceneIndex = scenes.indexOf(visible.target);

    navButtons.forEach(button => {
      const target = document.getElementById(button.dataset.target);
      const targetIndex = scenes.indexOf(target);
      const nextChapterIndex = navButtons
        .map(btn => scenes.indexOf(document.getElementById(btn.dataset.target)))
        .find(index => index > targetIndex) ?? scenes.length;

      button.classList.toggle("active", activeSceneIndex >= targetIndex && activeSceneIndex < nextChapterIndex);
    });
  }, { threshold: [0.35, 0.55, 0.75] });

  scenes.forEach(scene => sceneObserver.observe(scene));

  function updateProgress() {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0;
    progressFill.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  function stopAutoplay(message = "Autoscroll gepauzeerd") {
    autoplay = false;
    autoplayButton.setAttribute("aria-pressed", "false");
    autoplayButton.querySelector(".control-icon").textContent = "▶";
    autoplayButton.querySelector(".control-label").textContent = "Autoscroll";
    window.clearInterval(autoplayTimer);
    autoplayTimer = null;
    if (message) showStatus(message);
  }

  function startAutoplay() {
    autoplay = true;
    autoplayButton.setAttribute("aria-pressed", "true");
    autoplayButton.querySelector(".control-icon").textContent = "Ⅱ";
    autoplayButton.querySelector(".control-label").textContent = "Pauze";
    showStatus("Autoscroll gestart — klik opnieuw om te pauzeren");

    autoplayTimer = window.setInterval(() => {
      if (!autoplay) return;
      const nextIndex = activeSceneIndex + 1;
      if (nextIndex >= scenes.length) {
        stopAutoplay("Einde van de presentatie");
        return;
      }
      scenes[nextIndex].scrollIntoView({
        behavior: document.body.classList.contains("reduced-motion") ? "auto" : "smooth",
        block: "start"
      });
    }, 6500);
  }

  autoplayButton.addEventListener("click", () => {
    autoplay ? stopAutoplay() : startAutoplay();
  });

  ["wheel", "touchstart", "pointerdown"].forEach(eventName => {
    window.addEventListener(eventName, event => {
      if (!autoplay) return;
      if (event.target.closest("#autoplay")) return;
      stopAutoplay("Autoscroll gepauzeerd door handmatige bediening");
    }, { passive: true });
  });

  motionButton.addEventListener("click", () => {
    const isReduced = document.body.classList.toggle("reduced-motion");
    motionButton.setAttribute("aria-pressed", String(isReduced));
    motionButton.querySelector(".control-label").textContent = isReduced ? "Animaties uit" : "Rustige modus";
    showStatus(isReduced ? "Animaties uitgeschakeld" : "Animaties ingeschakeld");
  });

  document.addEventListener("keydown", event => {
    if (["ArrowDown", "PageDown"].includes(event.key)) {
      event.preventDefault();
      goTo(scenes[Math.min(activeSceneIndex + 1, scenes.length - 1)].id);
    }
    if (["ArrowUp", "PageUp"].includes(event.key)) {
      event.preventDefault();
      goTo(scenes[Math.max(activeSceneIndex - 1, 0)].id);
    }
    if (event.key === " ") {
      event.preventDefault();
      autoplay ? stopAutoplay() : startAutoplay();
    }
    if (event.key === "Escape" && autoplay) stopAutoplay();
  });
})();
