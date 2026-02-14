import { Card } from '@/components/ui/card';
import { FileText, Users, Lightbulb, AlertCircle, HelpCircle, BookOpen } from 'lucide-react';

export default function ResidentResources() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-accent/5 border-b border-border">
        <div className="container">
          <h1 className="text-foreground mb-4">Resident Resources</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Important information and resources for Park Terrace Gardens residents, including policies, contact information, and community guidelines.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="text-accent" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Building Policies</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Review cooperative bylaws, house rules, and building policies that govern our community.
              </p>
              <a href="#" className="text-accent hover:opacity-80 text-sm font-medium no-underline">
                Learn More →
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Board Information</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Information about the cooperative board, meetings, and governance structure.
              </p>
              <a href="#" className="text-accent hover:opacity-80 text-sm font-medium no-underline">
                Learn More →
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-accent" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Maintenance Services</h3>
              <p className="text-sm text-muted-foreground mb-4">
                How to request maintenance, report issues, and access building services.
              </p>
              <a href="#" className="text-accent hover:opacity-80 text-sm font-medium no-underline">
                Learn More →
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <AlertCircle className="text-accent" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Emergency Contacts</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Important emergency numbers and procedures for urgent situations.
              </p>
              <a href="#" className="text-accent hover:opacity-80 text-sm font-medium no-underline">
                Learn More →
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <HelpCircle className="text-accent" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">FAQ</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Frequently asked questions about living at Park Terrace Gardens.
              </p>
              <a href="#" className="text-accent hover:opacity-80 text-sm font-medium no-underline">
                Learn More →
              </a>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-accent" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Community Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Stay informed with updates, announcements, and community news.
              </p>
              <a href="#" className="text-accent hover:opacity-80 text-sm font-medium no-underline">
                Learn More →
              </a>
            </Card>
          </div>

          {/* Information Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-foreground mb-4">Management Office</h2>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <div>
                    <p className="text-sm text-accent font-medium mb-1">Address</p>
                    <p className="text-muted-foreground">
                      Park Terrace Gardens, Inc.<br />
                      72 Park Terrace West<br />
                      New York, NY 10034
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-accent font-medium mb-1">Phone</p>
                    <p className="text-muted-foreground">
                      <a href="tel:+12125676376" className="text-accent hover:opacity-80 no-underline">
                        (212) 567-6376
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-accent font-medium mb-1">Email</p>
                    <p className="text-muted-foreground">
                      <a href="mailto:Office@gardensnyc.net" className="text-accent hover:opacity-80 no-underline">
                        Office@gardensnyc.net
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-accent font-medium mb-1">Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-foreground mb-4">Internet Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All shareholders of Park Terrace Gardens enjoy free high-speed internet service provided by the cooperative. For technical support or service issues, contact the management office during business hours.
                </p>
                <p className="text-muted-foreground text-sm">
                  See our Internet Service Policy for complete details and terms of service.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-foreground mb-4">Resident Guidelines</h2>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-serif font-bold text-base mb-2 text-foreground">Pet Policy</h3>
                    <p className="text-sm text-muted-foreground">
                      Park Terrace Gardens is pet-friendly. Please review our pet policy for guidelines on size, type, and registration requirements.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-serif font-bold text-base mb-2 text-foreground">Noise and Quiet Hours</h3>
                    <p className="text-sm text-muted-foreground">
                      Residents are expected to maintain reasonable quiet hours. Quiet hours are typically from 10:00 PM to 8:00 AM on weekdays and 11:00 PM to 9:00 AM on weekends.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-serif font-bold text-base mb-2 text-foreground">Alterations and Renovations</h3>
                    <p className="text-sm text-muted-foreground">
                      Any apartment alterations or renovations must be approved by the board prior to commencement. Contact the management office for the application process.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h3 className="font-serif font-bold text-base mb-2 text-foreground">Parking</h3>
                    <p className="text-sm text-muted-foreground">
                      Limited parking is available in the neighborhood. Residents should check local regulations and parking availability in the area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Green Committee Section */}
          <div className="bg-accent/5 border border-border rounded-lg p-8">
            <h2 className="text-foreground mb-4">Get Involved</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Park Terrace Gardens is a community-driven cooperative. Residents are encouraged to participate in building governance, committees, and community activities. Whether you are interested in sustainability, building maintenance, or social events, there are opportunities to contribute to our vibrant community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-serif font-bold text-base mb-2 text-foreground">Board Meetings</h3>
                <p className="text-sm text-muted-foreground">
                  Regular board meetings are held to discuss cooperative business and resident concerns. Residents are welcome to attend.
                </p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-base mb-2 text-foreground">Green Committee</h3>
                <p className="text-sm text-muted-foreground">
                  Join our Green Committee to participate in sustainability initiatives and environmental stewardship projects.
                </p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-base mb-2 text-foreground">Community Events</h3>
                <p className="text-sm text-muted-foreground">
                  Participate in resident gatherings, celebrations, and community-building activities throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
