import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Item from './components/Item'
import CreateItem from './components/CreateItem'

export interface ItemObject {
  id: number,
  name: string,
  status: 'ongoing' | 'completed'
}
function App() {

  const [itemArray, setItemArray] = useState<ItemObject[]>([{id: 1, name: 'Wash the dishes', status: 'ongoing'}, {id: 2, name: 'Do the laundry', status: 'completed'}])
  const [showCreateItem, setShowCreateItem] = useState<boolean>(false)

  const [id, setId] = useState(3)

  const [itemFilter, setItemFilter] = useState<'all' | 'ongoing' | 'completed'>('ongoing')

  function updateStatus(idToUpdate: number) {
    const arr = [...itemArray]
    const obj = arr.find(item => item.id === idToUpdate)
    if (obj) {
      obj.status === 'ongoing' ? obj.status = 'completed' : obj.status = 'ongoing'
      setItemArray(arr)
    }
  }

  function deleteItem(idToRemove: number) {
    setItemArray(itemArray.filter(item => item.id !== idToRemove))
  }

  return (
    <div>
      <Header itemFilter={itemFilter} setItemFilter={setItemFilter}>
        <div className="w-full flex justify-center mb-6">
          {showCreateItem 
            ? <div className='w-4/5'>
                <CreateItem setShowCreateItem={setShowCreateItem} itemArray={itemArray} setItemArray={setItemArray} id={id} setId={setId}/>
              </div> 
            : <button className="w-1/2 bg-slate-400 hover:bg-slate-500 active:bg-slate-600 text-gray-950 hover:text-gray-900 active:text-gray-800 transition-all rounded py-2 text-[18px] "
                onClick={() => setShowCreateItem(true)}>New Task</button>
          }
        </div>

        {itemArray.map(item => {
          if (item.status === itemFilter || itemFilter === 'all') {
            return (
              <div key={item.id} className='w-4/5'>
                <Item itemObject={item} updateStatus={updateStatus} deleteItem={deleteItem}/>
              </div>
            )
          }
        })}

      </Header>
    </div>
  )
}

export default App