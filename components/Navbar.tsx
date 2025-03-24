"use client"

import React, { useState, useRef } from "react"
import { Phone, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const contactTimerRef = useRef(null)
  const servicesTimerRef = useRef(null)

  // Contact Handlers
  const handleContactMouseEnter = () => {
    if (contactTimerRef.current) clearTimeout(contactTimerRef.current)
    setIsContactOpen(true)
  }

  const handleContactMouseLeave = () => {
    contactTimerRef.current = setTimeout(() => {
      setIsContactOpen(false)
    }, 200)
  }

  // Services Handlers
  const handleServicesMouseEnter = () => {
    if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current)
    setIsServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    servicesTimerRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 200)
  }

  return (
    <nav className="bg-white shadow-md border-t-4 border-red-600 px-4 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-gray-800">NEXT DAY</span>
          <span className="text-sm text-red-600 font-semibold">FENCES</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <a href="/">Home</a>
          <a
            href="https://qualify.mysalesman.com/start?613CA592"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instant Quote
          </a>
          <a href="/steel-posts">Steel Posts</a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button className="inline-flex items-center whitespace-nowrap hover:text-red-600 transition">
              Services
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 top-full bg-white shadow-md rounded mt-1 px-4 py-2 text-sm text-gray-700 z-10">
                <a href="/wood" className="block hover:text-red-600 transition">Wood</a>
                <a href="/ornamental" className="block hover:text-red-600 transition">Ornamental</a>
                <a href="/vinyl" className="block hover:text-red-600 transition">Vinyl</a>
                <a href="/areas-we-service" className="block hover:text-red-600 transition">Areas We Service</a>
                <a href="/decks" className="block hover:text-red-600 transition">Decks</a>
              </div>
            )}
          </div>

          {/* Contact Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleContactMouseEnter}
            onMouseLeave={handleContactMouseLeave}
          >
            <button className="inline-flex items-center whitespace-nowrap hover:text-red-600 transition">
              Contact
            </button>
            {isContactOpen && (
              <div className="absolute left-0 top-full bg-white shadow-md rounded mt-1 px-4 py-2 text-sm text-gray-700 z-10">
                <a href="/contact-us" className="block hover:text-red-600 transition">Contact Us</a>
                <a href="/warranty" className="block hover:text-red-600 transition">Warranty</a>
              </div>
            )}
          </div>

          <a href="/ourteam">Our Team</a>
          <a href="/gallery">Gallery</a>
        </div>

        {/* Phone Section */}
        <div className="hidden md:flex items-center space-x-1 text-red-600 font-semibold">
          <Phone className="w-4 h-4" />
          <span>Call Us! 612-868-4879</span>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-sm font-medium text-gray-700">
          <a href="/" className="block">Home</a>
          <a href="https://qualify.mysalesman.com/start?613CA592" target="_blank" rel="noopener noreferrer" className="block">Instant Quote</a>
          <a href="/steel-posts" className="block">Steel Posts</a>

          {/* Services Dropdown (Mobile) */}
          <div>
            <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="block w-full text-left whitespace-nowrap"
            >
              Services
            </button>
            {isServicesOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <a href="/wood" className="block">Wood</a>
                <a href="/ornamental" className="block">Ornamental</a>
                <a href="/vinyl" className="block">Vinyl</a>
                <a href="/areas-we-service" className="block">Areas We Service</a>
                <a href="/decks" className="block">Decks</a>
              </div>
            )}
          </div>

          {/* Contact Dropdown (Mobile) */}
          <div>
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="block w-full text-left whitespace-nowrap"
            >
              Contact
            </button>
            {isContactOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <a href="/contact-us" className="block">Contact Us</a>
                <a href="/warranty" className="block">Warranty</a>
              </div>
            )}
          </div>

          <a href="/ourteam" className="block">Our Team</a>
          <a href="/gallery" className="block">Gallery</a>

          {/* Mobile phone */}
          <div className="flex items-center space-x-1 text-red-600 font-semibold pt-2 border-t">
            <Phone className="w-4 h-4" />
            <span>Call Us! 612-868-4879</span>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
