import { Facebook, Instagram, Mail, Heart, Baby } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-background/20 rounded-full flex items-center justify-center">
                <Baby className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SAMMU</h3>
                <p className="text-sm opacity-80">St Albans Multiples Meet Up</p>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-sm">
              Supporting parents of twins, triplets, and other multiples in St Albans 
              and surrounding areas with community, friendship, and understanding.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Home</a>
              <a href="#about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">About</a>
              <a href="#meetups" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Meetups</a>
              <a href="#community" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Community</a>
              <a href="#contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contact</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@sammu.co.uk" 
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity"
              >
                <Mail className="h-4 w-4" />
                hello@sammu.co.uk
              </a>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/groups/223798727795056/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/stalbansmmu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-8 border-background/20" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm opacity-80">
            © 2024 SAMMU - St Albans Multiples Meet Up. All rights reserved.
          </p>
          <p className="text-sm opacity-80 flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-400" /> for our community
          </p>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs opacity-60 max-w-2xl mx-auto">
            SAMMU is not a babysitting or childminding service. All parents remain fully responsible 
            for their children during meetups and activities.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;