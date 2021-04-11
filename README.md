# Test Dumb Ways Kloter 6 Batch 23
##### Sabtu, 10 April 2021
##### Updated: 11 April 2021

```catatan
Bahasa Program = javascript, PHP, MySQL
Framework yang digunakan = Bootstrap (styling), Node.JS(testing nomor 1 - 3)
```

Test ini dibuat dan dijalankan menggunakan bahasa program Javascript. Untuk nomor 1 sampai 3 menggunakan javascript dengan proses debugging menggunakan Node.JS dalam command line. Untuk soal nomor 4 ditambahakan PHP untuk mengakses data dalam database MySQL dengan menggunakan fetch Javascript (AJAX-PHP)

## Nomor 1. Penghitung Diskon

Penyelesaian: Sebuah fungsi hitungVoucher akan menerima 2 input: tipe kupon (opsi satu atau 2, jika bukan antara 2 pilihan itu, program tidak akan dijalankan) dan jumlah uang yang dibayarkan (tipe angka (Number)). Dalam fungsi hitungVoucher akan melakukan pengkondisian sesuai dengan tipe vouchernya. Jika memilih opsi 1, akan masuk fungsi DumbWaysJos. Jika memilih opsi 2, akan masuk fungsi DombWaysMantap.

Pada masing-masing fungsi DumbWaysJos dan DumbWaysMantap, input jumlah uang akan diperiksa aga kupon bisa benar-benar digunakan. jika uangnya kurang untuk memenuhi syarat minimal, tidak akan mendapat potongan (diskon = 0) dan jika uangnya mmemenuhi syarat minimal dan potongan yang dihitung melebihi yang sudah ditentukan (contoh diskon >= 20000) maka potongan akan ditetapkan kembali ke maksimum potongan (diskon = DumbWaysJos ? 20000 : DumbWaysMantap ? 40000 : 0). Kembalian akan dihitung sebagai berikut.
```kembalian
kembalian = jumlah uang - (jumlah uang - diskon)
``` 
## Nomor 2. Pencocokan Kata

Penyelesaian: Sebuah fungsi checkIndex(stringKey, word) untuk memeriksa suatu kata input (word) dengan array kata kunci (stringKey). Fungsi ini akan memeriksa bila word ada kata yang masuk, suatu proses dalam fungsi bisa dijalankan. Jika tidak akan di print "harap input dengan benar".

Pemeriksaan kata per array index dilakukan dengan looping for sesuai dengan jumlah value yang ada dalam array. lalu print kata itu memiliki unsur yang sama dengan array index dengan kodingan berikut.

```kodingan
console.log(`${kata kunci yang ada dalam array} & ${kata kunci yang di check (word)} => ${word.includes(arr[i]) ? res = 'true' : res = 'false'}`)

\* menggunakan fungsi includes untuk memeriksa apakah kata itu mengandung kata kunci index. Jika ada/true, variabel res = 'true', begitu juga sebaliknya*\
```

## Nomor 3. Piramid Berpola Huruf Acak

Penyelesaian: Segitiga dengan huruf random

## Nomor 4. Simulasi Website Buku