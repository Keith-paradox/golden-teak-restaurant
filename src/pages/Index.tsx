
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
import kyay_oh from "@/images/Kyay-Oh.jpg";
import laphet_thoke from "@/images/Laphet-Thoke.jpg";
import mohinga from "@/images/Mohinga.jpg";
import nga_htamin from "@/images/Nga-Htamin.jpg"
import nan_gyi_thoke from "@/images/Nan-Gyi-Thoke.jpg";
import nan_pyar_thoke from "@/images/Nan-Pyar-Thoke.jpg";
import oh_noh_khoukswl from "@/images/Oh-Noh-KhoukSwl.jpg";
import prata_dip from "@/images/Prata-Dip.jpg";
import samosa from "@/images/Samosa.jpg";
import shan_noodle from "@/images/Shan-Noodles.jpg";
import tofu_nway from "@/images/Tofu-Nway.jpg";

const Index = () => {
  const specialties = [
    {
      title: "Tea Leaf Salad (Lahpet Thoke)",
      description: "A unique Burmese specialty made with fermented tea leaves, crunchy nuts, sesame seeds, tomatoes, and dried shrimp, creating a rich, tangy, and savory flavor.",
      image: laphet_thoke,
      price: "$12.95"
    },
    {
      title: "Mohinga",
      description: "A beloved Burmese breakfast dish, this is a thick rice noodle soup in a savory fish broth with lemongrass, garlic, and banana stem, topped with crispy fritters.",
      image: mohinga,
      price: "$14.95"
    },
    {
      title: "Shan Noodles",
      description: "A flavorful noodle dish from the Shan region, featuring rice noodles with a rich tomato and garlic-based chicken or pork sauce, served with pickled mustard greens.",
      image: shan_noodle,
      price: "$13.95"
    },
    {
      title: "Coconut Chicken Noodle Soup (Ohn No Khao Swe)",
      description: "A comforting coconut milk-based noodle soup with tender chicken, boiled egg, and crispy fried noodles on top.",
      image: oh_noh_khoukswl,
      price: "$15.95"
    },
    {
      title: "Palata & Dip",
      description: "Flaky, buttery Burmese-style flatbread served with a sweet or savory dipping sauce, perfect as an appetizer or side dish.",
      image: prata_dip,
      price: "$8.95"
    },
    {
      title: "Shan Style Tofu Nway",
      description: "A unique dish made with chickpea flour 'tofu' served in a warm, savory sauce with rice noodles, chili oil, and peanuts.",
      image: tofu_nway,
      price: "$11.95"
    },
    {
      title: "Burmese Samosas",
      description: "Crispy triangular pastries filled with spiced potatoes, peas, and onions, served with a tangy tamarind dipping sauce.",
      image: samosa,
      price: "$7.95"
    },
    {
      title: "Shan Fish Rice (Ngar Htamin)",
      description: "A flavorful rice salad with flaked fish, shredded green beans, onions, and crispy fried garlic, dressed in fish sauce and lime.",
      image: nga_htamin,
      price: "$13.95"
    },
    {
      title: "Kyay Oh",
      description: "A hearty noodle soup with tender pork, meatballs, and vegetables in a clear broth, topped with garlic oil and crispy wontons.",
      image: kyay_oh,
      price: "$16.95"
    },
    {
      title: "Nan Pyar Thoke",
      description: "A popular breakfast dish featuring thin flat rice noodles in a light chicken broth, topped with crispy pork, fresh herbs, and chili oil.",
      image: nan_pyar_thoke,
      price: "$12.95"
    },
    {
      title: "Nan Gyi Thoke",
      description: "Thick rice noodles tossed with chicken curry, chickpea flour, coconut milk, and crispy toppings, served at room temperature.",
      image: nan_gyi_thoke,
      price: "$14.95"
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
            Experience the taste of Burmese Tradition
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
                  <Card className="h-full bg-cream-light hover:shadow-lg transition-shadow">
                    <div className="relative w-full">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="object-cover w-full h-full rounded-t-lg"
                        />
                      </AspectRatio>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl font-semibold text-teak">{item.title}</CardTitle>
                      <CardDescription className="text-sage-dark">{item.description}</CardDescription>
                      <div className="pt-2 border-t border-sage-light mt-2">
                        <span className="text-lg font-bold text-teak">{item.price}</span>
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
              Welcome to Golden Teak, where we bring the authentic flavors of Burma to your table. Our cuisine is a delicious blend of flavors influenced by Chinese, Indian, and Thai cooking, featuring bold spices, fermented ingredients, and fresh herbs.
            </p>
            <p className="text-lg text-white">
              Each dish is carefully prepared by our expert chefs who maintain the traditional cooking methods while adding their own contemporary twist. We're proud to share our cultural heritage through our food.
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
