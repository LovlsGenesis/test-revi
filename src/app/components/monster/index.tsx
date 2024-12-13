import Image from 'next/image';
import { MonsterStatusType } from '../../../types';

export default function Monster({current_hp, monster}: MonsterStatusType) {
  return (
    <div className="flex justify-center items-center">
      <div className="user_monster bg-[#B6B8D6] px-12 py-5 text-center justify-center items-center rounded-lg">
        <p className='pb-2'>
          {monster.name}
        </p>

        <Image
          src={monster.image ? monster.image : "/placeholder_user.png"}
          className="flex justify-center"
          width={300}
          height={300}
          alt=""
        />

        <div className='pt-2'>
          {current_hp && <>{current_hp} / {monster.hp}</>}
        </div>
      </div>
    </div>

  )
}
