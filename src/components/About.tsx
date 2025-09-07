import { Card, CardContent } from "@/components/ui/card";
import { Baby, Users, MessageCircle, Calendar } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Baby,
      title: "For All Multiples",
      description: "Supporting parents of twins, triplets, quadruplets, and higher order multiples with understanding and experience."
    },
    {
      icon: Users,
      title: "Strong Community",
      description: "Nearly 200 families from St Albans and surrounding towns and villages, all sharing similar experiences."
    },
    {
      icon: MessageCircle,
      title: "Share & Connect",
      description: "Exchange information, help, advice, and stories through our Facebook group and WhatsApp community."
    },
    {
      icon: Calendar,
      title: "Regular Meetups",
      description: "Monthly Tuesday meetups with coffee, biscuits, toys, and occasional guest speakers in a welcoming environment."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            About SAMMU
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            SAMMU (St Albans Multiples Meet Up) is a local community group created specifically 
            to help and support parents of multiples. We understand the unique joys and challenges 
            that come with raising twins, triplets, and other multiples.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center p-6 bg-card border-border/50 hover:shadow-gentle transition-all duration-300">
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

        <div className="bg-gradient-to-r from-warm-yellow/20 to-soft-blue/20 rounded-3xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  A Safe, Supportive Space
                </h3>
                <div className="space-y-4 text-foreground/80">
                  <p>
                    Our monthly meetups provide a wonderful opportunity for parents to socialise 
                    while children play in a safe, fun environment with age-appropriate toys and activities.
                  </p>
                  <p>
                    We occasionally welcome guest speakers and visitors who can provide additional 
                    support, information, and resources for our community members.
                  </p>
                  <div className="bg-card/60 rounded-2xl p-6 border border-border/50">
                    <p className="font-medium text-foreground mb-2">
                      <strong>Important Note:</strong>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      SAMMU is not a baby sitting or child minding service. All parents remain 
                      fully responsible for their children during our meetups.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-block bg-card rounded-3xl p-8 shadow-gentle">
                  <div className="space-y-6">
                    <div>
                      <p className="text-3xl font-bold text-primary">200+</p>
                      <p className="text-muted-foreground">Families in our community</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">Monthly</p>
                      <p className="text-muted-foreground">Meetups every Tuesday</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary">Years</p>
                      <p className="text-muted-foreground">Of community support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;