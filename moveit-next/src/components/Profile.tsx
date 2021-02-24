import styles from '../styles/components/Profile.module.css';



export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://pbs.twimg.com/profile_images/1364537546278068231/HGQ3e14D_400x400.jpg" alt="BRUNO BATISTINI RUFINO"/>
            <div>
                <strong>Bruno BATISTINI RUFINO</strong>

                <p>Level 1</p>
            </div>

        </div>
    );
}