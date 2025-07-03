const student_marks = {
    math : 50,
    english : 76,
    physics : 56,
    chemsitory : 75,
    getAvg() {
        let Avg = (this.math + this.english + this.chemsitory + this.physics)/3;
        console.log(Avg)
    }
}