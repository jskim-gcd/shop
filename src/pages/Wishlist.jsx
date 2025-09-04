import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { subtractWishItem } from "../redux/store.js"

function Wishlist() {

    let wishlist = useSelector(state => state.wishlist)

    let dispatch = useDispatch()

    let navigate = useNavigate()

    return (
        <>
            {wishlist.length == 0 && <div>비어 있음</div>}
            <Container>
                <Row>
                    {
                        wishlist.map((a, i) => {
                            return (
                                <Card key={i} i={i} shoes={a} navigate={navigate}
                                    dispatch={dispatch} />
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

function Card(props) {

    return (
        <Col sm={4}>
            <img src={'https://codingapple1.github.io/shop/shoes' + (props.shoes.id + 1) + '.jpg'} width='80%'
                onClick={() => { props.navigate('/detail/' + props.shoes.id) }} />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}</p>
            <p onClick={() => {
                props.dispatch(subtractWishItem(props.shoes.id))
            }} style={{ cursor: 'pointer' }}>💔</p>
        </Col>
    )
}

export default Wishlist