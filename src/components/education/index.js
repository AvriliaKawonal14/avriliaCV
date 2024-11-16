import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";


const Education = () => {
  const [education, setEducation] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const educationRef = ref(db, "Education");
    onValue(educationRef, (snapshot) => {
      const data = snapshot.val();
      setEducation(data);
    });
  }, []);
  return (
    <section className="education">
      <h2>{education.pdd}</h2>
      <div className="education-item">
        <h3>Universitas Klabat - S1</h3>
        <span>2022 - 2024</span>
        <p>
          Sedang menempuh pendidikan di program Sarjana dengan fokus pada
          pengembangan keahlian di bidang teknologi informasi dan desain web,
          sambil terus memperdalam kemampuan analisis data serta pengembangan
          sistem.
        </p>
        <h3>SMK Negeri 1 Bitung</h3>
        <span>2019 - 2022</span>
        <p>
          Menyelesaikan pendidikan kejuruan dengan spesialisasi di bidang
          administrasi perkantoran, mengembangkan keterampilan dalam pengelolaan
          dokumen, manajemen kantor, dan penggunaan teknologi pendukung
          administrasi modern.
        </p>
        <h3>SMP Katolik Donbosco Bitung</h3>
        <span>2017 - 2019</span>
        <p>
          Menjalani pendidikan menengah pertama dengan fokus pada pembentukan
          karakter dan pengetahuan umum sebagai dasar untuk pendidikan lanjutan.
        </p>
        <h3>{education.sd}</h3>
        <span>{education.thn}</span>
        <p>{education.ketsd}</p>
      </div>
    </section>
  );
};

export default Education;
