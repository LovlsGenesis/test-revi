'use client'

import { useRouter } from 'next/navigation'
import Button from './components/button';

export default function Home() {
  const router = useRouter();

  const startGame = () => {
    router.push('/monster')
  }

  return (
    <div className="text-center">
      <div className="rules m-5">
        <h1 className="title">Rules</h1>
        <p>
          The rule is simple, defeat all of your enemy’s monsters. <br />
          To do so, you can either create monsters or randomly generate monsters.
        </p>
      </div>
      <Button text='Start' onClickFunction={() => startGame()}/>
    </div>
  );
}
