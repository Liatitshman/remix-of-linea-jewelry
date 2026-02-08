import diamondNecklace from "@/assets/diamond-necklace-1.jpg";
import diamondEarrings from "@/assets/diamond-earrings-1.jpg";
import { Link } from "react-router-dom";

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Link to="/category/earrings" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img 
                src={diamondEarrings} 
                alt="Diamond stud earrings" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div>
            <h3 className="text-sm font-normal text-foreground mb-1">
              Diamond Earrings
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Studs, drops & hoops set with brilliant cut diamonds
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Link to="/category/necklaces" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img 
                src={diamondNecklace} 
                alt="Diamond pendant necklace" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div>
            <h3 className="text-sm font-normal text-foreground mb-1">
              Pendants & Necklaces
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Solitaire pendants and diamond necklaces in precious metals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;
