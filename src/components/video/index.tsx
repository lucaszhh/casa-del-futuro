import "./video.module.css"

export const Video = () => {
    return(
        <section className="video-container">
            <article className="video">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/ume1Mrhr8Ro" title="Casa del Futuro Godoy Cruz" /* frameborder="0"  */allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" /* allowfullscreen */></iframe>
            </article>
        </section>
    )
}