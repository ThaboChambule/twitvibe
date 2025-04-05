import { MainLayout } from "@/components/main-layout"
import { Feed } from "@/components/feed"
import { RedirectToAuth } from "@/components/redirect-to-auth"

export default function Home() {
  return (
    <RedirectToAuth>
      <MainLayout>
        <Feed />
      </MainLayout>
    </RedirectToAuth>
  )
}

