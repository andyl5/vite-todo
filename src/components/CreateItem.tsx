import { Dispatch, SetStateAction, useState } from "react"
import Item from "./Item"

type Props = {
  setShowCreateItem: Dispatch<SetStateAction<boolean>>,
  itemArray: React.ReactNode[],
  setItemArray: Dispatch<SetStateAction<React.ReactNode[]>>,
}

export default function CreateItem( { setShowCreateItem, itemArray, setItemArray }: Props ) {

  const [itemName, setItemName] = useState('')

  return (
    <div>
      <div className="w-[600px] border-2 p-4 bg-white">
      <input 
        className="text-[26px] mb-2 w-full outline outline-1 outline-slate-500 focus:outline-black focus:outline-2"
        value={itemName}
        onChange={(e) => {
          setItemName(e.target.value)
        }}
      />
        <div className="flex gap-x-2">
          <div className="w-1/2">
            <button 
              className="w-full bg-slate-400 hover:bg-slate-500 active:bg-slate-600 text-gray-950 hover:text-gray-900 active:text-gray-800 transition-all rounded py-2 text-[18px]"
              onClick={() => {
                setShowCreateItem(false)
              }}
            >Cancel</button>
          </div>
          <div className="w-1/2">
            <button 
              className="w-full bg-black hover:bg-gray-950 active:bg-gray-900 text-white transition-all rounded py-2 text-[18px]"
              onClick={() => {
                // setItemArray([...itemArray, <Item name={itemName}/>])
                setItemArray([...itemArray, <Item name={itemName}/>])
                setShowCreateItem(false)
              }}
            >Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}