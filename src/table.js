function Table({ data }) {
    return (
        <div>
            <div>
                <h1>List of Users</h1>
            </div>
            {
                data.length ?
                (<table>
                    <thead>
                        <tr>
                            <th>Sl no.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length ? data.map((row, index) => (
                                <tr>
                                    {
                                        <>
                                            <td>{index+1}</td>
                                            {Object.values(row).length ? Object.values(row).map(cell => (
                                                <td>{cell}</td>
                                            )): null}
                                        </>
                                    }
                                </tr>
                            )): null
                        }
                    </tbody>
                </table>) : <h3> Empty </h3>
            }
        </div>
    )
}

export default Table