import { Dispatch, SetStateAction, useState } from "react"

type Props = {
  itemName: string,
  setItemName: Dispatch<SetStateAction<string>>,
  setIsEditing: Dispatch<SetStateAction<boolean>>,
}

export default function EditItem( { itemName, setItemName, setIsEditing }: Props) {

  const [tempItemName, setTempItemName] = useState<string>(itemName)
  const [showWarning, setShowWarning] = useState(false)

  return (
    <div>
      <div className="border-2 p-4 mb-4 bg-white">
      <input 
        className="text-[26px] mb-2 w-full outline outline-1 outline-slate-500 focus:outline-black focus:outline-2"
        value={tempItemName}
        onChange={(e) => {
          setTempItemName(e.target.value)
        }}
      />
        <div className="flex gap-x-2">
          <div className="w-1/2">
            <button 
              className="w-full bg-slate-400 hover:bg-slate-500 active:bg-slate-600 text-gray-950 hover:text-gray-900 active:text-gray-800 transition-all rounded py-2 text-[18px]"
              onClick={() => {
                setIsEditing(false)
              }}
            >Cancel</button>
          </div>
          <div className="w-1/2">
            <button 
              className="w-full bg-black hover:bg-gray-950 active:bg-gray-900 text-white transition-all rounded py-2 text-[18px]"
              onClick={() => {
                if (tempItemName.trim().length > 0) {
                  setItemName(tempItemName)
                  setIsEditing(false)
                  setShowWarning(false)
                } else {
                  setShowWarning(true)
                }
              }}
            >Save</button>
          </div>
        </div>
        {showWarning ? <span className="text-red-500">This field cannot be empty.</span> : null}
      </div>
    </div>
  )
}