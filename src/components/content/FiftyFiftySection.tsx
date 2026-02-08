import product1 from "@/assets/product-1.jpg";
import product4 from "@/assets/product-4.jpg";
import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/rings" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={product1} 
                alt="Diamond rings collection - GIA certified" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div>
            <h3 className="text-sm font-normal text-foreground mb-1">
              Diamond Rings
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Engagement, wedding & statement rings in 14K–22K gold
            </p>
          </div>
        </div>

        <div>
          <Link to="/category/bracelets" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src={product4} 
                alt="Diamond tennis bracelet" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div>
            <h3 className="text-sm font-normal text-foreground mb-1">
              Tennis Bracelets
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Classic brilliance in white gold & platinum settings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;
