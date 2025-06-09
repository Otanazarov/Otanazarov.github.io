"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">Otabek</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">
              Ko'nikmalar
            </a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
              Tajriba
            </a>
            <a href="#education" className="text-gray-600 hover:text-gray-900 transition-colors">
              Ta'lim
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Bog'lanish
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              CV Yuklab olish
            </Button>
            <Button>Bog'lanish</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a href="#skills" className="block text-gray-600 hover:text-gray-900 transition-colors">
              Ko'nikmalar
            </a>
            <a href="#experience" className="block text-gray-600 hover:text-gray-900 transition-colors">
              Tajriba
            </a>
            <a href="#education" className="block text-gray-600 hover:text-gray-900 transition-colors">
              Ta'lim
            </a>
            <a href="#contact" className="block text-gray-600 hover:text-gray-900 transition-colors">
              Bog'lanish
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                CV Yuklab olish
              </Button>
              <Button className="w-full">Bog'lanish</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
