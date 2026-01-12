import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    organizationName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // استخدام FormSubmit لإرسال الإيميل مباشرة
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);
      formDataToSend.append("_to", "AI@TheLocalizers.com");
      formDataToSend.append("_subject", `رسالة تواصل من ${formData.fullName}`);
      formDataToSend.append("_template", "table");

      // إرسال البيانات مباشرة إلى FormSubmit
      const response = await fetch(
        "https://formsubmit.co/ajax/AI@TheLocalizers.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.fullName,
            organization: formData.organizationName,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            _subject: `رسالة تواصل من ${formData.fullName}`,
            _template: "table",
          }),
        }
      );

      if (response.ok) {
        // نجاح الإرسال
        toast({
          title: "تم الإرسال بنجاح",
          description:
            "شكراً لك! تم إرسال رسالتك بنجاح وسنقوم بالرد عليك قريباً.",
          variant: "default",
        });

        // إعادة تعيين النموذج
        setFormData({
          fullName: "",
          organizationName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("فشل الإرسال");
      }
    } catch (error) {
      // خطأ في الإرسال
      toast({
        title: "حدث خطأ",
        description: "عذراً، لم يتم إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 px-4 sm:px-6 scroll-mt-20"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#018755] mb-8 text-right">
          تواصل معنا
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg"
        >
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              type="text"
              name="fullName"
              placeholder="اسمك الكامل"
              value={formData.fullName}
              onChange={handleChange}
              className="bg-gray-50 border-gray-200 rounded-lg h-12 text-right"
              required
            />
            <Input
              type="text"
              name="organizationName"
              placeholder="اسم الجهة"
              value={formData.organizationName}
              onChange={handleChange}
              className="bg-gray-50 border-gray-200 rounded-lg h-12 text-right"
              required
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              type="email"
              name="email"
              placeholder="البريد الإلكتروني"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border-gray-200 rounded-lg h-12 text-right"
              required
            />
            <Input
              type="tel"
              name="phone"
              placeholder="رقم الهاتف"
              value={formData.phone}
              onChange={handleChange}
              className="bg-gray-50 border-gray-200 rounded-lg h-12 text-right"
              required
            />
          </div>

          {/* Message Textarea */}
          <Textarea
            name="message"
            placeholder="رسالتك"
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-50 border-gray-200 rounded-lg min-h-[150px] text-right mb-6"
            required
          />

          {/* Submit Button */}
          <div className="flex justify-start">
            <Button
              type="submit"
              className="bg-[#018755] text-white hover:bg-[#018755]/90 rounded-lg px-6 py-3 h-auto"
            >
              <ArrowLeft className="w-5 h-5 ml-2" />
              <span>إرسال</span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
