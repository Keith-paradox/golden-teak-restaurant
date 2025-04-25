
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MessageCircle, PhoneCall } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ReservationWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReservation, setIsReservation] = useState(true);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isReservation ? "Reservation Submitted" : "Inquiry Sent",
      description: "We'll get back to you soon!",
    });
    setIsOpen(false);
  };

  const handleCall = () => {
    toast({
      title: "Connecting to AI Support",
      description: "Please wait while we connect you to our AI customer support.",
    });
    // AI call integration would go here
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 p-4 bg-cream shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-teak">
              {isReservation ? "Make a Reservation" : "Send an Inquiry"}
            </h3>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              ✕
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Name" required />
            <Input type="email" placeholder="Email" required />
            {isReservation ? (
              <>
                <Input type="date" required />
                <Input type="time" required />
                <Input placeholder="Number of guests" type="number" required />
              </>
            ) : (
              <Textarea placeholder="Your message" required />
            )}
            <Button 
              type="submit" 
              className="w-full bg-teak text-white hover:bg-teak-dark"
            >
              Submit
            </Button>
          </form>

          <div className="mt-4">
            <Button
              onClick={handleCall}
              variant="outline"
              className="w-full border-teak text-teak hover:bg-teak hover:text-white"
            >
              <PhoneCall className="w-4 h-4 mr-2" />
              Talk to AI Support
            </Button>
          </div>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-teak text-white hover:bg-teak-dark shadow-lg"
        >
          <Calendar className="w-5 h-5 mr-2" />
          Make a Reservation
        </Button>
      )}
    </div>
  );
};

export default ReservationWidget;
