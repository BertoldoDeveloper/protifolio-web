import { UserRound } from "lucide-react";

import Card from "../../components/Card/Card";
import SafeImage from "../../components/SafeImage/SafeImage";

import { profile } from "../../data/profile";

import "./Profile.css";

function Profile() {
  return (
    <Card className="profile" aria-label="Perfil profissional">
      <SafeImage
        src={profile.photo}
        alt={`Fotografia profissional de ${profile.firstName} ${
          profile.lastName
        }`}
        className="profile__image"
        loading="eager"
        fetchPriority="high"
        objectFit="cover"
        objectPosition="center"
        fallback={
          <div className="profile__placeholder">
            <div className="profile__avatar">
              <UserRound size={72} strokeWidth={1.2} aria-hidden="true" />
            </div>

            <span className="profile__label">Fotografia profissional</span>
          </div>
        }
      />
    </Card>
  );
}

export default Profile;
