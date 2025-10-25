"use client";

import React from "react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Book, Users, Search } from "lucide-react";

const KripukWebsite = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePage, setActivePage] = useState("home");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const featuredArticles = [
    {
      id: 1,
      title: "Keripik Balado Padang: Warisan Rasa Pedas Minangkabau",
      image: "/images/kripik/singkong_balado.jpg",
      excerpt: "Menyelami proses pembuatan keripik balado yang telah diwariskan turun-temurun",
      region: "Sumatera Barat",
    },
    {
      id: 2,
      title: "Kerupuk Mlarat: Filosofi Kesederhanaan dari Jawa Timur",
      image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80",
      excerpt: "Camilan sederhana dengan makna mendalam dalam budaya Jawa",
      region: "Jawa Timur",
    },
    {
      id: 3,
      title: "Keripik Tempe: Inovasi Protein Nabati Tradisional",
      image: "/images/kripik/tempe_banyumas.jpg",
      excerpt: "Bagaimana tempe bertransformasi menjadi camilan renyah favorit",
      region: "Jawa Tengah",
    },
  ];

  const keripikData = [
    {
      id: 1,
      name: "Keripik Singkong Balado",
      region: "Sumatera Barat",
      image: "/images/kripik/singkong_balado.jpg",
      description: "Karupuak Sanjai atau keripik balado adalah kuliner khas dari Bukittinggi yang berasal dari kawasan Jl Sanjai, Desa Manggis. Keripik singkong dengan bumbu balado khas Minang yang pedas dan manis sekaligus.",
      ingredients: ["Singkong pilihan", "Cabai merah keriting", "Bawang merah", "Gula merah", "Garam"],
      technique: "Singkong diiris tipis, direndam air kapur sirih, dijemur, digoreng kering, lalu dilumuri bumbu balado",
    },
    {
      id: 2,
      name: "Keripik Pisang Lampung",
      region: "Lampung",
      image: "/images/kripik/pisang_lampung.jpeg",
      description: "Keripik pisang Lampung terkenal dengan tekstur sangat renyah. Tersedia dalam berbagai varian rasa modern seperti cokelat, keju, susu, stroberi, melon, balado, dan kopi.",
      ingredients: ["Pisang kepok", "Minyak kelapa", "Gula pasir", "Air kapur sirih"],
      technique: "Pisang diiris tipis, direndam larutan gula dan kapur sirih, dipanggang atau digoreng hingga renyah",
    },
    {
      id: 3,
      name: "Keripik Tempe Banyumas",
      region: "Jawa Tengah",
      image: "/images/kripik/tempe_banyumas.jpg",
      description: "Keripik tempe khas Banyumas dibuat dari tempe yang diiris sangat tipis, dibalut tepung bumbu, dan digoreng kering. Kaya protein nabati.",
      ingredients: ["Tempe segar", "Tepung beras", "Bawang putih", "Ketumbar"],
      technique: "Tempe diiris setipis mungkin, dilumuri tepung berbumbu, digoreng hingga kering dan renyah",
    },
    {
      id: 4,
      name: "Keripik Paru Salatiga",
      region: "Jawa Tengah",
      image: "/images/kripik/paru_salatiga.jpeg",
      description: "Keripik paru khas Salatiga terbuat dari paru sapi pilihan. Sudah tersohor sebagai oleh-oleh wajib dari Salatiga.",
      ingredients: ["Paru sapi segar", "Lengkuas", "Serai", "Daun salam", "Bawang putih"],
      technique: "Paru direbus dengan rempah hingga empuk, diiris tipis, dibumbui, lalu digoreng hingga garing",
    },
    {
      id: 5,
      name: "Keripik Buah Malang",
      region: "Jawa Timur",
      image: "/images/kripik/buah_malang.jpeg",
      description: "Malang terkenal dengan keripik buahnya. Hadir dalam berbagai varian: apel, nangka, salak, nanas, mangga, semangka, rambutan.",
      ingredients: ["Buah segar pilihan", "Tepung pelapis", "Gula pasir"],
      technique: "Buah diiris tipis, dilumuri tepung khusus, digoreng dengan suhu terkontrol",
    },
    {
      id: 6,
      name: "Keripik Talas Bogor",
      region: "Jawa Barat",
      image: "/images/kripik/talas_bogor.jpg",
      description: "Bogor penghasil keripik talas berkualitas. Tekstur lebih tebal dengan rasa gurih. Tersedia varian cokelat, keju, balado.",
      ingredients: ["Talas Bogor", "Air kapur sirih", "Garam laut", "Bumbu pilihan"],
      technique: "Talas diiris tipis, direndam air kapur, dijemur, digoreng hingga renyah",
    },
    {
      id: 7,
      name: "Keripik Belut Godean",
      region: "DI Yogyakarta",
      image: "/images/kripik/belut_godean.jpeg",
      description: "Keripik belut dari Godean, Sleman mudah ditemui di Sentra Kuliner Pasar Godean. Cocok sebagai cemilan atau lauk.",
      ingredients: ["Belut sawah", "Tepung bumbu", "Bawang putih", "Kunyit"],
      technique: "Belut dibersihkan, direbus, dipotong, dilumuri tepung, digoreng hingga renyah",
    },
    {
      id: 8,
      name: "Keripik Oncom Bandung",
      region: "Jawa Barat",
      image: "/images/kripik/oncom_bandung.jpeg",
      description: "Oncom populer di Bandung diolah menjadi keripik gurih. Sering dibawa sebagai oleh-oleh khas Bandung.",
      ingredients: ["Oncom merah", "Tepung beras", "Bawang putih", "Garam"],
      technique: "Oncom diiris tipis, dilumuri tepung berbumbu, digoreng hingga kering",
    },
    {
      id: 9,
      name: "Keripik Jengkol Medan",
      region: "Sumatera Utara",
      image: "/images/kripik/jengkol_medan.jpeg",
      description: "Keripik jengkol khas Medan dengan aroma kuat dan bumbu rempah kaya. Cocok sebagai teman nasi.",
      ingredients: ["Jengkol segar", "Air kapur sirih", "Bawang merah", "Cabai"],
      technique: "Jengkol direndam semalaman, diiris tipis, dibumbui, digoreng hingga renyah",
    },
    {
      id: 10,
      name: "Keripik Ares Lombok",
      region: "Nusa Tenggara Barat",
      image: "/images/kripik/ares_lombok.jpeg",
      description: "Keripik ares khas Lombok terbuat dari batang pisang. Camilan unik yang menunjukkan kreativitas kuliner lokal.",
      ingredients: ["Batang pisang muda", "Tepung bumbu", "Kunyit", "Garam"],
      technique: "Ares diiris tipis, dijemur setengah kering, dilumuri bumbu, digoreng hingga renyah",
    },
    {
      id: 11,
      name: "Keripik Nangka",
      region: "Jawa Tengah",
      image: "/images/kripik/nangka.jpg",
      description: "Keripik nangka muda dengan tekstur unik. Mengandung vitamin C tinggi yang baik untuk imunitas.",
      ingredients: ["Nangka muda", "Tepung bumbu", "Kunyit", "Lengkuas"],
      technique: "Nangka diiris tipis, direndam air kapur, dilumuri bumbu, digoreng hingga keemasan",
    },
    {
      id: 12,
      name: "Keripik Sukun",
      region: "Maluku",
      image: "/images/kripik/sukun.jpg",
      description: "Keripik sukun populer di Maluku dengan aroma seperti roti panggang. Kaya serat pangan.",
      ingredients: ["Sukun muda", "Air garam", "Bumbu pilihan"],
      technique: "Sukun diiris tipis, direndam air garam, dijemur, digoreng hingga renyah",
    },
  ];

  const kerupukData = [
    {
      id: 1,
      name: "Kerupuk Udang Sidoarjo",
      region: "Jawa Timur",
      image: "/images/krupuk/udang.jpg",
      description: "Kerupuk udang Sidoarjo paling terkenal di Indonesia dan sudah diekspor ke berbagai negara. Terbuat dari udang segar.",
      ingredients: ["Udang segar", "Tepung tapioka", "Bawang putih", "Garam"],
      technique: "Udang ditumbuk halus, dicampur tepung, dikukus, diiris tipis, dijemur 2-3 hari",
    },
    {
      id: 2,
      name: "Kerupuk Ikan Palembang",
      region: "Sumatera Selatan",
      image: "/images/krupuk/ikan_palembang.jpg",
      description: "Kerupuk ikan atau kemplang adalah teman sempurna pempek. Dibuat dari ikan tenggiri dengan tepung sagu.",
      ingredients: ["Ikan tenggiri", "Tepung sagu", "Telur", "Merica"],
      technique: "Ikan digiling halus, dicampur tepung, dibentuk, dikukus, diiris, dijemur 2-4 hari",
    },
    {
      id: 3,
      name: "Kerupuk Mlarat",
      region: "Jawa Timur",
      image: "/images/krupuk/mlarat.jpg",
      description: "Kerupuk mlarat disangrai dengan pasir panas, bukan minyak. Lebih sehat karena tanpa minyak.",
      ingredients: ["Tepung tapioka", "Air", "Garam", "Pewarna alami"],
      technique: "Adonan dibuat tipis, dijemur, disangrai di atas pasir panas hingga mengembang",
    },
    {
      id: 4,
      name: "Kerupuk Kulit (Rambak)",
      region: "Jawa Tengah",
      image: "/images/krupuk/kulit.jpg",
      description: "Kerupuk kulit atau rambak dibuat dari kulit sapi. Teksturnya tebal seperti bantal saat digoreng.",
      ingredients: ["Kulit sapi", "Air kapur sirih", "Garam", "Bumbu rempah"],
      technique: "Kulit dibersihkan, direbus berkali-kali, dijemur berhari-hari, digoreng hingga mengembang",
    },
    {
      id: 5,
      name: "Kerupuk Gendar",
      region: "Jawa Tengah",
      image: "/images/krupuk/gendar.jpeg",
      description: "Kerupuk gendar atau kerupuk nasi dibuat dari nasi dicampur bumbu rempah. Teksturnya padat tapi renyah.",
      ingredients: ["Nasi putih", "Tepung beras", "Bawang putih", "Garam"],
      technique: "Nasi dicampur tepung, dibentuk, dikukus, diiris tipis, dijemur, digoreng",
    },
    {
      id: 6,
      name: "Kerupuk Blek (Putih)",
      region: "Jawa",
      image: "/images/krupuk/putih.jpg",
      description: "Kerupuk blek paling populer di Indonesia. Nama blek dari wadah kaleng seng legendaris. Sering jadi kerupuk lomba 17 Agustus.",
      ingredients: ["Tepung tapioka", "Daun kucai", "Bawang putih", "Garam"],
      technique: "Adonan tepung dicampur kucai, dicetak, dikukus, diiris, dijemur, digoreng",
    },
    {
      id: 7,
      name: "Amplang Kalimantan",
      region: "Kalimantan Timur",
      image: "/images/krupuk/amplang_kalimantan.jpeg",
      description: "Amplang khas Samarinda berbentuk bulat lonjong kecil. Terbuat dari ikan tenggiri dengan tepung kanji.",
      ingredients: ["Ikan tenggiri", "Tepung kanji", "Telur", "Bawang putih"],
      technique: "Ikan digiling, dicampur tepung, dibentuk bulat lonjong, digoreng hingga kecoklatan",
    },
    {
      id: 8,
      name: "Emping Melinjo",
      region: "Jawa Barat",
      image: "/images/krupuk/emping.jpg",
      description: "Emping adalah kerupuk tradisional dari biji melinjo. Rasa khasnya agak pahit. Sudah ada sejak abad ke-16.",
      ingredients: ["Biji melinjo", "Minyak goreng", "Garam"],
      technique: "Biji melinjo direbus, dikupas, dipipihkan, dijemur, digoreng sebentar",
    },
    {
      id: 9,
      name: "Rempeyek",
      region: "Jawa Tengah",
      image: "/images/krupuk/rempeyek.jpg",
      description: "Rempeyek sudah ada sejak abad ke-16 di Yogyakarta. Dibuat dari tepung, santan, dengan topping kacang atau rebon.",
      ingredients: ["Tepung beras", "Santan", "Kacang tanah", "Bawang putih"],
      technique: "Tepung dicampur santan, diambil sesendok dengan topping, dituang ke minyak, digoreng",
    },
    {
      id: 10,
      name: "Opak Sunda",
      region: "Jawa Barat",
      image: "/images/krupuk/opak_sunda.jpg",
      description: "Opak Sunda dipanggang di atas bara api. Dibuat dari tepung beras. Tekstur sangat renyah dengan rasa gurih.",
      ingredients: ["Tepung beras", "Kelapa parut", "Bawang putih", "Garam"],
      technique: "Adonan dibentuk tipis, dijemur, dipanggang di atas bara api hingga renyah",
    },
    {
      id: 11,
      name: "Kerupuk Mie",
      region: "DKI Jakarta",
      image: "/images/krupuk/mie.jpg",
      description: "Kerupuk mie dinamakan karena bentuknya keriting menyerupai mie. Biasa menjadi pelengkap asinan Bogor dan Betawi.",
      ingredients: ["Tepung terigu", "Telur", "Pewarna kuning", "Garam"],
      technique: "Adonan dibuat menyerupai mie, dicetak, dikukus, dipotong, dijemur, digoreng",
    },
    {
      id: 12,
      name: "Kerupuk Bawang",
      region: "Jawa",
      image: "/images/krupuk/bawang.jpeg",
      description: "Kerupuk bawang terbuat dari tepung tapioka dan parutan bawang putih. Bentuknya kecil tipis berwarna-warni.",
      ingredients: ["Tepung tapioka", "Bawang putih", "Garam", "Kaldu"],
      technique: "Tepung dicampur bawang, dicetak, dikukus, diiris, dijemur, digoreng",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const DetailModal = ({ item, onClose }) => {
    if (!item) return null;

    return (
      <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl max-w-4xl w-full border border-amber-800/30 shadow-2xl my-8">
          <div className="relative h-64 md:h-96 overflow-hidden rounded-t-2xl">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all">
              ✕
            </button>
          </div>

          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-amber-400" />
              <span className="text-amber-400 text-lg font-semibold">{item.region}</span>
            </div>

            <h2 className="text-4xl font-bold text-amber-100 mb-6">{item.name}</h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed">{item.description}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-amber-900/20 p-6 rounded-xl border border-amber-800/30">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Bahan Utama</h3>
                <ul className="space-y-2">
                  {item.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-300 flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-900/20 p-6 rounded-xl border border-amber-800/30">
                <h3 className="text-xl font-bold text-amber-400 mb-4">Teknik Pembuatan</h3>
                <p className="text-gray-300 leading-relaxed">{item.technique}</p>
              </div>
            </div>

            <button onClick={onClose} className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
              Tutup
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-100">
      <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-lg z-40 border-b border-amber-800/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-20 h-10 bg-gradient-to-br rounded-lg flex items-center justify-center font-bold text-white text-xl">
              <img src="images/kripuk_logo.png" alt="" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-amber-100">KRIPUK</h1>
              <p className="text-xs text-gray-400">KeripikKerupuk.com</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => {
                setActivePage("home");
                setSelectedItem(null);
                setSelectedRegion(null);
              }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${activePage === "home" ? "bg-amber-600 text-white" : "text-gray-300 hover:text-amber-400"}`}
            >
              Beranda
            </button>
            <button
              onClick={() => {
                setActivePage("kripuk");
                setSelectedItem(null);
                setSelectedRegion(null);
              }}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${activePage === "kripuk" ? "bg-amber-600 text-white" : "text-gray-300 hover:text-amber-400"}`}
            >
              KRIPUK
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        {activePage === "home" ? (
          <div className="min-h-screen">
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-black/60 z-10"></div>
              <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=1600&q=80')" }}></div>

              <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-amber-100 mb-6">Cerita di Balik Keripik dan Kerupuk Nusantara</h1>
                <p className="text-xl md:text-2xl text-amber-200/90 mb-8 leading-relaxed">Mengangkat cerita, tradisi, dan orang-orang di balik camilan lokal Indonesia</p>
                <button onClick={() => setActivePage("kripuk")} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                  Mulai Jelajahi
                </button>
              </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-950">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-amber-100 mb-12 text-center">Cerita Sejarah</h2>

                <div className="relative">
                  <div className="overflow-hidden rounded-2xl shadow-2xl">
                    <div className="relative h-96 md:h-[500px]">
                      {featuredArticles.map((article, index) => (
                        <div key={article.id} className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
                          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                            <div className="flex items-center gap-2 mb-4">
                              <MapPin className="w-5 h-5 text-amber-400" />
                              <span className="text-amber-400 font-semibold">{article.region}</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{article.title}</h3>
                            <p className="text-gray-300 text-lg mb-6 max-w-2xl">{article.excerpt}</p>
                            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">Baca Selengkapnya</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all">
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all">
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  <div className="flex justify-center gap-2 mt-6">
                    {featuredArticles.map((_, index) => (
                      <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-amber-500" : "w-2 bg-gray-600"}`} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-zinc-950">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-amber-100 mb-12 text-center">Telusuri Camilan Nusantara</h2>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-amber-900/30 to-zinc-900 p-8 rounded-xl hover:shadow-2xl hover:shadow-amber-900/20 transition-all transform hover:-translate-y-2 cursor-pointer border border-amber-800/30">
                    <MapPin className="w-12 h-12 text-amber-500 mb-4" />
                    <h3 className="text-2xl font-bold text-amber-100 mb-3">Berdasarkan Daerah</h3>
                    <p className="text-gray-400">Jelajahi camilan dari berbagai provinsi di Indonesia</p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-900/30 to-zinc-900 p-8 rounded-xl hover:shadow-2xl hover:shadow-amber-900/20 transition-all transform hover:-translate-y-2 cursor-pointer border border-amber-800/30">
                    <Book className="w-12 h-12 text-amber-500 mb-4" />
                    <h3 className="text-2xl font-bold text-amber-100 mb-3">Berdasarkan Jenis</h3>
                    <p className="text-gray-400">Keripik, kerupuk, dan varian camilan lainnya</p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-900/30 to-zinc-900 p-8 rounded-xl hover:shadow-2xl hover:shadow-amber-900/20 transition-all transform hover:-translate-y-2 cursor-pointer border border-amber-800/30">
                    <Search className="w-12 h-12 text-amber-500 mb-4" />
                    <h3 className="text-2xl font-bold text-amber-100 mb-3">Berdasarkan Bahan</h3>
                    <p className="text-gray-400">Temukan camilan dari bahan favorit Anda</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="py-20 bg-gradient-to-b from-zinc-950 to-zinc-900">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <Users className="w-16 h-16 text-amber-500 mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl text-amber-100 italic mb-6 leading-relaxed">Setiap keripik yang kami buat adalah warisan nenek moyang. Bukan sekadar camilan, tapi cerita yang perlu dijaga.</blockquote>
                <p className="text-amber-400 text-lg">— Ibu Siti, Pengrajin Keripik Balado, Padang</p>
              </div>
            </section>

            <section className="py-20 bg-zinc-900">
              <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-amber-100 mb-8 text-center">Peta Camilan Nusantara</h2>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">Jelajahi kekayaan camilan dari Sabang sampai Merauke melalui peta interaktif</p>

                <div className="bg-gradient-to-br from-amber-900/20 to-zinc-800 rounded-2xl p-8 md:p-12 border border-amber-800/30">
                  <div className="relative max-w-6xl mx-auto">
                    <img src="images/peta_indonesia.png" alt="Peta Indonesia" className="w-full h-auto rounded-xl" />

                    {/* Clickable regions overlay with precise positioning */}
                    <div className="absolute inset-0">
                      {/* Sumatera - Kiri */}
                      <button
                        onClick={() => {
                          setActivePage("kripuk");
                          setSelectedRegion("Sumatera");
                        }}
                        className="absolute hover:bg-amber-500/30 transition-all rounded-lg border-2 border-transparent hover:border-amber-500 flex items-center justify-center group"
                        style={{ left: "8%", top: "15%", width: "12%", height: "50%" }}
                        title="Sumatera"
                      >
                        <span className="opacity-0 group-hover:opacity-100 bg-amber-600 text-white px-2 py-1 rounded-lg font-bold text-xs shadow-lg transition-opacity">Sumatera</span>
                      </button>

                      {/* Kalimantan - Tengah Atas */}
                      <button
                        onClick={() => {
                          setActivePage("kripuk");
                          setSelectedRegion("Kalimantan");
                        }}
                        className="absolute hover:bg-red-500/30 transition-all rounded-lg border-2 border-transparent hover:border-red-500 flex items-center justify-center group"
                        style={{ left: "28%", top: "20%", width: "18%", height: "40%" }}
                        title="Kalimantan"
                      >
                        <span className="opacity-0 group-hover:opacity-100 bg-red-600 text-white px-2 py-1 rounded-lg font-bold text-xs shadow-lg transition-opacity">Kalimantan</span>
                      </button>

                      {/* Jawa - Bawah Tengah */}
                      <button
                        onClick={() => {
                          setActivePage("kripuk");
                          setSelectedRegion("Jawa");
                        }}
                        className="absolute hover:bg-emerald-500/30 transition-all rounded-lg border-2 border-transparent hover:border-emerald-500 flex items-center justify-center group"
                        style={{ left: "23%", top: "63%", width: "15%", height: "12%" }}
                        title="Jawa"
                      >
                        <span className="opacity-0 group-hover:opacity-100 bg-emerald-600 text-white px-2 py-1 rounded-lg font-bold text-xs shadow-lg transition-opacity">Jawa</span>
                      </button>

                      {/* Sulawesi - Tengah Kanan */}
                      <button
                        onClick={() => {
                          setActivePage("kripuk");
                          setSelectedRegion("Sulawesi");
                        }}
                        className="absolute hover:bg-violet-500/30 transition-all rounded-lg border-2 border-transparent hover:border-violet-500 flex items-center justify-center group"
                        style={{ left: "47%", top: "25%", width: "12%", height: "45%" }}
                        title="Sulawesi"
                      >
                        <span className="opacity-0 group-hover:opacity-100 bg-violet-600 text-white px-2 py-1 rounded-lg font-bold text-xs shadow-lg transition-opacity">Sulawesi</span>
                      </button>

                      {/* Bali & Nusa Tenggara */}
                      <button
                        onClick={() => {
                          setActivePage("kripuk");
                          setSelectedRegion("Bali & Nusa Tenggara");
                        }}
                        className="absolute hover:bg-cyan-500/30 transition-all rounded-lg border-2 border-transparent hover:border-cyan-500 flex items-center justify-center group"
                        style={{ left: "39%", top: "70%", width: "20%", height: "10%" }}
                        title="Bali & Nusa Tenggara"
                      >
                        <span className="opacity-0 group-hover:opacity-100 bg-cyan-600 text-white px-2 py-1 rounded-lg font-bold text-xs shadow-lg transition-opacity whitespace-nowrap">Bali & Nusa Tenggara</span>
                      </button>

                      {/* Maluku */}
                      <button
                        onClick={() => {
                          setActivePage("kripuk");
                          setSelectedRegion("Maluku");
                        }}
                        className="absolute hover:bg-pink-500/30 transition-all rounded-lg border-2 border-transparent hover:border-pink-500 flex items-center justify-center group"
                        style={{ left: "64%", top: "35%", width: "10%", height: "25%" }}
                        title="Maluku"
                      >
                        <span className="opacity-0 group-hover:opacity-100 bg-pink-600 text-white px-2 py-1 rounded-lg font-bold text-xs shadow-lg transition-opacity">Maluku</span>
                      </button>

                      {/* Papua */}
                      <button
                        onClick={() => {
                          setActivePage("kripuk");
                          setSelectedRegion("Papua");
                        }}
                        className="absolute hover:bg-orange-500/30 transition-all rounded-lg border-2 border-transparent hover:border-orange-500 flex items-center justify-center group"
                        style={{ left: "78%", top: "40%", width: "18%", height: "30%" }}
                        title="Papua"
                      >
                        <span className="opacity-0 group-hover:opacity-100 bg-orange-600 text-white px-2 py-1 rounded-lg font-bold text-xs shadow-lg transition-opacity">Papua</span>
                      </button>
                    </div>

                    <div className="mt-8 text-center">
                      <p className="text-amber-200 text-lg mb-4">Arahkan kursor dan klik pada wilayah untuk melihat camilan khasnya</p>
                      <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-amber-500 rounded"></div>
                          <span className="text-gray-300">Sumatera</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-emerald-500 rounded"></div>
                          <span className="text-gray-300">Jawa</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-red-500 rounded"></div>
                          <span className="text-gray-300">Kalimantan</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-violet-500 rounded"></div>
                          <span className="text-gray-300">Sulawesi</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-cyan-500 rounded"></div>
                          <span className="text-gray-300">Bali & NTT</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-pink-500 rounded"></div>
                          <span className="text-gray-300">Maluku</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-orange-500 rounded"></div>
                          <span className="text-gray-300">Papua</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="min-h-screen py-20 px-4">
            <div className="max-w-7xl mx-auto">
              {selectedRegion && (
                <div className="mb-8 text-center">
                  <button onClick={() => setSelectedRegion(null)} className="text-amber-400 hover:text-amber-300 mb-4 inline-flex items-center gap-2">
                    ← Kembali ke semua wilayah
                  </button>
                  <h1 className="text-5xl font-bold text-amber-100 mb-2">KRIPUK - {selectedRegion}</h1>
                  <p className="text-gray-400">Camilan khas dari {selectedRegion}</p>
                </div>
              )}

              {!selectedRegion && (
                <>
                  <h1 className="text-5xl font-bold text-amber-100 mb-4 text-center">KRIPUK</h1>
                  <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">Jelajahi kekayaan keripik dan kerupuk Nusantara. Klik untuk melihat detail cerita di baliknya.</p>
                </>
              )}

              <div className="grid md:grid-cols-2 gap-8 relative">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center sticky top-20 bg-gradient-to-br from-orange-950/90 to-zinc-950/90 backdrop-blur py-4 rounded-lg border border-orange-700/30 shadow-lg shadow-orange-900/20">
                    Keripik
                  </h2>

                  {keripikData
                    .filter((item) => !selectedRegion || item.region.includes(selectedRegion) || selectedRegion.includes(item.region.split(" ")[0]))
                    .map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className="bg-gradient-to-br from-orange-900/30 to-zinc-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-orange-900/40 transition-all transform hover:scale-105 cursor-pointer border border-orange-700/40 group"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-orange-950/80 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                            <div className="flex items-center gap-2 mt-2">
                              <MapPin className="w-4 h-4 text-orange-400" />
                              <span className="text-orange-400 text-sm font-semibold">{item.region}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  {selectedRegion && keripikData.filter((item) => item.region.includes(selectedRegion) || selectedRegion.includes(item.region.split(" ")[0])).length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                      <p>Belum ada data keripik dari {selectedRegion}</p>
                    </div>
                  )}
                </div>

                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-10">
                  <div className="h-full w-1 bg-gradient-to-b from-orange-500 via-amber-500 to-emerald-500 opacity-50"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-950 px-2 py-2 rounded-full border-2 border-amber-500 shadow-lg">
                    <span className="text-amber-400 font-bold text-sm">&</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-emerald-400 mb-6 text-center sticky top-20 bg-gradient-to-br from-emerald-950/90 to-zinc-950/90 backdrop-blur py-4 rounded-lg border border-emerald-700/30 shadow-lg shadow-emerald-900/20">
                    Kerupuk
                  </h2>

                  {kerupukData
                    .filter((item) => !selectedRegion || item.region.includes(selectedRegion) || selectedRegion.includes(item.region.split(" ")[0]))
                    .map((item) => (
                      <div
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className="bg-gradient-to-br from-emerald-900/30 to-zinc-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-900/40 transition-all transform hover:scale-105 cursor-pointer border border-emerald-700/40 group"
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-2xl font-bold text-white">{item.name}</h3>
                            <div className="flex items-center gap-2 mt-2">
                              <MapPin className="w-4 h-4 text-emerald-400" />
                              <span className="text-emerald-400 text-sm font-semibold">{item.region}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                  {selectedRegion && kerupukData.filter((item) => item.region.includes(selectedRegion) || selectedRegion.includes(item.region.split(" ")[0])).length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                      <p>Belum ada data kerupuk dari {selectedRegion}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-black border-t border-amber-800/30 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-lg flex items-center justify-center font-bold text-white text-2xl mx-auto mb-4">
            <img src="/images/kripuk_logo.png" alt="" />
          </div>
          <h3 className="text-2xl font-bold text-amber-100 mb-2">KRIPUK</h3>
          <p className="text-gray-400 mb-6">Cerita di Balik Keripik dan Kerupuk Nusantara</p>
          <p className="text-gray-500 text-sm">© 2025 KeripikKerupuk.com | Edukasi Camilan Nusantara</p>
        </div>
      </footer>

      {selectedItem && <DetailModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </div>
  );
};

export default KripukWebsite;
