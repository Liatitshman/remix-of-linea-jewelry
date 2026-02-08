import stone01 from "@/assets/catalog/stone-01.jpg";

const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="w-full aspect-[16/9] mb-3 overflow-hidden">
        <img 
          src={stone01} 
          alt="MOOREDIAMONDS — GIA Certified Loose Diamonds" 
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-sm font-normal text-foreground mb-1">
          Exceptional Brilliance
        </h2>
        <p className="text-sm font-light text-muted-foreground">
          GIA-certified diamonds sourced directly from the Israel Diamond Exchange
        </p>
      </div>
    </section>
  );
};

export default LargeHero;
