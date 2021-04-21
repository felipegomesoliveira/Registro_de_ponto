import  {hashSync} from 'bcrypt'

export const HashPasswordtransform = {
    to(password:string){
        const salt =  10
        const encripyPasssword = hashSync(password,salt)
        return  encripyPasssword
    },
    from(hash:string):string{
        return hash
    }
}

