import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
    {
        id: 1,
        checked: true,
        item: "One half pound bag of Cocoa Covered Almonds Unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "Item 2"
    },
    {
        id: 3,
        checked: false,
        item: "Item 3"
    }
]);

const handlCheck = (id) => {
  const listItems = items.map((item) =>  item.id === id ? { ...item, checked: !item.checked } : item )
  setItems(listItems);
  localStorage.setItem('shippinglist', JSON.stringify(listItems))
}

const handleDelete = (id) => {
  items.forEach((item) => {
    if (item.id === id) {
      if (item.checked) {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shippinlist', JSON.stringify(listItems))
      }
      else {
        alert('Sarigga chudu ninga')
      }
    } 
  })
}
  
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" onChange={()=> handlCheck(item.id)} checked={item.checked} />
            <label style={(item.checked) ? { textDecoration: 'line-through'} : null} onDoubleClick={()=> handlCheck(item.id)}>{item.item}</label>
            <FaTrashAlt onClick={() => handleDelete(item.id)}
            role="button"
            tabIndex="0"/>
          </li>
        ))}
      </ul>
    </main>
  )
}
export default Content;