'use client'
import Weather from '@/components/shared/weather'
import React from 'react'

function HomePage() {
	return (
		<div className='flex flex-col items-center justify-center '>
			<h1>Get your current weather</h1>
			<Weather />
		</div>
	)
}

export default HomePage
