import Image from "next/image";
import styles from "./Methods.module.css";

const Methods = () => {
    return (
        <section className={styles.methods}>
            <h2>Способы применения биологического оружия</h2>
            <div className={styles.container}>
                <div className={styles.item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/aerosol-can.png`} width={64} height={64} alt="aerosol" />
                    <p>создание биологического аэрозоля, заражающего воздух приземных слоев атмосферы;</p>
                </div>
                <div className={styles.item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/mosquito.png`} width={64} height={64} alt="mosquito" />
                    <p>использование инфицированных переносчиков для трансмиссивного заражения людей;</p>                     
                </div>
                <div className={styles.item}>
                    <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/icon/drops.png`} width={64} height={64} alt="drops" />
                    <p>скрытое (диверсионное) заражение пищевых продук­тов, питьевой воды, воздуха помещений, других объектов внешней среды.</p>                                     
                </div>
            </div>
        </section>
    );
}

export default Methods;