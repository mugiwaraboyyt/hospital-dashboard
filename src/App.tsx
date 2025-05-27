// App.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Toaster } from '@/components/ui/sonner';
import HospitalDashboard from './pages/dashboard';
import { ThemeProvider } from './providers/theme';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="p-4 text-red-500">
      <h2 className="text-lg font-bold">Something went wrong:</h2>
      <pre className="mt-2">{error.message}</pre>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Router>
          <Routes>
            <Route path="/" element={<HospitalDashboard />} />
            {/* Add more routes here if needed */}
          </Routes>
        </Router>
        <Toaster position="top-right" richColors />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

export default App;