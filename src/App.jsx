import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "@/lib/AuthContext";
import { queryClientInstance } from "@/lib/query-client";
import PageNotFound from "@/lib/PageNotFound";

import Home from "@/pages/Home";
import Learn from "@/pages/Learn";
import Practice from "@/pages/Practice";
import Quiz from "@/pages/Quiz";
import Competition from "@/pages/Competition";
import PracticeCourse from "@/pages/PracticeCourse";
import SignRecognizer from "@/pages/SignRecognizer";
import Results from "@/pages/Results";
import ParentDashboard from "@/pages/ParentDashboard";

const DemoAppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Navigate to="/" replace />} />
    <Route path="/register" element={<Navigate to="/" replace />} />
    <Route path="/forgot-password" element={<Navigate to="/" replace />} />
    <Route path="/reset-password" element={<Navigate to="/" replace />} />
    <Route path="/" element={<Home />} />
    <Route path="/tanulunk" element={<Learn />} />
    <Route path="/gyakoroljunk" element={<Practice />} />
    <Route path="/kviz" element={<Quiz />} />
    <Route path="/verseny" element={<Competition />} />
    <Route path="/gyakorlati-palya" element={<PracticeCourse />} />
    <Route path="/tabla-felismero" element={<SignRecognizer />} />
    <Route path="/eredmenyeim" element={<Results />} />
    <Route path="/szuloi-nezet" element={<ParentDashboard />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <DemoAppRoutes />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
