import { useState } from 'react'
import './counter.css'

function Counter() {
  const [count, setCount] = useState(0)

  const validJSX1 = 
  <>
    <p>paragraph 1</p>
    <p>paragraph 1</p>
  </>;

const validJSX2 = 
<>
  <p>paragraph 2</p>
  <p>paragraph 2</p>
</>;

var name = "Bob";
const status = "hungry";

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {/* count is {count} */}

          <span>
            {status == "hungry" ? "Eat something" : "Have some rest"}
          </span>

        </button>
      </div>
    </>
  )
}

export default Counter
