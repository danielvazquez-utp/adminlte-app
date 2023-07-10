import { Link } from 'react-router-dom';

const login_container = {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    justifyContent: "center", 
    height: "100vh",
    backgroundImage: "url('https://img.freepik.com/free-vector/grey-technology-background_1035-9343.jpg?w=2000')",
    backgroundSize: "100% auto",
    backgroundPosition: "center",
};

const LoginBox = () => {
  return (
    <div style={ login_container }>
        <div className="login-box">
            <div className="login-logo">
                <Link to="/"><b>Admin</b>LTE</Link>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>

                    <form action="../../index3.html" method="post">
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <div className="icheck-primary">
                                    <input type="checkbox" id="remember" />
                                        <label>
                                            Remember Me
                                        </label>
                                </div>
                            </div>
                            <div className="col-4">
                                <Link to="/menu" className="btn btn-primary btn-block">Sign In</Link>
                            </div>
                        </div>
                    </form>


                    <p className="mb-1">
                        <Link href="forgot-password.html">I forgot my password</Link>
                    </p>
                    <p className="mb-0">
                        <Link href="register.html" className="text-center">Register a new membership</Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginBox;