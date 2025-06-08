import styles from "./App.module.css";
import { Outlet } from "react-router";
import { join } from "./shared/css/CssUtils";

function App() {
  return (
    <section>
      <header className={join(styles.header)}></header>
      <main className={join(styles.main)}>
        <Outlet />
      </main>
    </section>
  );
}

export default App;
