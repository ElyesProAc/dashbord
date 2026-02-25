const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.ts",
    ],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgba(var(--color-primary), 1)',
          dark: 'rgba(var(--color-primary-dark), 1)',
          light: 'rgba(var(--color-primary-light), 1)',
        },
        secondary: {
          DEFAULT: 'rgba(var(--color-secondary), 1)',
          dark: 'rgba(var(--color-secondary-dark), 1)',
          light: 'rgba(var(--color-secondary-light), 1)',
        },
        success: {
          DEFAULT: 'rgba(var(--color-success), 1)',
          dark: 'rgba(var(--color-success-dark), 1)',
          light: 'rgba(var(--color-success-light), 1)',
        },
        info: {
          DEFAULT: 'rgba(var(--color-info), 1)',
          dark: 'rgba(var(--color-info-dark), 1)',
          light: 'rgba(var(--color-info-light), 1)',
        },
        warning: {
          DEFAULT: 'rgba(var(--color-warning), 1)',
          dark: 'rgba(var(--color-warning-dark), 1)',
          light: 'rgba(var(--color-warning-light), 1)',
        },
        danger: {
          DEFAULT: 'rgba(var(--color-danger), 1)',
          dark: 'rgba(var(--color-danger-dark), 1)',
          light: 'rgba(var(--color-danger-light), 1)',
        },
        light: {
          DEFAULT: 'rgba(var(--color-light), 1)',
          dark: 'rgba(var(--color-light-dark), 1)',
        },
        dark: {
          DEFAULT: 'rgba(var(--color-dark), 1)',
          light: 'rgba(var(--color-dark-light), 1)',
        },
        default: 'rgba(var(--color-default), 1)',
        heading: {
          DEFAULT: 'rgba(var(--color-heading), 1)',
          light: 'rgba(var(--color-heading-light), 1)',
        },
        white: 'rgba(var(--color-white), 1)',
        black: 'rgba(var(--color-black), 1)',
        slate: {
          50: 'rgba(var(--color-slate-50), 1)',
          100: 'rgba(var(--color-slate-100), 1)',
          200: 'rgba(var(--color-slate-200), 1)',
          300: 'rgba(var(--color-slate-300), 1)',
          400: 'rgba(var(--color-slate-400), 1)',
          500: 'rgba(var(--color-slate-500), 1)',
          600: 'rgba(var(--color-slate-600), 1)',
          700: 'rgba(var(--color-slate-700), 1)',
          800: 'rgba(var(--color-slate-800), 1)',
          900: 'rgba(var(--color-slate-900), 1)',
        },
      },
      fontFamily: {
        sans: ['var(--font-family-sans)'],
        serif: ['var(--font-family-serif)'],
        mono: ['var(--font-family-mono)'],
      },
      fontSize: {
        xs: ['var(--font-size-xs)', { lineHeight: 'var(--line-height-normal)' }],
        sm: ['var(--font-size-sm)', { lineHeight: 'var(--line-height-normal)' }],
        base: ['var(--font-size-base)', { lineHeight: 'var(--line-height-normal)' }],
        lg: ['var(--font-size-lg)', { lineHeight: 'var(--line-height-normal)' }],
        xl: ['var(--font-size-xl)', { lineHeight: 'var(--line-height-normal)' }],
        '2xl': ['var(--font-size-2xl)', { lineHeight: 'var(--line-height-tight)' }],
        '3xl': ['var(--font-size-3xl)', { lineHeight: 'var(--line-height-tight)' }],
        '4xl': ['var(--font-size-4xl)', { lineHeight: 'var(--line-height-tight)' }],
        '5xl': ['var(--font-size-5xl)', { lineHeight: 'var(--line-height-tight)' }],
        '6xl': ['var(--font-size-6xl)', { lineHeight: 'var(--line-height-tight)' }],
      },
      fontWeight: {
        light: 'var(--font-weight-light)',
        normal: 'var(--font-weight-normal)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
        extrabold: 'var(--font-weight-extrabold)',
      },
      lineHeight: {
        tight: 'var(--line-height-tight)',
        normal: 'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
        loose: 'var(--line-height-loose)',
      },
      spacing: {
        '0': 'var(--spacing-0)',
        'px': 'var(--spacing-px)',
        '0.5': 'var(--spacing-0-5)',
        '1': 'var(--spacing-1)',
        '1.5': 'var(--spacing-1-5)',
        '2': 'var(--spacing-2)',
        '2.5': 'var(--spacing-2-5)',
        '3': 'var(--spacing-3)',
        '3.5': 'var(--spacing-3-5)',
        '4': 'var(--spacing-4)',
        '5': 'var(--spacing-5)',
        '6': 'var(--spacing-6)',
        '7': 'var(--spacing-7)',
        '8': 'var(--spacing-8)',
        '9': 'var(--spacing-9)',
        '10': 'var(--spacing-10)',
        '11': 'var(--spacing-11)',
        '12': 'var(--spacing-12)',
        '14': 'var(--spacing-14)',
        '16': 'var(--spacing-16)',
        '20': 'var(--spacing-20)',
        '24': 'var(--spacing-24)',
        '28': 'var(--spacing-28)',
        '32': 'var(--spacing-32)',
        '36': 'var(--spacing-36)',
        '40': 'var(--spacing-40)',
        '44': 'var(--spacing-44)',
        '48': 'var(--spacing-48)',
        '52': 'var(--spacing-52)',
        '56': 'var(--spacing-56)',
        '60': 'var(--spacing-60)',
        '64': 'var(--spacing-64)',
        '72': 'var(--spacing-72)',
        '80': 'var(--spacing-80)',
        '96': 'var(--spacing-96)',
      },
      borderRadius: {
        none: 'var(--radius-none)',
        sm: 'var(--radius-sm)',
        DEFAULT: 'var(--radius)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
        '3xl': 'var(--radius-3xl)',
        full: 'var(--radius-full)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
        inner: 'var(--shadow-inner)',
        none: 'none',
      },
      transitionDuration: {
        fastest: 'var(--transition-fastest)',
        faster: 'var(--transition-faster)',
        fast: 'var(--transition-fast)',
        DEFAULT: 'var(--transition-normal)',
        slow: 'var(--transition-slow)',
        slower: 'var(--transition-slower)',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        dropdown: 'var(--z-index-dropdown)',
        sticky: 'var(--z-index-sticky)',
        fixed: 'var(--z-index-fixed)',
        modal: 'var(--z-index-modal)',
        'modal-backdrop': 'var(--z-index-modal-backdrop)',
        popover: 'var(--z-index-popover)',
        tooltip: 'var(--z-index-tooltip)',
      },
      maxWidth: {
        'xs': 'var(--container-max-width-xs)',
        'sm': 'var(--container-max-width-sm)',
        'md': 'var(--container-max-width-md)',
        'lg': 'var(--container-max-width-lg)',
        'xl': 'var(--container-max-width-xl)',
        '2xl': 'var(--container-max-width-2xl)',
        '3xl': 'var(--container-max-width-3xl)',
        '4xl': 'var(--container-max-width-4xl)',
        '5xl': 'var(--container-max-width-5xl)',
        '6xl': 'var(--container-max-width-6xl)',
        '7xl': 'var(--container-max-width-7xl)',
        'full': 'var(--container-max-width-full)',
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addComponents, theme }) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": { width: "100%" },
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "640px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "768px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "1024px",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "1280px",
            },
          },
        },
      ]);
    }),
  ],
};
