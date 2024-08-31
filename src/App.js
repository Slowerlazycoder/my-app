
import './App.css';


function App() {
  return (
    <div className="App"> 

      <Card
        tick="✔"
        text="FREE"
        heading="$0"
        month="/month"
        name1="✔ Single User"
        name2="✔ 50GB Storage"
        name3="✔ Unlimited Public Project"
        name4="✔ Community Access"
        name5="× Unlimited Private Projects"
        name6="× Dedicated Phone Project"
        name7="× Free Subdomain"
        name8="× Monthly Status Report"
        button="BUTTON"

      />
      <Card
        text="PLUS"
        heading="$9"
        month="/month"
        name1="✔ 5 User"
        name2="✔ 50GB Storage"
        name3="✔ Unlimited Public Project"
        name4="✔ Community Access"
        name5="✔ Unlimited Private Projects"
        name6="✔ Dedicated Phone Project"
        name7="✔ Free Subdomain"
        name8="× Monthly Status Report"
        button="BUTTON"

      />
      <Card
        text="PRO"
        heading="$49"
        month="/month"
        name1="✔ Unlimited Users"
        name2="✔ 50GB Storage"
        name3="✔ Unlimited Public Project"
        name4="✔ Community Access"
        name5="✔ Unlimited Private Projects"
        name6="✔ Dedicated Phone Project"
        name7="✔ Free Subdomain"
        name8="✔ Monthly Status Report"
        button="BUTTON"
      />


    </div>

  );
}


export default App;


function Card(props) {
  return (
    <>  
    
      <div className='card'>
        <h6 className='text'>{props.text}</h6>
        <h1 className='heading'>{props.heading}<span className='month'>{props.month}</span></h1>
        <div className='card1'>
          <p className={props.name1.charAt(0) === "×" ? "color" : "color1"}>{props.name1}</p>
          <p className={props.name2.charAt(0) === "×" ? "color" : "color1"}>{props.name2}</p>
          <p className={props.name3.charAt(0) === "×" ? "color" : "color1"}>{props.name3}</p>
          <p className={props.name4.charAt(0) === "×" ? "color" : "color1"}>{props.name4}</p>
          <p className={props.name5.charAt(0) === "×" ? "color" : "color1"}>{props.name5}</p>
          <p className={props.name6.charAt(0) === "×" ? "color" : "color1"}>{props.name6}</p>
          <p className={props.name7.charAt(0) === "×" ? "color" : "color1"}>{props.name7}</p>
          <p className={props.name8.charAt(0) === "×" ? "color" : "color1"}>{props.name8}</p>
          <button className='button'>{props.button}</button>

        </div>
      </div>
    </>
  )
}