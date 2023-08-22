import './App.css'

function App() {
const jewelleryItem= ['Bangles', 'Necklace', 'Ring', 'Pearlnecklace']

let newList =[]
for(let i=0; i<jewelleryItem.length; i++){
  newList[i]= <li>{jewelleryItem[i]}</li>;
}

  return (
    <>
      <div>
        <img height='700px' width='100%' className='' src='https://thumbs.dreamstime.com/z/gold-shop-jewelry-display-window-istanbul-turkey-48032583.jpg'/>
      </div>

      <h1 className='lists'>Lists of Items on Offer today!!</h1>
        <hr/>

      <main className='flex'>
       
        <div>
          <h3 className='offerItem'>{newList}</h3>
        </div>
        
        <div className='itemImage flex'>

        <div>
          <img width='300px' src='https://th.bing.com/th/id/R.0c4541d957362415b23c0a05a332b2eb?rik=hphl2b50ef%2b2nw&pid=ImgRaw&r=0'/>
        
        </div>
        <div> <img width='300px' src='https://th.bing.com/th/id/OIP.t8fcdyCUgK0aCkrIf1GKTQHaHZ?pid=ImgDet&w=1500&h=1499&rs=1'/></div>
        <div>
          <img width='300px' src='https://th.bing.com/th/id/R.528431429286a48ca1d0f45c6d43ec70?rik=CP6%2f7FrjDQBucw&riu=http%3a%2f%2fwww.southernjewellers.in%2fwp-content%2fuploads%2f2016%2f06%2fGold-Ring-2.jpg&ehk=SfuEphmirsCJNqp22cBwMFO2clmVv8yLdYnjUHF0cIk%3d&risl=&pid=ImgRaw&r=0'/>
        
        </div>
        <div>
          <img width='300px' src='https://ae01.alicdn.com/kf/HTB1Kh81MFXXXXbLXFXXq6xXFXXXz/Charming-Bride-wedding-Real-Pearl-Jewelry-Set-Crystal-Pendant-Necklaces-Earring-Set-Fashion-Jewelry-wedding-Accessories.jpg'/>
        
        </div>
        </div>
      </main>

    </>
  )
}

export default App
