/* ============================================================
   Portfolio interactions
   1. Top-nav mobile menu (toggle)
   2. Case-study password gate
   ------------------------------------------------------------
   NOTE: This is CLIENT-SIDE gating only — it keeps casual
   visitors out, but anyone can read the source. Do NOT put
   anything truly confidential in the case-study pages.
   ============================================================ */

(function () {
  "use strict";

  /* ---- Config ---- */
  var PASSWORD = "Christos";          // <-- change this to your chosen password
  var STORAGE_KEY = "cs_unlocked";    // remembers unlock for the session

  /* ---- Top-nav mobile menu ---- */
  var toggle   = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".topnav-links");

  function setMenu(open) {
    if (!navLinks) return;
    navLinks.classList.toggle("open", open);
    if (toggle) toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (toggle) toggle.addEventListener("click", function () {
    setMenu(!navLinks.classList.contains("open"));
  });
  // close the menu after tapping a link
  document.querySelectorAll(".topnav-links a").forEach(function (a) {
    a.addEventListener("click", function () { setMenu(false); });
  });

  /* ---- Password gate ---- */
  var modal   = document.getElementById("cs-modal");
  var input   = document.getElementById("pw-input");
  var submit  = document.getElementById("pw-submit");
  var errorEl = document.getElementById("pw-error");

  function isUnlocked() {
    try { return sessionStorage.getItem(STORAGE_KEY) === "1"; } catch (e) { return false; }
  }
  function unlock() {
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch (e) {}
  }
  function openModal(onSuccess) {
    if (!modal) { if (onSuccess) onSuccess(); return; }
    modal.classList.add("open");
    if (input) { input.value = ""; input.focus(); }
    if (errorEl) errorEl.textContent = "";
    modal._onSuccess = onSuccess || null;
  }
  function closeModal() { if (modal) modal.classList.remove("open"); }

  function trySubmit() {
    if (!input) return;
    if (input.value === PASSWORD) {
      unlock();
      closeModal();
      if (modal && modal._onSuccess) modal._onSuccess();
    } else if (errorEl) {
      errorEl.textContent = "Incorrect password. Please try again.";
      input.focus(); input.select();
    }
  }
  if (submit) submit.addEventListener("click", trySubmit);
  if (input)  input.addEventListener("keydown", function (e) { if (e.key === "Enter") trySubmit(); });
  if (modal)  modal.addEventListener("click", function (e) {
    // Don't allow dismissing the gate by clicking the backdrop on a locked case-study page
    if (e.target === modal && !document.body.classList.contains("cs-locked")) closeModal();
  });

  /* (A) On the index: intercept clicks to gated case studies */
  document.querySelectorAll("a.case-card").forEach(function (card) {
    card.addEventListener("click", function (e) {
      if (isUnlocked()) return;             // already unlocked -> follow link
      e.preventDefault();
      var href = card.getAttribute("href");
      openModal(function () { window.location.href = href; });
    });
  });

  /* (B) On a gated case-study page: block content until unlocked. */
  var gatedPage = document.body.getAttribute("data-gated") === "true"
               || document.body.getAttribute("data-casestudy") === "true";
  if (gatedPage && !isUnlocked()) {
    document.body.classList.add("cs-locked");                 // hide content (see styles.css)
    openModal(function () { document.body.classList.remove("cs-locked"); });
  }
})();
