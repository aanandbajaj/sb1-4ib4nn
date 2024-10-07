import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Send } from 'lucide-react'

const Landing: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement phone number validation and API call to save the number
    console.log('Phone number submitted:', phoneNumber)
    navigate('/auth/twitter')
  }

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6">Welcome to Spaced</h1>
      <p className="text-xl mb-8">
        Spaced helps you review your Twitter bookmarks through spaced repetition.
        Get weekly curated lists of your bookmarks sent directly to your phone!
      </p>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <BookOpen size={64} className="text-blue-600" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-left text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          >
            <Send size={20} className="mr-2" />
            Get Started
          </button>
        </form>
      </div>
      <p className="mt-6 text-sm text-gray-600">
        By signing up, you agree to receive weekly text messages with your curated bookmarks.
        Message and data rates may apply. You can opt-out at any time.
      </p>
    </div>
  )
}

export default Landing