import React from "react";

export default function Right({
  setTotal,
  setTip,
  setPeople,
  setBill,
  TipAmount,
  TotalAmount,
}) {
  function onClick() {
    setBill(0);
    setTip(0);
    setPeople(1);
    setTotal(0);
  }
  return (
    <div className="flex flex-col gap-10 border-transparent font-semibold border-2 w-6/12 bg-vdcyan rounded-2xl p-6 max-phone:min-w-full max-phone:max-h-screen">
      <div className="flex justify-between ">
        {/* Left Side */}
        <div className="min-w-[50%]">
          <p className="text-white">
            Tip Amount <br />{" "}
            <span className="text-sm text-gray-400">/person</span>
          </p>
        </div>
        <div className="flex min-w-[50%] justify-center items-center text-2xl">
          <p className="text-scyan font-semibold">${TipAmount}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="min-w-[50%]">
          <p className="text-white">
            Total <br />
            <span className="text-sm text-gray-400">/person</span>{" "}
          </p>
        </div>
        <div className="flex  min-w-[50%] justify-center items-center text-2xl">
          <p className="text-scyan font-semibold">${TotalAmount}</p>
        </div>
      </div>
      <div>
        <button
          className=" text-vdcyan min-w-full bg-scyan hover:bg-lgcyan"
          onClick={onClick}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
