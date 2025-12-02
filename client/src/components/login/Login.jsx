import { useNavigate } from "react-router";
import useForm from "../../hooks/useForm.js";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext.jsx"

export default function Login() {
    const navigate = useNavigate();
    const { loginHandler } = useContext(UserContext);

    const submitHandler = async ({ email, password }) => {
        if (!email || !password) {
            return alert('Email and password are required!');
        }

        try {
            await loginHandler(email, password)
            navigate("/")

        } catch (err) {
            alert(err.message)
        }
    }

    const { values, changeHandler, formAction } = useForm(submitHandler, { email: "", password: "" })

    return (
        <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="p-5 bg-light rounded contact-form">
                    <div className="row g-4 justify-content-center text-center">
                        <div className="col-12">
                            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                                Login
                            </small>
                            <h1 className="display-5 mb-0">Log In to Your Account</h1>
                        </div>
                        <div className="col-md-6 col-lg-7 mx-auto">
                            <p className="mb-4">
                                If you don’t have an account yet, feel free to create one and get access to more features.
                                <a href="/register" className="ms-1">Create an account</a>.
                            </p>
                            <form action={formAction}>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={values.email}
                                    onChange={changeHandler}
                                    className="w-100 form-control p-3 mb-4 border-primary bg-light"
                                    placeholder="Email"
                                />

                                <input
                                    type="password"
                                    id="login-password"
                                    name="password"
                                    value={values.password}
                                    onChange={changeHandler}
                                    className="w-100 form-control p-3 mb-4 border-primary bg-light"
                                    placeholder="Password"
                                />
                                <input
                                    className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill"
                                    type="submit" value="Login Now" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
