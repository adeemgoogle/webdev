export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  link:string;
  rating:number;
}

export const products = [
  {
    id: 1,
    name: 'Logitech G600',
    price: 26.99,
    description: 'MMO Gaming Mouse',
    img:'https://m.media-amazon.com/images/I/61QYugFCxPL._AC_SX679_.jpg',
    link:'https://www.amazon.com/Logitech-Gaming-Backlit-Programmable-Buttons/dp/B0086UK7IQ/?_encoding=UTF8&pd_rd_w=0A7Og&pf_rd_p=26dacb9e-c45b-4443-bb96-74ce304824a7&pf_rd_r=NC8MY6N2S0NEVCANCR3J&pd_rd_r=f85a8e5c-6af2-4d12-8319-f26633fcfbac&pd_rd_wg=Z7zx2&ref_=pd_gw_exports_top_sellers_unrec',
    rating:4.5
  },
  {
    id: 2,
    name: 'Seagate Portable 2TB',
    price: 59.99,
    description: 'Easily store and access 2TB to content on the go with the Seagate Portable Drive, a USB external hard drive',
    img:'https://m.media-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg',
    link:'https://www.amazon.com/Seagate-Portable-External-Hard-Drive/dp/B07CRG94G3/ref=sr_1_1?qid=1647104783&s=computers-intl-ship&sr=1-1&th=1',
    rating:4.7
  },
  {
    id: 3,
    name: 'SAMSUNG 970 EVO Plus SSD 2TB',
    price: 209.99,
    description: 'The ultimate in performance, upgraded. Faster than the 970 EVO, the 970 EVO Plus is powered by the latest V-NAND technology and firmware optimization.',
    img:'https://m.media-amazon.com/images/I/813bvfaxuAL._AC_SL1500_.jpg',
    link:'https://www.amazon.com/Samsung-970-EVO-Plus-MZ-V7S2T0B/dp/B07MFZXR1B/ref=sr_1_2?qid=1647105030&s=computers-intl-ship&sr=1-2',
    rating:4.9
  },
  {
    id: 4,
    name: 'WD_BLACK 1TB SN850',
    price: 169.99,
    description: 'Next-gen PCIe Gen4 technology optimized for top-tier gaming (not intended for NAS or server environments)',
    img:'https://m.media-amazon.com/images/I/719mkEAj1IL._AC_SL1500_.jpg',
    link:'https://www.amazon.com/WD_Black-SN850-Internal-Gaming-Heatsink/dp/B08PHSVW7K/ref=sr_1_31?qid=1647106578&s=computers-intl-ship&sr=1-31&th=1',
    rating:4.8
  },
  {
    id: 5,
    name: 'Samsung 870 EVO SATA III SSD 1TB',
    price: 93.99,
    description: 'The latest 870 EVO has indisputable performance, reliability and compatibility built upon Samsungs pioneering technology',
    img:'https://m.media-amazon.com/images/I/911ujeCkGfL._AC_SL1500_.jpg',
    link:'https://www.amazon.com/SAMSUNG-Inch-Internal-MZ-77E1T0B-AM/dp/B08QBJ2YMG/ref=sr_1_5?qid=1647105030&s=computers-intl-ship&sr=1-5&th=1',
    rating:4.8
  },
  {
    id: 6,
    name: 'AMD Ryzen 5 5600X',
    price: 229.00,
    description: 'AMDs fastest 6 core processor for mainstream desktop, with 12 processing threads',
    img:'https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_SL1384_.jpg',
    link:'https://www.amazon.com/AMD-Ryzen-5600X-12-Thread-Processor/dp/B08166SLDF/ref=sr_1_6?qid=1647105030&s=computers-intl-ship&sr=1-6',
    rating:4.8
  },
  {
    id: 7,
    name: 'SanDisk 1TB Extreme Portable SSD',
    price: 95.81,
    description: 'Get NVMe solid state performance featuring up to 1050MB/s read and up to 1000MB/s write speeds in a portable, high-capacity drive that’s perfect for creating amazing content or capturing incredible footage.',
    img:'https://m.media-amazon.com/images/I/712+jjz3lyL._AC_SL1500_.jpg',
    link:'https://www.amazon.com/SanDisk-1TB-Extreme-Portable-SDSSDE61-1T00-G25/dp/B08GTYFC37/ref=sr_1_8?qid=1647105030&s=computers-intl-ship&sr=1-8&th=1',
    rating:4.8
  },
  {
    id: 8,
    name: 'Corsair Vengeance LPX',
    price: 69.99,
    description: 'Hand-sorted memory chips ensure high performance with generous Overclocking headroom. SPD Speed-2133MHz',
    img:'https://m.media-amazon.com/images/I/51XWCgqIUVL._AC_SL1150_.jpg',
    link:'https://www.amazon.com/Corsair-Vengeance-3200MHz-Desktop-Memory/dp/B0143UM4TC/ref=sr_1_16?qid=1647105030&s=computers-intl-ship&sr=1-16&th=1',
    rating:4.8
  },
  {
    id: 9,
    name: 'Seagate BarraCuda 2TB',
    price: 46.99,
    description: 'Store more, compute faster, and do it confidently with the proven reliability of BarraCuda internal hard drives',
    img:'https://m.media-amazon.com/images/I/71Czt9ypIbL._AC_SL1500_.jpg',
    link:'https://www.amazon.com/Seagate-BarraCuda-Internal-Drive-3-5-Inch/dp/B07H2RR55Q/ref=sr_1_19?qid=1647105030&s=computers-intl-ship&sr=1-19&th=1',
    rating:4.7
  },
  {
    id: 10,
    name: 'ZOTAC Gaming GeForce RTX 3060 ',
    price: 699.00,
    description: 'NVIDIA Ampere architecture, 2nd Gen Ray Tracing Cores, 3rd Gen Tensor Cores',
    img:'https://m.media-amazon.com/images/I/7156DLyUsYL._AC_SL1500_.jpg',
    link:'https://www.amazon.com/ZOTAC-GeForce-Graphics-IceStorm-ZT-A30600H-10M/dp/B08W8DGK3X/ref=sr_1_21?qid=1647105030&s=computers-intl-ship&sr=1-21&th=1',
    rating:4.5
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/