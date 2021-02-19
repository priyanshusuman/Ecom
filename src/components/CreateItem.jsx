import react from "react"
import "../css/MidHeader.css"

function CreateItem(props){
	console.log(props)
	return (
			<span className="Items">
				<img
			    src={props.source}
		        width="70"
			    height="70"				        
		        alt={props.alt}
		      />
		       <p>{props.desc}</p>
			</span>
			)
}

export default CreateItem