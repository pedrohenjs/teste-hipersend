import React from 'react'
import ReactDOM from 'react-dom/client'
import { apiGet } from './api/axios'
import App from './App'

apiGet().then((response) => {
    console.log(response.data, 'aaaaaaaaaaaaaa')
    if (!response.data) {
        response.data = {
            isActive: false,
            send: false,
            days: []
        }
    }
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <App data={response.data} />
    )

})

