import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MapPin, Clock } from "lucide-react";

const itinerary = {
  days: [
    {
      day: "Day 1",
      title: "Arrival & Exploring",
      activities: [
        {
          time: "01:00 pm",
          title: "Meet up",
          location: "LRT Buendia, Pasay",
        },
        {
          time: "02:00 pm",
          title: "Airbnb Check in",
          location: "Binondo, Manila",
        },
        {
          time: "03:00 pm",
          title: "Explore Binondo",
          location: "Binondo Chinatown",
          note: "Checkout the pinned food spots",
        },
        {
          time: "07:00 pm",
          title: "Go back to airbnb",
          location: "Binondo Chinatown",
        },
      ],
    },
    {
      day: "Day 2",
      title: "Chill Day",
      activities: [
        {
          time: "11:00 am",
          title: "Check out",
          location: "Binondo Manila",
        },
        {
          time: "12:00 pm",
          title: "Lunch",
          location: "Summit Viewpoint",
        },
        {
          time: "01:00 pm",
          title: "Explore Part 2",
          location: "Binondo, Manila",
        },
        {
          time: "03:00 pm",
          title: "Go home",
          location: "LRT Buendia, Pasay",
        },
      ],
    },
  ],
};

export function ItinerarySection() {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-150 bg-background p-4 rounded-2xl border">
        <h2 className="text-3xl font-bold mb-6">Trip Itinerary</h2>

        <Tabs defaultValue="Day 1">
          <TabsList className="mb-6">
            {itinerary.days.map((day) => (
              <TabsTrigger key={day.day} value={day.day}>
                {day.day}
              </TabsTrigger>
            ))}
          </TabsList>

          {itinerary.days.map((day) => (
            <TabsContent key={day.day} value={day.day}>
              <Card className="border">
                <CardHeader>
                  <CardTitle>{day.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {day.activities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 border-b pb-4 last:border-none"
                    >
                      <div className="flex items-center gap-1 text-muted-foreground w-20">
                        <Clock size={16} />
                        {activity.time}
                      </div>

                      <div className="flex-1">
                        <p className="font-medium">{activity.title}</p>

                        <div className="flex items-center text-sm text-muted-foreground gap-1">
                          <MapPin size={14} />
                          {activity.location}
                        </div>

                        {activity.note && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {activity.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
