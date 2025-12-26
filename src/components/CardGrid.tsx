import { useEffect, useState } from "react";
import ExpertCard from "./ExpertCard";
import { cardsAPI } from "@/lib/api";

interface Card {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  preview_url?: string;
  link?: string;
  is_coming_soon: boolean;
  mechanisms?: { label: string; isActive?: boolean }[];
  otherExperts?: { label: string; isActive?: boolean }[];
  sectionTitle?: string;
}

// بطاقات تجريبية ثابتة
const staticCards: Card[] = [
  {
    id: 1,
    title: 'خبير تقييم العروض',
    description: 'يوفر تحليلاً تفصيلياً للعروض في المناقصات الحكومية وتطبيق آليات التفضيل للمنشآت الوطنية وفقاً للأنظمة الرسمية.',
    badge: 'خبير',
    preview_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&q=80',
    link: '/experts/offer-evaluation',
    is_coming_soon: false,
    mechanisms: [
      { label: 'آلية تفصيل المنشآت الصغيرة', isActive: true },
      { label: 'القائمة الإلزامية', isActive: true },
      { label: 'آلية الحد الأدنى للمحتوى المحلي', isActive: true },
      { label: 'آلية وزن المستوى المحلي في التقييم العالي', isActive: true },
    ],
    sectionTitle: 'اختر الآلية المناسبة',
  },
  {
    id: 2,
    title: 'خبير القائمة الإلزامية',
    description: 'يوفر تحليلاً دقيقاً للمنتجات الوطنية في القائمة الإلزامية ومساعدة شاملة في متطلبات القائمة الإلزامية والاستثناءات.',
    badge: 'خبير',
    preview_url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop&q=80',
    link: '/experts/mandatory-list',
    is_coming_soon: false,
    otherExperts: [
      { label: 'خبير المحتوى المحلي', isActive: false },
      { label: 'خبير تقييم العروض', isActive: false },
      { label: 'خبير تضمين ملفات المحتوى المحلي', isActive: false },
      { label: 'خبير المعايير الوطنية', isActive: false },
    ],
    sectionTitle: 'خبراء آخرون قريباً',
  },
  {
    id: 999,
    title: 'نظام المحتوى المحلي',
    subtitle: 'نوع التشريع: نظام',
    description: 'نظام شامل ينظم متطلبات المحتوى المحلي في المشتريات الحكومية والمنافسات، يتضمن آليات التطبيق والمعايير المطلوبة لتحقيق أهداف المحتوى المحلي في القطاع الحكومي.',
    badge: 'نظام',
    preview_url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop&q=80',
    link: '/legislation/system',
    is_coming_soon: false,
  },
];

const CardGrid = () => {
  // البطاقات الثابتة تظهر مباشرة بدون انتظار
  const [cards, setCards] = useState<Card[]>(staticCards);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        setLoading(true);
        const data = await cardsAPI.getAll();
        // إضافة البطاقات من API مع البطاقات الثابتة
        const allCards = Array.isArray(data) && data.length > 0 
          ? [...staticCards, ...data] 
          : staticCards;
        setCards(allCards);
      } catch (err) {
        // في حالة الخطأ، نعرض البطاقات الثابتة فقط (موجودة بالفعل)
        setError(err instanceof Error ? err.message : 'حدث خطأ في تحميل الكاردات');
        console.error('Error fetching cards:', err);
      } finally {
        setLoading(false);
      }
    };

    // جلب البطاقات من API في الخلفية
    fetchCards();
  }, []);

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {loading && (
          <div className="text-center py-4 text-xs sm:text-sm text-muted-foreground">
            جاري تحميل المزيد من البطاقات...
          </div>
        )}
        {error && (
          <div className="text-center py-4 text-xs sm:text-sm text-yellow-600">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {cards.map((card, index) => (
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
                mechanisms={card.mechanisms}
                otherExperts={card.otherExperts}
                sectionTitle={card.sectionTitle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
