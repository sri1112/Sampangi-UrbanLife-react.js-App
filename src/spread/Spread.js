function Sp({arr}){
    return(
        <div>
            <ol>
                {arr.map(x => <li>{x}</li>)}
            </ol>
        </div>
    );
}
function Spread(){
    const arr = [1, 2, 3, 4, 5, 6]
    return(
        <div>
            <Sp {...{arr}} />
        </div>

    )
}
export default Spread;