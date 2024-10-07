import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Twitter } from 'lucide-react'

const TwitterAuth: React.FC = () => {
  const navigate = useNavigate()

  const handleAuthorize = () => {
    // TODO: Implement actual Twitter OAuth flow
    console.log('Initiating Twitter OAuth flow')
    // Simulating successful authorization
    setTimeout(() => {
      navigate('/success')
    }, 2000)
  }

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Authorize Spaced</h1>
      <p className="text-xl mb-8">
        To get started with Spaced, we need access to your Twitter bookmarks.
        Please authorize Spaced to access your Twitter account.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <Twitter size={64} className="text-blue-400" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Connect Your Twitter Account</h2>
        <p className="mb-6">
          Spaced will only access your bookmarks and won't post anything on your behalf.
        </p>
        <button
          onClick={handleAuthorize}
          className="bg-blue-400 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-blue-500 transition duration-300 mx-auto"
        >
          <Twitter size={24} />
          <span>Authorize with Twitter</span>
        </button>
      </div>
      <p className="mt-6 text-sm text-gray-600">
        By connecting your Twitter account, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  )
}

export default TwitterAuth