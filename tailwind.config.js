// Shared Tailwind configuration — must be loaded BEFORE cdn.tailwindcss.com
// The CDN runtime reads window.tailwind.config on startup.
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        serif: ['DM Serif Display', 'serif'],
      },
      colors: {
        darkbg:    '#0a0a0f',
        cardbg:    '#12121e',
        accent:    '#7c3aed',
        highlight: '#a3e635',
        textlight: '#f8fafc',
        muted:     '#94a3b8',
      },
    },
  },
};
