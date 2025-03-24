import FenceTypes from '@/components/steel-posts/FenceTypes'
import Question from '@/components/steel-posts/Question'
import TopSteelPosts from '@/components/steel-posts/TopSteelPosts'
import VideosSteelPosts from '@/components/steel-posts/VideosSteelPosts'
import React from 'react'

const page = () => {
  return (
    <main>
      <TopSteelPosts />
      <VideosSteelPosts />
      <Question />
      <FenceTypes />
    </main>
  )
}

export default page