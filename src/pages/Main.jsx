import { useDispatch, useSelector } from "react-redux";
import bg from '../img/bg.png'
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { addItem } from "../redux/store.js";
import axios from "axios";

function Main() {

    let [count, setCount] = useState(0)
    let [load, setLoad] = useState(false)

    let shoes = useSelector(state => state.shoes)

    let dispatch = useDispatch()

    return (
        <>
            <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }} />

            <div>
                <Container>
                    <Row>
                        {
                            shoes.map((a, i) => {
                                return (
                                    <Card key={i} i={i} shoes={a} />
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
            {load && <div>로딩중~</div>}
            {count < 2 && <MoreButton count={count} setCount={setCount} dispatch={dispatch} setLoad={setLoad}/>}
        </>
    )
}

function Card(props) {

    return (
        <Col sm={4}>
            <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width='80%' />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}</p>
        </Col>
    )
}

function MoreButton(props) {
    return (
        <>
            <button onClick={() => {
                props.setLoad(true)
                axios.get('https://codingapple1.github.io/shop/data' + (props.count + 2) + '.json')
                    .then(result => {
                        props.dispatch(addItem(result.data))
                        props.setCount(props.count + 1)
                        props.setLoad(false)
                    })
                    .catch(() => {
                        console.log('get 실패')
                        props.setLoad(false)
                    })
            }}>더보기</button> {props.count}/2
        </>
    )
}

export default Main