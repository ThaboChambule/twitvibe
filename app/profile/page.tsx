import { MainLayout } from "@/components/main-layout"
import { ProfileView } from "@/components/profile-view"
import { RedirectToAuth } from "@/components/redirect-to-auth"

export default function ProfilePage() {
  return (
    <RedirectToAuth>
      <MainLayout>
        <ProfileView />
      </MainLayout>
    </RedirectToAuth>
  )
}

