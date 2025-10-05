import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Instagram, Mail } from "lucide-react";
import sammuLogo from "@/assets/sammu-logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={sammuLogo} 
              alt="SAMMU Logo" 
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">SAMMU</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">St Albans Multiples Meet Up</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#meetups" className="text-foreground hover:text-primary transition-colors">Meetups</a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">Community</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.facebook.com/groups/223798727795056/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/stalbansmmu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="mailto:hello@sammu.co.uk" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#meetups" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Meetups</a>
              <a href="#community" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Community</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <div className="flex space-x-4 pt-4">
                <a href="https://www.facebook.com/groups/223798727795056/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/stalbansmmu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="mailto:hello@sammu.co.uk" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;