import { MonthBtn } from "./MonthBtn";

export const Months = () => {
  return (
    <div className="flex">
      <MonthBtn numberMonth={-2} />
      <MonthBtn numberMonth={-1} />
      <MonthBtn numberMonth={0} />
    </div>
  );
};
