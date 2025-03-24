
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import { Home, Heart, Lightbulb, Users, Building, ArrowRight } from 'lucide-react';
import ImageGallery from '@/components/ImageGallery';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const supportImages = [
    "/lovable-uploads/42f8308d-a565-4c51-bc6f-38cfbf142c09.png",
    "/lovable-uploads/302eae1b-4cf9-4db2-998b-fc07c401d054.png",
    "/lovable-uploads/a61b53c9-ffad-4c16-90fa-15113cf32371.png",
    "/lovable-uploads/2b16e84e-0add-44ae-809c-eb9b579b9a0b.png",
    "/lovable-uploads/b5380a36-6897-4e87-8f76-634c63e34407.png",
    "/lovable-uploads/dbe7172c-d546-433b-82a3-43435f687fdd.png"
  ];

  const services = [
    {
      icon: <Home size={24} />,
      title: "Housing",
      description: "We provide high-quality accommodation to those who need it most, ensuring safe, comfortable, and well-maintained housing.",
      link: "/services/housing",
      details: "In a perfect world, homelessness would be eradicated. Here at Insignia Housing our main aim is to provide high quality accommodation to those who need it most. We work tirelessly to maintain high standards, continually reviewing our processes and procedures to ensure we operate effectively and efficiently.",
      image: "/lovable-uploads/42f8308d-a565-4c51-bc6f-38cfbf142c09.png"
    },
    {
      icon: <Heart size={24} />,
      title: "Support",
      description: "Our comprehensive support services help vulnerable individuals overcome barriers and build independence.",
      link: "/services/support",
      details: "We have a strong desire to prevent and reduce homelessness. Insignia Values lie at the very core of our business. Our values are intertwined passionately with our ethos: to unrequitedly respect our fellow human beings, inspiring endless hope for anyone who might need it.",
      image: "/lovable-uploads/302eae1b-4cf9-4db2-998b-fc07c401d054.png"
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Solutions",
      description: "We are committed to delivering on the promises we make, providing practical solutions to complex challenges.",
      link: "/services/solutions",
      details: "We are committed to delivering on the promises we make. Our vision is to assist people; providing the housing and services they need to live independent, prosperous, fulfilling and rewarding lives.",
      image: "/lovable-uploads/a61b53c9-ffad-4c16-90fa-15113cf32371.png"
    },
    {
      icon: <Users size={24} />,
      title: "Referrals",
      description: "We work with local authorities and partner organizations to provide streamlined referral processes.",
      link: "/services/referrals",
      details: "Our referral process is designed to be simple and efficient. We accept referrals from a wide range of organizations including local authorities, charities, and healthcare providers. Our team will assess each referral promptly to determine the most appropriate support package.",
      image: "/lovable-uploads/2b16e84e-0add-44ae-809c-eb9b579b9a0b.png"
    },
    {
      icon: <Building size={24} />,
      title: "Landlords",
      description: "We offer guaranteed rent schemes and property management services for landlords in Birmingham.",
      link: "/services/landlords",
      details: "Our guaranteed rent scheme offers landlords peace of mind with regular, reliable income regardless of occupancy. We handle all aspects of property management, from tenant placement to maintenance, allowing you to enjoy a hands-off investment.",
      image: "/lovable-uploads/b5380a36-6897-4e87-8f76-634c63e34407.png"
    }
  ];

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Hero 
        title="Our Services"
        subtitle="Discover how Insignia Housing can support you with our comprehensive range of services."
        image="/lovable-uploads/a61b53c9-ffad-4c16-90fa-15113cf32371.png"
        address={true}
      />

      {/* Introduction Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <span className="tag mb-4">WHAT WE DO</span>
          <h2 className="heading-lg mb-6">Supported Accommodation in Birmingham</h2>
          <p className="body-md text-muted-foreground mb-6">
            Insignia Housing offers more than just a home for people. We specialise in providing a tailored support system for those who are vulnerable and are at a disadvantage. We understand the issues and difficulties that can arise from homelessness, and we believe with the right help individuals can - and do - fulfil their aspirations of independent living.
          </p>
          <p className="body-md text-muted-foreground">
            Every tenant will have their individual needs recognised and assessed by our highly-trained, professional staff. They will be taught to identify any barriers that may prevent the individual from living a stable, productive and healthy life.
          </p>
        </div>
      </Section>

      {/* Services List */}
      <Section background="light">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </Section>

      {/* Support Gallery */}
      <Section>
        <ImageGallery 
          images={supportImages} 
          title="Our Support in Action"
          subtitle="See how we're making a difference in the lives of vulnerable adults through compassionate care and support."
        />
      </Section>

      {/* Details Sections */}
      {services.map((service, index) => (
        <Section key={index} id={service.title.toLowerCase()} className={index % 2 === 0 ? "" : "bg-secondary"}>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className={`lg:w-1/2 animate-slide-in ${index % 2 !== 0 ? "lg:order-2" : ""}`}>
              <span className="tag mb-4">{service.title.toUpperCase()}</span>
              <h2 className="heading-lg mb-6">{service.title}</h2>
              <p className="body-md text-muted-foreground mb-6">
                {service.details}
              </p>
              <Button asChild className="rounded-full">
                <Link to={service.link} className="inline-flex items-center">
                  Learn more
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className={`lg:w-1/2 h-[400px] overflow-hidden rounded-2xl shadow-xl animate-fade-in ${index % 2 !== 0 ? "lg:order-1" : ""}`}>
              <img 
                src={service.image} 
                alt={service.title} 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </Section>
      ))}

      {/* Support Section */}
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <span className="tag mb-4">SUPPORT SERVICES</span>
          <h2 className="heading-lg mb-6">How We Support Our Clients</h2>
          <p className="body-md opacity-80 mb-10">
            We offer a range of supporting services, advice and guidance with any problems you may be experiencing. In every aspect of day to day living, from cleanliness to hygiene, finding work, maintaining your home and more.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-left">
            {[
              "Maintaining health, safety and security",
              "Managing finances (budgeting and benefits)",
              "Cooking, cleaning and shopping",
              "Dealing with correspondence",
              "Developing hobbies and interests",
              "Enrolling in free training courses",
              "Help getting back into employment",
              "Socialising and community involvement",
              "Building positive relationships",
              "Supporting mental health needs",
              "Helping with housing lists and bids",
              "Ensuring correct benefits are in place"
            ].map((item, index) => (
              <div key={index} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <ArrowRight size={16} className="mr-2 min-w-[16px] text-white/60" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Community Image */}
      <Section>
        <div className="h-[400px] overflow-hidden rounded-2xl shadow-xl animate-fade-in">
          <img 
            src="/lovable-uploads/06761893-0be3-4051-9b9c-cce0ca15f44e.png" 
            alt="Community Support" 
            className="h-full w-full object-cover"
          />
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="light">
        <div className="text-center animate-fade-in">
          <h2 className="heading-lg mb-6">Need Our Help?</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our services or to discuss how we can assist you or someone you know.
          </p>
          <Button asChild className="rounded-full">
            <Link to="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default Services;
