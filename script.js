const form = document.querySelector('.sub');

const contact = (n,e,p)=>{
let name = n;
let mail = e;
let phone = p;


}

form.addEventListener('submit', e =>{
   e.preventDefault();

   const nam = form.name.value;
   const nu = form.phone.value;
   const em = form.email.value;

   const cont = contact(nam, em, nu);
   
   console.log('DONE');
});