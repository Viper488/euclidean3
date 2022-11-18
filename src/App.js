import './App.css';
import React, { useState } from "react";

function App() {
  const [a, setA] =  useState("");
  const [b, setB] =  useState("");
  const [c, setC] =  useState("");
  const [euclidean, setEuclidean] =  useState(undefined);
  const [help, setHelp] = useState(false);
  const text = "\n \n " +
      "Problem\n " +
      "Szukamy x, y, z i (a, b, c)\n " +
      "(a, b, c) = a * x + b * y + c * z\n " +
      "Podpowiedź\n " +
      "(a, b, c) = (a, (b, c))\n \n " +
      "Rozwiązanie\n " +
      "Krok 1 - Znajdźmy x0, y0 i (b, c)\n " +
      "(b, c) = b * x0 + c *y0\n \n " +
      "Krok 2 - Znajdźmy x1, y1 i (a, (b, c))\n " +
      "(a, (b, c)) = a * x1 + (b, c) * y1\n \n " +
      "Krok 3 - Znajdźmy x, y, z\n " +
      "(a, b, c) = a * x1 + b * (x0 * y1) + c * (y0 * y1)\n " +
      "(a, b, c) = (a, (b, c))\n " +
      "x = x1\n " +
      "y = x0 * y1\n " +
      "z = y0 * y1\n ";

  const gcd2 = (a, b) => {
    let x = 0;
    let y = 1;
    let lastx = 1;
    let lasty = 0;
    while (b !== 0) {
      let q = a / b;
      let r = a % b;

      a = b;
      b = r;

      let temp = x;
      x = lastx - (q * x);
      lastx = temp;

      temp = y;
      y = lasty - (q * y);
      lasty = temp;
    }

    return {
      "gcd": parseInt(a),
      "x": parseInt(lastx),
      "y": parseInt(lasty)
    }
  }

  const gcd3 = (pa, pb, pc) => {
    let a = parseInt(pa);
    let b = parseInt(pb);
    let c = parseInt(pc);
    console.log(a);
    console.log(b);
    console.log(c);
    if(a == 0 || b == 0 || c == 0) {
      setA("");
      setB("");
      setC("");
      setEuclidean(undefined);
      alert("Żaden z wpółczynników a, b, c nie może być = 0");
    }
    else {
      let xy0 = gcd2(b, c)
      let xy1 = gcd2(a, xy0.gcd)
      let y = (xy1.y * xy0.x)
      let z = (xy1.y * xy0.y)

      setEuclidean({
        "gcd": xy1.gcd,
        "x": xy1.x,
        "y": y,
        "z": z
      })
    }
  }

  const handleClear = (evt) => {
    evt.preventDefault();
    setA("");
    setB("");
    setC("");
    setEuclidean(undefined);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    gcd3(a, b, c)
  }

  return (
    <div className="App">
      <div>
      <h4>Oblicz (a, b, c) z algorutmu Euklidesa i znajdź całkowite x, y, z, takie że</h4>
      <h4>{a===""?"a":a}x + {b===""?"b":b}y + {c===""?"c":c}z = ({a===""?"a":a},{b===""?"b":b},{c===""?"c":c})</h4>
      <h4>Podaj a, b, c:</h4>
      <form onSubmit={handleSubmit} onReset={handleClear}>
      <label>
        a:
        <input type="text" name="a" value={a} onChange={fa => setA(fa.target.value)}/>
      </label>
        <br/>
      <label>
        b:
        <input type="text" name="a" value={b} onChange={fb => setB(fb.target.value)}/>
      </label>
        <br/>
      <label>
        c:
        <input type="text" name="a" value={c} onChange={fc => setC(fc.target.value)}/>
      </label>
        <br/>
      <input type="submit" value="Submit"/>
      <input type="reset" value="Clear"/>
      <input type="button" value="Help" onClick={() => setHelp(!help)}/>
    </form>
      <h4>Wynik:</h4>
      <h4>{euclidean===undefined?"":"(a, b, c) = " + euclidean.gcd + ", x = "+ euclidean.x +", y = "+ euclidean.y +", z = "+ euclidean.z}</h4>
      <h4>{euclidean===undefined?"":a + " * " + euclidean.x + " + " + b  + " * " + euclidean.y + " + "+ c + " * " + euclidean.z + " = " + euclidean.gcd}</h4>
    </div>
      <div className="container">
        {help?text.split("\n").map((i,key) => {
          return <div key={key}>{i}</div>;
        }):""}
      </div>
    <div><p>Created by Artur Hamernik</p></div>
    </div>
  );
}

export default App;
