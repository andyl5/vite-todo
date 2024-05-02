import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Item from './components/Item'
import CreateItem from './components/CreateItem'

function App() {

  const [itemArray, setItemArray] = useState<React.ReactNode[]>([<Item name='Wash the dishes'/>, <Item name='Do the laundry' />])
  const [showCreateItem, setShowCreateItem] = useState<boolean>(false)


  return (
    <div>
      <Header>
        
      <div className="w-full flex justify-center mb-6">
        {showCreateItem ? <CreateItem setShowCreateItem={setShowCreateItem} itemArray={itemArray} setItemArray={setItemArray}/> : 
          <button className="w-1/2 bg-slate-400 hover:bg-slate-500 active:bg-slate-600 text-gray-950 hover:text-gray-900 active:text-gray-800 transition-all rounded py-2 text-[18px] "
            onClick={() => {
              setShowCreateItem(true)
            }}
          >New Task</button>
        }
        </div>

        {itemArray.map(item => (
          <div>
            {item}
          </div>
        ))}
      </Header>
    </div>
  )
}

export default App
