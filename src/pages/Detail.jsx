import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function Detail() {

    let shoes = useSelector((state) => state.shoes)

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    </Col>
                    <Col md={6} className="mt-4">
                        <br /><br />
                        <h4 className="pt-5">{shoes[0].title}</h4>
                        <p>{shoes[0].content}</p>
                        <p>{shoes[0].price}원</p>
                        <Button variant="danger">주문하기</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Detail