export default function imageLoader({ src, width, quality }: { src: string; width: number; quality: number }) {
  if (src.startsWith('/')) {
    // ảnh local trong public, không xử lý tham số
    return `${src}?w=${width}&q=${quality || 75}`;
  }

  // ảnh remote - dùng URL
  const url = new URL(src);
  url.searchParams.set('fm', 'webp');
  url.searchParams.set('w', width.toString());
  url.searchParams.set('q', (quality || 75).toString());
  return url.href;
}
