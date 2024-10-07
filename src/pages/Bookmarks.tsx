import React, { useState, useEffect } from 'react'
import { Bookmark, ExternalLink } from 'lucide-react'

interface TwitterBookmark {
  id: string
  text: string
  url: string
}

const Bookmarks: React.FC = () => {
  const [bookmarks, setBookmarks] = useState<TwitterBookmark[]>([])

  useEffect(() => {
    // TODO: Implement actual Twitter API integration
    const mockBookmarks: TwitterBookmark[] = [
      { id: '1', text: 'Interesting article about React', url: 'https://example.com/react-article' },
      { id: '2', text: 'New JavaScript features', url: 'https://example.com/js-features' },
      { id: '3', text: 'TypeScript best practices', url: 'https://example.com/ts-best-practices' },
    ]
    setBookmarks(mockBookmarks)
  }, [])

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Your Twitter Bookmarks</h2>
      <ul className="space-y-4">
        {bookmarks.map((bookmark) => (
          <li key={bookmark.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-start space-x-3">
              <Bookmark className="text-blue-600 flex-shrink-0" size={24} />
              <div>
                <p className="text-lg font-semibold">{bookmark.text}</p>
                <a
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline flex items-center space-x-1 mt-2"
                >
                  <ExternalLink size={16} />
                  <span>View Tweet</span>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Bookmarks