import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = (event) => {
    setCount((current) => current + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  useEffect(() => {
    console.log("한 번만 실행됩니다")
  }, []);
  useEffect(() => {
    console.log("카운터가 바뀌었습니다")
  }, [count]);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 3) {
      console.log("Search For " + keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here ..."
      />
      <h1 className={styles.title}>Welcome Back! count is {count}</h1>
      <button onClick={onClick}>Count +1</button>
    </div>
  );
}
export default App;
