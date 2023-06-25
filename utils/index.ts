import { manufacturers } from './../contants/index'
import { FilterProps, CarProps } from '@/types'

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 450 // Base rental price per day in dollars
  const mileageFactor = 0.1 // Additional rate per mile driven
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters
  const headers = {
    'X-RapidAPI-Key': 'bb83d47e46mshd007e32b6e5f20fp17a5e7jsn2f87c47a0e3c',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  }

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  )

  const result = await response.json()

  return result
}

// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const url = new URL('https://cdn.imagin.studio/getimage')

//   const { make, year, model } = car

//   url.searchParams.append(
//     'customer',
//     process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ''
//   )
//   url.searchParams.append('make', make)
//   url.searchParams.append('modelFamily', model.split(' ')[0])
//   url.searchParams.append('zoomType', 'fullscreen')
//   url.searchParams.append('modelYear', `${year}`)
//   // url.searchParams.append('zoomLevel', zoomLevel);
//   url.searchParams.append('angle', `${angle}`)

//   return `${url}`
// }

export const generateCarImageUrl = async (car: CarProps, angle?: string) => {
  const { make, year, model } = car
  let headers = new Headers()

  headers.append('Content-Type', 'application/json')
  headers.append('Accept', 'application/json')

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000')
  headers.append('Access-Control-Allow-Credentials', 'true')

  const res = await fetch(
    `http://api.carsxe.com/images?key=p1uqano4z_qmicagkqz_xlnzmfbyy&year=${year}&make=${make}&model=${model}&format=json`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
        ' Accept': 'text/plain',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true',
      },
    }
  )

  const result = res.json()
  return result
}

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search)

  // Set the specified search parameter to the given value
  searchParams.set(type, value)

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname
}
