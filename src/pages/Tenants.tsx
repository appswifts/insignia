
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Book, Phone, Users, CheckCircle, Key, FileText, Briefcase, Home, Heart } from 'lucide-react';
import Hero from '@/components/Hero';
import Section from '@/components/Section';

const Tenants = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Hero 
        title="For Our Tenants"
        subtitle="Resources, information, and support for Insignia Housing residents."
        image="/lovable-uploads/06761893-0be3-4051-9b9c-cce0ca15f44e.png"
        address={true}
      />

      {/* Introduction Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto animate-fade-in">
          <span className="tag mb-4">TENANT RESOURCES</span>
          <h2 className="heading-lg mb-6">Supporting Your Journey</h2>
          <p className="body-md text-muted-foreground mb-6">
            At Insignia Housing, we're committed to providing more than just a place to live. Our comprehensive support services are designed to help you overcome challenges, build skills, and move toward independent living.
          </p>
          <p className="body-md text-muted-foreground">
            This page provides information about the support available to you, how to access our services, and resources to help you thrive in your home and community.
          </p>
        </div>
      </Section>

      {/* Support Process */}
      <Section background="light">
        <div className="text-center mb-16 animate-fade-in">
          <span className="tag mb-4">OUR APPROACH</span>
          <h2 className="heading-lg mb-6">Your Support Journey</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Our five-stage support program is designed to guide you from initial assessment to independent living.
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              stage: "Stage 1: Assessment & Planning",
              icon: <FileText size={24} />,
              description: "We work with you to assess your needs, identify barriers, and create a personalized support plan.",
              points: [
                "Comprehensive needs assessment",
                "Identification of goals and aspirations",
                "Development of tailored support plan",
                "Connection to immediate resources"
              ]
            },
            {
              stage: "Stage 2: Stabilization",
              icon: <Shield size={24} />,
              description: "Focus on addressing immediate needs and creating stability in your housing and daily life.",
              points: [
                "Securing benefits and financial support",
                "Addressing urgent health needs",
                "Establishing daily routines",
                "Building trust with support staff"
              ]
            },
            {
              stage: "Stage 3: Skill Building",
              icon: <Book size={24} />,
              description: "Develop practical life skills and address barriers to independence.",
              points: [
                "Budgeting and financial management",
                "Cooking, cleaning, and home maintenance",
                "Communication and social skills",
                "Health and wellbeing management"
              ]
            },
            {
              stage: "Stage 4: Community Integration",
              icon: <Users size={24} />,
              description: "Connect with community resources and build support networks beyond our services.",
              points: [
                "Engagement with local community",
                "Development of hobbies and interests",
                "Building positive relationships",
                "Accessing community services"
              ]
            },
            {
              stage: "Stage 5: Transition",
              icon: <Key size={24} />,
              description: "Prepare for the move to independent living with reduced support.",
              points: [
                "Housing search and applications",
                "Transition planning",
                "Connecting with long-term support",
                "Follow-up support after moving"
              ]
            }
          ].map((stage, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row gap-8 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="md:w-1/3">
                <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                  <div className="h-14 w-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                    {stage.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3">{stage.stage}</h3>
                  <p className="text-muted-foreground">{stage.description}</p>
                </div>
              </div>
              
              <div className="md:w-2/3 bg-white p-8 rounded-xl shadow-sm">
                <h4 className="font-medium mb-4">What to expect:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {stage.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 min-w-[18px] text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Available Services */}
      <Section>
        <div className="text-center mb-16 animate-fade-in">
          <span className="tag mb-4">SERVICES</span>
          <h2 className="heading-lg mb-6">Support Services Available</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            We offer a range of services to support you in various aspects of your life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Home size={24} />,
              title: "Housing Support",
              description: "Assistance with maintaining your home, addressing maintenance issues, and eventually moving to independent housing."
            },
            {
              icon: <FileText size={24} />,
              title: "Benefits & Finance",
              description: "Help with accessing benefits, budgeting, debt management, and developing financial literacy skills."
            },
            {
              icon: <Briefcase size={24} />,
              title: "Education & Employment",
              description: "Support with accessing education, training, volunteering opportunities, and employment pathways."
            },
            {
              icon: <Heart size={24} />,
              title: "Health & Wellbeing",
              description: "Access to healthcare services, mental health support, addiction services, and wellbeing activities."
            },
            {
              icon: <Users size={24} />,
              title: "Social Integration",
              description: "Opportunities to develop social skills, build relationships, and engage with community activities."
            },
            {
              icon: <Book size={24} />,
              title: "Life Skills",
              description: "Training and support with practical skills like cooking, cleaning, shopping, and time management."
            }
          ].map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-all animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-14 w-14 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tenant Responsibilities */}
      <Section background="dark">
        <div className="text-center mb-16 animate-fade-in">
          <span className="tag mb-4">YOUR RESPONSIBILITIES</span>
          <h2 className="heading-lg mb-6">Working Together</h2>
          <p className="body-md opacity-80 max-w-2xl mx-auto">
            For our support to be effective, we ask that you engage actively in the process. Here's how you can contribute to your success:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Engage with Support",
              description: "Attend scheduled meetings with your support worker and actively participate in your support plan."
            },
            {
              title: "Respect Your Home",
              description: "Maintain your accommodation, follow house rules, and respect your neighbors and community."
            },
            {
              title: "Be Honest",
              description: "Share challenges openly so we can provide appropriate support; we're here to help, not judge."
            },
            {
              title: "Take Initiative",
              description: "Gradually take responsibility for tasks as your confidence and skills develop."
            }
          ].map((resp, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-medium mb-3">{resp.title}</h3>
              <p className="opacity-80">{resp.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Emergency Information */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in">
            <span className="tag mb-4">EMERGENCY CONTACT</span>
            <h2 className="heading-lg mb-6">Need Urgent Help?</h2>
            <p className="body-md text-muted-foreground mb-6">
              If you're experiencing an emergency, please don't hesitate to reach out. Our support line is available 24/7 to assist with urgent issues.
            </p>
            <div className="flex items-center bg-primary/5 p-6 rounded-lg mb-6">
              <Phone size={24} className="mr-6 text-primary" />
              <div>
                <p className="font-serif text-2xl font-bold">0121 729 5002</p>
                <p className="text-muted-foreground">24 hours a day, 7 days a week</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              For genuine emergencies requiring police, fire, or ambulance services, always call 999 first.
            </p>
          </div>
          
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white p-8 rounded-lg border border-border shadow-sm">
              <div className="flex items-center mb-4">
                <Clock size={20} className="mr-3 text-primary" />
                <h3 className="font-medium">When to Contact Emergency Support</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Urgent maintenance issues affecting safety",
                  "Lock-outs or lost keys",
                  "Safety concerns within your accommodation",
                  "Mental health crisis requiring immediate support",
                  "Conflicts with other residents that cannot wait",
                  "Unexpected housing issues (e.g., eviction notice)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={16} className="mr-2 min-w-[16px] text-primary/70" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Resources */}
      <Section background="light">
        <div className="text-center mb-16 animate-fade-in">
          <span className="tag mb-4">USEFUL RESOURCES</span>
          <h2 className="heading-lg mb-6">Additional Support</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto">
            Beyond our direct services, here are some external resources that might be helpful.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Mental Health",
              links: [
                { name: "Mind Birmingham", url: "#" },
                { name: "NHS Mental Health Services", url: "#" },
                { name: "Samaritans (24/7)", url: "#" }
              ]
            },
            {
              title: "Employment & Skills",
              links: [
                { name: "National Careers Service", url: "#" },
                { name: "Birmingham Jobs", url: "#" },
                { name: "Learn Direct", url: "#" }
              ]
            },
            {
              title: "Benefits & Finance",
              links: [
                { name: "Citizens Advice", url: "#" },
                { name: "Money Helper", url: "#" },
                { name: "Birmingham Welfare Support", url: "#" }
              ]
            },
            {
              title: "Community Services",
              links: [
                { name: "Birmingham Libraries", url: "#" },
                { name: "Community Centers", url: "#" },
                { name: "Local Support Groups", url: "#" }
              ]
            }
          ].map((category, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-medium mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url} 
                      className="text-muted-foreground hover:text-primary transition-colors link-hover"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center animate-fade-in">
          <h2 className="heading-lg mb-6">Need More Information?</h2>
          <p className="body-md text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact your support worker or our office if you have questions or need additional assistance.
          </p>
          <Button asChild className="rounded-full">
            <Link to="/contact">
              Contact Us
            </Link>
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default Tenants;
