import React from "react"

const Card = ({country, name, mail}:{country:string, name:string, mail:string}) => {
    return <div className="grid grid-cols-4 gap-2 mt-5">
        <div className="col-span-2 font-bold">
            {country}
        </div>
        <div className="col-span-2 font-bold text-sm"> Email: {mail}</div>
        <div className="col-span-4 text-xs">{name}</div>
        <div className="col-span-4" style={{width: "100%", borderTop: "1px solid #585858"}}/>
    </div>
}

export default Card;