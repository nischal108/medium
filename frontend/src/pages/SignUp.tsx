import { FormCompo } from "../components/FormCompo"
import { Quote } from "../components/Quote"


const SignUp = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full h-full flex ">
      <FormCompo type="signup"/>
      <Quote/>
      </div>
      </div>
  )
}

export default SignUp