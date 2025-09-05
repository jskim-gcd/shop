import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signup() {
    let [id, setId] = useState('')
    let [password, setPassword] = useState('')

    let navigate = useNavigate()

    function doSignup() {
        let users = JSON.parse(localStorage.getItem('user')) || []

        if (users.find(a => a.id == id)) {
            alert("이미 사용 중인 아이디입니다.")
            return
        }

        let newUser = [...users, { id, password }]
        localStorage.setItem('users', JSON.stringify(newUser))

        alert("회원가입에 성공하였습니다.")
        navigate('/login')
    }

    return (
        <>
            <h2 className="login-title">회원가입</h2>

            <div style={{ width: '25%', margin: '0 auto' }}>
                <InputGroup className="mb-3">
                    <Form.Control
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="아이디"
                        onChange={(e) => { setId(e.target.value) }}
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        placeholder="비밀번호"
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </InputGroup>
            </div>

            <Button variant="outline-dark" id="button-addon1" onClick={doSignup}>
                가입하기
            </Button>
        </>
    )
}

export default Signup