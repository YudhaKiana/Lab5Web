# Lab5Web — Praktikum 5 JavaScript Dasar

## Identitas
- Mata kuliah: Pemrograman Web
- Praktikum: 5 — JavaScript Dasar dan Manipulasi HTML
- Pertemuan: 6

> Lengkapi identitas mahasiswa sesuai instruksi dosen sebelum dikumpulkan.

## Tujuan
1. Memahami sintaks dasar JavaScript dan penyisipannya pada HTML.
2. Menggunakan variabel, tipe data, operator, percabangan, perulangan, dan function.
3. Menampilkan informasi melalui Console, alert, prompt, dan elemen HTML.
4. Memanipulasi konten serta gaya elemen HTML menggunakan DOM.
5. Membuat interaksi form dan validasi input.
6. Mendokumentasikan hasil praktikum dan pengujiannya.

## File
- `index.html`: antarmuka untuk seluruh latihan.
- `script.js`: fungsi JavaScript untuk latihan 1–8, mini project, dan eksperimen.
- `screenshots/`: tempat menyimpan tangkapan layar hasil pengujian.

## Cara menjalankan
1. Buka folder `Lab5Web` di Visual Studio Code.
2. Buka `index.html` pada browser (atau gunakan ekstensi Live Server).
3. Coba setiap bagian secara berurutan.
4. Untuk melihat output `console.log`, tekan `F12` lalu buka tab **Console**.
5. Simpan screenshot hasil tiap latihan ke folder `screenshots/`.

## Ringkasan latihan dan pengujian
1. **Output:** klik “Tampilkan Hello World”; teks halaman berubah dan pesan muncul di Console.
2. **Alert dan prompt:** masukkan nama, tekan Cancel, dan uji input kosong.
3. **Operasi aritmetika:** uji bilangan 9 dan 4; uji juga pembagi 0.
4. **If–else:** uji nilai 60 atau lebih, nilai di bawah 60, input kosong, dan nilai di luar 0–100.
5. **Switch:** uji angka 1–5 serta input di luar pilihan.
6. **Genap/ganjil:** uji angka positif, negatif, nol, desimal, dan input kosong.
7. **Warna halaman:** uji tombol hijau, putih, dan kuning.
8. **Checkbox menu:** centang dan lepaskan beberapa menu; total harga harus berubah otomatis.
9. **Mini project kalkulator nilai:** uji minimal tiga skenario, misalnya (85,78,88), (60,60,60), dan (40,50,45); uji pula input kosong dan nilai di luar 0–100.
10. **Eksperimen mandiri:** tampilkan tabel perkalian 7, uji function `cekGenap`, dan sembunyikan/tampilkan teks.

## Jawaban pertanyaan tugas

### 1. Perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`
- `console.log()` menampilkan informasi pada Console browser, berguna untuk pemeriksaan dan debugging.
- `alert()` menampilkan kotak dialog berisi pesan.
- `prompt()` menampilkan dialog yang meminta pengguna memasukkan teks; hasilnya berupa string atau `null` jika dibatalkan.
- `textContent` membaca atau mengubah teks pada elemen HTML.
- `innerHTML` membaca atau mengubah isi HTML suatu elemen, termasuk markup HTML.

### 2. Perbedaan `let` dan `const`
`let` digunakan untuk variabel yang nilainya akan ditetapkan ulang. `const` digunakan untuk pengikatan yang tidak akan ditetapkan ulang.
```js
let umur = 20;
umur = 21;

const nama = "Aiden";
// nama = "Budi"; // akan menimbulkan error
```

### 3. Perbedaan operator `==` dan `===`
`==` membandingkan nilai dengan kemungkinan konversi tipe, sedangkan `===` membandingkan nilai dan tipe tanpa konversi implisit. Contoh: `5 == "5"` bernilai `true`, sedangkan `5 === "5"` bernilai `false`.

### 4. Fungsi `if–else` dan `switch`
`if–else` digunakan untuk memilih tindakan berdasarkan kondisi logis, misalnya nilai minimal kelulusan. `switch` digunakan untuk memilih tindakan berdasarkan beberapa kemungkinan nilai tertentu, misalnya pilihan angka 1–5.

### 5. Fungsi parameter dan `return`
Parameter menerima data yang diberikan saat function dipanggil. `return` mengirimkan hasil dari function kepada pemanggilnya.
```js
function hitungLuas(panjang, lebar) {
  return panjang * lebar;
}
```

### 6. Cara `document.getElementById()` memilih elemen
Metode ini mencari elemen HTML berdasarkan atribut `id` dan mengembalikan elemen tersebut agar dapat dibaca atau dimanipulasi oleh JavaScript. Contoh: `document.getElementById("pesan").textContent = "Halo";`.

### 7. Validasi nama dan nilai 0–100
Contoh validasi sederhana:
```js
function validasiData(nama, nilai) {
  const namaValid = nama.trim() !== "";
  const nilaiAngka = Number(nilai);
  const nilaiValid = String(nilai).trim() !== "" &&
    Number.isFinite(nilaiAngka) && nilaiAngka >= 0 && nilaiAngka <= 100;

  if (!namaValid) return "Nama tidak boleh kosong.";
  if (!nilaiValid) return "Nilai harus berada pada rentang 0–100.";
  return "Data valid.";
}
```

## Contoh hasil mini project
Dengan Tugas = 85, UTS = 78, dan UAS = 88:
- Nilai akhir = 85 × 0,30 + 78 × 0,30 + 88 × 0,40 = **83,50**
- Predikat = **B**
- Status = **Lulus**

## Dokumentasi screenshot
Ambil screenshot asli setelah menjalankan program. Disarankan minimal:
- `latihan-1-output.png`
- `latihan-2-prompt.png`
- `latihan-3-aritmetika.png`
- `latihan-4-if-else.png`
- `latihan-5-switch.png`
- `latihan-6-genap-ganjil.png`
- `latihan-7-warna.png`
- `latihan-8-total-menu.png`
- `mini-project-nilai.png`
- `eksperimen-mandiri.png`

Simpan semua screenshot tersebut ke folder `screenshots/`. Folder ini sengaja disediakan kosong; masukkan hasil tangkapan layar dari pengujian yang benar-benar dilakukan.

## Pengumpulan
1. Periksa semua latihan dan screenshot.
2. Pastikan README dan kode sudah dilengkapi.
3. Buat repository GitHub bernama `Lab5Web`.
4. Commit dan push file proyek ke repository.
5. Kirim URL repository melalui e-learning/ecampus sesuai arahan dosen.
