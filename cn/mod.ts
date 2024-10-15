import { clsx, type ClassValue } from 'jsr:@nick/clsx@^0.3.1'
import { twMerge } from 'npm:tailwind-merge@^2.5.4'

/**
 * A function to merge Tailwind CSS class names
 * 
 * @param inputs - The class values (a primitive, an array or a dictionary) to merge
 * @returns The merged class names
 * 
 * @see https://jsr.io/@nick/clsx@0.3.1/doc/~/ClassValue
 */
export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs))
}
