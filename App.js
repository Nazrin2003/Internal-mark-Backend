const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/calculate", (request, response) => {
    const name = parseInt(request.body.name)
    const admno = parseInt(request.body.admno)
    const subject = parseInt(request.body.subject)

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
    response.json({ "attendance": attendance, "exam_1_result": exam1Result, "exam_2_result": exam2Result, "assignment": assignmentTot, "internal": internalMark })
})

app.listen("4004", () => {
    console.log("Server Running")
})