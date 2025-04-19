
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, User } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-2xl text-blood-600">❤</span>
            <span className="ml-2 text-2xl font-bold">LifeFlow</span>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/donate" className="text-sm font-medium hover:text-blood-600 transition-colors">
            Donate Blood
          </Link>
          <Link to="/organize" className="text-sm font-medium hover:text-blood-600 transition-colors">
            Organize a Camp
          </Link>
          <Link to="/camps" className="text-sm font-medium hover:text-blood-600 transition-colors">
            Find Camps
          </Link>
          <Link to="/faq" className="text-sm font-medium hover:text-blood-600 transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-blood-600 transition-colors">
            Contact
          </Link>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="default" className="bg-blood-600 hover:bg-blood-700" asChild>
              <Link to="/register">Register</Link>
            </Button>
          </div>
        </nav>
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <div className="bg-white py-4 px-4 space-y-4">
            <Link 
              to="/donate" 
              className="block text-sm font-medium hover:text-blood-600 transition-colors"
              onClick={toggleMenu}
            >
              Donate Blood
            </Link>
            <Link 
              to="/organize" 
              className="block text-sm font-medium hover:text-blood-600 transition-colors"
              onClick={toggleMenu}
            >
              Organize a Camp
            </Link>
            <Link 
              to="/camps" 
              className="block text-sm font-medium hover:text-blood-600 transition-colors"
              onClick={toggleMenu}
            >
              Find Camps
            </Link>
            <Link 
              to="/faq" 
              className="block text-sm font-medium hover:text-blood-600 transition-colors"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="block text-sm font-medium hover:text-blood-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="flex gap-4 pt-2">
              <Button variant="outline" asChild className="w-full" onClick={toggleMenu}>
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="default" className="bg-blood-600 hover:bg-blood-700 w-full" asChild onClick={toggleMenu}>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
