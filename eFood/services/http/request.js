module.exports = {
  baseUrl: `http://192.168.179.232:6500/apiv1`,
  vendors: {
    create: "/vendors/create",
    get: "/vendors/get",
    update: "/vendors/update",
    delete: "/vendors/delete",
  },
  foodPath: {
    create: "/food/create",
    get: "/food/get",
    getByName: "/food/get-by-name",
    update: "/food/update",
    delete: "/food/delete",
  },
  customers: {
    create: "/customers/create",
    get: "/customers/get",
    getByName: "/customers/getId",
    update: "/customers/update",
    delete: "/customers/delete",
  },
  locations: {
    create: "/locations/create",
    get: "/locations/get",
    update: "/locations/update",
    delete: "/locations/delete",
  },
  orders: {
    create: "/orders/create",
    get: "/orders/get",
    getUnique: "/orders/get-unique",
    getByCustomer: "/orders/get-by-customer",
    update: "/orders/update",
    delete: "/orders/delete",
    token: "/orders/token",
  },
  foodLists: {
    create: "/foodList/create",
    get: "/foodList/get",
    update: "/foodList/update",
    delete: "/foodList/delete",
    getByVendor: "/foodList/get-by-vendors",
  },
  authenticate: {
    authentication: "/authenticate",
  },
  register: {
    register: "/register",
  },
};
