import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider } from '@/lib/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import Home from '@/pages/Home';
import TeamLayout from '@/components/TeamLayout';
import Team from '@/pages/Team';
import MemberDossier from '@/pages/MemberDossier';

const AuthenticatedApp = () => {
  // Authentication loading and redirect logic bypassed for static GitHub hosting
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Capstone/" element={<Home />} /> 
      <Route path="/team" element={<TeamLayout />}>
        <Route index element={<Team />} />
        <Route path=":memberId" element={<MemberDossier />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

function App() {
  return (
    <Router basename="/Capstone">
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <ScrollToTop />
          <AuthenticatedApp />
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
