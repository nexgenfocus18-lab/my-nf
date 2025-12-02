import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import {
  ShippingPolicy,
  TermsAndConditions,
  CancellationRefundPolicy,
  PrivacyPolicy,
} from "@/pages/policies";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shipping-policy" component={ShippingPolicy} />
      <Route path="/terms-and-conditions" component={TermsAndConditions} />
      <Route path="/cancellation-refund-policy" component={CancellationRefundPolicy} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
