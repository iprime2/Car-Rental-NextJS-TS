import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { fuels, manufacturers, yearsOfProduction } from '@/contants'
import { HomeProps } from '@/types'
import { fetchCars } from '@/utils'

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    model: searchParams.model || 2022,
    year: searchParams.year || '',
    fuel: searchParams.fuel || 10,
    limit: searchParams.limit || '',
  })

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
<<<<<<< Updated upstream
      
=======
<<<<<<< HEAD
            <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} />
=======
      
>>>>>>> 7e69f08e2aded9a3e218da1ab8d0d87aab0bf5ae
>>>>>>> Stashed changes
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
