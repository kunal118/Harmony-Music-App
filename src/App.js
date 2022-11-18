import Login from "./Login";
import "bootstrap/dist/css/bootstrap.css";
import Dashboard from "./Dashboard";
const code = new URLSearchParams(window.location.search).get("code");

function App() {
  
  //console.log(process.env)
  return code ? <Dashboard code={code} /> : <Login />;
  //return <Dashboard />;
}

export default App;

