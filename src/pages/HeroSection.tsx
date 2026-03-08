import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export const HeroSection = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <Card className="w-150 bg-white/20 backdrop-blur-md shadow-lg rounded-2xl text-center">
        <CardHeader>
          <CardTitle className="text-3xl md:text-5xl">
            Binondo Food Trip
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm md:text-base">April 11 - 12, 2026</p>
        </CardContent>
      </Card>
    </section>
  );
};
