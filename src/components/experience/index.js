import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Experience = () => {
  const [Experience, setExperience] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const experienceRef = ref(db, "Experience");
    onValue(experienceRef, (snapshot) => {
      const data = snapshot.val();
      setExperience(data);
    });
  }, []);
    return (
        <section className="experience">
        <h2>{Experience.title}</h2>
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
    )
}

export default Experience;