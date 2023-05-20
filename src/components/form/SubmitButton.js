import styles from './SubmitButton.module.css'

export default function SubmitButton({text}) {
    return (
        <div className={styles.stdBtt}>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}