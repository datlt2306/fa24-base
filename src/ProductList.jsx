import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/products`);
                setProducts(data);
            } catch (error) {
                toast.error(error.response.data);
            }
        };
        fetchProducts();
    }, []);

    const removeItem = async (id) => {
        const confirm = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
        if (!confirm) return;

        try {
            await axios.delete(`http://localhost:3000/products/${id}`);
            toast.success("Xóa sản phẩm thành công");
            // rerender
            setProducts(products.filter((item) => item.id !== id));
        } catch (error) {
            toast.error(error.message);
        }
    };
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Quản lý sản phẩm</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <Link to="/products/add" className="btn btn-outline-primary">
                            Thêm sản phẩm
                        </Link>
                    </div>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th width={50}>Ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Tình trạng</th>
                        <th>Danh mục</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img src={item.imageUrl} alt={item.name} width={50} />
                                </td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                                <td>
                                    {item.inStock ? (
                                        <span className="badge text-bg-primary">Còn hàng</span>
                                    ) : (
                                        <span className="badge text-bg-danger">Hết hàng</span>
                                    )}
                                </td>
                                <td>{item.category}</td>
                                <td width={250}>
                                    <Link
                                        to={`/products/${item.id}/edit`}
                                        className="btn btn-primary"
                                    >
                                        Cập nhật
                                    </Link>
                                    <button
                                        className="btn btn-danger ms-1"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default ProductList;
