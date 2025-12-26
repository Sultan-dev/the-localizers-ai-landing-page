import logo from "@/assets/logo.png";
import { Twitter, Linkedin, Mail, X } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: X, href: "#", label: "X" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const legalLinks = [
    { label: "اتصل بنا", href: "#" },
    { label: "شروط الخدمة", href: "#" },
    { label: "الشروط والأحكام", href: "#" },
  ];

  return (
    <footer className="bg-[#EBFBF5] py-8 sm:py-12 md:py-16 px-4 sm:px-6 mt-12 sm:mt-16 border-t border-gray-300 w-full">
      <div className="max-w-7xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 sm:gap-8 mb-6">
          {/* Left: Social Links + Email */}
          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-black hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
            <a
              href="mailto:Al@TheLocalizers.com"
              className="flex items-center gap-2 text-xs sm:text-sm text-black hover:text-primary transition-colors"
            >
              <Mail
                size={14}
                strokeWidth={2}
                absoluteStrokeWidth
                className="sm:w-4 sm:h-4 text-[#018755] text-bold"
              />
              <span className="break-all">Al@TheLocalizers.com</span>
            </a>
          </div>

          {/* Right: Logo */}
          <div className="flex items-center gap-6 sm:gap-10">
            <img
              src={logo}
              alt="The Localizers AI"
              className="h-8 sm:h-10 -mt-3 sm:-mt-5"
            />
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-gray-300 mb-6 my-6 sm:my-10" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm">
          {/* Left: Navigation Links */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-black">
            {legalLinks.map((link, index) => (
              <span key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
                {index < legalLinks.length - 1 && (
                  <span className="mx-1 sm:mx-2">•</span>
                )}
              </span>
            ))}
          </div>
          {/* Right: Copyright */}
          <p className="text-black/70 text-right md:text-left">
            جميع الحقوق محفوظة © الشركة ذا لوكالايزيز الاستشارية
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
