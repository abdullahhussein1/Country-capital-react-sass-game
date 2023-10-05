/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Button({
  children,
  onButtonClick,
  pairIsWrong,
  firstChoice,
  secondChoice,
}) {
  const [buttonIsClicked, setButtonIsClicked] = useState(false);

  if (
    buttonIsClicked &&
    children !== firstChoice &&
    children !== secondChoice
  ) {
    setButtonIsClicked(false);
  }

  function handleClick() {
    setButtonIsClicked(true);
    onButtonClick(children, buttonIsClicked);
  }

  return (
    <button
      onClick={handleClick}
      className={
        buttonIsClicked && pairIsWrong
          ? "red"
          : buttonIsClicked && firstChoice === children
          ? "blue"
          : "dark"
      }
    >
      {children}
    </button>
  );
}
