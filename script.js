document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');
    const gallery = document.getElementById('gallery');
    const resumeViewer = document.getElementById('resumeViewer');
    const viewOnlineBtn = document.getElementById('viewOnlineBtn');
    const CORRECT_PASSWORD = 'felicita';

    function showGallery() {
        // Prevent loading twice
        if (gallery.childElementCount > 0) return;
        const images = [
            'photos/gallery1.png',
            'photos/gallery2.png',
            'photos/gallery3.png'
        ];
        images.forEach(function (src) {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'Photo';
            gallery.appendChild(img);
        });
        // Hide password form and error message
        const formElement = document.getElementById('passwordForm');
        if (formElement) {
            formElement.classList.add('hidden');
        }
        const errorElem = document.getElementById('errorMessage');
        if (errorElem) {
            errorElem.classList.add('hidden');
        }
    }

    // Unlock automatically if previously unlocked
    if (localStorage.getItem('galleryUnlocked') === 'true') {
        showGallery();
    }

    const form = document.getElementById('passwordForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const entered = passwordInput.value.trim();
            if (entered === CORRECT_PASSWORD) {
                localStorage.setItem('galleryUnlocked', 'true');
                showGallery();
            } else {
                errorMessage.classList.remove('hidden');
            }
            passwordInput.value = '';
        });
    }

    // Toggle resume viewer
    if (viewOnlineBtn) {
        viewOnlineBtn.addEventListener('click', function () {
            if (resumeViewer.classList.contains('hidden')) {
                resumeViewer.classList.remove('hidden');
                viewOnlineBtn.textContent = 'Hide Online';
            } else {
                resumeViewer.classList.add('hidden');
                viewOnlineBtn.textContent = 'View Online';
            }
        });
    }
});
