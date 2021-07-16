import React from 'react'

function Stepper({ active }) {

    return (
        <>
            <div className="stepper">
                <div className="item">
                    <div className={`circle ${active===1 ? "bg-blue" : ""}`}>
                        <p>1</p>
                    </div>
                </div>

                <div className="item">
                    <div className={`circle ${active===2 ? "bg-blue" : ""}`}>
                        <p>2</p>
                    </div>
                </div>

                <div className="item">
                    <div className={`circle ${active===3 ? "bg-blue" : ""}`}> 
                       <p>3</p>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    p{
                        margin:0;
                        text-align:center;
                    }
                    .stepper{
                        position:relative;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                    }
                    .circle{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        padding:1rem;
                        border-radius:50%;
                        border: 2px solid #556EA1;
                        background:#ffffff;
                        z-index:2;
                    }
                    .bg-blue{
                        background-color:#556EA1;
                    }
                    .item{
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                    }
                    .stepper:before{
                        content:"";
                        background-color:#556EA1;
                        position:absolute;
                        top:calc(25% - 1rem);
                        left:0;
                        transform: translateY(-25%);
                        z-index:0;
                        height:0.2rem;
                        width:85%;
                        margin-left:3rem;
                        transition:0.4s ease;    
                    }

                    .text-description{
                        font-family:"mont-semibold"!important;
                        font-size:1.2rem;
                        color:#575650;
                    }
                    .description{
                        padding-top:1rem;
                    }
                    .paragraph-time{
                        font-size:1.1rem;
                        font-family:"mont-light"!important;
                        color: #575650;
                        margin-bottom:0.2rem;
                    }

                    @media (min-width:768px){
                        .stepper:before{
                            width:82.5%;
                            margin-left:4rem;
                        }
                    }
                    @media (min-width:1280px){
                        .paragraph-time{
                            display:flex;
                            justify-content:center;
                        }

                        .paragraph-time p:last-child{
                            margin-left:0.5rem;
                        }
                    }
                `}
            </style>
        </>
    )
}

export default Stepper