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
        src="images/avril.jpg"
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
          <a href="https://linkedin.com">{header.link}</a> |
          <a href="https://github.com">{header.git}</a> |
          <a href="https://twitter.com">{header.ig}</a>
        </div>
      </div>
    </header>
  );
};

export default Header; 