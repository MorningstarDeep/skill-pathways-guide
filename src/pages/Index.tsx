import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Brain, 
  Server, 
  Database,
  ArrowRight,
  Star,
  Users,
  BookOpen,
  Zap
} from "lucide-react";

const roles = [
  {
    id: "sde",
    title: "Software Development Engineer",
    description: "Full-stack development, system design, and engineering best practices",
    icon: Code2,
    color: "bg-gradient-primary",
    difficulty: "Intermediate",
    duration: "12-18 months",
    topics: ["JavaScript/TypeScript", "React", "Node.js", "System Design", "Databases"],
    popularity: 95
  },
  {
    id: "aiml",
    title: "AI/ML Intern",
    description: "Machine learning foundations, deep learning, and practical AI applications",
    icon: Brain,
    color: "bg-gradient-secondary",
    difficulty: "Advanced",
    duration: "8-12 months", 
    topics: ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "Statistics"],
    popularity: 88
  },
  {
    id: "devops",
    title: "DevOps Developer",
    description: "CI/CD, containerization, cloud infrastructure, and automation",
    icon: Server,
    color: "bg-accent",
    difficulty: "Intermediate",
    duration: "10-15 months",
    topics: ["Docker", "Kubernetes", "AWS", "Jenkins", "Monitoring"],
    popularity: 82
  },
  {
    id: "data-engineer",
    title: "Data Engineer",
    description: "Data pipelines, big data technologies, and data infrastructure",
    icon: Database,
    color: "bg-warning",
    difficulty: "Advanced",
    duration: "12-18 months",
    topics: ["Python", "SQL", "Apache Spark", "Kafka", "Data Warehousing"],
    popularity: 76
  }
];

const features = [
  {
    icon: BookOpen,
    title: "Interactive Learning Paths",
    description: "Step-by-step roadmaps with clear prerequisites and learning sequences"
  },
  {
    icon: Star,
    title: "Curated Resources",
    description: "Hand-picked YouTube videos, courses, and articles for each topic"
  },
  {
    icon: Zap,
    title: "Progress Tracking",
    description: "Track your learning progress and mark completed topics"
  },
  {
    icon: Users,
    title: "Industry Focused",
    description: "Roadmaps designed based on real industry requirements and job descriptions"
  }
];

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-2 text-sm font-semibold">
                🚀 Interactive Career Roadmaps
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
                Master Your Tech Career
                <br />
                <span className="text-foreground">with Structured Learning</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive, interactive roadmaps for technical roles. Learn what to study, 
                in what order, with curated resources and progress tracking.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/sde">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Start Learning
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="tech" size="lg" className="text-lg px-8 py-4">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Roadmaps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TechPath?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built by developers for developers, our roadmaps are based on real industry requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center hover:shadow-node transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Roadmaps Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Path</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select a technical role to start your structured learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <Card key={role.id} className="group hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg ${role.color} flex items-center justify-center shrink-0`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {role.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {role.difficulty}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {role.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Users className="h-3 w-3" />
                          {role.popularity}% popular
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <CardDescription className="leading-relaxed">
                      {role.description}
                    </CardDescription>
                    
                    <div className="space-y-3">
                      <div className="text-sm font-medium">Key Topics:</div>
                      <div className="flex flex-wrap gap-2">
                        {role.topics.map((topic) => (
                          <Badge key={topic} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Link to={`/${role.id}`} className="block">
                      <Button className="w-full group-hover:bg-primary/90 transition-colors">
                        Start {role.title} Path
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto max-w-4xl text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Level Up Your Tech Career?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are using structured learning paths to advance their careers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/sde">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
                Start with SDE Path
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
              <BookOpen className="mr-2 h-5 w-5" />
              Browse All Paths
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}