
const routes = {
    home: '/',
    singleVehicle: '/singleVehicle/:vehicleId',
    hireVehiclePage:'/hireVehicle/:vehicleId',
    profile: '/profile/:cusUsername',
    changeToStore: '/changeToStore/:cusUsername',
    store: '/store/:cusUsername',
    ManagerStore: '/managerStore/:storeId',
    HireRequired: '/hireRequired/:storeId',
    StoreInformation: '/managerStore/information/:storeId',
    addVehicle: '/addVehicle/:storeId',
    search: '/search/:addressId/:minPrice/:maxPrice',
    history: '/history/:cusUsername',
    revenue: '/revenue/:storeId',
    live: '/live',
    allVehicle: '/allVehicle',
    payment: '/payment',
    editProfile: '/editProfile/:cusUsername',

}

export default routes;