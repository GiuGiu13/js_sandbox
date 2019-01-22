/** 
* @versino 2.0.0
* @author Giusy
* @license MIT
*
**/

class EasyHTTP{
    //make an HTTP GET Request
  async get(url){
    let response = await fetch(url);
    let resData = await response.json();
    return resData;
        
    } 

    //make an HTTP POST Request
    async post(url, data){
        let  response = await fetch(url, {
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            let resData = await response.json();
            return resData;
        
    } 
    //make an HTTP PUT Request
     async put(url, data){
       let response =  await fetch(url, {
                method: 'PUT',
                headers:{
                    'Content-type': 'aplication/json'
                },
                body: JSON.stringify(data)
            });

            let resData = await response.json();
            return resData;
    } 
    //make an HTTP DELETE Request
    async delete(url){
        let response = await fetch(url, {
                method: 'DELETE',
                headers:{
                    'Content-type': 'aplication/json'
                }
            })
            let resData = await 'Resources deleted';
            return resData;
    } 


}