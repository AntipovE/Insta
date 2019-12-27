import React from "react";
import User from "./User";
import Palette from "./Palette";

const Profile = () => {
  return (
    <div className="container profile">
      <User
        src="https://www.eurocarnews.com/media/pictorials/1949/10882.jpg"
        alt="man"
        name="Audi"
      />
      <Palette/>
    </div>
  );
};
export default Profile;
