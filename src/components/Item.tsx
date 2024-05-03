import { useState } from "react"
import EditItem from "./EditItem"

type Props = {

	itemObject: {
		id: number,
		name: string,
		status: 'ongoing' | 'completed',
	},
	updateStatus: (idToUpdate: number) => void,
	deleteItem: (idToRemove: number) => void
}

export default function Item( { itemObject, updateStatus, deleteItem }: Props ) {
	const { id, name, status } = itemObject

	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [itemName, setItemName] = useState<string>(name)

	const itemElement = (
		<div className="border-2 p-4 mb-4 bg-white flex">
			<input type="checkbox" onClick={() => updateStatus(id)} checked={status === 'completed' ? true : false}
			className="w-8 mr-4 rounded-lg"/>

			<div className="w-full">				
				<p className="text-[26px] mb-2">{itemName}</p>
				<div className="flex gap-x-2">
				<div className="w-1/2">
						<button 
							className="w-full bg-slate-400 hover:bg-slate-500 active:bg-slate-600 text-gray-950 hover:text-gray-900 active:text-gray-800 transition-all rounded py-2 text-[18px]"
							onClick={() => {
								setIsEditing(true)
							}}>Edit</button>
					</div>
					<div className="w-1/2">
						<button 
							className="w-full bg-red-700 hover:bg-red-800 active:bg-red-900 text-slate-50 hover:text-slate-100 active:text-slate-200 transition-all rounded py-2 text-[18px]"
							onClick={() => deleteItem(id)}
						>Delete</button>
					</div>

				</div>
		</div>



		</div>
	)

  return (
		isEditing ? <EditItem itemName={itemName} setItemName={setItemName} setIsEditing={setIsEditing}/> : itemElement
	)
}