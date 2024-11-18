import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Header = () => {
  const [header, setHeader] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "Header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);
  return (
    <header>
      <img
        src={`data:image/jpeg;base64,${header.foto}`}
        alt="Foto Profil"
        className="profile-picture"
      />
      <h1>{header.name}</h1>
      <p>{header.sms}</p>
      <div className="contact-info">
        <p>{header.email}</p>
        <p>{header.telp}</p>
        <p>{header.almt}</p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/avrilia-kawonal-b110452b2/">{header.link}</a> |
          <a href="https://github.com/AvriliaKawonal14">{header.git}</a> |
          <a href="https://www.instagram.com/irenakawonal_/?igsh=NnNkNXl0eDdycTU3">{header.ig}</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
