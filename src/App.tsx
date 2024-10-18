import DateRanger from "./components/DateRanger";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { DataContextProvider } from "./data/contexts/DataContext";
import Resume from "./pages/Resume";
import "./Style.css";

function App() {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header />
        <DateRanger />
          <Resume />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
