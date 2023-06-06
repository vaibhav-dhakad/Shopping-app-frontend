import Mobile from '../Mobile'
import Landing from '../landingPage/Landing'
import Carousal from '../Carousal'
import SignedLand from '../landingPage/SignedLand'

export default function Home() {
  const auth=localStorage.getItem('token')
  return (
    <div>
      {auth?<SignedLand/>:
      <Landing></Landing>
      }
      <Carousal></Carousal>
      <Mobile></Mobile>
    </div>
  )
}
