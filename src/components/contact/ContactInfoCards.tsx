import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactInfoCardItem } from "@/features/contact/types";
import { FIXTURE_CONTACT_CARDS } from "@/features/contact/data/contactFixture";

interface ContactInfoCardsProps {
  cards?: ContactInfoCardItem[];
}

const ICON_MAP = {
  Phone: Phone,
  Mail: Mail,
  MapPin: MapPin,
  MessageCircle: MessageCircle,
};

export function ContactInfoCards({
  cards = FIXTURE_CONTACT_CARDS,
}: ContactInfoCardsProps) {
  return (
    <section
      aria-label="Contact Channels"
      className="relative z-20 -mt-8 sm:-mt-10 lg:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {cards.map((card) => {
          const IconComponent =
            ICON_MAP[card.iconName as keyof typeof ICON_MAP] || Phone;

          const content = (
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.12)] hover:border-pink-100/80 transition-all duration-300 h-full flex flex-col justify-between group">
              <div className="flex items-start gap-4">
                {/* Circular Pink Brand Icon */}
                <div
                  className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200"
                  aria-hidden="true"
                >
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Text Content */}
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    {card.title}
                  </span>
                  <p className="text-base sm:text-[15px] font-bold text-slate-900 group-hover:text-primary transition-colors truncate mt-0.5">
                    {card.primaryValue}
                  </p>
                </div>
              </div>

              {/* Secondary Subtitle */}
              <p className="mt-4 text-xs text-slate-500 leading-relaxed font-normal">
                {card.secondaryValue}
              </p>
            </div>
          );

          if (card.isActionable && card.actionHref) {
            const isExternal = card.actionHref.startsWith("http");
            return (
              <Link
                key={card.id}
                href={card.actionHref}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
                aria-label={`${card.title}: ${card.primaryValue}`}
              >
                {content}
              </Link>
            );
          }

          return (
            <div
              key={card.id}
              className="h-full rounded-2xl cursor-default"
              aria-label={`${card.title}: ${card.primaryValue}`}
            >
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
