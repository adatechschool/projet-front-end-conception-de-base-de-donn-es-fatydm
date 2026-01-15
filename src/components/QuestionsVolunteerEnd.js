import styles from "../styles/Questions.module.css"

export default function QuestionVolunteer() {
    return (
        <>
            <section className={styles.questionContainer}>
                <div className={styles.change}>
                    <h2 className={styles.title}>Des questions ?</h2>
                    <p className={styles.paragraphe}>Nous sommes là pour répondre à toutes vos interrogations concernant
                        le bénévolat chez Adaopte. <br/>N'hésitez pas à nous contacter pour en savoir plus sur notre démarche.
                    </p>
                </div>

                <div className={styles.buttonStyle}>
                    <button className={styles.button}>Foire aux questions</button>
                    <button className={`${styles.button} ${styles.red}`}>Contactez-nous</button>
                </div>
            </section>
        </>
    )
}