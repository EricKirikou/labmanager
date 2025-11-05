import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Clock, FileText } from 'lucide-react';
import labLogo from '@/assets/lab-logo.png';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Daily Reports",
      description: "Track and manage all lab activities with comprehensive reporting"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Task Management",
      description: "Assign and monitor tasks efficiently across your team"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Access",
      description: "Role-based access control ensures data security"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Activity Tracking",
      description: "Complete audit trail of all lab operations"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Navigation */}
      <nav className="border-b bg-background/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={labLogo} alt="ICTC Lab Logo" className="w-10 h-10" />
            <span className="font-bold text-xl">ICTC Lab Management</span>
          </div>
          <Button onClick={() => navigate('/auth')} variant="default">
            Sign In
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <img src={labLogo} alt="ICTC Lab Logo" className="w-20 h-20" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            KNUST ICTC Lab
            <br />
            <span className="text-primary">Management System</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your lab operations with our comprehensive management system. 
            Track reports, manage tasks, monitor inventory, and maintain complete audit trails.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={() => navigate('/auth')} className="group">
              Sign In
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Manage Your Lab
            </h2>
            <p className="text-muted-foreground text-lg">
              Built specifically for KNUST ICTC lab operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-primary/5 rounded-2xl p-12 border">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Lab Management?
          </h2>
          <p className="text-muted-foreground text-lg">
            Join KNUST ICTC in modernizing lab operations with our comprehensive management system.
          </p>
          <Button size="lg" onClick={() => navigate('/auth')} className="group">
            Sign In to Get Started
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={labLogo} alt="ICTC Lab Logo" className="w-8 h-8" />
              <span className="font-semibold">KNUST ICTC Lab Management</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 KNUST ICTC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
