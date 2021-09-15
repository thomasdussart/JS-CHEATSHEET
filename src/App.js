import { Switch, Route, Link } from "react-router-dom";
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
// import "./App.css";
// import "./style_mobile.css";
import "./style.css";
import GetElemID from "./components/GetelemID";
import GetElemClass from "./components/Getelemclass";
import GetElemTag from "./components/Getelemtag";
import GetElemName from "./components/Getelemname";
import Fetch from "./components/Fetch";
import FetchPost from "./components/FetchPost";
import FetchDelete from "./components/FetchDelete";

function App() {
  return (
    <div className="App text-center">
      <header className="App-header bg-header text-white text-3xl flex flex-col">
        <Link to={"/"}>JS CHEAT SHEET</Link>
      </header>
      <div className="App-page flex">
        <nav className="App-menu bg-white text-2xl w-1/5 h-3/4 border-r-2 text-left ml-4 overflow-y-auto">
          <Menu />
        </nav>
        <section className="App-content text-left flex flex-col justify-center items-center">
          <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/consolelog" component={Consolelog} />
            <Route path="/getelemid" component={GetElemID} />
            <Route path="/getelemclass" component={GetElemClass} />
            <Route path="/getelemtag" component={GetElemTag} />
            <Route path="/getelemname" component={GetElemName} />
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
            <Route path="/fetch" component={Fetch} />
            <Route path="/fetch-post" component={FetchPost} />
            <Route path="/fetch-delete" component={FetchDelete} />
          </Switch>
        </section>
      </div>
    </div>
  );
}

export default App;
