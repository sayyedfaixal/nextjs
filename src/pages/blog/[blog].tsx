import { useRouter } from "next/router"
const blog = () => {
    const router = useRouter();
    const blogNumber = router.query.blog;
  return (
    <>
    <h1>Hi there, welcome to {blogNumber}</h1>
    </>
  )
}

export default blog