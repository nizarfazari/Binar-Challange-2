const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];


const formatRupiah = (angka,prefix) => {
  let numberStr = angka.toString(),
  split = numberStr.split(','),
  sisa = split[0].length % 3,
  rupiah = split[0].substr(0,sisa),
  ribuan = split[0].substr(sisa).match(/\d{3}/gi)
  
  if(ribuan){
    separator =  '.';
    rupiah += separator + ribuan.join('.')
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah
  return prefix == undefined ? rupiah : (rupiah ? 'Rp.' + rupiah : '')

}



const dataPenjualan = (data) => {
  if (!Array.isArray(data)) {
    return "Error : invalid type data";
  }
  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkTerlaris;
  let penulisBukuTerlaris;
  let temp = data[0].totalTerjual;
  let presentaseKeuntungan = 0;
  let hasil;
  data.forEach((e) => {
    totalModal += e.hargaBeli * (e.sisaStok + e.totalTerjual);
    totalKeuntungan += e.hargaJual * e.totalTerjual - e.hargaBeli * (e.totalTerjual + e.sisaStok);
    presentaseKeuntungan += totalKeuntungan / totalModal;
    if (e.totalTerjual > temp) {
      temp = e.totalTerjual;
      produkTerlaris = e.namaProduk;
      penulisBukuTerlaris = e.penulis;
    } else {
      temp;
    }

    hasil = { totalModal, totalKeuntungan, presentaseKeuntungan, produkTerlaris, penulisBukuTerlaris };
  });

  hasil.totalModal = formatRupiah(hasil.totalModal,'Rp. ')
  hasil.totalKeuntungan = formatRupiah(hasil.totalKeuntungan,'Rp. ')
  hasil.presentaseKeuntungan = `${hasil.presentaseKeuntungan.toFixed(1)}%`

  return hasil;
};

console.log(dataPenjualan(dataPenjualanNovel));
