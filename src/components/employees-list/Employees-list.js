import EmployeesListItem from '../employees-list-item/Employees-list-item';

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, changeSalary}) => {

    const elements = data.map(item => {
        const{id, ...itemProps} = item;
        return(
            <EmployeesListItem key={id} {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            changeSalary={changeSalary}/> //здесь нужен именно currentTarget
        )
    })

    return (
            <ul className="app-list list-group">
                {elements}
            </ul>
    )
}

export default EmployeesList;