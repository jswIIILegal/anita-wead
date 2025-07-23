//
// Client‑side behaviour for the Wead.ai legacy home page.
//
// This script toggles the embedded résumé viewer and controls access
// to the private photo gallery.  A simple password (stored in a
// constant) unlocks the gallery and persists the state in
// localStorage so repeat visitors don’t need to re‑enter the
// password.  When unlocked the gallery currently displays a
// placeholder message; drop image filenames into the images array to
// populate it with actual content.

document.addEventListener('DOMContentLoaded', () => {
    const viewBtn = document.getElementById('viewResumeBtn');
    const resumeViewer = document.getElementById('resumeViewer');
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');
    const gallery = document.getElementById('gallery');

    // Update this constant to change the gallery password.
    const CORRECT_PASSWORD = 'felicita';

    // Toggle the résumé viewer on button click.
    if (viewBtn) {
        viewBtn.addEventListener('click', () => {
            if (resumeViewer.classList.contains('hidden')) {
                resumeViewer.classList.remove('hidden');
                viewBtn.textContent = 'Hide Online';
            } else {
                resumeViewer.classList.add('hidden');
                viewBtn.textContent = 'View Full Résumé';
            }
        });
    }

    // Automatically unlock gallery if previously unlocked
    if (localStorage.getItem('galleryUnlocked') === 'true') {
        unlockGallery();
    }

    // Handle password form submission
    if (passwordForm) {
        passwordForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const entered = passwordInput.value.trim();
            if (entered === CORRECT_PASSWORD) {
                localStorage.setItem('galleryUnlocked', 'true');
                unlockGallery();
            } else {
                errorMessage.classList.remove('hidden');
            }
            // Clear the field regardless of correctness
            passwordInput.value = '';
        });
    }

    function unlockGallery() {
        if (passwordForm) {
            // Hide the password form completely once unlocked.  Using
            // inline styles here ensures the form disappears even if
            // utility classes are overridden elsewhere.
            passwordForm.classList.add('hidden');
            passwordForm.style.display = 'none';
        }
        if (errorMessage) errorMessage.classList.add('hidden');
        if (gallery) {
            gallery.classList.remove('hidden');
            // Define images here if available; otherwise display a placeholder
            const images = [];
            if (images.length === 0) {
                gallery.innerHTML = '<p>Personal memories will appear here.</p>';
            } else {
                gallery.innerHTML = '';
                images.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    img.alt = 'Photo';
                    gallery.appendChild(img);
                });
            }
        }
    }
});