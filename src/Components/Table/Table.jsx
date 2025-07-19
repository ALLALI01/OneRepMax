import styles from './Table.module.css';

function Table() {
    return(
        <div className={styles.routineContainer}>
            <h2>Your 12 Week Routine</h2>
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <th>Week</th>
                            <th>Exercise</th>
                            <th>Sets</th>
                            <th>Reps</th>
                            <th>Weight</th>
                            <th>Current Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }, (_, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>Pulled from API</td>
                                <td>3</td>
                                <td>8-10</td>
                                <td>Calculated by MAX</td>
                                <td><input></input></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;