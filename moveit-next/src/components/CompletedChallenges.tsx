import styles from '../styles/components/CompletedChallenges.module.css';


export function CompletedChallenges() {
    return (
        <div className={ styles.CompletedChallengesContainer}>
            <span>Desafios completados</span>
            <span>5</span>
        </div>
    );
}