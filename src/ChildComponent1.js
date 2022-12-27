import MyContext from "./MyContext";
import { useContext } from "react";

function ChildComponent1() {
  const { globalState, setGlobalState } = useContext(MyContext);

  return (
    <div>
      <h1>Child Component 1</h1>
      <p>
        Child state: <span className="primary-color">{globalState}</span>
      </p>
    </div>
  );
}

export default ChildComponent1;
