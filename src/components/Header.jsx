import './Header.css';

export default function Header() {
  return (
    <header className="dashboard-header">
      {/* Left: Back Arrow + Title */}
      <div className="header-left">
        <img src="/arrow-left.png" alt="Back" className="icon" />
        <h1>Analytics</h1>
      </div>

      {/* Right: Search, Analytics Button, Notification, Avatar, Dropdown */}
      <div className="header-right">
        <div className="search-box">
          <img src="/iconoir_search.png" alt="Search" className="icon" />
          <input type="text" placeholder="Search" />
        </div>

        <button className="analytics-btn">
          <img src="/uis_analytics.png" alt="Analytics" className="icon" />
          Analytics
        </button>

        <img src="/icon-bell.png" alt="Notifications" className="icon-bell" />
        <img src="/frame-39.png" alt="Avatar" className="avatar" />
        <img src="/drop.png" alt="Dropdown" className="icon dropdown-icon" />
      </div>
    </header>
  );
}
