'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

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
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  initialLoadAnimation?: boolean;
};

export default function PillNav({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.easeOut',
  baseColor = '#000',
  pillColor = '#fff',
  hoveredPillTextColor = '#fff',
  pillTextColor,
  initialLoadAnimation = true
}: Props) {
  const pathname = usePathname();
  const resolvedPillTextColor = pillTextColor ?? baseColor;

  const circleRefs = useRef<HTMLSpanElement[]>([]);
  const tlRefs = useRef<gsap.core.Timeline[]>([]);
  const activeTweenRefs = useRef<gsap.core.Tween[]>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);

  /* ================= GSAP SETUP ================= */
  useEffect(() => {
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

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

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
      gsap.fromTo(
        logoRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.6, ease }
      );
      gsap.fromTo(
        navItemsRef.current,
        { width: 0, overflow: 'hidden' },
        { width: 'auto', duration: 0.6, ease }
      );
    }

    return () => window.removeEventListener('resize', layout);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.3, ease });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, { duration: 0.2, ease });
  };

  const cssVars = {
    ['--base' as any]: baseColor,
    ['--pill-bg' as any]: pillColor,
    ['--hover-text' as any]: hoveredPillTextColor,
    ['--pill-text' as any]: resolvedPillTextColor
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[1000] px-4">
      <nav
        className={`flex items-center ${className}`}
        style={cssVars}
      >
        {/* LOGO */}
        <Link
          href="/"
          ref={logoRef}
          className="rounded-full p-2 flex items-center justify-center"
          style={{ background: 'var(--base)' }}
        >
          <img
            src={logo}
            alt={logoAlt}
            ref={logoImgRef}
            className="w-8 h-8 object-cover"
          />
        </Link>

        {/* NAV */}
        <div
          ref={navItemsRef}
          className="ml-2 rounded-full flex"
          style={{ background: 'var(--base)' }}
        >
          <ul className="flex p-[3px] gap-[3px]">
            {items.map((item, i) => {
              const isActive =
                item.href.startsWith('#') ? false : pathname === item.href;

              return (
                <li key={item.href} className="relative flex">
                  <Link
                    href={item.href}
                    className="relative overflow-hidden inline-flex items-center justify-center rounded-full font-semibold uppercase text-[14px]"
                    style={{
                      background: 'var(--pill-bg)',
                      color: 'var(--pill-text)',
                      padding: '10px 18px'
                    }}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    {/* GSAP CIRCLE */}
                    <span
                      ref={el => {
                        if (el) circleRefs.current[i] = el;
                      }}
                      className="absolute left-1/2 bottom-0 rounded-full pointer-events-none"
                      style={{ background: 'var(--base)' }}
                    />

                    {/* LABELS */}
                    <span className="relative z-10">
                      <span className="pill-label block">
                        {item.label}
                      </span>
                      <span
                        className="pill-label-hover absolute left-0 top-0"
                        style={{ color: 'var(--hover-text)' }}
                      >
                        {item.label}
                      </span>
                    </span>

                    {isActive && (
                      <span
                        className="absolute left-1/2 -bottom-1 w-2 h-2 rounded-full -translate-x-1/2"
                        style={{ background: 'var(--base)' }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
}
