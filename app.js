function displayPosition(comp, job, desc){
    console.log('* ' + job + ' at ' + comp + " - " + desc);
}

function displaySkill(title, BAM){
    var fullSkill = '* ';
    if(BAM){
        fullSkill += 'BAM: '
    }
    console.log(fullSkill + title);
}
console.log("Chris Stillwell".toUpperCase());
console.log("Career: Full Stack Developer");
console.log("Description: A pretty cool dude");
console.log("My Interests");
console.log("* basketball");
console.log("* dogs");
console.log("* programming");
console.log("* movies");
console.log('My Previous Experience: ');
displayPosition('Fidelity','Advisor','Talked to people about money');
displayPosition('Schwab','Margins','Talked to people about not being silly with thier money');
displayPosition('Schwab','Fixed Income', 'Talked to people about being safe with money');
console.log('My Skills');
displaySkill('Javaskript', true);
displaySkill('Consuming Food', false);
displaySkill('Raising eyebrow at kids', true);
displaySkill('Walking the dogs', true);
displaySkill('HTML', true);
displaySkill('sleeping', false);

