import { useDispatch, useSelector } from "react-redux"
import { countUp, countDown, subtractCart } from "../redux/store.js"
import { Button, Table } from "react-bootstrap"

function Cart() {

    let cart = useSelector(state => state.cart)

    let dispatch = useDispatch()

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경</th>
                        <th>가격</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((a, i) => {
                            return (
                                <tr key={i}>
                                    <td>{a.id}</td>
                                    <td>{a.title}</td>
                                    <td>{a.count}</td>
                                    <td>
                                        <Button variant="outline-primary" onClick={() => {
                                            dispatch(countUp(a.id))
                                        }}>+</Button>
                                        <Button variant="outline-danger" onClick={() => {
                                            dispatch(countDown(a.id))
                                        }}>-</Button>
                                    </td>
                                    <td>{a.totalPrice}원</td>
                                    <td>
                                        <Button variant="danger" onClick={() => {
                                            dispatch(subtractCart(a.id))
                                        }}>X</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </>
    )
}

export default Cart