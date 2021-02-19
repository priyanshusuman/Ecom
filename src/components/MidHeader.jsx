import react from "react"
import "../css/MidHeader.css"
import Mobile from "../img/Mobile.jpg"
import Electronic from "../img/electronic.jpg"
import Grocery from "../img/grocery.png"
import Home from "../img/Home.jpg"
import Toys from "../img/toys.jpg"
import Fashion from "../img/Fashion.jpg"
import Beauty from "../img/Beauty.jpg"


function MidHeader(){

	return (
		<div>
				<div className="Item">
				<span className="Items">
					<img
				        src={Mobile}
				        width="70"
				        height="70"				        
				        alt="Mobile logo"
				      />
				      <p>Mobile</p>
				</span>
				<span className="Items">
					<img
				        src={Electronic}
				        width="70"
				        height="70"	
				        display = "inline"		        
				        alt="Electronic logo"
				      />
				      <p>Electronic</p>
				</span>
				<span className="Items">
					<img
				        src={Toys}
				        width="70"
				        height="70"	
				        display = "inline"		        
				        alt="Electronic logo"
				      />
				      <p>Toys</p>
				</span>
				<span className="Items">
					<img
				        src={Home}
				        width="70"
				        height="70"	
				        display = "inline"		        
				        alt="Electronic logo"
				      />
				      <p>Home</p>
				</span>
				<span className="Items">
					<img
				        src={Grocery}
				        width="70"
				        height="70"	
				        display = "inline"		        
				        alt="Electronic logo"
				      />
				      <p>Grocery</p>
				</span>
				<span className="Items">
					<img
				        src={Fashion}
				        width="70"
				        height="70"	
				        display = "inline"		        
				        alt="Electronic logo"
				      />
				      <p>Fashion</p>
				</span>
				<span className="Items">
					<img
				        src={Beauty}
				        width="70"
				        height="70"	
				        display = "inline"		        
				        alt="Electronic logo"
				      />
				      <p>Beauty</p>
				</span>
				</div>
		</div>
		)

}


export default MidHeader