const posts = [
    {
        id: 1,
        text: "HELLO"
    },
    {
        id: 2,
        text: "is this FUN for you"
    },
    {
        id: 3,
        text: "are you not entertained ... "
    }
]

type PostProps = {
    data: {
        id: number,
        text: string
    }
}

function Post(props: PostProps) {
    return <div>
        <span>{props.data.id}</span><p>{props.data.text}</p></div>
}

export function Posts() {
    return (
        <div>{posts.map(post => <Post data={post} />)}</div>
    )
}