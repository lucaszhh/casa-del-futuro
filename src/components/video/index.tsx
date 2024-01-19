import "./video.module.css"

export const Video = () => {
    return(
        <section className="video-container">
            <article className="video">
                <iframe title="Video explicación que se hace en la Casa del Futuro" width="100%" height="315" src="https://www.youtube.com/embed/ume1Mrhr8Ro"  /* frameborder="0"  */allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
            </article>
        </section>
    )
}