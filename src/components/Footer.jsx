import { ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-auto">
      <div className="container text-center">
        <div className="d-flex justify-content-center align-items-center mb-2">
          <ShoppingBag className="me-2" size={20} />
          <span className="fw-semibold">ShopMart</span>
        </div>
        <p className="text-muted mb-0">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
