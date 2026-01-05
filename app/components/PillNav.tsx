'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import MobileNav from './mobilenav';

type Item = {
  label: string;
  href: string;
  ariaLabel?: string;
};

type Props = {
  logo: string;
  logoAlt?: string;
  items: Item[];
  className?: string;
  ease?: string;
  baseColor?: string;         // single navbar/pill color
  textColor?: string;         // normal text color
  hoveredTextColor?: string;  // text color on hover
  initialLoadAnimation?: boolean;
};

export default function PillNav({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#000',
  textColor = '#fff',
  hoveredTextColor = '#fff',
  initialLoadAnimation = true
}: Props) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  const circleRefs = useRef<HTMLSpanElement[]>([]);
  const tlRefs = useRef<gsap.core.Timeline[]>([]);
  const activeTweenRefs = useRef<gsap.core.Tween[]>([]);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const layout = () => {
      circleRefs.current.forEach((circle, i) => {
        if (!circle || !circle.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const { width: w, height: h } = pill.getBoundingClientRect();

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, { xPercent: -50, scale: 0, transformOrigin: `50% ${originY}px` });

        const label = pill.querySelector('.pill-label');
        const hover = pill.querySelector('.pill-label-hover');

        gsap.set(label, { y: 0 });
        gsap.set(hover, { y: h + 12, opacity: 0 });

        tlRefs.current[i]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.2, duration: 0.6, ease }, 0)
          .to(label, { y: -(h + 8), duration: 0.6, ease }, 0)
          .to(hover, { y: 0, opacity: 1, duration: 0.6, ease }, 0);

        tlRefs.current[i] = tl;
      });
    };

    layout();
    window.addEventListener('resize', layout);

    if (initialLoadAnimation) {
      gsap.fromTo(logoRef.current, { scale: 0 }, { scale: 1, duration: 0.6, ease });
      gsap.fromTo(navItemsRef.current, { width: 0, overflow: 'hidden' }, { width: 'auto', duration: 0.6, ease });
    }

    return () => window.removeEventListener('resize', layout);
  }, [items, ease, initialLoadAnimation, isMobile]);

  const handleEnter = (i: number) => {
    if (isMobile) return;
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease });
  };

  const handleLeave = (i: number) => {
    if (isMobile) return;
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease });
  };

  if (isMobile) return <MobileNav logo={logo} items={items} />;

  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 z-[1000] px-6 py-1 rounded-full"
      style={{ background: baseColor }}
    >
      <nav className={`flex items-center gap-4 ${className}`}>
        {/* LOGO */}
        <Link
          href="/"
          ref={logoRef}
          className="flex items-center justify-center p-3 rounded-full"
          style={{ background: baseColor }}
        >
          <img src={logo} alt={logoAlt} className="w-7 object-cover" />
        </Link>

        {/* NAV ITEMS */}
        <div ref={navItemsRef} className="flex gap-3">
          {items.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative font-semibold uppercase text-[14px] px-5 py-3 rounded-full transition-colors duration-300"
              style={{ color: textColor }}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={() => handleLeave(i)}
            >
              {/* GSAP Circle */}
              <span
                ref={el => {
                  if (el) circleRefs.current[i] = el;
                }}
                className="absolute left-1/2 bottom-0 rounded-full pointer-events-none"
                style={{ background: baseColor }}
              />

              {/* Text + hover text */}
              <span className="relative z-10">
                <span className="pill-label block">{item.label}</span>
                <span
                  className="pill-label-hover absolute left-0 top-0"
                  style={{ color: hoveredTextColor }}
                >
                  {item.label}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
