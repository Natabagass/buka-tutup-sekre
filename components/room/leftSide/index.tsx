import { BsFillPeopleFill } from "react-icons/bs";

const LeftSide = () => {
    return (
        <>
            <div className='flex flex-col h-full justify-between'>
                <div className='p-3 border-r-2 border-b-2 max-w-[200px] border-[#0B122A] rounded-br-lg'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-bold'>BEM</h1>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <BsFillPeopleFill className="text-[#9AA3B2] text-3xl" />
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer items-center" />
                                <div className="w-11 h-6 bg-n100 peer-focus:outline-none peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-n400 after:border-n200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:peer-checked:bg-white peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='p-3 border-r-2 border-t-2 rounded-tr-lg min-w-[200px] border-[#0B122A]'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-bold'>DPM</h1>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <BsFillPeopleFill className="text-[#9AA3B2] text-3xl" />
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer items-center" />
                                <div className="w-11 h-6 bg-n100 peer-focus:outline-none peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-n400 after:border-n200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:peer-checked:bg-white peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeftSide;