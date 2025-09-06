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
                                <Card key={i} i={i} books={a} navigate={navigate}
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
        <Col sm={3}>
            <div className="wishlist-card">
                <img src={'https://jskim-gcd.github.io/data/img/books' + (props.books.id + 1) + '.jpg'}
                    onClick={() => { props.navigate('/detail/' + props.books.id) }}
                    width="200px" height="300px" />
                <br /><br />
                <h4>{props.books.title}</h4>
                <p>{props.books.content}</p>
                <p>{props.books.price}</p>
                <p onClick={() => {
                    props.dispatch(subtractWishItem(props.books.id))
                }} style={{ cursor: 'pointer' }}>💔</p>
            </div>
        </Col>
    )
}

export default Wishlist