
let popUp=document.querySelector('.popBox');
popUp.style.display="none";

//CLOCK
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; 
    return i;
  }
let time = document.querySelector(".time");

let clockSpan=document.createElement("div");
clockSpan.classList.add("clockArea");
time.appendChild(clockSpan);

function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector(".clockArea").innerHTML=h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500)
  }

startTime();

 let dateHolder = document.createElement("div");
 dateHolder.classList.add("dateBox");
 let date=new Date(Date.now()).toDateString();
 dateHolder.innerText=date;
 time.appendChild(dateHolder);

 //submitPopUp Evemt Listener
 let submitInfoPopupBtn=document.querySelector(".submitPopUp");
 submitInfoPopupBtn.addEventListener('click',function(){
    let popUp=document.querySelector('.popBox');
    popUp.style.display="none"
 });


// ORIGINAL STATE
const userObj={
    id:"123FreddyB",
    firstName:"Bobby",
    lastName:"Bobbson",
    birthday:"03/29/2000",
    email:"bobbyB@gmail",
    jobTitle:"IT"
}
//================= USED ON PUT REQUEST TO GATHER FROM INPUTS

////                     RENDER USER INFO OBJECT TO DOM
document.addEventListener("DOMContentLoaded", function(event) {
   
   document.querySelector('.fname').innerText=userObj.firstName;
   document.querySelector('.lname').innerText=userObj.lastName;
   document.querySelector('.email').innerText=userObj.email;
   document.querySelector('.birthdate').innerText=userObj.birthday;
   document.querySelector('.jobtitle').innerText=userObj.jobTitle;
   document.querySelector('.ibirthdate').value=userObj.birthday;  
   document.querySelector('.ifname').value=userObj.firstName; 
   document.querySelector('.ilname').value=userObj.lastName; 
   document.querySelector('.iemail').value=userObj.email; 
   document.querySelector('.ititle').value=userObj.jobTitle; 
  
    });

let toggleBtn=["On"];

var dropDownBtn=document.querySelector('.right'); 
dropDownBtn.addEventListener('click',function(){
    if(toggleBtn[0]=="On"){
    document.querySelector('.historyContainer').style.display="none";
    toggleBtn[0]="Off";
    }else if(toggleBtn[0]=="Off"){
    document.querySelector('.historyContainer').style.display="flex";
    toggleBtn[0]="On";
    }
});




///                       "OLD WAY" OF DOING THINGS
//----------------------------------------------------------------------------------------------
// const quickHTTP=function(){
//     this.http=new XMLHttpRequest();
//     this.name="original";
// }
// quickHTTP.prototype.put=function(url,data,callback){
//     this.http.open("PUT",url,true);
//     this.http.setRequestHeader("Content-type","application/json");
//     this.http.send(JSON.stringify(data));
//     let self=this;
        //     this.http.onload=function(){
        //         callback(null,self.http.responseText);
        //     }
// }
// let http=new quickHTTP();
// function loadData(){
// http.put("https://jsonplaceholder.typicode.com/posts/1",updateIt(),function(err,post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });
// }
//---------------------------------------------------------------------------------------------- 
//                          Validation Functions
//---------------------------------------------------------------------------------------------------
function emptyInputValidator(){
    let potentiallyEmptyFields=document.querySelectorAll(".mustfill");
    potentiallyEmptyFields.forEach(function(item,iter,array){
            if(array[iter].value===""){
                array[iter].style="border:3px solid red";
                array[iter].previousElementSibling.style="color:red"; 
                array[iter].previousElementSibling.innerText="Please fill out this field";
            }
    })
            if(document.querySelector(".ifname").value===""){
                return "FIRSTNAME"
            }
            else if(document.querySelector(".ilname").value===""){
            return "LASTNAME"
            }
            else if(document.querySelector(".ititle").value===""){
                return "TITLE"
            }
} 
//-----------------------------------------------------------------------------------------------------
function birthDateValidator(){
let birthDate=new Date(document.querySelector(".ibirthdate").value); 
let calculateAge=function(birthday) {                  // birthday is a date
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);                  // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
    if (calculateAge(birthDate) <=18){
    return "YOUNG";
    }
}
//-----------------------------------------------------------------------------------------------------
function emailValidator(){
let emailValue=document.querySelector(".iemail").value;
function validateEmail(emailValue) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailValue).toLowerCase());
}
    if(validateEmail(emailValue)===false||""){
        return "EMAIL";    
    }
}
//-----------------------------------------------------------------------------------------------------
///                            Put Call Validation Error reset
///------------------------------------------------------------------------------------------------
function putCallReset(){
        document.querySelector(".ibirthDate").removeAttribute('style');
        document.querySelector(".iEmail").removeAttribute('style');
        document.querySelector(".ifname").removeAttribute('style');
        document.querySelector('.ititle').removeAttribute('style');
        document.querySelector(".fname").removeAttribute('style');
        let bdayLabel=document.querySelector(".birthdateLableErr")
        bdayLabel.removeAttribute('style');
        bdayLabel.innerText="Birthdate";
        let emailLable= document.querySelector(".emailLableErr");
        emailLable.removeAttribute('style');
        emailLable.innerText="Email";
        let fnameLable=document.querySelector(".fnameLableErr");
        fnameLable.removeAttribute('style');
        fnameLable.innerText="First Name";
        let lnameLabel=document.querySelector(".lnameLableErr");
        lnameLabel.removeAttribute('style');
        lnameLabel.innerText="Last Name";
        let jobTitleLable= document.querySelector(".jobTitleLableErr");
        jobTitleLable.removeAttribute('style');
        jobTitleLable.innerText="Job Title";
}
///-----------------------------------This is a note... we can pass these object so they will evaluate on PUT---------------------------------------------------------------------
function passCurrentUserInfoInput (){
    return currentUserInfoInput={
        id: userObj.id,
        email: document.querySelector('.iemail').value,
        firstName: document.querySelector('.ifname').value,
        lastName: document.querySelector('.ilname').value,
        jobTitle: document.querySelector('.ititle').value,
        birthday: document.querySelector('.ibirthdate').value
    }
}
function passRenderedUserInfoInput (){
    return renderedUserInfoInput={
        id: userObj.id,
        email: document.querySelector('.email').innerText,
        firstName: document.querySelector('.fname').innerText,
        lastName: document.querySelector('.lname').innerText,
        jobTitle: document.querySelector('.jobtitle').innerText,
        birthday: document.querySelector('.birthdate').innerText
    }
}
let put= async () => {
//-------------------------------Remove previous DOM validation errors

putCallReset();

//this is a note... these check results of validator functions and return that result to end the async
if(emptyInputValidator()==="FIRSTNAME"){
    return "FIRSTNAME";
}else if(emptyInputValidator()==="LASTNAME" ){
    return "LASTNAME";
}else if(emptyInputValidator()==="TITLE" ){
    return "TITLE";
}else if(birthDateValidator()==="YOUNG"){
    return "YOUNG";
}else if(emailValidator()==="EMAIL"){
    return "EMAIL";
}
//----------------------------------------fetch using current user input----------------------------------------------------------------
 let currentUserInfoInput=passCurrentUserInfoInput ();
 let renderedUserInfoInput=passRenderedUserInfoInput ();


 ///---------------------------This is a note...the difference between previous user and current user is stored in history

 let localStorageKey=1;

 propertiesThatChanged=[];
 for(const key in currentUserInfoInput){
        if(currentUserInfoInput[key]!==renderedUserInfoInput[key]){  
                 propertiesThatChanged.push({[key]:renderedUserInfoInput[key]})
                 console.log(propertiesChanged)
             }
          }
  for (let i=0;i<propertiesThatChanged.length;i++){
        let stringfiedHistoryItem=JSON.stringify(propertiesThatChanged[i]);
         let dateUpdated=new Date(Date.now()).toDateString(); 
         console.log(stringfiedHistoryItem)       
           localStorage.setItem(localStorageKey,stringfiedHistoryItem,dateUpdated);  
           localStorageKey+=1;  
   }

//----------------------------------------------------------------------------------------------------------------------------
      const response=await fetch("https://hookb.in/9X8EqV7bpNtENEeQnZpq",{
          method:'PUT',
          headers:{
              "Content-type":"application/json"     //no-cors
                 },
          body:JSON.stringify(currentUserInfoInput)
      });
      const resDataJson=await response.json();

      return [resDataJson,JSON.stringify(currentUserInfoInput)];  
                                                            
    }
    //----------------------------------------------------------------------------------------------------
 ///--------------------Compare Current User Input with Dom

    document.querySelector('.button').addEventListener('click',()=>{put().then(function(data){
        if(data==="YOUNG"){
            let bDayBox=document.querySelector(".ibirthDate");            //BOX BORDER
                bDayBox.style="border:3px solid red";
            let bDayMsg=document.querySelector(".birthdateLableErr");     //TEXT ERROR
                bDayMsg.style="color:red;font-weight:bold;";
                bDayMsg.innerText="Must be at least 18 years old to submit this form...";
        }else if(data==="EMAIL"){
            let emailBox =document.querySelector(".iEmail");
                emailBox.style="border:3px solid red";
            let emailMsg=document.querySelector(".emailLableErr");
                emailMsg.style="color:red;font-weight:bold;";
                emailMsg.innerText="Invalid Email format... Please correct";
        }else if(data==="FIRSTNAME"){
            let fnameBox= document.querySelector(".ifname");
                fnameBox.style="border:3px solid red";
            let fnameMsg=document.querySelector(".fnameLableErr");
                fnameMsg.style="color:red;font-weight:bold;";
                fnameMsg.innerText="Please fill out the first name field";
        }else if(data==="LASTNAME"){
            let  lnameBox=document.querySelector(".ilname");
                lnameBox.style="border:3px solid red";
            let lnameMsg=document.querySelector(".lnameLableErr");
                lnameMsg.style="color:red;font-weight:bold;";
                lnameMsg.innerText="Please fill out the last name field";
        }else if(data==="TITLE"){
            let titleBox=document.querySelector(".ititle");
                titleBox.style="border:3px solid red";
            let titleMsg=document.querySelector(".jobTitleLableErr");
                titleMsg.style="color:red;font-weight:bold;";
                titleMsg.innerText="Please fill out the Job Title field";
        }else{
            let newUserInfo=JSON.parse(data[1]);
          
            // data passed is array promise returned contains succesfull response object from fetch as well as obj of items passed to fake API
            function finalizeData(pb,cb){
                pb();
              let submitPopUp=document.querySelector('.submitPopUp');
              submitPopUp.addEventListener('click',function(){
                cb();
              })
            }
            function pobUpBoxSetUp(){
                let popUp=document.querySelector('.popBox');
                document.querySelector(".popupFname").innerText=newUserInfo.firstName;            ///popupLname    popupEmail  jobTitle   birthdate
                document.querySelector(".popupLname").innerText=newUserInfo.lastName;
                document.querySelector(".popupEmail").innerText=newUserInfo.email;
                document.querySelector(".popupJobTitle").innerText=newUserInfo.jobTitle;
                document.querySelector(".popupBirthdate").innerText=newUserInfo.birthday;
                popUp.style.display="flex";
                
            }
            function updateUser(){
              document.querySelector(".fname").innerText=newUserInfo.firstName;
              document.querySelector(".lname").innerText=newUserInfo.lastName; 
              document.querySelector(".email").innerText=newUserInfo.email; 
              document.querySelector(".jobtitle").innerText=newUserInfo.jobTitle;
              document.querySelector(".birthdate").innerText=newUserInfo.birthday;
            }

            finalizeData(pobUpBoxSetUp,updateUser);
        }
    },function(error){ 
        //console.log("hello");
       // console.log("this is err" + error)
    }  //  not quite sure how the "reject" could be called in the async function which fires the 2nd function of .then      
)                                                                            //....seems to fire if any error is found in the asyn fn() and wrap it in promise
});
    