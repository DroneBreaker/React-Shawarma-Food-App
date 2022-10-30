import MenuLayout from "../layouts/MenuLayout"

function MenuContent() {
    return (
        <div>
            <h1 className="p-4 text-center font-semibold text-2xl"> Our Menu</h1>
            <div className="grid grid-cols-2">
                <div className="bg-blue-200 h-52">
                    <h1 className="md:mx-48 mx-[6rem] my-4 text-xl font-semibold">
                        Main Course
                    </h1>

                    <div className="md:mx-16 mx-8 bg-white rounded-md">
                        <div className='flex mx-4 justify-between'>
                            <div>
                                <h1>Original Ghanaian Indomie</h1>
                                <p className="text-sm text-gray-400">Vegatables, eggs, sardine, sausages</p>
                            </div>

                            <h2>GH25</h2>
                        </div>

                        <div className='flex mx-4 justify-between my-4'>
                            <div>
                                <h1>Royal Indomie</h1>
                                <p className="text-sm text-gray-400">Vegatables, cornbeef, gizzard, eggs, sardine, sausages</p>
                            </div>

                            <h2>GH35</h2>
                        </div>

                        <div className='flex mx-4 justify-between my-4'>
                            <div>
                                <h1>Extras</h1>
                                <p className="text-sm text-gray-400">Chicken, fried eggs, sausages</p>
                            </div>

                            <h2>GH25</h2>
                        </div>

                        <h1 className="md:mx-32 mx-8 my-8 text-xl font-semibold">
                            Shawarma 
                        </h1>

                        
                    </div>
                </div>

                <div></div>
            </div>
            
        </div>
    )
}


export default function Menu() {
  return (
    <MenuLayout><MenuContent/></MenuLayout>
  )
}
