import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="container mx-auto px-4 py-4">
        <ul className="flex items-center justify-between">
          <li>
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
              <BookOpen size={24} />
              <span>Spaced</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header