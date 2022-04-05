let studentList=[]
const populateStudent=()=>{
  studentList.push({name:"Adeyemi",email:"odofin@swipe.ng", firstname:"test1"})
  studentList.push({name:"Ajede",email:"ajede@swipe.ng", firstname:"Lanre"})
  studentList.push({name:"Daniel",email:"akanmu@swipe.ng",firstname:"Akanmu"})
  studentList.push( {name:"Funmi",email:"layo@swipe.ng",firstname:"Layo"})

}
module.exports = {
  login: (req, res, next) => {
    res.render("login");
  },
  index:(req, res, next)=>{
    if(studentList.length==0)
      populateStudent()

    res.render("index",{data:studentList})
  },

  home:(req, res, next)=>{
    if(studentList.length==0)
      populateStudent()

    res.render("home/dashboard",{data:studentList})
  },

  processLogin: (req, res, next) => {
    const user = { username: "odofin", email: "odofin@swipe.ng" };
    res.render("dashboard", { userDetail: user });
  },

  signup: (req, res, next) => {
    res.render("signup");
  },
};
