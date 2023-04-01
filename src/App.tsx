import { useEffect, useRef } from 'react'

function App() {
  const anchor = useRef<any>();
  useEffect(() => {
    if (anchor.current) {
      (anchor.current).click();
    }
  }, []);
  return (
    <div>
      <a ref={anchor as any} href="https://play.google.com/store/apps/details?id=com.navachar.neptune"></a>
    </div>
  )
}

export default App
