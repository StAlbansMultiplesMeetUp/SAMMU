import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Share2, HandHeart } from "lucide-react";

const Community = () => {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: "Share Experiences",
      description: "Connect with other parents who truly understand the unique joys and challenges of raising multiples."
    },
    {
      icon: HandHeart,
      title: "Practical Support",
      description: "Get advice, tips, and recommendations from experienced parents who've been through similar situations."
    },
    {
      icon: Share2,
      title: "Information Exchange",
      description: "Share resources, local services, and helpful information that benefits all families in our community."
    },
    {
      icon: Heart,
      title: "Lasting Friendships",
      description: "Build meaningful relationships with families from St Albans and surrounding areas who become lifelong friends."
    }
  ];

  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Community
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Beyond our monthly meetups, SAMMU thrives as an active online community where 
            families support each other every day through shared experiences, advice, and friendship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <Card key={index} className="text-center p-6 bg-card hover:shadow-gentle transition-all duration-300 border-border/50">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-warm-yellow to-soft-blue rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Community Stats & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Growing Together
              </h3>
              <p className="text-foreground/80 mb-6">
                Our community has grown to include nearly 200 families from St Albans and the 
                surrounding towns and villages. Each family brings their own unique experiences, 
                creating a rich tapestry of support and friendship.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-warm-yellow/20 to-transparent rounded-2xl p-6 border border-border/30">
                <p className="text-3xl font-bold text-primary mb-2">200+</p>
                <p className="text-foreground font-medium">Families</p>
                <p className="text-sm text-muted-foreground">Active community members</p>
              </div>
              <div className="bg-gradient-to-br from-soft-blue/20 to-transparent rounded-2xl p-6 border border-border/30">
                <p className="text-3xl font-bold text-primary mb-2">24/7</p>
                <p className="text-foreground font-medium">Support</p>
                <p className="text-sm text-muted-foreground">Online community chat</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">What Our Members Share:</h4>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Sleep strategies and feeding schedules that work</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Recommendations for local services and activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Equipment swaps and hand-me-downs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Celebration of milestones and achievements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Support during challenging times</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How to Join */}
          <div className="bg-gradient-to-br from-warm-yellow/10 to-soft-blue/10 rounded-3xl p-8 lg:p-12 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Join Our Community
            </h3>
            
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-foreground/80 mb-6">
                  Ready to connect with other parents who understand your journey? 
                  Join our active online community today!
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm"
                  onClick={() => window.open('https://www.facebook.com/groups/223798727795056/', '_blank')}
                >
                  Join Our Facebook Group
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get WhatsApp Group Access
                </Button>
              </div>

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground">
                  Have questions? Email us at{' '}
                  <a 
                    href="mailto:hello@sammu.co.uk" 
                    className="text-primary hover:underline"
                  >
                    hello@sammu.co.uk
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;