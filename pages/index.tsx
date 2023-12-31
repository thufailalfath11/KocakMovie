import requests from '@/api/api'
import Banner from '@/components/Banner'
import Header from '@/components/Header'
import { Movie } from '@/typings'
import type { NextPage } from 'next'
import Head from 'next/head'
import ListFilm from '@/components/ListFilm'
import useAuth from '@/hooks/useAuth'
import Modal from '@/components/Modal'
import { modalState } from '@/atoms/modalAtom'
import { useRecoilValue } from 'recoil'

interface Props {
  kocakMovies: Movie[]
  trendingNow: Movie[]
  topRated: Movie[]
  actionMovies: Movie[]
  comedyMovies: Movie[]
  horrorMovies: Movie[]
  romanceMovies: Movie[]
  documentaries: Movie[]
}

const Index = ({
  kocakMovies,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {

  const {logout, loading} = useAuth()
  const showModal = useRecoilValue(modalState)
 
  if (loading) return "loading"
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Kocak Movie</title>
      </Head> 

        <Header/>
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner kocakMovies={kocakMovies}/>
        <section className="md:space-y-24">
          <ListFilm title="Trending Now" movies={trendingNow} />
          <ListFilm title="Top Rated" movies={topRated} />
          <ListFilm title="Action Thrillers" movies={actionMovies} />
          <ListFilm title="Comedies" movies={comedyMovies} />
          <ListFilm title="Scary Movies" movies={horrorMovies} />
          <ListFilm title="Romance Movies" movies={romanceMovies} />
          <ListFilm title="Documentaries" movies={documentaries} />
        </section>
      </main>
        {showModal && <Modal/>}
    </div>

  )
}

export default Index;
export const getServerSideProps = async () => {

  const [
    kocakMovies,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchKocakMovies).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])
  return {
    props: {
      kocakMovies: kocakMovies.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    }
  }
}