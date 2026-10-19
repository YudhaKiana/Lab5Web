// Praktikum 5: JavaScript Dasar dan Manipulasi HTML
// File ini berisi latihan 1–8, mini project, dan eksperimen mandiri.

// Latihan 1 — Menampilkan output
function latihan1() {
  document.getElementById("pesan").textContent = "Hello World";
  document.getElementById("out1").textContent = "Hello World tampil pada halaman. Periksa Console untuk output yang sama.";
  console.log("Hello World");
}

// Latihan 2 — Alert dan prompt
function latihan2() {
  const namaPengguna = prompt("Masukkan nama Anda:", "");
  const hasil = document.getElementById("out2");
  if (namaPengguna && namaPengguna.trim() !== "") {
    alert("Halo, " + namaPengguna + "!");
    document.getElementById("pesan").textContent = "Selamat datang, " + namaPengguna + ".";
    hasil.textContent = "Selamat datang, " + namaPengguna + ".";
  } else {
    alert("Nama belum diisi.");
    hasil.textContent = "Nama belum diisi atau dialog dibatalkan.";
  }
}

// Latihan 3 — Function dan operasi aritmetika
function operasiDasar(a, b) {
  return {
    penjumlahan: a + b,
    pengurangan: a - b,
    perkalian: a * b,
    pembagian: b !== 0 ? a / b : null,
    modulus: b !== 0 ? a % b : null
  };
}
function latihan3() {
  const aInput = document.getElementById("angkaA").value;
  const bInput = document.getElementById("angkaB").value;
  const hasil = document.getElementById("out3");
  if (aInput.trim() === "" || bInput.trim() === "") {
    hasil.textContent = "Kedua bilangan harus diisi.";
    return;
  }
  const a = Number(aInput), b = Number(bInput);
  const r = operasiDasar(a, b);
  hasil.innerHTML = `Penjumlahan: ${r.penjumlahan}<br>Pengurangan: ${r.pengurangan}<br>Perkalian: ${r.perkalian}<br>Pembagian: ${r.pembagian === null ? "Tidak dapat dibagi nol" : r.pembagian}<br>Modulus: ${r.modulus === null ? "Tidak dapat dihitung dengan pembagi nol" : r.modulus}`;
  console.log("Hasil operasi:", r);
}

// Latihan 4 — Seleksi kondisi if–else
function latihan4() {
  const input = document.getElementById("nilaiLulus").value;
  const nilai = Number(input);
  const hasil = document.getElementById("out4");
  if (input.trim() === "" || Number.isNaN(nilai) || nilai < 0 || nilai > 100) {
    hasil.textContent = "Input nilai tidak valid. Masukkan nilai 0–100.";
  } else if (nilai >= 60) {
    hasil.textContent = "Nilai " + nilai + ": Lulus.";
  } else {
    hasil.textContent = "Nilai " + nilai + ": Belum lulus.";
  }
}

// Latihan 5 — Seleksi kondisi switch
function latihan5() {
  const pilihan = document.getElementById("pilihanBilangan").value;
  const hasil = document.getElementById("out5");
  let nama;
  switch (pilihan) {
    case "1": nama = "Bilangan satu"; break;
    case "2": nama = "Bilangan dua"; break;
    case "3": nama = "Bilangan tiga"; break;
    case "4": nama = "Bilangan empat"; break;
    case "5": nama = "Bilangan lima"; break;
    default: nama = "Pilihan tidak tersedia. Masukkan angka 1–5.";
  }
  hasil.textContent = nama;
  console.log("Pilihan switch:", nama);
}

// Latihan 6 — Form bilangan genap atau ganjil
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");
  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

// Latihan 7 — Mengubah warna halaman
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
  document.getElementById("out7").textContent = "Warna latar berhasil diubah menjadi " + warna + ".";
}

// Latihan 8 — Checkbox menu makanan dan total otomatis
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => item.addEventListener("change", hitungTotal));
function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = "Rp" + total.toLocaleString("id-ID");
}

// Mini Project — Kalkulator Nilai Mahasiswa
function hitungNilaiAkhir(tugas, uts, uas) {
  return tugas * 0.30 + uts * 0.30 + uas * 0.40;
}
function tentukanPredikat(nilai) {
  if (nilai >= 85) return "A";
  if (nilai >= 75) return "B";
  if (nilai >= 60) return "C";
  if (nilai >= 50) return "D";
  return "E";
}
function hitungNilaiMahasiswa() {
  const inputTugas = document.getElementById("nilaiTugas").value;
  const inputUTS = document.getElementById("nilaiUTS").value;
  const inputUAS = document.getElementById("nilaiUAS").value;
  const hasil = document.getElementById("hasilNilai");
  if ([inputTugas, inputUTS, inputUAS].some(v => v.trim() === "")) {
    hasil.textContent = "Semua kolom nilai wajib diisi.";
    return;
  }
  const tugas = Number(inputTugas), uts = Number(inputUTS), uas = Number(inputUAS);
  if ([tugas, uts, uas].some(n => !Number.isFinite(n) || n < 0 || n > 100)) {
    hasil.textContent = "Nilai Tugas, UTS, dan UAS harus berada pada rentang 0–100.";
    return;
  }
  const akhir = hitungNilaiAkhir(tugas, uts, uas);
  const predikat = tentukanPredikat(akhir);
  const status = akhir >= 60 ? "Lulus" : "Belum lulus";
  hasil.innerHTML = `Nilai akhir: <strong>${akhir.toFixed(2)}</strong><br>Predikat: <strong>${predikat}</strong><br>Status: <strong>${status}</strong>`;
  console.log("Nilai akhir:", akhir.toFixed(2), "Predikat:", predikat, "Status:", status);
}
function isiContohNilai() {
  document.getElementById("nilaiTugas").value = 85;
  document.getElementById("nilaiUTS").value = 78;
  document.getElementById("nilaiUAS").value = 88;
  hitungNilaiMahasiswa();
}

// Eksperimen mandiri — tabel perkalian 7 dari 1 sampai 10
function tampilkanPerkalian() {
  const baris = [];
  for (let i = 1; i <= 10; i++) baris.push(`7 × ${i} = ${7 * i}`);
  document.getElementById("outPerkalian").innerHTML = baris.join("<br>");
}

// Eksperimen mandiri — function cekGenap mengembalikan boolean
function cekGenap(angka) {
  return Number.isInteger(angka) && angka % 2 === 0;
}
function cekGenapEksperimen() {
  const input = document.getElementById("angkaEksperimen").value;
  const hasil = document.getElementById("outEksperimen");
  if (input.trim() === "" || !Number.isInteger(Number(input))) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
    return;
  }
  hasil.textContent = `cekGenap(${input}) menghasilkan ${cekGenap(Number(input))}.`;
}
function toggleInfo() {
  const info = document.getElementById("infoTambahan");
  info.classList.toggle("hidden");
}
