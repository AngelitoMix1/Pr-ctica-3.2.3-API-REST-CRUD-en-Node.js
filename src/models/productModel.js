let products = [];
module.exports = {
  all: ()=> products,
  find: id => products.find(p => p.id === id),
  create: p => { p.id = Date.now().toString(); products.push(p); return p; },
  update: (id, data)=> {
    const i = products.findIndex(p=>p.id===id);
    if(i===-1) return null;
    products[i] = { ...products[i], ...data };
    return products[i];
  },
  remove: id => { products = products.filter(p=>p.id!==id); }
};