import FAQ from '@/components/FAQ'
import AluminumMain from '@/components/ornamental/AluminumMain'
import OrnamentalMain from '@/components/ornamental/OrnamentalMain'
import OrnamentalVideo from '@/components/ornamental/OrnamentalVideo'
import React from 'react'

const page = () => {
  return (
    <main>
      <OrnamentalMain />
      <OrnamentalVideo />
      <FAQ />
      <AluminumMain />
    </main>
  )
}

export default page