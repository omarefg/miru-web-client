import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { SnackbarProvider } from 'notistack'
import './index.css'
import 'typeface-roboto'
import App from './App'
import Store from './store'
import * as serviceWorker from './utils/service-workers/serviceWorker'

ReactDOM.render(
    <Provider store={Store}>
        <SnackbarProvider hideIconVariant>
            <App/>
        </SnackbarProvider>
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
