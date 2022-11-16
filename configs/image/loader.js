export default function s7ImageLoader({ src, width, quality }) {
  // differentiate local vs. remote (AEM) image based on first (/) slash
  return src.indexOf('/') === 0 ? src : `https://smartimaging.scene7.com/is/image/kasingh/${src}?w=${width}&fmt=avif-alpha&qlt=${quality || 75}`;
}