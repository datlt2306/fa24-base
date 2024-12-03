import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Signin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (formData) => {
        try {
            const { data } = await axios.post(`http://localhost:3000/signin`, formData);
            localStorage.setItem("user", JSON.stringify(data));
            toast.success(`Đăng nhập thành công`);
        } catch (error) {
            toast.error(error.response.data);
        }
    };
    return (
        <div
            className="d-flex align-items-center py-4 bg-body-tertiary"
            style={{ height: "100vh" }}
        >
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Link to="/">
                        <img className="mb-4" src="./logo.png" alt="FPT Polytechnich" />
                    </Link>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            {...register("email", { required: "Bắt buộc nhập email!" })}
                        />
                        <label htmlFor="floatingInput">Email</label>
                        {errors.email && (
                            <div className="invalid-feedback d-block">{errors.email.message}</div>
                        )}
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            {...register("password", {
                                required: "Bắt buộc nhập password!",
                                minLength: {
                                    value: 6,
                                    message: "Bắt buộc phải > 6 ký tự",
                                },
                            })}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                        {errors.password && (
                            <div className="invalid-feedback d-block">
                                {errors.password.message}
                            </div>
                        )}
                    </div>
                    <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
                        Sign in
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Signin;
