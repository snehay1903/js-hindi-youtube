class User{
    constructor(email , password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this._password}sneha`
    }

    set password(value){
        this._password = value
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}
const sneha = new User ("sneha@gmail.com" , "Sneha123")
console.log(sneha.email);