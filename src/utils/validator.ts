export function isValidAccount(account: string): boolean{
    if(account == '' || account == undefined || account == null || account.length < 5 || account.length > 20){
        return false;
    } 
    return true;
}