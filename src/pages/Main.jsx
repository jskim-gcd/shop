import { useDispatch, useSelector } from "react-redux";
import bg from '../img/bg2.png'
import { Button, Col, Container, Row } from "react-bootstrap";
import { useRef, useState } from "react";
import { addItem, setItem } from "../redux/store.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Main(props) {

    let [load, setLoad] = useState(false)

    let shoes = useSelector(state => state.shoes)

    let dispatch = useDispatch()

    let navigate = useNavigate()

    let productsRef = useRef(null)

    return (
        <>
            <div className="main-banner-container">
                <div className="main-banner-bg" style={{ backgroundImage: 'url(' + bg + ')' }} />

                <div className="main-banner-content">
                    <h1>Best Seller<br />Book Shop</h1>
                    <Button variant="outline-dark" onClick={() => {
                        productsRef.current?.scrollIntoView({behavior: 'smooth'})
                    }}>See More</Button>
                </div>
            </div>

            <div className="sort-button-div" ref={productsRef}>
                <SortButton shoes={shoes} dispatch={dispatch} />
            </div>

            <Container>
                <Row>
                    {
                        shoes.map((a, i) => {
                            return (
                                <Card key={i} i={i} shoes={a} navigate={navigate} />
                            )
                        })
                    }
                </Row>
            </Container>

            {load && <div>로딩중~</div>}
            {props.count < 2 && <MoreButton count={props.count} setCount={props.setCount} dispatch={dispatch} setLoad={setLoad} />}
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
        </Col>
    )
}

function MoreButton(props) {
    return (
        <>
            <Button variant="outline-dark" onClick={() => {
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
            }}>더보기</Button>
            {props.count}/2
        </>
    )
}

function SortButton(props) {
    return (
        <Button variant="outline-info" onClick={() => {
            let texts = props.shoes.map(a => a.title)
            texts.sort()
            let sortedShoes = props.shoes.map((a, i) => {
                return (props.shoes.find(s => { return s.title == texts[i] }))
            })
            props.dispatch(setItem(sortedShoes))
        }}>이름순</Button>
    )
}

export default Main