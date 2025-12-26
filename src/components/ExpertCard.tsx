import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ExpertCardProps {
  title: string;
  subtitle?: string;
  description: string;
  badge: string;
  previewUrl?: string;
  link?: string;
  isComingSoon?: boolean;
  mechanisms?: { label: string; isActive?: boolean }[];
  otherExperts?: { label: string; isActive?: boolean }[];
  sectionTitle?: string;
}

const ExpertCard = ({
  title,
  subtitle,
  description,
  badge,
  previewUrl,
  link,
  isComingSoon = false,
  mechanisms = [],
  otherExperts = [],
  sectionTitle,
}: ExpertCardProps) => {
  const hasMechanisms = mechanisms.length > 0;
  const hasOtherExperts = otherExperts.length > 0;
  const items = hasMechanisms ? mechanisms : otherExperts;

  return (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden group transition-transform duration-300 shadow-xl",
        "flex flex-col h-full"
      )}
      dir="rtl"
    >
      {/* Preview Image Section */}
      {previewUrl && (
        <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 bg-gray-50 flex items-center rounded-2xl sm:rounded-3xl justify-center overflow-hidden relative">
          <div className="relative w-full h-full">
            <img
              src={previewUrl}
              alt={title}
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* Top, left, right borders */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                borderTop: "15px solid #018755",
                borderLeft: "15px solid #018755",
                borderRight: "15px solid #018755",
                borderBottom: "none",
              }}
            />
            {/* Gradient border at bottom - visible above image, extending to middle */}
            <div
              className="absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{
                height: "50%",
                background:
                  "linear-gradient(180deg, transparent 0%, rgba(1, 135, 85, 0.2) 20%, rgba(1, 135, 85, 0.2) 50%, rgba(1, 135, 85, 0.8) 80%, #018755 100%)",
                marginLeft: "15px",
                marginRight: "10px",
                // borderRadius: "0 0 1.5rem 1.5rem",
                zIndex: 10,
              }}
            />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        {/* Badge and Title in same row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#018755] flex-1">
            {title}
          </h3>
          {badge && (
            <span className="inline-block bg-[#a5d9c5]/30 text-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap">
              {badge}
            </span>
          )}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">
            {subtitle}
          </p>
        )}

        {/* Description */}
        {description && (
          <p className="text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6 leading-relaxed">
            {description}
          </p>
        )}

        {!isComingSoon && (
          <Button
            className="bg-[#018755] text-white hover:bg-[#018755]/90 font-bold w-full sm:w-fit rounded-lg py-4 sm:py-5 md:py-6 px-8 sm:px-16 md:px-20 text-base sm:text-lg md:text-xl mt-auto"
            onClick={() => {
              if (link) {
                window.location.href = link;
              }
            }}
          >
            <span className="text-lg sm:text-xl md:text-2xl w-full text-center">
              دخول
            </span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ExpertCard;
