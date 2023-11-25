import { SetStateAction } from "react";
import { BsFillPeopleFill } from "react-icons/bs";
interface Props {
    setRoom: React.Dispatch<SetStateAction<string>>,
    setOpen: React.Dispatch<SetStateAction<boolean>>,
    setCall: React.Dispatch<SetStateAction<boolean>>,
    open: boolean,
    call: boolean
}

const LineOne = ({ setRoom, setOpen, open, call, setCall }: Props) => {
    return (
        <>
            <div className='flex flex-row w-full border-[#0B122A] border-2 border-t-0 border-r-0 rounded-bl-lg'>
                <div className='p-3 min-w-[200px] border-[#0B122A]'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-bold'>Proker</h1>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <BsFillPeopleFill className="text-[#9AA3B2] text-3xl" />
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer items-center" />
                                <div className="w-11 h-6 bg-n100 peer-focus:outline-none peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-n400 after:border-n200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:peer-checked:bg-white peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='p-3 border-l-2 min-w-[200px] border-[#0B122A]'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-bold'>GDSC</h1>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <BsFillPeopleFill className="text-[#9AA3B2] text-3xl" />
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input 
                                    onClick={() => {
                                        setCall(true)
                                        setOpen(!open)
                                        setRoom('gdsc')
                                    }} 
                                    type="checkbox" 
                                    value="" 
                                    className="sr-only peer items-center" />
                                <div className="w-11 h-6 bg-n100 peer-focus:outline-none peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-n400 after:border-n200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:peer-checked:bg-white peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='p-3 border-l-2 min-w-[200px] border-[#0B122A]'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-bold'>KBMDSI</h1>
                        <div className='flex flex-row w-full justify-between items-center'>
                            <BsFillPeopleFill className="text-[#9AA3B2] text-3xl" />
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer items-center" />
                                <div className="w-11 h-6 bg-n100 peer-focus:outline-none peer-focus:ring-blue-300 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-n400 after:border-n200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all after:peer-checked:bg-white peer-checked:bg-green-400"></div>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='p-3 border-l-2 min-w-[200px] border-[#0B122A]'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-bold'>KBMDSI</h1>
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

export default LineOne;