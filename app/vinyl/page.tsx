import FAQ from '@/components/FAQ'
import VinylMain from '@/components/vinyl/VinylMain'
import VinylVideos from '@/components/vinyl/VinylVideos'
import React from 'react'

const page = () => {
  return (
    <main>
      <VinylMain />
      <VinylVideos />
      <FAQ />
    </main>
  )
}

export default page