import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../redux/store.js";
import { addWishItem } from "../redux/store.js";
import { useEffect, useState } from "react";

function Detail() {

    let [fade, setFade] = useState('')
    let books = useSelector(state => state.books)

    let dispatch = useDispatch()

    let { id } = useParams()

    let idx = books.findIndex(a => { return a.id == id })

    useEffect(() => {
        setFade('end')

        return () => {
            setFade('')
        }
    }, [])

    return (
        <>
            <Container className={"start " + fade}>
                <Row>
                    <Col md={6}>
                        <img src={
                            "https://jskim-gcd.github.io/data/img/books" + (Number(id) + 1) + '.jpg'
                        } className="detail-img" />
                    </Col>
                    <Col md={6} className="mt-4">
                        <br />
                        <h4 className="pt-5">{books[idx].title}</h4>
                        <p>{books[idx].author}</p>
                        <p>{books[idx].price}원</p>
                        <Button variant="danger" onClick={() => {
                            dispatch(addCart(
                                {
                                    id: books[idx].id, title: books[idx].title,
                                    count: 1, totalPrice: books[idx].price, price: books[idx].price
                                }
                            ))
                            alert('상품이 카트에 담겼습니다.')
                        }}>카트담기</Button>
                        <span onClick={() => {
                            let item = books.find(a => a.id == id)
                            dispatch(addWishItem(item))
                            alert('상품이 위시리스트에 추가되었습니다.')
                        }} style={{ cursor: 'pointer' }}>❤️</span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Detail