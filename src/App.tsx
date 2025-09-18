import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import SDERoadmap from "./pages/SDERoadmap";
import AimlRoadmap from "./pages/AimlRoadmap";
import DevOpsRoadmap from "./pages/DevOpsRoadmap";
import DataEngineerRoadmap from "./pages/DataEngineerRoadmap";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/sde" element={<SDERoadmap />} />
            <Route path="/aiml" element={<AimlRoadmap />} />
            <Route path="/devops" element={<DevOpsRoadmap />} />
            <Route path="/data-engineer" element={<DataEngineerRoadmap />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
