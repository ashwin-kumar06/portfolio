'use client';

import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { COLORS, FONTS, SITE } from '../constant';

// ─── Global ───────────────────────────────────────────────────────────────────

const GlobalStyle = createGlobalStyle`
  body {
    font-family: var(${FONTS.variable}), ${FONTS.fallback.join(', ')};
    margin: 0; padding: 0; box-sizing: border-box;
    background-color: ${COLORS.lightSage};
    background-image:
      linear-gradient(${COLORS.sageGreen}66 1px, transparent 1px),
      linear-gradient(90deg, ${COLORS.sageGreen}66 1px, transparent 1px);
    background-size: 50px 50px;
    color: #000;
  }
`;

// ─── Layout ───────────────────────────────────────────────────────────────────

const PageWrapper = styled.main`
  min-height: calc(100vh - 44px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  gap: 1.25rem;
`;

// ─── Toolbar ──────────────────────────────────────────────────────────────────

const Toolbar = styled.div`
  width: 100%;
  max-width: 860px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const PageTitle = styled.h1`
  font-size: 1.3rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  margin: 0;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionBtn = styled.a<{ $primary?: boolean }>`
  background: ${({ $primary }) => ($primary ? COLORS.burntOrange : '#fff')};
  color: ${({ $primary }) => ($primary ? '#fff' : '#000')};
  border: 3px solid #000;
  box-shadow: 4px 4px 0 #000;
  padding: 0.35rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: var(${FONTS.variable}), ${FONTS.fallback.join(', ')};
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  &:active { box-shadow: 1px 1px 0 #000; transform: translate(3px, 3px); }
`;

// ─── Viewer window ────────────────────────────────────────────────────────────

const ViewerWindow = styled.div`
  width: 100%;
  max-width: 860px;
  border: 4px solid #000;
  box-shadow: 10px 10px 0 rgba(0,0,0,0.8);
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const WindowBar = styled.div`
  background: ${COLORS.sageGreen};
  border-bottom: 4px solid #000;
  padding: 0.4rem 1rem;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const WindowDots = styled.div`
  display: flex;
  gap: 0.4rem;
  span {
    width: 10px; height: 10px;
    border: 2px solid #000;
    background: ${COLORS.lightSage};
    display: inline-block;
  }
`;

const PdfFrame = styled.iframe`
  width: 100%;
  height: 80vh;
  border: none;
  background: #fff;
  display: block;
`;

// ─── Fallback (shown if iframe fails) ─────────────────────────────────────────

const Fallback = styled.div`
  background: ${COLORS.lightSage};
  padding: 2.5rem;
  text-align: center;
  font-size: 0.9rem;
`;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResumePage() {
  const [frameError, setFrameError] = useState(false);

  return (
    <>
      <GlobalStyle />
      <PageWrapper>

        <Toolbar>
          <PageTitle>RESUME.EXE</PageTitle>
          <ButtonRow>
            <ActionBtn href={SITE.resumePdf} target="_blank" rel="noopener noreferrer">
              ↗ Open in tab
            </ActionBtn>
            <ActionBtn href={SITE.resumePdf} download="Ashwin_Kumar_resume.pdf" $primary>
              ⬇ Download
            </ActionBtn>
          </ButtonRow>
        </Toolbar>

        <ViewerWindow>
          <WindowBar>
            <span>Ashwin_Kumar_resume.pdf</span>
            <WindowDots>
              <span /><span /><span />
            </WindowDots>
          </WindowBar>

          {frameError ? (
            <Fallback>
              <p>Your browser blocked the inline preview.</p>
              <ActionBtn href={SITE.resumePdf} target="_blank" rel="noopener noreferrer" $primary style={{ display: 'inline-flex', marginTop: '1rem' }}>
                ↗ Open PDF directly
              </ActionBtn>
            </Fallback>
          ) : (
            <PdfFrame
              src={`${SITE.resumePdf}#toolbar=0&navpanes=0`}
              title="Ashwin Kumar Resume"
              onError={() => setFrameError(true)}
            />
          )}
        </ViewerWindow>

      </PageWrapper>
    </>
  );
}
