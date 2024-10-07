import React, { useState, useEffect } from 'react'
import { Bookmark, ThumbsUp, ThumbsDown, RefreshCw } from 'lucide-react'

interface TwitterBookmark {
  id: string
  text: string
  url: string
}

const Review: React.FC = () => {
  const [currentBookmark, setCurrentBookmark] = useState<TwitterBookmark | null>(null)
  const [bookmarks, setBookmarks] = useState<TwitterBookmark[]>([])

  useEffect(() => {
    // TODO: Implement actual Twitter API integration and spaced repetition algorithm
    const mockBookmarks: TwitterBookmark[] = [
      { id: '1', text: 'Interesting article about React', url: 'https://example.com/react-article' },
      { id: '2', text: 'New JavaScript features', url: 'https://example.com/js-features' },
      { id: '3', text: 'TypeScript best practices', url: 'https://example.com/ts-best-practices' },
    ]
    setBookmarks(mockBookmarks)
    setCurrentBookmark(mockBookmarks[0])
  }, [])

  const handleReview = (remembered: boolean) => {
    // TODO: Implement spaced repetition logic
    console.log(`User ${remembered ? 'remembered' : 'forgot'} bookmark: ${currentBookmark?.id}`)
    const nextBookmark = bookmarks[Math.floor(Math.random() * bookmarks.length)]
    setCurrentBookmark(nextBookmark)
  }

  if (!currentBookmark) {
    return <div>Loading...</div>
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Review Your Bookmarks</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-start space-x-3 mb-4">
          <Bookmark className="text-blue-600 flex-shrink-0" size={24} />
          <p className="text-xl font-semibold">{currentBookmark.text}</p>
        </div>
        <a
          href={currentBookmark.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline block mb-6"
        >
          View Tweet
        </a>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleReview(true)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition duration-300"
          >
            <ThumbsUp size={20} />
            <span>Remember</span>
          </button>
          <button
            onClick={() => handleReview(false)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-red-700 transition duration-300"
          >
            <ThumbsDown size={20} />
            <span>Forgot</span>
          </button>
        </div>
      </div>
      <button
        onClick={() => setCurrentBookmark(bookmarks[Math.floor(Math.random() * bookmarks.length)])}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition duration-300 mx-auto"
      >
        <RefreshCw size={20} />
        <span>Skip</span>
      </button>
    </div>
  )
}

export default Review