import Layout from '../components/MyLayout'

export default (props) => (
    <Layout>
        <h1>{props.url.query.id}</h1>
        <p>This is the blog post content.</p>
    </Layout>
)