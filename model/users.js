let userList =[]
module.exports= class Users{
    constructor(name) {
        this.name=name
    }
    save(){
        userList.push(this)
    }
    static findAll(){
        return userList;
    }
    static deleteByTitle(title){
        const newList=userList.filter(test=>test.title !==title)
        userList=newList;

    }
}
