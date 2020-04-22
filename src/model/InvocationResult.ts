import { EmberValue } from '../types/types'

export { InvocationResult }

interface InvocationResult {
	id: number
	success?: boolean
	result?: Array<EmberValue>
}