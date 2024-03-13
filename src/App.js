import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Image_1 from './Image_1.png';

function app() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <link to ="/">Home</link>
            </li>
            <li>
              <link to ="/page1">Page 1</link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component = {Home} />
        <Route path="/page1" component = {Page1} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Page1() {
  return (
    <div>
      <h2>Page 1</h2>
      <img src={Image_1} alt=""/>
    </div>
  )
}

export default app.js;