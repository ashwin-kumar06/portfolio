'use client';

import React from 'react';
import Image from 'next/image';
import styled, { createGlobalStyle } from 'styled-components';
import { COLORS, FONTS, SUBSTACK_ARTICLES } from '../constant';

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
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1100px;
`;

// ─── Article card ─────────────────────────────────────────────────────────────

const Card = styled.a`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 4px solid #000;
  box-shadow: 6px 6px 0 rgba(0,0,0,0.8);
  text-decoration: none;
  color: #000;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 rgba(0,0,0,0.85);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 3px 3px 0 rgba(0,0,0,0.8);
  }
`;

const CardBar = styled.div`
  background: ${COLORS.burntOrange};
  border-bottom: 4px solid #000;
  padding: 0.35rem 0.9rem;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  border-bottom: 4px solid #000;
  overflow: hidden;
`;

const CardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  background: ${COLORS.lightSage};
`;

const ArticleTitle = styled.h2`
  font-size: 0.95rem;
  font-weight: 900;
  margin: 0;
  line-height: 1.3;
`;

const ArticleDesc = styled.p`
  font-size: 0.78rem;
  margin: 0;
  color: #333;
  line-height: 1.5;
`;

const ReadMore = styled.span`
  display: inline-block;
  margin-top: auto;
  padding-top: 0.5rem;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  color: ${COLORS.burntOrange};
  text-transform: uppercase;
`;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SubstackPage() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <PageTitle>SUBSTACK.EXE</PageTitle>

        <Grid>
          {SUBSTACK_ARTICLES.map((article) => (
            <Card
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardBar>
                <span>✍️ ARTICLE #{article.id}</span>
                <span>{article.date}</span>
              </CardBar>

              <ImageWrapper>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </ImageWrapper>

              <CardBody>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDesc>{article.description}</ArticleDesc>
                <ReadMore>Read on Substack →</ReadMore>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </PageWrapper>
    </>
  );
}
