type Props = {
  children: React.ReactNode,
}

export default function Header( { children }: Props ) {


  return (
    <div className="font-roboto flex flex-col items-center">
			<div className="border-2 border-gray-800 w-[800px] bg-slate-100 flex flex-col items-center ">
				<h1 className="text-[32px]">TODO</h1>
				{/* tags */}
				<div className="flex justify-around px-6 gap-x-4 w-full mb-6">
					<div className="w-1/3">
						<button className="border-[1px] py-3 border-gray-400 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 w-full text-[20px] transition-all">All</button>
					</div>
					<div className="w-1/3">
						<button className="border-[1px] py-3 border-gray-400 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 w-full text-[20px] transition-all">Ongoing</button>
					</div>
					<div className="w-1/3">
						<button className="border-[1px] py-3 border-gray-400 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 w-full text-[20px] transition-all">Completed</button>
					</div>
				</div>




        {/* item */}
        {children}

      </div>




    </div>
  )
}