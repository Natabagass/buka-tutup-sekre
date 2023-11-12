import LeftSide from '@/components/room/leftSide'
import LineFour from '@/components/room/rightSide/lineFour'
import LineOne from '@/components/room/rightSide/lineOne'
import LineThree from '@/components/room/rightSide/lineThree'
import LineTwo from '@/components/room/rightSide/lineTwo'
import Image from 'next/image'
import { BsFillPeopleFill } from 'react-icons/bs'

export default function Home() {
  return (
    <div className='px-16 mt-36 mb-16 mx-auto max-w-screen-2xl'>
      <div className='border-4 border-[#0B122A] rounded-xl'>
        <div className='flex flex-row w-full h-[550px] justify-between gap-24'>
          <LeftSide />

          <div className='flex flex-col h-full justify-between'>
            <div className='w-full flex gap-10 h-full justify-between flex-col'>

              {/* LINE 1 RIGHT */}
              <LineOne />

              {/* LINE 2 RIGHT */}
              <LineTwo />

            </div>

            <div className='w-full flex gap-10 flex-col'>

              {/* LINE 3 RIGHT */}
              <LineThree />

              {/* LINE 4 RIGHT */}
              <LineFour />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
