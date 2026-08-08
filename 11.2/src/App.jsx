import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom, evenSelector } from "./store/atoms/counter";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Button/>
        <Counter/>
        <IsEven/>
      </RecoilRoot>
    </div>
  )
}

function Button() {
  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(count => count + 2);
  }

  function decrease() {
    setCount(count => count + 1);
  }

  return (
    <div>
      <button onClick={increase} >increase</button>
      <button onClick={decrease} >decrease</button>
    </div>
  )
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>
}

function IsEven() {
  const even = useRecoilValue(evenSelector);

  return <div>
    {even ? "Even" : "odd"};
  </div>
}


export default App
