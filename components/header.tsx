"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ModeToggle } from "@/components/toggle-theme"
import Logo from "@/components/logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="font-medium hover:text-[#7665f3] dark:text-gray-200 dark:hover:text-[#8a7bf5] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/over-ons"
              className="font-medium hover:text-[#7665f3] dark:text-gray-200 dark:hover:text-[#8a7bf5] transition-colors"
            >
              Over Ons
            </Link>
            <Link
              href="/diensten"
              className="font-medium hover:text-[#7665f3] dark:text-gray-200 dark:hover:text-[#8a7bf5] transition-colors"
            >
              Diensten
            </Link>
            <Link
              href="/casus"
              className="font-medium hover:text-[#7665f3] dark:text-gray-200 dark:hover:text-[#8a7bf5] transition-colors"
            >
              Casus
            </Link>
            <Link href="/contact">
              <Button className="bg-[#7665f3] hover:bg-[#6555e3] text-white">Contact</Button>
            </Link>
            <ModeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Sluit menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium py-2 hover:text-[#7665f3] dark:text-gray-200 dark:hover:text-[#8a7bf5] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/over-ons"
                className="font-medium py-2 hover:text-[#7665f3] dark:text-gray-200 dark:hover:text-[#8a7bf5] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Over Ons
              </Link>
              <Link
                href="/diensten"
                className="font-medium py-2 hover:text-[#7665f3] dark:text-gray-200 dark:hover:text-[#8a7bf5] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Diensten
              </Link>
              <Link
                href="/casus"
                className="font-medium py-2 hover:text-[#7665f3] dark:text-gray-200 dark:hover:text-[#8a7bf5] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Casus
              </Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-[#7665f3] hover:bg-[#6555e3] text-white">Contact</Button>
              </Link>
              <div className="flex justify-center mt-2">
                <ModeToggle />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

