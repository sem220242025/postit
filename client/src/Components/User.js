import user from "../Images/user.png";
import { useSelector } from "react-redux";

import Location from "./Location";
import Location2 from "./Location2";
import Location3 from "./Location3";
import Location4 from "./Location4";

const User = () => {
  const email = useSelector((state) => state.users.user.email);
  const name = useSelector((state) => state.users.user.name);

  return (
    <div>
      <img src={user} className="userImage" />
      <p>
        {name}
        <br />
        {email}
        <Location />
        <br />
        <Location2 />

        <br />
        <Location3 />
        <br />
        <Location4 />
      </p>
    </div>
  );
};

export default User;
