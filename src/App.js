import About from "./components/About";
import Diferences from "./components/Diferences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Simplify from "./components/Simplify";
import Testimonials from "./components/Testimonials";



function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Diferences/>
      <Testimonials/>
      <Simplify/>
      <Footer/>
    </div>
  );
}

export default App;
