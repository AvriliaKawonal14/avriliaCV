import React from "react";

const App = () => {
  return (
    <div className="container">
      {/* Bagian Header dengan Foto Profil */}
      <header>
        <img
          src="images/avril.png"
          alt="Foto Profil"
          className="profile-picture"
        />
        <h1>Nama Anda</h1>
        <p>Posisi / Profesi Anda</p>
        <div className="contact-info">
          <p>Email: namaanda@example.com</p>
          <p>Telepon: +62 812 3456 7890</p>
          <p>Alamat: Jl. Contoh No.123, Kota Anda</p>
          <div className="social-media">
            <a href="https://linkedin.com">LinkedIn</a> |
            <a href="https://github.com">GitHub</a> |
            <a href="https://twitter.com">Twitter</a>
          </div>
        </div>
      </header>
      {/* Profil Pribadi */}
      <section className="profile">
        <h2>Profil</h2>
        <p>
          Saya adalah seorang profesional yang berpengalaman dalam bidang{" "}
          <b>[bidang spesialisasi]</b> dengan keahlian di{" "}
          <b>[keahlian utama]</b>. Saya memiliki pengalaman dalam mengelola
          proyek besar dan berkolaborasi dengan tim lintas departemen.
        </p>
      </section>
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
