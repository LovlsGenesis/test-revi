import { LogType } from '../../../types';

export default function Log({number, damage, attacker, defender}: LogType) {
  return (
    <div>
      Round {number}
      <p className="mx-5">
        {attacker.name} inflicts {damage} damage to {defender.name}
      </p>
    </div>
  )
}
