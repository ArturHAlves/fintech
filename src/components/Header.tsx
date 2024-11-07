import React from "react";
import DateRanger from "./DateRanger";
import { Months } from "./Months";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRanger />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
