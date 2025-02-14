import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ( {item, handlCheck, handleDelete } ) => {

  return (
    <li className="item">
            <input type="checkbox" onChange={()=> handlCheck(item.id)} checked={item.checked} />
            <label style={(item.checked) ? { textDecoration: 'line-through'} : null} onDoubleClick={()=> handlCheck(item.id)}>{item.item}</label>
            <FaTrashAlt onClick={() => handleDelete(item.id)}
            role="button"
            tabIndex="0"/>
          </li>
  )
}

export default LineItem;