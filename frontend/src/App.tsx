import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
console.log(import.meta.env.VITE_API_URL);

import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Laptops from "./pages/products/Laptops";
import LaptopDetail from "./pages/products/LaptopDetail";
import Monitors from "./pages/products/Monitors";
import Desktops from "./pages/products/Desktops";
import EventsGallery from "./pages/EventsGallery";
import EventDetail from "./pages/EventDetail";
import Contact from "./pages/Contact";
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
          <Route path="/about" element={<About />} />

          <Route path="/products" element={<Products />} />
          <Route path="/products/laptops" element={<Laptops />} />
          <Route path="/products/laptops/:slug" element={<LaptopDetail />} />

          <Route path="/products/monitors" element={<Monitors />} />
          
          <Route path="/products/desktops" element={<Desktops />} />

          <Route path="/events" element={<EventsGallery />} />
          <Route path="/events/:slug" element={<EventDetail />} />

          <Route path="/contact" element={<Contact />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
