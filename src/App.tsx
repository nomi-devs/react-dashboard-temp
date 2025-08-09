
import { useSelector } from "react-redux";
import AppRoutes from "./routes";

function App() {
  const state = useSelector((state: any) => state)
  console.log("App state:", state);
  return (
    <AppRoutes />

  );
}

export default App;
