import React from "react";
import { MessageCircle } from "lucide-react";
import { siteInfo } from "../../mock/data";

export default function WhatsAppButton() {
  return (
    <a
      href={siteInfo.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 flex items-center justify-center text-white hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
