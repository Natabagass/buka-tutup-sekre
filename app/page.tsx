'use client'

import LeftSide from '@/components/room/leftSide'
import LineFour from '@/components/room/rightSide/lineFour'
import LineOne from '@/components/room/rightSide/lineOne'
import LineThree from '@/components/room/rightSide/lineThree'
import LineTwo from '@/components/room/rightSide/lineTwo'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function Home() {
  const [open, setOpen] = useState<boolean>(false)
  const [room, setRoom] = useState('')
  const [data, setData] = useState<any>()
  const [call, setCall] = useState<boolean>(false)

  const getDatas = async () => {
    await axios.post('/api/publish', {
      type: open == false ? 'LOCK' : 'UNLOCK',
      room: `bts/${room}`
    })
    .then(response => {
      console.log(response.data)
      if (response.data.code == 200) {
        setData(response.data)
        Swal.fire({
          title: 'Berhasil',
          text: `Berhasil ${response.data.data.type === 'LOCK' ? 'menutup' : 'membuka'} pintu`,
          icon: 'success',
          confirmButtonText: 'Tutup'
        })
      }
    })
    .catch(error => {
      return error
    });
  }

  useEffect(() => {
    if (call == true) {
      getDatas()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room, open, call])
  

  return (
    <div className='px-16 mt-36 flex items-center w-full justify-center min-h-screen max-w-screen-2xl h-full'>
      <div className='border-4 border-[#0B122A] rounded-xl'>
        <div className='flex flex-row w-full h-[550px] justify-between gap-24'>
          <LeftSide />

          <div className='flex flex-col h-full justify-between'>
            <div className='w-full flex gap-10 h-full justify-between flex-col'>

              {/* LINE 1 RIGHT */}
              <LineOne open={open} call={call} setCall={setCall} setOpen={setOpen} setRoom={setRoom} />

              {/* LINE 2 RIGHT */}
              <LineTwo />

            </div>

            <div className='w-full flex h-full gap-10 flex-col'>

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