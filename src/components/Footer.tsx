import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Kashkin Gems</h3>
            <p className="text-sm text-muted-foreground">
              Affordable luxury gold-plated jewellery in Kuwait. Premium quality at prices you'll love.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Home
              </Link>
              <Link to="/shop" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Shop
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                About
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                FAQ
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Returns & Exchanges
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Shipping Info
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Size Guide
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:info@kashkingems.com" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>WhatsApp: +965 XXXX XXXX</p>
              <p>Email: info@kashkingems.com</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kashkin Gems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
