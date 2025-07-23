import './App.css';
import NavBar from './component/NavBar';
import FirstSection from './component/FirstSection';
import SecondSection from './component/SecondSections/SecondSection';
import ThirdSection from './component/AboutMe/ThirdSection';
import StackSection from './component/Stacks/StackSection';
import ContactSection from './component/ContactMe/ContactSection';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <>
      <main>
        <section id="home">
          <FirstSection />
        </section>
        <section id="portfolio">
          <SecondSection />
        </section>
        <section id="about">
          <ThirdSection />
        </section>
        <section id="stacks">
          <StackSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
