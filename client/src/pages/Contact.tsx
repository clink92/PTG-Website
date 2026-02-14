import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-accent/5 border-b border-border">
        <div className="container">
          <h1 className="text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have questions about Park Terrace Gardens? We would love to hear from you. Contact our management office or use the form below.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Address</h3>
                    <p className="text-muted-foreground text-sm">
                      Park Terrace Gardens, Inc.<br />
                      72 Park Terrace West<br />
                      New York, NY 10034
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Phone</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="tel:+12125676376" className="text-accent hover:opacity-80 no-underline">
                        (212) 567-6376
                      </a>
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      Fax: (212) 567-8838
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="mailto:Office@gardensnyc.net" className="text-accent hover:opacity-80 no-underline">
                        Office@gardensnyc.net
                      </a>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Monday - Friday<br />
                      9:00 AM - 5:00 PM<br />
                      <br />
                      Saturday & Sunday<br />
                      Closed
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-foreground mb-6">Send us a Message</h2>

                {submitted ? (
                  <div className="bg-accent/10 border border-accent rounded-lg p-6 text-center">
                    <p className="text-foreground font-medium mb-2">Thank you for your message!</p>
                    <p className="text-muted-foreground">
                      We have received your inquiry and will get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="(212) 555-0000"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="property">Property Information</option>
                        <option value="amenities">Amenities Question</option>
                        <option value="maintenance">Maintenance Request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-accent/5 border border-border rounded-lg p-8">
            <h2 className="text-foreground mb-6">Property Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Management Office</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our professional management office is available during business hours to assist with resident inquiries, maintenance requests, and general building matters.
                </p>
                <p className="text-muted-foreground text-sm">
                  <strong>Property Manager:</strong> Kathy Sandoval
                </p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Real Estate Inquiries</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For real estate inquiries and apartment listings, please contact our affiliated real estate office.
                </p>
                <p className="text-muted-foreground text-sm mb-2">
                  <strong>New Heights Realty</strong>
                </p>
                <p className="text-muted-foreground text-sm">
                  <a href="mailto:info@newheightsrealty.com" className="text-accent hover:opacity-80 no-underline">
                    info@newheightsrealty.com
                  </a>
                </p>
                <p className="text-muted-foreground text-sm">
                  <a href="https://www.newheightsrealty.com" className="text-accent hover:opacity-80 no-underline">
                    www.newheightsrealty.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
