import { useParams } from "react-router-dom"

const ProfilePage = () => {
  const { username } = useParams()
  console.log(username)
  return <div>ProfilePage</div>
}

export default ProfilePage
