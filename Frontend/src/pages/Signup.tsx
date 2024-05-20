import Qoute from "../components/Qoute"
import SignupCom from "../components/SignupCom"


// This is the Signup Page

const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <SignupCom type="signup"/>
      <div className="invisible lg:visible">
      <Qoute/>
      </div>
      
    </div>
  )
}

export default Signup