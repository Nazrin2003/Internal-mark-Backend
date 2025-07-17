const mongoose = require("mongoose")
const examSchema = mongoose.Schema(
    {
        name:String,
        admno:String,
        subject:String,
        present:String,
        totalDays:String,
        attendance:String,

        exam1:String,
        exam1Total:String,
        exam1Result:String,

        exam2:String,
        exam2Total:String,
        exam2Result:String,

        assignment1:String,
        assignment2:String,
        assignmentTot:String,
        internalMark:String

    }
)
const examModel=mongoose.model("internalMarks",examSchema)
module.exports = examModel