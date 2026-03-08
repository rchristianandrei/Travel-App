import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Utensils } from "lucide-react";

const places = [
  {
    name: "Binondo Bites",
    location: "628 Ongpin St, Binondo, Manila, 1006 Metro Manila",
    description: "Unknown Pastry Php 155.00 / 5pcs",
  },
  {
    name: "WongKei",
    location: "739 Ongpin St, Binondo, Manila, 1008 Metro Manila",
    description: "Sweet Drink Php 100.00",
  },
  {
    name: "Shanghai Fried Siopao",
    location: "828 Ongpin St, Santa Cruz, Manila, 1008 Metro Manila",
    description: "Fried Siopao Php 35.00",
  },
  {
    name: "Lord Stow's Bakery",
    location:
      "Imperial Sky Garden Condo Corporation, Ongpin St, Binondo, Manila, 1006 Metro Manila",
    description: "Egg Tart Php 65.00",
  },
  {
    name: "Don Bei Dumpling",
    location: "642 Yuchengco St, Binondo, Manila, 1006 Metro Manila",
    description: "Dumplings Php 200.00 / 14pcs",
  },
  {
    name: "Beanstro Coffee Shop",
    location: "Tytana Street, Binondo, 1006 Metro Manila",
    description: "Matcha Dish",
  },
];

export function MustVisitPlaces() {
  const openInMaps = (place: string) => {
    const query = encodeURIComponent(place);

    const url = /Android|iPhone|iPad/i.test(navigator.userAgent)
      ? `https://maps.google.com/?q=${query}`
      : `https://www.google.com/maps/search/?api=1&query=${query}`;

    window.open(url, "_blank");
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <section className="space-y-6 w-300 bg-background p-4 rounded-2xl border">
        <h2 className="text-2xl font-bold">Must Visit Places</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {places.map((place) => (
            <Card key={place.name}>
              <CardHeader>
                <CardTitle className="text-lg">{place.name}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                <div className="flex items-center text-sm text-muted-foreground gap-2">
                  <MapPin size={16} />
                  {place.location}
                </div>

                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Utensils size={16} />
                  {place.description}
                </p>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => openInMaps(place.name + " " + place.location)}
                >
                  View on Google Maps
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </section>
  );
}
