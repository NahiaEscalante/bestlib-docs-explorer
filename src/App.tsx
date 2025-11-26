import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuickStart from "./pages/QuickStart";
import TutorialsReactiveLinking from "./pages/TutorialsReactiveLinking";
import Deployment from "./pages/Deployment";
import ApiPython from "./pages/ApiPython";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quick-start" element={<QuickStart />} />
          <Route path="/tutorials/reactive-linking" element={<TutorialsReactiveLinking />} />
          <Route path="/deployment" element={<Deployment />} />
          <Route path="/api/python" element={<ApiPython />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
