import starDecoration from "@/assets/star-decoration.png";

const Hero = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 px-4 sm:px-6 text-center" dir="rtl">
      {/* Blur Element */}
      <div className="blur-element hidden md:block" aria-hidden="true" />

      {/* Decorative Stars */}
      <img
        src={starDecoration}
        alt=""
        className="hidden sm:block absolute top-8 right-[15%] w-8 h-8 md:w-12 md:h-12 opacity-80"
        aria-hidden="true"
      />
      <img
        src={starDecoration}
        alt=""
        className="hidden sm:block absolute top-24 left-[10%] w-6 h-6 md:w-8 md:h-8 opacity-60"
        aria-hidden="true"
      />
      <img
        src={starDecoration}
        alt=""
        className="hidden md:block absolute bottom-12 right-[20%] w-10 h-10 opacity-70"
        aria-hidden="true"
      />
      <img
        src={starDecoration}
        alt=""
        className="hidden md:block absolute bottom-20 left-[18%] w-12 h-12 md:w-14 md:h-14 opacity-80"
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-hero text-black mb-4 sm:mb-6 px-2">
          استكشف جميع خبراء المحتوى المدعمين بالذكاء الاصطناعي
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-black/80 max-w-2xl mx-auto leading-relaxed px-2">
          تعرف على خبراء متخصصين تم تطويرهم عبر منصة ذا لوكالايزرز لدعمك في تطبيق متطلبات المحتوى المحلي بكفاءة. استكشف قدراتهم وآلية عملهم، واستفد منهم لتسريع الإجراءات ورفع الامتثال.
        </p>
      </div>
    </section>
  );
};

export default Hero;
