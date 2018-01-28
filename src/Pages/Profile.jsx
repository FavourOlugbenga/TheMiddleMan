import React from "react"
import "./Profile.css"
import Pollution from "./Pollution";
import logo from "../midmanfour.png"

export default ({ onChange } = {}) => (
    <div>
		<div class="logo">
    <img  src={logo}/>
	</div>
    <h1>Favour Olugbenga</h1>
<h2> Hi my name is Favour Olugbenga, I am interested in starting a non-profit organization for education.</h2>

<div class="container">
		
		<ul class="social">

			<li class="facebook"><a href="https://www.facebook.com/middle.man.351756" class="entypo-facebook"></a></li>
			<li class="twitter"><a href="https://twitter.com/middleman_the" class="entypo-twitter"></a></li>
            <li class="sociali"><a href="#" class="entypo-mouse" onClick={() => onChange(Pollution)}></a></li>
			<li class="codepen"><a href="#" class="entypo-code"></a></li>
			<li class="mail"><a href="#" class="entypo-mail"></a></li>

		</ul>
</div>
</div>)


