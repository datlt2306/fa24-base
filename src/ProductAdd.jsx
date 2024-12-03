import { Link } from "react-router-dom";

const ProductAdd = () => {
    return (
        <div className="offset-2 col-md-8">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Thêm sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="/products" className="btn btn-outline-primary">
                            Quay lại
                        </Link>
                    </div>
                </div>
            </div>

            <form>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-2 col-form-label text-end">
                        Tên sản phẩm
                    </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="name" />
                        <div className="invalid-feedback d-block">Please choose a username.</div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="price" className="col-sm-2 col-form-label text-end">
                        Giá
                    </label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="price" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="imageUrl" className="col-sm-2 col-form-labe text-end">
                        URL Hình ảnh
                    </label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="imageUrl" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="category" className="col-sm-2 col-form-label text-end">
                        Danh mục
                    </label>
                    <div className="col-sm-10">
                        <select className="form-control" id="category" name="category" required>
                            <option value="">Chọn danh mục</option>
                            <option value="1">Điện thoại</option>
                            <option value="2">Laptop</option>
                            <option value="3">Máy ảnh</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-2  text-end">Tình trạng</div>
                    <div className="col-sm-10">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                role="switch"
                                id="flexSwitchCheckDefault"
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="description" className="col-sm-2 col-form-label text-end">
                        Mô tả
                    </label>
                    <div className="col-sm-10">
                        <textarea name="" id="" className="form-control" rows="5"></textarea>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-10 offset-2">
                        <button type="submit" className="btn btn-primary">
                            Thêm sản phẩm
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProductAdd;
