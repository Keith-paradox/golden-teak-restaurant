import Navigation from "@/components/Navigation";
import MenuItem from "@/components/MenuItem";
import ReservationWidget from "@/components/ReservationWidget";
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

const Index = () => {
  const specialties = [
    {
      title: "Tea Leaf Salad (Lahpet Thoke)",
      description: "A unique Burmese specialty made with fermented tea leaves, crunchy nuts, sesame seeds, tomatoes, and dried shrimp, creating a rich, tangy, and savory flavor."
    },
    {
      title: "Mohinga",
      description: "A beloved Burmese breakfast dish, this is a thick rice noodle soup in a savory fish broth with lemongrass, garlic, and banana stem, topped with crispy fritters."
    },
    {
      title: "Shan Noodles",
      description: "A flavorful noodle dish from the Shan region, featuring rice noodles with a rich tomato and garlic-based chicken or pork sauce, served with pickled mustard greens."
    },
    {
      title: "Coconut Chicken Noodle Soup (Ohn No Khao Swe)",
      description: "A comforting coconut milk-based noodle soup with tender chicken, boiled egg, and crispy fried noodles on top."
    },
    {
      title: "Burmese Curries",
      description: "Slow-cooked, fragrant curries served with rice and a variety of side dishes, offering a balance of spices, sweetness, and depth of flavor."
    },
    {
      title: "Palata & Dip",
      description: "Flaky, buttery Burmese-style flatbread served with a sweet or savory dipping sauce, perfect as an appetizer or side dish."
    },
    {
      title: "Myanmar Tea Shop Noodles",
      description: "A popular breakfast dish featuring thin rice noodles in a light chicken broth, topped with crispy pork, fresh herbs, and chili oil."
    },
    {
      title: "Shan Style Tofu Nway",
      description: "A unique dish made with chickpea flour 'tofu' served in a warm, savory sauce with rice noodles, chili oil, and peanuts."
    },
    {
      title: "Burmese Samosas",
      description: "Crispy triangular pastries filled with spiced potatoes, peas, and onions, served with a tangy tamarind dipping sauce."
    },
    {
      title: "Htamin Jin",
      description: "A flavorful rice salad with flaked fish, shredded green beans, onions, and crispy fried garlic, dressed in fish sauce and lime."
    },
    {
      title: "Kyay Oh",
      description: "A hearty noodle soup with tender pork, meatballs, and vegetables in a clear broth, topped with garlic oil and crispy wontons."
    },
    {
      title: "Nan Gyi Thoke",
      description: "Thick rice noodles tossed with chicken curry, chickpea flour, coconut milk, and crispy toppings, served at room temperature."
    }
  ];

  return (
    <div className="min-h-screen bg-cream-light">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-teak/10 to-cream-light">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-teak mb-4">
            Golden Teak Restaurant
          </h1>
          <p className="text-lg md:text-xl text-sage-dark max-w-2xl mx-auto">
            Experience the authentic flavors of Burma.
          </p>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 px-4 bg-cream">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Utensils className="w-6 h-6 text-teak mr-2" />
            <h2 className="text-3xl font-bold text-sage">Our Specialties</h2>
          </div>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {specialties.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/3">
                  <Card className="h-full bg-cream-light hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-teak">{item.title}</CardTitle>
                      <CardDescription className="text-sage-dark">{item.description}</CardDescription>
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
      <section id="about" className="py-16 px-4 bg-sage/5">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Book className="w-6 h-6 text-teak mr-2" />
            <h2 className="text-3xl font-bold text-sage">Our Story</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-sage-dark mb-6">
              Welcome to Golden Teak, where we bring the authentic flavors of Burma to your table. Our cuisine is a delicious blend of flavors influenced by Chinese, Indian, and Thai cooking, featuring bold spices, fermented ingredients, and fresh herbs.
            </p>
            <p className="text-lg text-sage-dark">
              Each dish is carefully prepared by our expert chefs who maintain the traditional cooking methods while adding their own contemporary twist. We're proud to share our cultural heritage through our food.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-teak/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <p className="text-lg">500 16th Street, San Francisco, CA 94103</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-lg">info@goldenteak.com</p>
              </div>
            </div>
            <OperatingHours />
          </div>
        </div>
      </section>

      <ReservationWidget />
    </div>
  );
};

export default Index;
