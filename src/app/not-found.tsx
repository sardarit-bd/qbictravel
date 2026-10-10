import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Home, Compass } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "404 — Page Not Found | QbicTravel",
  description:
    "Oops! Looks like you've wandered off the map. We couldn't find the page you're looking for.",
};

export default function NotFound() {
  // Check if a dedicated tours route is active; currently falling back safely to Home
  // to avoid broken routes or 404 navigation loops per project requirements.
  const toursHref = ROUTES.HOME;

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="w-full container-narrow flex flex-col items-center">
        {/* Prominent Not Found Illustration Asset (natural 3:2 ratio preserved) */}
        <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl mb-6 sm:mb-8">
          <Image
            src="/images/not-found.png"
            alt="404 Page Not Found illustration"
            width={640}
            height={426}
            priority
            className="w-full h-auto object-contain mx-auto select-none"
          />
        </div>


        {/* Action Buttons (reusing existing buttonVariants and semantic tokens) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Primary Action Button: Back to Home */}
          <Link
            href={ROUTES.HOME}
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "w-full sm:w-auto rounded-full px-8 py-3.5 font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 gap-2"
            )}
          >
            <Home className="w-4 h-4 shrink-0" />
            <span>Back to Home</span>
          </Link>

          {/* Secondary Action Link: Explore Tours (temporary fallback to / as /tours route does not exist yet) */}
          <Link
            href={toursHref}
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "w-full sm:w-auto rounded-full px-7 py-3.5 font-bold transition-all hover:-translate-y-0.5 active:translate-y-0 gap-2"
            )}
          >
            <Compass className="w-4 h-4 shrink-0 text-muted-foreground" />
            <span>Explore Tours</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
