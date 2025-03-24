"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type FaqItem = {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: "What warranties do your fences come with?",
    answer: `No matter the style, every fence we install has a lifetime warranty ...`,
  },
  {
    question: "What type of cedar do you use installing fences ...?",
    answer: "We use premium-grade Western Red Cedar ...",
  },
  // ...other FAQ items
]

const FAQ: React.FC = () => {
  // openIndex can be number or null
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Ensure toggle param is number
  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-red-600 mb-10 text-center">
        FAQ&apos;S
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left font-medium text-lg text-gray-800 focus:outline-none"
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            {/* Animated answer */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 text-sm text-gray-700">{faq.answer}</div>
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
