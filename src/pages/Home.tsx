import { Link } from 'react-router-dom';
import { Truck, MessageCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import heroImage from '@/assets/hero-jewellery.jpg';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Kashkin Gems Jewellery"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Affordable Luxury.
              <br />
              <span className="text-primary">Gold-Plated Jewellery</span>
              <br />
              in Kuwait.
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Discover premium gold-plated rings, bracelets, necklaces & earrings. Trendy designs at prices you'll love.
            </p>
            <Link to="/shop">
              <Button size="lg" className="gradient-gold hover:opacity-90 transition-smooth shadow-gold text-lg px-8">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Premium Gold-Plating</h3>
              <p className="text-sm text-muted-foreground">
                High-quality gold plating that looks and feels luxurious
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Free Delivery in Kuwait</h3>
              <p className="text-sm text-muted-foreground">
                Cash on Delivery available. Shop with confidence
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">24/7 WhatsApp Support</h3>
              <p className="text-sm text-muted-foreground">
                Questions? We're always here to help you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-muted-foreground">
              Discover our most loved pieces
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
