'use client';

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { COLORS, FONTS, SKILLS, SITE } from '../constant';

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
  padding: 3rem 1.5rem;
  gap: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.25rem;
  width: 100%;
  max-width: 860px;
`;

// ─── Window card ──────────────────────────────────────────────────────────────

const Window = styled.div`
  background: #fff;
  border: 4px solid #000;
  box-shadow: 6px 6px 0 rgba(0,0,0,0.8);
  display: flex;
  flex-direction: column;
`;

const WindowBar = styled.div`
  background: ${COLORS.sageGreen};
  border-bottom: 4px solid #000;
  padding: 0.35rem 0.9rem;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const WindowBody = styled.div`
  background: ${COLORS.lightSage};
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  align-content: flex-start;
  flex: 1;
`;

const Chip = styled.span`
  background: #fff;
  border: 2px solid #000;
  box-shadow: 2px 2px 0 #000;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  white-space: nowrap;
  color: #000;
`;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SkillsPage() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <PageTitle>SKILLS.EXE</PageTitle>

        <Grid>
          {SKILLS.map((group) => (
            <Window key={group.category}>
              <WindowBar>
                <span>{group.icon}</span>
                {group.category.toUpperCase()}
              </WindowBar>
              <WindowBody>
                {group.items.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </WindowBody>
            </Window>
          ))}
        </Grid>
      </PageWrapper>
    </>
  );
}
