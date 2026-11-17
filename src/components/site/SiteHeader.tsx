'use client';

import { useEffect, useRef, useState } from 'react';
import { Brand } from './Brand';
import { Icon } from './Icon';

const navigation = [['beranda', 'Beranda'], ['tentang', 'Tentang'], ['divisi', 'Divisi'], ['publikasi', 'Publikasi & Riset'], ['kegiatan', 'Kegiatan'], ['rekrutmen', 'Rekrutmen']];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1200px)');
    const resize = () => { if (media.matches) setOpen(false); };
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setOpen(false);
    };
    media.addEventListener('change', resize);
    document.addEventListener('keydown', keydown);
    document.addEventListener('pointerdown', outside);
    return () => {
      media.removeEventListener('change', resize);
      document.removeEventListener('keydown', keydown);
      document.removeEventListener('pointerdown', outside);
    };
  }, [open]);

  function navigate(id: string) {
    setOpen(false);
    document.getElementById(id)?.focus({ preventScroll: true });
  }

  return (
    <header
      className="site-header"
      ref={headerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="container header-inner">
        <Brand />
        <button ref={buttonRef} type="button" className="menu-toggle" aria-label={open ? 'Tutup menu navigasi' : 'Buka menu navigasi'} aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <div id="main-navigation" className={`navigation-panel${open ? ' is-open' : ''}`}>
          <nav aria-label="Navigasi utama">
            {navigation.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => navigate(id)}>{label}</a>)}
          </nav>
          <div className="header-actions">
            <button type="button" className="portal-link" disabled title="Portal admin sedang disiapkan">Portal Admin</button>
            <a className="button button-primary header-cta" href="#rekrutmen" onClick={() => navigate('rekrutmen')}>Open Recruitment</a>
          </div>
        </div>
      </div>
    </header>
  );
}
