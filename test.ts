const player: readonly[string, number, boolean] = ["kory", 1, true]
let a:unknown;
if(typeof a === 'number'){
    let b = a + 1
}
function hello():never{
    throw new Error("xxx")
}
function ts(name:string|number){
    if(typeof name === "string"){
        name
    } else if(typeof name === "number"){
        name
    }else{
        //never
        name
    }
}