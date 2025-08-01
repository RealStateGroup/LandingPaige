// src/app/page.tsx
import Container from '@/app/_components/container'
import { HeroPost } from '@/app/_components/hero-post'
import { Intro } from '@/app/_components/intro'
import { MoreStories } from '@/app/_components/more-stories'
import { getAllPosts } from '@/lib/api'
import Header from './_components/header'
import Footer from './_components/footer'

export default function Index() {
  const allPosts = getAllPosts()

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <main>
      <Container>
        <Header/>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <Footer/>
      </Container>
    </main>
  )
}