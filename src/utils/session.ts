
class Session {
    public get(item: any) {
      return localStorage.getItem(item);
    }
    public set(item: any, value: any) {
      return localStorage.setItem(item, value);
    }
    public remove(item: any) {
      return localStorage.removeItem(item);
    }
  }
  
  export const session = new Session();