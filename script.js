/*
 * Client‑side behaviours for the cinematic Wead website.
 *
 * This script contains simple interactive logic for the separate pages:
 *  • Index page: no custom behaviour (navigation handled by links).
 *  • Projects page: unlocks a photo gallery when the correct password is
 *    entered.  The password is stored in a constant (felicita) and a
 *    flag is persisted in localStorage so that visitors who unlock once
 *    don't need to re‑enter it on subsequent visits.
 *  • Resume page: toggles visibility of the embedded résumé on button
 *    click, allowing the user to collapse the PDF viewer to save space.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Projects page logic
  const passwordForm = document.getElementById("passwordForm");
  const passwordInput = document.getElementById("projectPassword");
  const gallery = document.getElementById("gallery");
  const error = document.getElementById("passwordError");
  const PASSWORD = "felicita";

  function unlock() {
    if (passwordForm) {
      passwordForm.style.display = "none";
    }
    if (error) error.style.display = "none";
    const prompt = document.getElementById("galleryPrompt");
    if (prompt) prompt.style.display = "none";
    if (gallery) {
      gallery.style.display = "grid";
      // Populate gallery with images if any defined.  Adjust the list
      // below to include your actual filenames.
      const images = [
        "hipka/photo1.jpg",
        "hipka/photo2.jpg",
        "hipka/photo3.jpg",
      ];
      gallery.innerHTML = "";
      images.forEach((src) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = "Family photo";
        gallery.appendChild(img);
      });
    }
  }

  if (localStorage.getItem("galleryUnlocked") === "true") {
    unlock();
  }

  if (passwordForm) {
    passwordForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const entered = passwordInput.value.trim();
      if (entered.toLowerCase() === PASSWORD) {
        localStorage.setItem("galleryUnlocked", "true");
        unlock();
      } else {
        if (error) {
          error.style.display = "block";
        }
      }
      passwordInput.value = "";
    });
  }

  // Resume page logic
  const toggleBtn = document.getElementById("toggleResume");
  const resumeEmbed = document.getElementById("resumeEmbed");
  if (toggleBtn && resumeEmbed) {
    toggleBtn.addEventListener("click", () => {
      const hidden = resumeEmbed.style.display === "none";
      resumeEmbed.style.display = hidden ? "block" : "none";
      toggleBtn.textContent = hidden ? "Hide Résumé" : "View Full Résumé";
    });
  }
});
