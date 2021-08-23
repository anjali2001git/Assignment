 import React,{useState} from 'react';
const FormInputs=()=>{
    const [data, setData] = useState({
     uname: "",
     monthdays: "",
     availablefordays: "",
     bandscore: ""
    });
const [record, setRecord] = useState([]);

    const handleInput=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      console.log(name,value);
      setData({...data,
        [name]:value});
  }

const handleSubmit=(e)=>{
   e.preventDefault();
   const newRecord={...data,id:new Date().getTime().toString()};
   console.log(record);
   setRecord([...record,newRecord]);
   console.log(record);

   setData({uname: " ",monthdays:  " ",availablefordays:  " ",bandscore: " "})
}

    return(
        <>
        <div className="main-div">
            <div className="inside-div">
          <form action="" onSubmit={handleSubmit}>
            <div className="input_form">
                <label htmlFor="uname">Name :</label>
                <input type="text" autoComplete="off" placeholder="Enter Your Name" value={data.uname} onChange={handleInput} name="uname" id="uname"/>
            </div>
            <div className="input_form">
                <label htmlFor="monthdays">Month Days :</label>
                <input type="text" autoComplete="off"  placeholder="Total no.of days" value={data.monthdays} onChange={handleInput} name="monthdays" id="monthdays"/>
            </div>
            <div className="input_form">
                <label htmlFor="availablefordays">Available :</label>
                <input type="text" autoComplete="off" placeholder="Available for days" value={data.availablefordays} onChange={handleInput} name="availablefordays" id="availableForDays"/>
            </div>
            <div className="input_form">
                <label htmlFor="bandscore">Band Score :</label>
                <input type="text" autoComplete="off" placeholder="Your Grade" value={data.bandscore} onChange={handleInput} name="bandscore" id="bandscore"/>
            </div>
            <div className="button_pos">
            <button className="btn" type="submit">ADD INFO</button>
            </div>
          </form>
        
             <div className="data">
                 {record.map((curEle)=>{
                     return(<div className="showDataStyle" key={curEle.id}>
                         <p>{curEle.uname}</p>
                         <p>{curEle.monthdays}</p>
                         <p>{curEle.availablefordays}</p>
                         <p>{curEle.bandscore}</p>
                      </div>
                    );
                 })

                 }
                 </div>
             </div>
             </div>
        </>
    );

}
export default FormInputs;