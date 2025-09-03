import { useState } from "react"

let styles = {
    color: "red"
}

export default function LikeButton(){
     let [Like, setLike] = useState(false)
    function clicked (){
        console.log("clicked")
       
       
        setLike(!Like)
    }
    return(
        <div>
        <p onClick={clicked}>
        {Like? <i className="fa-solid fa-heart" style={styles}></i>:<i className="fa-regular fa-heart"></i>}
       </p>
        </div>
    )
}