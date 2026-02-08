import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductImageGallery from "../components/product/ProductImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductDescription from "../components/product/ProductDescription";
import ProductCarousel from "../components/content/ProductCarousel";
import { getProductById, getProductsByCategory, allProducts } from "@/data/products";
import { 
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, 
  BreadcrumbPage, BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productId ? getProductById(productId) : undefined;
  
  // Fallback to first product if not found
  const currentProduct = product || allProducts[0];
  const categoryLabel = currentProduct.category.charAt(0).toUpperCase() + currentProduct.category.slice(1).replace("-", " ");
  const relatedProducts = getProductsByCategory(currentProduct.category).filter(p => p.id !== currentProduct.id).slice(0, 8);
  const otherProducts = allProducts.filter(p => p.category !== currentProduct.category).slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <section className="w-full px-6">
          <div className="lg:hidden mb-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={`/category/${currentProduct.category}`}>{categoryLabel}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{currentProduct.name}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <ProductImageGallery product={currentProduct} />
            
            <div className="lg:pl-12 mt-8 lg:mt-0 lg:sticky lg:top-6 lg:h-fit">
              <ProductInfo product={currentProduct} />
              <ProductDescription product={currentProduct} />
            </div>
          </div>
        </section>
        
        {relatedProducts.length > 0 && (
          <section className="w-full mt-16 lg:mt-24">
            <div className="mb-4 px-6">
              <h2 className="text-sm font-light text-foreground">You might also like</h2>
            </div>
            <ProductCarousel products={relatedProducts} />
          </section>
        )}
        
        <section className="w-full">
          <div className="mb-4 px-6">
            <h2 className="text-sm font-light text-foreground">Explore more</h2>
          </div>
          <ProductCarousel products={otherProducts} />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
