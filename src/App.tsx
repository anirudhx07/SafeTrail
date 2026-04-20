import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SplashScreen } from './screens/SplashScreen';
import { Onboarding } from './screens/Onboarding';
import { Login } from './screens/Login';
import { KYC } from './screens/KYC';
import { Itinerary } from './screens/Itinerary';
import { DigitalID } from './screens/DigitalID';
import { Dashboard } from './screens/Dashboard';
import { SafetyScore } from './screens/SafetyScore';
import { MapView } from './screens/MapView';
import { SOS } from './screens/SOS';
import { AdminDashboard } from './screens/AdminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kyc" element={<KYC />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/my-id" element={<DigitalID />} />
        <Route path="/status" element={<Dashboard />} />
        <Route path="/safety-details" element={<SafetyScore />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/sos" element={<SOS />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/alerts" element={<Navigate to="/status" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
