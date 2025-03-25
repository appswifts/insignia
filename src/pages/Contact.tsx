
import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ContactInfoCard from '@/components/ContactInfoCard';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <Hero 
        title="Contact Us"
        subtitle="We're here to help. Reach out to us with any questions or inquiries."
        image="/lovable-uploads/cad42fed-ace5-4bf1-9510-a1c497a054c0.png"
        address={true}
      />

      {/* Contact Cards */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ContactInfoCard 
            icon={<Phone size={24} />}
            title="Phone"
            details={["0121 729 5002", "Lines open 24 hours a day, 7 days a week"]}
          />
          <ContactInfoCard 
            icon={<Mail size={24} />}
            title="Email"
            details={["info@insigniahousing.org", "We aim to respond within 24 hours"]}
            delay={200}
          />
          <ContactInfoCard 
            icon={<MapPin size={24} />}
            title="Visit Us"
            details={["3 Holt Road", "Wembley, England, HA0 3PT", "United Kingdom"]}
            delay={400}
          />
        </div>
      </Section>

      {/* Contact Form */}
      <Section background="light">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in">
            <span className="tag mb-4">GET IN TOUCH</span>
            <h2 className="heading-lg mb-6">Send Us a Message</h2>
            <p className="body-md mb-6">
              Have a question or need assistance? Fill out the form and one of our team members will get back to you as soon as possible.
            </p>
            
            <div className="mb-8 space-y-4">
              <div className="flex items-center">
                <Clock size={20} className="mr-4 text-primary" />
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p className="text-sm">Monday — Sunday: 9:00am — 5:00pm</p>
                </div>
              </div>
            </div>
            
            <div className="aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.9458311259417!2d-0.2984609233911676!3d51.552306571857705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761181d57a876d%3A0xa64f9f185de8e097!2s3%20Holt%20Rd%2C%20Wembley%20HA0%203PT!5e0!3m2!1sen!2suk!4v1697214175387!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Insignia Housing location"
              ></iframe>
            </div>
          </div>
          
          <div className="animate-fade-in bg-white rounded-xl p-8 shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <input 
                    id="firstName"
                    type="text" 
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" 
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <input 
                    id="lastName"
                    type="text" 
                    className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" 
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                <input 
                  id="email"
                  type="email" 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                <input 
                  id="phone"
                  type="tel" 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  placeholder="0121 123 4567"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <select 
                  id="subject"
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" 
                >
                  <option value="" disabled selected>Select a subject</option>
                  <option value="housing">Housing Inquiry</option>
                  <option value="support">Support Services</option>
                  <option value="referral">Referral</option>
                  <option value="landlord">Landlord Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea 
                  id="message"
                  rows={5} 
                  className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full rounded-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <div className="text-center mb-16 animate-fade-in">
          <span className="tag mb-4">FAQ</span>
          <h2 className="heading-lg mb-6">Frequently Asked Questions</h2>
          <p className="body-md text-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              question: "Who can access your housing services?",
              answer: "Our services are available to vulnerable adults in Wembley who are homeless or at risk of homelessness. We work with local authorities and other referring agencies to identify those in need."
            },
            {
              question: "How long can someone stay in your accommodation?",
              answer: "The length of stay varies depending on individual needs and circumstances. Our goal is to provide stability while working toward independent living, which typically takes 6-24 months."
            },
            {
              question: "Do you offer emergency accommodation?",
              answer: "Yes, we can often provide emergency accommodation for those in crisis situations. Please contact us directly for emergency housing needs."
            },
            {
              question: "How do I make a referral?",
              answer: "Referrals can be made by contacting our referrals team directly. We accept referrals from local authorities, charities, healthcare providers, and other support agencies."
            },
            {
              question: "What support do you provide to residents?",
              answer: "We offer comprehensive support tailored to individual needs, including help with benefits, budgeting, life skills, mental health support, education and employment guidance, and more."
            },
            {
              question: "I'm a landlord interested in your guaranteed rent scheme. How does it work?",
              answer: "Our scheme provides landlords with guaranteed rental income regardless of occupancy, with no fees or void periods. We handle all aspects of property management, from finding tenants to maintenance."
            }
          ].map((faq, index) => (
            <div 
              key={index} 
              className="border border-border rounded-lg p-6 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-medium text-lg mb-3">{faq.question}</h3>
              <p className="text-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default Contact;
