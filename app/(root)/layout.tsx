import { ChildProps } from '@/types'
import React from 'react'

function Layout({ children }: ChildProps) {
	return (
		<>
			<main>{children}</main>
		</>
	)
}

export default Layout
