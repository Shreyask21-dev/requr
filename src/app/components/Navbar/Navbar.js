'use client'

import React from 'react'

import Script from "next/script";

import "@/app/assets/vendor/fonts/remixicon/remixicon.css"
import "@/app/assets/vendor/fonts/flag-icons.css"

import "@/app/assets/vendor/libs/node-waves/node-waves.css";
import "@/app/assets/vendor/css/rtl/core.css";

import "@/app/assets/vendor/css/rtl/theme-default.css";

import "@/app/assets/css/demo.css";

import '@/app/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';

import "@/app/assets/vendor/libs/typeahead-js/typeahead.css"

import "@/app/assets/vendor/libs/apex-charts/apex-charts.css"

import "@/app/assets/vendor/libs/swiper/swiper.css"

import "@/app/assets/vendor/css/pages/cards-statistics.css"

import "@/app/assets/vendor/css/pages/cards-analytics.css"

import "@fontsource/inter"

import "@fontsource/inter/300.css"; // Weight 300
import "@fontsource/inter/400.css"; // Weight 400
import "@fontsource/inter/500.css"; // Weight 500
import "@fontsource/inter/600.css"; // Weight 600
import "@fontsource/inter/700.css"; // Weight 700

import Link from 'next/link';



export default function Navbar() {
    return (
        <>

            <Script src="/assets/vendor/js/helpers.js" strategy="beforeInteractive" />

            <Script src="/assets/vendor/js/template-customizer.js" strategy="beforeInteractive" />

            <Script src="/assets/js/config.js" strategy="beforeInteractive" />


            <Script src="/assets/vendor/libs/jquery/jquery.js" />
            <Script src="/assets/vendor/libs/popper/popper.js" />
            <Script src="/assets/vendor/js/bootstrap.js" />
            <Script src="/assets/vendor/libs/node-waves/node-waves.js" />
            <Script src="/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js" />
            <Script src="/assets/vendor/libs/hammer/hammer.js" />
            <Script src="/assets/vendor/libs/i18n/i18n.js" />
            <Script src="/assets/vendor/libs/typeahead-js/typeahead.js" />
            <Script src="/assets/vendor/js/menu.js" />


            <Script src="/assets/vendor/libs/apex-charts/apexcharts.js" />
            <Script src="/assets/vendor/libs/swiper/swiper.js" />


            <Script src="/assets/js/main.js" />


            <Script src="/assets/js/dashboards-analytics.js" />
 {/* bg-navbar-theme */}
            <nav
                className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center"
                id="layout-navbar" style={{backgroundColor: "#ffffff !important", padding: "15px !important", marginBottom:"15px !important"}}>
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-6" href="javascript:void(0)">
                        <i className="ri-menu-fill ri-22px"></i>
                    </a>
                </div>

                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

                    <div className="navbar-nav align-items-center">
                        <div className="nav-item navbar-search-wrapper mb-0">
                            <a className="nav-item nav-link search-toggler fw-normal px-0" href="javascript:void(0);">
                                <i className="ri-search-line ri-22px scaleX-n1-rtl me-3"></i>
                                <span className="d-none d-md-inline-block text-muted">Search (Ctrl+/)</span>
                            </a>
                        </div>
                    </div>


                    <ul className="navbar-nav flex-row align-items-center ms-auto">

                        <li className="nav-item dropdown-language dropdown">
                            <a
                                className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                                href="javascript:void(0);"
                                data-bs-toggle="dropdown">
                                <i className="ri-translate-2 ri-22px"></i>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="en" data-text-direction="ltr">
                                        <span className="align-middle">English</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="fr" data-text-direction="ltr">
                                        <span className="align-middle">French</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="ar" data-text-direction="rtl">
                                        <span className="align-middle">Arabic</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="javascript:void(0);" data-language="de" data-text-direction="ltr">
                                        <span className="align-middle">German</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown-shortcuts navbar-dropdown dropdown me-1 me-xl-0">
                            <a
                                className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                                href="javascript:void(0);"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false">
                                <i className="ri-star-smile-line ri-22px"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end py-0">
                                <div className="dropdown-menu-header border-bottom py-50">
                                    <div className="dropdown-header d-flex align-items-center py-2">
                                        <h6 className="mb-0 me-auto">Shortcuts</h6>
                                        <a
                                            href="javascript:void(0)"
                                            className="btn btn-text-secondary rounded-pill btn-icon dropdown-shortcuts-add text-heading"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title="Add shortcuts"
                                        ><i className="ri-add-line ri-24px"></i
                                        ></a>
                                    </div>
                                </div>
                                <div className="dropdown-shortcuts-list scrollable-container">
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                <i className="ri-calendar-line ri-26px text-heading"></i>
                                            </span>
                                            <a href="app-calendar.html" className="stretched-link">Calendar</a>
                                            <small className="mb-0">Appointments</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                <i className="ri-file-text-line ri-26px text-heading"></i>
                                            </span>
                                            <a href="app-invoice-list.html" className="stretched-link">Invoice App</a>
                                            <small className="mb-0">Manage Accounts</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                <i className="ri-user-line ri-26px text-heading"></i>
                                            </span>
                                            <a href="app-user-list.html" className="stretched-link">User App</a>
                                            <small className="mb-0">Manage Users</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                <i className="ri-computer-line ri-26px text-heading"></i>
                                            </span>
                                            <a href="app-access-roles.html" className="stretched-link">Role Management</a>
                                            <small className="mb-0">Permission</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                <i className="ri-pie-chart-2-line ri-26px text-heading"></i>
                                            </span>
                                            <a href="index.html" className="stretched-link">Dashboard</a>
                                            <small className="mb-0">Analytics</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                <i className="ri-settings-4-line ri-26px text-heading"></i>
                                            </span>
                                            <a href="pages-account-settings-account.html" className="stretched-link">Setting</a>
                                            <small className="mb-0">Account Settings</small>
                                        </div>
                                    </div>
                                    <div className="row row-bordered overflow-visible g-0">
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                <i className="ri-question-line ri-26px text-heading"></i>
                                            </span>
                                            <a href="pages-faq.html" className="stretched-link">FAQs</a>
                                            <small className="mb-0">FAQs & Articles</small>
                                        </div>
                                        <div className="dropdown-shortcuts-item col">
                                            <span className="dropdown-shortcuts-icon rounded-circle mb-3">
                                                <i className="ri-tv-2-line ri-26px text-heading"></i>
                                            </span>
                                            <a href="modal-examples.html" className="stretched-link">Modals</a>
                                            <small className="mb-0">Useful Popups</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>



                        <li className="nav-item dropdown-notifications navbar-dropdown dropdown me-4 me-xl-1">
                            <a
                                className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow"
                                href="javascript:void(0);"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false">
                                <i className="ri-notification-2-line ri-22px"></i>
                                <span
                                    className="position-absolute top-0 start-50 translate-middle-y badge badge-dot bg-danger mt-2 border"></span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end py-0">
                                <li className="dropdown-menu-header border-bottom py-50">
                                    <div className="dropdown-header d-flex align-items-center py-2">
                                        <h6 className="mb-0 me-auto">Notification</h6>
                                        <div className="d-flex align-items-center">
                                            <span className="badge rounded-pill bg-label-primary fs-xsmall me-2">8 New</span>
                                            <a
                                                href="javascript:void(0)"
                                                className="btn btn-text-secondary rounded-pill btn-icon dropdown-notifications-all"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Mark all as read"
                                            ><i className="ri-mail-open-line text-heading ri-20px"></i
                                            ></a>
                                        </div>
                                    </div>
                                </li>
                                <li className="dropdown-notifications-list scrollable-container">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img src="/assets/img/avatars/1.png" alt className="rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="small mb-1">Congratulation Lettie 🎉</h6>
                                                    <small className="mb-1 d-block text-body">Won the monthly best seller gold badge</small>
                                                    <small className="text-muted">1h ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                    ><span className="badge badge-dot"></span
                                                    ></a>
                                                    <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                    ><span className="ri-close-line ri-20px"></span
                                                    ></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <span className="avatar-initial rounded-circle bg-label-danger">CF</span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">Charles Franklin</h6>
                                                    <small className="mb-1 d-block text-body">Accepted your connection</small>
                                                    <small className="text-muted">12hr ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                    ><span className="badge badge-dot"></span
                                                    ></a>
                                                    <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                    ><span className="ri-close-line ri-20px"></span
                                                    ></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img src="/assets/img/avatars/2.png" alt className="rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">New Message ✉️</h6>
                                                    <small className="mb-1 d-block text-body">You have new message from Natalie</small>
                                                    <small className="text-muted">1h ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                    ><span className="badge badge-dot"></span
                                                    ></a>
                                                    <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                    ><span className="ri-close-line ri-20px"></span
                                                    ></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <span className="avatar-initial rounded-circle bg-label-success"
                                                        ><i className="ri-shopping-cart-2-line"></i
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">Whoo! You have new order 🛒</h6>
                                                    <small className="mb-1 d-block text-body">ACME Inc. made new order $1,154</small>
                                                    <small className="text-muted">1 day ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                    ><span className="badge badge-dot"></span
                                                    ></a>
                                                    <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                    ><span className="ri-close-line ri-20px"></span
                                                    ></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img src="/assets/img/avatars/9.png" alt className="rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">Application has been approved 🚀</h6>
                                                    <small className="mb-1 d-block text-body"
                                                    >Your ABC project application has been approved.</small
                                                    >
                                                    <small className="text-muted">2 days ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                    ><span className="badge badge-dot"></span
                                                    ></a>
                                                    <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                    ><span className="ri-close-line ri-20px"></span
                                                    ></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <span className="avatar-initial rounded-circle bg-label-success"
                                                        ><i className="ri-pie-chart-2-line"></i
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">Monthly report is generated</h6>
                                                    <small className="mb-1 d-block text-body">July monthly financial report is generated </small>
                                                    <small className="text-muted">3 days ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                    ><span className="badge badge-dot"></span
                                                    ></a>
                                                    <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                    ><span className="ri-close-line ri-20px"></span
                                                    ></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img src="/assets/img/avatars/5.png" alt className="rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">Send connection request</h6>
                                                    <small className="mb-1 d-block text-body">Peter sent you connection request</small>
                                                    <small className="text-muted">4 days ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                    ><span className="badge badge-dot"></span
                                                    ></a>
                                                    <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                    ><span className="ri-close-line ri-20px"></span
                                                    ></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <img src="/assets/img/avatars/6.png" alt className="rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">New message from Jane</h6>
                                                    <small className="mb-1 d-block text-body">Your have new message from Jane</small>
                                                    <small className="text-muted">5 days ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                    ><span className="badge badge-dot"></span
                                                    ></a>
                                                    <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                    ><span className="ri-close-line ri-20px"></span
                                                    ></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar">
                                                        <span className="avatar-initial rounded-circle bg-label-warning"
                                                        ><i className="ri-error-warning-line"></i
                                                        ></span>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <h6 className="mb-1 small">CPU is running high</h6>
                                                    <small className="mb-1 d-block text-body"
                                                    >CPU Utilization Percent is currently at 88.63%,</small
                                                    >
                                                    <small className="text-muted">5 days ago</small>
                                                </div>
                                                <div className="flex-shrink-0 dropdown-notifications-actions">
                                                    <a href="javascript:void(0)" className="dropdown-notifications-read"
                                                    ><span className="badge badge-dot"></span
                                                    ></a>
                                                    <a href="javascript:void(0)" className="dropdown-notifications-archive"
                                                    ><span className="ri-close-line ri-20px"></span
                                                    ></a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="border-top">
                                    <div className="d-grid p-4">
                                        <a className="btn btn-primary btn-sm d-flex" href="javascript:void(0);">
                                            <small className="align-middle">View all notifications</small>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </li>



                        <li className="nav-item navbar-dropdown dropdown-user dropdown">
                            <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                                <div className="avatar avatar-online">
                                    <img src="/assets/img/avatars/1.png" alt className="rounded-circle" />
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="/Accounts/Account">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-2">
                                                <div className="avatar avatar-online">
                                                    <img src="/assets/img/avatars/1.png" alt className="rounded-circle" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <span className="fw-medium d-block small">John Doe</span>
                                                <small className="text-muted">Admin</small>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/Profile/User">
                                        <i className="ri-user-3-line ri-22px me-3"></i><span className="align-middle">My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/Accounts/Account">
                                        <i className="ri-settings-4-line ri-22px me-3"></i><span className="align-middle">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/Accounts/Billing">
                                        <span className="d-flex align-items-center align-middle">
                                            <i className="flex-shrink-0 ri-file-text-line ri-22px me-3"></i>
                                            <span className="flex-grow-1 align-middle">Billing</span>
                                            <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger">4</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/Pricing">
                                        <i className="ri-money-dollar-circle-line ri-22px me-3"></i
                                        ><span className="align-middle">Pricing</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="/Faq">
                                        <i className="ri-question-line ri-22px me-3"></i><span className="align-middle">FAQ</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="d-grid px-4 pt-2 pb-1">
                                        <button className="btn btn-sm btn-danger d-flex" onClick={() => {
                                            localStorage.removeItem("token"); // Clear token
                                            window.location.href = "/Login"; // Redirect to login page
                                        }}>
                                            <small className="align-middle">Logout</small>
                                            <i className="ri-logout-box-r-line ms-2 ri-16px"></i>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="navbar-search-wrapper search-input-wrapper d-none">
                    <input
                        type="text"
                        className="form-control search-input container-xxl border-0"
                        placeholder="Search..."
                        aria-label="Search..." />
                    <i className="ri-close-fill search-toggler cursor-pointer"></i>
                </div>
            </nav>





        </>
    )
}
