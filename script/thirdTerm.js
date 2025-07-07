function dataSearch(subject) {
   subject=subject
   //change the subject first character to Uppercase
   subjHead=subject.charAt(0).toUpperCase()+subject.slice(1)
   document.getElementById('currentSubject').innerHTML=subjHead+'-Jamb CBT'
  fetch("https://questions.aloc.com.ng/api/v2/m?subject="+subject, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'AccessToken': 'ALOC-f15447c0247ec997c66f' }, method: "GET", }) .then(function (response) {
               return response.json();}).then(function(respond){ 
              data=respond.data
              console.log(data)
              start(data)
             }) .catch(function(res){ console.log(res) })
}        
