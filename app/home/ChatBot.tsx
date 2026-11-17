'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS, FONTS, SITE } from '../constant';

const Bubble = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${COLORS.burntOrange};
  color: #fff;
  font-size: 1.5rem;
  border: 3px solid #000;
  box-shadow: 4px 4px 0 #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(${FONTS.variable}), ${FONTS.fallback.join(', ')};
  &:active { box-shadow: 1px 1px 0 #000; transform: translate(3px, 3px); }
  z-index: 100;
`;

const Panel = styled.div<{ $open: boolean }>`
  position: fixed;
  bottom: 5rem;
  right: 1.5rem;
  width: 300px;
  background: #fff;
  border: 4px solid #000;
  box-shadow: 8px 8px 0 rgba(0,0,0,0.8);
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 100;
`;

const PanelHeader = styled.div`
  background: ${COLORS.sageGreen};
  border-bottom: 4px solid #000;
  padding: 0.4rem 1rem;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: var(${FONTS.variable}), ${FONTS.fallback.join(', ')};
`;

const PanelBody = styled.div`
  background: ${COLORS.lightSage};
  padding: 1rem;
  font-size: 0.85rem;
  font-family: var(${FONTS.variable}), ${FONTS.fallback.join(', ')};
  color: #000;
  min-height: 80px;
`;

export default function ChatBot() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Panel $open={open}>
        <PanelHeader>CHATBOT.EXE — {SITE.name}</PanelHeader>
        <PanelBody>
          👋 Hi! I&apos;m Ashwin&apos;s assistant. Ask me anything about his work, projects, or how to get in touch at <strong>{SITE.email}</strong>.
        </PanelBody>
      </Panel>
      <Bubble onClick={() => setOpen((o) => !o)} aria-label="Toggle chat">
        {open ? '✕' : '💬'}
      </Bubble>
    </>
  );
}

