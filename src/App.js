import "./styles.css";
import listItems from "./listItems";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState(listItems);
  const itemList = [];

  let getInputValue;

  const getInput = function (e) {
    getInputValue = e;
    return getInputValue;
  };

  return (
    <div className="app">
      <header>
        <h1>To Do List</h1>
        <form>
          <input
            onChange={(e) => getInput(e.target.value)}
            type="text"
            placeholder="Add Items"
          />
          <input
            onClick={() => [
              itemList.push(getInputValue),
              console.log(itemList)
            ]}
            type="button"
            value="Add to List"
          />
        </form>
      </header>
      <main>
        {list.map((listItems) => {
          return (
            <li key={listItems.id}>
              <input type="checkbox" />
              <span>{listItems.item}</span>
              <MdDelete onClick={() => null} className="delete-btn" />
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
