import react from "react"
import TopHeader from "./TopHeader.jsx"
import MidHeader from "./MidHeader.jsx"


function Header(){

	return ( 
		<div>
			<div>
			<TopHeader />
			</div>
			<div>
			<MidHeader />
			</div>
		</div>
	 )
}

export default Header;