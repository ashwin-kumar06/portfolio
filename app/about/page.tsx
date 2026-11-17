'use client';

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { COLORS, FONTS, ABOUT, SITE } from '../constant';

// ─── Global ──────────────────────────────────────────────────────────────────

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
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 3rem 1.5rem;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 640px;
`;

// ─── Window primitive ─────────────────────────────────────────────────────────

const Window = styled.div`
  background: #fff;
  border: 4px solid #000;
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.8);
`;

const WindowBar = styled.div<{ $accent?: string }>`
  background: ${({ $accent }) => $accent ?? COLORS.sageGreen};
  border-bottom: 4px solid #000;
  padding: 0.4rem 1rem;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
`;

const WindowBody = styled.div`
  background: ${COLORS.lightSage};
  padding: 1.5rem 2rem;
`;

// ─── Typography ───────────────────────────────────────────────────────────────

const Headline = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  margin: 0 0 0.25rem;
  letter-spacing: -0.02em;
`;

const LocationTag = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${COLORS.burntOrange};
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #000;
  margin: 1rem 0;
`;

const Paragraph = styled.p`
  font-size: 0.95rem;
  line-height: 1.75;
  margin: 0;
`;

const SectionLabel = styled.p`
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${COLORS.burntOrange};
  margin: 0 0 0.6rem;
`;

// ─── Highlights grid ─────────────────────────────────────────────────────────

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
`;

const HighlightCard = styled.div`
  background: #fff;
  border: 3px solid #000;
  box-shadow: 4px 4px 0 #000;
  padding: 0.75rem 1rem;
`;

const HighlightEmoji = styled.div`
  font-size: 1.4rem;
  margin-bottom: 0.3rem;
`;

const HighlightLabel = styled.div`
  font-weight: 900;
  font-size: 0.85rem;
  margin-bottom: 0.15rem;
`;

const HighlightDetail = styled.div`
  font-size: 0.75rem;
  color: #444;
  line-height: 1.4;
`;

// ─── Goals list ───────────────────────────────────────────────────────────────

const GoalItem = styled.li`
  font-size: 0.9rem;
  line-height: 1.6;
  padding: 0.4rem 0;
  border-bottom: 2px dashed ${COLORS.sageGreen}88;
  list-style: none;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;

  &:last-child { border-bottom: none; }

  &::before {
    content: '▶';
    color: ${COLORS.burntOrange};
    font-size: 0.6rem;
    margin-top: 0.35rem;
    flex-shrink: 0;
  }
`;

// ─── Creative callout ─────────────────────────────────────────────────────────

const CreativeBanner = styled.div`
  background: ${COLORS.goldenYellow};
  border: 3px solid #000;
  padding: 0.75rem 1rem;
  font-size: 0.85rem;
  line-height: 1.6;
  margin-top: 0.75rem;
  box-shadow: 4px 4px 0 #000;
`;

const CreativeTag = styled.span`
  font-weight: 900;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-right: 0.5rem;
`;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Stack>

          {/* Hero */}
          <Window>
            <WindowBar>ABOUT.EXE</WindowBar>
            <WindowBody>
              <Headline>{ABOUT.headline}</Headline>
              <LocationTag>📍 {ABOUT.location}</LocationTag>
              <Divider />
              <Paragraph>{ABOUT.intro}</Paragraph>
            </WindowBody>
          </Window>

          {/* Character & Approach */}
          <Window>
            <WindowBar $accent={COLORS.burntOrange}>CHARACTER.TXT</WindowBar>
            <WindowBody>
              <SectionLabel>Who I am</SectionLabel>
              <Paragraph>{ABOUT.character}</Paragraph>
              <Divider />
              <SectionLabel>How I work</SectionLabel>
              <Paragraph>{ABOUT.approach}</Paragraph>
            </WindowBody>
          </Window>

          {/* Highlights */}
          <Window>
            <WindowBar>HIGHLIGHTS.EXE</WindowBar>
            <WindowBody>
              <HighlightGrid>
                {ABOUT.highlights.map((h) => (
                  <HighlightCard key={h.label}>
                    <HighlightEmoji>{h.emoji}</HighlightEmoji>
                    <HighlightLabel>{h.label}</HighlightLabel>
                    <HighlightDetail>{h.detail}</HighlightDetail>
                  </HighlightCard>
                ))}
              </HighlightGrid>
            </WindowBody>
          </Window>

          {/* Philosophy & Creative */}
          <Window>
            <WindowBar $accent={COLORS.sageGreen}>PHILOSOPHY.LOG</WindowBar>
            <WindowBody>
              <SectionLabel>How I think</SectionLabel>
              <Paragraph>{ABOUT.philosophy}</Paragraph>

              <CreativeBanner>
                <CreativeTag>✍️ Creative</CreativeTag>
                {ABOUT.creative.summary}
                <div style={{ marginTop: '0.5rem', fontSize: '0.75rem', fontWeight: 700 }}>
                  Inspired by: {ABOUT.creative.inspiration}
                </div>
              </CreativeBanner>
            </WindowBody>
          </Window>

          {/* Goals */}
          <Window>
            <WindowBar $accent={COLORS.burntOrange}>GOALS.SH</WindowBar>
            <WindowBody>
              <SectionLabel>What I&apos;m working toward</SectionLabel>
              <ul style={{ margin: 0, padding: 0 }}>
                {ABOUT.goals.map((g) => (
                  <GoalItem key={g}>{g}</GoalItem>
                ))}
              </ul>
            </WindowBody>
          </Window>

        </Stack>
      </PageWrapper>
    </>
  );
}
