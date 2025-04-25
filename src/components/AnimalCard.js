import Link from "next/link";
import styles from "../styles/Animal_card.module.css";

export default function AnimalCard({ index, type, name, imageUrl, race, age, localisation, description }) {
    return (
        <Link href={`/animal/${index}`} className={styles.animalCard}>
            <img src={imageUrl} alt={`Image de ${type}`} className={styles.animalCardImg} />

            <div className={styles.animalDivText}>
                <p className={styles.animalCardType}><strong>{type}</strong></p>
                <h3 className={styles.animalCardTitle}>{name}</h3>
                <div className={styles.animalStylePara} >
                    <p className={styles.animalCardRace}><strong>Race :</strong> {race}</p>
                    <p className={styles.animalCardAge}><strong>Âge :</strong> {age}</p>
                </div>

                <p className={styles.animalCardLocation}><strong>Localisation :</strong> {localisation}</p>
                <p className={styles.animalCardDescription}><strong>Description: </strong>{description}</p>
            </div>

            
        </Link>
    );
}
