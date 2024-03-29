document.getElementById('button1').addEventListener('click', loadCostumer);
document.getElementById('button2').addEventListener('click', loadCustomers);


//load customer
function loadCostumer(e){
    let xhr =  new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {
        if(this.status === 200){
            // console.log(this.responseText);

            let customer = JSON.parse(this.responseText);

            let output = `
                <ul>
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
                </ul>
            `;
            document.getElementById('customer').innerHTML = output;

        }
    }

    xhr.send();
}

// Load Customers
function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', 'customers.json', true);
  
    xhr.onload = function(){
      if(this.status === 200) {
        // console.log(this.responseText);
  
        let customers = JSON.parse(this.responseText);
  
        let output = '';
  
        customers.forEach(function(customer){
          output += `
          <ul>
            <li>ID: ${customer.id}</li>
            <li>Name: ${customer.name}</li>
            <li>Company: ${customer.company}</li>
            <li>Phone: ${customer.phone}</li>
          </ul>
        `;
        });
  
        document.getElementById('customers').innerHTML = output;
      }
    }
  
    xhr.send();
  }