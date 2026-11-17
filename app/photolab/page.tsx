'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { COLORS, FONTS, PHOTOS, SITE } from '../constant';

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
  padding: 2.5rem 1.5rem;
  gap: 1.5rem;
`;

const Header = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

const PageTitle = styled.h1`
  font-size: 1.4rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  margin: 0;
`;

const Count = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${COLORS.burntOrange};
`;

// ─── Masonry grid ─────────────────────────────────────────────────────────────

const Grid = styled.div`
  width: 100%;
  max-width: 1100px;
  columns: 4;
  column-gap: 0.75rem;

  @media (max-width: 1000px) { columns: 3; }
  @media (max-width: 680px)  { columns: 2; }
  @media (max-width: 420px)  { columns: 1; }
`;

const Tile = styled.div`
  break-inside: avoid;
  margin-bottom: 0.75rem;
  border: 3px solid #000;
  box-shadow: 4px 4px 0 rgba(0,0,0,0.6);
  overflow: hidden;
  cursor: zoom-in;
  position: relative;
  background: ${COLORS.sageGreen}44;

  /* lift on hover */
  transition: transform 0.1s, box-shadow 0.1s;
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 rgba(0,0,0,0.75);
  }
`;

// ─── Lightbox ─────────────────────────────────────────────────────────────────

const fadeIn = keyframes`from { opacity: 0; } to { opacity: 1; }`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.88);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.15s ease;
  padding: 1rem;
`;

const LightboxWindow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: min(90vw, 900px);
  max-height: 90vh;
  border: 4px solid #000;
  box-shadow: 12px 12px 0 rgba(0,0,0,0.9);
`;

const LightboxBar = styled.div`
  background: ${COLORS.sageGreen};
  border-bottom: 4px solid #000;
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  flex-shrink: 0;
`;

const CloseBtn = styled.button`
  background: ${COLORS.burntOrange};
  border: 2px solid #000;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 900;
  padding: 0.1rem 0.5rem;
  cursor: pointer;
  font-family: var(${FONTS.variable}), ${FONTS.fallback.join(', ')};
  &:active { transform: translate(1px, 1px); }
`;

const LightboxImg = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  background: #111;
  img {
    object-fit: contain;
    max-height: calc(90vh - 44px);
    width: 100%;
  }
`;

const NavBtn = styled.button<{ $side: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  ${({ $side }) => $side}: 0.5rem;
  transform: translateY(-50%);
  background: #fff;
  border: 3px solid #000;
  box-shadow: 3px 3px 0 #000;
  font-size: 1.1rem;
  font-weight: 900;
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  &:active { box-shadow: 1px 1px 0 #000; transform: translateY(-50%) translate(2px, 2px); }
`;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PhotoLabPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const open  = (i: number) => setLightbox(i);
  const close = () => setLightbox(null);
  const prev  = useCallback(() => setLightbox(i => i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null), []);
  const next  = useCallback(() => setLightbox(i => i !== null ? (i + 1) % PHOTOS.length : null), []);

  // keyboard nav
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape')      close();
      if (e.key === 'ArrowLeft')   prev();
      if (e.key === 'ArrowRight')  next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, prev, next]);

  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Header>
          <PageTitle>PHOTOLAB.EXE — {SITE.name}</PageTitle>
          <Count>{PHOTOS.length} photos</Count>
        </Header>

        <Grid>
          {PHOTOS.map((file, i) => (
            <Tile key={file} onClick={() => open(i)}>
              <Image
                src={`/photolab/${file}`}
                alt={`Photo ${i + 1}`}
                width={600}
                height={400}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                sizes="(max-width: 420px) 100vw, (max-width: 680px) 50vw, (max-width: 1000px) 33vw, 25vw"
              />
            </Tile>
          ))}
        </Grid>
      </PageWrapper>

      {lightbox !== null && (
        <Overlay onClick={close}>
          <LightboxWindow onClick={e => e.stopPropagation()}>
            <LightboxBar>
              <span>
                {PHOTOS[lightbox]} &nbsp;·&nbsp; {lightbox + 1} / {PHOTOS.length}
              </span>
              <CloseBtn onClick={close}>✕ CLOSE</CloseBtn>
            </LightboxBar>
            <LightboxImg>
              <Image
                src={`/photolab/${PHOTOS[lightbox]}`}
                alt={`Photo ${lightbox + 1}`}
                width={900}
                height={700}
                style={{ width: '100%', height: 'auto', maxHeight: 'calc(90vh - 44px)', objectFit: 'contain' }}
                priority
              />
              <NavBtn $side="left"  onClick={prev}>‹</NavBtn>
              <NavBtn $side="right" onClick={next}>›</NavBtn>
            </LightboxImg>
          </LightboxWindow>
        </Overlay>
      )}
    </>
  );
}
