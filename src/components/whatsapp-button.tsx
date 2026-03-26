import React from "react";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import { config } from "@/data/config";

export default function WhatsappButton() {
  if (!config.social.whatsapp) return null;

  return (
    <Link
      href={config.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[999] bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <SiWhatsapp size={32} className="w-6 h-6 sm:w-8 sm:h-8" />
      <span className="absolute -top-12 bg-black/80 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity min-w-max shadow-md border border-white/10 backdrop-blur-sm">
        Message me!
      </span>
    </Link>
  );
}
