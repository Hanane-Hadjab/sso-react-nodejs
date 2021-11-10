import { BrowserRouter as Router } from "react-router-dom";
import "./styles/css/style.css";
import Routes from "./routes/backofficeRoutes";


function App() {
  return (
    <Router>
      <Routes />
    </Router>
     
  );
}

export default App;

