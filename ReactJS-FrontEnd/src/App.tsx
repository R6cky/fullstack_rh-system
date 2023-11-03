import { useState } from "react";
import { RoutesMain } from "./routes/Routesmain";

function App() {
  const [isAdmin, setIsAdmin] = useState(0);

  return <RoutesMain />;
}

export default App;
