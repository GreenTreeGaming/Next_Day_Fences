import EachWarranty from '@/components/warranty/EachWarranty'
import ExplanationWarranty from '@/components/warranty/ExplanationWarranty'
import HeaderWarranty from '@/components/warranty/HeaderWarranty'
import React from 'react'

const page = () => {
  return (
    <main>
      <HeaderWarranty />
      <EachWarranty />
      <ExplanationWarranty />
    </main>
  )
}

export default page