"use client"

import { logout } from "@/actions/logout"
import { useCurrentUser } from "@/hooks/use-current-user"
import { useSession} from "next-auth/react"


const SettingPage =  () => {
  const user = useCurrentUser()

  const onClick = () =>{
    logout()
    // window.location.href = "/" // Redirect to home page after sign out.
  }

  return (
    <div>
      
      
        <button onClick={onClick} type="submit" className="bg-white py-4 px-8 rounded-xl">
          Sign out
        </button>

      
    </div>
  )
}

export default SettingPage