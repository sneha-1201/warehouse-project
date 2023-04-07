fetch("http://43.205.91.117:8000/api/exit_time/<tid>",{
method:'GET',
headers:{
  'Content-Type':'application/json'
},
//body:JSON.stringify({
 // name:'User 1'
//})

}).then(response => response.json())

.then((data)=>{
  console.log(data);
  
  var vals = JSON.parse(data['body'])
  
  document.getElementById('root8').innerHTML=vals['exit_time'];
});