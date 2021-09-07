import "./App.css";
import { Switch, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import Menu from "./components/Menu";
import Consolelog from "./components/Consolelog";
import Fonctions from "./components/Fonctions";
import IfElse from "./components/Ifelse";
import Ternaire from "./components/Ternaire";
import SwitchStatement from "./components/Switch";
import ForLoop from "./components/For";
import DoWhile from "./components/DoWhile";
import WhileLoop from "./components/While";
import Pop from "./components/Pop";
import Shift from "./components/Shift";
import Push from "./components/Push";
import IndexArray from "./components/IndexArray";
import Filter from "./components/Filter";
import Reduce from "./components/Reduce";
import MapArray from "./components/Map";
import Includes from "./components/Includes";
import Sort from "./components/Sort";
import SetTimeout from "./components/SetTimeout";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cheat Sheet JS</h1>
      </header>
      <div className="App-page">
        <nav className="App-menu">
          <Menu />
        </nav>
        <section className="App-content">
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/consolelog" component={Consolelog} />
            <Route path="/fonctions" component={Fonctions} />
            <Route path="/ifelse" component={IfElse} />
            <Route path="/ternaire" component={Ternaire} />
            <Route path="/switch" component={SwitchStatement} />
            <Route path="/forloop" component={ForLoop} />
            <Route path="/do-while" component={DoWhile} />
            <Route path="/while" component={WhileLoop} />
            <Route path="/pop" component={Pop} />
            <Route path="/shift" component={Shift} />
            <Route path="/push" component={Push} />
            <Route path="/index-array" component={IndexArray} />
            <Route path="/filter" component={Filter} />
            <Route path="/reduce" component={Reduce} />
            <Route path="/map" component={MapArray} />
            <Route path="/includes" component={Includes} />
            <Route path="/sort" component={Sort} />
            <Route path="/set-timeout" component={SetTimeout} />
          </Switch>
        </section>
      </div>
    </div>
  );
}

export default App;
