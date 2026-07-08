import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import Milestones from "@/pages/Milestones";
import NotFound from "@/pages/not-found";

import FloatingAnniversaryLogo from "@/components/FloatingAnniversaryLogo";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/milestones" component={Milestones} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AppRouter />
          <FloatingAnniversaryLogo />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
