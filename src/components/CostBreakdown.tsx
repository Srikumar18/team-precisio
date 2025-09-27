import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Wrench, 
  Car, 
  Zap, 
  Settings, 
  Palette, 
  Gauge,
  ArrowRight,
  IndianRupee
} from 'lucide-react';
import costData from '@/data/costData';

const iconMap: Record<string, React.ReactNode> = {
  'Frame & Body': <Wrench className="h-8 w-8" />,
  'Brakes System': <Car className="h-8 w-8" />,
  'Wheel Assembly & Tyres': <Car className="h-8 w-8" />,
  'Steering': <Gauge className="h-8 w-8" />,
  'Electronics & Wiring': <Zap className="h-8 w-8" />,
  'Suspension System': <Settings className="h-8 w-8" />,
  'Powertrain & Drivetrain': <Wrench className="h-8 w-8" />,
  'Fit & Finish': <Palette className="h-8 w-8" />
};

const CostBreakdown = () => {
  const navigate = useNavigate();

  const handleViewDetails = (domain: any) => {
    const routeName = domain.name.toLowerCase().replace(/\s+/g, '-').replace('&', 'and');
    navigate(`/domain/${routeName}`, { state: { domain } });
  };

  return (
    <section id="cost-breakdown" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Cost Breakdown Analysis
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive financial breakdown of all components and systems
          </p>
          
          {/* Total Cost Card */}
          <Card className="max-w-md mx-auto mb-12 border-2 border-primary/20 shadow-elegant">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <IndianRupee className="h-8 w-8 text-primary" />
                <span className="text-4xl font-bold text-foreground">
                  {costData.totalCost.toLocaleString()}
                </span>
              </div>
              <p className="text-lg font-semibold text-primary">Total Project Cost</p>
            </CardContent>
          </Card>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {costData.domains.map((domain, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card hover:bg-accent/5 border-2 hover:border-primary/30 cursor-pointer group"
              onClick={() => handleViewDetails(domain)}
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4 text-primary group-hover:text-primary-glow transition-colors duration-300">
                  {iconMap[domain.name] || <Settings className="h-8 w-8" />}
                </div>
                <CardTitle className="text-lg font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {domain.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <Badge className="cost-chip text-lg font-bold px-4 py-2 mb-4">
                  Rs. {domain.total.toLocaleString()}
                </Badge>
                
                <CardDescription className="text-sm text-muted-foreground mb-4">
                  {domain.subsystems?.length || 0} subsystems included
                </CardDescription>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CostBreakdown;