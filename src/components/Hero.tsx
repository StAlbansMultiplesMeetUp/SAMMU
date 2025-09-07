import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Coffee } from "lucide-react";
import sammuHero from "@/assets/sammu-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-yellow to-soft-blue overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-warm-yellow/20 to-soft-blue/20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Welcome to
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SAMMU
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                St Albans Multiples Meet Up
              </h2>
              <p className="text-lg text-foreground/80 max-w-lg mx-auto lg:mx-0">
                A supportive community for parents of twins, triplets, and other multiples. 
                Connect, share, and grow together with nearly 200 families from St Albans and surrounding areas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Our Community
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="p-4 text-center bg-card/60 backdrop-blur-sm border-border/50">
                <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold text-foreground">200+</p>
                <p className="text-sm text-muted-foreground">Families</p>
              </Card>
              <Card className="p-4 text-center bg-card/60 backdrop-blur-sm border-border/50">
                <Coffee className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold text-foreground">Monthly</p>
                <p className="text-sm text-muted-foreground">Meetups</p>
              </Card>
              <Card className="p-4 text-center bg-card/60 backdrop-blur-sm border-border/50">
                <Heart className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold text-foreground">Support</p>
                <p className="text-sm text-muted-foreground">& Friendship</p>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-warm">
              <img 
                src={sammuHero} 
                alt="SAMMU community meetup with families and children playing together in our welcoming space"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sunshine rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gentle-blue rounded-full opacity-40 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;