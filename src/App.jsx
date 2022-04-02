import './App.css';
import { AllRoutes } from './AllRoutes/AllRoutes';
import { Navbar } from './Pages/Navbar/Navbar';
import { Footer } from './Pages/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
