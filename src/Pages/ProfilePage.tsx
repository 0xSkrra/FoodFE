import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { GetUserProfile, GetUserProfileByUsername } from "../Common/util/API"
import { useProfileStore } from "../Store/AuthStore"

const ProfilePage = () => {
  const { username } = useParams()
  const profileStore = useProfileStore((state) => state)

  useEffect(() => {
    const getProfile = async () => {
      let profile
      if (!username) {
        return
      }
      if (
        profileStore.User.username.toLowerCase() === username?.toLowerCase()
      ) {
      } else {
        profile = await GetUserProfileByUsername(username)
      }
    }
  }, [profileStore.User.username, username])

  console.log(username)
  return <div>ProfilePage</div>
}

export default ProfilePage
