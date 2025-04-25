import Header from "../components/header";
import Cards from "../components/cards";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom";
function Landing() {
    const data = useLocation()
    return (<div className='bg-black p-16'>
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            {/*Header*/}
            <Header username={data.state.user} />
            {/*Cards*/}
            <div className="flex justify-between gap-7 my-5 flex-wrap">
                <Cards bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
                <Cards bgcolor={"#FD6663"} title={"December"} subtitle={"14:12:47"} />
                <Cards bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
            </div>
            {/*TodoContainer*/}
            <TodoContainer />



        </div>
    </div>)
}
export default Landing