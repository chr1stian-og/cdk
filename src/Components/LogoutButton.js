import { useAuth0, User } from "@auth0/auth0-react";
import UserProfile from "./UserProfile";

const LogoutButton = (props) => {
  const { user, logout, isAuthenticated } = useAuth0();

  function signOut() {
    alert("Do you want to logout?");
    logout({ returnTo: window.location.origin });
  }

  return (
    isAuthenticated &&
    (user.picture ? (
      <img
        onClick={signOut}
        src={user.picture}
        width="45px"
        className="rounded-full hover:cursor-pointer"
        alt={user.name}
      ></img>
    ) : (
      <button className={props.class_name} onClick={signOut}>
        {user.name.split(" ").map((letter) => letter[0])}
      </button>
    ))
  );

  //   return
  //       isAuthenticated && (
  //       <button className={props.class_name} onClick={signOut}>
  //         {user.picture ? (
  //           <img
  //             src={user.picture}
  //             width="45px"
  //             className="rounded-full"
  //             alt={user.name}
  //           ></img>
  //         ) : (
  //           user.name.split(" ").map((letter) => letter[0])
  //         )}
  //       </button>
  //     )
};

export default LogoutButton;
