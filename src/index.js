import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
    return (
        <div className="container border rounded mt-2">
            <div className='row'>
                <div className='col-12'>
                    <h1 className='display-5
                    text-center'>Seus Pedidos</h1>
                </div>
            </div>


            <div className='row'>
                <div className="col-12 col-lg-6 col-xl-4">
                <div className="card">
                <div className="card-header text-muted">22/04/2022</div>
                <div className="card-body d-flex">
                    <div className="d-flex align-items-center">
                    <div className="fa-solid fa-shake fa-hard-drive fa-2x"></div> 
                    </div>

                    <div className="flex-grow-1 ms-2 border">
                        <h4 className="text-center">SSD</h4>
                         <p className="text-center">SSD Kingston A400 - SATA</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header text-muted">22/04/2022</div>
                <div className="card-body d-flex">
                    <div className="d-flex align-items-center">
                    <div className="fa-solid fa-shake fa-hard-drive fa-2x"></div> 
                    </div>

                    <div className="flex-grow-1 ms-2 border">
                        <h4 className="text-center">SSD</h4>
                         <p className="text-center">SSD Kingston A400 - SATA</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header text-muted">22/04/2022</div>
                <div className="card-body d-flex">
                    <div className="d-flex align-items-center">
                    <div className="fa-solid fa-shake fa-hard-drive fa-2x"></div> 
                    </div>

                    <div className="flex-grow-1 ms-2 border">
                        <h4 className="text-center">SSD</h4>
                         <p className="text-center">SSD Kingston A400 - SATA</p>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-header text-muted">22/04/2022</div>
                <div className="card-body d-flex">
                    <div className="d-flex align-items-center">
                    <div className="fa-solid fa-shake fa-hard-drive fa-2x"></div> 
                    </div>

                    <div className="flex-grow-1 ms-2 border">
                        <h4 className="text-center">SSD</h4>
                         <p className="text-center">SSD Kingston A400 - SATA</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
        
    )
}
ReactDOM.render(
 <App />,
 document.querySelector('#root')
)
