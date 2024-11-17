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
      <section className="skills">
      <h2>{Experience.title}</h2>
      <ul>
        <li>{Experience.ingg}</li>
        <li>{Experience.indo}</li>
      </ul>
    </section>
    )
}

export default Experience;