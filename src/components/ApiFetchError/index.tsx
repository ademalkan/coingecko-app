import Image from 'next/image'
import React from 'react'

const ApiFetchError = (): React.ReactNode => {
  return (
    <div className='w-full flex items-center justify-center flex-col h-full'>
      <Image src={"/images/coin-gecko.png"} width={150} height={150} alt='coingecko-app Api Fetch Error Image' />
      <h1>Api fetch error. Coingecko rate limit is full. 15-20 min after please try again</h1>
    </div>
  )
}

export default ApiFetchError