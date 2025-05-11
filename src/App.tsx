
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/scrollToTop";
import MitenProfile from "./pages/MitenProfile";

// NRI Portal Pages
import NriPortal from "./pages/NriPortal";
import NriResearch from "./pages/NriResearch";
import NriStrategy from "./pages/NriStrategy";
import NriProposal from "./pages/NriProposal";
import NriProjects from "./pages/NriProjects";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Main routes with navigation */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/home" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
          <Route path="/services" element={<><Navbar /><Services /><Footer /></>} />
          <Route path="/services/:serviceId" element={<><Navbar /><ServiceDetail /><Footer /></>} />
          <Route path="/case-studies" element={<><Navbar /><CaseStudies /><Footer /></>} />
          <Route path="/case-studies/:caseStudyId" element={<><Navbar /><CaseStudyDetail /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
          
          {/* NRI Portal Routes - still accessible but no navigation to them */}
          <Route path="/nri-portal" element={<><Navbar /><NriPortal /><Footer /></>} />
          <Route path="/nri-portal/research" element={<><Navbar /><NriResearch /><Footer /></>} />
          <Route path="/nri-portal/strategy" element={<><Navbar /><NriStrategy /><Footer /></>} />
          <Route path="/nri-portal/proposal" element={<><Navbar /><NriProposal /><Footer /></>} />
          <Route path="/nri-portal/projects" element={<><Navbar /><NriProjects /><Footer /></>} />
          
          {/* Hidden profile page - no navigation components */}
          <Route path="/miten-profile" element={<MitenProfile />} />
          
          <Route path="*" element={<><Navbar /><NotFound /><Footer /></>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
