

const Redimesionamento:Function= function(size:number,width:number=1440):string{
    return(
        `${(size/width)*100}vw`
    )}

export {Redimesionamento}