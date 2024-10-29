import DateRanger from "./DateRanger";
import { Months } from "./Months";

const Header = () => {
  return (
    <header className="mb">
      <div className="mb">
        <DateRanger />
      </div>
      <Months />
    </header>
  );
};

export default Header;
