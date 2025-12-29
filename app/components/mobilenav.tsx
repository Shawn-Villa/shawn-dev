'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

type Item = {
  label: string;
  href: string;
};

export default function MobileNav({
  logo,
  items
}: {
  logo: string;
  items: Item[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-[1000] bg-black">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-4 py-3">
        <Image src={logo} alt="Logo" width={32} height={32} />

        <button onClick={() => setOpen(!open)} className="text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-black">
          <ul className="flex flex-col gap-2 p-4">
            {items.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-white text-black text-center py-3 font-semibold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
