
function Calc15(){
    return (
        <div>
            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} >____dx_____</p><p style={{textDecoration:'overline'}} > &radic;x+1 - &#8732;x+1</p>
            <p>let t<sup>4</sup> = x+1</p>
            <p> 4t<sup>3</sup>dt = dx</p> 
            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} >____4t<sup>3</sup>dt_____</p><p> t<sup>2</sup> - t</p>
            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} >____4t<sup>2</sup>dt_____</p><p> t - 1</p>
            <p style={{fontSize:'40px'}}>&int;</p><p>2t<sup>2</sup> + 4t + 4ln(t-1)</p>


        </div>
    )

}



export default Calc15;

