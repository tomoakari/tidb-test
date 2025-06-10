import { query } from '$lib/db';
import type { Group } from '$lib/db';

export async function load() {
    try {
        const groups = await query('SELECT * FROM `group`') as Group[];
        return {
            groups
        };
    } catch (error) {
        console.error('Error loading groups:', error);
        return {
            groups: []
        };
    }
}
