import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const whatsappNumber = '965XXXXXXXX'; // Replace with actual number
  const message = 'Hi, I have a question about Kashkin Gems jewellery';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 shadow-gold"
    >
      <Button
        size="lg"
        className="rounded-full h-14 w-14 p-0 gradient-gold hover:opacity-90 transition-smooth"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
};

export default WhatsAppButton;
