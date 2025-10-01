import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-8 hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-primary mb-6">{product.price} KWD</p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm font-medium mb-2">✓ Premium gold-plating</p>
              <p className="text-sm font-medium mb-2">✓ Free delivery in Kuwait</p>
              <p className="text-sm font-medium">✓ Cash on Delivery available</p>
            </div>

            <Button
              size="lg"
              onClick={handleAddToCart}
              className="gradient-gold hover:opacity-90 transition-smooth shadow-gold text-lg"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>

            {/* Size Guide (for rings/bracelets) */}
            {(product.category === 'Rings' || product.category === 'Bracelets') && (
              <div className="mt-8 p-4 border rounded-lg">
                <h3 className="font-semibold mb-2">Size Guide</h3>
                <p className="text-sm text-muted-foreground">
                  Not sure about your size? Contact us on WhatsApp for personalized assistance.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
