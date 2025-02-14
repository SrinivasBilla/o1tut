
import LineItem from './LineItem';

const ItemList = ( {items, handlCheck, handleDelete} ) => {
  return(
      <ul>
        {items.map((item) => (
          <LineItem key={item.id} item={item} handlCheck={handlCheck} handleDelete={handleDelete} />
        ))}
      </ul>
  )
}

export default ItemList;