import MyContext from "./MyContext";
import { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";
import ChildComponent3 from "./ChildComponent3";

function ParentComponent() {
  const [globalState, setGlobalState] = useState("");

  const handleChange = (e) => {
    setGlobalState(e.target.value);
  };

  return (
    <MyContext.Provider value={{ globalState, setGlobalState }}>
      <div className="global-value">
        <div>
          <h1 className="primary-color" style={{ margin: 0 }}>
            Parent Component
          </h1>
          <hr />
          <input
            placeholder="Enter a value to reflect in child components"
            className="global-value-input"
            type="text"
            name="globalState"
            autoFocus={true}
            value={globalState}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="child-value">
        <ChildComponent1 />
        <ChildComponent2 />
        <ChildComponent3 />
      </div>
    </MyContext.Provider>
  );
}

export default ParentComponent;
