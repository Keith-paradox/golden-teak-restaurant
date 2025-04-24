
import Navigation from "@/components/Navigation";
import MenuItem from "@/components/MenuItem";
import ReservationWidget from "@/components/ReservationWidget";
import { Phone, Mail, Clock, Book, Utensils } from "lucide-react";

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
            Experience the authentic flavors of Burma, where Chinese, Indian, and Thai influences create a unique and delicious culinary journey.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </div>
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
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Phone className="w-6 h-6 text-teak mr-2" />
            <h2 className="text-3xl font-bold text-sage">Contact Us</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-teak mr-3" />
                  <p className="text-sage-dark">+1 (555) 123-4567</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-teak mr-3" />
                  <p className="text-sage-dark">info@goldenteak.com</p>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-teak mr-3 mt-1" />
                  <div className="text-sage-dark">
                    <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
                    <p>Sunday: 12:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="bg-cream p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-teak mb-4">Location</h3>
                <p className="text-sage-dark">
                  500 16th Street<br />
                  San Francisco, CA 94103
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReservationWidget />
    </div>
  );
};

export default Index;
