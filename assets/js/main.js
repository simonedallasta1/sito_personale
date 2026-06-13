/* =========================================================
   Simone Dall'Asta — Portfolio
   Interazioni: nav mobile, reveal on scroll, anno footer,
   gestione form (bozza) e cookie banner.
   Nessuna libreria esterna, nessun cookie di tracciamento.
   ========================================================= */
(function () {
  "use strict";

  /* ---- Anno corrente nel footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Menu mobile ---- */
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Chiudi il menu dopo il click su un link (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    // Fallback: mostra tutto
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Form contatti (bozza, non ancora collegato) ---- */
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      // Honeypot: se compilato, è un bot → ignora silenziosamente
      var hp = document.getElementById("website");
      if (hp && hp.value) return;

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      // TODO: collegare a Web3Forms/Formspree (vedi README §7.5)
      if (note) {
        note.textContent = "Grazie! Ti risponderò al più presto.";
        note.style.color = "var(--accent-2)";
      }
      form.reset();
    });
  }

  /* ---- Cookie banner ----
     Mostra un avviso informativo finché l'utente non conferma.
     Memorizza la scelta in localStorage (NON è un cookie di tracciamento).
     Riapribile dal footer ("Gestisci cookie"). */
  var banner = document.getElementById("cookieBanner");
  var okBtn = document.getElementById("cookieOk");
  var manageBtn = document.getElementById("manageCookies");
  var KEY = "cookie-notice-ack";

  function showBanner() { if (banner) banner.classList.add("show"); }
  function hideBanner() { if (banner) banner.classList.remove("show"); }

  try {
    if (!localStorage.getItem(KEY)) {
      // Piccolo ritardo per non disturbare il primo paint
      window.setTimeout(showBanner, 800);
    }
  } catch (err) {
    showBanner(); // se localStorage non è disponibile, mostra comunque
  }

  if (okBtn) {
    okBtn.addEventListener("click", function () {
      try { localStorage.setItem(KEY, "1"); } catch (err) {}
      hideBanner();
    });
  }
  if (manageBtn) {
    manageBtn.addEventListener("click", function (e) {
      e.preventDefault();
      showBanner();
    });
  }
})();
