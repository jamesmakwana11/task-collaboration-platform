import { useState } from "react";
import Login from "./pages/Login";
import Tasks from "./pages/Tasks";

function App() {
  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <div style={{ padding: "20px" }}>
      {isAuth ? <Tasks /> : <Login setIsAuth={setIsAuth} />}
    </div>
  );
}

export default App;
