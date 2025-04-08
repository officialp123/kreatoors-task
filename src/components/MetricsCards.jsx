import './MetricsCards.css';

export default function MetricsCards() {
  const cards = [
    {
      title: 'Total Shares',
      value: '2,847',
      unit: 'shares',
      average: '94.7',
      badge: '+12%',
      badgeColor: 'green',
    },
    {
      title: 'Impression Generated',
      value: '1.2M',
      unit: 'views',
      average: '94.7',
      badge: '+12%',
      badgeColor: 'green',
    },
    {
      title: 'Engagement Rate',
      value: '4.8%',
      unit: 'avg rate',
      average: '94.7',
      badge: '-2.1%',
      badgeColor: 'red',
    },
  ];

  return (
    <div className="metrics-container">
      {cards.map((card, index) => (
        <div className="metric-card" key={index}>
         <div className="card-header">
  <div className="left-header">
    <div className="icon-box">
      <img src="/box-arrow.png" alt="metric icon" />
    </div>
    <span className="card-title">{card.title}</span>
  </div>
  <div className={`badge ${card.badgeColor}`}>{card.badge}</div>
</div>

          <div className="card-metric">
            <span className="value">{card.value}</span>
            <span className="unit">{card.unit}</span>
          </div>
          <div className="card-footer">
            <span>Daily Average</span>
            <span>{card.average}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
