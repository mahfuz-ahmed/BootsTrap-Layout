import React from 'react';
import './Grid.css'
const Grid = () => {
    return (
        <div className='container'>
            {/* row */}
            <div className="row">
                <div className="col-12 col-md-4">1</div>
                <div className="col-12 col-md-6">2</div>
                <div className="col-12 col-md-2">3</div>
                <div className="col-12 col-md-12">4</div>                               
            </div>

            {/* Input form and select form */}
            <div className='container'>
                <label for="text1">User Full Name</label>
                <input type="password" placeholder='Password' id="ps1" className='form-control' />

                <select name="" id="" className='form-select mt-3'>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>   

            {/* button  */}
            <div className='container'>
                <button className='btn btn-primary mt-3'>Click Me</button> <br />
                <button className='btn btn-danger mt-3 btn-lg'>Click Me</button>
            </div>

            {/* card  */}
            <div className='container pt-3'>
                <div className="card text-end" style={{width:'300px'}}>
                    <img src="https://picsum.photos/300/200" className='card-img-top' alt="" />
                    <div className='card-body'>
                        <h4 className='card-title'>Card Title</h4>
                        <h6 className='card-subtitle'>This is Subtitle</h6>
                        Hello i'm card body
                        <br />
                        <button className='btn btn-danger'>Show Details</button>
                    </div>                   
                </div>
            </div>

            {/* list  */}
            <div className="container mt-3">
                <ul className='list-group list-group-horizontal'>
                    <li className='list-group-item'>1</li>
                    <li className='list-group-item active'>2</li>
                    <li className='list-group-item'>3</li>
                    <li className='list-group-item'>4</li>
                    <li className='list-group-item'>5</li>
                </ul>
            </div>
            
            {/* alert  */}
            <div className='container'>
                <div className="alert alert-warning">Be carefull</div>
                <div className="alert alert-danger">Be carefull</div>
                <div className="alert alert-success">Be carefull</div>
            </div>

            {/* collapse  */}
            <button className='btn btn-primary' data-bs-toggle="collapse" href="#boo">Click me</button>

            <div className="collapse" id="boo">
                <div className="card-body">
                    When you cliked then show this text again clicked hide this text
                </div>
            </div>

            {/* border and rounded */}
            <div className="container mt-3">
                <span className='border border-top-0 border-danger border-3 rounded-end'>Border Check</span>
                <div className='container bg-danger rounded-circle' style={{height:"200px",width:"200px"}}>
                    
                </div>
            </div>

            {/* elements position  */}
            <div className="container d-flex justify-content-end">
                <h5>My first position</h5>
                <h5>My second position</h5>
            </div>
        </div>
    );
};

export default Grid;