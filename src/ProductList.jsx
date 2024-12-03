import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Quản lý sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="/products/add" className="btn btn-primary">
                            Thêm sản phẩm
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductList;
