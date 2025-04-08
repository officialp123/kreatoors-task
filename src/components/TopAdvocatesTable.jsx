import './TopAdvocatesTable.css';

const teams = [
  { initials: 'MT', name: 'Marketing Team', shares: 284, impressions: '125.4K', engagement: '6.2%' },
  { initials: 'FT', name: 'Finance Team', shares: 284, impressions: '125.4K', engagement: '6.2%' },
  { initials: 'DT', name: 'Design Team', shares: 284, impressions: '125.4K', engagement: '6.2%' },
  { initials: 'PT', name: 'Product Team', shares: 284, impressions: '125.4K', engagement: '6.2%' },
];

export default function TopAdvocatesTable() {
  return (
    <div className="advocates-card">
      <div className="advocates-header">
        <h3>Top Team Advocates</h3>
        <a href="#" className="view-all">View All</a>
      </div>

      <div className="advocates-table">
        <div className="table-header ">
          <span>Team</span>
          <span>Shares</span>
          <span>Impressions</span>
          <span>Engagement Rate</span>
          <span>Trend</span>
        </div>

        {teams.map((team, idx) => (
          <div className="table-row" key={idx}>
            <div className="team-cell">
              <div className="team-avatar">{team.initials}</div>
              <span>{team.name}</span>
            </div>
            <span>{team.shares}</span>
            <span>{team.impressions}</span>
            <span>{team.engagement}</span>
            <img src="/Frame.png" alt="trend" className="trend-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}
