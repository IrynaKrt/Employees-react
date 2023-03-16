import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            error: false
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name.length >= 2 && this.state.salary !== '') {
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
                error: false
            })
        } else {
            this.setState ({
                error: true
            })
        }

    }

    render() {
        const {name, salary, error} = this.state;

        let classNames = 'form-control new-post-label'

        if(error) {
            classNames += ' error';
        }

        return(
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onSubmit}>
                    <input type="text" className={classNames} name="name" value={name} placeholder="Как его зовут?" onChange={this.onValueChange} />
                    <input type="number" className={classNames} name="salary" value={salary} placeholder="З/П в $?" onChange={this.onValueChange} />

                    <button type="submit"className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;