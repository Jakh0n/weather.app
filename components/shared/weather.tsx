'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { SearchIcon } from 'lucide-react'
import { WeatherData } from '@/types'

function Weather() {
	const [city, setCity] = useState('')
	const [weather, setWeather] = useState<WeatherData | null>(null)
	const [error, setError] = useState<string | null>(null)

	const handleSearch = async () => {
		try {
			setError(null)
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
			)
			if (!response.ok) throw new Error('Failed to fetch weather data')
			const data = await response.json()
			console.log(data)
			setWeather(data)
		} catch {
			setError('Failed to fetch weather data')
			setWeather(null)
		}
	}

	return (
		<div className='flex flex-col items-center justify-center h-screen '>
			<div className=' p-10 rounded-lg bg-blue-200'>
				<div className=' flex items-center  bg-white  rounded-lg'>
					<input
						className='placeholder:p-2 border-none outline-none '
						type='text'
						placeholder='Enter your city'
						value={city}
						onChange={e => setCity(e.target.value)}
					/>
					<div className='items-center '>
						<SearchIcon
							size={20}
							className='cursor-pointer'
							onClick={handleSearch}
						/>
					</div>
				</div>

				{error && <p className='text-red-500'>{error}</p>}

				{weather ? (
					<div className='mt-5'>
						<h2 className='text-2xl font-bold'>
							{weather?.name}, {weather?.sys.country}
						</h2>
						<Image
							src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
							alt='Weather Icon'
							width={150}
							height={150}
							className='mt-5'
						/>
						{weather?.main.temp && (
							<p className='text-2xl font-bold'>
								{Math.round(weather?.main.temp - 273.15)}°C
							</p>
						)}
						<p className='text-xl '>Humidity: {weather?.main.humidity}%</p>
						<p className='text-md '>{weather?.weather[0].description}</p>
					</div>
				) : (
					<div className='flex flex-col items-center justify-center  '>
						<Image src='/search.webp' alt='Weather' width={220} height={220} />
						<p className='text-2xl font-bold font-mono'>Lets Search</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default Weather
