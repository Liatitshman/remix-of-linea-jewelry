const Footer = () => {
  return (
    <footer className="w-full bg-card text-foreground pt-8 pb-2 px-6 border-t border-border mt-48">
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Brand - Left side */}
          <div>
            <h2 className="text-xl font-light tracking-wider mb-4 text-primary">MOOREDIAMONDS</h2>
            <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-md mb-6">
              GIA-certified diamonds & fine jewelry, direct from the Israel Diamond Exchange
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 text-sm font-light text-muted-foreground">
              <div>
                <p className="font-normal text-foreground mb-1">Visit Us</p>
                <p>Israel Diamond Exchange</p>
                <p>Ramat Gan, Israel</p>
              </div>
              <div>
                <p className="font-normal text-foreground mb-1 mt-3">Contact</p>
                <p>info@diamondscatalog.com</p>
              </div>
            </div>
          </div>

          {/* Link lists - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Catalog */}
            <div>
              <h4 className="text-sm font-normal mb-4">Catalog</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Loose Diamonds</a></li>
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Rings</a></li>
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Earrings</a></li>
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Bracelets</a></li>
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Necklaces</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-normal mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Diamond Polishing</a></li>
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Repair & Recut</a></li>
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Custom Orders</a></li>
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">GIA Certification</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-normal mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">WhatsApp</a></li>
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-border -mx-6 px-6 pt-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-light text-muted-foreground mb-1 md:mb-0">
            © 2026 MOOREDIAMONDS. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
