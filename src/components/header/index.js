const header = () => {
  return (
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
  );
};

export default header; 