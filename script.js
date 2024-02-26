//your JS code here. If required.
function promise(){
	setTimeout(()=>{
 	 	return new Promise((resolve,reject)=>{
			resolve(document.getElementById("output").textContent="Hello, world!")
		})
  	},1000)
}
promise();