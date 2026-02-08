import heroSecondary from "@/assets/hero-secondary.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EditorialSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 max-w-[630px]">
          <h2 className="text-2xl font-normal text-foreground leading-tight md:text-xl">
            From the Diamond Exchange to You
          </h2>
          <p className="text-sm font-light text-muted-foreground leading-relaxed">
            With over 30 years of expertise at the Israel Diamond Exchange, we specialize in diamond polishing, repair, and custom jewelry. Every stone is hand-selected and GIA-certified, ensuring exceptional quality at manufacturer-direct pricing — no middlemen, no markups.
          </p>
          <Link to="/about/our-story" className="inline-flex items-center gap-1 text-sm font-light text-primary hover:text-primary-hover transition-colors duration-200">
            <span>Learn about our craft</span>
            <ArrowRight size={12} />
          </Link>
        </div>
        
        <div className="order-first md:order-last">
          <div className="w-full aspect-square overflow-hidden">
            <img src={heroSecondary} alt="MOOREDIAMONDS workshop" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
