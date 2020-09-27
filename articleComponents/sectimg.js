

const Sectimg=(props)=>{
    return(
        <section id="sectionImage">
    <div  className='container'>
        <img src={props.article.image} alt="blogimg" border="0"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur libero id faucibus nisl tincidunt. Facilisi etiam dignissim diam quis enim lobortis. Elit eget gravida cum sociis natoque.
            Purus gravida quis blandit turpis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Metus vulputate eu scelerisque felis.
            Donec ac odio tempor orci. Nam aliquam sem et tortor consequat. Maecenas volutpat blandit aliquam etiam. Ac tortor dignissim
            convallis aenean et tortor. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Integer quis auctor elit sed
            vulputate mi sit.</p>
            <div id="dots">. . .</div>
    </div>
</section>
    )
}

export default Sectimg