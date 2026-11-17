const paths = {
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'm6 6 12 12M6 18 18 6',
  book: 'M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14M6 9h3m-3 4h3m6-4h3m-3 4h3',
  chart: 'M4 3h16v18H4V3Zm4 13v-3m4 3V8m4 8v-5',
  trophy: 'M8 3h8v7a4 4 0 0 1-8 0V3Zm0 2H4v3a4 4 0 0 0 4 4m8-7h4v3a4 4 0 0 1-4 4m-4 2v6m-4 1h8',
  pen: 'm5 16 10-10 3 3L8 19l-4 1 1-4Zm9-9 2-2a2 2 0 0 1 3 3l-2 2M5 5l2-2 3 3-2 2',
  wallet: 'M4 5h14v15H4V5Zm2 0V3h11v2m-3 6h6v5h-6v-5Zm3 2v1',
  trend: 'm3 13 6-6 4 4 8-8m-6 0h6v6M4 21v-4m5 4V12m5 9v-6m5 6v-9',
  search: 'm3 8 4 4 5-8 4 4m1 9 4 4m-3-8a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z',
  badge: 'M9 6H4v15h16V6h-5M9 3h6v6H9V3Zm-2 9h3v4H7v-4Zm6 1h4m-4 3h4',
  handshake: 'm2 9 5-5 4 2 3-2 8 7-4 8-4 2-8-5-4-7Zm5-5 5 5 3-2m-8 5 6 6m-2-9 7 7',
  calendar: 'M4 5h16v16H4V5Zm3-3v6m10-6v6M4 11h16m-11 4 2 2 4-4',
  message: 'M3 4h15v12H8l-5 4V4Zm5 4h6m-6 4h6m7-4v13l-4-3',
  clock: 'M12 8v5l3 2m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  pin: 'M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
  users: 'M16 21v-3a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v3m20 0v-3a4 4 0 0 0-4-4m-5-8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm4-3a4 4 0 0 1 0 8',
  building: 'M4 21V3h12v18m0-12h5v12M1 21h22M8 7h1m3 0h1m-5 4h1m3 0h1m-5 4h1m3 0h1m-3 6v-3',
  school: 'm2 8 10-5 10 5-10 5L2 8Zm4 3v6l6 4 6-4v-6m4-3v8',
  bank: 'm2 8 10-6 10 6H2Zm2 4v6m5-6v6m6-6v6m5-6v6M2 22h20',
  devices: 'M3 4h16v12H3V4Zm5 16h6m-3-4v4m6-11h5v12h-5V9Z',
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return <svg className={`icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>;
}
