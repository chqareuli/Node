var customers = [
    {id:1,name:'Vivek',email:'vivek@abcd.com',phone:'1234567899', address:'India'},
    {id:2,name:'Rama',email:'rama@abcd.com',phone:'wwwww', address:'Asia'},
  ];

const getCustomer = ()=>(customers);
const addCustomer = (customer)=>{
    customer.id = Date.now();
    customers.push(customer);
};

const updateCustomer = (customer)=>{
    console.log(">> updateCustomer ",customer);
    customers.map((record,index)=>{
        if(record.id == customer.id){
            customers[index] = customer;
        }
    })
};
const getCustomerById = (id)=>{
    let temp = customers.filter((record)=>(record.id == id))
    return temp[0];
};
const deleteCustomer = (customer)=>{
    let temp = customers.filter((record)=>(record.id != customer.id))
    customers = temp;
};

////////////// Products
var productList = [
    {id:1,name:'product 1', price:'1.1'}
];

const getProducts = ()=>(productList);

const addProducts = (product)=>{
    product.id = Date.now();
    productList.push(product);
};

const updateProducts = (product)=>{
    console.log("update product",product);
    productList.map((record,index)=>{
        if(record.id == product.id){
            productList[index] = product;
        }
    })
};

const getProductsById = (id)=>{
    let temp = productList.filter((record)=>(record.id == id))
    return temp[0];
};

const deleteProducts = (product)=>{
    let temp = productList.filter((record)=>(record.id != product.id))
    productList = temp;
};

module.exports = {
    getCustomer,addCustomer,updateCustomer,deleteCustomer,getCustomerById,
    getProducts, addProducts, updateProducts, getProductsById, deleteProducts
};