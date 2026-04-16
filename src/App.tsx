import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExampleCaseStudy from './pages/case-studies/template/ExampleCaseStudy.tsx';
import AngularAdminPortalHardening from "./pages/case-studies/koin/AngularAdminPortalHardening.tsx";

function PortfolioHome() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHome />} />
      <Route path="/case-studies/example" element={<ExampleCaseStudy />} />
      <Route path={"/case-studies/koin/angular-portal-hardening"} element={<AngularAdminPortalHardening />} />
      {/* Add additional case study routes here */}
    </Routes>
  );
}

export default App;