import React from "react"
import "./Signup.css"
export default ()=>(
    
<div class='container' >
			
			<div class='contact-form form large-form oddT-color' >
				
				<div class='header' >
					<h1>Sign Up</h1>
				</div>
				
				<form id='contact' >
					
					<div class='row' >
						
						<div class='col-sm-6' >
							<div class='form-group' >
								<div class='oddT-icon-input' >
									

									<input type='text' placeholder='Your Name' class='oddT-text' />
									<i class="glyphicon glyphicon-user"></i>
									
									
								
								</div>
							</div>
						</div>
						
						<div class='col-sm-6' >
							<div class='form-group' >
								<div class='oddT-icon-input' >

									<input type='email' placeholder='Email' class='oddT-text' />
																	 <i class="glyphicon glyphicon-envelope"></i>	
									
								
								</div>
							</div>
						</div>
						
					</div>
					
					<div class='form-group' >
						
						<div class='oddT-icon-input' >

							<input type='text' placeholder='Choice of Organization' class='oddT-text'/>
													 <i class="glyphicon glyphicon-tag"></i>	
							
							
						</div>
					
					</div>
					
					<div class='form-group' >
						
						<div class='oddT-icon-input' >
							
							 
              <textarea class='oddT-text' placeholder='Bio' rows='7' ></textarea>
							 <i class="glyphicon glyphicon-comment"></i>
						
						</div>
					
					</div>
					
					<div class='row form-group' >
						
						<div class='col-sm-5' >
							
							<div class='form-group' >
								
								<div class='input-group oddT-group' >
									
									<div class='input-group-addon' >Cell Number</div>
									
									<input type='text' class='oddT-text' />
								
								</div>
								
							</div>
							
						</div>
						
						<div class='col-sm-7' >
							
							<div class='form-group' >
								
								<button type='submit' class='oddT-btn btn-block' >Create Profile</button>
							
							
							</div>
							
						</div>
						
					</div>
					
				</form>
				
			</div>
	
		
		
    


    </div>
)