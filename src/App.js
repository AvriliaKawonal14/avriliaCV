import React from "react";
import Header from "./components/header";
import Profile from "./components/profile";
import Profile from "./components/profile";

const App = () => {
  return (
    <div className="container">
      {/* Bagian Header dengan Foto Profil */}
      <Header />
      {/* Profil Pribadi */}
      <Profile />
      {/* Pengalaman Kerja */}
      <section className="experience">
        <h2>Pengalaman Kerja</h2>
        <div className="job">
          <h3>PT Contoh Teknologi - Software Engineer</h3>
          <span>2020 - Sekarang</span>
          <p>
            Membangun dan mengelola aplikasi web menggunakan JavaScript, HTML,
            CSS, dan React. Memimpin tim kecil dalam proyek pengembangan
            aplikasi khusus klien.
          </p>
        </div>
        <div className="job">
          <h3>XYZ Digital Solutions - Web Developer</h3>
          <span>2018 - 2020</span>
          <p>
            Mengembangkan dan memelihara situs web e-commerce yang ramah
            pengguna dan responsif. Bekerja sama dengan desainer dan tim
            pemasaran untuk meningkatkan pengalaman pengguna.
          </p>
        </div>
      </section>
      {/* Pendidikan */}
      <section className="education">
        <h2>Pendidikan</h2>
        <div className="education-item">
          <h3>Universitas ABC - S1 Teknik Informatika</h3>
          <span>2014 - 2018</span>
          <p>
            Mengikuti berbagai kursus pemrograman dan proyek penelitian dalam
            bidang teknologi web dan pengembangan perangkat lunak.
          </p>
        </div>
      </section>
      {/* Keahlian */}
      <section className="skills">
        <h2>Keahlian</h2>
        <ul>
          <li>Pengembangan Web: HTML, CSS, JavaScript, React</li>
          <li>Database: MySQL, MongoDB</li>
          <li>Version Control: Git, GitHub</li>
          <li>Soft Skills: Komunikasi, Manajemen Waktu, Problem Solving</li>
        </ul>
      </section>
      {/* Proyek */}
      <section className="projects">
        <h2>Proyek</h2>
        <div className="project">
          <h3>Aplikasi Manajemen Tugas</h3>
          <span>2021</span>
          <p>
            Membangun aplikasi manajemen tugas dengan fitur-fitur seperti to-do
            list, reminder, dan pencatatan waktu. Aplikasi ini digunakan oleh
            500+ pengguna aktif.
          </p>
        </div>
        <div className="project">
          <h3>Sistem Monitoring Inventaris</h3>
          <span>2020</span>
          <p>
            Merancang dan mengimplementasikan sistem untuk memantau inventaris
            gudang secara real-time, yang membantu perusahaan mengoptimalkan
            stok dan mengurangi biaya operasional.
          </p>
        </div>
      </section>
      {/* Footer */}
      <footer>
        <p>© 2023 Nama Anda. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
};

export default App;
