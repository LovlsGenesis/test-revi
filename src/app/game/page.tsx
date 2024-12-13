'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MonsterType, MonsterStatusType, RoundType } from '../../types'
import Monster from '../components/monster'
import Log from "../components/log";
import Button from "../components/button";

export default function Game() {
  const router = useRouter()
  const [rounds, setRounds] = useState<RoundType[]>([])
  const [userMonsterStatus] = useState(buildMonsterStatus(JSON.parse(localStorage.getItem('monster'))))
  const [opponentMonsterStatus] = useState(buildMonsterStatus(buildOpponentMonster()))

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function buildOpponentMonster(): MonsterType {
    return {
      name: 'Enemy',
      hp: randomInteger(10000, 30000),
      attack: randomInteger(100, 500),
      defense: randomInteger(100, 500),
      speed: randomInteger(100, 250),
      image: '/placeholder.png'
    }
  }

  function buildMonsterStatus(monster: MonsterType): MonsterStatusType {
    return {
      current_hp: monster.hp,
      monster: monster
    }
  }

  function stopGame() {
    router.push('/result')
  }

  const turnOrder = (): MonsterStatusType => {
    let firstTurnMonster
    const { monster: opponentMonster } = opponentMonsterStatus
    const { monster: userMonster } = userMonsterStatus
    if (opponentMonster.speed != userMonster.speed) {
      firstTurnMonster = opponentMonster.speed > userMonster.speed ? opponentMonsterStatus : userMonsterStatus;
    } else {
      if (opponentMonster.attack != userMonster.attack) {
        firstTurnMonster = opponentMonster.attack > userMonster.attack ? opponentMonsterStatus : userMonsterStatus;
      } else {
        firstTurnMonster = Math.random() < 0.5 ? opponentMonsterStatus : userMonsterStatus;
      }
    }
    return firstTurnMonster
  }

  function calculateNextBattle() {
    const previousRound = rounds[0]

    const attacker = !previousRound ? turnOrder() : previousRound.defender
    const defender = !previousRound ? (attacker.monster === userMonsterStatus.monster ? opponentMonsterStatus : userMonsterStatus) : previousRound.attacker

    let damage = attacker.monster.attack - defender.monster.defense

    if (damage <= 0) {
      damage = 1
    }

    defender.current_hp = defender.current_hp - damage

    const newRound: RoundType = {
      number: !previousRound ? 1 : previousRound.number + 1,
      damage: damage,
      attacker: attacker,
      defender: defender
    }

    setRounds([newRound, ...rounds])

    if (defender.current_hp <= 0) {
      defender.current_hp = 0
      localStorage.setItem('winner', JSON.stringify(attacker))
      stopGame()
    }
  }

  return (
    <div className="w-9/12">
      <div className="title flex justify-center items-center h-[10vh]">
      <h1>Time to Fight</h1>
      </div>
      <div className="fight flex justify-between">
        <Monster
          monster={userMonsterStatus.monster}
          current_hp={userMonsterStatus.current_hp}
        />
        <div className="resume rounded w-full px-5 bg-[#BDEDE0]">
          <div className="h-[200px] pt-2 overflow-y-auto">
            <p>Fight Resume:</p>
            <p className="mx-10">{`${turnOrder().monster.name} plays first`}</p>
            <div className="rounds w-9/12 mx-16">
              {rounds && rounds.map((round) => (
                <Log
                number={round.number}
                damage={round.damage}
                attacker={round.attacker.monster}
                defender={round.defender.monster}
                key={round.number}
                />
                ))}
            </div>
          </div>
          <div className="flex justify-end">
            <Button text='Next Round' type="secondary" onClickFunction={() => calculateNextBattle()} />

          </div>
        </div>
        <Monster
          monster={opponentMonsterStatus.monster}
          current_hp={opponentMonsterStatus.current_hp}
        />
      </div>
    </div>
  )
}
