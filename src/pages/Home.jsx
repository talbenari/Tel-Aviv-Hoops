import "../components/RulesDisplay"
import RulesDisplay from "../components/RulesDisplay"
import TlvRun from "../components/TlvRun"
import Info from "../components/Info"
import GetGamesData from "../components/tableFeatures/GetGamesData"
function Home() {
    return (
        <div>
            <TlvRun></TlvRun>
            <Info />
            <GetGamesData />
            <RulesDisplay></RulesDisplay>
        </div>
    )
}


export default Home