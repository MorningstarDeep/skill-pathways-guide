import { RoadmapNodeData } from "@/components/RoadmapNode";

export interface RoadmapCategory {
  id: string;
  name: string;
  description: string;
  nodes: RoadmapNodeData[];
}

export interface RoadmapData {
  id: string;
  title: string;
  description: string;
  categories: RoadmapCategory[];
  learningPath: string[];
  estimatedDuration: string;
}

// SDE (Software Development Engineer) Roadmap
export const sdeRoadmap: RoadmapData = {
  id: "sde",
  title: "Software Development Engineer",
  description: "Complete roadmap to become a proficient Software Development Engineer with focus on full-stack development, system design, and engineering best practices.",
  estimatedDuration: "12-18 months",
  learningPath: [
    "Programming Fundamentals",
    "Data Structures & Algorithms", 
    "Web Development Basics",
    "Backend Development",
    "Databases",
    "System Design",
    "DevOps Basics",
    "Soft Skills"
  ],
  categories: [
    {
      id: "programming",
      name: "Programming Languages",
      description: "Master core programming languages and their ecosystems",
      nodes: [
        {
          id: "javascript",
          title: "JavaScript/TypeScript",
          description: "Master modern JavaScript and TypeScript for both frontend and backend development. Essential for web development and increasingly popular for server-side applications.",
          difficulty: "beginner",
          status: "not-started",
          category: "Programming Languages",
          estimatedTime: "3-4 weeks",
          importance: 5,
          resources: [
            {
              title: "JavaScript Crash Course For Beginners",
              url: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
              type: "video",
              duration: "1h 40m",
              rating: 4.8
            },
            {
              title: "TypeScript Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=BwuLxPH8IDs",
              type: "video", 
              duration: "3h 26m",
              rating: 4.9
            },
            {
              title: "You Don't Know JS Book Series",
              url: "https://github.com/getify/You-Dont-Know-JS",
              type: "article",
              rating: 4.9
            }
          ]
        },
        {
          id: "python",
          title: "Python",
          description: "Learn Python for backend development, automation, and data processing. Popular choice for web backends, APIs, and integration with AI/ML systems.",
          difficulty: "beginner",
          status: "not-started",
          category: "Programming Languages",
          estimatedTime: "2-3 weeks",
          importance: 4,
          resources: [
            {
              title: "Python Tutorial - Python Full Course for Beginners",
              url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
              type: "video",
              duration: "6h 14m",
              rating: 4.7
            },
            {
              title: "Automate the Boring Stuff with Python",
              url: "https://automatetheboringstuff.com/",
              type: "course",
              rating: 4.8
            }
          ]
        },
        {
          id: "java",
          title: "Java",
          description: "Enterprise-grade programming language. Essential for large-scale applications, Android development, and many enterprise environments.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Programming Languages",
          estimatedTime: "4-5 weeks",
          importance: 4,
          resources: [
            {
              title: "Java Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=eIrMbAQSU34",
              type: "video",
              duration: "9h 0m",
              rating: 4.6
            },
            {
              title: "Java: The Complete Reference",
              url: "https://www.oracle.com/java/technologies/javase-documentation.html",
              type: "documentation",
              rating: 4.5
            }
          ]
        }
      ]
    },
    {
      id: "dsa",
      name: "Data Structures & Algorithms",
      description: "Foundation for technical interviews and efficient problem solving",
      nodes: [
        {
          id: "basic-dsa",
          title: "Arrays, Strings, Linked Lists",
          description: "Master fundamental data structures that form the building blocks of more complex algorithms. Critical for technical interviews and daily programming tasks.",
          difficulty: "beginner",
          status: "not-started",
          category: "Data Structures & Algorithms",
          estimatedTime: "2-3 weeks",
          importance: 5,
          resources: [
            {
              title: "Data Structures and Algorithms in JavaScript",
              url: "https://www.youtube.com/watch?v=t2CEgPsws3U",
              type: "video",
              duration: "8h 0m",
              rating: 4.8
            },
            {
              title: "LeetCode Patterns - Arrays and Strings",
              url: "https://leetcode.com/explore/featured/card/top-interview-questions-easy/",
              type: "course",
              rating: 4.7
            }
          ]
        },
        {
          id: "trees-graphs",
          title: "Trees and Graphs",
          description: "Essential hierarchical and network data structures. Used in databases, file systems, social networks, and many algorithmic problems.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Data Structures & Algorithms",
          prerequisites: ["basic-dsa"],
          estimatedTime: "3-4 weeks",
          importance: 5,
          resources: [
            {
              title: "Tree Algorithms for Coding Interviews",
              url: "https://www.youtube.com/watch?v=fAAZixBzIAI",
              type: "video",
              duration: "2h 30m",
              rating: 4.9
            },
            {
              title: "Graph Algorithms Visualized",
              url: "https://www.youtube.com/watch?v=09_LlHjoEiY",
              type: "video",
              duration: "4h 15m",
              rating: 4.8
            }
          ]
        },
        {
          id: "dynamic-programming",
          title: "Dynamic Programming",
          description: "Advanced problem-solving technique for optimization problems. Frequently appears in technical interviews and competitive programming.",
          difficulty: "advanced",
          status: "not-started",
          category: "Data Structures & Algorithms",
          prerequisites: ["trees-graphs"],
          estimatedTime: "4-5 weeks",
          importance: 4,
          resources: [
            {
              title: "Dynamic Programming - Learn to Solve Algorithmic Problems",
              url: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
              type: "video",
              duration: "5h 0m",
              rating: 4.9
            },
            {
              title: "Grokking Dynamic Programming Patterns",
              url: "https://www.educative.io/courses/grokking-dynamic-programming-patterns-for-coding-interviews",
              type: "course",
              rating: 4.8
            }
          ]
        }
      ]
    },
    {
      id: "web-development",
      name: "Web Development",
      description: "Modern web development with popular frameworks and tools",
      nodes: [
        {
          id: "html-css",
          title: "HTML5 & CSS3",
          description: "Foundation of web development. Learn semantic HTML and modern CSS including Flexbox, Grid, and responsive design principles.",
          difficulty: "beginner",
          status: "not-started",
          category: "Web Development",
          estimatedTime: "2-3 weeks",
          importance: 5,
          resources: [
            {
              title: "HTML & CSS Full Course - Beginner to Pro",
              url: "https://www.youtube.com/watch?v=G3e-cpL7ofc",
              type: "video",
              duration: "11h 0m",
              rating: 4.8
            },
            {
              title: "CSS Grid and Flexbox Crash Course",
              url: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
              type: "video",
              duration: "1h 20m",
              rating: 4.9
            }
          ]
        },
        {
          id: "react",
          title: "React.js",
          description: "Most popular frontend framework for building interactive user interfaces. Essential for modern web development with component-based architecture.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Web Development",
          prerequisites: ["html-css", "javascript"],
          estimatedTime: "4-5 weeks",
          importance: 5,
          resources: [
            {
              title: "React Course - Beginner's Tutorial for React JavaScript Library",
              url: "https://www.youtube.com/watch?v=bMknfKXIFA8",
              type: "video",
              duration: "11h 48m",
              rating: 4.9
            },
            {
              title: "React Hooks Tutorial",
              url: "https://www.youtube.com/watch?v=O6P86uwfdR0",
              type: "video",
              duration: "2h 30m",
              rating: 4.8
            }
          ]
        },
        {
          id: "nodejs",
          title: "Node.js & Express",
          description: "Server-side JavaScript runtime and web framework. Build scalable backend APIs and web servers with JavaScript.",
          difficulty: "intermediate", 
          status: "not-started",
          category: "Web Development",
          prerequisites: ["javascript"],
          estimatedTime: "3-4 weeks",
          importance: 5,
          resources: [
            {
              title: "Node.js Tutorial for Beginners: Learn Node in 1 Hour",
              url: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
              type: "video",
              duration: "1h 8m",
              rating: 4.7
            },
            {
              title: "Node.js and Express.js Full Course",
              url: "https://www.youtube.com/watch?v=Oe421EPjeBE",
              type: "video",
              duration: "8h 16m",
              rating: 4.8
            }
          ]
        }
      ]
    },
    {
      id: "databases",
      name: "Databases",
      description: "Data storage and retrieval systems",
      nodes: [
        {
          id: "sql",
          title: "SQL & Relational Databases",
          description: "Master SQL and relational database concepts. PostgreSQL, MySQL are essential for most web applications and data management.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Databases",
          estimatedTime: "3-4 weeks",
          importance: 5,
          resources: [
            {
              title: "SQL Tutorial - Full Database Course for Beginners",
              url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
              type: "video",
              duration: "4h 20m",
              rating: 4.8
            },
            {
              title: "PostgreSQL Tutorial Full Course",
              url: "https://www.youtube.com/watch?v=qw--VYLpxG4",
              type: "video",
              duration: "5h 40m",
              rating: 4.7
            }
          ]
        },
        {
          id: "nosql",
          title: "NoSQL Databases",
          description: "Document and key-value databases like MongoDB, Redis. Important for modern applications requiring flexible schemas and caching.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Databases",
          estimatedTime: "2-3 weeks",
          importance: 4,
          resources: [
            {
              title: "MongoDB Crash Course",
              url: "https://www.youtube.com/watch?v=-56x56UppqQ",
              type: "video",
              duration: "2h 0m",
              rating: 4.8
            },
            {
              title: "Redis Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=jgpVdJB2sKQ",
              type: "video",
              duration: "1h 30m",
              rating: 4.7
            }
          ]
        }
      ]
    },
    {
      id: "system-design",
      name: "System Design",
      description: "Large-scale system architecture and design patterns",
      nodes: [
        {
          id: "scalability",
          title: "Scalability Principles",
          description: "Learn how to design systems that can handle increasing load. Covers horizontal vs vertical scaling, load balancing, and performance optimization.",
          difficulty: "advanced",
          status: "not-started",
          category: "System Design",
          prerequisites: ["databases"],
          estimatedTime: "4-5 weeks",
          importance: 5,
          resources: [
            {
              title: "System Design Interview - An Insider's Guide",
              url: "https://www.youtube.com/watch?v=ZgdS0EUmn70",
              type: "video",
              duration: "2h 30m",
              rating: 4.9
            },
            {
              title: "Designing Data-Intensive Applications",
              url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/",
              type: "article",
              rating: 5.0
            }
          ]
        },
        {
          id: "caching",
          title: "Caching Strategies", 
          description: "Implement caching layers to improve performance. Learn about Redis, CDNs, browser caching, and cache invalidation strategies.",
          difficulty: "intermediate",
          status: "not-started",
          category: "System Design",
          estimatedTime: "2-3 weeks",
          importance: 4,
          resources: [
            {
              title: "Caching Strategies and How to Choose the Right One",
              url: "https://www.youtube.com/watch?v=U3RkDLtS7uY",
              type: "video",
              duration: "45m",
              rating: 4.8
            }
          ]
        }
      ]
    }
  ]
};

// AI/ML Intern Roadmap
export const aimlRoadmap: RoadmapData = {
  id: "aiml",
  title: "AI/ML Intern",
  description: "Comprehensive roadmap for AI/ML internships covering machine learning foundations, deep learning, and practical applications.",
  estimatedDuration: "8-12 months",
  learningPath: [
    "Python Programming",
    "Mathematics & Statistics",
    "Machine Learning Basics",
    "Data Processing",
    "Deep Learning",
    "MLOps",
    "Specialized Domains"
  ],
  categories: [
    {
      id: "foundations",
      name: "Mathematical Foundations",
      description: "Essential math concepts for machine learning",
      nodes: [
        {
          id: "linear-algebra",
          title: "Linear Algebra",
          description: "Vectors, matrices, eigenvalues - fundamental building blocks of ML algorithms. Essential for understanding neural networks and dimensionality reduction.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Mathematical Foundations",
          estimatedTime: "3-4 weeks",
          importance: 5,
          resources: [
            {
              title: "Linear Algebra for Machine Learning",
              url: "https://www.youtube.com/watch?v=fNk_zzaMoSs",
              type: "video",
              duration: "3h 30m",
              rating: 4.8
            },
            {
              title: "3Blue1Brown - Essence of Linear Algebra",
              url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
              type: "video",
              duration: "4h 0m",
              rating: 5.0
            }
          ]
        },
        {
          id: "statistics",
          title: "Statistics & Probability",
          description: "Statistical inference, distributions, hypothesis testing. Critical for understanding model evaluation and data analysis.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Mathematical Foundations",
          estimatedTime: "3-4 weeks",
          importance: 5,
          resources: [
            {
              title: "Statistics Fundamentals for Data Science",
              url: "https://www.youtube.com/watch?v=xxpc-HPKN28",
              type: "video",
              duration: "2h 15m",
              rating: 4.7
            },
            {
              title: "Think Stats: Probability and Statistics for Programmers",
              url: "https://greenteapress.com/thinkstats/",
              type: "article",
              rating: 4.6
            }
          ]
        }
      ]
    },
    {
      id: "machine-learning",
      name: "Machine Learning",
      description: "Core ML algorithms and techniques",
      nodes: [
        {
          id: "supervised-learning",
          title: "Supervised Learning",
          description: "Linear regression, logistic regression, decision trees, SVM. Foundation algorithms for prediction and classification tasks.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Machine Learning",
          prerequisites: ["linear-algebra", "statistics"],
          estimatedTime: "4-5 weeks",
          importance: 5,
          resources: [
            {
              title: "Machine Learning Course by Andrew Ng",
              url: "https://www.coursera.org/learn/machine-learning",
              type: "course",
              duration: "60h",
              rating: 4.9
            },
            {
              title: "Hands-On Machine Learning with Python",
              url: "https://www.youtube.com/watch?v=1FRKbUiTX8o",
              type: "video",
              duration: "6h 30m",
              rating: 4.8
            }
          ]
        },
        {
          id: "unsupervised-learning",
          title: "Unsupervised Learning",
          description: "Clustering, dimensionality reduction, anomaly detection. Find hidden patterns in data without labeled examples.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Machine Learning",
          prerequisites: ["supervised-learning"],
          estimatedTime: "3-4 weeks",
          importance: 4,
          resources: [
            {
              title: "Unsupervised Learning Algorithms",
              url: "https://www.youtube.com/watch?v=JnnaDNNb380",
              type: "video",
              duration: "2h 45m",
              rating: 4.7
            }
          ]
        }
      ]
    },
    {
      id: "deep-learning",
      name: "Deep Learning",
      description: "Neural networks and advanced architectures",
      nodes: [
        {
          id: "neural-networks",
          title: "Neural Networks Basics",
          description: "Perceptrons, backpropagation, activation functions. Foundation of modern AI and deep learning systems.",
          difficulty: "advanced",
          status: "not-started",
          category: "Deep Learning",
          prerequisites: ["supervised-learning"],
          estimatedTime: "4-5 weeks",
          importance: 5,
          resources: [
            {
              title: "Neural Networks Explained",
              url: "https://www.youtube.com/watch?v=aircAruvnKk",
              type: "video",
              duration: "4h 0m",
              rating: 4.9
            },
            {
              title: "Deep Learning Specialization",
              url: "https://www.coursera.org/specializations/deep-learning",
              type: "course",
              duration: "120h",
              rating: 4.8
            }
          ]
        },
        {
          id: "cnn-rnn",
          title: "CNN & RNN",
          description: "Convolutional and Recurrent Neural Networks. Essential for computer vision and natural language processing tasks.",
          difficulty: "advanced",
          status: "not-started",
          category: "Deep Learning",
          prerequisites: ["neural-networks"],
          estimatedTime: "5-6 weeks",
          importance: 5,
          resources: [
            {
              title: "CNN and RNN Architectures Explained",
              url: "https://www.youtube.com/watch?v=FmpDIaiMIeA",
              type: "video",
              duration: "3h 15m",
              rating: 4.8
            }
          ]
        }
      ]
    },
    {
      id: "tools-frameworks",
      name: "Tools & Frameworks",
      description: "ML/DL libraries and development tools",
      nodes: [
        {
          id: "python-ml",
          title: "Python for ML",
          description: "NumPy, Pandas, Matplotlib, Scikit-learn. Essential Python ecosystem for data manipulation and machine learning.",
          difficulty: "beginner",
          status: "not-started",
          category: "Tools & Frameworks",
          estimatedTime: "3-4 weeks",
          importance: 5,
          resources: [
            {
              title: "Python for Data Science and Machine Learning",
              url: "https://www.youtube.com/watch?v=7eh4d6sabA0",
              type: "video",
              duration: "12h 0m",
              rating: 4.8
            },
            {
              title: "Pandas Tutorial Complete",
              url: "https://www.youtube.com/watch?v=vmEHCJofslg",
              type: "video",
              duration: "6h 0m",
              rating: 4.7
            }
          ]
        },
        {
          id: "tensorflow-pytorch",
          title: "TensorFlow & PyTorch",
          description: "Deep learning frameworks for building and deploying neural networks. Industry standard tools for ML engineering.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Tools & Frameworks",
          prerequisites: ["python-ml", "neural-networks"],
          estimatedTime: "4-5 weeks",
          importance: 5,
          resources: [
            {
              title: "TensorFlow 2.0 Complete Course",
              url: "https://www.youtube.com/watch?v=tPYj3fFJGjk",
              type: "video",
              duration: "7h 0m",
              rating: 4.8
            },
            {
              title: "PyTorch for Deep Learning",
              url: "https://www.youtube.com/watch?v=c36lUUr864M",
              type: "video",
              duration: "25h 0m",
              rating: 4.9
            }
          ]
        }
      ]
    }
  ]
};

// DevOps Developer Roadmap  
export const devopsRoadmap: RoadmapData = {
  id: "devops",
  title: "DevOps Developer",
  description: "Complete DevOps engineering path covering CI/CD, containerization, orchestration, monitoring, and cloud infrastructure.",
  estimatedDuration: "10-15 months",
  learningPath: [
    "Linux & Scripting",
    "Version Control",
    "Containerization",
    "CI/CD Pipelines",
    "Orchestration",
    "Cloud Platforms",
    "Monitoring",
    "Infrastructure as Code"
  ],
  categories: [
    {
      id: "fundamentals",
      name: "DevOps Fundamentals", 
      description: "Core concepts and foundational tools",
      nodes: [
        {
          id: "linux",
          title: "Linux & Command Line",
          description: "Master Linux systems, shell scripting, and command line tools. Foundation for all DevOps work and server management.",
          difficulty: "beginner",
          status: "not-started",
          category: "DevOps Fundamentals",
          estimatedTime: "3-4 weeks",
          importance: 5,
          resources: [
            {
              title: "Linux Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=BMGixkvJ-6w",
              type: "video",
              duration: "2h 30m",
              rating: 4.8
            },
            {
              title: "Linux Command Line Full Course",
              url: "https://www.youtube.com/watch?v=ZtqBQ68cfJc",
              type: "video", 
              duration: "5h 0m",
              rating: 4.7
            }
          ]
        },
        {
          id: "git",
          title: "Git & Version Control",
          description: "Version control with Git, branching strategies, and collaboration workflows. Essential for code management and team coordination.",
          difficulty: "beginner",
          status: "not-started",
          category: "DevOps Fundamentals",
          estimatedTime: "2-3 weeks",
          importance: 5,
          resources: [
            {
              title: "Git and GitHub for Beginners - Crash Course",
              url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
              type: "video",
              duration: "1h 9m",
              rating: 4.9
            },
            {
              title: "Advanced Git Tutorial",
              url: "https://www.youtube.com/watch?v=Uszj_k0DGsg",
              type: "video",
              duration: "1h 40m",
              rating: 4.8
            }
          ]
        }
      ]
    },
    {
      id: "containerization",
      name: "Containerization",
      description: "Docker and container technologies",
      nodes: [
        {
          id: "docker",
          title: "Docker",
          description: "Containerization with Docker - build, ship, and run applications anywhere. Essential for modern application deployment and development.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Containerization",
          prerequisites: ["linux"],
          estimatedTime: "3-4 weeks",
          importance: 5,
          resources: [
            {
              title: "Docker Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
              type: "video",
              duration: "2h 46m",
              rating: 4.9
            },
            {
              title: "Docker Mastery: with Kubernetes +Swarm",
              url: "https://www.youtube.com/watch?v=Wf2eSG3owoA",
              type: "video",
              duration: "4h 0m",
              rating: 4.8
            }
          ]
        },
        {
          id: "kubernetes",
          title: "Kubernetes",
          description: "Container orchestration platform for managing containerized applications at scale. Industry standard for production deployments.",
          difficulty: "advanced",
          status: "not-started",
          category: "Containerization",
          prerequisites: ["docker"],
          estimatedTime: "6-8 weeks",
          importance: 5,
          resources: [
            {
              title: "Kubernetes Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=X48VuDVv0do",
              type: "video",
              duration: "4h 0m",
              rating: 4.9
            },
            {
              title: "Kubernetes The Hard Way",
              url: "https://github.com/kelseyhightower/kubernetes-the-hard-way",
              type: "course",
              rating: 4.8
            }
          ]
        }
      ]
    },
    {
      id: "cicd",
      name: "CI/CD Pipelines",
      description: "Continuous Integration and Deployment",
      nodes: [
        {
          id: "jenkins",
          title: "Jenkins",
          description: "Popular CI/CD automation server. Build automated pipelines for testing, building, and deploying applications.",
          difficulty: "intermediate",
          status: "not-started",
          category: "CI/CD Pipelines",
          prerequisites: ["git"],
          estimatedTime: "3-4 weeks",
          importance: 4,
          resources: [
            {
              title: "Jenkins Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=FX322RVNGj4",
              type: "video",
              duration: "4h 0m",
              rating: 4.7
            },
            {
              title: "Complete Jenkins Pipeline Tutorial",
              url: "https://www.youtube.com/watch?v=7KCS70sCoK0",
              type: "video",
              duration: "2h 30m",
              rating: 4.8
            }
          ]
        },
        {
          id: "github-actions",
          title: "GitHub Actions",
          description: "Modern CI/CD platform integrated with GitHub. Build workflows for automated testing, building, and deployment.",
          difficulty: "intermediate",
          status: "not-started",
          category: "CI/CD Pipelines",
          prerequisites: ["git"],
          estimatedTime: "2-3 weeks",
          importance: 5,
          resources: [
            {
              title: "GitHub Actions Tutorial",
              url: "https://www.youtube.com/watch?v=R8_veQiYBjI",
              type: "video",
              duration: "2h 15m",
              rating: 4.8
            }
          ]
        }
      ]
    },
    {
      id: "cloud",
      name: "Cloud Platforms",
      description: "Major cloud service providers",
      nodes: [
        {
          id: "aws",
          title: "Amazon Web Services",
          description: "Leading cloud platform with comprehensive services. Learn EC2, S3, RDS, Lambda, and core AWS services for scalable infrastructure.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Cloud Platforms",
          estimatedTime: "6-8 weeks",
          importance: 5,
          resources: [
            {
              title: "AWS Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=k1RI5locZE4",
              type: "video",
              duration: "4h 30m",
              rating: 4.8
            },
            {
              title: "AWS Certified Solutions Architect Course",
              url: "https://www.youtube.com/watch?v=Ia-UEYYR44s",
              type: "video",
              duration: "10h 30m",
              rating: 4.9
            }
          ]
        }
      ]
    },
    {
      id: "monitoring",
      name: "Monitoring & Logging",
      description: "Application and infrastructure monitoring",
      nodes: [
        {
          id: "prometheus",
          title: "Prometheus & Grafana",
          description: "Monitoring stack for metrics collection and visualization. Essential for observability in production systems.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Monitoring & Logging",
          estimatedTime: "3-4 weeks",
          importance: 4,
          resources: [
            {
              title: "Prometheus Monitoring Tutorial",
              url: "https://www.youtube.com/watch?v=h4Sl21AKiDg",
              type: "video",
              duration: "2h 0m",
              rating: 4.7
            },
            {
              title: "Grafana Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=9TJx7QTrTyo",
              type: "video",
              duration: "1h 30m",
              rating: 4.8
            }
          ]
        }
      ]
    }
  ]
};

// Data Engineer Roadmap
export const dataEngineerRoadmap: RoadmapData = {
  id: "data-engineer",
  title: "Data Engineer",
  description: "Complete data engineering path covering data pipelines, big data technologies, and data infrastructure.",
  estimatedDuration: "12-18 months",
  learningPath: [
    "Programming Foundations",
    "Databases & SQL",
    "Data Processing",
    "Big Data Technologies",
    "Data Pipelines",
    "Cloud Data Services",
    "Data Modeling"
  ],
  categories: [
    {
      id: "programming",
      name: "Programming & Scripting",
      description: "Core programming skills for data engineering",
      nodes: [
        {
          id: "python-data",
          title: "Python for Data Engineering",
          description: "Python programming with focus on data manipulation, ETL processes, and automation. Essential language for data engineering.",
          difficulty: "beginner",
          status: "not-started",
          category: "Programming & Scripting",
          estimatedTime: "4-5 weeks",
          importance: 5,
          resources: [
            {
              title: "Python for Data Engineering Full Course",
              url: "https://www.youtube.com/watch?v=DVviilX5tuU",
              type: "video",
              duration: "8h 0m",
              rating: 4.8
            },
            {
              title: "Pandas for Data Engineering",
              url: "https://www.youtube.com/watch?v=vmEHCJofslg",
              type: "video",
              duration: "6h 0m",
              rating: 4.7
            }
          ]
        },
        {
          id: "sql-advanced",
          title: "Advanced SQL",
          description: "Advanced SQL techniques including window functions, CTEs, performance optimization. Critical for data manipulation and analysis.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Programming & Scripting",
          estimatedTime: "4-5 weeks",
          importance: 5,
          resources: [
            {
              title: "Advanced SQL Tutorial",
              url: "https://www.youtube.com/watch?v=2Fn0WAyZV0E",
              type: "video",  
              duration: "3h 30m",
              rating: 4.8
            },
            {
              title: "SQL for Data Analysis",
              url: "https://mode.com/sql-tutorial/",
              type: "course",
              rating: 4.7
            }
          ]
        }
      ]
    },
    {
      id: "big-data",
      name: "Big Data Technologies",
      description: "Frameworks for processing large-scale data",
      nodes: [
        {
          id: "apache-spark",
          title: "Apache Spark",
          description: "Distributed computing framework for big data processing. Essential for handling large datasets and complex transformations.",
          difficulty: "advanced",
          status: "not-started",
          category: "Big Data Technologies",
          prerequisites: ["python-data", "sql-advanced"],
          estimatedTime: "6-8 weeks",
          importance: 5,
          resources: [
            {
              title: "Apache Spark Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=zC9cnh8rJd0",
              type: "video",
              duration: "5h 0m",
              rating: 4.8
            },
            {
              title: "PySpark Tutorial Complete Course",
              url: "https://www.youtube.com/watch?v=_C8kWso4ne4",
              type: "video",
              duration: "6h 30m",
              rating: 4.7
            }
          ]
        },
        {
          id: "kafka",
          title: "Apache Kafka",
          description: "Distributed streaming platform for building real-time data pipelines. Critical for handling high-throughput data streams.",
          difficulty: "advanced",
          status: "not-started",
          category: "Big Data Technologies",
          estimatedTime: "4-5 weeks",
          importance: 4,
          resources: [
            {
              title: "Apache Kafka Tutorial",
              url: "https://www.youtube.com/watch?v=Ch5VhJzaoaI",
              type: "video",
              duration: "3h 0m",
              rating: 4.8
            }
          ]
        }
      ]
    },
    {
      id: "data-warehousing",
      name: "Data Warehousing",
      description: "Data storage and modeling solutions",
      nodes: [
        {
          id: "dimensional-modeling",
          title: "Dimensional Modeling",
          description: "Design efficient data warehouse schemas with fact and dimension tables. Foundation for analytical data systems.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Data Warehousing",
          prerequisites: ["sql-advanced"],
          estimatedTime: "3-4 weeks",
          importance: 4,
          resources: [
            {
              title: "Data Warehouse Fundamentals",
              url: "https://www.youtube.com/watch?v=J326LIUrZM8",
              type: "video",
              duration: "2h 30m",
              rating: 4.7
            }
          ]
        },
        {
          id: "cloud-warehouses",
          title: "Cloud Data Warehouses",
          description: "Modern cloud data warehouses like Snowflake, BigQuery, Redshift. Scalable solutions for analytical workloads.",
          difficulty: "intermediate",
          status: "not-started",
          category: "Data Warehousing",
          prerequisites: ["dimensional-modeling"],
          estimatedTime: "4-5 weeks",
          importance: 5,
          resources: [
            {
              title: "Snowflake Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=W9rHKe1WPS8",
              type: "video",
              duration: "2h 15m",
              rating: 4.8
            },
            {
              title: "Google BigQuery Tutorial",
              url: "https://www.youtube.com/watch?v=d3MDxC_iuaw",
              type: "video",
              duration: "3h 0m",
              rating: 4.7
            }
          ]
        }
      ]
    }
  ]
};

export const allRoadmaps = {
  sde: sdeRoadmap,
  aiml: aimlRoadmap,
  devops: devopsRoadmap,
  "data-engineer": dataEngineerRoadmap
};