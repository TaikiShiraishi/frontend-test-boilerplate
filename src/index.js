import add from './calc-util.js';

document.getElementById('calc').addEventListener('click', function () {
  const value1 = Number(document.getElementById('value1').value);
  const value2 = Number(document.getElementById('value2').value);

  const result = add(value1, value2);
  document.getElementById('result').innerText = result;
});
