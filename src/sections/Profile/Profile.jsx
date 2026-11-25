import { UserRound } from "lucide-react";

import Card from "../../components/Card/Card";

import { profile } from "../../data/profile";

import "./Profile.css";

function Profile() {
  return (
    <Card as="div" className="profile">
      {profile.photo ? (
        <img
          className="profile__image"
          src={profile.photo}
          alt="Retrato de Ladislau Bertoldo"
          width="800"
          height="1000"
        />
      ) : (
        <div className="profile__placeholder">
          <div className="profile__avatar">
            <UserRound size={96} strokeWidth={1} aria-hidden="true" />
          </div>

          <span className="profile__placeholder-text">Foto profissional</span>
        </div>
      )}

      <span
        className="profile__decoration profile__decoration--top"
        aria-hidden="true"
      >
        +
      </span>

      <span
        className="profile__decoration profile__decoration--bottom"
        aria-hidden="true"
      >
        +
      </span>
    </Card>
  );
}

export default Profile;
