import ItemList from "./ItemList";

const Content = ( {items, handlCheck, handleDelete}) => {
  return (
    <main>
          {items.length ? (
            <ItemList items={items} handlCheck={handlCheck} handleDelete={handleDelete} ></ItemList>
            ): (
            <p> Your list is empty</p>
            )}
        </main>
  )
}
export default Content;