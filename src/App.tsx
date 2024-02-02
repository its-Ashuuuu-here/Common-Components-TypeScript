import "./App.css";
import DynamicBtn from "./DynamicBtn";
import DynamicIn from "./DynamicIn";
import DynamicSel from "./DynmicSel";

function App() {
  return (
    <>
      <DynamicBtn label="Click me" size="default" type="dashed" shape="round" />

      <DynamicBtn
        label="large Button"
        size="large"
        type="primary"
        shape="default"
      />

      <hr />
      <DynamicIn
        status="error"
        size="large"
        type="password"
        placeholder="enter password "
      />
      <DynamicIn
        status="warning"
        size="default"
        type="text"
        placeholder="enter name"
      />

      <hr />
      <DynamicSel
        size="default"
        status="warning"
        defaultValue="Select option"
        mode="tags"
        options={[
          {
            value: "jack",
            label: "Jack",
          },
          {
            value: "lucy",
            label: "Lucy",
          },
          {
            value: "tom",
            label: "Tom",
          },
        ]}
      />
      <DynamicSel
        size="large"
        status="error"
        defaultValue="Select option"
        options={[
          {
            value: "jack",
            label: "Jack",
          },
          {
            value: "lucy",
            label: "Lucy",
          },
          {
            value: "tom",
            label: "Tom",
          },
        ]}
      />
    </>
  );
}

export default App;
