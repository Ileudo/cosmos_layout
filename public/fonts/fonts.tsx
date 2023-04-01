import localFont from 'next/font/local';

export const mazzardH = localFont({
  src: [
    { path: './MazzardH-Regular.woff2', weight: '400' },
    { path: './MazzardH-Medium.woff2', weight: '500' },
    { path: './MazzardH-Bold.otf', weight: '700' },
  ],
  variable: '--mazzardH',
});

export const neueMachina = localFont({
  src: [
    { path: './NeueMachina-Regular.woff2', weight: '400' },
    { path: './NeueMachina-Medium.woff2', weight: '500' },
    { path: './NeueMachina-Bold.woff2', weight: '700' },
  ],
  variable: '--neueMachina',
});

export const ttOctosquares = localFont({
  src: [
    { path: './TTOctosquares-Regular.otf', weight: '400' },
    { path: './TTOctosquares-Medium.otf', weight: '500' },
  ],
  variable: '--ttOctosquares',
});

export const moveX = localFont({
  src: [{ path: './Move-X-Bold.otf', weight: '700' }],
  variable: '--moveX',
});
