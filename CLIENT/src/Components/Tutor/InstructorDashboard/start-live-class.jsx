"use client"

import { useState, useEffect, useRef } from "react"
import { VideoIcon, UsersIcon, MessageCircleIcon, SmileIcon, ThumbsUpIcon, HeartIcon, StarIcon } from 'lucide-react'

export default function StartLiveClass() {
  const [isLive, setIsLive] = useState(false)
  const [className, setClassName] = useState("")
  const [description, setDescription] = useState("")
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("")
  const [reactions, setReactions] = useState({ thumbsUp: 0, heart: 0, star: 0 })
  const chatRef = useRef(null)

  const handleStartClass = (e) => {
    e.preventDefault()
    if (className && description) {
      setIsLive(true)
    }
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'Tutor', text: newMessage }])
      setNewMessage("")
    }
  }

  const handleReaction = (type) => {
    setReactions(prev => ({ ...prev, [type]: prev[type] + 1 }))
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  return (
    <div className="h-screen w-full bg-gradient-to-r from-[#2C3E50] to-[#BDC3C7] text-white p-4">
      {!isLive ? (
        <div className="max-w-md mx-auto bg-[#34495E] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Start a Live Class</h2>
          <form onSubmit={handleStartClass} className="space-y-4">
            <div>
              <label htmlFor="className" className="block text-sm font-medium mb-1">
                Class Name
              </label>
              <input
                id="className"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BDC3C7] focus:border-[#BDC3C7]"
                placeholder="Enter class name"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">
                Class Description
              </label>
              <textarea
                id="description"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#BDC3C7] focus:border-[#BDC3C7]"
                placeholder="Enter class description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                rows="3"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#BDC3C7] text-[#2C3E50] py-2 px-4 rounded-md hover:bg-[#A6ACAF] focus:outline-none focus:ring-2 focus:ring-[#BDC3C7] focus:ring-offset-2 focus:ring-offset-[#34495E]"
            >
              Start Live Class
            </button>
          </form>
        </div>
      ) : (
        <div className="h-full flex flex-col">
          <div className="flex-1 flex">
            <div className="flex-1 bg-gray-800 rounded-lg mr-4 flex flex-col">
              <div className="aspect-video bg-gray-700 flex items-center justify-center rounded-t-lg">
                <VideoIcon className="h-20 w-20 text-gray-400" />
              </div>
              <div className="p-4 bg-[#34495E] rounded-b-lg">
                <h3 className="text-xl font-semibold">{className}</h3>
                <p className="text-sm text-gray-300">{description}</p>
              </div>
            </div>
            <div className="w-80 bg-[#34495E] rounded-lg flex flex-col">
              <div className="p-4 border-b border-gray-600">
                <h3 className="text-lg font-semibold flex items-center">
                  <MessageCircleIcon className="mr-2" /> Chat
                </h3>
              </div>
              <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-2">
                    <p className="font-semibold">{message.sender}</p>
                    <p>{message.text}</p>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-600">
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#BDC3C7] focus:border-[#BDC3C7]"
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                  />
                  <button 
                    type="submit"
                    className="bg-[#BDC3C7] text-[#2C3E50] px-4 rounded-r-md hover:bg-[#A6ACAF] focus:outline-none focus:ring-2 focus:ring-[#BDC3C7] focus:ring-offset-2 focus:ring-offset-[#34495E]"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="h-16 mt-4 bg-[#34495E] rounded-lg flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => handleReaction('thumbsUp')}
                className="flex items-center space-x-1 bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600"
              >
                <ThumbsUpIcon size={16} />
                <span>{reactions.thumbsUp}</span>
              </button>
              <button 
                onClick={() => handleReaction('heart')}
                className="flex items-center space-x-1 bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600"
              >
                <HeartIcon size={16} />
                <span>{reactions.heart}</span>
              </button>
              <button 
                onClick={() => handleReaction('star')}
                className="flex items-center space-x-1 bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-600"
              >
                <StarIcon size={16} />
                <span>{reactions.star}</span>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <UsersIcon className="h-5 w-5 text-gray-400" />
              <span className="text-sm text-gray-300">1 Participant</span>
            </div>
            <button 
              onClick={() => setIsLive(false)}
              className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#34495E]"
            >
              End Live Class
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

