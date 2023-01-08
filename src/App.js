import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Company from "./components/pages/Company";
import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>

       <NavBar/>
        
        <Container customClass='min-height'>

       
        <Routes>
        
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/projects" element={<Projects/>}></Route>

        <Route exact path="/company" element={<Company/>}></Route>

        

        <Route exact path="/newproject" element={<NewProject/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes> 

      </Container>
      <Footer/>
      </Router>

      
    </div>
  );
}

export default App;
