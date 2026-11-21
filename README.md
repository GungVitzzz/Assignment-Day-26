# Marketplace React

Mini project halaman katalog marketplace yang dibuat dengan React dan Tailwind CSS. Halaman menampilkan header dan navigasi, breadcrumb dan judul katalog, filter produk berdasarkan rentang harga, warna, dan material, kartu produk, serta footer dengan informasi mitra pembayaran.

## Komponen dan props

Halaman utama dirangkai di `src/App.jsx` dari komponen layout dan katalog. `CatalogSection` mengelola filter dan meneruskan produk yang sesuai ke `ProductGrid` melalui props `filteredProduct`. `ProductGrid` meneruskan data setiap produk ke `ProductCard` melalui props `item`; kartu menampilkan nama, harga, warna, material, dan gambar produk dari data tersebut.

## Menjalankan proyek

Pastikan Node.js dan npm sudah terpasang, lalu jalankan perintah berikut dari folder proyek:

```bash
npm install
npm run dev
```

Buka URL lokal yang ditampilkan Vite di terminal. Untuk membuat build produksi, jalankan `npm run build`.