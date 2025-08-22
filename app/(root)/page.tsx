import SearchForm from "../components/SearchForm"
import StartupCard, {StartupCardType} from "../components/StartupCard"
import { STARTUP_QUARY } from "@/sanity/lib/quareis"
import { sanityFetch, SanityLive } from "@/sanity/lib/live"
 
export default async function Home({searchParams}: {searchParam: Promise<{quary?: string}>}) {
  const quary = (await searchParams).quary
  const params = { search: quary || null }
  const { data: post } = await sanityFetch({ query: STARTUP_QUARY, params })
  
  return (
   <>
      <section className="pink_container">
          <h1 className="heading">
            Pitch Your Startup, <br />
            Connect With Entrepreneurs
          </h1>

          <p className="sub-heading !max-w-3xl">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
            Competitions.
          </p>
          <SearchForm quary={quary} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {quary ? `Search result for " ${quary} "` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          { post?.length > 0 ? 
            ( post.map( (post: StartupCardType) =>
              ( <StartupCard key={ post?._id } post={post} /> ) 
            )):(
              <p className="no-result">No startup found</p>
            )
          }
        </ul>
      </section>
      <SanityLive />
    </> 
  )
}
