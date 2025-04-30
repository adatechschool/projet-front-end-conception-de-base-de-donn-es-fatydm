'use client'
import { useRouter } from 'next/navigation'
import styles from "../styles/Searchbar.module.css"

export default function Searchbar() {
    const router = useRouter()
    const submit = () => {
        router.push('/adopt?type=chien')
        //recup le type d'animal depuis le select avec une variable d'etat
    }

    return (
        <>
            <div className={styles.search}>
                <div className={styles.container}>
                    <div className={styles.petType}>
                        <label htmlFor="pet-select">Type d'animal</label>

                        <select name="pets" id="pet-select" className={styles.petSelect}>
                            <option value="chien">Chien</option>
                            <option value="chat">Chat</option>
                            <option value="lapin">Lapin</option>
                            <option value="hamster">Hamster</option>
                        </select>
                    </div>

                    <div className={styles.localization}>
                        <label htmlFor="search">Localisation</label>
                        <input className={styles.caseville} type="search" placeholder="Votre ville" />
                    </div>

                    <button onClick={() => { submit() }} className={styles.button}>Rechercher 🔎</button>
                </div>

                <div className={styles.reset}>
                    <p className={styles.foundText}>101 animaux trouvés</p>
                    <p className={styles.resetFunction}>Réinitialiser les filtres</p>
                </div>
            </div>
        </>
    )
}