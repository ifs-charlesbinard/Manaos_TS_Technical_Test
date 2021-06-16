import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import './App.css';


type CoinsType = {
  "2" : number,
  "5" : number,
  "10" : number,
}

export const App: React.FC = () => {

  const [price, setPrice] = useState<number>(0)
  const [optmizedCoin, setOptmizedCoin] = useState<CoinsType| undefined>(undefined)

  
  const calculOptimizedCoins = (price: number): CoinsType  => {

    const coins  = {
      "2" : 0,
      "5" : 0,
      "10" : 0
    }
    

    // Do Something ... 

    return coins
  }


  const handleClickOk = async () => {
    setOptmizedCoin(undefined)
    // console.time("Global");
    // for(let i = 0; i <= 10000; i++ ){
    //   console.time("for-" + i);
   
    //   const calcul = calculOptimizedMoney(i);
    //   console.log(`for ${i} => \n 2 : ${calcul["2"]} \n 5 : ${calcul["5"]} \n 10 : ${calcul["10"]}`)
    //   console.timeEnd("for-" + i);
    // }
    // console.timeEnd("Global");

    const coins = calculOptimizedCoins(price);
    console.log(`for ${price} => \n 2 : ${coins["2"]} \n 5 : ${coins["5"]} \n 10 : ${coins["10"]}`)
    setOptmizedCoin(coins)
  }



  return (
    <div className="App">
      <div className="App-header">
        <div>
          <TextField
            id="standard-number"
            label="Number"
            type="number"
            variant="outlined"
            style={{marginRight: 20}}
            onChange={(e) => setPrice(parseInt(e.target.value))}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" color="primary" onClick={handleClickOk}>
            OK
          </Button>
        </div>

        {optmizedCoin && 
          <div>
              <p> Coin 2 = x{optmizedCoin["2"]}</p>
              <p> Coin 5 = x{optmizedCoin["5"]}</p>
              <p> Coin 10 = x{optmizedCoin["10"]}</p>
          </div>
        }
        
      </div>
    </div>
  );
};
