import DashboardHeader from './components/DashboardHeader';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MetricsCards from './components/MetricsCards';
import ChartsSection from './components/ChartsSection';
import TopAdvocatesTable from './components/TopAdvocatesTable';
function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, backgroundColor: '#F7F7F7', minHeight: '100vh' }}>
        <Header />
        <DashboardHeader />
        <MetricsCards />
        <ChartsSection />
        <TopAdvocatesTable />
        {/* Next content goes here */}
      </div>
    </div>
  );
}
export default App;
