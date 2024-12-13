'use client'

import { useRouter } from 'next/navigation'
import Button from '../components/button';
import Monster from '../components/monster';
import { MonsterStatusType } from '../../types'

export default function Result() {
  const router = useRouter()

  const winner: MonsterStatusType = JSON.parse(localStorage.getItem('winner'))

  const restartGame = () => {
    router.push('/monster')
  }
  return (
    <div>
      <h1 className='text-center mb-10'>And the winner is ...</h1>
      <Monster current_hp={winner.current_hp} monster={winner.monster} />
      <div className="flex justify-center mt-5">
        <Button text='Play again' onClickFunction={() => restartGame()} />
      </div>
    </div>
  )
}
