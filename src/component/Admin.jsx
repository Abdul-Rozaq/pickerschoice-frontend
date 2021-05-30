import React from 'react'
import { Switch } from 'react-router'
 
const Admin = () => {
    const handleLogout = () => {
        sessionStorage.removeItem("token");
    }
    
    return (
        <div className="admin">
            <div className="admin__header">
                <h3>Hi, admin</h3>
                <p onClick={handleLogout}>Logout</p>
            </div>

            <div className="admin__content">
                <Switch> 
                    {/* <Route path="/admin/customers" component={AdminCustomer} /> */}
                    {/* <ProtectedRoute
                        exact
                        path="/admin/customers"
                        component={AdminCustomer}
                        role="ROLE_ADMIN"
                    /> */}
                    {/* <Route path="/admin/orders/:orderId?" component={AdminOrders} /> */}
                    {/* <Route path="/admin/products/new" component={ProductCreate} /> */}
                    {/* <Route path="/admin/products/edit/:productId" component={ProductEdit} /> */}
                    {/* <Route path="/admin/products" exact component={AdminProducts} /> */}
                    {/* <Route path="/admin" exact component={AdminDashboard} /> */}
                </Switch>
            </div>
        </div>
    )
}

export default Admin
