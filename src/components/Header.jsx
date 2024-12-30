import { Home, LogOut, ShoppingBag, User } from "lucide-react";
import { Button, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../reducers/userReducer";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    window.localStorage.removeItem("loggedInUser");
    dispatch(clearUser());
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <ShoppingBag className="me-2" size={24} />
          <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
            <span className="fw-bold">ShopMart</span>
          </Link>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ListGroup horizontal as="ul" className="navbar-nav">
            <ListGroup.Item
              as={Link}
              to="/"
              className="nav-item nav-link d-flex align-items-center"
            >
              <Home className="me-1" size={20} />
              <span>Home</span>
            </ListGroup.Item>

            <ListGroup.Item
              as={Link}
              to="/products"
              className="nav-item nav-link d-flex align-items-center"
            >
              <ShoppingBag className="me-1" size={20} />
              <span>Products</span>
            </ListGroup.Item>

            {!user.isAuthenticated ? (
              <ListGroup.Item
                as={Link}
                to="/login"
                className="nav-item nav-link d-flex align-items-center"
              >
                <User className="me-1" size={20} />
                <span>Login</span>
              </ListGroup.Item>
            ) : (
              <Button
                variant="danger"
                className="nav-item nav-link d-flex align-items-center"
                onClick={handleLogout}
              >
                <LogOut className="me-1" size={20} />
                <span>Logout</span>
              </Button>
            )}
          </ListGroup>
        </div>
      </div>
    </nav>
  );
};

export default Header;
