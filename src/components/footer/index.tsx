import styles from  "./style.module.css"

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.footercont}>
                <div className={styles.logogc}></div>
                <hr className={styles.footersep + styles.sep1} />
                <div className={styles.infomuni}>
                    <h3>Casa del futuro-Godoy Cruz</h3>
                    <p><i className="fas fa-map-marker-alt"></i>Sarmiento 2291, Godoy Cruz, Mendoza</p>
                    <p><i className="fas fa-phone-alt"></i> 0800-800-6864</p>
                </div>
                <hr className={styles.footersep + styles.sep2} />
                <div className={styles.contacto}>
                    <h3>Nuestras Redes</h3>
                    <div className={styles.iconoshoriz}>
                        <a aria-label="Whatsapp" className={styles.socialitem} href="https://api.whatsapp.com/send?phone=5492612051915" target="_blank">
                            <i className="fab fa-whatsapp  fa-lg"></i>
                        </a>
                        <a aria-label="Instagram" className={styles.socialitem} href="https://instagram.com/casadelfuturo.godoycruz?utm_medium=copy_link" target="_blank">
                            <i className="fab fa-instagram fa-lg"></i>
                        </a>
                        <a aria-label="Youtube" className={styles.socialitem} href="https://www.facebook.com/pages/Casa%20Del%20Futuro%20Godoy%20Cruz/2030594193923869/" target="_blank">
                            <i className="fab fa-youtube fa-lg"></i>
                        </a>
                    </div>
                </div>
                <hr className={styles.footersep + styles.sep3} />
                <div className={styles.mapa}>
                    <h3>¿Dónde estamos?</h3>
                    <iframe title="Ubicación Casa del Futuro" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4980.710811102107!2d-68.81901943013789!3d-32.94271928080441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0b6d2f7e375f%3A0x819b3cf57de15f9a!2sCasa%20del%20Futuro%2C%20Godoy%20Cruz!5e0!3m2!1ses!2sar!4v1634841427235!5m2!1ses!2sar"
                        width="100%"
                        height="80%"
                        allowFullScreen
                        loading="lazy">
                    </iframe>

                </div>
            </div>
        </footer>)
}

export default Footer