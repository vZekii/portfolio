'use client';
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import "app/globals.css";
import Navbar from '@/components/blognav';

// export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

// export const generateMetadata = ({ params }) => {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
//   return { title: post.title }
// }

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  
  if (!post) {
    return null; // or handle the case when 'post' is undefined
  }

  const Content = getMDXComponent(post.body.code)

  return (
    <article className="prose dark:prose-invert font-mono py-8 mx-auto max-w-xl">
      <Navbar />
      <div className="my-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600" suppressHydrationWarning>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <Content/>
    </article>
  )
}

export default PostLayout
