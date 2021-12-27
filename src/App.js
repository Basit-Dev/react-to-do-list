import "./styles.css";
import listItems from "./listItems";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState(listItems);
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <main>
        {list.map((listItems) => {
          return <li>{listItems.item}</li>;
        })}
      </main>
      <footer>
        <p>Copyright &copy; 2022</p>
      </footer>
    </div>
  );
}
