fetch("http://43.205.91.117:8000/api/entry_datetime/KA25B3155",{
method:'GET',
headers:{
  'Content-Type':'application/json',
  'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTM0NDMxLCJpYXQiOjE2ODA1MzQxMzEsImp0aSI6ImYxN2U2YmI0YTU4ZTRiMGE4YzQ2ZTI1MTNkOWQ1ZjllIiwidXNlcl9pZCI6MjR9.EFJZaKu_SXP26izsrPkX7iqAIS89ZkX2TssNT2_HpEs'

  
},
//body:JSON.stringify({
 // name:'User 1'
//})

}).then(response => response.json())

.then((data)=>{
  console.log(data);

  var vals = JSON.parse(data["body"]);
  

  // console.log(vals["a + b"])
  
  document.getElementById('root').innerHTML=vals["entry_date"];
  document.getElementById('root1').innerHTML=vals["entry_date"];
  document.getElementById('root2').innerHTML=vals["entry_time"]; 
});