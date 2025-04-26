
import { Clock } from "lucide-react";

const OperatingHours = () => {
  const hours = [
    { day: "Monday - Thursday", time: "11:00 AM - 9:00 PM" },
    { day: "Friday - Saturday", time: "11:00 AM - 10:00 PM" },
    { day: "Sunday", time: "12:00 PM - 8:00 PM" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-primary mb-4">
        <Clock className="text-yellow-300 w-5 h-5" />
        <h3 className="text-white font-semibold">Operating Hours</h3>
      </div>
      {hours.map((schedule) => (
        <div key={schedule.day} className="flex justify-between">
          <span className="text-white">{schedule.day}</span>
          <span className="text-white">{schedule.time}</span>
        </div>
      ))}
    </div>
  );
};

export default OperatingHours;
