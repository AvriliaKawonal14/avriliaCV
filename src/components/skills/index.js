import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Skills = () => {
  const [Skills, setSkills] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const skillsRef = ref(db, "Skills");
    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      setSkills(data);
    });
  }, []);
    return (
        <section className="skills">
        <h2>{Skills.ttl}</h2>
        <ul>
          <li>{Skills.bhs}</li>
          <li>{Skills.sft}</li>
          <li>{Skills.figma}</li>
          <li>{Skills.unt}</li>
          <li>{Skills.blender}</li>
          <li>{Skills.dbs}</li>
        </ul>
      </section>
    )
}

export default Skills;