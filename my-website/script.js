// Jalankan kode setelah halaman selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website has been loaded successfully!');

    // Smooth Scroll functionality
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Kontak dengan Validasi
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Mencegah pengiriman form default

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validasi Form: Pastikan semua field terisi
        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill out all fields';
            formMessage.style.color = 'red';
        } else {
            formMessage.textContent = 'Your message has been sent successfully!';
            formMessage.style.color = 'green';

            // Log saat form berhasil disubmit
            console.log('Form submitted successfully!');

            // Tambahkan logika pengiriman data ke server di sini (opsional)

            // Reset form setelah sukses
            form.reset();  
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Animasi untuk progress bar
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });

    // Fade-in effect for sections
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
function searchFunction() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const articles = document.querySelectorAll('#blog article');

    articles.forEach(article => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        const summary = article.querySelector('p').textContent.toLowerCase();

        if (title.includes(input) || summary.includes(input)) {
            article.style.display = 'block'; // Tampilkan artikel yang cocok
        } else {
            article.style.display = 'none'; // Sembunyikan artikel yang tidak cocok
        }
    });
}
