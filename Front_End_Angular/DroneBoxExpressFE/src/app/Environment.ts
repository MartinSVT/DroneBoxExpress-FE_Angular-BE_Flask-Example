// User API Endpoints
export const loginURL = "http://localhost:8000/api-token-auth"
export const userDetailsURL = "http://127.0.0.1:8000/get-details"
export const registerURL = "http://127.0.0.1:8000/register"
// requires PK //
export const userUpdateURL = "http://127.0.0.1:8000/update/"
export const userDeleteURL = "http://127.0.0.1:8000/delete/"
// Orders API Endpoints - requires PK for PUT DELETE and GET(individual details)
export const OrdersURL = "ENDPOINThttp://127.0.0.1:8000/customer/orders"
// Routes API Endpoints - requires PK for PUT DELETE and GET(individual details)
export const RoutesURL = "ENDPOINThttp://127.0.0.1:8000/staff/routes"
// Airports API Endpoints - requires PK for PUT DELETE and GET(individual details)
export const AirportsURL = "ENDPOINThttp://127.0.0.1:8000/staff/airports"

// News Articles API Endpoints - requires PK for PUT DELETE and GET(individual details)
export const ListNewsURL = "ENDPOINThttp://127.0.0.1:8000/staff/news"
export const AddNewsURL = "ENDPOINThttp://127.0.0.1:8000/staff/addNews/"
