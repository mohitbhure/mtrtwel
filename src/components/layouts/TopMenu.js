import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthService from '../../services/AuthService';
class TopMenu extends React.Component {

    static propTypes = {
        history: PropTypes.object.isRequired
    }
    logout = (e) => {
        e.preventDefault();
        var { history } = this.props;
        AuthService.logout();
        history.push('/');
    }
    render() {
        return (
            <div className="horizontal-menu">
                <nav className="navbar top-navbar col-lg-12 col-12 p-0">
                    <div className="container">
                        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                            <Link className="navbar-brand brand-logo" to="#" ><img src="/images/logo-white.svg" alt="logo" /></Link>
                            <Link className="navbar-brand brand-logo-mini" to="#" ><img src="/images/logo-mini.svg" alt="logo" /></Link>
                        </div>
                        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end justify-content-lg-start">
                            <ul className="navbar-nav mr-lg-2">
                                <li className="nav-item nav-search d-none d-lg-block">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="search">
                                                <i className="mdi mdi-magnify"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" placeholder="search" aria-label="search" aria-describedby="search" />
                                    </div>
                                </li>
                            </ul>
                            <ul className="navbar-nav navbar-nav-right">
                                <li className="nav-item dropdown">
                                    <Link to="#" className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" data-toggle="dropdown">
                                        <i className="mdi mdi-bell-outline mx-0"></i>
                                        <span className="count"></span>
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                        <Link to="#" className="dropdown-item">
                                            <p className="mb-0 font-weight-normal float-left">You have 4 new notifications
                                            </p>
                                            <span className="badge badge-pill badge-warning float-right">View all</span>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to="#" className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-success">
                                                    <i className="mdi mdi-information mx-0"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <h6 className="preview-subject font-weight-medium">Application Error</h6>
                                                <p className="font-weight-light small-text mb-0">
                                                    Just now
                                                </p>
                                            </div>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to="#" className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-warning">
                                                    <i className="mdi mdi-settings mx-0"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <h6 className="preview-subject font-weight-medium">Settings</h6>
                                                <p className="font-weight-light small-text mb-0">
                                                    Private message
                                                </p>
                                            </div>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to="#" className="dropdown-item preview-item">
                                            <div className="preview-thumbnail">
                                                <div className="preview-icon bg-info">
                                                    <i className="mdi mdi-account-box mx-0"></i>
                                                </div>
                                            </div>
                                            <div className="preview-item-content">
                                                <h6 className="preview-subject font-weight-medium">New user registration</h6>
                                                <p className="font-weight-light small-text mb-0">
                                                    2 days ago
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                                <li className="nav-item nav-profile dropdown">
                                    <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown" id="profileDropdown">
                                        <img src="https://via.placeholder.com/30x30" alt="profile" />
                                        <span className="nav-profile-name">Evan Morales</span>
                                    </Link>
                                    <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                        <Link to="#" className="dropdown-item">
                                            <i className="mdi mdi-settings text-primary"></i>
                                            Settings
                                            </Link>
                                        <div className="dropdown-divider"></div>
                                        <Link to="#" onClick={this.logout} className="dropdown-item">
                                            <i className="mdi mdi-logout text-primary"></i>
                                            Logout
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                                <span className="mdi mdi-menu"></span>
                            </button>
                        </div>
                    </div>
                </nav>
                <nav className="bottom-navbar">
                    <div className="container">
                        <ul className="nav page-navigation">
                            <li className="nav-item">
                                <Link className="nav-link" to="index.html">
                                    <i className="mdi mdi-view-dashboard-outline menu-icon"></i>
                                    <span className="menu-title">Dashboard</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="pages/widgets/widgets.html">
                                    <i className="mdi mdi-airplay menu-icon"></i>
                                    <span className="menu-title">Widgets</span>
                                </Link>
                            </li>
                            <li className="nav-item mega-menu">
                                <Link to="#" className="nav-link">
                                    <i className="mdi mdi-puzzle-outline menu-icon"></i>
                                    <span className="menu-title">UI Elements</span>
                                    <i className="menu-arrow"></i>
                                </Link>
                                <div className="submenu">
                                    <div className="col-group-wrapper row">
                                        <div className="col-group col-md-4">
                                            <div className="row">
                                                <div className="col-12">
                                                    <p className="category-heading">Basic Elements</p>
                                                    <div className="submenu-item">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <ul>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/accordions.html">Accordion</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/buttons.html">Buttons</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/badges.html">Badges</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/breadcrumbs.html">Breadcrumbs</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/dropdowns.html">Dropdown</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/modals.html">Modals</Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <ul>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/progress.html">Progress bar</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/pagination.html">Pagination</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/tabs.html">Tabs</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/typography.html">Typography</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/tooltips.html">Tooltip</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-group col-md-4">
                                            <div className="row">
                                                <div className="col-12">
                                                    <p className="category-heading">Advanced Elements</p>
                                                    <div className="submenu-item">
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <ul>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/dragula.html">Dragula</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/carousel.html">Carousel</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/clipboard.html">Clipboard</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/context-menu.html">Context Menu</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/loaders.html">Loader</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/slider.html">Slider</Link></li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <ul>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/popups.html">Popup</Link></li>
                                                                    <li className="nav-item"><Link className="nav-link" to="pages/ui-features/notifications.html">Notification</Link></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-group col-md-4">
                                            <p className="category-heading">Icons</p>
                                            <ul className="submenu-item">
                                                <li className="nav-item"><Link className="nav-link" to="pages/icons/flag-icons.html">Flag Icons</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/icons/font-awesome.html">Font Awesome</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/icons/simple-line-icon.html">Simple Line Icons</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/icons/themify.html">Themify Icons</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <i className="mdi mdi-file-document-box-outline menu-icon"></i>
                                    <span className="menu-title">Forms</span>
                                    <i className="menu-arrow"></i></Link>
                                <div className="submenu">
                                    <ul className="submenu-item">
                                        <li className="nav-item"><Link className="nav-link" to="pages/forms/basic_elements.html">Basic Elements</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="pages/forms/advanced_elements.html">Advanced Elements</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="pages/forms/validation.html">Validation</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="pages/forms/wizard.html">Wizard</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="pages/forms/text_editor.html">Text Editor</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="pages/forms/code_editor.html">Code Editor</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item mega-menu">
                                <Link to="#" className="nav-link">
                                    <i className="mdi mdi-finance menu-icon"></i>
                                    <span className="menu-title">Data</span>
                                    <i className="menu-arrow"></i></Link>
                                <div className="submenu">
                                    <div className="col-group-wrapper row">
                                        <div className="col-group col-md-6">
                                            <p className="category-heading">Charts</p>
                                            <div className="submenu-item">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul>
                                                            <li className="nav-item"><Link className="nav-link" to="pages/charts/chartjs.html">Chart Js</Link></li>
                                                            <li className="nav-item"><Link className="nav-link" to="pages/charts/morris.html">Morris</Link></li>
                                                            <li className="nav-item"><Link className="nav-link" to="pages/charts/flot-chart.html">Flot</Link></li>
                                                            <li className="nav-item"><Link className="nav-link" to="pages/charts/google-charts.html">Google Chart</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul>
                                                            <li className="nav-item"><Link className="nav-link" to="pages/charts/sparkline.html">Sparkline</Link></li>
                                                            <li className="nav-item"><Link className="nav-link" to="pages/charts/c3.html">C3 Chart</Link></li>
                                                            <li className="nav-item"><Link className="nav-link" to="pages/charts/chartist.html">Chartist</Link></li>
                                                            <li className="nav-item"><Link className="nav-link" to="pages/charts/justGage.html">JustGage</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-group col-md-3">
                                            <p className="category-heading">Table</p>
                                            <ul className="submenu-item">
                                                <li className="nav-item"><Link className="nav-link" to="pages/tables/basic-table.html">Basic Table</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/tables/data-table.html">Data Table</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/tables/js-grid.html">Js-grid</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/tables/sortable-table.html">Sortable Table</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-group col-md-3">
                                            <p className="category-heading">Maps</p>
                                            <ul className="submenu-item">
                                                <li className="nav-item"><Link className="nav-link" to="pages/maps/mapeal.html">Mapeal</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/maps/vector-map.html">Vector Map</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/maps/google-maps.html">Google Map</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item mega-menu">
                                <Link to="#" className="nav-link">
                                    <i className="mdi mdi-codepen menu-icon"></i>
                                    <span className="menu-title">Sample Pages</span>
                                    <i className="menu-arrow"></i></Link>
                                <div className="submenu">
                                    <div className="col-group-wrapper row">
                                        <div className="col-group col-md-3">
                                            <p className="category-heading">User Pages</p>
                                            <ul className="submenu-item">
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/login.html">Login</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/login-2.html">Login 2</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/register.html">Register</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/register-2.html">Register 2</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/lock-screen.html">Lockscreen</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-group col-md-3">
                                            <p className="category-heading">Error Pages</p>
                                            <ul className="submenu-item">
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/error-400.html">400</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/error-404.html">404</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/error-500.html">500</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/error-505.html">505</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-group col-md-3">
                                            <p className="category-heading">E-commerce</p>
                                            <ul className="submenu-item">
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/invoice.html">Invoice</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/pricing-table.html">Pricing Table</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/orders.html">Orders</Link></li>
                                            </ul>
                                        </div>
                                        <div className="col-group col-md-3">
                                            <p className="category-heading">General</p>
                                            <ul className="submenu-item">
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/search-results.html">Search Results</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/profile.html">Profile</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/timeline.html">Timeline</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/news-grid.html">News grid</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/portfolio.html">Portfolio</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="pages/samples/faq.html">FAQ</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link">
                                    <i className="mdi mdi-image-filter menu-icon"></i>
                                    <span className="menu-title">Apps</span>
                                    <i className="menu-arrow"></i></Link>
                                <div className="submenu">
                                    <ul className="submenu-item">
                                        <li className="nav-item"><Link className="nav-link" to="pages/apps/email.html">Email</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="pages/apps/calendar.html">Calendar</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="pages/apps/todo.html">Todo List</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="pages/apps/gallery.html">Gallery</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="pages/documentation/documentation.html" className="nav-link">
                                    <i className="mdi mdi-file-document-box-outline menu-icon"></i>
                                    <span className="menu-title">Documentation</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        );
    }
}

const TopMenuWithRouter = withRouter(TopMenu);

export default TopMenuWithRouter;