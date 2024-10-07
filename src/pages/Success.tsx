import React from 'react'
import { CheckCircle, MessageSquare, Bookmark } from 'lucide-react'

const Success: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <CheckCircle size={64} className="text-green-500 mx-auto" />
      </div>
      <h1 className="text-4xl font-bold mb-6">You're All Set!</h1>
      <p className="text-xl mb-8">
        Congratulations! Your Twitter account has been successfully connected to Spaced.
      </p>
      <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold mb-6">Next Steps:</h2>
        <ul className="text-left space-y-6">
          <li className="flex items-start">
            <MessageSquare size={24} className="text-blue-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Opt-in for Text Messages</h3>
              <p>You'll receive a text message shortly. Please opt-in to start receiving your weekly summaries.</p>
            </div>
          </li>
          <li className="flex items-start">
            <Bookmark size={24} className="text-blue-500 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Weekly Bookmark Summaries</h3>
              <p>Every week, you'll get a text summarizing tweets and threads you've bookmarked during the week.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Success