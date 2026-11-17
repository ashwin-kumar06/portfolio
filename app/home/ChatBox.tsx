'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWindowClose, FaRegWindowMaximize, FaWindowMinimize, FaPaperPlane } from 'react-icons/fa';
import { COLORS, FONTS } from '../constant';

// ─── Styled components ────────────────────────────────────────────────────────

const RetroWindow = styled(motion.div)`
  background: ${COLORS.lightSage};
  border: 4px solid #000;
  box-shadow: 12px 12px 0px #000;
  width: 90%;
  max-width: 620px;
  height: 70vh;
  display: flex;
  flex-direction: column;
`;

const WindowHeader = styled.div`
  background: ${COLORS.sageGreen};
  border-bottom: 4px solid #000;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-family: var(${FONTS.variable}), ${FONTS.fallback.join(', ')};
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.08em;
`;

const WindowIcons = styled.div`
  display: flex;
  gap: 0.5rem;

  svg {
    cursor: pointer;
    background: ${COLORS.lightSage};
    color: #000;
    border: 1px solid #000;
    padding: 2px;
    width: 18px;
    height: 18px;
  }
`;

const ChatArea = styled.div`
  flex: 1;
  background: #fff;
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 4px solid #000;

  &::-webkit-scrollbar { width: 12px; }
  &::-webkit-scrollbar-track { background: #fff; border-left: 2px solid #000; }
  &::-webkit-scrollbar-thumb { background: ${COLORS.goldenYellow}; border: 2px solid #000; }
`;

const EmptyState = styled.div`
  text-align: center;
  color: #999;
  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  margin-top: 2rem;
`;

const MessageBubble = styled.div<{ $isUser: boolean }>`
  max-width: 80%;
  padding: 1rem;
  font-family: 'VT323', monospace;
  font-size: 1.4rem;
  border: 3px solid #000;
  box-shadow: 4px 4px 0px #000;
  align-self: ${({ $isUser }) => ($isUser ? 'flex-end' : 'flex-start')};
  background: ${({ $isUser }) => ($isUser ? COLORS.goldenYellow : COLORS.lightSage)};
  color: #000;
`;

const InputArea = styled.form`
  display: flex;
  padding: 1rem;
  background: ${COLORS.lightSage};
  gap: 1rem;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 0.8rem;
  background: #fff;
  border: 3px solid #000;
  box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.2);
  font-family: 'VT323', monospace;
  font-size: 1.5rem;

  &:focus {
    outline: none;
    background: #fffae6;
  }
`;

const SendButton = styled.button`
  background: ${COLORS.burntOrange};
  color: #fff;
  border: 3px solid #000;
  box-shadow: 4px 4px 0px #000;
  padding: 0 1.5rem;
  font-family: var(${FONTS.variable}), ${FONTS.fallback.join(', ')};
  font-size: 0.8rem;
  font-weight: 900;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0px #000; }
  &:disabled { background: #999; cursor: not-allowed; box-shadow: none; transform: none; }
`;

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const callChatbotAPI = async (message: string): Promise<string> => {
    try {
      const response = await axios.post(
        'https://consci-v2.onrender.com/chat',
        { request: message },
        { timeout: 30000 }
      );
      return response.data.response;
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : 'Unknown error';
      console.error('Error calling chatbot API:', msg);
      return 'SYSTEM ERROR: CONNECTION REFUSED';
    }
  };

  const handleUserInput = useCallback(async (inputText: string) => {
    setMessages((prev) => [...prev, { text: inputText, sender: 'user' }]);
    setIsLoading(true);
    try {
      const response = await callChatbotAPI(inputText);
      setMessages((prev) => [...prev, { text: response, sender: 'bot' }]);
    } catch {
      setMessages((prev) => [...prev, { text: 'SYSTEM ERROR: CONNECTION REFUSED', sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      handleUserInput(newMessage.trim());
      setNewMessage('');
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <AnimatePresence>
      <RetroWindow
        initial={{ scale: 0.92, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      >
        <WindowHeader>
          <span>CHAT_ASSISTANT.EXE</span>
          <WindowIcons>
            <FaWindowMinimize />
            <FaRegWindowMaximize />
            <FaWindowClose />
          </WindowIcons>
        </WindowHeader>

        <ChatArea ref={chatContainerRef}>
          {messages.length === 0 && (
            <EmptyState>[System initialized. Talk to me...]</EmptyState>
          )}
          {messages.map((message, index) => (
            <MessageBubble key={index} $isUser={message.sender === 'user'}>
              {message.text}
            </MessageBubble>
          ))}
          {isLoading && (
            <MessageBubble $isUser={false}>PROCESSING...</MessageBubble>
          )}
        </ChatArea>

        <InputArea onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="Enter command..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <SendButton type="submit" disabled={!newMessage.trim() || isLoading}>
            SEND <FaPaperPlane />
          </SendButton>
        </InputArea>
      </RetroWindow>
    </AnimatePresence>
  );
}
