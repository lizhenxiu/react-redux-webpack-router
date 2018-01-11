import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from 'reduxes/store'
import router from 'routers'
const renders = Component =>
    render(
        <Provider store={store}>
            <Component />
        </Provider>,
        document.getElementById('root')
    )
renders(router)