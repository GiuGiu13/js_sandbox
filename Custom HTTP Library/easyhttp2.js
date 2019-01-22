/** 
* @versino 2.0.0
* @author Giusy
* @license MIT
*
**/

class EasyHTTP{
    //make an HTTP GET Request
    get(url){
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
        
    } 

    //make an HTTP POST Request
    post(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers:{
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
        
    } 
    //make an HTTP PUT Request
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers:{
                    'Content-type': 'aplication/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
        
    } 
    //make an HTTP DELETE Request
    delete(url){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers:{
                    'Content-type': 'aplication/json'
                }
            })
                .then(res => res.json())
                .then(() => resolve('resources deleted...'))
                .catch(err => reject(err));
        });
        
    } 


}