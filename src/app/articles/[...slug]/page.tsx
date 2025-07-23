// app/articles/[...slug]/page.tsx
import ArticleDetailPage from './ArticleDetailPage'

interface PageProps {
  params: {
    slug: string[]
  }
}

export default function Page({ params }: PageProps) {
  return <ArticleDetailPage slug={params.slug} />
}
