'use client'

import LeftSide from '@/components/room/leftSide'
import LineFour from '@/components/room/rightSide/lineFour'
import LineOne from '@/components/room/rightSide/lineOne'
import LineThree from '@/components/room/rightSide/lineThree'
import LineTwo from '@/components/room/rightSide/lineTwo'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { BsFillPeopleFill } from 'react-icons/bs'

export default function Home() {
  const [open, setOpen] = useState<boolean>(false)
  const [room, setRoom] = useState('gdsc')
  const [data, setData] = useState<any>()

  const getDatas = async () => {
    await axios.post('/api/publish', {
      type: open == false ? 'LOCK' : 'UNLOCK',
      room: `bts/${room}`
    })
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
      return error
    });
  }

  useEffect(() => {
    getDatas()
  }, [room, open])
  

  return (
    <div className='px-16 mt-36 mb-16 mx-auto max-w-screen-2xl'>
      <div className='border-4 border-[#0B122A] rounded-xl'>
        <div className='flex flex-row w-full h-[550px] justify-between gap-24'>
          <LeftSide />

          <div className='flex flex-col h-full justify-between'>
            <div className='w-full flex gap-10 h-full justify-between flex-col'>

              {/* LINE 1 RIGHT */}
              <LineOne open={open} setOpen={setOpen} setRoom={setRoom} />

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