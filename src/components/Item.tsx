import { useState } from "react"
import EditItem from "./EditItem"

type Props = {
	name: string,

}

export default function Item( { name }: Props ) {

	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [itemName, setItemName] = useState<string>(name)

	const itemElement = (
		<div className="w-[600px] border-2 p-4 mb-4 bg-white">
		<p className="text-[26px] mb-2">{itemName}</p>
			<div className="flex gap-x-2">
				<div className="w-1/3">
					<button 
						className="w-full bg-slate-400 hover:bg-slate-500 active:bg-slate-600 text-gray-950 hover:text-gray-900 active:text-gray-800 transition-all rounded py-2 text-[18px]"
						onClick={() => {
							setIsEditing(true)
						}}>Edit</button>
				</div>
				<div className="w-1/3">
					<button 
						className="w-full bg-red-700 hover:bg-red-800 active:bg-red-900 text-slate-50 hover:text-slate-100 active:text-slate-200 transition-all rounded py-2 text-[18px]"
					>Delete</button>
				</div>
				<div className="w-1/3">
					<button className="w-full bg-green-700 hover:bg-green-800 active:bg-green-900 text-slate-50 hover:text-slate-100 active:text-slate-200 transition-all rounded py-2 text-[18px]">Mark Complete</button>
				</div>
			</div>
		</div>
	)

  return (
		isEditing ? <EditItem itemName={itemName} setItemName={setItemName} setIsEditing={setIsEditing}/> : itemElement
	)
}