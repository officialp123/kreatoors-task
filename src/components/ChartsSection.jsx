import './ChartsSection.css';
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,
  BarChart, Bar, ResponsiveContainer
} from 'recharts';

const lineData = [
  { name: 'Day 1', shares: 120, impressions: 400 },
  { name: 'Day 2', shares: 180, impressions: 580 },
  { name: 'Day 3', shares: 260, impressions: 440 },
  { name: 'Day 4', shares: 240, impressions: 470 },
  { name: 'Day 5', shares: 520, impressions: 400 },
  { name: 'Day 6', shares: 390, impressions: 330 },
  { name: 'Day 7', shares: 310, impressions: 290 },
];

const barData = [
  { name: 'Day 1', value: 400 },
  { name: 'Day 2', value: 470 },
  { name: 'Day 3', value: 470 },
  { name: 'Day 4', value: 430 },
  { name: 'Day 5', value: 530 },
  { name: 'Day 6', value: 430 },
  { name: 'Day 7', value: 480 },
];

function RoundedBar(props) {
    const { x, y, width, height, fill } = props;
    const radius = 6;
  
    return (
      <path
        d={`
          M${x},${y + radius}
          a${radius},${radius} 0 0 1 ${radius},-${radius}
          h${width - 2 * radius}
          a${radius},${radius} 0 0 1 ${radius},${radius}
          v${height - radius}
          h-${width}
          Z
        `}
        fill={fill}
      />
    );
  }
  
  
export default function ChartsSection() {
  return (
    <div className="charts-wrapper">
      {/* Sharing Activity Trend */}
      <div className="chart-card">
        <div className="chart-header">
          <h3>Sharing Activity Trend</h3>
          <div className="legend">
            <div className="legend-item">
              <span className="dot purple"></span> Shares
            </div>
            <div className="legend-item">
              <span className="dot green"></span> Impressions
            </div>
          </div>
        </div>
        <div className="chart-inner-box">
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={lineData}>
              <CartesianGrid stroke="#eee" strokeDasharray="4 4" />
              <XAxis dataKey="name" />
              <YAxis tickCount={7} domain={[0, 600]} />

              <Tooltip />
              <Line type="monotone" dataKey="shares" stroke="#8B5CF6" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="impressions" stroke="#22C55E" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Engagement by Content Type */}
      <div className="chart-card">
        <div className="chart-header">
          <h3>Engagement by Content Type</h3>
          <img src="/dot.png" alt="menu" className="dots-button" />
        </div>
        <div className="chart-inner-box">
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={barData}>
              <CartesianGrid stroke="#eee" strokeDasharray="4 4" />
              <XAxis dataKey="name" />
              <YAxis tickCount={7} domain={[0, 600]} />

              <Tooltip />
              <Bar
  dataKey="value"
  fill="#8581E7"
  shape={<RoundedBar />}
  isAnimationActive={true}
/>


            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
