import { useState } from "react"
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
            <h2>로그인</h2>
            <input type="text" placeholder="아이디" onChange={(e) => { setId(e.target.value) }}></input>
            <input type="password" placeholder="비밀번호" onChange={(e) => { setPassword(e.target.value) }}></input>
            <button onClick={doLogin}>로그인</button>
            <br /><br />
            <button onClick={() => { navigate('/signup') }}>회원가입</button>
        </>
    )
}

export default Login