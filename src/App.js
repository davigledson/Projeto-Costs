import { BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Company from "./components/pages/Company";
import Container from "./components/layout/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contato</Link>
          <Link to='/company'>Compania</Link>
          <Link to='/newproject'>Novo Projeto</Link>
          
        </div>
        
        <Container customClass='min-height'>

       
        <Routes>
        
        <Route exact path="/" element={<Home/>}></Route>

        <Route exact path="/company" element={<Company/>}></Route>

        <Route exact path="/contact" element={<Contact/>}></Route>

        <Route exact path="/newproject" element={<NewProject/>}></Route>

      </Routes> 

      </Container>
      <p>Footer</p>
      </Router>

      
    </div>
  );
}

export default App;
