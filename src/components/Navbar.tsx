import logo from "@/assets/logo.png";
import { User, Settings, LogOut, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navLinks = [
    { label: "الخبراء", href: "#" },
    { label: "ذا لوكا لايزرز", href: "https://thelocalizers.com/" },
    { label: "اتصل بنا", href: "#contact" },
    { label: "قيم المنصة", href: "#" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav
      className="w-full py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between relative z-10 bg-[#EBFBF5]"
      dir="rtl"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="The Localizers AI" className="h-8 sm:h-10" />
      </div>

      {/* Desktop Navigation Links - Centered */}
      <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            target={
              link.href === "https://thelocalizers.com/" ? "_blank" : "_self"
            }
            rel={
              link.href === "https://thelocalizers.com/"
                ? "noopener noreferrer"
                : undefined
            }
            className={`font-medium transition-colors ${
              link.label === "الخبراء"
                ? "text-primary"
                : "text-gray-700 hover:text-primary"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]" dir="rtl">
          <nav className="flex flex-col gap-4 mt-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                target={
                  link.href === "https://thelocalizers.com/"
                    ? "_blank"
                    : "_self"
                }
                rel={
                  link.href === "https://thelocalizers.com/"
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`text-lg font-medium transition-colors py-2 ${
                  link.label === "الخبراء"
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-72 sm:w-80 p-0 bg-white rounded-lg shadow-lg border-0"
        >
          <div className="p-4 flex items-center gap-3" dir="rtl">
            <Avatar className="w-16 h-16">
              <AvatarImage
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                alt="User"
              />
              <AvatarFallback>
                <User className="w-10 h-10 text-primary" />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">الاسم</span>
              <span className="text-xs text-gray-500">yourname@gmail.com</span>
            </div>
          </div>

          <DropdownMenuSeparator className="bg-gray-200" />

          <div className="p-2" dir="rtl">
            <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-gray-50 rounded-md">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Settings className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-gray-700">إدارة الحساب</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-gray-50 rounded-md">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <LogOut className="w-4 h-4 text-primary" />
              </div>
              <span className="text-sm text-gray-700">تسجيل الخروج</span>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu> */}
    </nav>
  );
};

export default Navbar;
