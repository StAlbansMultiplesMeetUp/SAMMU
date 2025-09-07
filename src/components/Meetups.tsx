import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Coffee, Gamepad2, Users, Speaker } from "lucide-react";
import sammuMeetup from "@/assets/sammu-meetup.jpg";

const Meetups = () => {
  return (
    <section id="meetups" className="py-20 bg-gradient-to-br from-gentle-blue to-sunshine">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Monthly Meetups
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for our regular monthly meetups, typically held on Tuesdays. 
            A welcoming space for families to connect, children to play, and parents to share experiences.
          </p>
        </div>

        {/* Photo showcase */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl shadow-warm max-w-4xl mx-auto">
            <img 
              src={sammuMeetup}
              alt="SAMMU meetup showing families relaxing in our bright, welcoming community space"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Welcome to Our Monthly Meetups
                </h3>
                <p className="text-muted-foreground">
                  A safe, friendly space where families with multiples come together
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Meetup Details */}
          <div className="space-y-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Clock className="h-6 w-6 text-primary" />
                  When We Meet
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground/80">
                  <strong>Monthly meetups</strong> - typically on Tuesdays
                </p>
                <p className="text-muted-foreground text-sm">
                  Check our Facebook group or WhatsApp for exact dates and any updates
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Coffee className="h-6 w-6 text-primary" />
                  What We Provide
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Fresh coffee and tea for parents
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Biscuits and light refreshments
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Age-appropriate toys and activities
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Safe play mats and space for children
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Speaker className="h-6 w-6 text-primary" />
                  Special Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-foreground/80">
                  We occasionally welcome <strong>guest speakers</strong> and special visitors who can provide:
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Expert advice on multiple birth topics</li>
                  <li>• Child development guidance</li>
                  <li>• Health and wellness information</li>
                  <li>• Local family resources and services</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* What to Expect */}
          <div className="space-y-8">
            <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                What to Expect
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-warm-yellow to-soft-blue rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">For Parents</h4>
                  <p className="text-sm text-muted-foreground">
                    Relax with coffee while connecting with other parents who understand your journey
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-warm-yellow to-soft-blue rounded-full flex items-center justify-center">
                    <Gamepad2 className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">For Children</h4>
                  <p className="text-sm text-muted-foreground">
                    Safe play environment with toys, books, and space to explore and socialize
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-warm-yellow/30 to-soft-blue/30 rounded-2xl p-6 border border-border/50">
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Important Reminder
              </h4>
              <p className="text-foreground/80 text-sm leading-relaxed">
                SAMMU provides a social space for families, but please remember that this is 
                <strong> not a babysitting or childminding service</strong>. All parents remain 
                fully responsible for supervising and caring for their children throughout the meetup.
              </p>
            </div>

            <div className="text-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Join Our Next Meetup
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Connect with us on social media for meetup updates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meetups;