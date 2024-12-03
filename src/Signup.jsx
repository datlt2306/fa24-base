import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async (formData) => {
        const { confirmPassword, ...user } = formData;
        try {
            await axios.post(`http://localhost:3000/signup`, user);
            toast.success(`Đăng ký thành công`);
            navigate("/signin");
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
                    <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
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
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingConfirmPassword"
                            placeholder="Confirm Password"
                            {...register("confirmPassword", {
                                required: "Bắt buộc nhập password!",
                                validate: () => {
                                    return (
                                        watch("password") === watch("confirmPassword") ||
                                        "Password không khớp"
                                    );
                                },
                            })}
                        />
                        <label htmlFor="floatingConfirmPassword">Confirm Password</label>
                        {errors.confirmPassword && (
                            <div className="invalid-feedback d-block">
                                {errors.confirmPassword.message}
                            </div>
                        )}
                    </div>
                    <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
                        Sign up
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Signup;
