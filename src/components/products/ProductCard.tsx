import { MessageCircle } from "lucide-react";

interface ProductCardProps {
  name: string;
  specs: string;
  originalPrice?: string;
  discountedPrice?: string;
  image?: string;
  whatsappNumber: string;
}

const ProductCard = ({ name, specs, originalPrice, discountedPrice, image, whatsappNumber }: ProductCardProps) => {
  const generateWhatsAppLink = () => {
    let message = `Hi, I'm interested in the ${name} (${specs}).`;
    if (discountedPrice) {
      message += ` Listed price: ${discountedPrice}.`;
    }
    message += " Please share more details.";
    
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden card-hover flex flex-col">
      {/* Product Image */}
      <div className="aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Product Image</span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3 flex-1">{specs}</p>
        
        {(originalPrice || discountedPrice) && (
          <div className="mb-4 flex items-center gap-3">
            {originalPrice && (
              <span className="text-destructive line-through text-base">{originalPrice}</span>
            )}
            {discountedPrice && (
              <span className="text-green-accent font-bold text-xl">{discountedPrice}</span>
            )}
          </div>
        )}

        <a
          href={generateWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-accent text-header rounded-md font-medium text-sm hover:bg-green-accent-hover transition-colors duration-200 w-full"
        >
          <MessageCircle className="w-4 h-4" />
          Contact on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
