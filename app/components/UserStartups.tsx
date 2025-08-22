import { client } from "@/sanity/lib/client"
import { STARTUP_BY_AUTHOR_QUARY } from "@/sanity/lib/quareis"
import StartupCard, { StartupCardType } from "./StartupCard"

export default async function UserStartups({id} : {id: string}) {

    const startups = await client.fetch(STARTUP_BY_AUTHOR_QUARY, {id})

    console.log(startups)

    return(
        <>
            {startups.length > 0 ? (
                startups.map((startup: StartupCardType) => (
                <StartupCard key={startup._id} post={startup} />
                ))
            ) : (
                <p className="no-result">No posts yet</p>
            )}
        </>
    )
}