import MyContext from "./MyContext";
import { useContext } from "react";

function ChildComponent2() {
  const { globalState, setGlobalState } = useContext(MyContext);

  return (
    <div>
      <h1>Child Component 2</h1>
      <p>
        Child state: <span className="primary-color">{globalState}</span>
      </p>
    </div>
  );
}

export default ChildComponent2;
