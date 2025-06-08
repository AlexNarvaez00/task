import styles from "./App.module.css";
import { Outlet, useNavigate } from "react-router";
import { join } from "./shared/css/CssUtils";
import { useEffect } from "react";
import { useBreadcrumbs } from "./app/components/useBreadcrumbs";

function App() {
  const navigate = useNavigate();
  const path = useBreadcrumbs();

  useEffect(() => {
    const [base] = path;
    if (base === undefined || base === "/") {
      navigate("/task");
    }
  }, [path, navigate]);

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
