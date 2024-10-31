import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { DataContextProvider } from "./data/contexts/DataContext";
import Resume from "./pages/Resume";
import { Sales } from "./pages/Sales";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resume />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
