import Link from "next/link";
import { MapPin } from "lucide-react";

interface PseoNearbyProps {
  cityName: string;
  nearbyCities: string[];
  /** Base path like "/services/law-firm-websites" */
  basePath: string;
  /** City slugs that actually have pages (so we only link to real pages) */
  activeSlugs: string[];
}

export default function PseoNearby({
  cityName,
  nearbyCities,
  basePath,
  activeSlugs,
}: PseoNearbyProps) {
  return (
    <div className="border-t border-stone-200 py-8 sm:py-10">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="w-3.5 h-3.5 text-stone-400" aria-hidden="true" />
        <p className="text-xs font-mono text-stone-400 uppercase tracking-wider">
          Also serving near {cityName}
        </p>
      </div>
      <div className="flex flex-wrap gap-2">
        {nearbyCities.map((city) => {
          const slug = city.toLowerCase().replace(/\s+/g, "-");
          const hasPage = activeSlugs.includes(slug);

          if (hasPage) {
            return (
              <Link
                key={city}
                href={`${basePath}/${slug}`}
                className="inline-flex items-center px-3.5 py-1.5 rounded-lg border border-stone-200 bg-white text-xs font-medium text-stone-600 hover:border-[#004D3A]/30 hover:text-[#004D3A] transition-all duration-300"
              >
                {city}
              </Link>
            );
          }

          return (
            <span
              key={city}
              className="inline-flex items-center px-3.5 py-1.5 rounded-lg border border-stone-200 bg-white text-xs font-medium text-stone-400"
            >
              {city}
            </span>
          );
        })}
      </div>
    </div>
  );
}
