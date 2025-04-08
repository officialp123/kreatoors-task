import './DashboardHeader.css';

export default function DashboardHeader() {
  return (
    <div className="dashboard-section">
      <div className="dashboard-title">
        <div>
          <h2>Advocacy Impact Dashboard</h2>
          <p>Brand Amplification & Employee Advocacy Metrics</p>
        </div>

        <div className="dashboard-actions">
          <button className="filter-btn">
            <img src="/calendar.png" alt="calendar" className="icon" />
            Last 30 Days
          </button>

          <button className="export-btn">
            <img src="/question.png" alt="export" className="icon" />
            Export Report
          </button>
        </div>
      </div>
    </div>
  );
}
