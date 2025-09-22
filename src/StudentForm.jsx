import { useFormik } from 'formik';
import React from "react"

 function StudentForm(){
 const studentForm=useFormik({
    initialValues: {
     FirstName:"",
     LastName:"",
     Gender:"",
     Age:0,
     Techs:[ ],
     Country:""   
    },

    // validationSchema:yup.object({
    //   FirstName:yup.string().required("FirstName is Mandatory"),
    //   Gender:yup.string().required(),
    //   LastName:yup.string().required().max(5)
   
    // }),

    onSubmit:(values)=>{
    console.log(values);
  },
})
 return (
    <div>
    <h3>Student Form Here:</h3> 
    {/* <p>{JSON.stringify(studentForm.errors)}</p>   */}
    <form onSubmit={studentForm.handleSubmit}>

    <b>FirstName:</b>   
    <input type="text" name="FirstName" onChange={studentForm.handleChange} onBlur={studentForm.handleBlur}/> 
    {/* <>{studentForm.touched. FirstName && studentForm.errors.FirstName &&(<div>FirstName is Mandatory</div>)}</>
    <>{studentForm.errors.FirstName && (<div>Must be 3 Characters</div>)}</> */}
    <br></br>
    <br></br>
    
    <b>LastName:</b>
    <input type="text" name="LastName" onChange={studentForm.handleChange} />
    <>{studentForm.errors.LastName &&(<div>Max 5 Alhabets</div>)}</>
    <br></br>
    <br></br>

    <b>Gender:</b>
    <input type="radio" name="Gender" value="male" onChange={studentForm.handleChange}/>Male
    <input type="radio" name="Gender" value="female" onChange={studentForm.handleChange}/>Female
    <input type="radio" name="Gender" value="others" onChange={studentForm.handleChange}/>Others
    {/* {studentForm.errors.Gender&& (<div>Please Select the Gneder</div>)} */}
    <br></br>
    <br></br>

    <b>Age:</b>
    <input type="text" name="Age" onChange={studentForm.handleChange} />
    <br></br>
    <br></br>

    <b>Technologies:</b>
    <input type="checkbox" name="Techs" value="HTML" onChange={studentForm.handleChange}/>:HTML
    <input type="checkbox" name="Techs" value="CSS" onChange={studentForm.handleChange}/>:CSS
    <input type="checkbox" name="Techs" value="Javascript" onChange={studentForm.handleChange}/>:Javascript
    <input type="checkbox" name="Techs" value="ReactJs" onChange={studentForm.handleChange}/>:ReactJs
    <input type="checkbox" name="Techs" value="Angular" onChange={studentForm.handleChange}/>:Angular
    <input type="checkbox" name="Techs" value="MernStack" onChange={studentForm.handleChange}/>:MernStack
    <input type="checkbox" name="Techs" value="Bootstrap" onChange={studentForm.handleChange}/>:Bootstrap
    <br></br>
    <br></br>

    <b>Country:</b>
    <select name="Country" onChange={studentForm.handleChange} >
    <option disabled value="">Select your Country</option> 
    <option value="India">INDIA</option>
    <option value="Usa">USA</option>
    <option value="Uk">UK</option>
    <option value="Canada">Canada</option>
    <option value="Australia">Australia</option>
    </select>
    <br></br>
    <br></br>

    <button type="submit">Show Data</button>
    <button onClick={()=>(studentForm.resetForm())} type="reset">ClearForm</button>
     </form>  
     </div>
  )
}
export default StudentForm;