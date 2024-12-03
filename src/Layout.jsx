import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header
                className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow"
                data-bs-theme="dark"
            >
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white" href="#">
                    Demo
                </a>
                <ul className="navbar-nav flex-row d-md-none">
                    <li className="nav-item text-nowrap">
                        <button
                            className="nav-link px-3 text-white"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSearch"
                            aria-controls="navbarSearch"
                            aria-expanded="false"
                            aria-label="Toggle search"
                        >
                            <svg className="bi">
                                <use xlinkHref="#search" />
                            </svg>
                        </button>
                    </li>
                    <li className="nav-item text-nowrap">
                        <button
                            className="nav-link px-3 text-white"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#sidebarMenu"
                            aria-controls="sidebarMenu"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <svg className="bi">
                                <use xlinkHref="#list" />
                            </svg>
                        </button>
                    </li>
                </ul>
                <div id="navbarSearch" className="navbar-search w-100 collapse">
                    <input
                        className="form-control w-100 rounded-0 border-0"
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                    />
                </div>
            </header>
            <div className="container-fluid">
                <div className="row">
                    <div
                        className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary"
                        style={{ height: "100vh" }}
                    >
                        <div
                            className="offcanvas-md offcanvas-end bg-body-tertiary"
                            tabIndex={-1}
                            id="sidebarMenu"
                            aria-labelledby="sidebarMenuLabel"
                        >
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="sidebarMenuLabel">
                                    Demo
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    data-bs-target="#sidebarMenu"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link d-flex align-items-center gap-2 active"
                                            aria-current="page"
                                            to="/"
                                        >
                                            <svg className="bi">
                                                <use xlinkHref="#house-fill" />
                                            </svg>
                                            Sản phẩm
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link d-flex align-items-center gap-2"
                                            to="/products/add"
                                        >
                                            <svg className="bi">
                                                <use xlinkHref="#file-earmark" />
                                            </svg>
                                            Thêm sản phẩm
                                        </Link>
                                    </li>
                                </ul>
                                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                                    <span>Saved reports</span>
                                    <a
                                        className="link-secondary"
                                        href="#"
                                        aria-label="Add a new report"
                                    >
                                        <svg className="bi">
                                            <use xlinkHref="#plus-circle" />
                                        </svg>
                                    </a>
                                </h6>
                                <ul className="nav flex-column mb-auto">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link d-flex align-items-center gap-2"
                                            to="/signup"
                                        >
                                            <svg className="bi">
                                                <use xlinkHref="#cart" />
                                            </svg>
                                            Đăng ký
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link d-flex align-items-center gap-2"
                                            to="/signin"
                                        >
                                            <svg className="bi">
                                                <use xlinkHref="#people" />
                                            </svg>
                                            Đăng nhập
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Layout;
