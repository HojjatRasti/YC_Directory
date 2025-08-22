import StartupForm from "@/app/components/StartupForm"
import { auth } from "@/auth"
import { redirect } from "next/dist/server/api-utils"

export default async function Page() {

    const session = await auth()
    if(!session) redirect("/")

    return(
        <>
            <section className="pink_container !min-h-[230px]">
                <h1 className="heading">Submit Your Startup</h1>
            </section>
            <StartupForm />
        </>
    )
}