import React  from 'react'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { response:[ {
      name:"test",
      time: 1
    }]};
  }
  async componentDidMount() {
    fetch("https://api.spacexdata.com/v4/launches/upcoming", {
      "method": "GET"
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        response: response
      })
    })
    .catch(err => { console.log(err); 
    });
  }  

  render() {
    const response=this.state.response;
    console.log(response);
    return(
      <div>
       {
         response.map ((p)=>{
           var date = new Date(p.date_unix*1000);
           return(
            <div class="main_div">
              <h2>
                {p.name}
              </h2>
              date: {date.toLocaleString()}
              <br/>
              flight number: {p.flight_number}
              <hr/>
            </div>
           )
         })
       }
      </div>
    )
  }
}
