
import './App.css';
import Homepage from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home/components';
import PageMana from './pages/Manager/components';
import PageSingup from './pages/SingUp';
import PageNewsDtail from './pages/NewsDetail';
import PageProducListing from './pages/Productlisting';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = "/danh-sach-dia-diem" component = {PageProducListing}></Route>
          <Route path = "/tin-tuc/:slug" component = {PageNewsDtail}></Route>
          <Route path = "/dang-ky" component = {PageSingup}></Route>
          <Route path="/quan-ly-he-thong" component={PageMana}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div >
  );
}

export default App;
