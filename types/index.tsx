export interface ChildProps {
	children: React.ReactNode
}
export interface WeatherData {
	name: string
	sys: {
		country: string
	}
	weather: {
		icon: string
		description: string
	}[]
	main: {
		temp: number
		humidity: number
	}
}
