import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FilterTabs from "@/components/FilterTabs";
import CardGrid from "@/components/CardGrid";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#EBFBF5] relative">
      {/* Background Circle - Fixed behind everything */}
      <div className="relative inset-0 pointer-events-none z-0">
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[90vw] sm:w-[80vw] md:w-[72vw] h-[60vw] sm:h-[50vw] md:h-[45vw] rounded-full overflow-hidden"
          style={{
            top: "30px",
            background:
              "radial-gradient(circle, rgba(165, 217, 197, 0.9) 0%, rgba(165, 217, 197, 0.8) 20%, rgba(165, 217, 197, 0.5) 30%, rgba(165, 217, 197, 0.3) 40%, transparent 60%, transparent 80%,  transparent 90%)",
          }}
          aria-hidden="true"
        />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <FilterTabs />
        <CardGrid />
        <ContactForm />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
