// PUIDO Smart Solutions - Standalone & WordPress Export Generators
import { NIGERIAN_STATES } from './nigeriaData';

export const SVG_PUIDO_LOGO = `<svg viewBox="0 0 417 98" height="42" xmlns="http://www.w3.org/2000/svg" style="display:block;max-width:100%;">
  <path d="M0 0 C8.08 -0.06 16.17 -0.12 24.5 -0.19 C27.04 -0.21 29.58 -0.24 32.19 -0.27 C34.22 -0.28 36.25 -0.29 38.28 -0.29 C39.84 -0.32 39.84 -0.32 41.43 -0.34 C48.6 -0.34 54.55 0.28 60.38 4.88 C64.98 10.9 64.37 17.49 64.37 24.76 C64.37 26.8 64.41 28.84 64.45 30.88 C64.49 44.67 64.49 44.67 60 50 C53.83 54.67 47.28 54.53 39.84 54.39 C38.83 54.39 37.82 54.38 36.77 54.38 C33.01 54.36 29.26 54.3 25.5 54.25 C17.08 54.17 8.67 54.09 0 54 C0 36.18 0 18.36 0 0 Z" fill="#030303" transform="translate(283,7)"/>
  <path d="M0 0 C0.77 -0 1.53 -0 2.32 -0 C3.93 -0 5.54 0.01 7.15 0.03 C9.59 0.06 12.02 0.05 14.46 0.04 C22.3 0.05 29.43 0.15 36.66 3.5 C41.18 8.13 41.82 11.44 41.86 17.7 C41.87 18.41 41.87 19.13 41.88 19.87 C41.89 21.38 41.9 22.9 41.9 24.42 C41.91 26.72 41.94 29.03 41.97 31.34 C41.98 32.81 41.98 34.29 41.99 35.76 C42 36.45 42.01 37.13 42.03 37.84 C42 42.46 41.07 45.56 38.66 49.5 C33.15 54.72 28.31 54.67 20.98 54.73 C20.14 54.74 19.3 54.75 18.43 54.76 C16.65 54.77 14.86 54.78 13.08 54.79 C11.26 54.8 9.45 54.82 7.63 54.85 C5 54.9 2.37 54.91 -0.27 54.92 C-1.07 54.94 -1.87 54.96 -2.7 54.97 C-8.39 54.95 -11.68 53.79 -16.34 50.5 C-21.63 44.96 -20.95 36.65 -20.86 29.51 C-20.84 27.5 -20.86 25.49 -20.89 23.47 C-20.83 9.8 -20.83 9.8 -16.34 4.5 C-11.13 0.88 -6.22 -0.1 0 0 Z" fill="#040404" transform="translate(375.33984375,6.50390625)"/>
  <path d="M0 0 C32.01 0 64.02 0 97 0 C97 32.34 97 64.68 97 98 C80.83 98 64.66 98 48 98 C48 94.7 48 91.4 48 88 C60.87 88 73.74 88 87 88 C87 62.26 87 36.52 87 10 C61.59 10 36.18 10 10 10 C10 39.04 10 68.08 10 98 C6.7 98 3.4 98 0 98 C0 65.66 0 33.32 0 0 Z" fill="#050505" transform="translate(0,0)"/>
  <path d="M0 0 C12.1 -0.09 12.1 -0.09 24.44 -0.19 C26.97 -0.21 29.49 -0.24 32.1 -0.27 C34.13 -0.28 36.16 -0.29 38.18 -0.29 C39.22 -0.31 40.25 -0.32 41.32 -0.34 C48.77 -0.34 56.03 0.04 61.54 5.53 C63.55 10.3 63.55 14.44 63.44 19.56 C63.44 20.5 63.45 21.43 63.46 22.39 C63.41 27.34 63.34 31.05 60 35 C53.73 38.74 48.47 39.14 41.3 39.1 C40.46 39.1 39.62 39.09 38.76 39.09 C36.09 39.09 33.42 39.08 30.75 39.06 C28.94 39.06 27.13 39.05 25.31 39.05 C20.87 39.04 16.44 39.02 12 39 C12 43.95 12 48.9 12 54 C8.04 54 4.08 54 0 54 C0 36.18 0 18.36 0 0 Z" fill="#030303" transform="translate(120,7)"/>
  <path d="M0 0 C21.45 0 42.9 0 65 0 C65 21.78 65 43.56 65 66 C54.11 66 43.22 66 32 66 C32 62.7 32 59.4 32 56 C39.59 56 47.18 56 55 56 C55 40.82 55 25.64 55 10 C40.15 10 25.3 10 10 10 C10 33.76 10 57.52 10 82 C6.7 82 3.4 82 0 82 C0 54.94 0 27.88 0 0 Z" fill="#0319EC" transform="translate(16,16)"/>
  <path d="M0 0 C3.96 0 7.92 0 12 0 C12.01 1.16 12.03 2.32 12.04 3.52 C12.1 7.83 12.18 12.13 12.26 16.44 C12.3 18.31 12.32 20.17 12.35 22.04 C12.38 24.72 12.43 27.4 12.49 30.08 C12.49 30.91 12.5 31.74 12.51 32.6 C12.59 35.95 12.75 38.45 14.12 41.53 C16.9 43.71 19.03 43.5 22.53 43.5 C23.82 43.5 25.1 43.5 26.43 43.5 C27.09 43.49 27.76 43.48 28.45 43.47 C30.49 43.44 32.53 43.45 34.57 43.46 C40.97 43.87 40.97 43.87 46.66 41.73 C48.28 39.64 48.39 38.6 48.43 35.99 C48.45 35.19 48.47 34.39 48.49 33.56 C48.5 32.7 48.51 31.84 48.51 30.96 C48.53 30.07 48.55 29.19 48.57 28.28 C48.62 25.46 48.65 22.64 48.69 19.81 C48.72 17.9 48.76 15.99 48.79 14.07 C48.88 9.38 48.94 4.69 49 0 C52.96 0 56.92 0 61 0 C61.1 6.3 61.17 12.6 61.22 18.9 C61.24 21.04 61.27 23.18 61.3 25.32 C61.35 28.4 61.37 31.49 61.39 34.57 C61.41 35.52 61.43 36.48 61.45 37.46 C61.46 43.08 61.12 46.78 57 51 C51.67 54.11 46.16 54.45 40.12 54.4 C39.3 54.4 38.48 54.4 37.64 54.41 C35.92 54.41 34.21 54.4 32.49 54.39 C29.87 54.37 27.26 54.39 24.64 54.41 C22.97 54.41 21.29 54.4 19.62 54.4 C18.84 54.4 18.07 54.41 17.27 54.42 C12.46 54.35 9.18 53.62 5 51 C1.57 47.2 -0.13 44.82 -0.11 39.73 C-0.11 38.85 -0.11 37.97 -0.11 37.06 C-0.11 36.11 -0.1 35.16 -0.1 34.18 C-0.1 33.21 -0.09 32.23 -0.09 31.23 C-0.09 28.11 -0.08 24.99 -0.06 21.88 C-0.06 19.76 -0.05 17.65 -0.05 15.54 C-0.04 10.36 -0.02 5.18 0 0 Z" fill="#040404" transform="translate(191,7)"/>
  <path d="M0 0 C11.22 0 22.44 0 34 0 C34 11.22 34 22.44 34 34 C26.08 34 18.16 34 10 34 C10 44.56 10 55.12 10 66 C6.7 66 3.4 66 0 66 C0 44.22 0 22.44 0 0 Z" fill="#070707" transform="translate(32,32)"/>
  <path d="M0 0 C4.89 -0.12 9.78 -0.21 14.68 -0.27 C16.34 -0.3 18.01 -0.33 19.67 -0.38 C22.06 -0.44 24.46 -0.47 26.86 -0.49 C27.97 -0.53 27.97 -0.53 29.1 -0.57 C32.97 -0.57 34.83 -0.13 37.97 2.2 C40.2 5.27 40.62 6.6 40.59 10.34 C40.59 11.34 40.59 12.34 40.59 13.37 C40.54 14.92 40.54 14.92 40.5 16.5 C40.5 18.05 40.5 18.05 40.51 19.63 C40.38 29.23 40.38 29.23 37 33 C33.37 34.21 30.05 34.12 26.27 34.1 C25.6 34.1 24.94 34.1 24.25 34.09 C21.77 34.09 19.29 34.08 16.81 34.06 C11.26 34.04 5.72 34.02 0 34 C0 22.78 0 11.56 0 0 Z" fill="#F8F8F8" transform="translate(295,17)"/>
  <path d="M0 0 C1.27 -0.01 2.54 -0.02 3.85 -0.03 C13.1 0.04 13.1 0.04 16.86 2.23 C19.55 5.16 19.63 6.57 19.63 10.5 C19.63 11.64 19.63 12.78 19.63 13.96 C19.61 15.15 19.59 16.34 19.56 17.56 C19.57 18.75 19.58 19.94 19.6 21.16 C19.52 29.8 19.52 29.8 17.39 32.9 C14.18 35.13 12.05 35.05 8.15 35.02 C7.5 35.02 6.85 35.02 6.17 35.02 C4.8 35.01 3.42 35 2.05 34.97 C-0.06 34.94 -2.16 34.93 -4.27 34.93 C-14.56 34.86 -14.56 34.86 -18 32.56 C-19.62 27.72 -19.31 22.76 -19.38 17.69 C-19.43 16.05 -19.43 16.05 -19.49 14.39 C-19.54 9.77 -19.47 6.49 -17.35 2.34 C-11.8 -0.6 -6.18 -0.12 0 0 Z" fill="#F8F8F8" transform="translate(386,16.4375)"/>
  <path d="M0 0 C4.75 -0.07 9.5 -0.13 14.25 -0.16 C15.87 -0.18 17.48 -0.2 19.1 -0.23 C21.42 -0.26 23.75 -0.28 26.07 -0.29 C27.15 -0.32 27.15 -0.32 28.25 -0.34 C32.66 -0.34 35.55 0.18 39 3 C39.59 6.03 39.59 6.03 39.5 9.5 C39.49 10.64 39.48 11.79 39.47 12.97 C39 16 39 16 37.98 17.67 C34.84 19.78 31.49 19.37 27.83 19.29 C27.04 19.29 26.24 19.28 25.42 19.28 C22.89 19.26 20.35 19.23 17.81 19.19 C16.09 19.17 14.37 19.16 12.65 19.15 C8.43 19.12 4.22 19.06 0 19 C0 12.73 0 6.46 0 0 Z" fill="#F8F8F8" transform="translate(132,17)"/>
  <path d="M0 0 C3.96 0 7.92 0 12 0 C12 17.82 12 35.64 12 54 C8.04 54 4.08 54 0 54 C0 36.18 0 18.36 0 0 Z" fill="#080808" transform="translate(262,7)"/>
  <path d="M0 0 C21.45 0 42.9 0 65 0 C65 21.78 65 43.56 65 66 C54.11 66 43.22 66 32 66 C32 62.7 32 59.4 32 56 C39.59 56 47.18 56 55 56 C55 40.82 55 25.64 55 10 C40.15 10 25.3 10 10 10 C10 9.67 10 9.34 10 9 C25.51 9 41.02 9 57 9 C57 24.84 57 40.68 57 57 C49.08 57 41.16 57 33 57 C33 59.64 33 62.28 33 65 C42.9 65 52.8 65 63 65 C63 44.21 63 23.42 63 2 C42.54 2 22.08 2 1 2 C1 28.07 1 54.14 1 81 C0.67 81 0.34 81 0 81 C0 54.27 0 27.54 0 0 Z" fill="#1325D0" transform="translate(16,16)"/>
  <path d="M0 0 C4.99 1.48 4.99 1.48 6.38 4 C7.01 8.95 7.12 10.9 4.31 15.06 C1.38 17 1.38 17 -2.25 17.06 C-5.62 16 -5.62 16 -7.56 14.38 C-9.08 10.97 -9.14 8.69 -8.62 5 C-5.94 1.09 -4.8 0 0 0 Z" fill="#1E1E1E" transform="translate(366.625,76)"/>
  <path d="M0 0 C2.78 2.33 2.98 3.83 3.5 7.44 C3 11 3 11 0.94 14 C-2 16 -2 16 -5.62 16.06 C-9 15 -9 15 -10.94 13.44 C-12.48 9.9 -12.81 6.78 -12 3 C-8.39 -1.49 -5.38 -1.59 0 0 Z" fill="#212121" transform="translate(276,77)"/>
  <path d="M0 0 C4.62 0 9.24 0 14 0 C14 4.62 14 9.24 14 14 C9.38 14 4.76 14 0 14 C0 9.38 0 4.76 0 0 Z" fill="#F4F4F4" transform="translate(42,42)"/>
  <path d="M0 0 C1.32 0.33 2.64 0.66 4 1 C5.27 0.72 5.27 0.72 6.56 0.44 C9 0 9 0 12 2 C12.66 1.34 13.32 0.68 14 0 C16.73 -0.35 18.33 -0.45 20.65 1.1 C22.66 3.93 22.29 6.26 22.19 9.69 C22.16 10.87 22.13 12.05 22.11 13.26 C22.07 14.17 22.04 15.07 22 16 C21.01 16 20.02 16 19 16 C18.67 12.04 18.34 8.08 18 4 C16.35 4 14.7 4 13 4 C12.67 7.96 12.34 11.92 12 16 C11.01 16 10.02 16 9 16 C9 11.71 9 7.42 9 3 C7.35 3.33 5.7 3.66 4 4 C3.67 7.96 3.34 11.92 3 16 C2.01 16 1.02 16 0 16 C0 10.72 0 5.44 0 0 Z" fill="#2F2F2F" transform="translate(141,76)"/>
  <path d="M0 0 C5.44 -0.36 5.44 -0.36 7.69 1.09 C9.64 3.94 9.29 6.28 9.19 9.69 C9.16 10.87 9.13 12.05 9.11 13.26 C9.07 14.17 9.04 15.07 9 16 C7.38 16.22 5.75 16.43 4.12 16.62 C2.77 16.8 2.77 16.8 1.38 16.98 C0.2 16.99 0.2 16.99 -1 17 C-3 15 -3 15 -3.25 12.5 C-3 10 -3 10 -1 8 C2.62 7.88 2.62 7.88 6 8 C5.67 6.68 5.34 5.36 5 4 C2.69 4 0.38 4 -2 4 C-1.34 2.68 -0.68 1.36 0 0 Z" fill="#2A2A2A" transform="translate(176,76)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 5.28 3 10.56 3 16 C-6.41 17.34 -6.41 17.34 -8.81 15.94 C-10.58 13.05 -10.29 10.66 -10.19 7.31 C-10.16 6.13 -10.13 4.95 -10.11 3.74 C-10.07 2.83 -10.04 1.93 -10 1 C-9.01 1 -8.02 1 -7 1 C-7 5.29 -7 9.58 -7 14 C-5.02 13.67 -3.04 13.34 -1 13 C-0.67 8.71 -0.34 4.42 0 0 Z" fill="#2C2C2C" transform="translate(313,76)"/>
  <path d="M0 0 C2 2 2 2 2.2 5.04 C2.17 6.22 2.15 7.41 2.12 8.62 C2.11 9.81 2.09 11 2.07 12.23 C2.05 13.14 2.02 14.06 2 15 C1.01 15 0.02 15 -1 15 C-1 10.71 -1 6.42 -1 2 C-2.98 2.33 -4.96 2.66 -7 3 C-7.33 6.96 -7.66 10.92 -8 15 C-8.99 15 -9.98 15 -11 15 C-11 10.05 -11 5.1 -11 0 C-3.88 -1.19 -3.88 -1.19 0 0 Z" fill="#282828" transform="translate(394,77)"/>
  <path d="M0 0 C2.94 0.19 2.94 0.19 3.94 1.19 C4.18 8.71 4.18 8.71 2.94 11.19 C0.06 11.31 0.06 11.31 -3.06 11.19 C-5.06 9.19 -5.06 9.19 -5.31 5.69 C-4.99 1.23 -4.52 0.28 0 0 Z" fill="#F7F7F7" transform="translate(366.0625,78.8125)"/>
  <path d="M0 0 C3.06 0.19 3.06 0.19 5.06 2.19 C5.41 6.24 5.36 7.74 3.06 11.19 C-0.06 11.38 -0.06 11.38 -2.94 11.19 C-4.56 7.93 -4.05 4.8 -3.94 1.19 C-2.94 0.19 -2.94 0.19 0 0 Z" fill="#F8F8F8" transform="translate(270.9375,78.8125)"/>
  <path d="M0 0 C0 0.66 0 1.32 0 2 C-1.98 2 -3.96 2 -6 2 C-6 2.99 -6 3.98 -6 5 C-5.03 5.39 -4.06 5.78 -3.06 6.19 C0 8 0 8 0.88 10.69 C0.94 11.83 0.94 11.83 1 13 C-1.36 15.1 -2.55 15.97 -5.75 16.19 C-6.86 16.09 -6.86 16.09 -8 16 C-8.66 14.68 -9.32 13.36 -10 12 C-7.36 12.33 -4.72 12.66 -2 13 C-2.33 12.01 -2.66 11.02 -3 10 C-3.99 9.55 -4.98 9.09 -6 8.62 C-9 7 -9 7 -10.06 4.5 C-10 2 -10 2 -9 0.12 C-5.9 -1.62 -3.37 -0.7 0 0 Z" fill="#1E1E1E" transform="translate(416,77)"/>
  <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.98 2 3.96 2 6 C3.32 6 4.64 6 6 6 C6 6.66 6 7.32 6 8 C4.68 8 3.36 8 2 8 C2 11.63 2 15.26 2 19 C3.32 19 4.64 19 6 19 C5.67 19.99 5.34 20.98 5 22 C0.12 21.12 0.12 21.12 -1 20 C-1.07 17.98 -1.08 15.96 -1.06 13.94 C-1.05 12.83 -1.04 11.73 -1.04 10.59 C-1.02 9.74 -1.01 8.88 -1 8 C-1.99 8 -2.98 8 -4 8 C-4 7.34 -4 6.68 -4 6 C-3.01 6 -2.02 6 -1 6 C-1.02 5.2 -1.04 4.39 -1.06 3.56 C-1 1 -1 1 0 0 Z" fill="#262626" transform="translate(329,71)"/>
  <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.65 2 3.3 2 5 C3.65 5 5.3 5 7 5 C7 5.66 7 6.32 7 7 C5.35 7 3.7 7 2 7 C2 10.63 2 14.26 2 18 C3.65 18 5.3 18 7 18 C7 18.66 7 19.32 7 20 C4.69 20.69 4.69 20.69 2 21 C0.34 19.88 0.34 19.88 -1 18 C-1.29 15.3 -1.29 15.3 -1.19 12.31 C-1.16 11.32 -1.13 10.32 -1.11 9.3 C-1.07 8.54 -1.04 7.78 -1 7 C-1.66 7 -2.32 7 -3 7 C-3 6.34 -3 5.68 -3 5 C-2.01 5 -1.02 5 0 5 C0 3.35 0 1.7 0 0 Z" fill="#1D1D1D" transform="translate(216,72)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 7.59 3 15.18 3 23 C2.01 23 1.02 23 0 23 C0 15.41 0 7.82 0 0 Z" fill="#141414" transform="translate(289,69)"/>
  <path d="M0 0 C3.62 0.38 3.62 0.38 7 1 C7.33 2.98 7.66 4.96 8 7 C5.48 8.59 4.32 9.04 1.31 8.69 C-1 8 -1 8 -2 7 C-2.19 4.56 -2.19 4.56 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z" fill="#2B2B2B" transform="translate(175,84)"/>
  <path d="M0 0 C1.32 0 2.64 0 4 0 C4 0.99 4 1.98 4 3 C3.2 3.12 2.39 3.25 1.56 3.38 C0.29 3.68 0.29 3.68 -1 4 C-2.22 6.43 -2.32 8.42 -2.56 11.12 C-2.69 12.49 -2.69 12.49 -2.82 13.88 C-2.88 14.58 -2.94 15.28 -3 16 C-3.66 16 -4.32 16 -5 16 C-5 11.05 -5 6.1 -5 1 C-3.68 1 -2.36 1 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z" fill="#020202" transform="translate(201,76)"/>
  <path d="M0 0 C2.38 -0.12 2.38 -0.12 5 0 C7 2 7 2 7.2 5.04 C7.17 6.22 7.15 7.41 7.12 8.62 C7.11 9.81 7.09 11 7.07 12.23 C7.05 13.14 7.02 14.06 7 15 C6.01 15 5.02 15 4 15 C3.96 14.17 3.93 13.34 3.89 12.48 C3.82 11.39 3.76 10.31 3.69 9.19 C3.63 8.11 3.57 7.03 3.51 5.92 C2.97 2.83 2.45 1.87 0 0 Z" fill="#171717" transform="translate(156,77)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 5.28 3 10.56 3 16 C2.01 16 1.02 16 0 16 C0 10.72 0 5.44 0 0 Z" fill="#171717" transform="translate(345,76)"/>
  <path d="M0 0 C0.99 0 1.98 0 3 0 C3 5.28 3 10.56 3 16 C2.34 16 1.68 16 1 16 C1 15.34 1 14.68 1 14 C0.34 13.67 -0.32 13.34 -1 13 C-0.67 8.71 -0.34 4.42 0 0 Z" fill="#161616" transform="translate(313,76)"/>
  <path d="M0 0 C0.66 0 1.32 0 2 0 C3.14 3.42 3.1 6.09 3.06 9.69 C3.05 10.87 3.04 12.05 3.04 13.26 C3.02 14.17 3.01 15.07 3 16 C2.01 16 1.02 16 0 16 C0 10.72 0 5.44 0 0 Z" fill="#151515" transform="translate(141,76)"/>
  <path d="M0 0 C0.33 0 0.66 0 1 0 C1.33 3.3 1.66 6.6 2 10 C4.97 10.5 4.97 10.5 8 11 C8 11.66 8 12.32 8 13 C1.59 12.52 1.59 12.52 -0.94 10.31 C-2.3 7.35 -2.35 5.23 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z" fill="#1F1F1F" transform="translate(266,80)"/>
  <path d="M0 0 C0.66 0 1.32 0 2 0 C3.44 2.88 3.09 5.42 3.06 8.62 C3.05 9.81 3.04 11 3.04 12.23 C3.02 13.14 3.01 14.06 3 15 C2.01 15 1.02 15 0 15 C0 10.05 0 5.1 0 0 Z" fill="#0C0C0C" transform="translate(383,77)"/>
  <path d="M0 0 C2.31 0.33 4.62 0.66 7 1 C7 3.31 7 5.62 7 8 C4.36 6.68 1.72 5.36 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z" fill="#E7E7E7" transform="translate(410,78)"/>
  <path d="M0 0 C3.88 1.88 3.88 1.88 5 3 C5.14 5.67 5.04 8.32 5 11 C4.01 11 3.02 11 2 11 C1.8 8.98 1.61 6.96 1.41 4.95 C1.14 2.77 1.14 2.77 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z" fill="#151515" transform="translate(368,77)"/>
  <path d="M0 0 C0.66 0 1.32 0 2 0 C2 3.3 2 6.6 2 10 C1.34 10 0.68 10 0 10 C-0.33 7.69 -0.66 5.38 -1 3 C-2.65 3 -4.3 3 -6 3 C-6 2.67 -6 2.34 -6 2 C-4.02 2 -2.04 2 0 2 C0 1.34 0 0.68 0 0 Z" fill="#070707" transform="translate(183,82)"/>
  <path d="M0 0 C-0.33 1.65 -0.66 3.3 -1 5 C-2.98 5 -4.96 5 -7 5 C-6.62 3.06 -6.62 3.06 -6 1 C-4 0 -4 0 0 0 Z" fill="#E6E6E6" transform="translate(182,85)"/>
  <path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C-2.23 5.15 -3.28 5.2 -7 5 C-7.66 3.68 -8.32 2.36 -9 1 C-7.7 1.02 -6.4 1.04 -5.06 1.06 C-3.71 1.08 -2.35 1.07 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z" fill="#353535" transform="translate(415,88)"/>
  <path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C-2.23 5.15 -3.28 5.2 -7 5 C-7.66 3.68 -8.32 2.36 -9 1 C-7.7 1.02 -6.4 1.04 -5.06 1.06 C-3.71 1.08 -2.35 1.07 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z" fill="#353535" transform="translate(253,88)"/>
  <path d="M0 0 C2.97 0 5.94 0 9 0 C8.34 1.32 7.68 2.64 7 4 C4.69 3.67 2.38 3.34 0 3 C0 2.01 0 1.02 0 0 Z" fill="#343434" transform="translate(121,89)"/>
  <path d="M0 0 C5.88 0.88 5.88 0.88 7 2 C7.04 3.67 7.04 5.33 7 7 C6.01 6.67 5.02 6.34 4 6 C4 5.01 4 4.02 4 3 C2.68 2.67 1.36 2.34 0 2 C0 1.34 0 0.68 0 0 Z" fill="#1E1E1E" transform="translate(124,83)"/>
  <path d="M0 0 C-0.33 0.99 -0.66 1.98 -1 3 C-4.56 4.19 -4.56 4.19 -8 5 C-8 4.01 -8 3.02 -8 2 C-4.77 -0.15 -3.72 -0.2 0 0 Z" fill="#313131" transform="translate(368,76)"/>
  <path d="M0 0 C-0.33 0.99 -0.66 1.98 -1 3 C-4.44 4.12 -4.44 4.12 -8 5 C-8.99 5.5 -8.99 5.5 -10 6 C-7.82 0.98 -5.41 -0.29 0 0 Z" fill="#2D2D2D" transform="translate(274,76)"/>
  <path d="M0 0 C0.33 0.99 0.66 1.98 1 3 C-1.36 5.1 -2.55 5.97 -5.75 6.19 C-6.86 6.09 -6.86 6.09 -8 6 C-8.33 5.34 -8.66 4.68 -9 4 C-5.54 3.5 -5.54 3.5 -2 3 C-2 2.34 -2 1.68 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z" fill="#262626" transform="translate(371,87)"/>
  <path d="M0 0 C2.12 0.94 2.12 0.94 4 2 C3.67 3.32 3.34 4.64 3 6 C1.35 4.35 -0.3 2.7 -2 1 C-1.34 0.67 -0.68 0.34 0 0 Z" fill="#232323" transform="translate(251,84)"/>
  <path d="M0 0 C1.32 0 2.64 0 4 0 C4 0.99 4 1.98 4 3 C1.69 3.33 -0.62 3.66 -3 4 C-1.75 2 -1.75 2 0 0 Z" fill="#1C1C1C" transform="translate(201,76)"/>
</svg>`;

const NIGERIA_DATA_JSON = JSON.stringify(NIGERIAN_STATES);

export function generateStandaloneHtml(accessKey: string = ''): string {
  const targetKey = accessKey?.trim() ? accessKey.trim() : 'YOUR_ACCESS_KEY_HERE';
  const targetAction = 'https://api.web3forms.com/submit';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PUIDO Smart Solutions - Official Order Portal</title>
  <meta name="description" content="Order your Smart Camera from PUIDO Smart Solutions with prompt 12-48 hour delivery across Nigeria.">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    body {
      background-color: #fafafa;
      color: #1a1a1a;
      padding: 40px 20px;
      display: flex;
      justify-content: center;
      min-height: 100vh;
    }

    .form-container {
      width: 100%;
      max-width: 820px;
      margin: 0 auto;
      background-color: #ffffff;
      padding: 36px 40px;
      border-radius: 12px;
      border: 1px solid #e5e7eb;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
    }

    .brand-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 28px;
      padding-bottom: 20px;
      border-bottom: 1px solid #f3f4f6;
      flex-wrap: wrap;
      gap: 12px;
    }

    .portal-badge {
      font-size: 12px;
      font-weight: 600;
      color: #4b5563;
      background-color: #f3f4f6;
      padding: 4px 12px;
      border-radius: 9999px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    @media (max-width: 640px) {
      body {
        padding: 16px 12px;
      }
      .form-container {
        padding: 22px 18px;
      }
      .brand-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }
    }

    .form-group {
      margin-bottom: 22px;
    }

    .form-label {
      display: block;
      font-weight: 700;
      font-size: 15px;
      color: #111827;
      margin-bottom: 8px;
    }

    .required-star {
      color: #dc2626;
      margin-left: 2px;
    }

    .input-row {
      display: flex;
      gap: 16px;
    }

    .input-col {
      flex: 1;
    }

    input[type="text"],
    input[type="tel"],
    select {
      width: 100%;
      height: 48px;
      padding: 10px 14px;
      font-size: 15px;
      color: #1f2937;
      background-color: #ffffff;
      border: 1px solid #d1d5db;
      border-radius: 4px;
      outline: none;
      transition: border-color 0.15s ease, box-shadow 0.15s ease;
      line-height: normal;
    }

    input::placeholder {
      color: #9ca3af;
      font-weight: 400;
    }

    input:focus,
    select:focus {
      border-color: #0047FF;
      box-shadow: 0 0 0 3px rgba(0, 71, 255, 0.15);
    }

    .select-wrapper {
      position: relative;
    }

    select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      padding-right: 40px;
      cursor: pointer;
    }

    .select-arrow {
      position: absolute;
      right: 14px;
      top: 50%;
      pointer-events: none;
      width: 14px;
      height: 14px;
      border-right: 2px solid #4b5563;
      border-bottom: 2px solid #4b5563;
      transform: translateY(-70%) rotate(45deg);
    }

    .btn-submit {
      background-color: #0047FF;
      color: #ffffff;
      font-size: 15px;
      font-weight: 600;
      padding: 13px 32px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.1s ease;
    }

    .btn-submit:hover {
      background-color: #003be0;
    }

    .btn-submit:active {
      transform: scale(0.98);
    }

    .btn-submit:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .status-alert {
      display: none;
      padding: 16px;
      border-radius: 6px;
      margin-bottom: 24px;
      font-size: 15px;
      line-height: 1.5;
    }

    .status-alert.success {
      background-color: #ecfdf5;
      color: #065f46;
      border: 1px solid #a7f3d0;
    }

    .status-alert.error {
      background-color: #fef2f2;
      color: #991b1b;
      border: 1px solid #fecaca;
    }

    /* Inline Validation Styles */
    .field-error-msg {
      color: #dc2626;
      font-size: 12px;
      margin-top: 5px;
      display: none;
      font-weight: 500;
    }

    input.has-error, select.has-error {
      border-color: #ef4444 !important;
      box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2) !important;
    }

    input.has-success, select.has-success {
      border-color: #10b981 !important;
    }

    .form-hint {
      font-size: 11px;
      color: #6b7280;
      margin-top: 4px;
    }

    @media (max-width: 640px) {
      .input-row {
        flex-direction: column;
        gap: 16px;
      }
    }
  </style>
</head>
<body>

  <div class="form-container">
    <!-- PUIDO Smart Solutions Brand Header -->
    <div class="brand-header">
      ${SVG_PUIDO_LOGO}
      <span class="portal-badge">Official Order Portal</span>
    </div>

    <div id="statusAlert" class="status-alert"></div>

    <form id="orderForm" action="${targetAction}" method="POST" novalidate>
      <!-- Web3Forms Access Key & Configuration -->
      <input type="hidden" name="access_key" value="${targetKey}">
      <input type="hidden" name="subject" value="New Smart Camera Order - PUIDO Smart Solutions">
      <input type="hidden" name="from_name" value="PUIDO Smart Solutions Order Portal">
      <input type="hidden" name="redirect" value="https://puidosmartsolutions.com/cameratyp/">
      <!-- Anti-Spam Botcheck Honeypot -->
      <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

      <!-- Full Name -->
      <div class="form-group">
        <label class="form-label">Full Name <span class="required-star">*</span></label>
        <div class="input-row">
          <div class="input-col">
            <input type="text" id="fn-first" name="First Name" placeholder="First Name" required>
            <div id="err-first" class="field-error-msg"></div>
          </div>
          <div class="input-col">
            <input type="text" id="fn-last" name="Last Name" placeholder="Last Name" required>
            <div id="err-last" class="field-error-msg"></div>
          </div>
        </div>
      </div>

      <!-- State and LGA -->
      <div class="form-group">
        <div class="input-row">
          <div class="input-col">
            <label class="form-label">State <span class="required-star">*</span></label>
            <div class="select-wrapper">
              <select id="fn-state" name="State" required>
                <option value="" disabled selected>Select State</option>
              </select>
              <div class="select-arrow"></div>
            </div>
            <div id="err-state" class="field-error-msg"></div>
          </div>
          <div class="input-col">
            <label class="form-label">Local Government (LGA) <span class="required-star">*</span></label>
            <div class="select-wrapper">
              <select id="fn-lga" name="Local Government (LGA)" required>
                <option value="" disabled selected>Select State First</option>
              </select>
              <div class="select-arrow"></div>
            </div>
            <div id="err-lga" class="field-error-msg"></div>
          </div>
        </div>
      </div>

      <!-- Closest Interstate Park -->
      <div class="form-group">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
          <label class="form-label" style="margin-bottom: 0;">Closest Interstate Park <span class="required-star">*</span></label>
          <span class="form-hint" style="margin-top: 0;">Motor Park / Bus Terminal for dispatch</span>
        </div>
        <input type="text" id="fn-closest-park" name="Closest Interstate Park" placeholder="e.g. Ojota Motor Park, Jibowu Park, Utako Park, Peace Mass Transit, God is Good Motors" required>
        <div id="err-closest-park" class="field-error-msg"></div>
      </div>

      <!-- Detailed Delivery Address -->
      <div class="form-group">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
          <label class="form-label" style="margin-bottom: 0;">Detailed Delivery Address <span class="required-star">*</span></label>
          <span class="form-hint" style="margin-top: 0;">Street, House No, Estate, or Landmark</span>
        </div>
        <input type="text" id="fn-address" name="Delivery Address" placeholder="e.g. 14 Admiralty Way, Lekki Phase 1, Opposite Hubmart" required>
        <div id="err-address" class="field-error-msg"></div>
      </div>

      <!-- Phone Number & Alternative Phone -->
      <div class="form-group">
        <div class="input-row">
          <div class="input-col">
            <label class="form-label">Phone Number <span class="required-star">*</span></label>
            <input type="tel" id="fn-phone" name="Phone Number" placeholder="e.g. 08012345678" required>
            <div id="err-phone" class="field-error-msg"></div>
          </div>
          <div class="input-col">
            <label class="form-label">Alternative Phone <span style="font-weight: 400; font-size: 13px; color: #6b7280;">(Optional)</span></label>
            <input type="tel" id="fn-altphone" name="Alternative Phone" placeholder="Secondary phone">
            <div id="err-altphone" class="field-error-msg"></div>
          </div>
        </div>
      </div>

      <!-- Quantity -->
      <div class="form-group">
        <label class="form-label">Quantity <span class="required-star">*</span></label>
        <div class="select-wrapper">
          <select id="fn-quantity" name="Quantity" required>
            <option value="" disabled selected>Select Quantity</option>
            <option value="1">1 Unit</option>
            <option value="2">2 Units</option>
            <option value="3">3 Units</option>
            <option value="4">4 Units</option>
            <option value="5">5 Units</option>
            <option value="6">6 Units</option>
            <option value="7">7 Units</option>
            <option value="8">8 Units</option>
            <option value="9">9 Units</option>
            <option value="10+">10 or more</option>
          </select>
          <div class="select-arrow"></div>
        </div>
        <div id="err-quantity" class="field-error-msg"></div>
      </div>

      <!-- Are you ready to receive your order within 12- 48 Hours? -->
      <div class="form-group">
        <label class="form-label">Are you ready to receive your order within 12- 48 Hours? <span class="required-star">*</span></label>
        <div class="select-wrapper">
          <select id="fn-readiness" name="Ready for 12-48hr Delivery" required>
            <option value="" disabled selected>Select Your Answer</option>
            <option value="Yes, I am ready to receive it within 12 - 48 Hours">Yes, I am ready to receive it within 12 - 48 Hours</option>
            <option value="No, please contact me to schedule later">No, please contact me to schedule later</option>
            <option value="Yes, urgent delivery needed today">Yes, urgent delivery needed today</option>
          </select>
          <div class="select-arrow"></div>
        </div>
        <div id="err-readiness" class="field-error-msg"></div>
      </div>

      <!-- Submit button -->
      <div class="form-group" style="margin-top: 32px;">
        <button type="submit" id="submitBtn" class="btn-submit">Place Order</button>
      </div>
    </form>
  </div>

  <script>
    (function () {
      var stateData = ${NIGERIA_DATA_JSON};
      var stateSelect = document.getElementById('fn-state');
      var lgaSelect = document.getElementById('fn-lga');

      // Populate Nigerian States
      if (stateSelect) {
        Object.keys(stateData).forEach(function (st) {
          var opt = document.createElement('option');
          opt.value = st;
          opt.textContent = st;
          stateSelect.appendChild(opt);
        });

        stateSelect.addEventListener('change', function () {
          var selectedState = stateSelect.value;
          lgaSelect.innerHTML = '';
          var defOpt = document.createElement('option');
          defOpt.value = '';
          defOpt.disabled = true;
          defOpt.selected = true;
          defOpt.textContent = selectedState ? 'Select LGA in ' + selectedState : 'Select State First';
          lgaSelect.appendChild(defOpt);

          var lgas = stateData[selectedState] || [];
          lgas.forEach(function (lga) {
            var lgaOpt = document.createElement('option');
            lgaOpt.value = lga;
            lgaOpt.textContent = lga;
            lgaSelect.appendChild(lgaOpt);
          });
          var otherOpt = document.createElement('option');
          otherOpt.value = 'Other / Not in List';
          otherOpt.textContent = 'Other / Not in List';
          lgaSelect.appendChild(otherOpt);
        });
      }

      var form = document.getElementById('orderForm');
      var alertBox = document.getElementById('statusAlert');
      var submitBtn = document.getElementById('submitBtn');
      if (!form) return;

      var fields = {
        firstName: document.getElementById('fn-first'),
        lastName: document.getElementById('fn-last'),
        state: document.getElementById('fn-state'),
        lga: document.getElementById('fn-lga'),
        closestPark: document.getElementById('fn-closest-park'),
        address: document.getElementById('fn-address'),
        phone: document.getElementById('fn-phone'),
        altPhone: document.getElementById('fn-altphone'),
        quantity: document.getElementById('fn-quantity'),
        readiness: document.getElementById('fn-readiness')
      };

      var errorContainers = {
        firstName: document.getElementById('err-first'),
        lastName: document.getElementById('err-last'),
        state: document.getElementById('err-state'),
        lga: document.getElementById('err-lga'),
        closestPark: document.getElementById('err-closest-park'),
        address: document.getElementById('err-address'),
        phone: document.getElementById('err-phone'),
        altPhone: document.getElementById('err-altphone'),
        quantity: document.getElementById('err-quantity'),
        readiness: document.getElementById('err-readiness')
      };

      function validateField(name, val) {
        var trimmed = (val || '').trim();
        var nameRegex = /^[a-zA-Z\u00C0-\u017F\s'-]+$/;
        var phoneRegex = /^[+]?[0-9\s\-().]{7,25}$/;

        if (name === 'firstName') {
          if (!trimmed) return 'First name is required';
          if (trimmed.length < 2) return 'First name must be at least 2 characters';
          if (!nameRegex.test(trimmed)) return 'First name can only contain letters and hyphens';
        }
        if (name === 'lastName') {
          if (!trimmed) return 'Last name is required';
          if (trimmed.length < 2) return 'Last name must be at least 2 characters';
          if (!nameRegex.test(trimmed)) return 'Last name can only contain letters and hyphens';
        }
        if (name === 'state') {
          if (!trimmed) return 'Please select your delivery state';
        }
        if (name === 'lga') {
          if (!trimmed) return 'Please select your Local Government Area (LGA)';
        }
        if (name === 'closestPark') {
          if (!trimmed) return 'Please enter the closest interstate motor park or bus terminal';
          if (trimmed.length < 3) return 'Please enter a valid park name (at least 3 characters)';
        }
        if (name === 'address') {
          if (!trimmed) return 'Detailed delivery address is required';
          if (trimmed.length < 6) return 'Please enter a more detailed address (at least 6 characters)';
          if (!/[a-zA-Z]/.test(trimmed)) return 'Please include a street name, house number, or landmark';
        }
        if (name === 'phone') {
          if (!trimmed) return 'Primary phone number is required';
          if (!phoneRegex.test(trimmed)) return 'Phone number contains invalid characters (digits, +, - only)';
          var digits = trimmed.replace(/\\D/g, '');
          if (digits.length < 7 || digits.length > 15) return 'Please enter a valid phone number (7 to 15 digits)';
        }
        if (name === 'altPhone') {
          if (trimmed) {
            if (!phoneRegex.test(trimmed)) return 'Alternative phone contains invalid characters';
            var altDigits = trimmed.replace(/\\D/g, '');
            if (altDigits.length < 7 || altDigits.length > 15) return 'Please enter a valid phone number (7 to 15 digits)';
            var pDigits = (fields.phone.value || '').replace(/\\D/g, '');
            if (pDigits && pDigits === altDigits) return 'Alternative phone should be different from primary phone';
          }
        }
        if (name === 'quantity') {
          if (!trimmed) return 'Please select a quantity';
        }
        if (name === 'readiness') {
          if (!trimmed) return 'Please select your delivery readiness timeframe';
        }
        return '';
      }

      function showFieldError(key, msg) {
        var el = fields[key];
        var errEl = errorContainers[key];
        if (!el || !errEl) return;
        if (msg) {
          el.classList.add('has-error');
          el.classList.remove('has-success');
          errEl.textContent = msg;
          errEl.style.display = 'block';
        } else {
          el.classList.remove('has-error');
          if (el.value.trim().length > 0) {
            el.classList.add('has-success');
          } else {
            el.classList.remove('has-success');
          }
          errEl.textContent = '';
          errEl.style.display = 'none';
        }
      }

      // Attach dynamic validation
      Object.keys(fields).forEach(function (key) {
        var el = fields[key];
        if (!el) return;
        ['input', 'change', 'blur'].forEach(function (evt) {
          el.addEventListener(evt, function () {
            var msg = validateField(key, el.value);
            showFieldError(key, msg);
          });
        });
      });

      form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate all fields
        var hasError = false;
        var firstBadEl = null;

        Object.keys(fields).forEach(function (key) {
          var el = fields[key];
          var msg = validateField(key, el ? el.value : '');
          if (msg) {
            showFieldError(key, msg);
            hasError = true;
            if (!firstBadEl && el) firstBadEl = el;
          }
        });

        if (hasError) {
          if (firstBadEl) {
            firstBadEl.focus();
            firstBadEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          return;
        }
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing Order...';
        alertBox.style.display = 'none';

        var formData = new FormData(form);

        try {
          var response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });

          var data = await response.json().catch(function() { return null; });

          if (response.ok && data && data.success) {
            alertBox.className = 'status-alert success';
            alertBox.textContent = 'Thank you! Your order has been placed successfully. Redirecting you now...';
            alertBox.style.display = 'block';
            form.reset();
            setTimeout(function() {
              window.location.href = 'https://puidosmartsolutions.com/cameratyp/';
            }, 800);
          } else {
            alertBox.className = 'status-alert error';
            var errorMsg = (data && data.message) ? data.message : 'Oops! There was a problem submitting your order. Please check the details and try again.';
            alertBox.textContent = errorMsg;
            alertBox.style.display = 'block';
          }
        } catch (err) {
          alertBox.className = 'status-alert error';
          alertBox.textContent = 'Network error. Please check your internet connection and try again.';
          alertBox.style.display = 'block';
        } finally {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Place Order';
        }
      });
    })();
  </script>
</body>
</html>`;
}

/**
 * Scoped snippet for pasting into WordPress "Custom HTML" block or widget.
 * All styles are scoped under .puido-order-form-wrap to prevent any bleed into WordPress.
 */
export function generateWordpressEmbedHtml(accessKey: string = ''): string {
  const targetKey = accessKey?.trim() ? accessKey.trim() : 'YOUR_ACCESS_KEY_HERE';
  const targetAction = 'https://api.web3forms.com/submit';

  return `<!-- 
  PUIDO Smart Solutions — Order Form
  Paste this WHOLE block into a WordPress "Custom HTML" block (or the Custom HTML widget).
  Do NOT paste it as a full page — this version has no <html>/<head>/<body>,
  and every style is scoped under .puido-order-form-wrap so it can't affect
  the rest of your WordPress site.
-->

<div class="puido-order-form-wrap">
  <div class="form-container">
    <!-- PUIDO Smart Solutions Brand Header -->
    <div class="brand-header">
      ${SVG_PUIDO_LOGO}
      <span class="portal-badge">Official Order Portal</span>
    </div>

    <div class="puido-status-alert" id="puidoStatusAlert"></div>

    <form class="puido-form" id="puidoOrderForm" action="${targetAction}" method="POST" novalidate>
      <!-- Web3Forms Access Key & Configuration -->
      <input type="hidden" name="access_key" value="${targetKey}">
      <input type="hidden" name="subject" value="New Smart Camera Order - PUIDO Smart Solutions">
      <input type="hidden" name="from_name" value="PUIDO Smart Solutions Order Portal">
      <input type="hidden" name="redirect" value="https://puidosmartsolutions.com/cameratyp/">
      <!-- Anti-Spam Botcheck Honeypot -->
      <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

      <!-- Full Name -->
      <div class="puido-form-group">
        <label class="puido-form-label">Full Name <span class="puido-required-star">*</span></label>
        <div class="puido-input-row">
          <div class="puido-input-col">
            <input type="text" id="wp-fn-first" name="First Name" placeholder="First Name" required>
            <div id="wp-err-first" class="puido-field-error-msg"></div>
          </div>
          <div class="puido-input-col">
            <input type="text" id="wp-fn-last" name="Last Name" placeholder="Last Name" required>
            <div id="wp-err-last" class="puido-field-error-msg"></div>
          </div>
        </div>
      </div>

      <!-- State and LGA -->
      <div class="puido-form-group">
        <div class="puido-input-row">
          <div class="puido-input-col">
            <label class="puido-form-label">State <span class="puido-required-star">*</span></label>
            <div class="puido-select-wrapper">
              <select id="wp-fn-state" name="State" required>
                <option value="" disabled selected>Select State</option>
              </select>
              <div class="puido-select-arrow"></div>
            </div>
            <div id="wp-err-state" class="puido-field-error-msg"></div>
          </div>
          <div class="puido-input-col">
            <label class="puido-form-label">Local Government (LGA) <span class="puido-required-star">*</span></label>
            <div class="puido-select-wrapper">
              <select id="wp-fn-lga" name="Local Government (LGA)" required>
                <option value="" disabled selected>Select State First</option>
              </select>
              <div class="puido-select-arrow"></div>
            </div>
            <div id="wp-err-lga" class="puido-field-error-msg"></div>
          </div>
        </div>
      </div>

      <!-- Closest Interstate Park -->
      <div class="puido-form-group">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
          <label class="puido-form-label" style="margin-bottom: 0;">Closest Interstate Park <span class="puido-required-star">*</span></label>
          <span class="puido-form-hint" style="margin-top: 0;">Motor Park / Bus Terminal for dispatch</span>
        </div>
        <input type="text" id="wp-fn-closest-park" name="Closest Interstate Park" placeholder="e.g. Ojota Motor Park, Jibowu Park, Utako Park, Peace Mass Transit, God is Good Motors" required>
        <div id="wp-err-closest-park" class="puido-field-error-msg"></div>
      </div>

      <!-- Detailed Delivery Address -->
      <div class="puido-form-group">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
          <label class="puido-form-label" style="margin-bottom: 0;">Detailed Delivery Address <span class="puido-required-star">*</span></label>
          <span class="puido-form-hint" style="margin-top: 0;">Street, House No, Estate, or Landmark</span>
        </div>
        <input type="text" id="wp-fn-address" name="Delivery Address" placeholder="e.g. 14 Admiralty Way, Lekki Phase 1, Opposite Hubmart" required>
        <div id="wp-err-address" class="puido-field-error-msg"></div>
      </div>

      <!-- Phone Number & Alternative Phone -->
      <div class="puido-form-group">
        <div class="puido-input-row">
          <div class="puido-input-col">
            <label class="puido-form-label">Phone Number <span class="puido-required-star">*</span></label>
            <input type="tel" id="wp-fn-phone" name="Phone Number" placeholder="e.g. 08012345678" required>
            <div id="wp-err-phone" class="puido-field-error-msg"></div>
          </div>
          <div class="puido-input-col">
            <label class="puido-form-label">Alternative Phone <span style="font-weight: 400; font-size: 13px; color: #6b7280;">(Optional)</span></label>
            <input type="tel" id="wp-fn-altphone" name="Alternative Phone" placeholder="Secondary phone">
            <div id="wp-err-altphone" class="puido-field-error-msg"></div>
          </div>
        </div>
      </div>

      <!-- Quantity -->
      <div class="puido-form-group">
        <label class="puido-form-label">Quantity <span class="puido-required-star">*</span></label>
        <div class="puido-select-wrapper">
          <select id="wp-fn-quantity" name="Quantity" required>
            <option value="" disabled selected>Select Quantity</option>
            <option value="1">1 Unit</option>
            <option value="2">2 Units</option>
            <option value="3">3 Units</option>
            <option value="4">4 Units</option>
            <option value="5">5 Units</option>
            <option value="6">6 Units</option>
            <option value="7">7 Units</option>
            <option value="8">8 Units</option>
            <option value="9">9 Units</option>
            <option value="10+">10 or more</option>
          </select>
          <div class="puido-select-arrow"></div>
        </div>
        <div id="wp-err-quantity" class="puido-field-error-msg"></div>
      </div>

      <!-- Are you ready to receive your order within 12-48 Hours? -->
      <div class="puido-form-group">
        <label class="puido-form-label">Are you ready to receive your order within 12-48 Hours? <span class="puido-required-star">*</span></label>
        <div class="puido-select-wrapper">
          <select id="wp-fn-readiness" name="Ready for 12-48hr Delivery" required>
            <option value="" disabled selected>Select Your Answer</option>
            <option value="Yes, I am ready to receive it within 12 - 48 Hours">Yes, I am ready to receive it within 12 - 48 Hours</option>
            <option value="No, please contact me to schedule later">No, please contact me to schedule later</option>
            <option value="Yes, urgent delivery needed today">Yes, urgent delivery needed today</option>
          </select>
          <div class="puido-select-arrow"></div>
        </div>
        <div id="wp-err-readiness" class="puido-field-error-msg"></div>
      </div>

      <!-- Submit Button -->
      <div class="puido-form-group" style="margin-top: 32px;">
        <button type="submit" id="puidoSubmitBtn" class="puido-btn-submit">Place Order</button>
      </div>
    </form>
  </div>
</div>

<style>
  /* 
   * AUTO-HIDE WORDPRESS PAGE TITLE:
   * Suppresses default theme page titles (.entry-title, header.entry-header, .wp-block-post-title)
   * so only the clean PUIDO Order Portal shows.
   */
  .entry-title,
  .page-title,
  h1.entry-title,
  h1.page-title,
  header.entry-header,
  header.page-header,
  .wp-block-post-title,
  .post-header,
  .page .entry-header,
  .page .entry-title,
  .ast-page-header,
  .elementor-page-title,
  .nv-page-title,
  .entry-header-wrap,
  .entry-title-wrap {
    display: none !important;
  }

  /* Everything below is scoped under .puido-order-form-wrap so it
     cannot change fonts, spacing, or form styling anywhere else on your site. */
  .puido-order-form-wrap {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    display: flex;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
    width: 100%;
  }
  .puido-order-form-wrap *,
  .puido-order-form-wrap *::before,
  .puido-order-form-wrap *::after {
    box-sizing: border-box;
  }

  .puido-order-form-wrap .form-container {
    width: 100%;
    max-width: 820px;
    margin: 0 auto;
    background-color: #ffffff;
    padding: 32px 36px;
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  }

  .puido-order-form-wrap .brand-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 28px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f3f4f6;
    flex-wrap: wrap;
    gap: 12px;
  }

  .puido-order-form-wrap .portal-badge {
    font-size: 12px;
    font-weight: 600;
    color: #4b5563;
    background-color: #f3f4f6;
    padding: 4px 12px;
    border-radius: 9999px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .puido-order-form-wrap .puido-form-group {
    margin-bottom: 22px;
  }

  .puido-order-form-wrap .puido-form-label {
    display: block;
    font-weight: 700;
    font-size: 15px;
    color: #111827;
    margin-bottom: 8px;
  }

  .puido-order-form-wrap .puido-required-star {
    color: #dc2626;
    margin-left: 2px;
  }

  .puido-order-form-wrap .puido-input-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .puido-order-form-wrap .puido-input-col {
    flex: 1;
    min-width: 200px;
  }

  .puido-order-form-wrap input[type="text"],
  .puido-order-form-wrap input[type="tel"],
  .puido-order-form-wrap select {
    width: 100%;
    height: 48px;
    padding: 10px 14px;
    font-size: 15px;
    color: #1f2937;
    background-color: #ffffff;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    outline: none;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
    line-height: normal;
  }

  .puido-order-form-wrap input::placeholder {
    color: #9ca3af;
    font-weight: 400;
  }

  .puido-order-form-wrap input:focus,
  .puido-order-form-wrap select:focus {
    border-color: #0047FF;
    box-shadow: 0 0 0 3px rgba(0, 71, 255, 0.15);
  }

  .puido-order-form-wrap .puido-select-wrapper {
    position: relative;
  }

  .puido-order-form-wrap select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-right: 40px;
    cursor: pointer;
  }

  .puido-order-form-wrap .puido-select-arrow {
    position: absolute;
    right: 14px;
    top: 50%;
    pointer-events: none;
    width: 14px;
    height: 14px;
    border-right: 2px solid #4b5563;
    border-bottom: 2px solid #4b5563;
    transform: translateY(-70%) rotate(45deg);
  }

  .puido-order-form-wrap .puido-btn-submit {
    background-color: #0047FF;
    color: #ffffff;
    font-size: 15px;
    font-weight: 600;
    padding: 12px 28px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.1s ease;
  }

  .puido-order-form-wrap .puido-btn-submit:hover {
    background-color: #003be0;
  }

  .puido-order-form-wrap .puido-btn-submit:active {
    transform: scale(0.98);
  }

  .puido-order-form-wrap .puido-btn-submit:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .puido-order-form-wrap .puido-status-alert {
    display: none;
    padding: 16px;
    border-radius: 6px;
    margin-bottom: 24px;
    font-size: 15px;
  }

  .puido-order-form-wrap .puido-status-alert.success {
    background-color: #ecfdf5;
    color: #065f46;
    border: 1px solid #a7f3d0;
  }

  .puido-order-form-wrap .puido-status-alert.error {
    background-color: #fef2f2;
    color: #991b1b;
    border: 1px solid #fecaca;
  }

  /* Inline Validation Styles */
  .puido-order-form-wrap .puido-field-error-msg {
    color: #dc2626;
    font-size: 12px;
    margin-top: 5px;
    display: none;
    font-weight: 500;
  }

  .puido-order-form-wrap input.has-error,
  .puido-order-form-wrap select.has-error {
    border-color: #ef4444 !important;
    box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2) !important;
  }

  .puido-order-form-wrap input.has-success,
  .puido-order-form-wrap select.has-success {
    border-color: #10b981 !important;
  }

  .puido-order-form-wrap .puido-form-hint {
    font-size: 11px;
    color: #6b7280;
    margin-top: 4px;
  }

  @media (max-width: 640px) {
    .puido-order-form-wrap .form-container {
      padding: 20px 16px;
    }
  }
</style>

<script>
  (function () {
    // Automatically hide theme page titles outside the form
    try {
      var titleSelectors = [
        '.entry-title', '.page-title', 'h1.entry-title', 'h1.page-title',
        'header.entry-header', 'header.page-header', '.wp-block-post-title',
        '.elementor-page-title', '.nv-page-title'
      ];
      titleSelectors.forEach(function (sel) {
        var titles = document.querySelectorAll(sel);
        titles.forEach(function (t) {
          if (!t.closest('.puido-order-form-wrap')) {
            t.style.display = 'none';
          }
        });
      });
    } catch (err) {}

    var stateData = ${NIGERIA_DATA_JSON};
    var stateSelect = document.getElementById('wp-fn-state');
    var lgaSelect = document.getElementById('wp-fn-lga');

    // Populate Nigerian States
    if (stateSelect) {
      Object.keys(stateData).forEach(function (st) {
        var opt = document.createElement('option');
        opt.value = st;
        opt.textContent = st;
        stateSelect.appendChild(opt);
      });

      stateSelect.addEventListener('change', function () {
        var selectedState = stateSelect.value;
        lgaSelect.innerHTML = '';
        var defOpt = document.createElement('option');
        defOpt.value = '';
        defOpt.disabled = true;
        defOpt.selected = true;
        defOpt.textContent = selectedState ? 'Select LGA in ' + selectedState : 'Select State First';
        lgaSelect.appendChild(defOpt);

        var lgas = stateData[selectedState] || [];
        lgas.forEach(function (lga) {
          var lgaOpt = document.createElement('option');
          lgaOpt.value = lga;
          lgaOpt.textContent = lga;
          lgaSelect.appendChild(lgaOpt);
        });
        var otherOpt = document.createElement('option');
        otherOpt.value = 'Other / Not in List';
        otherOpt.textContent = 'Other / Not in List';
        lgaSelect.appendChild(otherOpt);
      });
    }

    var form = document.getElementById('puidoOrderForm');
    var alertBox = document.getElementById('puidoStatusAlert');
    var submitBtn = document.getElementById('puidoSubmitBtn');
    if (!form) return;

    var fields = {
      firstName: document.getElementById('wp-fn-first'),
      lastName: document.getElementById('wp-fn-last'),
      state: document.getElementById('wp-fn-state'),
      lga: document.getElementById('wp-fn-lga'),
      closestPark: document.getElementById('wp-fn-closest-park'),
      address: document.getElementById('wp-fn-address'),
      phone: document.getElementById('wp-fn-phone'),
      altPhone: document.getElementById('wp-fn-altphone'),
      quantity: document.getElementById('wp-fn-quantity'),
      readiness: document.getElementById('wp-fn-readiness')
    };

    var errorContainers = {
      firstName: document.getElementById('wp-err-first'),
      lastName: document.getElementById('wp-err-last'),
      state: document.getElementById('wp-err-state'),
      lga: document.getElementById('wp-err-lga'),
      closestPark: document.getElementById('wp-err-closest-park'),
      address: document.getElementById('wp-err-address'),
      phone: document.getElementById('wp-err-phone'),
      altPhone: document.getElementById('wp-err-altphone'),
      quantity: document.getElementById('wp-err-quantity'),
      readiness: document.getElementById('wp-err-readiness')
    };

    function validateField(name, val) {
      var trimmed = (val || '').trim();
      var nameRegex = /^[a-zA-Z\u00C0-\u017F\s'-]+$/;
      var phoneRegex = /^[+]?[0-9\s\-().]{7,25}$/;

      if (name === 'firstName') {
        if (!trimmed) return 'First name is required';
        if (trimmed.length < 2) return 'First name must be at least 2 characters';
        if (!nameRegex.test(trimmed)) return 'First name can only contain letters and hyphens';
      }
      if (name === 'lastName') {
        if (!trimmed) return 'Last name is required';
        if (trimmed.length < 2) return 'Last name must be at least 2 characters';
        if (!nameRegex.test(trimmed)) return 'Last name can only contain letters and hyphens';
      }
      if (name === 'state') {
        if (!trimmed) return 'Please select your delivery state';
      }
      if (name === 'lga') {
        if (!trimmed) return 'Please select your Local Government Area (LGA)';
      }
      if (name === 'closestPark') {
        if (!trimmed) return 'Please enter the closest interstate motor park or bus terminal';
        if (trimmed.length < 3) return 'Please enter a valid park name (at least 3 characters)';
      }
      if (name === 'address') {
        if (!trimmed) return 'Detailed delivery address is required';
        if (trimmed.length < 6) return 'Please enter a more detailed address (at least 6 characters)';
        if (!/[a-zA-Z]/.test(trimmed)) return 'Please include a street name, house number, or landmark';
      }
      if (name === 'phone') {
        if (!trimmed) return 'Primary phone number is required';
        if (!phoneRegex.test(trimmed)) return 'Phone number contains invalid characters (digits, +, - only)';
        var digits = trimmed.replace(/\\D/g, '');
        if (digits.length < 7 || digits.length > 15) return 'Please enter a valid phone number (7 to 15 digits)';
      }
      if (name === 'altPhone') {
        if (trimmed) {
          if (!phoneRegex.test(trimmed)) return 'Alternative phone contains invalid characters';
          var altDigits = trimmed.replace(/\\D/g, '');
          if (altDigits.length < 7 || altDigits.length > 15) return 'Please enter a valid phone number (7 to 15 digits)';
          var pDigits = (fields.phone.value || '').replace(/\\D/g, '');
          if (pDigits && pDigits === altDigits) return 'Alternative phone should be different from primary phone';
        }
      }
      if (name === 'quantity') {
        if (!trimmed) return 'Please select a quantity';
      }
      if (name === 'readiness') {
        if (!trimmed) return 'Please select your delivery readiness timeframe';
      }
      return '';
    }

    function showFieldError(key, msg) {
      var el = fields[key];
      var errEl = errorContainers[key];
      if (!el || !errEl) return;
      if (msg) {
        el.classList.add('has-error');
        el.classList.remove('has-success');
        errEl.textContent = msg;
        errEl.style.display = 'block';
      } else {
        el.classList.remove('has-error');
        if (el.value.trim().length > 0) {
          el.classList.add('has-success');
        } else {
          el.classList.remove('has-success');
        }
        errEl.textContent = '';
        errEl.style.display = 'none';
      }
    }

    // Attach dynamic validation
    Object.keys(fields).forEach(function (key) {
      var el = fields[key];
      if (!el) return;
      ['input', 'change', 'blur'].forEach(function (evt) {
        el.addEventListener(evt, function () {
          var msg = validateField(key, el.value);
          showFieldError(key, msg);
        });
      });
    });

    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Validate all fields
      var hasError = false;
      var firstBadEl = null;

      Object.keys(fields).forEach(function (key) {
        var el = fields[key];
        var msg = validateField(key, el ? el.value : '');
        if (msg) {
          showFieldError(key, msg);
          hasError = true;
          if (!firstBadEl && el) firstBadEl = el;
        }
      });

      if (hasError) {
        if (firstBadEl) {
          firstBadEl.focus();
          firstBadEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing Order...';
      alertBox.style.display = 'none';

      var formData = new FormData(form);

      try {
        var response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        var data = await response.json().catch(function () { return null; });

        if (response.ok && data && data.success) {
          alertBox.className = 'puido-status-alert success';
          alertBox.textContent = 'Thank you! Your order has been placed successfully. Redirecting you now...';
          alertBox.style.display = 'block';
          form.reset();
          setTimeout(function () {
            window.location.href = 'https://puidosmartsolutions.com/cameratyp/';
          }, 800);
        } else {
          alertBox.className = 'puido-status-alert error';
          var errorMsg = (data && data.message) ? data.message : 'Oops! There was a problem submitting your form. Please try again.';
          alertBox.textContent = errorMsg;
          alertBox.style.display = 'block';
        }
      } catch (err) {
        alertBox.className = 'puido-status-alert error';
        alertBox.textContent = 'Network error. Please check your connection and try again.';
        alertBox.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Place Order';
      }
    });
  })();
</script>`;
}
