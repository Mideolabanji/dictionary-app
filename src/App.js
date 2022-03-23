import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InputGroup from "./InputGroup";

export default function App() {
  return (
    <div className="App">
      <h1 className="mb-3">Dictionary App</h1>
      <InputGroup />
      <small>
        Coded (
        <a
          href="https://github.com/Mideolabanji/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          open-source code
        </a>
        ) and designed by{" "}
        <a
          href="https://olamide-olabanji.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Olamide Olabanji
        </a>
      </small>
    </div>
  );
}
