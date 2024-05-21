import React, { useEffect } from 'react';
import feather from 'feather-icons';

const Navbar = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <nav className="navbar">
      <a href="#" className="sidebar-toggler">
        <i data-feather="menu"></i>
      </a>
      <div className="navbar-content">
        <form className="search-form">
          <div className="input-group">
            <div className="input-group-text">
              <i data-feather="search"></i>
            </div>
            <input type="text" className="form-control" id="navbarForm" placeholder="Search here..." />
          </div>
        </form>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img className="wd-30 ht-30 rounded-circle" src="https://via.placeholder.com/30x30" alt="profile" />
            </a>
            <div className="dropdown-menu p-0" aria-labelledby="profileDropdown">
              <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                <div className="mb-3">
                  <img className="wd-80 ht-80 rounded-circle" src="https://via.placeholder.com/80x80" alt="" />
                </div>
                <div className="text-center">
                  <p className="tx-16 fw-bolder">Amiah Burton</p>
                  <p className="tx-12 text-muted">amiahburton@gmail.com</p>
                </div>
              </div>
              <ul className="list-unstyled p-1">
                <li className="dropdown-item py-2">
                  <a href="javascript:;" className="text-body ms-0">
                    <i className="me-2 icon-md" data-feather="log-out"></i>
                    <span>Log Out</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
