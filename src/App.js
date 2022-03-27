import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import InputGroup from "./InputGroup";

export default function App() {
  return (
    <div className="App">
      <h1 className="mb-3">Dictionary</h1>
      <InputGroup />
      <small>
        <a
          href="https://github.com/Mideolabanji/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          coded
        </a>{" "}
        by{" "}
        <a
          href="https://olamide-olabanji.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          mide olabanji
        </a>
      </small>
    </div>
  );
}
