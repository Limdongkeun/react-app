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

function Create(props) {
    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={event => {
                event.preventDefault();
                const title = event.target.title.value
                const body = event.target.body.value
                console.log('title', title, 'body', body);
                props.onCreate(title, body);
            }}>
                <p><input type="text" name="title" placeholder="title"/></p>
                <p><textarea name="body" placeholder="body"></textarea></p>
                <p><input type="submit" value="Create"/></p>
            </form>
        </article>
    )
}

function Upate(props) {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
    return (
        <article>
            <h2>Update</h2>
            <form onSubmit={event => {
                event.preventDefault();
                const title = event.target.title.value
                const body = event.target.body.value
                console.log('title', title, 'body', body);
                props.onUpdate(title, body);
            }}>
                <p><input type="text" name="title" placeholder="title" value={title}
                          onChange={event => setTitle(event.target.value)}/></p>
                <p><textarea name="body" placeholder="body" value={body}
                             onChange={event => setBody(event.target.value)}></textarea></p>
                <p><input type="submit" value="Update"/></p>
            </form>
        </article>
    )
}


function App(message) {
    // let _mode = useState('WELCOME');
    // let mode = _mode[0];
    // const setMode = _mode[1];
    //위아래 똑같음
    const [topics, setTopics] = useState([
        {id: 1, title: "About", body: "about is ..."},
        {id: 2, title: "Contact", body: "contact is ..."},
        {id: 3, title: "React", body: "react is ..."}
    ]);
    let [mode, setMode] = useState('WELCOME');
    let [id, setId] = useState(null);
    let [nextId, setNextId] = useState(4);


    let content = null;
    let contextCtroller = null;
    if (mode === 'WELCOME') {

        content = <Article title="Welcome" body="Hello React"/>
        contextCtroller = <li><a href={"/creat"} onClick={event => {
            event.preventDefault();
            setMode('CREATE')
        }}>Creat</a></li>
    } else if (mode === 'READ') {
        let title, body = null;
        for (let i = 0; i < topics.length; i++) {
            console.log('id', id);
            const topic = topics[i];
            if (topic.id === id) {
                title = topic.title;
                body = topic.body;
            }
        }
        content = <Article title={title} body={body}/>
        content = <Article title={title} body={body}/>
        contextCtroller = <>
            <p><li><a href={"/update/" + id} onClick={(event) => {
                event.preventDefault();
                setMode('UPDATE');
                setId(id);
            }}>Update</a></li></p>
            <p><li><input type="button" value="Delete" onClick={() => {
                const newTopics = []
                for (let i = 0; i < topics.length; i++) {
                    if(topics[i].id !== id) {
                        newTopics.push(topics[i]);
                    }
                }
                setTopics(newTopics);
                setMode('WELCOME');
            }}/>
            </li></p>
        </>

    } else if (mode === 'CREATE') {
        content = <Create onCreate={(_title, _body) => {
            const newTopic = {id: nextId, title: _title, body: _body};
            setTopics([...topics, newTopic]);
            setMode('READ');
            setId(nextId);
            setNextId(nextId + 1);
        }}></Create>

    } else if (mode === 'UPDATE') {
        let title, body = null;
        for (let i = 0; i < topics.length; i++) {
            console.log('id', id);
            const topic = topics[i];
            if (topic.id === id) {
                title = topic.title;
                body = topic.body;
            }
        }
        content = <Upate title={title} body={body} onUpdate={(_title, _body) => {
            const newTopics = [...topics];
            const updatedTopic = {id: id, title: _title, body: _body};
            setTopics(topics.map(topic => topic.id === id ? updatedTopic : topic));
            //위아래 같음
            // for (let i = 0; i < newTopics.length; i++) {
            //     if (newTopics[i].id === id) {
            //         newTopics[i] = updatedTopic;
            //         break;
            //     }
            // }
            // setTopics(newTopics);
            setMode('READ');
        }}>

        </Upate>
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
                <ul>
                    {contextCtroller}
                </ul>
            </div>
        </div>
    );
}

export default App;
