"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Home, Info, Briefcase, BookOpen, Image, Menu, X, Code2, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "About", icon: Info, path: "/about" },
  { name: "Work", icon: Briefcase, path: "/work" },
  { name: "Blog", icon: BookOpen, path: "/blog" },
  { name: "Gallery", icon: Image, path: "/gallery" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 flex items-center justify-center text-primary">
                  <Code2 className="w-8 h-8 animate-pulse" />
                </div>
                <span className="text-xl font-bold gradient-text">
                  5AM Coder
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <Link key={item.name} href={item.path}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant="ghost"
                      className={`relative group px-4 ${
                        pathname === item.path ? "text-primary" : ""
                      }`}
                    >
                      <item.icon className="w-4 h-4 mr-2 group-hover:text-primary transition-colors" />
                      <span>{item.name}</span>
                      {pathname === item.path && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Button>
                  </motion.div>
                </Link>
              ))}
              <Link href="/sign-up">
                <Button className="ml-4">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Sign Up
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : "100%",
        }}
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <Link key={item.name} href={item.path}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className={`flex items-center gap-3 text-lg ${
                    pathname === item.path ? "text-primary" : ""
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Button>
              </motion.div>
            </Link>
          ))}
          <Link href="/sign-up">
            <Button size="lg" className="flex items-center gap-3">
              <UserPlus className="w-5 h-5" />
              Sign Up
            </Button>
          </Link>
        </div>
      </motion.div>
    </>
  );
}