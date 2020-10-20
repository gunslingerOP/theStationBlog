

const Sect3=(props)=>{
    return(
        <section id="par1">
     <div dangerouslySetInnerHTML={{__html:props.article.text}}/>
        
        </section> 
    )
}

export default Sect3