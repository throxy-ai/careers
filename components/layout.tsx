import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <nav className="w-full border-b border-gray-200 bg-[#F9F4F0]">
      <div className="max-w-[1000px] mx-auto px-8 py-4 flex items-center gap-3">
        <Link
          href="/"
          className="flex items-center gap-2 no-underline"
        >
          <Image
            src="/throxy_new.svg"
            alt="throxy"
            width={32}
            height={32}
            className="shrink-0"
          />
          <span className="text-[13px] font-semibold tracking-[-0.01em] text-black">
            throxy
          </span>
        </Link>
        <span className="text-gray-300">|</span>
        <span className="text-[11px] text-gray-500 tracking-[0.02em]">
          Careers
        </span>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 py-8 text-center">
      <div className="max-w-[1000px] mx-auto px-8">
        <p className="text-[12px] text-gray-400">
          throxy &nbsp;&middot;&nbsp;{" "}
          <Link
            href="https://throxy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 no-underline hover:text-black transition-colors"
          >
            throxy.com
          </Link>
        </p>
      </div>
    </footer>
  );
}
