import { useMemo } from "react";
import ExpertCard from "./ExpertCard";
import { useFetch } from "@/hooks";
import { useFilter } from "@/contexts/FilterContext";

interface Card {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  preview_url?: string | null;
  link?: string | null;
  is_coming_soon: boolean;
  type?: string;
  mechanisms?: { label: string; isActive?: boolean }[];
  otherExperts?: { label: string; isActive?: boolean }[];
  sectionTitle?: string;
}

const CardGrid = () => {
  const { selectedType } = useFilter();

  // استخدام useFetch hook لجلب البطاقات من API
  const {
    data: apiCards,
    isLoading,
    error,
  } = useFetch<Card[]>("cards", "cards", true);

  // فلترة الكاردات حسب type
  const filteredCards = useMemo(() => {
    const allCards = apiCards && Array.isArray(apiCards) ? apiCards : [];

    // فلترة حسب type
    if (selectedType !== "الكل") {
      return allCards.filter((card) => {
        if (selectedType === "government") {
          return card.type === "government";
        } else if (selectedType === "company") {
          return card.type === "company";
        }
        return true;
      });
    }

    return allCards;
  }, [apiCards, selectedType]);

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {isLoading && (
          <div className="text-center py-4 text-xs sm:text-sm text-muted-foreground">
            جاري تحميل المزيد من البطاقات...
          </div>
        )}
        {error && (
          <div className="text-center py-4 text-xs sm:text-sm text-yellow-600">
            {error instanceof Error
              ? error.message
              : "حدث خطأ في تحميل الكاردات"}
          </div>
        )}

        {/* جميع الكاردات بنفس الحجم */}
        {filteredCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {filteredCards.map((card, index) => (
              <div
                key={card.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ExpertCard
                  title={card.title}
                  subtitle={card.subtitle}
                  description={card.description || ""}
                  badge={card.badge || ""}
                  previewUrl={card.preview_url}
                  link={card.link}
                  isComingSoon={card.is_coming_soon}
                  type={card.type}
                  mechanisms={card.mechanisms}
                  otherExperts={card.otherExperts}
                  sectionTitle={card.sectionTitle}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CardGrid;
