import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <Button onClick={() => setCount((state) => state + 1)}>{count}</Button>
    </>
  )
}
