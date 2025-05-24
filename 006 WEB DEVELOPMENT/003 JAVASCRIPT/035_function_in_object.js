const student = {
    fulName : "abc xyz",
    marks : 50.6,
    printMarks: function () {
        console.log("marks = ", this.marks);
    },
};
student.printMarks();