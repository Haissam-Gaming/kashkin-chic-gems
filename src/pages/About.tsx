import heroImage from '@/assets/hero-jewellery.jpg';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About Kashkin Gems</h1>

          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src={heroImage}
              alt="Kashkin Gems Jewellery"
              className="object-cover w-full h-64"
            />
          </div>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg leading-relaxed">
              <strong className="text-primary">Kashkin Gems</strong> is a Kuwait-based jewellery store offering affordable, 
              gold-plated designs that bring luxury within everyone's reach. We believe that elegance and quality 
              shouldn't come with an unaffordable price tag.
            </p>

            <p className="text-lg leading-relaxed">
              Our carefully curated collection features rings, bracelets, necklaces, and earrings, each piece 
              designed to add a touch of glamour to your everyday style or make your special occasions even more 
              memorable.
            </p>

            <div className="bg-muted/50 p-8 rounded-lg my-8">
              <h2 className="text-2xl font-bold mb-4">Why Choose Kashkin Gems?</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span><strong>Premium Quality:</strong> High-quality gold plating that looks and feels luxurious</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span><strong>Affordable Prices:</strong> Luxury jewellery at prices that won't break the bank</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span><strong>Local Business:</strong> Proud to serve our Kuwait community</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span><strong>Fast Delivery:</strong> Free delivery across Kuwait with Cash on Delivery option</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary font-bold mr-3">✓</span>
                  <span><strong>Customer Care:</strong> 24/7 WhatsApp support for all your queries</span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed">
              At Kashkin Gems, we're passionate about helping you express your unique style through beautiful jewellery 
              that makes you feel confident and radiant. Every piece in our collection is selected with care to ensure 
              you get the best value for your money.
            </p>

            <p className="text-lg leading-relaxed">
              Whether you're treating yourself or finding the perfect gift for someone special, Kashkin Gems is here 
              to make luxury accessible to everyone in Kuwait.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
