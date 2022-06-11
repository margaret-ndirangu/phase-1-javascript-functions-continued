// code your solution here

    function saturdayFun(activity="roller-skate") {
        return `This Saturday, I want to ${activity}!`
      }
      
      let mondayWork = function(activity="go to the office") {
        return `This Monday, I will ${activity}.`
      }
      
      const wrapAdjective = (param1="*")=> {
        return function(wraps="||") {
          return (`You are ${param1}${wraps}${param1}!`)
        }
      }
      //wrapAdjective("%")("a dedicated programmer");
     // wrapAdjective("%")("a dedicated programmer");
       
