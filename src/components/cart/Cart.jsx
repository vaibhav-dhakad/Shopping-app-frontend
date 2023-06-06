import OnLoagedIn from "./OnLoagedIn";
import Unauth from "./Unauth";

export default function Cart() {
  const auth = localStorage.getItem("token");

  return(
       <>
       {auth ?< OnLoagedIn/>:
      <Unauth/>
}
       </>
  )
}
