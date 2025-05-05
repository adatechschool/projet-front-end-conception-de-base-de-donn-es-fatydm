'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from "../styles/Searchbar.module.css"

export default function Searchbar() {
    // pour qu'au clic, ça me renvoie sur la page "J'adopte"
    const router = useRouter()

    const submit = () => {

        const query = new URLSearchParams();
        if (animal) query.append('type', animal);
        if (ville) query.append('ville', ville);

        router.push(`/adopt?${query.toString()}`);
    }

    // Modifie l'état aprés le choix du use
    const [animal, setAnimal] = useState('');
    const handleChange = (e) => {
        setAnimal(e.target.value);
    };

    const [ville, setVille] = useState('');

    // Pour reset au clic
    const [showAllImages, setShowAllImages] = useState(false);
    const resetFilters = () => {
        setShowAllImages(false); 
      };
    
    const [animalCount, setAnimalCount] = useState(undefined)
    // const animalCountText = () => {
    //     setAnimalCount("10")
    //     console.log(setAnimalCount());
    // };

    const foundText = animal.length
    console.log(foundText);
    

    return (
        <>
            <div className={styles.search}>
                <div className={styles.container}>
                    <div className={styles.petType}>
                        <label htmlFor="pet-select">Type d'animal</label>

                        <select name="pets" id="pet-select"
                            className={styles.petSelect}
                            onChange={handleChange}
                            value={animal}>
                            <option value="">--Choisis un animal--</option>
                            <option value="chien">Chien</option>
                            <option value="chat">Chat</option>
                            <option value="lapin">Lapin</option>
                            <option value="hamster">Hamster</option>
                            <option value="cochon-d'inde">Cochon d'Inde</option>
                        </select>
                    </div>

                    <div className={styles.localization}>
                        <label htmlFor="search">Localisation</label>
                        <input className={styles.caseville}
                            type="search"
                            placeholder="Votre ville"
                            value={ville}
                            onChange={(e) => setVille(e.target.value)} />
                    </div>

                    <button onClick={() => { submit() }} className={styles.button}>Rechercher 🔎</button>

                </div>

                {animal ?
                    <div className={styles.reset}>
                        <p className={styles.foundText}> animaux trouvés</p>
                        <p onClick={() => resetFilters()} className={styles.resetFunction}>Réinitialiser les filtres</p>
                    </div>
                    : ""}

            </div>
        </>
    )
}