const studentDatabase = {
  "PASCAL.J3": {
    id:"EVAJS301",
    name:"GABRIEL PASCAL",
    class:"JS3",
    session:"2025/2026",
    photo:"images/john.jpg",
    position:"2nd",
    attendance:"1/11",
    dateIssued:"11 April 2026",
    nextTerm:"15 September 2026",
    results:{
      "Second":[
        {subject:"English Language",score:76},
        {subject:"Mathematics",score:85},
        {subject:"Civic Education",score:74},
        {subject:"Agricultural Science",score:81},
        {subject:"Intermediate Science",score:88},
        {subject:"Digital Technology",score:92}
      ]
    }
  },
  "KINGSLEY.J3": {
    id:"EVAJS302",
    name:"ONYEKACHI KINGSLEY",
    class:"JS3",
    session:"2025/2026",
    photo:"images/john.jpg",
    position:"4th",
    attendance:"1/11",
    dateIssued:"11 April 2026",
    nextTerm:"15 September 2026",
    results:{
      "Second":[
        {subject:"English Language",score:76},
        {subject:"Mathematics",score:85},
        {subject:"Civic Education",score:74},
        {subject:"Agricultural Science",score:81},
        {subject:"Intermediate Science",score:88},
        {subject:"Digital Technology",score:92}
      ]
    }
  }
};

function grade(score){
  if(score>=70) return "A";
  if(score>=60) return "B";
  if(score>=50) return "C";
  if(score>=45) return "D";
  if(score>=40) return "E";
  return "F";
}

function checkResults(){
  const id=document.getElementById("studentId").value.trim().toUpperCase();
  const session=document.getElementById("session").value;
  const term=document.getElementById("term").value;

  const resultCard=document.getElementById("resultCard");
  const error=document.getElementById("errorMsg");
  const body=document.getElementById("tableBody");

  resultCard.classList.add("hidden");
  error.classList.add("hidden");
  body.innerHTML="";

  if(!id||!session||!term){
    alert("Please complete all fields.");
    return;
  }

  const student=studentDatabase[id];
  if(!student || !student.results[term]){
    error.classList.remove("hidden");
    return;
  }

  document.getElementById("studentPhoto").src=student.photo;
  document.getElementById("resName").textContent=student.name;
  document.getElementById("resId").textContent=student.id;
  document.getElementById("resClass").textContent=student.class;
  document.getElementById("resSession").textContent=session;
  document.getElementById("resTerm").textContent=term+" Term";
  document.getElementById("position").textContent=student.position;
  document.getElementById("attendance").textContent=student.attendance;
  document.getElementById("dateIssued").textContent=student.dateIssued;
  document.getElementById("nextTerm").textContent=student.nextTerm;

  let total=0;
  student.results[term].forEach((s,i)=>{
    total+=s.score;
    body.innerHTML+=`<tr><td>${i+1}</td><td>${s.subject}</td><td>${s.score}</td><td>${grade(s.score)}</td></tr>`;
  });

  const avg=(total/student.results[term].length).toFixed(2);
  document.getElementById("totalScore").textContent=total;
  document.getElementById("averageScore").textContent=avg;

  let overall,status,tRemark,pRemark;
  if(avg>=70){overall="A";status="PASS";tRemark="Excellent Performance";pRemark="Promoted";}
  else if(avg>=60){overall="B";status="PASS";tRemark="Very Good";pRemark="Promoted";}
  else if(avg>=50){overall="C";status="PASS";tRemark="Good";pRemark="Promoted";}
  else if(avg>=40){overall="D";status="PASS";tRemark="Fair";pRemark="Promoted on Trial";}
  else{overall="F";status="FAIL";tRemark="Poor";pRemark="Repeat Class";}

 document.getElementById("overallGrade").textContent = overall;
document.getElementById("status").textContent = status;
document.getElementById("teacherRemark").textContent = tRemark;
document.getElementById("principalRemark").textContent = pRemark;

resultCard.classList.remove("hidden");
}
 
