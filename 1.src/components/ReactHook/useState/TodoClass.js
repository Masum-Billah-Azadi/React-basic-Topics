import React from "react";
class Todo extends React.Component{
    state = {
        todo:'',
        warningTodo:null,
    }
    hendleInpit = (e)=>{
        const inputValue = e.target.value;
        const warning = inputValue.includes('.Aroshe')
            ? 'AROSHE + MASUM How Are You?' 
            : null;

        this.setState({
            todo: inputValue,
            warning,
        });
    };



    render(){
        const {todo,warning} = this.state;
        return(
            <div>
                <p>{todo}</p>
                <p>
                    <textarea name="todo" value={todo} onChange={this.hendleInpit} />
                </p>
                <hr />
                <h2>{warning || 'Good choice!'}</h2>
            </div>
        );
    }
}
export default Todo;