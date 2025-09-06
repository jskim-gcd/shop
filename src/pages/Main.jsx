import { useDispatch, useSelector } from "react-redux";
import bg from '../img/mainBanner.png'
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { addItem, setItem } from "../redux/store.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Main(props) {

    let [load, setLoad] = useState(false)
    let [move, setMove] = useState('')

    let books = useSelector(state => state.books)

    let dispatch = useDispatch()

    let navigate = useNavigate()

    let productsRef = useRef(null)

    useEffect(() => {
        let timer = setTimeout(() => {setMove('move')}, 10)
        
        return () => {
            clearTimeout(timer) 
            setMove('')
        }
    }, [])

    return (
        <>
            <div className="main-banner-container">
                <div className="main-banner-bg" style={{ backgroundImage: 'url(' + bg + ')' }} />

                <div className={"main-banner-content " + move}>
                    <h1>Best Seller<br />Book Shop</h1>
                    <Button variant="outline-dark" onClick={() => {
                        productsRef.current?.scrollIntoView({ behavior: 'smooth' })
                    }}>See More</Button>
                </div>
            </div>

            <div className="main-products" ref={productsRef}>
                <span>Books</span>
                <div className="sort-button-div">
                    <SortButton books={books} dispatch={dispatch} />
                </div>
            </div>

            <Container>
                <Row>
                    {
                        books.map((a, i) => {
                            return (
                                <Card key={i} i={i} books={a} navigate={navigate} />

                            )
                        })
                    }
                </Row>
            </Container>

            {load && <div>로딩중~</div>}
            {props.count < 1 && <MoreButton count={props.count} setCount={props.setCount} dispatch={dispatch} setLoad={setLoad} />}
        </>
    )
}

function Card(props) {

    return (
        <Col sm={3}>
            <div className="main-card">
                <img src={'https://jskim-gcd.github.io/data/img/books' + (props.books.id + 1) + '.jpg'}
                    width='200px' height='300px'
                    onClick={() => { props.navigate('/detail/' + props.books.id) }} />
                <br /><br />
                <h4>{props.books.title}</h4>
                <p>{props.books.author}</p>
                <p>{props.books.price}</p>
            </div>
        </Col>
    )
}

function MoreButton(props) {
    return (
        <>
            <Button variant="outline-dark" onClick={() => {
                props.setLoad(true)
                axios.get('https://jskim-gcd.github.io/data/products.json')
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
            {props.count}/1
        </>
    )
}

function SortButton(props) {
    return (
        <Button variant="outline-info" onClick={() => {
            let texts = props.books.map(a => a.title)
            texts.sort()
            let sortedBooks = props.books.map((a, i) => {
                return (props.books.find(s => { return s.title == texts[i] }))
            })
            props.dispatch(setItem(sortedBooks))
        }}>이름순</Button>
    )
}

export default Main