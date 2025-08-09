
import { useSelector } from "react-redux";
import AppRoutes from "./routes";

function App() {
  const state = useSelector((state: any) => state)
  console.log("App state:", state);
  return (
    <div className="min-h-screen bg-gray-50">
      <AppRoutes />
    </div>
  );
}

export default App;
