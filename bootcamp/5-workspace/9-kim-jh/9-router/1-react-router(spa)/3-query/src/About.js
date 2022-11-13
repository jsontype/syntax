import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function About() {
  const [searchParams] = useSearchParams()
  const isDetail = searchParams.get('detail') === 'true'

  return (
    <div>
        <h1>About</h1>
        <p>소개 컨텐츠</p>
        {isDetail && <p>
          추가적인 정보가 어쩌고 저쩌고.. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero ipsa saepe id et praesentium, dignissimos hic distinctio repellendus, odio itaque voluptatum perferendis, reiciendis eum omnis. Quam labore aut modi impedit.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae dolor aliquam minus, possimus fugit nobis iste delectus est explicabo ratione fugiat iusto, corrupti dolorum dignissimos asperiores repellendus quod incidunt vel?
        </p>}
     </div>
  )
}
