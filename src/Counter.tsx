import { useEffect, useRef, useState } from "react";

// export default function Counter() {
//   const [counter, setCounter] = useState(0);
//   console.log('rendering');
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCounter(counter => counter + 1);
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//       alert(counter);
//     };
//   }, []);
//   return (
//     <div onClick={() => console.log(counter)}>
//       <p>{counter}</p>
//     </div>
//   );
// }

// export default function CounterKai() {
//   const counter = useRef(0);
//   console.log('rendering');
//   useEffect(() => {
//     const timer = setInterval(() => {
//       counter.current += 1;
//     }, 1000);
//     return () => {
//       clearInterval(timer);
//       console.log("<CounterKai/>:", counter.current);
//     };
//   }, []);
//   return (
//     <div onClick={() => console.log(counter.current)}>
//       <p>{counter.current}</p>
//     </div>
//   );
// }

export default function CounterKai() {
  const counter = useRef(0);
  console.log('rendering');
  useEffect(() => {
    const timer = setInterval(() => {
      counter.current += 1;
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("<CounterKai/>:", counter.current);
    };
  }, []);
  return (
    <div onClick={() => console.log(counter.current)}>
      <p>{counter.current}</p>
    </div>
  );
}