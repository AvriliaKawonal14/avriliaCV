const projects = () => {
    return (
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
    )
}

export default projects;

