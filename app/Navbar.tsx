'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { COLORS, FONTS, NAV_LINKS } from './constant';

const Nav = styled.nav`
  background: ${COLORS.sageGreen};
  border-bottom: 4px solid #000;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.4rem 1rem;
  flex-wrap: wrap;
  position: sticky;
  top: 0;
  z-index: 50;
`;

const NavBtn = styled(Link)<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? COLORS.burntOrange : COLORS.lightSage)};
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  border: 2px solid #000;
  box-shadow: ${({ $active }) => ($active ? '2px 2px 0 #000' : '3px 3px 0 #000')};
  transform: ${({ $active }) => ($active ? 'translate(1px, 1px)' : 'none')};
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-family: var(${FONTS.variable}), ${FONTS.fallback.join(', ')};
  font-weight: 700;
  text-decoration: none;
  transition: none;

  &:active {
    box-shadow: 1px 1px 0 #000;
    transform: translate(2px, 2px);
  }
`;

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Nav>
      {NAV_LINKS.map((link) => (
        <NavBtn
          key={link.href}
          href={link.href}
          $active={pathname === link.href}
        >
          {link.label}
        </NavBtn>
      ))}
    </Nav>
  );
}

