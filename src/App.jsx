import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutPage from "./containers/AboutPage/AboutPage";
import ContactPage from "./containers/ContactPage/ContactPage";
import LandingPage from "./containers/LandingPage/LandingPage";
import ProjectsPage from "./containers/ProjectsPage/ProjectsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <LandingPage />
        <ProjectsPage />
        <AboutPage />
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
