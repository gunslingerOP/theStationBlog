

const Sectimg=(props)=>{
    return(
        <section id="sectionImage">
    <div  className='container'>
        <img className="artImg" src={props.article.image} alt="blogimg" border="0"/>
            <div id="dots">. . .</div>
    </div>
</section>
    )
}

export default Sectimg