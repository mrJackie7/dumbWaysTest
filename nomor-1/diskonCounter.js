/*
  Membutuhkan prompt-sync untuk bisa mengambil input dari user.
  Harus import dulu modulnya dari npm
*/
const prompt = require('prompt-sync')({sigint: true})

// sebuah fungsi jika type vouchernya adalaha DumbWaysJos
const DumbWaysJos = theMoney => {
  let diskon = 0, kembalian = 0, pembayaran = 0
  if(theMoney >= 50000) {
    diskon = theMoney * 0.21
    diskon <= 20000 ? diskon : diskon = 20000
  }
  pembayaran = theMoney - diskon
  kembalian = theMoney - pembayaran

  console.log('Uang anda: ', theMoney)
  console.log('Uang yang harus dibayar: ', pembayaran)
  console.log('Diskon ', diskon)
  console.log('Kembalian anda: ', kembalian)
}

// sebuah fungsi jika type vouchernya adalaha DumbWaysMantap
const DumbWaysMantap = theMoney => {
  let diskon = 0, kembalian = 0, pembayaran = 0

  if(theMoney >= 80000) {
    diskon = theMoney * 0.3
    diskon <= 40000 ? diskon : diskon = 40000
  }

  pembayaran = theMoney - diskon
  kembalian = theMoney - pembayaran

  console.log('Uang anda: ', theMoney)
  console.log('Uang yang harus dibayar: ', pembayaran)
  console.log('Diskon ', diskon)
  console.log('Kembalian anda: ', kembalian)
}

const hitungVoucher = (couponType, theMoney) => {
  // pengkondisian input type dari tipe kupon yang diinput user dengan metode ternary
  couponType === '1' ? DumbWaysJos(theMoney) :
  couponType === '2' ? DumbWaysMantap(theMoney) :
  console.log("harap input dengan benar")
}

// memperoleh input dari user
let yourMoney = prompt('masukan uangmu: ')
console.log('masukan tipe kuponmu [1: DumbWaysJos, 2: DumbWaysMantap]')
let yourCoupon = prompt('tipe kuponmu: ')

// menjalankan fungsi si hitung voucher
hitungVoucher(yourCoupon, Number(yourMoney))