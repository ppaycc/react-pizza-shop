import { Header } from './components'
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";

const App = () => {

  return (
  <div className="wrapper">
    <Header />
    <div className="content">
      <Route path='/' exact render={()=><Home />} />
      <Route path='/cart' exact render={()=><Cart/>} />
    </div>
  </div>

);
}

export default App;