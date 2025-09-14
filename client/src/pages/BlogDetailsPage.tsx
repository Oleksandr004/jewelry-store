import BlogView from '@sections/BlogView/BlogView'
import ReplyForm from '@sections/ReplyForm/ReplyForm'
import BlogCommentsSection from '@sections/BlogCommentsSection/BlogCommentsSection'

const BlogDetailsPage = () => {
	return (
		<>
			<BlogView />
			<ReplyForm />
			<BlogCommentsSection />
		</>
	)
}

export default BlogDetailsPage
