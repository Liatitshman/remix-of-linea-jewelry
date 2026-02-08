import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import product10 from "@/assets/product-10.jpg";
import product11 from "@/assets/product-11.jpg";
import product12 from "@/assets/product-12.jpg";
import product13 from "@/assets/product-13.jpg";
import product14 from "@/assets/product-14.jpg";
import product15 from "@/assets/product-15.jpg";
import product16 from "@/assets/product-16.jpg";
import product17 from "@/assets/product-17.jpg";
import product18 from "@/assets/product-18.jpg";
import product19 from "@/assets/product-19.jpg";
import product20 from "@/assets/product-20.jpg";
import product21 from "@/assets/product-21.jpg";
import product22 from "@/assets/product-22.jpg";
import product23 from "@/assets/product-23.jpg";
import product24 from "@/assets/product-24.jpg";
import product1 from "@/assets/product-1.jpg";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  isNew?: boolean;
}

const products: Product[] = [
  { id: 1, name: "Pantheon", category: "Earrings", price: "₪2,850", image: product10, isNew: true },
  { id: 2, name: "Eclipse", category: "Bracelets", price: "₪3,200", image: product11 },
  { id: 3, name: "Halo", category: "Earrings", price: "₪1,950", image: product12, isNew: true },
  { id: 4, name: "Oblique", category: "Earrings", price: "₪1,650", image: product13 },
  { id: 5, name: "Lintel", category: "Earrings", price: "₪2,250", image: product14 },
  { id: 6, name: "Shadowline", category: "Bracelets", price: "₪3,950", image: product15 },
  { id: 7, name: "Meridian", category: "Earrings", price: "₪2,450", image: product16 },
  { id: 8, name: "Vertex", category: "Bracelets", price: "₪2,800", image: product17 },
  { id: 9, name: "Apex", category: "Earrings", price: "₪1,550", image: product18 },
  { id: 10, name: "Zenith", category: "Earrings", price: "₪1,850", image: product19 },
  { id: 11, name: "Prism", category: "Earrings", price: "₪2,050", image: product20 },
  { id: 12, name: "Radiant", category: "Bracelets", price: "₪3,650", image: product21 },
  { id: 13, name: "Stellar", category: "Earrings", price: "₪2,150", image: product22 },
  { id: 14, name: "Cosmos", category: "Bracelets", price: "₪2,950", image: product23 },
  { id: 15, name: "Aurora", category: "Earrings", price: "₪1,750", image: product24 },
  { id: 16, name: "Nebula", category: "Rings", price: "₪1,850", image: product1 },
];

const ProductGrid = () => {
  return (
    <section className="w-full px-6 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <Card className="border-none shadow-none bg-transparent group cursor-pointer">
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
                  <p className="text-sm font-light text-foreground">
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
        ))}
      </div>
      <Pagination />
    </section>
  );
};

export default ProductGrid;
