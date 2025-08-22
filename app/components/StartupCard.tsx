import Link from "next/link"
import Image from "next/image"
import { Author, Startup } from "@/sanity.types"
import { Skeleton } from "@/components/ui/skeleton"
import { cn, formatDate } from "@/lib/utils"

export type StartupCardType = Omit<Startup, "author"> & {"author"? : Author}

export default function StartupCard( {post}: {post: StartupCardType} ) {
    
    

    return(
        <li className="startup-card group">
            <div className="flex-between">
                <p className="startup_card_date">
                    {formatDate(post?._createdAt)}
                </p>
                <div className="flex gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#f68484" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"/></svg>
                    <span className="text-16-medium">{ post?.views }</span>
                </div>
            </div>
            <div className="flex-between mt-5 gap-5">
                <div className="flex-1">
                    <Link href={`/user/${post.author?._id}`}>
                        <p className="text-16-medium line-clamp-1">{post.author?.name}</p>
                    </Link>
                    <Link href={`/startup/${post._id}`}>
                        <h3 className="text-26-semibold line-clamp-1">{post.title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${post.author?._id}`}>
                    <Image src={post.author?.image} alt={post.author?.name} width={48} height={48} className="rounded-full" />
                </Link>
            </div>
            <Link href={`/startup/${post._id}`}>
                <p className="startup_card_desc">
                    {post?.description}
                </p>
                <img src={post?.image} alt="placeholder" className="startup-card_img" />
            </Link>
            <div className="flex-between gap-3 mt-5">
                <Link href={`/?quary=${post?.category?.toLowerCase()}`}>
                    <p className="text-16-medium">{post?.category}</p>
                </Link>
                <button className="startup-card_btn">
                    <Link href={`/startup/${post?._id}`}>
                        Details
                    </Link>
                </button>
            </div>
        </li>

    )
}

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)}>
        <Skeleton className="startup-card_skeleton" />
      </li>
    ))}
  </>
);