class studentHogwarts
{
    #privateScore = 0;
    #name = null;
    #changeScoreBy(points)
    {
        this.#privateScore += points;
    }

    setName(newName)
    {
        if (typeof newName != "string")
            throw new TypeError("newName doit être un string");
        this.#name = newName;
    }

    rewardStudent()
    {
        this.#changeScoreBy(1);
    }

    penalizeStudent()
    {
        this.#changeScoreBy(-1);
    }

    getScore()
    {
        return(this.#name + ": " + this.#privateScore);
    }
}

let i;
/* Creation of the instance named harry */
let harry = new studentHogwarts();
harry.setName("Harry");
for(i = 0; i < 4; i++)
    harry.rewardStudent();
console.log(harry.getScore());

/* Creation of the instance named draco */
let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for(i = 0; i < 3; i++)
    draco.penalizeStudent();
console.log(draco.getScore());