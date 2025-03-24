import ChoiceDeck from '@/components/decks/ChoiceDeck'
import MainDecks from '@/components/decks/MainDecks'
import React from 'react'

const page = () => {
  return (
    <main>
      <MainDecks />
      <ChoiceDeck />
    </main>
  )
}

export default page