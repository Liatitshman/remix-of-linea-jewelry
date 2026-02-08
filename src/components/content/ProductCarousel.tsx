import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { allProducts, type Product } from "@/data/products";

interface ProductCarouselProps {
  title?: string;
  products?: Product[];
  count?: number;
}

const ProductCarousel = ({ title, products, count = 8 }: ProductCarouselProps) => {
  const items = products || allProducts.slice(0, count);

  return (
    <section className="w-full mb-16 px-6">
      {title && (
        <div className="mb-4">
          <h2 className="text-sm font-light text-foreground">{title}</h2>
        </div>
      )}
      <Carousel
        opts={{ align: "start", loop: false }}
        className="w-full"
      >
        <CarouselContent>
          {items.map((product) => (
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
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1).replace("-", " ")}
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
