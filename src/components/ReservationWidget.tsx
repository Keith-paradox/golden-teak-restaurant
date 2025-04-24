
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, MessageCircle } from "lucide-react";
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

          <div className="space-x-2 mb-4">
            <Button
              variant={isReservation ? "default" : "outline"}
              size="sm"
              onClick={() => setIsReservation(true)}
              className="bg-teak text-white hover:bg-teak-dark"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Reservation
            </Button>
            <Button
              variant={!isReservation ? "default" : "outline"}
              size="sm"
              onClick={() => setIsReservation(false)}
              className="bg-teak text-white hover:bg-teak-dark"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Inquiry
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
