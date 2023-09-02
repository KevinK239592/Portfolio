// Typing Animation
var typed = new Typed('#typing-text', {
    strings: ["Programmer", "Web Developer", "UI/UX Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

// Download Button
// Dapatkan referensi ke tombol unduhan
var downloadButton = document.getElementById('downloadBtn');

// Tambahkan event listener untuk mendeteksi klik tombol
downloadButton.addEventListener('click', function() {
  // Ganti URL di bawah dengan URL file PDF yang ingin Anda unduh
  var pdfUrl = 'Resume Kevin Kurniawan Handoko.pdf';

  // Buat elemen anchor untuk menginisiasi unduhan
  var link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Resume Kevin Kurniawan Handoko.pdf'; // Nama file yang akan disimpan oleh pengguna
  link.target = '_blank'; // Untuk membuka link di jendela/tab baru jika diperlukan

  // Simulasikan klik pada link untuk memulai unduhan
  link.click();
});