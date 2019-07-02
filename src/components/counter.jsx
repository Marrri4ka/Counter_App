import React, { Component } from 'react';


class Counter extends Component {
  


    renderTags(){
        if(this.state.tags.length === 0) return <p>Thete are no tags!</p>;
    return <ul>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</ul>;
    }

    getBadge1Classes() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value  === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount(){
        const {value} = this.props.counter;
        return value === 0? "Zero": value;
    }
  

    render() { 
        return (
        <div>
            {this.props.children}
       <span  className={this.getBadge1Classes()}>{this.formatCount()}
         </span>
         <button onClick ={()=> this.props.onIncrement(this.props.counter)}
         className="btn btn-secondary btn-sm">Increment</button>
            <button  onClick ={()=> this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2">Delete</button>
         </div>
        );

    }

  
}

 
export default Counter;