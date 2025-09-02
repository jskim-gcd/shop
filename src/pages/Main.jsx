import { useSelector } from "react-redux";
import bg from '../img/bg.png'
import { Col, Container, Row } from "react-bootstrap";

function Main() {

    let shoes = useSelector((state) => state.shoes)

    return (
        <>
            <div className="main-bg" style={{ backgroundImage: 'url(' + bg + ')' }} />

            <div>
                <Container>
                    <Row>
                        {
                            shoes.map((a, i) => {return (
                                <Card key={i} i={i} shoes={a} />
                            )})
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}

function Card(props) {

    return(
        <Col sm={4}>
            <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width='80%' />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.content}</p>
            <p>{props.shoes.price}</p>
        </Col>
    ) 
}

export default Main