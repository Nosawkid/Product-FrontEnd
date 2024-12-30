import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  ShoppingBag,
  Truck,
  Headphones,
  CreditCard,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-4 fw-bold">Welcome to ShopMart</h1>
              <p className="lead">
                Discover amazing products at unbeatable prices.
              </p>
              <Button
                as={Link}
                to={"/products"}
                variant="light"
                size="lg"
                className="mt-3"
              >
                Shop Now
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <ShoppingBag size={200} />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Services Section */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row>
          {[
            {
              icon: <Truck size={40} />,
              title: "Free Shipping",
              desc: "On orders over $50",
            },
            {
              icon: <Headphones size={40} />,
              title: "24/7 Support",
              desc: "Always here to help",
            },
            {
              icon: <CreditCard size={40} />,
              title: "Secure Payment",
              desc: "Safe & encrypted",
            },
            {
              icon: <Package size={40} />,
              title: "Easy Returns",
              desc: "30-day guarantee",
            },
          ].map((service, idx) => (
            <Col key={idx} md={3} className="mb-4">
              <Card className="text-center h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="text-primary mb-3">{service.icon}</div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Featured Categories */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-4">Featured Categories</h2>
          <Row>
            {["Electronics", "Fashion", "Home & Garden", "Sports"].map(
              (category, idx) => (
                <Col key={idx} md={3} className="mb-4">
                  <Card className="border-0 shadow-sm">
                    <Card.Body>
                      <h5 className="text-center mb-3">{category}</h5>
                      <Button variant="outline-primary" className="w-100">
                        Explore
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              )
            )}
          </Row>
        </Container>
      </div>

      {/* Call to Action */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2>Ready to Start Shopping?</h2>
            <p className="lead mb-4">
              Join thousands of satisfied customers who trust ShopMart.
            </p>
            <Button as={Link} to={"/login"} variant="primary" size="lg">
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
