'use client';

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { COLORS, FONTS, PROJECTS, SITE } from '../constant';

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

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 700px;
`;

// ─── Card ─────────────────────────────────────────────────────────────────────

const Card = styled.div`
  background: #fff;
  border: 4px solid #000;
  box-shadow: 8px 8px 0 rgba(0,0,0,0.8);
`;

const CardHeader = styled.div<{ $professional: boolean }>`
  background: ${({ $professional }) =>
    $professional ? COLORS.burntOrange : COLORS.sageGreen};
  border-bottom: 4px solid #000;
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const CardHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

const CardId = styled.span`
  color: #fff;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  opacity: 0.8;
`;

const CardTitle = styled.span`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 900;
  letter-spacing: 0.03em;
`;

const TypeBadge = styled.span<{ $professional: boolean }>`
  background: ${({ $professional }) => ($professional ? '#fff' : COLORS.goldenYellow)};
  color: #000;
  font-size: 0.65rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.15rem 0.5rem;
  border: 2px solid #000;
  white-space: nowrap;
`;

const CardBody = styled.div`
  background: ${COLORS.lightSage};
  padding: 1.5rem 1.75rem;
`;

const Subtitle = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${COLORS.burntOrange};
  margin: 0 0 0.75rem;
  letter-spacing: 0.03em;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.75;
  margin: 0 0 1.25rem;
  color: #111;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px dashed ${COLORS.sageGreen}99;
  margin: 0 0 1rem;
`;

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

const Tag = styled.span`
  background: #fff;
  border: 2px solid #000;
  box-shadow: 2px 2px 0 #000;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.55rem;
  color: #000;
`;

const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: ${COLORS.burntOrange};
  text-decoration: none;
  border-bottom: 2px solid ${COLORS.burntOrange};
  &:hover { opacity: 0.75; }
`;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <PageTitle>PROJECTS.EXE — {SITE.name}</PageTitle>

        <Stack>
          {PROJECTS.map((p) => {
            const isPro = p.type === 'professional';
            return (
              <Card key={p.id}>
                <CardHeader $professional={isPro}>
                  <CardHeaderLeft>
                    <CardId>PROJECT_{p.id.toString().padStart(2, '0')}</CardId>
                    <CardTitle>{p.title}</CardTitle>
                  </CardHeaderLeft>
                  <TypeBadge $professional={isPro}>
                    {isPro ? '🏢 Work' : '🧑‍💻 Personal'}
                  </TypeBadge>
                </CardHeader>

                <CardBody>
                  <Subtitle>{p.subtitle}</Subtitle>
                  <Description>{p.description}</Description>
                  <Divider />
                  <TagRow>
                    {p.tech.map((t) => <Tag key={t}>{t}</Tag>)}
                  </TagRow>
                  {p.link !== '#' && (
                    <GithubLink href={p.link} target="_blank" rel="noopener noreferrer">
                      ↗ View on GitHub
                    </GithubLink>
                  )}
                </CardBody>
              </Card>
            );
          })}
        </Stack>
      </PageWrapper>
    </>
  );
}
