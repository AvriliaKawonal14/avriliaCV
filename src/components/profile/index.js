import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const profileRef = ref(db, "Profile");
    onValue(profileRef, (snapshot) => {
      const data = snapshot.val();
      setProfile(data);
    });
  }, []);
  return (
    <section className="profile">
      <h2>{profile.me}</h2>
      <p>{profile.ket}</p>
    </section>
  );
};

export default Profile;
