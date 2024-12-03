import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div
            className="d-flex align-items-center py-4 bg-body-tertiary"
            style={{ height: "100vh" }}
        >
            <main className="form-signin w-100 m-auto">
                <form>
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
                        />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2 mt-3" type="submit">
                        Sign in
                    </button>
                </form>
            </main>
        </div>
    );
};

export default Signup;
