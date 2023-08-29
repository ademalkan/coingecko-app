import Link from 'next/link'
import React from 'react'

interface AppHeaderPropsI {
  title:string
} 

const AppHeader = (props:AppHeaderPropsI):React.ReactNode => {
  const {title} = props
  return (
    <div className='bg-green-500 py-4'>
      <Link href={"/"}>
        <h1 className='text-white text-center font-bold text-2xl'>{title}</h1>
      </Link>
    </div>
  )
}

export default AppHeader