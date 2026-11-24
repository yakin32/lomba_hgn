/* DATA SOAL FAMILY 100 - SMK NEGERI 12 JAKARTA
 * Tema: Konflik Sosial & Dinamika Sekolah
 * 10 Soal, masing-masing memiliki 6 jawaban survei dengan bobot poin: 100, 80, 60, 40, 20, 10 (Total: 310 poin per soal)
 */

const questions = [
  {
    id: 1,
    question: "Sebutkan benda yang wajib dibawa guru saat mengajar!",
    answers: [
      { answer: "Buku pelajaran", points: 100, keywords: ["buku", "buku pelajaran", "buku materi", "buku paket", "modul"] },
      { answer: "Spidol", points: 80, keywords: ["spidol", "pena papan tulis", "marker", "boardmarker"] },
      { answer: "Laptop", points: 60, keywords: ["laptop", "komputer jinjing", "notebook", "komputer"] },
      { answer: "Daftar hadir", points: 40, keywords: ["daftar hadir", "absensi", "presensi", "buku absen", "absen"] },
      { answer: "Rencana pembelajaran", points: 20, keywords: ["rencana pembelajaran", "rpp", "modul ajar", "materi ajar", "silabus"] },
      { answer: "Penghapus papan", points: 10, keywords: ["penghapus papan", "penghapus", "penghapus papan tulis", "tipex"] }
    ]
  },
  {
    id: 2,
    question: "Sebutkan hal yang biasanya dilakukan siswa ketika guru tidak masuk kelas!",
    answers: [
      { answer: "Mengobrol", points: 100, keywords: ["mengobrol", "ngobrol", "berbincang", "bercerita", "curhat"] },
      { answer: "Bermain ponsel", points: 80, keywords: ["bermain ponsel", "main hp", "main handphone", "melihat telepon", "main game"] },
      { answer: "Mengerjakan tugas", points: 60, keywords: ["mengerjakan tugas", "kerja tugas", "belajar mandiri", "mengerjakan pr", "baca buku"] },
      { answer: "Bercanda", points: 40, keywords: ["bercanda", "berkelakar", "bermain dengan teman", "guyonan"] },
      { answer: "Makan camilan", points: 20, keywords: ["makan camilan", "makan", "ngemil", "jajan", "kulineran"] },
      { answer: "Tidur", points: 10, keywords: ["tidur", "tertidur", "beristirahat", "rebahan", "ngantuk"] }
    ]
  },
  {
    id: 3,
    question: "Sebutkan alasan siswa meminta izin keluar kelas!",
    answers: [
      { answer: "Ke toilet", points: 100, keywords: ["ke toilet", "toilet", "kamar mandi", "wc", "buang air"] },
      { answer: "Mengambil air minum", points: 80, keywords: ["mengambil air minum", "minum", "isi botol", "haus", "beli minum"] },
      { answer: "Pergi ke UKS", points: 60, keywords: ["pergi ke uks", "uks", "kurang sehat", "sakit", "mual"] },
      { answer: "Dipanggil guru", points: 40, keywords: ["dipanggil guru", "panggilan guru", "dipanggil wali kelas", "panggilan bk"] },
      { answer: "Mengambil buku", points: 20, keywords: ["mengambil buku", "ambil buku", "buku tertinggal", "ambil barang"] },
      { answer: "Ke perpustakaan", points: 10, keywords: ["ke perpustakaan", "perpustakaan", "pinjam buku di perpus", "perpus"] }
    ]
  },
  {
    id: 4,
    question: "Sebutkan hal yang membuat guru kesal kepada murid!",
    answers: [
      { answer: "Berisik saat pelajaran", points: 100, keywords: ["berisik saat pelajaran", "berisik", "ribut", "gaduh", "rame"] },
      { answer: "Tidak mengerjakan tugas", points: 80, keywords: ["tidak mengerjakan tugas", "tidak mengumpulkan tugas", "lupa tugas", "tidak buat pr", "tugas kosong"] },
      { answer: "Datang terlambat", points: 60, keywords: ["datang terlambat", "terlambat", "telat masuk", "kesiangan"] },
      { answer: "Tidak memperhatikan", points: 40, keywords: ["tidak memperhatikan", "tidak menyimak", "tidak fokus", "melamun", "cuek"] },
      { answer: "Bermain ponsel", points: 20, keywords: ["bermain ponsel", "main hp", "main handphone", "hp"] },
      { answer: "Memotong pembicaraan", points: 10, keywords: ["memotong pembicaraan", "menyela", "memotong ucapan guru", "tidak sopan"] }
    ]
  },
  {
    id: 5,
    question: "Sebutkan hal yang dilakukan siswa untuk menjaga kelas tetap nyaman!",
    answers: [
      { answer: "Membersihkan kelas", points: 100, keywords: ["membersihkan kelas", "bersih bersih", "menyapu", "piket", "mengepel"] },
      { answer: "Membuang sampah", points: 80, keywords: ["membuang sampah", "buang sampah", "tidak membuang sampah sembarangan", "buang sampah pada tempatnya"] },
      { answer: "Merapikan meja", points: 60, keywords: ["merapikan meja", "rapikan meja", "menata kursi", "merapikan kursi", "tata bangku"] },
      { answer: "Tidak berisik", points: 40, keywords: ["tidak berisik", "tenang", "tidak ribut", "menjaga ketenangan", "hening"] },
      { answer: "Menghargai teman", points: 20, keywords: ["menghargai teman", "saling menghormati", "menghormati teman", "rukun", "tidak bertengkar"] },
      { answer: "Membuka jendela", points: 10, keywords: ["membuka jendela", "buka jendela", "ventilasi", "sirkulasi udara", "nyalakan kipas"] }
    ]
  },
  {
    id: 6,
    question: "Sebutkan alasan siswa datang terlambat ke sekolah!",
    answers: [
      { answer: "Bangun kesiangan", points: 100, keywords: ["bangun kesiangan", "kesiangan", "telat bangun", "bergadang", "tidur larut"] },
      { answer: "Macet di jalan", points: 80, keywords: ["macet di jalan", "macet", "lalu lintas padat", "terjebak macet"] },
      { answer: "Kendaraan bermasalah", points: 60, keywords: ["kendaraan bermasalah", "motor mogok", "ban bocor", "kendaraan mogok", "rusak"] },
      { answer: "Menunggu angkutan", points: 40, keywords: ["menunggu angkutan", "menunggu bus", "angkot terlambat", "menunggu kendaraan", "angkot penuh"] },
      { answer: "Hujan deras", points: 20, keywords: ["hujan deras", "hujan", "cuaca buruk", "banjir", "teduh"] },
      { answer: "Lupa menyiapkan barang", points: 10, keywords: ["lupa menyiapkan barang", "mencari barang", "lupa perlengkapan", "menyiapkan tas", "seragam belum siap"] }
    ]
  },
  {
    id: 7,
    question: "Sebutkan hal yang dilakukan guru sebelum memulai pelajaran!",
    answers: [
      { answer: "Menyapa siswa", points: 100, keywords: ["menyapa siswa", "menyapa", "memberi salam", "salam", "selamat pagi"] },
      { answer: "Memeriksa kehadiran", points: 80, keywords: ["memeriksa kehadiran", "absen", "absensi", "presensi", "mengecek presensi"] },
      { answer: "Mengajak berdoa", points: 60, keywords: ["mengajak berdoa", "berdoa", "doa bersama", "pimpin doa"] },
      { answer: "Menyiapkan materi", points: 40, keywords: ["menyiapkan materi", "menyiapkan bahan ajar", "membuka materi", "menyiapkan slide"] },
      { answer: "Mengulas pelajaran lalu", points: 20, keywords: ["mengulas pelajaran lalu", "mengulang materi", "review pelajaran", "apersepsi", "mengingatkan materi"] },
      { answer: "Mengecek kesiapan kelas", points: 10, keywords: ["mengecek kesiapan kelas", "memeriksa kelas", "menyiapkan kelas", "cek kesiapan", "menenangkan murid"] }
    ]
  },
  {
    id: 8,
    question: "Sebutkan hal yang membuat siswa takut saat guru masuk kelas!",
    answers: [
      { answer: "Ulangan mendadak", points: 100, keywords: ["ulangan mendadak", "kuis mendadak", "tes mendadak", "ujian dadakan", "pop quiz"] },
      { answer: "Tugas belum selesai", points: 80, keywords: ["tugas belum selesai", "belum mengerjakan tugas", "pr belum selesai", "lupa tugas", "belum bikin pr"] },
      { answer: "Dipanggil maju", points: 60, keywords: ["dipanggil maju", "disuruh maju", "maju ke depan", "presentasi mendadak", "maju di papan"] },
      { answer: "Ditanya pelajaran", points: 40, keywords: ["ditanya pelajaran", "ditanya guru", "pertanyaan guru", "tanya jawab", "disoal"] },
      { answer: "Nilai diumumkan", points: 20, keywords: ["nilai diumumkan", "pengumuman nilai", "hasil ulangan", "nilai ujian", "rapor"] },
      { answer: "Ditegur karena berisik", points: 10, keywords: ["ditegur karena berisik", "ditegur", "dimarahi", "kena tegur", "hukuman"] }
    ]
  },
  {
    id: 9,
    question: "Sebutkan hal yang membuat suasana kelas menjadi ramai!",
    answers: [
      { answer: "Siswa mengobrol", points: 100, keywords: ["siswa mengobrol", "mengobrol", "ngobrol", "berbicara ramai", "gosip"] },
      { answer: "Guru belum datang", points: 80, keywords: ["guru belum datang", "guru tidak ada", "menunggu guru", "guru terlambat", "jam kosong"] },
      { answer: "Ada permainan kelas", points: 60, keywords: ["ada permainan kelas", "permainan", "game kelas", "bermain bersama", "ice breaking"] },
      { answer: "Diskusi kelompok", points: 40, keywords: ["diskusi kelompok", "diskusi", "kerja kelompok", "tugas kelompok"] },
      { answer: "Ada pengumuman", points: 20, keywords: ["ada pengumuman", "pengumuman", "kabar baru", "info penting", "peringatan"] },
      { answer: "Teman bercanda", points: 10, keywords: ["teman bercanda", "bercanda", "lelucon", "melucu", "jahil"] }
    ]
  },
  {
    id: 10,
    question: "Sebutkan hal yang sering dilakukan siswa saat guru sedang menjelaskan!",
    answers: [
      { answer: "Mencatat materi", points: 100, keywords: ["mencatat materi", "mencatat", "menulis catatan", "menulis materi", "merangkum"] },
      { answer: "Mendengarkan", points: 80, keywords: ["mendengarkan", "menyimak", "memperhatikan", "fokus mendengar", "fokus"] },
      { answer: "Bertanya", points: 60, keywords: ["bertanya", "mengajukan pertanyaan", "tanya guru", "angkat tangan"] },
      { answer: "Melihat papan tulis", points: 40, keywords: ["melihat papan tulis", "melihat papan", "menatap papan", "membaca papan"] },
      { answer: "Mengerjakan latihan", points: 20, keywords: ["mengerjakan latihan", "latihan soal", "mengerjakan soal", "praktik"] },
      { answer: "Berdiskusi pelan", points: 10, keywords: ["berdiskusi pelan", "diskusi pelan", "bertanya ke teman", "berbisik", "tanya sebelah"] }
    ]
  }
];

// Supaya bisa di-load via modul ES maupun script tag biasa di browser:
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
