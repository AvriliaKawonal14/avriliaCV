import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const projectsRef = ref(db, "Projects");
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      setProjects(data);
    });
  }, []);
    return (
      <section className="projects">
      <h2>{projects.jdl}</h2>
      <div className="project">
        <img 
          src="images/dbms.png" 
          alt="Sistem Monitoring Inventaris" 
          className="project-image" 
        />
        <h3>{projects.tit1}</h3>
        <span>{projects.thntit1}</span>
        <p>{projects.ket1}</p>
      </div>
      <div className="project">
        <img 
          src="images/dbms.png" 
          alt="Sistem Monitoring Inventaris" 
          className="project-image" 
        />
        <h3>{projects.tit2}</h3>
        <span>{projects.thn2}</span>
        <p>{projects.ket2}</p>
      </div>
      <div className="project">
        <img 
          src="images/webdesign.png" 
          alt="Aplikasi Manajemen Tugas" 
          className="project-image" 
        />
        <h3>{projects.tit3}</h3>
        <span>{projects.thn3}</span>
        <p>{projects.ket3}</p>
      </div>
      <div className="project">
        <img 
          src="images/Robotic.jpg" 
          alt="Sistem Monitoring Inventaris" 
          className="project-image" 
        />
        <h3>{projects.tit4}</h3>
        <span>{projects.thn4}</span>
        <p>{projects.ket4}</p>
      </div>
    </section>
    
    )
}

export default Projects;

