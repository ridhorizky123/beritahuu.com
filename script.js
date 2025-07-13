// Anda bisa menambahkan fungsionalitas JavaScript di sini.
// Untuk template ini, JS belum memiliki fungsionalitas kompleks,
// namun sudah siap untuk ditambahkan di masa mendatang.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portal Berita Modern Siap Ditingkatkan!');

    // Contoh: Scroll ke atas saat logo diklik
    const logo = document.querySelector('.logo a');
    if (logo) {
        logo.addEventListener('click', (e) => {
            // Hanya cegah default jika href adalah '#' atau kosong,
            // jika sudah diarahkan ke index.html biarkan perilaku default
            if (logo.getAttribute('href') === '#' || logo.getAttribute('href') === '') {
                e.preventDefault();
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Anda bisa menambahkan fitur interaktif lainnya di sini,
    // seperti lazy loading gambar, animasi scroll, atau filter artikel.
});