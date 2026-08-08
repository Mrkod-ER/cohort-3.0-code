import { jobAtom, messagingAtom, networkAtom, notificationAtom } from "./atoms"
import { useRecoilValue, RecoilRoot, useRecoilState } from 'recoil'


function App() {
  
  return (
    <>
    <RecoilRoot>
      <Main />
    </RecoilRoot>
    </>
  )
}

function Main() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const [messagingCount, setMessagingAtomCount] = useRecoilState(messagingAtom);

  return <div>
    <button>Home</button>

      <button>My network ({networkNotificationCount >= 100 ? "99+" : notificationAtom})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notification ({notificationAtomCount })</button>

      <button 
      onClick={() => {
        setMessagingAtomCount(messagingCount + 1)
      }}>Me</button>
  </div>
}

export default App
