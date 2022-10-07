import React, { Component } from 'react'

class BlogList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title:"Blog"
        }
        console.log("Karthkik inside constructor");
    }
    componentDidMount(){
        console.log("Karthkik inside component did mount");
    }
    static getDerivedStateFromProps(){
        console.log("Karthkik inside getDerivedStateFromProps");
        return null;
    }
    shouldComponentUpdate(){
        console.log("Karthkik inside shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Karthkik inside getSnapshotBeforeUpdate",prevProps.title,"new title",this.props.title);
        return null;
    }
    componentDidUpdate(){
        console.log("Karthkik inside componentDidUpdate");
    }
    update=()=>{
        this.setState({
            title:"blogstar"
        })
    }
    render() {
        console.log("Karthkik inside render");
        return (
            <div>Heklo insode class component -----------{this.props.title}</div>
        )
    }
}

export default BlogList