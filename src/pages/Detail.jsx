import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../redux/store.js";

function Detail() {

    let shoes = useSelector(state => state.shoes)

    let dispatch = useDispatch()

    let { id } = useParams()

    let idx = shoes.findIndex(a => { return a.id == id })

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={
                            "https://codingapple1.github.io/shop/shoes" + (Number(id) + 1) + '.jpg'
                        } width="100%" />
                    </Col>
                    <Col md={6} className="mt-4">
                        <br />
                        <h4 className="pt-5">{shoes[idx].title}</h4>
                        <p>{shoes[idx].content}</p>
                        <p>{shoes[idx].price}원</p>
                        <Button variant="danger" onClick={() => {
                            dispatch(addCart(
                                { id: shoes[idx].id, title: shoes[idx].title, 
                                    count: 1, totalPrice: shoes[idx].price, price: shoes[idx].price }
                            ))
                        }}>카트담기</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Detail