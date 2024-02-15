

function sendMail(){
  var params = {
      // name : document.getElementById('name').value,
      // email : document.getElementById("email").value,
      // message : document.getElementById("message").value,
      name :"User",
      email:"user@gmail.com",
      message:"This is a dynamic message."

  }
  const serviceID = "service_igk50bm";
const templateID = "template_4xz8xtu";

emailjs.send(serviceID,templateID,params).then(res=> 
  {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value ="";
      console.log(res);
      alert("your message sent successfully")
  }
).catch(err=>console.log(err))
}
