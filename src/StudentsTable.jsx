import React from 'react'
import students from './assets/students.json'

function StudentsTable(){
    var [allstudents,setallStudents]=React.useState([...students])

    function abc(){
        var temp=[...students];
        temp.sort((a,b)=>{
         if(a.name>b.name){return 1}
         else{return -1}
        })
        setallStudents([...temp])
    }

    function pqr(){
        var temp=[...students];
        temp.sort((a,b)=>{
         if(a.age>b.age){return 1}
         else{return -1}
        })
        setallStudents([...temp])
    }
    function xyz(){
        var temp=[...students];
        temp.sort((a,b)=>{
         if(a.motherName>b.motherName){return 1}
         else{return -1}
        })
        setallStudents([...temp])
    }
     
    return (
        <div>
        <h3>Students Table Here:</h3>    
        <button onClick={()=>{abc()}}>Sort By Name</button>  
        <button onClick={()=>{pqr()}}>Sort By Age</button>
        <button onClick={()=>{xyz()}}>Sort By FatherName</button> 
        <br></br>
         <br></br>            
        <table  border="2">
            <thead>
                <tr>
                    <td><b>ThumNail</b></td>
                    <td><b>Name</b></td>
                    <td><b>Age</b></td>
                    <td><b>Gender</b></td>
                    <td><b>FatherName</b></td>
                    <td><b>MotherName</b></td>
                </tr>
                </thead>
            {
                allstudents.map((student)=>{
                 return (
                     
                    <tr>
                        {
                            student.gender==='Male' && (<img  width="50px" src="https://icon-library.com/images/male-icon/male-icon-16.jpg"/>)
                        }
                        {
                            student.gender==='Female' && (<img  width="50px" src="https://www.freeiconspng.com/uploads/female-icon-27.png"/>)
                        }
                
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.gender}</td>
                        <td>{student.fatherName}</td>
                        <td>{student.motherName}</td>
                    </tr>
                   
                 )
                })
            }
        </table>
        </div>
     )
}

export default StudentsTable