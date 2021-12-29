import "./styles.css";
import listItems from "./listItems";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export default function App() {
  // const [list, setList] = useState(listItems);
  const [itemList, setItemList] = useState([]);

  let getInputValue;

  const addToList = (e) => {
    getInputValue = e.target.value;
    return getInputValue;
  };

  const displayInputList = () => {
    itemList.push(getInputValue);
    const newList = itemList.map((data) => data);
    setItemList(newList);
  };

  return (
    <div className="app">
      <header>
        <h1>To Do List</h1>
        <form>
          <input onChange={addToList} type="text" placeholder="Add Items" />
          <input onClick={displayInputList} type="button" value="Add to List" />
        </form>
      </header>
      <main>
        {itemList.map((listItems) => {
          return (
            <li key={listItems.id}>
              <input type="checkbox" />
              <span>{listItems}</span>
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
