import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { DataContextProvider } from "./data/contexts/DataContext";
import Resume from "./pages/Resume";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resume />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
