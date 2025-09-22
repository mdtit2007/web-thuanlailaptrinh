'use client'

import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChat}
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label="Mở chat bot"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-40 w-80 h-96 bg-card border border-border rounded-lg shadow-xl transition-all duration-200">
          <div className="flex flex-col h-full">
            {/* Chat Header */}
            <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
              <h3 className="font-semibold">Chat Bot Hỗ Trợ</h3>
              <p className="text-sm opacity-90">Chúng tôi có thể giúp gì cho bạn?</p>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-4 overflow-y-auto bg-background">
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">Xin chào! Tôi là trợ lý ảo của T-Team. Tôi có thể giúp bạn tìm hiểu về các khóa học và dịch vụ của chúng tôi.</p>
                </div>
                
                <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                  <p className="text-sm">Bạn có muốn biết thông tin về:</p>
                  <div className="mt-2 space-y-1">
                    <button className="block w-full text-left text-xs bg-primary/10 hover:bg-primary/20 p-2 rounded transition-colors">
                      📚 Các khóa học lập trình
                    </button>
                    <button className="block w-full text-left text-xs bg-primary/10 hover:bg-primary/20 p-2 rounded transition-colors">
                      💳 Gói thành viên
                    </button>
                    <button className="block w-full text-left text-xs bg-primary/10 hover:bg-primary/20 p-2 rounded transition-colors">
                      📞 Thông tin liên hệ
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Nhập tin nhắn..."
                  className="flex-1 px-3 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm">
                  Gửi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatBot