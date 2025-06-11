import Head from 'next/head'

export default function Home() {
  return (
    <div className="p-10 min-h-screen bg-yellow-50 text-center">
      <Head>
        <title>Voyage Gourmetik</title>
        <meta name="description" content="Voyage autour du monde en cuisine" />
      </Head>
      <h1 className="text-4xl font-bold mb-6">🌍 Voyage Gourmetik</h1>
      <p className="text-lg">Bienvenue dans l’application de cuisine du monde. Explorez, cuisinez, savourez !</p>
    </div>
  )
}