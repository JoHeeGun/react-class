import React from 'react'

function Children1(){
  return <p>함수선언</p>
}

const Children2 = () => {
  return <p>화살표함수</p>
}



const Children3 = () => <p>화살표함수 return 한줄일경우</p>

//화살표 함수
const Hello = (porps) => {
  return (
    <div>
    <Children1 />
    <Children2 />
    <Children3 />
    <h2>my name is {porps.name} </h2>
    </div>
  )
}

export default Hello