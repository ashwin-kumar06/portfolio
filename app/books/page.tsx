'use client';

import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { COLORS, FONTS, BOOKS, SITE } from '../constant';

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

const PageWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  margin: 0;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 540px;
`;

const BookCard = styled.div`
  background: #fff;
  border: 4px solid #000;
  box-shadow: 6px 6px 0 rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
`;

const BookInfo = styled.div`
  flex: 1;
`;

const BookTitle = styled.div`
  font-weight: 900;
  font-size: 0.95rem;
`;

const BookAuthor = styled.div`
  font-size: 0.8rem;
  color: ${COLORS.burntOrange};
  font-weight: 600;
  margin-top: 0.2rem;
`;

const Stars = styled.div`
  font-size: 1rem;
  color: ${COLORS.goldenYellow};
  letter-spacing: 0.05em;
`;

export default function BooksPage() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper>
        <Title>BOOKS.EXE</Title>
        <List>
          {BOOKS.map((book) => (
            <BookCard key={book.title}>
              <BookInfo>
                <BookTitle>{book.title}</BookTitle>
                <BookAuthor>{book.author}</BookAuthor>
              </BookInfo>
              <Stars>{'★'.repeat(book.rating)}{'☆'.repeat(5 - book.rating)}</Stars>
            </BookCard>
          ))}
        </List>
      </PageWrapper>
    </>
  );
}

