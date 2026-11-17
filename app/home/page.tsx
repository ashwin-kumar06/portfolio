'use client';

import React from 'react';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { COLORS, FONTS, SITE } from '../constant';
import ChatBot from './ChatBot';

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

const Desktop = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  min-height: calc(100vh - 44px);
`;

const HeroWindow = styled.div`
  background: #fff;
  border: 4px solid #000;
  box-shadow: 12px 12px 0 rgba(0,0,0,0.8);
  width: 100%;
  max-width: 560px;
`;

const WindowBar = styled.div`
  background: ${COLORS.burntOrange};
  border-bottom: 4px solid #000;
  padding: 0.4rem 1rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

const WindowBody = styled.div`
  background: ${COLORS.lightSage};
  padding: 2rem 2.5rem;
  border-top: 2px solid #fff;
`;

const Headline = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
`;

const Tagline = styled.p`
  font-size: 1rem;
  color: ${COLORS.burntOrange};
  font-weight: 700;
  margin: 0 0 1.5rem;
`;

const ActionRow = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const Btn = styled(Link)<{ $primary?: boolean }>`
  background: ${({ $primary }) => ($primary ? COLORS.burntOrange : '#fff')};
  color: ${({ $primary }) => ($primary ? '#fff' : '#000')};
  border: 3px solid #000;
  box-shadow: 4px 4px 0 #000;
  padding: 0.5rem 1.25rem;
  font-weight: 700;
  font-size: 0.85rem;
  text-decoration: none;
  font-family: var(${FONTS.variable}), ${FONTS.fallback.join(', ')};
  &:active { box-shadow: 1px 1px 0 #000; transform: translate(3px, 3px); }
`;

export default function HomePage() {
  return (
    <>
      <GlobalStyle />
      <Desktop>
        <HeroWindow>
          <WindowBar>WELCOME.EXE — {SITE.name}</WindowBar>
          <WindowBody>
            <Headline>{SITE.name}</Headline>
            <Tagline>{SITE.tagline}</Tagline>
            <ActionRow>
              <Btn href="/projects" $primary>View Projects</Btn>
              <Btn href="/contact">Get in Touch</Btn>
            </ActionRow>
          </WindowBody>
        </HeroWindow>
      </Desktop>

      <ChatBot />
    </>
  );
}
