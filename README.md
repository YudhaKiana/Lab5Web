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
- <img width="448" height="154" alt="Screenshot 2026-10-19 173130" src="https://github.com/user-attachments/assets/4a216346-14b7-42b7-9183-cb0c6d52c3d1" />

- <img width="955" height="119" alt="Screenshot 2026-10-19 171710" src="https://github.com/user-attachments/assets/683f81ca-9aa7-4535-b1b5-5871ef3d4a0d" />

- <img width="255" height="353" alt="Screenshot 2026-10-19 173359" src="https://github.com/user-attachments/assets/cdf927e7-f18d-4afc-9826-089962a7f4bb" />

- <img width="246" height="214" alt="Screenshot 2026-10-19 173711" src="https://github.com/user-attachments/assets/35846fda-444c-4581-b66e-e5bef9f21009" />

- <img width="242" height="212" alt="Screenshot 2026-10-19 173750" src="https://github.com/user-attachments/assets/6b871689-149e-476b-8f8e-62287adc4ae2" />

- <img width="245" height="205" alt="Screenshot 2026-10-19 173839" src="https://github.com/user-attachments/assets/e00f4411-bdfb-40f4-8b87-78fdd27111a6" />

- <img width="929" height="437" alt="Screenshot 2026-10-19 173918" src="https://github.com/user-attachments/assets/427d96c8-a817-4ff3-97af-fdb1a8fb93a1" />

- <img width="239" height="265" alt="Screenshot 2026-10-19 173957" src="https://github.com/user-attachments/assets/48cffd7d-4d24-454b-839e-6874b4d43f6b" />

- <img width="758" height="290" alt="Screenshot 2026-10-19 174053" src="https://github.com/user-attachments/assets/fb54c848-474b-43b7-b26c-1558566d3133" />

- <img width="242" height="318" alt="Screenshot 2026-10-19 174109" src="https://github.com/user-attachments/assets/27b720d1-9756-44e3-adce-553fe35f6253" />

- <img width="245" height="320" alt="Screenshot 2026-10-19 174124" src="https://github.com/user-attachments/assets/f4a11e1a-8771-4884-9cc9-c68bfb9539e4" />




## Pengumpulan
1. Periksa semua latihan dan screenshot.
2. Pastikan README dan kode sudah dilengkapi.
3. Buat repository GitHub bernama `Lab5Web`.
4. Commit dan push file proyek ke repository.
5. Kirim URL repository melalui e-learning/ecampus sesuai arahan dosen.
