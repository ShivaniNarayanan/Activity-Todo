import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup(props) {
    const users = props.users
    const setusers = props.setusers
    const navigate = useNavigate()

    const [eusername, setEusername] = useState()
    const [epassword, setEpassword] = useState()
    function handleUInput(evt) {
        setEusername(evt.target.value)
    }
    function handlePInput(evt) {
        setEpassword(evt.target.value)
    }
    function addUser() {
        setusers([...users, { username: eusername, password: epassword }])
        navigate("/")

    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign Up Here:)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded" placeholder="Username" onChange={handleUInput}></input>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded" placeholder="Password" onChange={handlePInput}></input>
                    <input type="text" className="w-52 border-black p-1 bg-transparent border rounded" placeholder="Confirm Password"></input>
                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Sign Up</button>
                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>

                </div>
            </div>
        </div>
    )
}
export default Signup