import { Route, Routes} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import  AddEdit  from "./pages/AddEdit";
import Home from "./pages/Home"
import Header from "./component/Header";


function App() {

  // the routes to different webpages
  // the header of the webpage also included
  return (
    <div>
      <Header />
      <ToastContainer position="top-center"/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/add" element={<AddEdit />} />
          <Route path="/update/:id" element={<AddEdit />} />
        </Routes>
        </div>
  );
}

export default App;
