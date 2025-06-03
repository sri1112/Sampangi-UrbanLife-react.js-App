function HighOdder(){
    function add(x, y){
        document.write(x+y);
    }
    function sub(x, y){
        document.write(x-y)
    }
    function oparation(odd, a, b){
        odd(a, b);

    }
    oparation(add, 10, 20);
    // oparation(sub, 10, 20);
    return(
        <div>
            <h3>sub :: {x+y}</h3>
        </div>
    )
}
export default HighOdder;