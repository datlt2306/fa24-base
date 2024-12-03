import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./ProductList";
import ProductAdd from "./ProductAdd";
import ProductEdit from "./ProductEdit";
import Signup from "./Signup";
import Signin from "./Signin";
import Layout from "./Layout";
import { Toaster } from "react-hot-toast";
function App() {
    return (
        <>
            <Toaster />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="products" />} />
                    <Route path="products" element={<ProductList />} />
                    <Route path="products/add" element={<ProductAdd />} />
                    <Route path="products/:id/edit" element={<ProductEdit />} />
                </Route>
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />
            </Routes>
        </>
    );
}

export default App;
