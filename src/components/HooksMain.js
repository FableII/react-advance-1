import useTheme from "../hooks/useTheme";
import UseStateEffectTester from "./UseStateEffectTester";
import UseContextTester from "./UseContextTester";
import {
  UseCallbackTester,
  UseMemoTester,
} from "./UseClbMemoTester";
import UseReducerTester from "./UseReducerTester";

const HooksMain = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      className={`HooksMain ${theme}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>3. Custom Hooks</h1>
      <button type="button" onClick={toggleTheme}>
        Switch theme
      </button>
      <h1>4. UseContext Hook</h1>
      <UseContextTester />
      <h1>5. UseState and UseEffect Hooks</h1>
      <UseStateEffectTester />
      <h1>6. UseCallback and UseMemo Hooks</h1>
      <UseCallbackTester />
      <UseMemoTester />
      <h1>7. UseReducer Hook</h1>
      <UseReducerTester />
    </div>
  );
};

export default HooksMain;
