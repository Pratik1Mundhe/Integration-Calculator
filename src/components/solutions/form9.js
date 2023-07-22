
function Calc9(){
    return (
        <div>
            <p style={{fontSize:'30px'}}>&int; </p>  <p>e<sup>ax</sup>sinbx dx </p>
            <p>In = e<sup>ax</sup>sinbx dx</p>
            <p>In = e<sup>ax</sup>sinbx  /a dx  - b/a&int;e<sup>ax</sup>cosbx</p>
            <p>In = e<sup>ax</sup>sinbx  /a dx  - b/a<sup>2</sup> e<sup>ax</sup>cosbx -  b<sup>2</sup>/a<sup>2</sup> e<sup>ax</sup>sinbx</p>
            <p>In = e<sup>ax</sup>sinbx  /a dx  - b/a<sup>2</sup> e<sup>ax</sup>cosbx -  b<sup>2</sup>/a<sup>2</sup> In</p>
            <p>In +   b<sup>2</sup>/a<sup>2</sup> In= e<sup>ax</sup>sinbx  /a dx  - b/a<sup>2</sup> e<sup>ax</sup>cosbx </p>
            <p>In ( 1 + b<sup>2</sup>/a<sup>2</sup> )= e<sup>ax</sup>sinbx  /a dx  - b/a<sup>2</sup> e<sup>ax</sup>cosbx </p>
            <p>In = ( e<sup>ax</sup>sinbx  /a dx  - b/a<sup>2</sup> e<sup>ax</sup>cosbx ) / ( 1 + b<sup>2</sup>/a<sup>2</sup> )</p>
        </div>
    )

}



export default Calc9;

