import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, IndianRupee, Package, Wrench, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const DomainDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { domainName } = useParams();
  
  const domain = location.state?.domain;

  if (!domain) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Domain not found</h1>
          <Button onClick={() => navigate('/')}>Return Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById('cost-breakdown');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Overview
          </Button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {domain.name}
          </h1>
          <div className="flex items-center space-x-4">
            <Badge className="cost-chip text-lg font-bold px-4 py-2">
              <IndianRupee className="h-4 w-4 mr-1" />
              {domain.total.toLocaleString()}
            </Badge>
            <span className="text-muted-foreground">
              {domain.subsystems?.length || 0} subsystems
            </span>
          </div>
        </div>

        {/* Subsystems */}
        {domain.subsystems && domain.subsystems.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">Subsystems</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {domain.subsystems.map((subsystem: any, index: number) => (
                <AccordionItem 
                  key={index} 
                  value={`subsystem-${index}`}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-accent/50 transition-colors">
                    <div className="flex items-center justify-between w-full mr-4">
                      <div className="flex items-center space-x-3">
                        <Wrench className="h-5 w-5 text-primary" />
                        <span className="font-semibold text-left">{subsystem.name}</span>
                      </div>
                      <Badge variant="secondary" className="ml-auto mr-2">
                        Rs. {subsystem.total.toLocaleString()}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6">
                    {/* Components */}
                    {subsystem.components && subsystem.components.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="font-semibold text-lg flex items-center">
                          <Package className="h-4 w-4 mr-2" />
                          Components ({subsystem.components.length})
                        </h4>
                        
                        <div className="grid gap-4">
                          {subsystem.components.map((component: any, compIndex: number) => (
                            <Card key={compIndex} className="border border-border/50">
                              <CardHeader className="pb-3">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <CardTitle className="text-base">{component.name}</CardTitle>
                                    <CardDescription className="mt-1">
                                      Part: {component.partNumber}
                                    </CardDescription>
                                  </div>
                                  <Badge className="cost-chip">
                                    Rs. {component.totalCost?.toLocaleString() || 'N/A'}
                                  </Badge>
                                </div>
                              </CardHeader>
                              
                              <CardContent className="pt-0">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                  <div>
                                    <span className="font-medium text-muted-foreground">Type:</span>
                                    <p className="mt-1">{component.manufacturedOrBought || 'N/A'}</p>
                                  </div>
                                  <div>
                                    <span className="font-medium text-muted-foreground">Unit Cost:</span>
                                    <p className="mt-1 font-semibold">Rs. {component.unitCost?.toLocaleString() || 'N/A'}</p>
                                  </div>
                                  <div>
                                    <span className="font-medium text-muted-foreground">Quantity:</span>
                                    <p className="mt-1">{component.quantity || 'N/A'}</p>
                                  </div>
                                  <div>
                                    <span className="font-medium text-muted-foreground">Process Cost:</span>
                                    <p className="mt-1">Rs. {component.processCost?.toLocaleString() || 'N/A'}</p>
                                  </div>
                                </div>
                                
                                {component.processUsed && (
                                  <div className="mt-4 pt-4 border-t border-border/50">
                                    <div className="flex items-start space-x-2">
                                      <FileText className="h-4 w-4 mt-0.5 text-primary" />
                                      <div>
                                        <span className="font-medium text-muted-foreground">Process:</span>
                                        <p className="mt-1 text-sm">{component.processUsed}</p>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainDetails;
