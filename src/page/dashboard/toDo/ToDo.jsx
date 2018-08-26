import React, { Component } from 'react';
import './ToDo.css';
import { Route, Link, Redirect } from 'react-router-dom';

class ItemList extends Component {
    render() {
        return (
            <Route
                path={'/task/' + this.props.id}
                exact={false}
                children={({ match }) => (
                    <Link
                        to={'/task/' + this.props.id}
                        className="list-group-item ListTodoItem">
                        <span className='ListTodoItemSinal bg-danger'></span>
                        <h5 className='ToDoTitle'>{this.props.title}</h5>
                        <p className='ToDoDescription'>{this.props.desc}</p>
                    </Link>
                )}
            />
        );
    }
}

export class ToDoShow extends Component {

    list = [];
    Itens = [];
    htmlComp = null
    constructor(props) {
        super(props)
        this.list = JSON.parse(localStorage.list)
        this.getItens();
    }
    preRender() {
        this.htmlComp = (
            <div key='ListTasks0' className="list-group list-group-flush ListTodo">
                {this.Itens}
            </div>
        )
    }
    getItens() {
        if (this.list.length > 0) {
            this.list.map((i, id) => {
                return this.Itens.push(<ItemList id={id} key={'Task-' + id} desc={i.description} title={i.title} />)
            })
            this.preRender();
        } else {
            this.htmlComp = (<h1>Not have tasks!</h1>)
        }
    }
    render() {
        const htmlComp = this.htmlComp;
        return (
            [htmlComp]
        );
    }
}

export class Form extends Component {

    list = [];
    constructor(props) {
        super(props);
        this.state = {
            index: (props.index) ? parseInt(props.index, 10) : null,
            title: props.title,
            description: props.description,
            buttonFn: {
                label: 'Save',
                callback: this.saveData
            },
            noWritable: props.noWritable,
            error: false,
            merrror: '',
            redirect: false,
            redirectTo: ''
        }
        this.list = JSON.parse(localStorage.list);
    }
    componentWillMount() {
        this.hasInList()
    }
    componentWillUpdate() {
        console.log('redirect: ' + this.state.redirect)
    }

    hasInList() {
        if (typeof this.state.index === 'number')
            if (!this.list[this.state.index]) {
                this.setState({ error: true, merrror: 'Essa tarefa não existe!' })
            } else {
                this.restoreData();
                this.setState({
                    buttonFn: {
                        label: 'Update',
                        callback: this.updateData
                    }
                })
            }
    }

    getData() {
        return {
            title: this.state.title,
            description: this.state.description
        }
    }
    saveData = () => {
        this.list.push(this.getData());
        localStorage.setItem('list', JSON.stringify(this.list));
        this.setState({
            index: this.list.length--,
            buttonFn: {
                label: 'Update',
                callback: this.updateData,

            },
            redirect: true,
            redirectTo: '/task/'+this.list.length--
        });

    }
    updateData = () => {
        this.list[this.state.index] = this.getData();
        localStorage.setItem('list', JSON.stringify(this.list));
    }
    restoreData = () => {
        this.setState({
            title: this.list[this.state.index].title,
            description: this.list[this.state.index].description
        })
    }
    destroyData = () => {
        this.list.splice(this.state.index, 1)
        localStorage.setItem('list', JSON.stringify(this.list));
        this.setState({
            index: null,
            buttonFn: {
                label: 'Save',
                callback: this.saveData,

            },
            redirect: true,
            redirectTo: '/show-to-do'
        })
    }

    recoveryState() {
        this.setState = {
            index: null,
            title: null,
            description: null,
            buttonFn: {
                label: 'Save',
                callback: this.saveData
            },
            noWritable: false,
            error: false,
            merrror: '',
            redirect: true,
            redirectTo: '/dashboard/show-to-do'
        }
    }

    titleInput = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    descriptionInput = (e) => {
        this.setState({
            description: e.target.value
        })
    }
    setUpdateNoWritable = () => {
        this.setState({
            noWritable: !this.state.noWritable
        })
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={this.state.redirectTo} />);
        } else {
            return (
                <form className="FormToDo">
                    <div className={(this.state.error ? '' : 'd-none')}>
                        <h1>{this.state.merrror}</h1>
                    </div>
                    <div className={(this.state.error ? 'd-none' : '')}>
                        <input
                            className="TitleInput FormComponent"
                            type="text"
                            value={this.state.title}
                            onChange={this.titleInput}
                            placeholder="Title of to do"
                            readOnly={this.state.noWritable} />
                        <textarea
                            className="DescriptionInput FormComponent"
                            value={this.state.description}
                            onChange={this.descriptionInput}
                            placeholder="Here you can write a description of to do."
                            readOnly={this.state.noWritable} />
                        <div className="btn-group fixed-bottom justify-content-center" role="group">
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={this.state.buttonFn.callback}
                                disabled={this.state.noWritable}
                            >{this.state.buttonFn.label}</button>
                            <button
                                type="reset"
                                className="btn btn-info"
                                onClick={() => this.setState({
                                    title: '',
                                    description: ''
                                })}
                                disabled={this.state.noWritable}
                            >Clear</button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={this.destroyData}
                                disabled={(this.state.noWritable || (this.state.index ? false : true))}
                            >Drop</button>
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={this.setUpdateNoWritable}
                            >{(this.state.noWritable ? 'Unlock' : 'Lock')}</button>
                        </div>
                    </div>
                </form>
            );
        }
    }
}
export class ToDoTrash extends Component {
    state = {}
    render() {
        return (
            <h1>Trash To Do</h1>
        );
    }
}
