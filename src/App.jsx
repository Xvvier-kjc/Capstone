import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ScrollToTop from './components/ScrollToTop';
import Home from '@/pages/Home';
import TeamLayout from '@/components/TeamLayout';
import Team from '@/pages/Team';
import MemberDossier from '@/pages/MemberDossier';
// Add page imports here

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // 1. Remove the <Router> tags from the App function below, and place them HERE instead:
const AuthenticatedApp = () => {
  // Keep your commented out or bypassed auth hooks here...

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

// 2. Update your main App component to wrap your Router around everything at the topmost level:
function App() {
  return (
    <Router basename="/Capstone"> {/* <-- Router sits at the very top now! */}
      <AuthProvider>
        <QueryClientProvider client={queryClientInstance}>
          <ScrollToTop />
          <AuthenticatedApp />
          <Toaster />
        </QueryClientProvider>
      </AuthProvider>
    </Router>
  )
}



export default App;