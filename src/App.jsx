//import logo from './logo.svg';
import styles from './App.module.css';
import { Landing } from './pages/Landing';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from './pages/MovieDetails';

// export para hacer "publico" el componente
export function App(){
  return (
    <Router>
      <div>
        <header>
          <h1 className={styles.title}>Movies</h1>



        </header>
        <main>
          <Switch>
            <Route exact path="/movies/:movieId"><MovieDetails /></Route>
            <Route path="/"><Landing /> </Route>
          </Switch>
        </main>
      </div>
    </Router>    
    );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Aprendiendo nuevamente React
//         </a>
//       </header>
//     </div>
//   );
// }

//hacer "publica" el componente
//export default App;
