import { useContext, useEffect, useState } from "react"
import { CurrentUserContext } from "../auth/CurrentUserContext"
import Item from "./Item"
import CreateItem from "./CreateItem"
import supabase from "../../utils/supabase"
import { User as FirebaseUser } from "firebase/auth"

export interface ItemObject {
  id: string,
  name: string,
  status: 'ongoing' | 'completed'
}

export default function TodoList() {
  const authUser: FirebaseUser | null = useContext(CurrentUserContext) as FirebaseUser | null;
  const [itemArray, setItemArray] = useState<ItemObject[]>([])
  const [showCreateItem, setShowCreateItem] = useState<boolean>(false)
  const [itemFilter, setItemFilter] = useState<'all' | 'ongoing' | 'completed'>('all')

  useEffect(() => {
    const getItems = async () => {
      if (authUser) {
        const { data } = await supabase.from('items').select(`id, name, status, users!inner(id)`).eq(`users.google_uid`, authUser.uid)
        if (data) setItemArray(data)
      }
    }
    getItems()
  }, [])

  async function updateStatus(idToUpdate: string) {
    const arr = [...itemArray]
    const obj = arr.find(item => item.id === idToUpdate)
    if (obj) {
      obj.status = obj.status === 'ongoing' ? 'completed' : 'ongoing'
      // const { error } = await supabase.from('items').update({status: obj.status}).eq('id', idToUpdate)
      await supabase.from('items').update({status: obj.status}).eq('id', idToUpdate)
      setItemArray(arr)
    }
  }

  async function deleteItem(idToRemove: string) {
    // const { error } = await supabase.from('items').delete().eq('id', idToRemove)
    await supabase.from('items').delete().eq('id', idToRemove)
    setItemArray(itemArray.filter(item => item.id !== idToRemove))
  }

  return (
    <div className="font-roboto flex flex-col items-center">
			<div className="border-2 border-gray-800 w-[800px] bg-slate-100 flex flex-col items-center rounded-lg">
				<h1 className="text-[32px]">{`${authUser ? `${authUser.displayName}'s ` : ''}TODO`}</h1>
				{/* filters */}
				<div className="flex justify-around px-6 gap-x-4 w-full mb-6">
					<div className="w-1/3">
						<button 
							className={`${itemFilter === 'all' ? 'bg-gray-400' : 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300'} border-[1px] py-3 border-gray-400  w-full text-[20px] transition-all`}
							onClick={() => setItemFilter('all')}>All</button>
					</div>
					<div className="w-1/3">
						<button 
							className={`${itemFilter === 'ongoing' ? 'bg-gray-400' : 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300'} border-[1px] py-3 border-gray-400  w-full text-[20px] transition-all`}
							onClick={() => setItemFilter('ongoing')}>Ongoing</button>
					</div>
					<div className="w-1/3">
						<button 
							className={`${itemFilter === 'completed' ? 'bg-gray-400' : 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300'} border-[1px] py-3 border-gray-400  w-full text-[20px] transition-all`}
							onClick={() => setItemFilter('completed')}>Completed</button>
					</div>
				</div>

        <div className="w-full flex justify-center mb-6">
          {showCreateItem 
            ? <div className='w-4/5'>
                <CreateItem setShowCreateItem={setShowCreateItem} itemArray={itemArray} setItemArray={setItemArray} />
              </div> 
            : <button className="w-1/2 bg-slate-400 hover:bg-slate-500 active:bg-slate-600 text-gray-950 hover:text-gray-900 active:text-gray-800 transition-all rounded py-2 text-[18px] "
                onClick={() => setShowCreateItem(true)}>New Task</button>
          }
        </div>

        {/* items */}
        {itemArray.map(item => {
          if (item.status === itemFilter || itemFilter === 'all') {
            return (
              <div key={item.id} className='w-4/5'>
                <Item itemObject={item} updateStatus={updateStatus} deleteItem={deleteItem}/>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}