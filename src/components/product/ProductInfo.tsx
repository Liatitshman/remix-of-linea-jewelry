import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, 
  BreadcrumbPage, BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Minus, Plus } from "lucide-react";
import { type Product } from "@/data/products";

interface ProductInfoProps {
  product: Product;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const categoryLabel = product.category.charAt(0).toUpperCase() + product.category.slice(1).replace("-", " ");

  return (
    <div className="space-y-6">
      {/* Breadcrumb - Desktop only */}
      <div className="hidden lg:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to={`/category/${product.category}`}>{categoryLabel}</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>{product.name}</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Title & Price */}
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-light text-muted-foreground mb-1">{categoryLabel}</p>
            <h1 className="text-2xl md:text-3xl font-light text-foreground">{product.name}</h1>
          </div>
          <div className="text-right">
            <p className="text-xl font-light text-foreground">{product.price}</p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-4 py-4 border-b border-border">
        {product.material && (
          <div className="space-y-2">
            <h3 className="text-sm font-light text-foreground">Material</h3>
            <p className="text-sm font-light text-muted-foreground">{product.material}</p>
          </div>
        )}
        
        {product.diamond && (
          <div className="space-y-2">
            <h3 className="text-sm font-light text-foreground">Diamond Details</h3>
            <div className="grid grid-cols-2 gap-2 text-sm font-light text-muted-foreground">
              <span>Carat: {product.diamond.carat}</span>
              <span>Color: {product.diamond.color}</span>
              <span>Clarity: {product.diamond.clarity}</span>
              <span>Cut: {product.diamond.cut}</span>
              {product.diamond.shape && <span>Shape: {product.diamond.shape}</span>}
              {product.diamond.fluorescence && <span>Fluorescence: {product.diamond.fluorescence}</span>}
            </div>
          </div>
        )}

        {product.dimensions && (
          <div className="space-y-2">
            <h3 className="text-sm font-light text-foreground">Dimensions</h3>
            <p className="text-sm font-light text-muted-foreground">{product.dimensions}</p>
          </div>
        )}
        
        {product.weight && (
          <div className="space-y-2">
            <h3 className="text-sm font-light text-foreground">Weight</h3>
            <p className="text-sm font-light text-muted-foreground">{product.weight}</p>
          </div>
        )}

        {product.gia && (
          <div className="space-y-2">
            <h3 className="text-sm font-light text-foreground">GIA Certificate</h3>
            <p className="text-sm font-light text-primary underline cursor-pointer">
              View GIA Report #{product.gia.reportNumber}
            </p>
          </div>
        )}
        
        {product.editorsNote && (
          <div className="space-y-2">
            <h3 className="text-sm font-light text-foreground">Editor's notes</h3>
            <p className="text-sm font-light text-muted-foreground italic">"{product.editorsNote}"</p>
          </div>
        )}
      </div>

      {/* Quantity & CTA */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-light text-foreground">Quantity</span>
          <div className="flex items-center border border-border">
            <Button variant="ghost" size="sm" onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              className="h-10 w-10 p-0 hover:bg-transparent hover:opacity-50 rounded-none border-none">
              <Minus className="h-4 w-4" />
            </Button>
            <span className="h-10 flex items-center px-4 text-sm font-light min-w-12 justify-center border-l border-r border-border">{quantity}</span>
            <Button variant="ghost" size="sm" onClick={() => setQuantity(prev => prev + 1)}
              className="h-10 w-10 p-0 hover:bg-transparent hover:opacity-50 rounded-none border-none">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Button className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 font-light rounded-none">
          Add to Bag
        </Button>

        <a 
          href={`https://wa.me/972500000000?text=${encodeURIComponent(`Hi, I'm interested in the ${product.name} (${categoryLabel})`)}`}
          target="_blank" rel="noopener noreferrer"
          className="w-full h-12 border border-border flex items-center justify-center gap-2 text-sm font-light text-foreground hover:bg-muted/20 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Request Quote via WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductInfo;
