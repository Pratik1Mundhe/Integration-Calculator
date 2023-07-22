function Calc12(){
    return (
        <div>
            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} >__ x dx_</p><p>(1-x<sup>4</sup>)<sup>3/2</sup></p>
            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} >__ dx __</p><p>x<sup>5</sup>(1/x<sup>4</sup> - 1)<sup>3/2</sup></p>
            <p>let t<sup>2</sup> = (1/x<sup>4</sup> - 1)</p>
            <p>2tdt  = -4(1/x<sup>5</sup>)dx</p>

            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} >__-tdt_</p><p>2t<sup>3</sup></p>
            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} >__-dt__</p><p>2t<sup>2</sup></p>
            <p style={{fontSize:'40px'}}>&int;</p><p> 1/2t  + c</p>
        
        </div>
    )

}



export default Calc12;


