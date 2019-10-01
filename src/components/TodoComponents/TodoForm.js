import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            itemName: ''
        };
    }

    handleChanges = e => {
        this.setState({[e.target.name]: e.target.value});
        // console.log('handleChange', this.state.todo);
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
    }

    render() {
        return (
            <form onSubmit = {this.submitItem}>
                <input 
                    type='text'
                    name='item'
                    value={this.item}
                    onChange={this.handleChanges}
                />
                <button>Add</button>
            </form>
        );
    }

}

export default TodoForm;