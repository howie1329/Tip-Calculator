import { React, useState } from "react";

import Left from "./components/Left";
import Right from "./components/Right";

function App() {
  const [People, setPeople] = useState(1);
  const [BillTotal, setBill] = useState(0);
  const [TipAmount, SetTip] = useState(0.0);
  const [TotalAmount, SetTotal] = useState(0.0);
  return (
    <div className="font-SpaceMono flex min-w-screen min-h-screen justify-center items-center bg-lgcyan  ">
      <div className="p-5 bg-white rounded-lg w-[42rem] h-[21rem] flex  gap-6 max-phone:min-w-full max-phone:min-h-[44rem] max-phone:flex-col max-phone:mt-32">
        <Left
          setBill={setBill}
          setPeople={setPeople}
          Bill={BillTotal}
          setTip={SetTip}
          people={People}
          setTotal={SetTotal}
          Tip={TipAmount}
        />
        <Right
          setTip={SetTip}
          setBill={setBill}
          setPeople={setPeople}
          setTotal={SetTotal}
          TipAmount={TipAmount}
          TotalAmount={TotalAmount}
        />
      </div>
    </div>
  );
}

export default App;
