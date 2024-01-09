'use client';
import Image from 'next/image'
import React, {useState} from 'react';

var counter = 0

export default function Home() {
  return (
    <main>
     
      {Counter()}
      {Buttons()}
    </main>
  )
}

export function Counter(){
  return (
    <p className="inline-flex place-items-center">Hello {counter}</p>
  )
}

export function Buttons() {

  const [count, setCount] = useState(0);

  return (
    <div className="inline-flex place-items-center">
      <button onClick={() => setCount(counter = counter - 1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
        -1 
      </button>
      <button onClick={() => setCount(counter = counter + 1)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r">
        +1
      </button>
    </div>
  )
}