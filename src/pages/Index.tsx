import React, { useEffect } from 'react';
import { ArrowRight, Home, Heart, Lightbulb, Building, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import TestimonialCard from '@/components/TestimonialCard';
import ImageGallery from '@/components/ImageGallery';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportImages = [
    "/lovable-uploads/42f8308d-a565-4c51-bc6f-38cfbf142c09.png",
    "https://media.istockphoto.com/id/2030019953/photo/mother-playing-with-autistic-daughter.jpg?s=612x612&w=0&k=20&c=uL1EA3d5natGnhbGgSHR-t59xOo4PrQpAjmsJMx-Tw4=",
    "/lovable-uploads/a61b53c9-ffad-4c16-90fa-15113cf32371.png",
    "https://media.istockphoto.com/id/2184072660/photo/joyful-child-embracing-the-holiday-spirit-at-home.jpg?s=612x612&w=0&k=20&c=ecJyUlHYJeIVkr8xJUaZWRtaqdIJAL0Ur-SY7TKSTpg=",
    "/lovable-uploads/b5380a36-6897-4e87-8f76-634c63e34407.png",
    "/lovable-uploads/dbe7172c-d546-433b-82a3-43435f687fdd.png",
    "/lovable-uploads/06761893-0be3-4051-9b9c-cce0ca15f44e.png",
    "/lovable-uploads/cad42fed-ace5-4bf1-9510-a1c497a054c0.png",
    "/lovable-uploads/f253cc90-f308-49be-b5fc-0c6c72b203d3.png"
  ];

  return (
    <main>
      {/* Hero Section */}
      <Hero 
        title="EMPOWERING FUTURES THROUGH QUALITY HOUSING"
        subtitle="Providing supportive, high-quality accommodations for vulnerable and homeless adults to build independent lives."
        image="/lovable-uploads/dbe7172c-d546-433b-82a3-43435f687fdd.png"
        address={false}
      />

      {/* Introduction Section */}
      <Section>
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 animate-slide-in">
            <span className="tag mb-4">ABOUT INSIGNIA HOUSING CIC</span>
            <h2 className="heading-lg mb-6">Whatever your story, we can help to make a difference</h2>
            <p className="body-md text-foreground mb-6">
              In a perfect world, homelessness would be eradicated. Here at Insignia Housing our main aim is to provide high quality accommodation to those who need it most. We work tirelessly to maintain high standards, continually reviewing our processes and procedures to ensure we operate effectively and efficiently.
            </p>
            <Button asChild className="rounded-full">
              <Link to="/about" className="inline-flex items-center">
                Learn more about us
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="lg:w-1/2 h-[400px] overflow-hidden rounded-2xl shadow-xl animate-fade-in">
            <img 
              src="/lovable-uploads/42f8308d-a565-4c51-bc6f-38cfbf142c09.png" 
              alt="Insignia Housing Support" 
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section background="light">
        <div className="text-center mb-16 animate-fade-in">
          <span className="tag mb-4">OUR SERVICES</span>
          <h2 className="heading-lg mb-6">How We Can Help</h2>
          <p className="body-md text-white max-w-2xl mx-auto">
            We offer a comprehensive range of services designed to support vulnerable individuals and help them achieve independent, fulfilling lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Home size={24} />}
            title="Housing"
            description="We provide high-quality accommodation to those who need it most, offering safe and comfortable housing options."
            link="/services/housing"
          />
          <ServiceCard 
            icon={<Heart size={24} />}
            title="Support"
            description="Our tailored support system helps vulnerable individuals overcome barriers to stable, healthy, and productive living."
            link="/services/support"
          />
          <ServiceCard 
            icon={<Lightbulb size={24} />}
            title="Solutions"
            description="We are committed to delivering on our promises, providing services that enable independent, prosperous living."
            link="/services/solutions"
          />
        </div>
      </Section>

      {/* Support Images Gallery */}
      <Section>
        <ImageGallery 
          images={supportImages} 
          title="Our Support in Action"
          subtitle="See how we're making a difference in the lives of vulnerable adults through compassionate care and support."
        />
      </Section>

      {/* Call to Action Section */}
      <Section 
        className="relative overflow-hidden py-24" 
        container={false}
        background="dark"
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: 'url(/cta-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="heading-lg mb-6 animate-fade-in">Guaranteed Rent</h2>
          <p className="body-md mb-10 max-w-2xl mx-auto text-white/90 animate-fade-in">
            We offer great benefits to landlords through our guaranteed rent scheme, ensuring regular income and property management.
          </p>
          <div className="flex flex-wrap justify-center gap-6 animate-fade-in">
            <Button asChild variant="outline" className="rounded-full bg-transparent text-white border-white hover:bg-white hover:text-black">
              <Link to="/services/landlords">
                Find out more
              </Link>
            </Button>
            <Button asChild className="rounded-full bg-white text-black hover:bg-white/90">
              <Link to="/contact">
                Contact us
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCounter value={500} suffix="+" title="People Housed" />
          <AnimatedCounter value={200} suffix="+" title="Properties Managed" />
          <AnimatedCounter value={15} suffix="+" title="Years Experience" />
          <AnimatedCounter value={98} suffix="%" title="Client Satisfaction" />
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="light">
        <div className="text-center mb-16 animate-fade-in">
          <span className="tag mb-4">TESTIMONIALS</span>
          <h2 className="heading-lg mb-6">What Our Clients Say</h2>
          <p className="body-md text-white max-w-2xl mx-auto">
            Read about the experiences of those we've helped and supported through our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="Insignia Housing changed my life. I was homeless for years, and they didn't just give me a place to stay – they helped me rebuild my entire life."
            author="Michael J."
            role="Former Tenant"
          />
          <TestimonialCard 
            quote="The support I received was incredible. The staff genuinely care and go above and beyond to help you succeed in your journey."
            author="Sarah T."
            role="Current Tenant"
          />
          <TestimonialCard 
            quote="As a landlord, I've had nothing but positive experiences with Insignia. The guaranteed rent scheme has been reliable and stress-free."
            author="David L."
            role="Landlord Partner"
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section background="dark">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 animate-slide-in">
            <span className="tag mb-4">CONTACT US</span>
            <h2 className="heading-lg mb-6">Get in Touch Today</h2>
            <p className="body-md opacity-80 mb-8">
              We're here to help. Contact us today to learn more about our services or to discuss how we can assist you or someone you know.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone size={20} className="mr-4" />
                <div>
                  <p className="font-medium">0207 1172 588</p>
                  <p className="text-sm opacity-70">Lines open 24/7</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-4" />
                <div>
                  <p className="font-medium">info@insigniahousing.co.uk</p>
                  <p className="text-sm opacity-70">Email us anytime</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 bg-black/30 p-8 rounded-xl animate-fade-in">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                  <input 
                    id="name"
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input 
                    id="email"
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea 
                  id="message"
                  rows={4} 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30 text-white" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <Button className="rounded-full w-full bg-white text-black hover:bg-white/90">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Index;
