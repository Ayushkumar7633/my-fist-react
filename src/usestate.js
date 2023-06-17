import { useState, createContext, useContext, viratContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();
const ViratContext = createContext();
function Component1() {
  const [user, setUser] = useState("Jesse Hall");
  const [ayus, setAyus] = useState("Mai hu ayush");

  return (
    <UserContext.Provider value={user}>
      <ViratContext.Provider value={ayus}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
      </ViratContext.Provider>
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}
function Component4() {
  const ayush = useContext(ViratContext);
  return (
    <>
      <h1>Component 4</h1>
      <h2>{`hello ${ayush} again!`}</h2>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
export default Component1;
