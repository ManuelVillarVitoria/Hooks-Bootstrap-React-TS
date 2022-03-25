import { useState } from "react";
import { Users } from "../Interfaces";

// const tempUser: Users = {
//   uuid: "XYZ2789",
//   name: "Juan"
// };

export const User = () => {
  // const [user, setUser] = useState<Users>(tempUser);
  const [user, setUser] = useState<Users>();

  const login = () => {
    setUser({
      uuid: "ABC123",
      name: "Manuel Villar"
    });
  };

  return (
    <div className="mt-5">
      <h3>User: useState</h3>
      <button className="btn btn-outline-primary" onClick={login}>
        Login
      </button>

      {!user ? (
        <pre className="mt-2"> There is not user </pre>
      ) : (
        <pre className="mt-2"> {JSON.stringify(user)} </pre>
      )}
    </div>
  );
};
