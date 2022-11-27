import { React } from "react";

export default function Left({
  setBill,
  Bill,
  setPeople,
  setTip,
  Tip,
  setTotal,
  people,
}) {
  function findTip(bill, tip, people) {
    const total = (bill * tip) / people;
    setTip(total);
    findTotal(bill, people, total);
  }

  function findTotal(bill, size, tip) {
    const total = bill / size + tip;
    setTotal(total);
  }
  return (
    <div className="  max-phone:min-w-full max-phone:min-h-[50%] w-6/12 pl-3 pt-2 font-bold">
      <div className="pb-4">
        <p className="pb-1 ">Bill</p>
        <input
          className=" font-bold text-2xl text-vdcyan border-2 border-transparent bg-vlgcyan hover:border-scyan rounded-lg min-w-full text-right focus:outline-scyan"
          type="number"
          placeholder={0}
          value={Bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
      <div className="">
        <p className="pb-2">Select Tip %</p>
        <div className="flex flex-col gap-2 min-w-full max-phone:flex-row">
          <div className="flex gap-2  max-phone:flex-col max-phone:min-w-[50%]">
            <button
              className="hover:bg-scyan hover:text-vdcyan"
              value={0.05}
              onClick={(e) => findTip(Bill, e.target.value, people)}
            >
              5%
            </button>
            <button
              className="hover:bg-scyan hover:text-vdcyan"
              value={0.1}
              onClick={(e) => findTip(Bill, e.target.value, people)}
            >
              10%
            </button>
            <button
              className="hover:bg-scyan hover:text-vdcyan"
              value={0.15}
              onClick={(e) => findTip(Bill, e.target.value, people)}
            >
              15%
            </button>
          </div>
          <div className="flex gap-2 max-phone:flex-col max-phone:min-w-[50%]">
            <button
              className="hover:bg-scyan hover:text-vdcyan"
              value={0.25}
              onClick={(e) => findTip(Bill, e.target.value, people)}
            >
              25%
            </button>
            <button
              className="hover:bg-scyan hover:text-vdcyan"
              value={0.5}
              onClick={(e) => findTip(Bill, e.target.value, people)}
            >
              50%
            </button>
            <input
              type="number"
              className=" text-center text-lg font-bold  bg-vlgcyan focus:outline-scyan border-2 rounded-lg w-24 max-phone:min-w-[90%] max-phone:min-h-[30%] text-vdcyan"
              placeholder="Custom"
              onChange={(e) => findTip(Bill, e.target.value * 0.01, people)}
            />
          </div>
        </div>
        <div className="pt-3">
          <p>Number of People</p>
          <input
            className=" font-bold text-2xl border-2 border-transparent bg-vlgcyan hover:border-scyan rounded-lg min-w-full text-right focus:outline-scyan text-vdcyan"
            type="number"
            default={1}
            value={people}
            placeholder={1}
            onChange={(e) => setPeople(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
