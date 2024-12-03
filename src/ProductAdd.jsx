import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const ProductAdd = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {
        try {
            await axios.post(`http://localhost:3000/products`, formData);
            toast.success(`Thêm sản phẩm thành công`);
            navigate("/products");
        } catch (error) {
            toast.error(error.response.data);
        }
    };
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

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-2 col-form-label text-end">
                        Tên sản phẩm
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            {...register("name", { required: "Bắt buộc nhập!" })}
                        />
                        {errors.name && (
                            <div className="invalid-feedback d-block">{errors.name.message}</div>
                        )}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="price" className="col-sm-2 col-form-label text-end">
                        Giá
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            {...register("price", {
                                required: "Bắt buộc nhập!",
                                min: {
                                    value: 0,
                                    message: "Giá phải lớn hơn 0",
                                },
                            })}
                        />
                        {errors.price && (
                            <div className="invalid-feedback d-block">{errors.price.message}</div>
                        )}
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="imageUrl" className="col-sm-2 col-form-labe text-end">
                        URL Hình ảnh
                    </label>
                    <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="imageUrl"
                            {...register("imageUrl", { required: "Bắt buộc nhập!" })}
                        />
                    </div>
                    {errors.imageUrl && (
                        <div className="invalid-feedback d-block">{errors.imageUrl.message}</div>
                    )}
                </div>
                <div className="mb-3 row">
                    <label htmlFor="category" className="col-sm-2 col-form-label text-end">
                        Danh mục
                    </label>
                    <div className="col-sm-10">
                        <select
                            className="form-control"
                            id="category"
                            name="category"
                            {...register("category")}
                        >
                            <option value="">Chọn danh mục</option>
                            <option value="Điện thoại">Điện thoại</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Máy ảnh">Máy ảnh</option>
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
                                {...register("inStock")}
                            />
                            <span>{watch("inStock") ? "Còn hàng" : "Hết hàng"}</span>
                        </div>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="description" className="col-sm-2 col-form-label text-end">
                        Mô tả
                    </label>
                    <div className="col-sm-10">
                        <textarea
                            name=""
                            id=""
                            className="form-control"
                            rows="5"
                            {...register("description")}
                        ></textarea>
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
