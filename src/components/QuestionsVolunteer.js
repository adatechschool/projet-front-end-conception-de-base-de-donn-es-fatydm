import styles from "../styles/QuestionsVolunteer.module.css"

export default function QuestionVolunteer() {
    return (
        <>
            <section>
                <div className={styles.change}>
                    <h2 className={styles.title}>Prêt⸱e à changer une vie ?</h2>
                    <p className={styles.paragraphe}>Adoptez, partagez, soutenez... Chaque geste compte.
                        Que vous ouvriez votre foyer ou votre coeur, vous pouvez offrir une seconde chance à un animal abandonné.</p>
                </div>

                <div className={styles.buttonStyle}>
                    <button className={styles.button}> Adoptez un animal</button>
                    <button className={`${styles.button} ${styles.red}`}>Faire un don 🫶🏽</button>
                    <button className={`${styles.button} ${styles.green}`}> Devenir bénévole</button>
                </div>
            </section>
        </>
    )
}