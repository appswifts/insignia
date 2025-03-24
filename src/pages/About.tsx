
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import AnimatedCounter from '@/components/AnimatedCounter';
import { ArrowRight, Users, Building, Heart, Award, Landmark, HandHelping } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Hero 
        title="About Insignia Housing CIC"
        subtitle="Learn more about who we are and our mission to inspire and support vulnerable individuals."
        image="/about-hero.jpg"
        centered={false}
      />

      {/* Our Story Section */}
      <Section>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 animate-slide-in">
            <span className="tag mb-4">OUR STORY</span>
            <h2 className="heading-lg mb-6">A Commitment to Making a Difference</h2>
            <p className="body-md text-muted-foreground mb-6">
              Insignia Housing CIC was founded with a clear mission: to address the growing crisis of homelessness in Birmingham by providing not just shelter, but comprehensive support that empowers individuals to rebuild their lives.
            </p>
            <p className="body-md text-muted-foreground mb-6">
              What began as a small initiative has grown into a respected organization that has helped hundreds of vulnerable adults find stability, dignity, and hope. Our journey is marked by countless success stories of individuals who have transformed their lives with our support.
            </p>
            <p className="body-md text-muted-foreground">
              Today, we continue to expand our services and reach, driven by our unwavering commitment to making a tangible difference in our community.
            </p>
          </div>
          <div className="lg:w-1/2 h-[450px] overflow-hidden rounded-2xl shadow-xl animate-fade-in">
            <img 
              src="/about-story.jpg" 
              alt="Our Story" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section background="light">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-xl shadow-sm animate-fade-in">
            <div className="h-14 w-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
              <Landmark size={28} />
            </div>
            <h3 className="heading-md mb-4">Our Mission</h3>
            <p className="body-md text-muted-foreground">
              To provide high-quality accommodation and tailored support services to vulnerable adults, empowering them to overcome barriers and build independent, fulfilling lives. We are committed to addressing homelessness with dignity, compassion, and practical solutions.
            </p>
          </div>
          
          <div className="bg-white p-10 rounded-xl shadow-sm animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="h-14 w-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
              <HandHelping size={28} />
            </div>
            <h3 className="heading-md mb-4">Our Vision</h3>
            <p className="body-md text-muted-foreground">
              We envision a Birmingham where homelessness is rare, brief, and non-recurring. A community where every individual has access to safe housing, supportive services, and the opportunity to thrive. Through our work, we aim to create lasting change that transforms lives and strengthens our entire community.
            </p>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <div className="text-center mb-16 animate-fade-in">
          <span className="tag mb-4">OUR VALUES</span>
          <h2 className="heading-lg mb-6">The Principles That Guide Us</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Our core values shape every aspect of our work and define our approach to supporting vulnerable individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Users size={24} />,
              title: "Respect",
              description: "We treat every individual with dignity and respect, recognizing their inherent worth regardless of their circumstances."
            },
            {
              icon: <Heart size={24} />,
              title: "Compassion",
              description: "We approach our work with empathy and understanding, creating a supportive environment where people feel valued."
            },
            {
              icon: <Building size={24} />,
              title: "Quality",
              description: "We are committed to maintaining high standards in our accommodations and services, ensuring the best possible support."
            },
            {
              icon: <Award size={24} />,
              title: "Integrity",
              description: "We operate with honesty and transparency, building trust with those we serve and our community partners."
            },
            {
              icon: <Landmark size={24} />,
              title: "Empowerment",
              description: "We believe in helping individuals develop the skills and confidence to achieve independence and self-sufficiency."
            },
            {
              icon: <HandHelping size={24} />,
              title: "Collaboration",
              description: "We work closely with community partners, recognizing that addressing homelessness requires a coordinated approach."
            }
          ].map((value, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-14 w-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                {value.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Impact Section */}
      <Section background="dark">
        <div className="text-center mb-16 animate-fade-in">
          <span className="tag mb-4">OUR IMPACT</span>
          <h2 className="heading-lg mb-6">Making a Difference</h2>
          <p className="body-md opacity-80 max-w-2xl mx-auto">
            Since our founding, we've made a significant impact on addressing homelessness in Birmingham.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCounter value={500} suffix="+" title="People Housed" />
          <AnimatedCounter value={200} suffix="+" title="Properties Managed" />
          <AnimatedCounter value={15} suffix="+" title="Years Experience" />
          <AnimatedCounter value={98} suffix="%" title="Client Satisfaction" />
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <div className="text-center mb-16 animate-fade-in">
          <span className="tag mb-4">OUR TEAM</span>
          <h2 className="heading-lg mb-6">Meet the People Behind Insignia Housing</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team brings together expertise in housing, social work, mental health, and community development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[
            { name: "Jane Smith", role: "Founder & CEO", image: "/team-1.jpg" },
            { name: "Michael Johnson", role: "Operations Director", image: "/team-2.jpg" },
            { name: "Sarah Williams", role: "Support Services Manager", image: "/team-3.jpg" },
            { name: "David Brown", role: "Property Manager", image: "/team-4.jpg" }
          ].map((member, index) => (
            <div 
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-64 rounded-xl overflow-hidden mb-4 shadow-md">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-medium">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="light">
        <div className="text-center animate-fade-in">
          <h2 className="heading-lg mb-6">Ready to Learn More?</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover how our services can help you or someone you know, or explore opportunities to support our mission.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Button asChild className="rounded-full">
              <Link to="/services">
                Our Services
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default About;
