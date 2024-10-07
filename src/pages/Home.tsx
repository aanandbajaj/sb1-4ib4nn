import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Repeat } from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Your Spaced Dashboard</h1>
      <p className="text-xl mb-8">
        Start reviewing your Twitter bookmarks or check your curated list.
      </p>
      <div className="flex justify-center space-x-4">
        <Link
          to="/bookmarks"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition duration-300"
        >
          <BookOpen size={24} />
          <span>View Bookmarks</span>
        </Link>
        <Link
          to="/review"
          className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition duration-300"
        >
          <Repeat size={24} />
          <span>Start Review</span>
        </Link>
      </div>
    </div>
  )
}

export default Home