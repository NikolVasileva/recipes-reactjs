export default function Register() {
    return (
        <div className="container-fluid contact py-6 wow bounceInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="p-5 bg-light rounded contact-form">
                    <div className="row g-4 justify-content-center text-center">
                        <div className="col-12">
                            <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                                Register
                            </small>
                            <h1 className="display-5 mb-0">Create Your Account</h1>
                        </div>
                        <div className="col-md-6 col-lg-7 mx-auto">
                            <p className="mb-4">
                                If you already have an account, please log in to continue.
                                <a href="/login" className="ms-1">Log in</a>.
                            </p>
                            <form>
                                <input
                                    type="text" name="email"
                                    className="w-100 form-control p-3 mb-4 border-primary bg-light"
                                    placeholder="Email"
                                />

                                <input
                                    type="text" name="password"
                                    className="w-100 form-control p-3 mb-4 border-primary bg-light"
                                    placeholder="Password"
                                />
                                <input
                                    type="text" name="repeatPassword"
                                    className="w-100 form-control p-3 mb-4 border-primary bg-light"
                                    placeholder="Repeat Password"
                                />
                                <button
                                    className="w-100 btn btn-primary form-control p-3 border-primary bg-primary rounded-pill"
                                    type="submit"
                                >
                                    Register Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
