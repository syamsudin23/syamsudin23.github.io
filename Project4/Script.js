let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header div a');
window.onscroll = () => { 
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header div a[href*=' + id + ']').classList.add('active');
        });
        };
    });
};

// Ambil elemen span yang berisi teks yang ingin dianimasikan
let typingText = document.getElementById('typing-text');

// Teks yang ingin dianimasikan
let textToType = "Historys Of";

// Fungsi untuk animasi mengetik
function typeEffect() {
    // Inisialisasi variabel untuk indeks karakter
    let charIndex = 0;

    function type() {
        // Ambil karakter saat ini
        let currentText = textToType.substring(0, charIndex + 1);
        
        // Masukkan teks yang sedang dianimasikan ke dalam elemen span
        typingText.innerHTML = currentText;

        // Tambah indeks karakter untuk mengetik selanjutnya
        charIndex++;

        // Cek apakah semua karakter sudah dianimasikan
        if (charIndex <= textToType.length) {
            // Panggil fungsi ini lagi setelah jeda waktu tertentu untuk efek mengetik
            setTimeout(type, 100); // Waktu jeda (ms)
        } else {
            // Jeda sebelum memulai kembali animasi (gunakan nilai yang sesuai dengan kebutuhan Anda)
            setTimeout(typeEffect, 2000); // Misalnya, jeda 2 detik sebelum mulai ulang
        }
    }

    // Mulai animasi typing
    type();
}

// Panggil fungsi untuk memulai animasi mengetik saat halaman dimuat
window.onload = function() {
    typeEffect();
};

// Ambil elemen tombol hamburger dan menu navigasi
let hamburgerMenu = document.querySelector('.hamburger-menu');
let navbar = document.querySelector('.navbar');

// Tambahkan event listener untuk mengubah status menu navigasi saat tombol hamburger diklik
hamburgerMenu.addEventListener('click', function() {
    // Toggle class 'open' untuk mengubah ikon hamburger
    hamburgerMenu.classList.toggle('open');
    // Toggle class 'active' untuk menampilkan atau menyembunyikan menu navigasi
    navbar.classList.toggle('active');
});

// Tambahkan event listener untuk menutup menu navigasi saat link di dalamnya diklik (opsional)
navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        hamburgerMenu.classList.remove('open');
    });
});