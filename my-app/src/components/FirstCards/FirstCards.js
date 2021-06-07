// import axios from 'axios';
import './FirstCards.css';
import { useEffect, useState } from 'react';


function FirstCards() {
 const [refresh, setRefresh] = useState(false);
 
useEffect(() => {  
    async function fetchCards(){
        const response = await fetch('https://api.pokemontcg.io/v2/cards', {
            headers: {
                'X-Api-Key': '2766265d-61ef-4645-964a-6f27b1112e5d'
            },
            mode: 'cors',
            cache: 'default',
            method: 'GET'
        })

        // const parsed = await response.json()
        // const {data} = parsed

        const {data} = await response.json()

        console.log(data)
     }

     fetchCards();
 },[refresh])

    useEffect(() => {
        console.log('refreshState', refresh)
    }, [refresh])

  return (
    <div className="FirstCards">
      <h1>Pokemão mão mão</h1>
      
      <button onClick={() => setRefresh(!refresh)}>atualizar</button>  
    </div>
  );
}

export default FirstCards;