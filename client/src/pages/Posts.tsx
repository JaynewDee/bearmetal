import "./posts.css"

const posts = [
    {
        id: 1,
        title: "Notes About Stuff",
        text: "HELLO"
    },
    {
        id: 2,
        title: "Your Thoughts",
        text: "is this FUN for you"
    },
    {
        id: 3,
        title: "Entertainment",
        text: "are you not entertained ... "
    }
]

type PostProps = {
    data: {
        id: number,
        title: string,
        text: string
    }
}

function Post(props: PostProps) {
    const { data } = props;

    return (
        <div class="post-card">
            <span class="post-id">{data.id}</span>
            <span class="post-title">{data.title}</span>
            <p class="post-content">{data.text}</p>
        </div>
    )
}

export function Posts() {
    return (
        <div class="posts-page">{posts.map(post => <Post data={post} />)}</div>
    )
}