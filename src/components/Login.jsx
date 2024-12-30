import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { User, Lock } from "lucide-react";
import { useState } from "react";
import login from "../services/login";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../reducers/userReducer";
import productsServices from "../services/products";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  if (user.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    try {
      const userData = await login.userLogin({ username, password });
      dispatch(setUser(userData));
      window.localStorage.setItem("loggedInUser", JSON.stringify(userData));
      productsServices.setToken(userData.token);
      navigate("/products");
    } catch (error) {
      console.log(error);
      alert("Invalid Credentials");
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <div className="text-center mb-4">
                <User size={40} className="text-primary mb-2" />
                <h2 className="fw-bold">Welcome Back</h2>
                <p className="text-muted">Please enter your credentials</p>
              </div>

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <User size={18} />
                    </span>
                    <Form.Control
                      value={username}
                      type="text"
                      placeholder="Enter username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-light">
                      <Lock size={18} />
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </Form.Group>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-100"
                >
                  Sign In
                </Button>

                <hr className="my-4" />

                <div className="text-center">
                  <p className="mb-0">
                    Don&apos;t have an account?{" "}
                    <a href="#" className="text-decoration-none">
                      Sign up
                    </a>
                  </p>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
