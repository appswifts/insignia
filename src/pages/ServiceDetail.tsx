
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import Section from '@/components/Section';

const ServiceDetail = () => {
  const { service } = useParams<{ service: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service]);

  const serviceDetails: Record<string, {
    title: string;
    subtitle: string;
    description: string[];
    image: string;
  }> = {
    housing: {
      title: "Housing Services",
      subtitle: "High-quality accommodation for those who need it most",
      description: [
        "In a perfect world, homelessness would be eradicated. Here at Insignia Housing our main aim is to provide high quality accommodation to those who need it most.",
        "We work tirelessly to maintain high standards, continually reviewing our processes and procedures to ensure we operate effectively and efficiently.",
        "Our properties are regularly inspected and maintained to ensure they meet all safety standards and provide a comfortable living environment. We offer various types of accommodation, from shared housing to self-contained units, depending on individual needs and circumstances.",
        "We understand that stable housing is the foundation for rebuilding lives, and we're committed to providing not just a place to stay, but a home where individuals can feel safe, secure, and supported as they work toward independence."
      ],
      image: "/service-1.jpg"
    },
    support: {
      title: "Support Services",
      subtitle: "Comprehensive support to overcome barriers and build independence",
      description: [
        "We have a strong desire to prevent and reduce homelessness. Insignia Values lie at the very core of our business.",
        "Our values are intertwined passionately with our ethos: to unrequitedly respect our fellow human beings, inspiring endless hope for anyone who might need it.",
        "Every tenant will have their individual needs recognised and assessed by our highly-trained, professional staff. They will be taught to identify any barriers that may prevent the individual from living a stable, productive and healthy life, including (but not limited to):",
        "Mental health support, addressing anti-social behaviour, emotional requirements, and learning difficulties. Needs will always be assessed on an individual, personalised basis, ensuring that the measures put in place are the right ones.",
        "Staff will meet with each individual on a one-to-one basis to make sure that their needs are being met. Every one of our customers will be treated with the utmost dignity and respect with an emphasis on choice, control and independence."
      ],
      image: "/service-2.jpg"
    },
    solutions: {
      title: "Solutions",
      subtitle: "Practical approaches to complex challenges",
      description: [
        "We are committed to delivering on the promises we make. Our vision is to assist people; providing the housing and services they need to live independent, prosperous, fulfilling and rewarding lives.",
        "Our approach is holistic, recognizing that addressing homelessness requires more than just providing shelter. We work to address the root causes of homelessness and create sustainable solutions that lead to long-term stability.",
        "Through partnerships with local authorities, health services, employment programs, and other community resources, we create comprehensive support networks that enable individuals to overcome barriers and build fulfilling lives.",
        "Our success is measured not just by the number of people we house, but by the positive transformations we see in their lives as they gain confidence, skills, and independence."
      ],
      image: "/service-3.jpg"
    },
    referrals: {
      title: "Referrals",
      subtitle: "Streamlined processes for partner organizations",
      description: [
        "Our referral process is designed to be simple and efficient. We accept referrals from a wide range of organizations including local authorities, charities, and healthcare providers.",
        "Upon receiving a referral, our team will promptly assess the individual's needs to determine the most appropriate support package. We aim to respond to all referrals within 24-48 hours.",
        "We work closely with referring organizations to ensure a smooth transition for the individual, sharing information (with appropriate consent) to provide continuity of care and support.",
        "If you're a professional looking to refer someone to our services, please contact our referrals team directly. We're happy to discuss potential referrals before formal submission to determine suitability."
      ],
      image: "/service-4.jpg"
    },
    landlords: {
      title: "Landlord Services",
      subtitle: "Guaranteed rent and hassle-free property management",
      description: [
        "Our guaranteed rent scheme offers landlords peace of mind with regular, reliable income regardless of occupancy. We handle all aspects of property management, from tenant placement to maintenance, allowing you to enjoy a hands-off investment.",
        "Benefits of our scheme include: No void periods, no letting fees, guaranteed rent paid even if the property is empty, regular property inspections, full management of tenants, and all maintenance handled by our team.",
        "We offer competitive rental rates and flexible contract terms, with options for contracts from 1-5 years. Our experienced property management team ensures your investment is well-maintained and protected.",
        "We're always looking to expand our portfolio of properties. If you're a landlord interested in our guaranteed rent scheme, please contact us to discuss how we can work together."
      ],
      image: "/service-5.jpg"
    }
  };

  // Default service if the requested one doesn't exist
  const currentService = serviceDetails[service as string] || serviceDetails.housing;

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Hero 
        title={currentService.title}
        subtitle={currentService.subtitle}
        image={currentService.image}
      />

      {/* Back to Services */}
      <div className="bg-secondary py-4">
        <div className="container-custom">
          <Link to="/services" className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to All Services
          </Link>
        </div>
      </div>

      {/* Service Description */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-slide-in">
            <h2 className="heading-lg mb-6">{currentService.title}</h2>
            
            {currentService.description.map((paragraph, index) => (
              <p key={index} className="body-md text-muted-foreground mb-6">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="animate-fade-in">
            <div className="bg-secondary rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-medium mb-6">Interested in this service?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us today to learn more about {currentService.title.toLowerCase()} or to discuss how we can assist you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Phone size={18} className="mr-3 text-primary" />
                  <span>0121 729 5002</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-3 text-primary" />
                  <span>info@insigniahousing.org</span>
                </div>
              </div>
              
              <Button asChild className="w-full rounded-full">
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 bg-white border border-border rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-medium mb-4">Other Services</h3>
              <ul className="space-y-3">
                {Object.entries(serviceDetails)
                  .filter(([key]) => key !== service)
                  .map(([key, value]) => (
                    <li key={key}>
                      <Link 
                        to={`/services/${key}`}
                        className="link-hover text-muted-foreground hover:text-primary transition-colors"
                      >
                        {value.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark">
        <div className="text-center animate-fade-in">
          <h2 className="heading-lg mb-6">Ready to Get Started?</h2>
          <p className="body-md opacity-80 max-w-2xl mx-auto mb-8">
            Contact us today to learn more about our services or to discuss how we can assist you or someone you know.
          </p>
          <Button asChild className="rounded-full bg-white text-black hover:bg-white/90">
            <Link to="/contact">
              Get in Touch
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default ServiceDetail;
