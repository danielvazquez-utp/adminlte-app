import { Link } from 'react-router-dom';

import adminLogo from '../../public/dist/img/AdminLTELogo.png';
import user2 from '../../public/dist/img/user2-160x160.jpg';

const Aside = () => {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/" className="brand-link">
          <img src={ adminLogo } alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: ".8"}} />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
        </Link>


        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={ user2 } className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <Link className="d-block">Alexander Pierce</Link>
            </div>
          </div>

          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw"></i>
                  </button>
                </div>
            </div>
          </div>

          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              
              <li className="nav-header">Menú principal</li>
              <li className="nav-item">
                <Link to="/add" className="nav-link">
                  <i className="nav-icon fas fa-th"></i>
                  <p>
                    Agregar producto
                    <span className="right badge badge-danger">New</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/list" className="nav-link">
                  <i className="nav-icon fas fa-calendar-alt"></i>
                  <p>
                    Productos agregados
                    <span className="badge badge-info right">2</span>
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="pages/gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image"></i>
                  <p>
                    Gallery
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-sign-out-alt"></i>
                  <p>
                    Salir
                  </p>
                </Link>
              </li>
              
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Aside;