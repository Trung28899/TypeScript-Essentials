import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

function User() {
  // Setting up the types for the state
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Trung Trinh",
      email: "trevtrinh@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {/* this is like {user && user.name} in JavaScript 
            in case user is null, the value will be invalid */}
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
}

export default User;
