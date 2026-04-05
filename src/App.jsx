import s from "./App.module.css"

// Components
import { Header } from "../src/components/Header/Header"
import { ComponentsList } from "./components/ComponentsList/ComponentsList";

function App() {
  return (
    <div className={s.global_container}>
      <Header />
      <ComponentsList />
    </div>
  );
}


export default App;

