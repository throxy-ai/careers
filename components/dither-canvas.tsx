"use client";

import { useEffect, useRef } from "react";

// 8x8 Bayer matrix for ordered dithering
const BAYER_8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];

const PURPLE = [209, 190, 255];
const MINT = [190, 255, 203];
const OPACITY = 0.04;

export function DitherCanvas() {
  const canvas_ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvas_ref.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      canvas.width = Math.ceil(rect.width * dpr);
      canvas.height = Math.ceil(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      draw(canvas);
    };

    const draw = (c: HTMLCanvasElement) => {
      const ctx = c.getContext("2d");
      if (!ctx) return;

      const w = c.width;
      const h = c.height;
      const size = 8;
      const image_data = ctx.createImageData(w, h);
      const data = image_data.data;

      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const bx = x % size;
          const by = y % size;
          const threshold = BAYER_8[by][bx] / 64;
          const noise = (Math.sin(x * 0.1) * Math.cos(y * 0.1) + 1) * 0.5;
          const v = (threshold + noise * 0.3) % 1;

          const [r, g, b] = v > 0.5 ? PURPLE : MINT;
          const i = (y * w + x) * 4;
          data[i] = r;
          data[i + 1] = g;
          data[i + 2] = b;
          data[i + 3] = Math.round(255 * OPACITY);
        }
      }

      ctx.putImageData(image_data, 0, 0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(parent);
    resize();

    return () => ro.disconnect();
  }, []);

  return (
    <canvas
      ref={canvas_ref}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
