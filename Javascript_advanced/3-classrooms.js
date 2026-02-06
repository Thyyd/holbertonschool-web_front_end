function createClassRoom(numbersOfStudents)
{
    if (typeof numbersOfStudents != "number")
        throw new TypeError("numbersOfStudents doit être un number");
    function studentSeat(seat)
    {
        if (typeof seat != "number")
        throw new TypeError("seat doit être un number");
        return function(){
            return seat
        };
    }
    let students = [];
    for(i = 1; i <= numbersOfStudents; i++)
    {
        students.push(studentSeat(i));
    }
    return students;
}

classRoom = createClassRoom(10);