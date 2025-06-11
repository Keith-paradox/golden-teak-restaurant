import Navigation from "@/components/Navigation";
import MenuItem from "@/components/MenuItem";
import OperatingHours from "@/components/OperatingHours";
import { MapPin, Phone, Mail, Clock, Book, Utensils } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Index = () => {
  const specialties = [
    {
      title: "Masala Dosa",
      description: "Crispy rice crepe filled with spiced potato, served with coconut chutney and sambar.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      price: "$8.99"
    },
    {
      title: "Idli with Sambar",
      description: "Steamed rice cakes served with lentil-based sambar and coconut chutney.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      price: "$6.99"
    },
    {
      title: "Medu Vada",
      description: "Crispy savory lentil doughnuts served with sambar and chutney.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      price: "$7.50"
    },
    {
      title: "Uttapam",
      description: "Thick savory pancake topped with onions, tomatoes, and chilies, served with chutney.",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=300&fit=crop",
      price: "$9.50"
    },
    {
      title: "Pongal",
      description: "Creamy rice and lentil porridge seasoned with pepper, cumin, and ghee.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      price: "$7.99"
    },
    {
      title: "Vegetable Biryani",
      description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      price: "$12.99"
    },
    {
      title: "Rasam",
      description: "Spicy and tangy South Indian soup made with tamarind, tomatoes, and spices.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      price: "$5.99"
    },
    {
      title: "Appam with Stew",
      description: "Soft fermented rice pancakes served with coconut vegetable stew.",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=300&fit=crop",
      price: "$10.50"
    },
    {
      title: "Filter Coffee",
      description: "Traditional South Indian coffee brewed with chicory and served with frothy milk.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      price: "$4.50"
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center pt-24">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://themindfulpeanut.com/wp-content/uploads/2022/05/saladheader.jpg")',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-cream mb-4">
            Experience the taste of South Indian Tradition
          </h1>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4 bg-cream">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Utensils className="w-6 h-6 text-yellow-500 mr-2" />
            <h2 className="text-3xl font-bold text-amber-900">Our Specialties</h2>
          </div>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {specialties.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/4">
                  <Card className="h-full bg-cream-light hover:shadow-lg transition-shadow flex flex-col">
                    <div className="relative w-full">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="object-cover w-full h-full rounded-t-lg"
                        />
                      </AspectRatio>
                    </div>
                    <CardHeader className="pb-2 flex-grow flex flex-col">
                      <CardTitle className="text-xl font-semibold text-teak">{item.title}</CardTitle>
                      <CardDescription className="text-sage-dark flex-grow mb-4">{item.description}</CardDescription>
                      <div className="mt-auto">
                        <span className="text-lg font-bold text-burgundy">{item.price}</span>
                      </div>
                    </CardHeader>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12" />
              <CarouselNext className="-right-12" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-[#A7845A]">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Book className="w-6 h-6 text-yellow-500 mr-2" />
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-white mb-6">
              Welcome to Golden Teak, where we bring the authentic flavors of South India to your table. Our cuisine features traditional recipes passed down through generations, showcasing the rich culinary heritage of South Indian states.
            </p>
            <p className="text-lg text-white">
              Each dish is carefully prepared by our expert chefs who maintain the traditional cooking methods while using the finest ingredients. We're proud to share our cultural heritage through our authentic South Indian cuisine.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-[#5A290F]/85">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-yellow-500" />
                <p className="text-white text-lg">500 16th Street, San Francisco, CA 94103</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-500" />
                <p className="text-white text-lg">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <p className="text-white text-lg">info@goldenteak.com</p>
              </div>
            </div>
            <OperatingHours />
          </div>
        </div>
      </section>

      {/* Removed ReservationWidget */}
      {/* <ReservationWidget /> */}
    </div>
  );
};

export default Index;
