import "./styles.css";
// import listItems from "./listItems";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

export default function App() {
  // const [list, setList] = useState(listItems);
  const [itemList, setItemList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addToList = (e) => {
    setInputValue(e.target.value);
  };
  const resetInputField = () => {
    setInputValue("");
  };

  const displayInputList = () => {
    !inputValue ? alert("You need to add a item") : itemList.push(inputValue);
    setItemList(itemList.map((data) => data));
    resetInputField();
  };

  return (
    <div className="app">
      <header>
        <h1>To Do List</h1>
        <form>
          <input
            onChange={addToList}
            type="text"
            placeholder="Add Items"
            value={inputValue}
            autoFocus
          />
          <input onClick={displayInputList} type="button" value="Add to List" />
        </form>
      </header>
      <main>
        {itemList.map((listItems) => {
          return (
            <li key={listItems}>
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
