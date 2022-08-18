const ListeElemani = ({liste_elemani}) =>{

    return (
        <div style={{display:'inline-block', width:'100%', height:'60px', background:'yellow'}}>
            <div style={{float:'left'}}>ID:{liste_elemani.id}</div>
            <div style={{float:'right'}} >Title:{liste_elemani.title}</div>
        </div>
    )
}

export default ListeElemani