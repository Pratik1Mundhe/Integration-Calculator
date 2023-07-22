
function Calc17(){
    return (
        <div>
                <p style={{fontSize:'40px'}}></p><p > &int;sin<sup>n</sup>xdx</p>
                    In = <p>sin<sup>n-1</sup>sinxdx</p>
                    =<p>-sin<sup>n-1</sup>xcosxdx</p> + <p>&int;(n-1)sin<sup>n-2</sup>xcos<sup>2</sup>xdx</p>
                    =<p>-sin<sup>n-1</sup>xcosxdx</p> - <p>&int;(n-1)sin<sup>n-2</sup>x * sin<sup>2</sup>xdx</p> + <p>&int;(n-1)sin<sup>n-2</sup>x</p>
                    =<p>-sin<sup>n-1</sup>xcosxdx</p> - <p>&int;(n-1)sin<sup>n</sup>xdx</p> + <p>&int;(n-1)sin<sup>n-2</sup>x</p>
                    In + (n-1)In = <p>-sin<sup>n-1</sup>xcosxdx</p> + <p>&int;(n-1)sin<sup>n-2</sup>x</p>
                    nIn = <p>-sin<sup>n-1</sup>xcosxdx</p> + <p>&int;(n-1)sin<sup>n-2</sup>x</p>
                    In = <p>-sin<sup>(n-1)/n</sup>xcosxdx</p> + <p>&int;(n-1)/n I(n-2)</p>

        </div>
    )

}



export default Calc17;

