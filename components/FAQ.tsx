"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What warranties do your fences come with?',
    answer: `No matter the style, every fence we install has a lifetime warranty on the post installation. This covers any and all post movement, heaving, warping, cracking, and rotting. Everything your typical concreted-in post is guaranteed to do and more. We also have a 5 year craftsmanship warranty that covers gate adjustment, panel adjustments, and anything else that may arise.`,
  },
  {
    question: 'What type of cedar do you use installing fences in Minneapolis and the surrounding Metro?',
    answer: 'We use premium-grade Western Red Cedar sourced from local suppliers to ensure durability and long-lasting beauty.',
  },
  {
    question: 'How long can I expect my fence to last in Minneapolis and the surrounding Metro?',
    answer: 'Typically 15–25 years depending on the material and exposure to weather. Our posts are warrantied for life.',
  },
  {
    question: 'How will you be installing the posts for my fence?',
    answer: 'We use driven steel posts instead of concrete footings for superior strength, speed, and longevity.',
  },
  {
    question: 'How long does it take to install a fence - start to finish?',
    answer: 'Most installations are completed in 1–2 days once materials are ready and permits are cleared.',
  },
  {
    question: 'Will you be pulling the permit and calling gopher state 811?',
    answer: 'Yes, we handle all permitting and 811 markings as part of our full-service installation.',
  },
  {
    question: 'Do you offer financing?',
    answer: 'Yes! We partner with several providers to offer flexible financing options for your project.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-3xl font-bold text-red-600 mb-10 text-center">FAQ'S</h2>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-300 pb-4"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left font-medium text-lg text-gray-800 focus:outline-none"
            >
              {faq.question}
              <span className="text-xl">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            {/* Animated answer */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 text-sm text-gray-700">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ