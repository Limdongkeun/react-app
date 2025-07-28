import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props) {
    console.log('props', props, props.title);
    return (
        <header>
            <h1><a href={"/"} onClick={(event) => {
                event.preventDefault();
                props.onchangeMode();
            }}>{props.title}</a></h1>
        </header>
    );
}


function Nav(props) {
    console.log('props', props, props.topics);
    const list = []
    //map으로 한 번에
    // const lis = props.topics.map(topic => <li key={topic.id}><a id={topic.id} href={"read/" + topic.title} onClick={event => {
    //     event.preventDefault();
    //     props.onchangeMode(event.target.id);
    // }}>{topic.title}</a></li>);


    //for 문으로
    for (let i = 0; i < props.topics.length; i++) {
        const topic = props.topics[i];
        list.push(<li key={topic.id}>
            <a id={topic.id} href={"/read/" + topic.id} onClick={event => {
            event.preventDefault();
            props.onchangeMode(Number(event.target.id));
        }}>{topic.title}</a></li>)
    }
    return (
        <ol>
            {/*{lis}*/}
            {list}
        </ol>
    );
}

function Article(props) {
    console.log('title', props.title, 'body', props.body);
    const {title, body} = props;
    return (
        <article>
            <h2>{title}</h2>
            {body}
        </article>
    )

}


function App(message) {
    // let _mode = useState('WELCOME');
    // let mode = _mode[0];
    // const setMode = _mode[1];
    //위아래 똑같음
    let [mode, setMode] = useState('WELCOME');
    let[id, setId] = useState(null);
    console.log('mode', mode);
    const topics = [
        {id: 1, title: "About", body: "about is ..."},
        {id: 2, title: "Contact", body: "contact is ..."},
        {id: 3, title: "React", body: "react is ..."}
    ];

    let content = null;
    if(mode === 'WELCOME') {
        content = <Article title="Welcome" body="Hello React"/>
    } else if(mode === 'READ') {
        let title, body = null;
        for(let i = 0; i < topics.length; i++) {
            console.log('id', id);
            const topic = topics[i];
            if(topic.id === id) {
                title = topic.title;
                body = topic.body;
                break;
            }
        }
        content = <Article title={title} body={body}/>
        content = <Article title={title} body={body}/>
    }
    return (
        <div className="App">
            <div>
                <Header title={"React Home"} onchangeMode={() => {
                    setMode('WELCOME')
                }}/>
                <Nav topics={topics} onchangeMode={(_id) => {
                    setMode('READ')
                    setId(_id)
                }}/>
                {content}
            </div>
        </div>
    );
}

export default App;
