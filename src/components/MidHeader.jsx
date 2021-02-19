import react from "react"
import "../css/MidHeader.css"
import value from "../value/MidHeader.js"
import CreateItem from "./CreateItem.jsx"

function MidHeader(){

	return (
		<div>
			<div className="Item">
				{value.map((Attr)=>{
				return <CreateItem 
						key={Attr.id}
						source={Attr.src}
						alt={Attr.alternate}
						desc={Attr.disc}
						/>
				})}
			</div>
		</div>
	)

}


export default MidHeader