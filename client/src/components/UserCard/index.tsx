import { User } from '@/state/api'
import Image from 'next/image'
import React from 'react'

type Props = {
    user:User
}

const UserCard = ({user}: Props) => {
  return (
    <div className='flex mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white'>
        {user.profilePictureUrl && (
            <Image
            src={'/p1.jpeg'}
            alt="Profile Picture"
            width={32}
            height={32}
            className='rounded-full'/>
        )}
        <div>
            <h3>{user.username}</h3>

            <p>{user.email}</p>
        </div>
    </div>
  )
}

export default UserCard