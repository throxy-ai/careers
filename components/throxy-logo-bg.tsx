import Image from "next/image";

export function ThroxyLogoBg() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden
    >
      <div
        className="absolute -bottom-24 -right-24 w-[min(480px,50vw)] h-[min(480px,50vw)] opacity-[0.06]"
        style={{ minWidth: 320, minHeight: 320 }}
      >
        <Image
          src="/throxy-logo.svg"
          alt=""
          width={512}
          height={512}
          className="w-full h-full object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
          unoptimized
        />
      </div>
    </div>
  );
}
