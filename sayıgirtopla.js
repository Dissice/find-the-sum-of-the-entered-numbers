// Kullanıcıya kaç adet sayı girmek istediğini soralım.
// Vereceği cevaba göre kullanıcıdan sayıları alalım.
// Cevaplar sayilar dizisine eklensin.
// Kullanıdan alınan sayılar çift ise ayrı toplayıp cevabını yazdıralım, tek ise ayrı toplayıp cevabını yazdıralım.

let sayiAdet = Number(prompt('Kaç adet sayı girmek istiyorsunuz?'));
let sayilar = [];
let tekToplam = 0;
let ciftToplam = 0;

for (let i = 0; i < sayiAdet; i++) {
  let sayi = Number(prompt('Bir sayı giriniz:'));
  sayilar.push(sayi); 

  if (sayi % 2 === 0) {
    ciftToplam += sayi; 
  } else {
    tekToplam += sayi; 
  }
}

console.log("Girilen sayılar -> ", sayilar);
console.log("Çift sayıların toplamı -> ", ciftToplam);
console.log("Tek sayıların toplamı -> ", tekToplam);