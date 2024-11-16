const header = () => {
  return (
    <header>
      <img
        src="images/avril.jpg"
        alt="Foto Profil"
        className="profile-picture"
      />
      <h1>Avrilia Irena Kawonal</h1>
      <p>Mahasiswa Semester 5 - Informatika</p>
      <div className="contact-info">
        <p>Email: akawonal@gmail.com</p>
        <p>Telepon: +62 895395375616</p>
        <p>Alamat: Jl. Samratulangi, Bitung</p>
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