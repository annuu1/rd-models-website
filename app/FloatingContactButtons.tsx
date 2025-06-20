import { PHONE_NUMBER, WHATSAPP_NUMBER } from "./gallery/personalDetails";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 z-50 flex w-full justify-between px-6 md:w-auto md:justify-end md:right-0 md:pr-6">
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="bg-blue-900 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110 md:hidden"
        title="Call"
      >
        <FaPhoneAlt className="h-6 w-6" />
      </a>
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^\d]/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        title="WhatsApp"
      >
        <FaWhatsapp className="h-8 w-8" />
      </a>
    </div>
  );
}