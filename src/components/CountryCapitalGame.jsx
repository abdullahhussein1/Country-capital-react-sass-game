import { useRef, useState } from "react";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function CountryCapitalGame({ data }) {
  const [countryData, setCountryData] = useState({ ...data });
  const [pairIsWrong, setPairIsWrong] = useState(false);
  const [firstChoice, setFirstChoice] = useState("");
  const secondChoice = useRef("");
  // const onButtonClick = (choice, buttonIsClicked) => {

  const allCountryAndCapitals = [
    ...Object.keys(countryData),
    ...Object.values(countryData),
  ];

  function handleButtonClick(name, buttonIsClicked) {
    if (buttonIsClicked && !pairIsWrong && firstChoice == name) return;

    if (pairIsWrong) {
      setPairIsWrong(false);
    }

    if (!firstChoice || secondChoice.current) {
      setFirstChoice(name);
      secondChoice.current = null;
      return;
    }

    secondChoice.current = name;

    console.log(
      "firstChoice: ",
      firstChoice,
      " secondChoice: ",
      secondChoice.current
    );

    if (countryData[secondChoice.current] === firstChoice) {
      // eslint-disable-next-line no-unused-vars
      let { [secondChoice.current]: omit, ...rest } = countryData;
      setCountryData(rest);
    } else if (countryData[firstChoice] === secondChoice.current) {
      // eslint-disable-next-line no-unused-vars
      let { [firstChoice]: omit, ...rest } = countryData;
      setCountryData(rest);
    } else {
      setPairIsWrong(true);
    }
  }

  return (
    <>
      {Object.keys(countryData).length == 0 && (
        <div className="congraBox">congratulations</div>
      )}
      <div className="choises">
        {allCountryAndCapitals.map((name) => (
          <Button
            key={name}
            pairIsWrong={pairIsWrong}
            firstChoice={firstChoice}
            secondChoice={secondChoice.current}
            onButtonClick={handleButtonClick}
          >
            {name}
          </Button>
        ))}
      </div>
    </>
  );
}
