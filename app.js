const express=require('express')
const app=express()


app.get('',(req,res)=>{
  res.send('Home page')
})
app.get('/absentDays',(req,res)=>{
    res.send({
        totalDays: '9 '
    })
  })
  
app.get('/absentDetails',(req,res)=>{
    res.send({
        absentDetails:[{Date:'1/6/21'},{Date:'2/6/21'},{Date:'3/6/21'},{Date:'4/6/21'}]
    })
  })

app.get('/leaveBalance',(req,res)=>{
    res.send({
           leaveBalance:[{CL: '6-31/12/21'},{OH:'3-31/12/21'},{SPL:'10-31/12/21'}]
    })
  })
 
  app.get('/holidayCalender',(req,res)=>{
    res.send({
        holidayCalander:[{IndependeceDay:'15th August/Sunday'},{GaneshChaturthi:'10th September/Friday'},{GandhiJayanti:'2nd October/Saturday'}]
    })
  })
    
    

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})