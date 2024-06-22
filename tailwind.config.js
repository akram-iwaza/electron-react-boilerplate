/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: ['class'],
  theme: {
    screens: {
      iphone: '390px',
      xs: '400px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      default: '#383838',
      night: '#211D1E',
      titleColor: '#01e59b',
      primary: '#00feb6',
      emeralds: '#00d2a0',
      activeColor: '#08a36f',
      primaryDisabled: '#9EDC9A',
      secondary: '#253D4E',
      deepOcean: '#2A3547',
      slightOcean: '#5C6E7A',
      warning: '#FFBD3C',
      tulip: '#E6AA36',
      danger: '#E63946',
      error: '#CC1A27',
      chine: '#CD4630',
      dust: '#61615F',
      gray: '#92928E',
      alpha: '#7A7A77',
      delta: '#AAAAA6',
      beta: '#D9D9D9',
      gama: '#909090',
      gallery: '#EEEEEE',
      lemon: '#EDF7EC',
      nickle: '#C2C2BE',
      border: '#013926',
      blue: '#1B75DE',
      beije: '#F3F3ED',
      pink: '#FFEEF0',
      skeleton: '#E0E0E0',
      background: '#F9F9F6',
      peach: '#FFF8EC',
      feijoa: '#89DA84',
      sky: '#E8F1FC',
      ocean: '#13529B',
      igloo: '#FCFCF9',
      linen: '#FAEDEA',
      honey: '#835600',
      brown: 'rgba(83, 65, 54, 0.50)',
      light: '#FAFAFA',
      grass: '#89DA85',
      vivid: '#02BC2912 ',
      nepal: '#9DB6C51a',
      ziggurat: '#c0d3dd1a',
      Sunglow: '#ffc83c0d',
      Gorse: '#ffeb3c0d',
      backgroundImage: '#efeee9',
      backgroundFav: '#231f20',
      backgroundLogo: '#f7f7f7',
      progressBar: '#6CBF68',
      lightPurple: '#9AA5DC',
      darkPurple: '#6871BF',
      lightYellow: '#FFD789',
      lightRed: '#F5CACF',
      backgroundApp: '#040a08',
      dashBg: '#071311',
      whiteColor: '#d0d6d4',
      iconColor: '#02d5a4',
    },
    extend: {
      backgroundImage: {
        aboutUs:
          'linear-gradient(66deg, #F9F9F6 15.1%, rgba(255, 255, 255, 0.00) 89.61%);',
        partners:
          'linear-gradient(180deg, #EDFBF1 0%, rgba(255, 255, 255, 0.00) 100%);',
      },
      boxShadow: {
        'custom-purple': '0px 5px 15px 0px rgba(236, 133, 249, 0.50)',
        tooltip:
          '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08);',
        upload: '0px -2px 4px 0px rgba(0, 0, 0, 0.05)',
        square: '1px 1px 0px rgba(0, 0, 0, 0.05);',
      },
      backdropFilter: {
        blur: 'blur(25px)',
      },
      screens: {
        tablet: { min: '850px' },
        mac: { min: '1275px' },
        laptop: { min: '1440px' },
        wide: { min: '1680px' },
        ultra: { min: '1920px' },
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '100%': {
            opacity: '0',
          },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'hide-button': 'fadeOut 0.5s forwards',
        'show-button': 'fadeIn 0.5s ease-in',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      fontFamily: {
        primary: 'var(--primary)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar-hide')],
};
