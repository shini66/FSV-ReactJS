import CardList from '../components/card/CardList.jsx'

function Home() {

  return (
    <>
      <section className="mt-3">
            <div className="mb-8 justify-center items-center flex">
                <h1 className="text-3xl font-bold text-gray-800">Tienda</h1>
            </div>
            <div className="grid gap-6 justify-center p-3">
                <CardList />
            </div>
        </section>
    </>
  )
}

export default Home;