
function Calc16(){
    return (
        <div>
            
            <p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} > __  &#8731;(1-x) dx_</p><p style={{textDecoration:'overline'}} >x&#8731;(1+x) </p>
            <p>let t <sup>3</sup> = 1-x / 1+x </p>
            <p>t<sup>3</sup>+1/t<sup>3</sup>-1 = 1/-x</p>
            <p>x = 1-t<sup>3</sup> / 1+t<sup>3</sup></p>
            <p>dx = (1+t<sup>3</sup> - 1+t<sup>3</sup>) / (1+t<sup>3</sup>)<sup>2</sup>   3t<sup>2</sup>dt</p>
            <p>dx = 2t<sup>3</sup> / (1+t<sup>3</sup>)<sup>2</sup> 3t<sup>2</sup>dt</p>
            ={'>'}<p style={{fontSize:'40px'}}>&int;</p><p style={{textDecoration:'underline'}} > __  &#8731;(1-x) dx_</p><p style={{textDecoration:'overline'}} >x&#8731;(1+x) </p>
            =<p>3t<sup>6</sup>/(1+t<sup>3</sup>)(1-t<sup>3</sup>)</p>
            =<p>3t + 3/2&int;[ 1/(1+t<sup>3</sup>) + 1/(1-t<sup>3</sup>) ]</p> 
            <p> rest is basic integration</p>
        </div>

    )

}



export default Calc16;










