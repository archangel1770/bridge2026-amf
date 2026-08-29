import { useEffect, useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import RegistrationConfirmed from "./pages/RegistrationConfirmed.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends a GA4 page_view on client-side route changes. The initial pageview is
 *  already sent automatically by the gtag('config') call in index.html, so the
 *  first render is skipped to avoid double-counting the landing page. */
const RouteAnalytics = () => {
  const location = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
      });
    }
  }, [location.pathname, location.search]);

  return null;
};

/** Applies noindex to non-indexable routes such as the registration confirmation page. */
const NoIndexManager = () => {
  const location = useLocation();

  useEffect(() => {
    const existing = document.querySelector('meta[name="robots"]');
    if (location.pathname === "/registration-confirmed") {
      if (!existing) {
        const meta = document.createElement("meta");
        meta.name = "robots";
        meta.content = "noindex, nofollow";
        document.head.appendChild(meta);
      } else {
        existing.setAttribute("content", "noindex, nofollow");
      }
    } else if (existing) {
      existing.remove();
    }
  }, [location.pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteAnalytics />
        <NoIndexManager />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registration-confirmed" element={<RegistrationConfirmed />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
