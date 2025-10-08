import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Facebook, Instagram, MessageSquare, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gentle-blue to-warm-yellow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to join our supportive community? We'd love to welcome you and your family to SAMMU. 
            Reach out to us through any of the following ways.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-gentle transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="w-12 h-12 bg-gradient-to-br from-warm-yellow to-soft-blue rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Send us an email for general inquiries, questions, or to request access to our WhatsApp group.
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('mailto:hello@sammu.co.uk', '_blank')}
              >
                hello@sammu.co.uk
              </Button>
            </CardContent>
          </Card>

          {/* Facebook */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-gentle transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="w-12 h-12 bg-gradient-to-br from-warm-yellow to-soft-blue rounded-full flex items-center justify-center">
                  <Facebook className="h-6 w-6 text-primary" />
                </div>
                Facebook Group
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Join our active Facebook community to connect with other parents and stay updated on meetups.
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('https://www.facebook.com/groups/223798727795056/', '_blank')}
              >
                Join Facebook Group
              </Button>
            </CardContent>
          </Card>

          {/* Instagram */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-gentle transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <div className="w-12 h-12 bg-gradient-to-br from-warm-yellow to-soft-blue rounded-full flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                Instagram
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Follow us on Instagram for photos from our meetups and community updates.
              </p>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.open('https://www.instagram.com/stalbansmmu', '_blank')}
              >
                @stalbansmmu
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* WhatsApp Info */}
          <Card className="bg-card/60 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <MessageSquare className="h-6 w-6 text-primary" />
                WhatsApp Community
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80">
                Our WhatsApp group is where the daily magic happens! Parents share quick questions, 
                celebrate milestones, and offer real-time support to each other.
              </p>
              <div className="bg-gradient-to-r from-warm-yellow/20 to-soft-blue/20 rounded-xl p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>To join our WhatsApp group:</strong> Send us an email at hello@sammu.co.uk 
                  with your phone number and a brief introduction about your family.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Meeting Location & Info */}
          <Card className="bg-card/60 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-foreground">
                <MapPin className="h-6 w-6 text-primary" />
                Meetup Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">When</p>
                    <p className="text-muted-foreground text-sm">Monthly meetups, typically on Mondays</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Where</p>
                    <p className="text-muted-foreground text-sm">Location details shared in our community groups</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-warm-yellow/20 to-soft-blue/20 rounded-xl p-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Stay updated:</strong> Join our Facebook group or WhatsApp community 
                  for exact dates, times, and locations of upcoming meetups.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Ready to Join Our Family?
            </h3>
            <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
              Whether you're expecting multiples, have newborns, or your children are older, 
              you're welcome in our community. Every family's journey is unique, and we're here to support yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm"
                onClick={() => window.open('mailto:hello@sammu.co.uk?subject=Interested in joining SAMMU', '_blank')}
              >
                Send Us an Email
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://www.facebook.com/groups/223798727795056/', '_blank')}
              >
                Join Facebook Group
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;