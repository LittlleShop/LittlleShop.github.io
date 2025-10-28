import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Heart, Target, Users, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Quality First",
      description: "We carefully select every toy for safety, durability, and educational value."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Child Development",
      description: "Our toys are chosen to support learning through play at every stage."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inclusive Play",
      description: "We believe every child deserves access to toys that celebrate diversity."
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Joy & Wonder",
      description: "Creating magical moments and lasting memories through imaginative play."
    }
  ];

  const team = [
    {
      name: "Emma Thompson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop"
    },
    {
      name: "Sofia Rodriguez",
      role: "Customer Experience",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop"
    },
    {
      name: "David Park",
      role: "Operations Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 md:py-32 bg-gradient-hero overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Story
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Building brighter futures, one toy at a time
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2020, LittleShop Toys was born from a simple belief: every child deserves access to toys that inspire creativity, encourage learning, and bring pure joy. We're a team of parents, educators, and toy enthusiasts dedicated to curating the finest selection of toys for children of all ages and abilities.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="rounded-2xl overflow-hidden shadow-card animate-scale-in">
                  <img 
                    src="https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&auto=format&fit=crop"
                    alt="Children playing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center animate-scale-in" style={{ animationDelay: '200ms' }}>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We're committed to providing high-quality, educational toys that support child development while promoting sustainable and ethical manufacturing practices.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Every toy in our collection is carefully selected for its ability to engage, educate, and inspire young minds. We partner with trusted brands that share our values of safety, quality, and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-2xl p-8 shadow-card text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Passionate people working to bring joy to families
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-card mb-4">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50K+", label: "Happy Families" },
                { value: "1000+", label: "Quality Toys" },
                { value: "98%", label: "Satisfaction Rate" },
                { value: "24/7", label: "Customer Support" }
              ].map((stat, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-white/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
