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
          time: "09:00",
          title: "Breakfast at Cafe",
          location: "Downtown Cafe",
          note: "Try the local pastries",
        },
        {
          time: "11:00",
          title: "City Museum",
          location: "National Museum",
          note: "History and art exhibits",
        },
        {
          time: "14:00",
          title: "Lunch",
          location: "Street Food Market",
        },
      ],
    },
    {
      day: "Day 2",
      title: "Chill Day",
      activities: [
        {
          time: "08:00",
          title: "Mountain Hike",
          location: "Mt. Ridge Trail",
        },
        {
          time: "13:00",
          title: "Picnic Lunch",
          location: "Summit Viewpoint",
        },
        {
          time: "18:30",
          title: "Sunset Beach",
          location: "Coral Beach",
        },
      ],
    },
  ],
};

export function ItinerarySection() {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-150 bg-white/20 backdrop-blur-md shadow-lg p-4 rounded-2xl">
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
              <Card>
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
