import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Property from "./pages/Property";
import Gardens from "./pages/Gardens";
import GreenCommittee from "./pages/GreenCommittee";
import Amenities from "./pages/Amenities";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import ResidentResources from "./pages/ResidentResources";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/property"} component={Property} />
      <Route path={"/gardens"} component={Gardens} />
      <Route path={"/green-committee"} component={GreenCommittee} />
      <Route path={"/amenities"} component={Amenities} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/resident-resources"} component={ResidentResources} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
