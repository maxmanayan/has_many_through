
const List = (props)=>{
    const {name,  data, renderData} = props
    return(
        <>
        <h1>{name}</h1>
        <div>
            {data.map( d => renderData ? renderData(d) : JSON.stringify(d, null, 2) )}
        </div>
        </>
    )
}

export default List