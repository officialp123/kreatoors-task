import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="logo-container">
        <img src="/Logo.png" alt="Logo" className="logo" />
      </div>

      {/* Create Post Button */}
      <button className="create-post-btn">

     + &nbsp;   Create a Post
      </button>

      {/* Navigation Menu */}
      <nav className="nav-menu">
        <NavItem icon="/mage_dashboard.png" label="Main Workspace" />
        <NavItem icon="/growth.png" label="Personal Growth Hub" />
        <NavItem icon="/generate.png" label="Content Studio" hasDropdown />
        <NavItem icon="/calculator.png" label="Advocacy Hub" hasDropdown />
        <NavItem icon="/idea.png" label="Community Hub" hasDropdown />
        <NavItem icon="/analytics.png" label="Analytics Hub" />
        <NavItem icon="/settings.png" label="Settings" />
      </nav>
            {/* Remaining Tokens Widget */}
            <div className="token-widget">
  {/* Overlay background curves */}
  <img src="/down-circle.png" alt="curve" className="curve-top" />
  <img src="/up-circle.png" alt="curve" className="curve-side" />

  {/* Your content goes here */}
  <div className="token-label">Remaining Tokens</div>
  <div className="token-progress-bar">
    <div className="token-progress-fill" style={{ width: '40%' }} />
  </div>
  <div className="token-count">4/10</div>
  <div className="upgrade-link">
    <span>Upgrade Plan</span>
    <span className="arrow">→</span>
  </div>
</div>


    </aside>
  );
}

function NavItem({ icon, label, hasDropdown }) {
  return (
    <div className="nav-item">
      <div className="nav-icon-label">
        <img src={icon} alt={label} className="nav-icon" />
        <span>{label}</span>
      </div>
      {hasDropdown && (
  <img src="/drop.png" alt="dropdown" className="dropdown-icon" />
)}

    </div>
  );
}
