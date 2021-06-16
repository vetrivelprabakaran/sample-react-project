const Pagination = (props) => {
    const taskPerPage = props.taskPerPage;
    const totalTask = props.totalTask;
    const paginate = props.paginate;
    const pageNumbers = [];

    for (let i=1; i<= Math.ceil(totalTask / taskPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map( number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} className='page-link'>{number}</a>
                    </li>
                )) }
                
            </ul>
        </nav>
    );

}
export default Pagination