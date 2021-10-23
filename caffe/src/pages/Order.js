import React,{useState} from 'react';

function Order(){
  const [hasEs,setEs] = useState(false);
  const [hasCa,setCa] = useState(false);
  const [hasAm,setAm] = useState(false);

  const changeEs = () => {
    setEs(!hasEs)
  }
  const changeCa = () => {
    setCa(!hasCa)
  }
  const changeAm = () => {
    setAm(!hasAm)
  }
  let total = 0;
  total += hasEs ? 5000 : 0;
  total += hasCa ? 4500 : 0;
  total += hasAm ? 3000 : 0;

  return(
    <div className="container">
      <h1 className="font-bold"> OrderPages!</h1>
      <h2>메뉴판</h2>
      <dl>
        <dt>에스프레소</dt>
        <dd>
          5,000원
          <small><button onClick={changeEs}>
            [{hasEs 
            ?'선택 해제'
          :'선택'}]
             {hasEs} </button></small>
        </dd>
        <dt>카페라떼</dt>
        <dd>
          4,500원
          <small><button onClick={changeCa}>
            [{hasCa 
            ?'선택 해제'
          :'선택'}]
             {hasCa} </button></small>
        </dd>
        <dt>아메리카노</dt>
        <dd>
          3,000원
          <small><button onClick={changeAm}>
            [{hasAm 
            ?'선택 해제'
          :'선택'}]
             {hasAm} </button></small>
        </dd>
      </dl>
      <hr />
      <h3 className="text-xl font-bold">주문서</h3>
      {hasEs && <li>에스프레소</li>}
      {hasCa && <li>카페라떼</li>}
      {hasAm && <li>아메리카노</li>}
      합계 : {total} 원
      <div>
        <button className="btn btn-primary">주문하기</button>
      </div>
    </div>
  )
}

export default Order;