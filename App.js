const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const examModel = require("./models/Exam")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect("mongodb+srv://Nazrin2003:nazrin2003@cluster0.62ddoa0.mongodb.net/internalMarkDb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/calculate", (request, response) => {
    const name = (request.body.name)
    const admno = parseInt(request.body.admno)
    const subject = (request.body.subject)

    const present = parseInt(request.body.present)
    const totalDays = parseInt(request.body.totalDays)
    const attendance = (present / totalDays) * 8

    const exam1 = parseInt(request.body.exam1)
    const exam1Total = parseInt(request.body.exam1Total)
    const exam1Result = exam1 / exam1Total * 10

    const exam2 = parseInt(request.body.exam2)
    const exam2Total = parseInt(request.body.exam2Total)
    const exam2Result = exam2 / exam2Total * 10


    const assignment1 = parseInt(request.body.asg1)
    const assignment2 = parseInt(request.body.asg2)
    const assignmentTot = assignment1 + assignment2


    const internalMark = attendance + exam1Result + exam2Result + assignmentTot
    response.json({ "name": name, "admno": admno, "subject": subject, "attendance": attendance, "exam_1_result": exam1Result, "exam_2_result": exam2Result, "assignment": assignmentTot, "internal": internalMark })


    let data_store = new examModel(
        {
            name: name,
            admno: admno,
            subject: subject,
            present: present,
            totalDays: totalDays,
            attendance: attendance,

            exam1: exam1,
            exam1Total: exam1Total,
            exam1Result: exam1Result,

            exam2: exam2,
            exam2Total: exam2Total,
            exam2Result: exam2Result,

            assignment1: assignment1,
            assignment2: assignment2,
            assignmentTot: assignment2,
            internalMark:internalMark

        }

    )
    data_store.save()

})


app.get("/viewall",(request,response)=>{
    examModel.find().then(
        (items)=>{
            response.json(items)
        }
    ).catch()
})



app.listen("4005", () => {
    console.log("Server Running")
})