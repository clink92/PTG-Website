import { Card } from '@/components/ui/card';
import { Wifi, HeadphonesIcon, Bike, Waves, Trees, Users } from 'lucide-react';

export default function Amenities() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-accent/5 border-b border-border">
        <div className="container">
          <h1 className="text-foreground mb-4">Amenities</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Park Terrace Gardens offers a comprehensive range of amenities designed to enhance resident comfort and foster community living.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Wifi className="text-accent" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Free High-Speed Internet</h3>
              <p className="text-sm text-muted-foreground">
                All shareholders enjoy complimentary high-speed internet service provided by the cooperative, ensuring reliable connectivity throughout your home.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <HeadphonesIcon className="text-accent" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Concierge Service</h3>
              <p className="text-sm text-muted-foreground">
                Professional concierge staff available to assist residents with packages, inquiries, and general building services during business hours.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Bike className="text-accent" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Bike Storage</h3>
              <p className="text-sm text-muted-foreground">
                Secure bike storage facilities available for residents. Limited spaces available on a waitlist basis.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Waves className="text-accent" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Laundry Facilities</h3>
              <p className="text-sm text-muted-foreground">
                Central laundry rooms with modern equipment available in each building for resident use.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Trees className="text-accent" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Roof Deck Terraces</h3>
              <p className="text-sm text-muted-foreground">
                Penthouse apartments feature private roof deck terraces, and common terrace areas are available for all residents to enjoy.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-accent" size={24} />
              </div>
              <h3 className="font-serif font-bold text-lg mb-2 text-foreground">On-Site Management</h3>
              <p className="text-sm text-muted-foreground">
                Professional management office and live-in superintendent available to address resident needs and maintain building operations.
              </p>
            </Card>
          </div>

          {/* Detailed Amenities Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-foreground mb-4">Building Features</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Each of our five buildings is equipped with modern conveniences and well-maintained common areas designed to support resident comfort and community engagement.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Hardwood floors in most units</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Renovated kitchens and bathrooms in select units</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Modern appliances and fixtures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Well-lit hallways and common areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Secure entry systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Elevator service in all buildings</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-foreground mb-4">Community Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Park Terrace Gardens fosters a vibrant community through various resident services and programs.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Active Green Committee for sustainability initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Resident Board governance and meetings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Community events and gatherings</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Pet-friendly community policies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Newsletter and resident communications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Maintenance and repair services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Nearby Amenities */}
          <div className="bg-accent/5 border border-border rounded-lg p-8">
            <h2 className="text-foreground mb-6">Neighborhood Amenities</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Beyond our cooperative, residents enjoy proximity to excellent neighborhood amenities and attractions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Parks and Recreation</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Inwood Hill Park - hiking, nature trails</li>
                  <li>• Fort Tryon Park - historic gardens, views</li>
                  <li>• Harlem River Park - waterfront recreation</li>
                  <li>• Highbridge Park - historic bridge and trails</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg mb-4 text-foreground">Transportation</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Subway access via A and 1 lines</li>
                  <li>• Bus service including M100, M101</li>
                  <li>• NJ Transit connections</li>
                  <li>• Convenient access to Broadway</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
