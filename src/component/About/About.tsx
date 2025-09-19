import Image from "next/image";
import styles from "./About.module.css";

const About = () => {

    //background: "url(/back.jpg)", 

    return (
        <section className={styles.about} style={{ height: "100vh", width: "100vw"}}> 
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1>БИООРУЖИЕ</h1>
                    <h2>Тихая угроза</h2>
                    <p>История, факты и секреты</p>
                </div>
                <div className={styles.virus}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/virus.png`} width={500} height={500} alt="background" />
                </div>
            </div>
        </section>
    );
}

export default About;