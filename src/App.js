import React from "react";
import Header from "./components/header";
import Profile from "./components/profile";
import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";

const App = () => {
  return (
    <div className="container">
      {/* Bagian Header dengan Foto Profil */}
      <Header />
      {/* Profil Pribadi */}
      <Profile />
      {/* Pengalaman Kerja */}
      <Experience />
      {/* Pendidikan */}
      <Education />
      {/* Keahlian */}
      <Skills />
      {/* Proyek */}
      <Projects />
      {/* Footer */}
      <footer>
        <p>© 2024  Avrilia Irena Kawonal</p>
      </footer>
    </div>
  );
};

export default App;
