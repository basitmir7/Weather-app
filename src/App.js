import "./App.css";
import Main from "./components/main";
const api = {
  key: "bae514b748021beed427bca432e92ea4",
  baseURL: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="App">
      <Main api={api} />
    </div>
  );
}

export default App;
