'use client'
import Weather from '@/components/shared/weather'
import React from 'react'

function HomePage() {
	return (
		<div className='flex flex-col items-center justify-center '>
			<Weather />
		</div>
	)
}

export default HomePage
