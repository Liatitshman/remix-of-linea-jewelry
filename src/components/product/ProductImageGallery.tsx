import { useState, useRef } from "react";
import ImageZoom from "./ImageZoom";
import { type Product, productVideos } from "@/data/products";

interface ProductImageGalleryProps {
  product: Product;
}

const ProductImageGallery = ({ product }: ProductImageGalleryProps) => {
  const images = [product.image, ...(product.additionalImages || [])];
  // Find related video if any
  const relatedVideo = productVideos.find(v => v.relatedProductId === product.id);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [zoomInitialIndex, setZoomInitialIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleImageClick = (index: number) => {
    setZoomInitialIndex(index);
    setIsZoomOpen(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove = (e: React.TouchEvent) => { touchEndX.current = e.touches[0].clientX; };
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) { diff > 0 ? nextImage() : prevImage(); }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div className="w-full">
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="space-y-4">
          {images.map((image, index) => (
            <div key={index} className="w-full aspect-square overflow-hidden cursor-pointer group" onClick={() => handleImageClick(index)}>
              <img src={image} alt={`${product.name} — view ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </div>
          ))}
          {relatedVideo && (
            <div className="w-full aspect-square overflow-hidden">
              <video src={relatedVideo.url} controls className="w-full h-full object-cover" poster={product.image} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div className="relative">
          <div className="w-full aspect-square overflow-hidden cursor-pointer group touch-pan-y"
            onClick={() => handleImageClick(currentImageIndex)}
            onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <img src={images[currentImageIndex]} alt={`${product.name} — view ${currentImageIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 select-none" />
          </div>
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button key={index} onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-foreground' : 'bg-muted'}`} />
            ))}
          </div>
        </div>
      </div>

      <ImageZoom images={images} initialIndex={zoomInitialIndex} isOpen={isZoomOpen} onClose={() => setIsZoomOpen(false)} />
    </div>
  );
};

export default ProductImageGallery;
