//https://github.com/yankovalenko94/JS_task_answers/blob/master/Tests/1_objects/objects_1.js


const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ['ru', 'eng'],
     programmingLangs:  {
      js: '20%',
      php: '10%'
    },
    exp: '1 month'
  },
  showAgeAndLangs: function (plan) {
    let age = plan.age;
    let str = `Мне ${age} и я владею языками: `;

    plan.skills.languages.forEach(function(lang) {
      str += `${lang.toUpperCase()} `;
    });
    return str;
  }
}
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))

//personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// function showExperience(plan) {
//   const {exp} = plan.skills;
//   return exp;
// }

//console.log(showExperience(personalPlanPeter))


function showProgrammingLangs(plan) {
  let str =''
  const {programmingLangs} = plan.skills;
  console.log(typeof programmingLangs)
  if (typeof programmingLangs === 'object') {
    console.log(Object.keys(programmingLangs).length)
    for (let i in programmingLangs) {
      str += `Язык ${i} изучен на ${programmingLangs[i]}\n`;
    }
    console.log(str)
  } else {
    return str
    console.log(str)
  }
}

showProgrammingLangs(personalPlanPeter)


// function showProgrammingLangs(plan) {
//   let str = '';
//   const {programmingLangs} = plan.skills;
//   console.log(programmingLangs)
//   for (let key in programmingLangs) {
//     str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//   }
//
//   return str;
// }
//
// console.log(showProgrammingLangs(personalPlanPeter));