
import React from 'react';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <a href="#" className="sidebar-brand">
          Ads<span>Crafifty</span>
        </a>
        <div className="sidebar-toggler not-active">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="sidebar-body">
        <ul className="nav">
          <li className="nav-item nav-category">Main</li>
          <li className="nav-item">
            <a href="dashboard.html" className="nav-link">
              <i className="link-icon" data-feather="box"></i>
              <span className="link-title">Dashboard</span>
            </a>
          </li>
          <li className="nav-item nav-category">Components</li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#tables" role="button" aria-expanded="false" aria-controls="tables">
              <i className="link-icon" data-feather="layout"></i>
              <span className="link-title">Table</span>
              <i className="link-arrow" data-feather="chevron-down"></i>
            </a>
            <div className="collapse" id="tables">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/tables/data-table.html" className="nav-link">Data Table</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item nav-category">Pages</li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="collapse" href="#general-pages" role="button" aria-expanded="false" aria-controls="general-pages">
              <i className="link-icon" data-feather="book"></i>
              <span className="link-title">Special pages</span>
              <i className="link-arrow" data-feather="chevron-down"></i>
            </a>
            <div className="collapse" id="general-pages">
              <ul className="nav sub-menu">
                <li className="nav-item">
                  <a href="pages/general/blank-page.html" className="nav-link">Blank page</a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/faq.html" className="nav-link">Faq</a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/invoice.html" className="nav-link">Invoice</a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/profile.html" className="nav-link">Profile</a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/pricing.html" className="nav-link">Pricing</a>
                </li>
                <li className="nav-item">
                  <a href="pages/general/timeline.html" className="nav-link">Timeline</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
