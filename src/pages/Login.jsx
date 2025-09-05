import { useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function Login(props) {
    let [id, setId] = useState('')
    let [password, setPassword] = useState('')

    let navigate = useNavigate()

    function doLogin() {
        let users = JSON.parse(localStorage.getItem('users')) || []
        let user = users.find(a => { return a.id == id && a.password == password })
        console.log(user)

        if (user) {
            sessionStorage.setItem('loggedInUser', JSON.stringify(user))
            props.setUserIn(true)
            alert('로그인 되었습니다.')
            navigate('/')
        } else {
            alert('아이디 또는 비밀번호가 일치하지 않습니다.')
        }
    }

    return (
        <>
            <h2 className="login-title">로그인</h2>

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

            <Button variant="outline-dark" id="button-addon1" onClick={doLogin}>
                로그인
            </Button>
            <br /><br />
            <p onClick={() => { navigate('/signup') }} className="signup-link">회원가입</p>
        </>
    )
}

export default Login