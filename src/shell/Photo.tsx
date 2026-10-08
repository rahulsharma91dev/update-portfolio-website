"use client";
export default function Photo({ src }: { src: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="left-panel__img" src={src} alt="Rahul Sharma" />
  );
}
