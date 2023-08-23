import { Header } from "./components/Header/Header";
import { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CircularProgressIndicator from "./UI/CircularProgressIndicator/CircularProgressIndicator";
import styles from "./App.module.scss";
import { useState } from "react";
import { useEffect } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const ProjectDescription = lazy(() =>
  import("./pages/Projects/ProjectDescription/ProjectDescription")
);
const Publications = lazy(() => import("./pages/Publications/Publications"));

function App() {
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark =
      storedTheme === "dark" || (storedTheme === null && prefersDark);

    if (defaultDark) {
      setCurrentTheme("dark");
    } else {
      setCurrentTheme("light");
    }
  }, []);

  return (
    <>
      <header>
        <Header setCurrentTheme={setCurrentTheme} currentTheme={currentTheme} />
      </header>
      <main className={styles.main}>
        <Suspense fallback={<CircularProgressIndicator />}>
          <Switch>
            <Route path="/" exact>
              <Home currentTheme={currentTheme} />
            </Route>
            <Route path="/projects" exact>
              <Projects />
            </Route>
            <Route path="/projects/:id">
              <ProjectDescription />
            </Route>
            <Route path="/publications">
              <Publications />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Suspense>
      </main>
    </>
  );
}

export default App;
