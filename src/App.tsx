import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Resume from "./pages/Resume";
import "./Style.css";

function App() {
  return (
  <div>
    <Sidenav />
    <main>
    <Header />
    <Resume />
    </main>
  </div>
);
}

export default App;
