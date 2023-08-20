'use client'
import { auth } from '../lib/firebase'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { doc } from 'firebase/firestore'
import { useDocument, useDocumentOnce } from 'react-firebase-hooks/firestore'
import { Select, Option } from '@material-tailwind/react'
import { Input } from '@material-tailwind/react'
import { db } from '@/lib/firebase'
import { useEffect, useState } from 'react'

const UserLogin = () => {
  const [user, loading, error] = useAuthState(auth)
  const [signInWithGoogle] = useSignInWithGoogle(auth)

  const [phoneNumber, setPhoneNumber] = useState('')

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value
    // Only allow numerical characters
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value)
    }
  }

  return (
    <div className="flex flex-col justify-start items-start w-full min-h-screen pt-24">
      <span className="text-2xl font-semibold text-left py-5">
        Welcome {user.displayName}
      </span>
      <div className="w-72 py-5">
        <Select label="College Name">
          <Option>Fr. Conceicao Rodrigues College of Engieering</Option>
          <Option>Other</Option>
        </Select>
      </div>
      <div className="w-72 py-5">
        <Select label="Select Year">
          <Option>FE</Option>
          <Option>SE</Option>
          <Option>TE</Option>
          <Option>BE</Option>
        </Select>
      </div>
      <div className="w-72 py-5">
        <Select label="Select Class">
          <Option>COMPS A</Option>
          <Option>COMPS B</Option>
          <Option>AIDS</Option>
          <Option>ECS</Option>
          <Option>MECHANICAL</Option>
          <Option>OTHER</Option>
        </Select>
      </div>
      <div className="w-72 py-5">
        <Input
          label="Phone no."
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <button className="rounded-full text-center bg-blue-500 text-white py-2 px-6 cursor-pointer text-xl font-bold transform transition-all hover:scale-110 shadow-lg hover:shadow-xl lg:text-left">
        Submit
      </button>
    </div>
  )
}

export default UserLogin
