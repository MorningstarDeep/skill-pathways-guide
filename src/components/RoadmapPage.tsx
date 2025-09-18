import { useState, useEffect } from "react";
import { RoadmapNode, NodeStatus } from "@/components/RoadmapNode";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  BarChart3,
  ArrowRight,
  Filter
} from "lucide-react";
import { RoadmapData } from "@/data/roadmaps";

interface RoadmapPageProps {
  roadmap: RoadmapData;
}

export function RoadmapPage({ roadmap }: RoadmapPageProps) {
  const [nodeStatuses, setNodeStatuses] = useState<Record<string, NodeStatus>>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Initialize node statuses from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`roadmap-${roadmap.id}-progress`);
    if (saved) {
      setNodeStatuses(JSON.parse(saved));
    }
  }, [roadmap.id]);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(`roadmap-${roadmap.id}-progress`, JSON.stringify(nodeStatuses));
  }, [nodeStatuses, roadmap.id]);

  const handleStatusChange = (nodeId: string, status: NodeStatus) => {
    setNodeStatuses(prev => ({
      ...prev,
      [nodeId]: status
    }));
  };

  // Calculate progress statistics
  const allNodes = roadmap.categories.flatMap(cat => cat.nodes);
  const totalNodes = allNodes.length;
  const completedNodes = allNodes.filter(node => nodeStatuses[node.id] === "completed").length;
  const inProgressNodes = allNodes.filter(node => nodeStatuses[node.id] === "in-progress").length;
  const progressPercentage = totalNodes > 0 ? (completedNodes / totalNodes) * 100 : 0;

  const filteredCategories = selectedCategory
    ? roadmap.categories.filter(cat => cat.id === selectedCategory)
    : roadmap.categories;

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{roadmap.title}</h1>
              <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {roadmap.description}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Badge variant="outline" className="w-fit px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                {roadmap.estimatedDuration}
              </Badge>
              <Badge variant="outline" className="w-fit px-4 py-2">
                <BookOpen className="h-4 w-4 mr-2" />
                {totalNodes} Topics
              </Badge>
            </div>
          </div>

          {/* Progress Overview */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Your Progress
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {completedNodes} of {totalNodes} completed
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Progress value={progressPercentage} className="h-3" />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-muted-foreground">{totalNodes - completedNodes - inProgressNodes}</div>
                  <div className="text-sm text-muted-foreground">Not Started</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-node-intermediate">{inProgressNodes}</div>
                  <div className="text-sm text-muted-foreground">In Progress</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-node-completed">{completedNodes}</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Path */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recommended Learning Path</CardTitle>
              <CardDescription>
                Follow this sequence for optimal learning progression
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {roadmap.learningPath.map((step, index) => (
                  <div key={step} className="flex items-center">
                    <Badge variant="secondary" className="px-3 py-1">
                      {index + 1}. {step}
                    </Badge>
                    {index < roadmap.learningPath.length - 1 && (
                      <ArrowRight className="h-4 w-4 text-muted-foreground mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              All Categories
            </Button>
            {roadmap.categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Categories and Nodes */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <section key={category.id} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.nodes.map((node) => (
                  <RoadmapNode
                    key={node.id}
                    node={{
                      ...node,
                      status: nodeStatuses[node.id] || "not-started"
                    }}
                    onStatusChange={handleStatusChange}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Completion Celebration */}
        {progressPercentage === 100 && (
          <Card className="mt-12 bg-gradient-primary text-white">
            <CardContent className="text-center py-12">
              <CheckCircle2 className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Congratulations! 🎉</h3>
              <p className="text-lg opacity-90">
                You've completed the {roadmap.title} roadmap! 
                You're now ready to apply for roles and continue your learning journey.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}