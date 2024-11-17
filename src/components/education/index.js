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
        <h3>{education.s1}</h3>
        <span>{education.thns1}</span>
        <p>{education.kets1}</p>
        <h3>{education.sma}</h3>
        <span>{education.thnsma}</span>
        <p>{education.ketsma}</p>
        <h3>{education.smp}</h3>
        <span>{education.thnsmp}</span>
        <p>{education.ketsmp}</p>
        <h3>{education.sd}</h3>
        <span>{education.thn}</span>
        <p>{education.ketsd}</p>
      </div>
    </section>
  );
};

export default Education;
