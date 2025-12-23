'use client';

import PillNav from './PillNav';
import logo from '@/public/shawnLogo.png';

export default function Navbar() {
  return (
    <PillNav
      logo={logo.src}
      items={[
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Timeline', href: '#timeline' },
        { label: 'Contact', href: '#contact' }
      ]}
      baseColor="#000"
      pillColor="#fff"
      pillTextColor="#000"
      hoveredPillTextColor="#fff"
      ease="power2.easeOut"
    />
  );
}
