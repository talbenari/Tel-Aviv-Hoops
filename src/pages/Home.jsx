import "../components/RulesDisplay"
import RulesDisplay from "../components/RulesDisplay"
import TlvRun from "../components/TlvRun"
import Info from "../components/Info"
function Home() {
    return (
        <div>
            <TlvRun></TlvRun>
            <Info />
            <RulesDisplay></RulesDisplay>
        </div>
    )
}


export default Home