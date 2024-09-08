export interface Restaurant {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    address: string;        
    phone: string;         
    openingHours: string;  
    deliveryTimeEstimate : string;
    reviews: { rating: number; comment: string; customer: string }[]; 
  }
  