import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import diamondRing1 from "@/assets/diamond-ring-1.jpg";
import diamondRing2 from "@/assets/diamond-ring-2.jpg";
import diamondNecklace from "@/assets/diamond-necklace-1.jpg";
import diamondEarrings from "@/assets/diamond-earrings-1.jpg";
import diamondBracelet from "@/assets/diamond-bracelet-1.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Royal Cluster",
    category: "Rings",
    price: "₪18,500",
    image: diamondRing1,
    isNew: true,
  },
  {
    id: 2,
    name: "Solitaire Classic",
    category: "Rings",
    price: "₪12,800",
    image: diamondRing2,
  },
  {
    id: 3,
    name: "Brilliant Pendant",
    category: "Necklaces",
    price: "₪8,950",
    image: diamondNecklace,
    isNew: true,
  },
  {
    id: 4,
    name: "Diamond Studs",
    category: "Earrings",
    price: "₪6,200",
    image: diamondEarrings,
  },
  {
    id: 5,
    name: "Tennis Bracelet",
    category: "Bracelets",
    price: "₪22,400",
    image: diamondBracelet,
  },
  {
    id: 6,
    name: "Eternity Band",
    category: "Rings",
    price: "₪9,750",
    image: diamondRing1,
  },
];

const ProductCarousel = () => {
  return (
    <section className="w-full mb-16 px-6">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 pr-2 md:pr-4"
            >
              <Link to={`/product/${product.id}`}>
                <Card className="border-none shadow-none bg-transparent group">
                  <CardContent className="p-0">
                    <div className="aspect-square mb-3 overflow-hidden bg-muted/10 relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/[0.03]"></div>
                      {product.isNew && (
                        <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium text-primary bg-background/80 backdrop-blur-sm">
                          NEW
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-light text-muted-foreground">
                        {product.category}
                      </p>
                      <div className="flex justify-between items-center">
                        <h3 className="text-sm font-medium text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-sm font-light text-foreground">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ProductCarousel;
