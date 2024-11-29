import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductList from "./ProductList";
import ProductAdd from "./ProductAdd";
import ProductEdit from "./ProductEdit";
import Signup from "./Signup";
import Signin from "./Signin";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="product/add" element={<ProductAdd />} />
                <Route path="product/:id/edit" element={<ProductEdit />} />
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />
            </Routes>
        </>
    );
}

export default App;
