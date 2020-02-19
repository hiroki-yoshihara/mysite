//グローバル変数として、各要素の変数を宣言する。6.14

const getNum1 = () =>{
  return parseFloat(document.getElementById("num1").value);
};

const getNum2 = () =>{
  return parseFloat(document.getElementById("num2").value);
};

const showResult = (num) =>{
  document.getElementById("box").textContent=num;
};

const buttonAdd = document.getElementById('button-add');

const buttonSub = document.getElementById('button-sub');

const buttonMul = document.getElementById('button-mul');

const buttonDiv = document.getElementById('button-div');

buttonAdd.addEventListener('click', () => {
  const result = getNum1() + getNum2();
  showResult(result);
});

buttonSub.addEventListener('click', () =>　{
  const result = getNum1() - getNum2();
  showResult(result);
});

buttonMul.addEventListener('click', () => {
  const result = getNum1() * getNum2();
  showResult(result);
});

buttonDiv.addEventListener('click',() =>  {
  const result = getNum1() / getNum2();
  showResult(result);
});

//-, *, /, の要素に対してもイベントリスナーを付与する