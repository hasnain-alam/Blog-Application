import Qoute from "../components/Qoute"
import SignupCom from "../components/SignupCom"

const Signin = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <SignupCom type="signin"/>
      <div className="invisible lg:visible">
      <Qoute/>
      </div>
      
    </div>
  )
}

export default Signin