import react from "react"
import "../css/MidHeader.css"
import Mobile from "../img/Mobile.jpg"
import Electronic from "../img/electronic.jpg"

function MidHeader(){

	return (
		<div>
			
				<div>
					<img
				        src={Mobile}
				        width="70"
				        height="70"				        
				        alt="Mobile logo"
				      />
				      <p>Mobile</p>
					<img
				        src={Electronic}
				        width="70"
				        height="70"	
				        display = "inline"		        
				        alt="Electronic logo"
				      />
				      <p>Electronic</p>
				</div>
			
		</div>
		)

}


export default MidHeader