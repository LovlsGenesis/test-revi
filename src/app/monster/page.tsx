'use client'

import {useState, FormEvent} from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import Input from '../components/input';
import Button from '../components/button';
import { MonsterType } from '../../types'

export default function Monster() {
  const [formData, setFormData] = useState<MonsterType>(JSON.parse(localStorage.getItem('monster')))
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    localStorage.setItem('monster', JSON.stringify(formData))
    router.push('/game')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <h1 className='text-center mb-10'>Create your monster</h1>
      <div className="flex bg-[#B6B8D6] p-20">
        <div className='flex'>
          <Image
            src={formData?.image ? formData.image : "/placeholder_user.png"}
            className="flex justify-center p-10 object-cover"
            width={300}
            height={300}
            alt=""
          />
        </div>
        <div className='ml-20'>
          <form onSubmit={handleSubmit}>  {/*  onSubmit={handleSubmit}>action={handleSubmit} */}
            <Input type="text" name='Name' value={formData?.name} onChangeFunction={handleChange} required={true}/>
            <Input type="number" name='HP' value={formData?.hp} onChangeFunction={handleChange} required={true} />
            <Input type="number" name='Attack' value={formData?.attack} onChangeFunction={handleChange} required={true} />
            <Input type="number" name='Defense' value={formData?.defense} onChangeFunction={handleChange} required={true} />
            <Input type="number" name='Speed' value={formData?.speed} onChangeFunction={handleChange} required={true} />
            <Input type="text" name='Image' value={formData?.image} onChangeFunction={handleChange} />
            <div className="flex justify-center mt-5">
              <Button text='Fight' buttonType='submit' onClickFunction={()=> {}} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
