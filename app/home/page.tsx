'use client';

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { COLORS, FONTS } from '../constant';
import ChatBox from './ChatBox';

// ─── Global ───────────────────────────────────────────────────────────────────

const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(${FONTS.variable}), ${FONTS.fallback.join(', ')};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${COLORS.lightSage};
    background-image:
      linear-gradient(${COLORS.sageGreen}66 1px, transparent 1px),
      linear-gradient(90deg, ${COLORS.sageGreen}66 1px, transparent 1px);
    background-size: 50px 50px;
    color: #000;
  }
`;

// ─── Layout ───────────────────────────────────────────────────────────────────

const Stage = styled.main`
  min-height: calc(100vh - 44px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
`;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Stage>
        <ChatBox />
      </Stage>
    </>
  );
}
