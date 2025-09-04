import { useState } from "react";
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
            <h2>회원가입</h2>
            <input type="text" placeholder="아이디" onChange={(e) => { setId(e.target.value) }}></input>
            <input type="password" placeholder="비밀번호" onChange={(e) => { setPassword(e.target.value) }}></input>
            <button onClick={doSignup}>가입하기</button>
        </>
    )
}

export default Signup