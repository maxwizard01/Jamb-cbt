var counter={questIndex:1,gotoIndex:0,
userAnswers:new Array(),answers:new Array(),
correct:0,subject:'english',name:'',data:[]}

function dataSearch(subject) {
   subject=subject
  fetch("https://questions.aloc.com.ng/api/v2/q/30?subject="+subject, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', 'AccessToken': 'ALOC-f15447c0247ec997c66f' }, method: "GET", }) .then(function (response) {
               return response.json();}).then(function(respond){ 
              data=respond.data
              counter.data=data
            //console.log(data)
              start(data)
             }) .catch(function(res){ console.log(res) })
}  





function getAllSubject(listOfSubject,listOfImage,listOfSubjectLink){

  for (var i = 0; i <listOfSubject.length ; i++) {

flashCard=`<div class="col-10 col-md-6 col-lg-4 col-xl-3">

              <div class="card my-4" style="border: none;">
                  <img src="../Quiz Images/${listOfImage[i]}">
                  <div class="card-body text-center">
                    <h5 class="card-title">${listOfSubject[i]}</h5>
                    <p class="card-text">Are you  ready for  ${listOfSubject[i]} quiz ? Attempting the quiz by clicking Launch</p>
                      
                        <button type="button" class="mybtn" data-bs-toggle="modal"  data-bs-target='#staticBackdrop${i}' onclick="dataSearch('${listOfSubjectLink[i]}')">
                          Launch  <i class="bi bi-send"></i>
                        </button>
                      
                        <!-- Modal -->
                        <div class="modal fade" id="staticBackdrop${i}">

                          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content">

                              <div class="modal-header">

                                <h5 class="modal-title" id="staticBackdropLabel">Instructions</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                              </div>
                              
                              <div class="modal-body"  style="text-align: left;">
                                <ul>
                                    <li> <i class="bi bi-clock bg-light"></i> Time allotted : 30 minutes</li>
                                   <li>The answers become <strong>selected</strong> on select, implying that you can  change an answer once the option selected. The <strong>Next</strong> button to proceed is available.</li>
                                   <li> Use the <strong>Next</strong> button to proceed to next question vailable. and <b> Previous </b> to previous question</li>
                                   <li>Clicking submit button is irreversible. Meaning once you click submit you can't undo it.</li>
                                   <li>Automatic submission once the time lapse.</li>
                                 </ul>
                              </div>

                              <div class="modal-footer">


                             <a onclick="changePageContent('${ listOfSubjectLink[i]}')" id="check${i}">
 <button type="button" class="mybtn">Get Started <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span></button></a>
                    
                            
                              </div>
                            </div>
                          </div>
                        </div>
                  </div>
                </div>
              </div>`
            
  	document.getElementById('listSubject').innerHTML+=flashCard;
      }
    
  }


