import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import productServices from "../services/products";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const data = await productServices.getAll();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Container className="py-4">
      <h2 className="mb-4">Our Products</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img variant="top" src={product.productImgUrl} />
              <Card.Body>
                <Card.Title className="h5 mb-2">
                  {product.productName}
                </Card.Title>
                <Card.Text className="text-muted mb-1">
                  By {product.owner.username}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h5 mb-0">Rs{product.productPrice}</span>
                  <Button variant="primary" size="sm">
                    <ShoppingCart size={18} className="me-1" />
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
