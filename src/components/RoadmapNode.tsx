import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  ExternalLink, 
  Play,
  BookOpen,
  Star
} from "lucide-react";

export type NodeDifficulty = "beginner" | "intermediate" | "advanced";
export type NodeStatus = "not-started" | "in-progress" | "completed";

export interface Resource {
  title: string;
  url: string;
  type: "video" | "article" | "course" | "documentation";
  duration?: string;
  rating?: number;
}

export interface RoadmapNodeData {
  id: string;
  title: string;
  description: string;
  difficulty: NodeDifficulty;
  status: NodeStatus;
  category: string;
  prerequisites?: string[];
  resources: Resource[];
  estimatedTime?: string;
  importance: number; // 1-5 scale
}

interface RoadmapNodeProps {
  node: RoadmapNodeData;
  onStatusChange: (nodeId: string, status: NodeStatus) => void;
  className?: string;
}

const difficultyColors = {
  beginner: "bg-node-beginner",
  intermediate: "bg-node-intermediate", 
  advanced: "bg-node-advanced"
};

const statusIcons = {
  "not-started": Circle,
  "in-progress": Clock,
  "completed": CheckCircle2
};

const resourceIcons = {
  video: Play,
  article: BookOpen,
  course: Star,
  documentation: ExternalLink
};

export function RoadmapNode({ node, onStatusChange, className }: RoadmapNodeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const StatusIcon = statusIcons[node.status];
  
  const handleStatusToggle = () => {
    const nextStatus: NodeStatus = 
      node.status === "not-started" ? "in-progress" :
      node.status === "in-progress" ? "completed" : "not-started";
    onStatusChange(node.id, nextStatus);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-glow ${className} ${
          node.status === "completed" ? "ring-2 ring-node-completed" : ""
        }`}>
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge 
                    variant="outline" 
                    className={`${difficultyColors[node.difficulty]} text-white border-0`}
                  >
                    {node.difficulty}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {node.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg leading-tight">{node.title}</CardTitle>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStatusToggle();
                }}
              >
                <StatusIcon className={`h-5 w-5 ${
                  node.status === "completed" ? "text-node-completed" : 
                  node.status === "in-progress" ? "text-node-intermediate" : "text-muted-foreground"
                }`} />
              </Button>
            </div>
            <CardDescription className="text-sm line-clamp-2">
              {node.description}
            </CardDescription>
          </CardHeader>
          
          {node.estimatedTime && (
            <CardContent className="pt-0">
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="h-3 w-3 mr-1" />
                {node.estimatedTime}
              </div>
            </CardContent>
          )}
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge 
              variant="outline" 
              className={`${difficultyColors[node.difficulty]} text-white border-0`}
            >
              {node.difficulty}
            </Badge>
            <Badge variant="secondary">{node.category}</Badge>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${i < node.importance ? "fill-warning text-warning" : "text-muted-foreground"}`} 
                />
              ))}
            </div>
          </div>
          <DialogTitle className="text-xl">{node.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Status & Progress */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Progress</span>
              <Button variant="outline" size="sm" onClick={handleStatusToggle}>
                <StatusIcon className="h-4 w-4 mr-2" />
                {node.status.replace("-", " ").replace(/\b\w/g, l => l.toUpperCase())}
              </Button>
            </div>
            <Progress 
              value={node.status === "completed" ? 100 : node.status === "in-progress" ? 50 : 0} 
              className="h-2"
            />
          </div>

          {/* Description */}
          <div>
            <h4 className="font-semibold mb-2">Overview</h4>
            <p className="text-muted-foreground leading-relaxed">{node.description}</p>
          </div>

          {/* Prerequisites */}
          {node.prerequisites && node.prerequisites.length > 0 && (
            <div>
              <h4 className="font-semibold mb-2">Prerequisites</h4>
              <div className="flex flex-wrap gap-2">
                {node.prerequisites.map((prereq) => (
                  <Badge key={prereq} variant="outline">
                    {prereq}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Learning Resources */}
          <div>
            <h4 className="font-semibold mb-3">Learning Resources</h4>
            <div className="space-y-3">
              {node.resources.map((resource, index) => {
                const ResourceIcon = resourceIcons[resource.type];
                return (
                  <Card key={index} className="hover:bg-card-hover transition-colors">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 p-2 rounded-lg bg-primary/10">
                          <ResourceIcon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-medium text-sm truncate">{resource.title}</h5>
                            <Badge variant="outline" className="text-xs shrink-0">
                              {resource.type}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            {resource.duration && (
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {resource.duration}
                              </span>
                            )}
                            {resource.rating && (
                              <span className="flex items-center gap-1">
                                <Star className="h-3 w-3 fill-warning text-warning" />
                                {resource.rating}/5
                              </span>
                            )}
                          </div>
                        </div>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0"
                        >
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Time Estimate */}
          {node.estimatedTime && (
            <div>
              <h4 className="font-semibold mb-2">Time Investment</h4>
              <div className="flex items-center text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                <span>Estimated learning time: {node.estimatedTime}</span>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}