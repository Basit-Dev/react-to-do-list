import "./styles.css";
import listItems from "./listItems";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState(listItems);
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
        <form>
          <input className="input" type="text" placeholder="Add Items" />
          <input type="button" value="Add to List" />
        </form>
      </header>
      <main>
        {list.map((listItems) => {
          return (
            <li>
              <input type="checkbox" />
              {listItems.item}
              <button>Delete</button>
            </li>
          );
        })}
      </main>
      <footer>
        <p>Copyright &copy; 2022</p>
      </footer>
    </div>
  );
}
