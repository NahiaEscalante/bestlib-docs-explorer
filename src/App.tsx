import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import QuickStart from "./pages/QuickStart";
import Deployment from "./pages/Deployment";
import ApiPython from "./pages/ApiPython";
import NotFound from "./pages/NotFound";
import CoreConcepts from "./pages/CoreConcepts";
import ReactiveLinking from "./pages/ReactiveLinking";
import ReactiveMatrixLayout from "./pages/ReactiveMatrixLayout";
import ApiDataModels from "./pages/ApiDataModels";
import ChartsIndex from "./pages/ChartsIndex";
import LinkedViews from "./pages/LinkedViews";
import InteractiveScatter from "./pages/IteractiveScatter";
import ApiJavascript from "./pages/ApiJavascript";

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
           <Route path="/core-concepts" element={<CoreConcepts/>} />
           <Route path="/layouts/reactive" element={<ReactiveMatrixLayout/>} />
          <Route path="/layouts/reactive-linking" element={<ReactiveLinking/>} />
          <Route path="/api/models" element={<ApiDataModels/>} />
          <Route path="/deployment" element={<Deployment />} />
          <Route path="/api/python" element={<ApiPython />} />
          <Route path="/api/javascript" element={<ApiJavascript />} />
           <Route path="/charts/index" element={<ChartsIndex/>} />
            <Route path="/examples/scatter" element={<InteractiveScatter/>} />
             <Route path="/examples/linked" element={<LinkedViews/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
