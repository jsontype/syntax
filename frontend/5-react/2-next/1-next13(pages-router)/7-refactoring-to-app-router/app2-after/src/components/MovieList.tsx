'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SetCookieButton from './SetCookieButton'
import SortPulldown from './SortPulldown'

type Movie = {
  id: number
  title: string
  url?: string
  large_cover_image: string
}

type MovieListProps = {
  initialMovies: Movie[]
  headerUserAgent?: string
  headerLanguage?: string
  headerClientIp?: string
  myToken?: string
}

export default function MovieList({
  initialMovies,
  headerUserAgent,
  headerLanguage,
  headerClientIp,
  myToken
}: MovieListProps) {
  const [movies] = useState<Movie[]>(initialMovies);

  // 서버에서 전달받은 헤더 정보 출력
  if (headerUserAgent) console.log('headerUserAgent: ', headerUserAgent);
  if (headerLanguage) console.log('headerLanguage: ', headerLanguage);
  if (headerClientIp) console.log('headerClientIp: ', headerClientIp);
  if (myToken) console.log('myToken:', myToken);

  // 영화 렌더링 함수
  const render = movies.map((movie, index) => (
    <div key={movie.id} style={{
      contain: 'content',
      position: 'relative'
    }}>
      <h2>
        <Link href={`/movies/${movie.id}`}>
          {movie.title}
        </Link>
      </h2>
      <p style={{
        margin: 0,
        transform: index < 2 ? 'translateZ(0)' : 'none'
      }}>
        <Image
          src={movie.large_cover_image}
          alt={movie.title}
          width={500}
          height={750}
          priority={index < 2}
          loading={index < 2 ? "eager" : "lazy"}
          quality={index < 2 ? 90 : 80}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNzUwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzMzMzIi8+PC9zdmc+"
          sizes="(max-width: 768px) 100vw, 500px"
          style={{
            objectFit: 'cover',
            maxWidth: '100%',
            height: 'auto'
          }}
          onLoadingComplete={(img) => {
            if (index < 2) {
              img.decoding = index < 1 ? 'sync' : 'async';
            }
          }}
        />
      </p>
    </div>
  ))

  return (
    <div>
      <div className="flex justify-between">
        <h1>무비 리스트</h1>
        <SortPulldown />
      </div>
      <div>{render}</div>
      <SetCookieButton token="myToken" content="11111!!!" />
    </div>
  )
} 