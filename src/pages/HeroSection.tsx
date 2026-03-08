import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

export function HeroSection() {
  return (
    <section className="h-screen flex justify-center items-center">
      <Card className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 border">
        {/* Trip Info */}
        <div className="space-y-3">
          <h1 className="text-3xl font-bold">Binondo Food Trip</h1>

          <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              Binondo, Makati, Manila
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={16} />
              Apr 11 – Apr 12, 2026
            </div>

            <div className="flex items-center gap-2">
              <Users size={16} />
              You & Me
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          {/* <Button variant="outline">Share</Button> */}
          <Button>Ready?</Button>
        </div>
      </Card>
    </section>
  );
}
