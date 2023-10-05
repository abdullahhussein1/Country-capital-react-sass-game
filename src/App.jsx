import CountryCapitalGame from "./components/CountryCapitalGame";
import "./App.scss";

export default function App() {
  return (
    <>
      <CountryCapitalGame
        data={{ germany: "berlin", iraq: "baghdad", palstain: "quds" }}
      />
    </>
  );
}
