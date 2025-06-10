import { query } from '$lib/db';
import type { UserWithGroup } from '$lib/db';
import { fail } from '@sveltejs/kit';

export async function load() {
    try {
        const users = await query(`
            SELECT 
                u.id,
                u.name,
                u.group_id,
                g.name as group_name
            FROM user u
            JOIN \`group\` g ON u.group_id = g.id
            ORDER BY u.id
        `) as UserWithGroup[];

        const groups = await query('SELECT * FROM `group`');

        return {
            users,
            groups
        };
    } catch (error) {
        console.error('Error loading users:', error);
        return {
            users: [],
            groups: []
        };
    }
}

export const actions = {
    default: async ({ request }: { request: Request }) => {
        const data = await request.formData();
        const name = data.get('name');
        const groupId = data.get('group_id');

        if (!name || !groupId) {
            return fail(400, {
                error: '名前とグループを入力してください'
            });
        }

        try {
            await query(
                'INSERT INTO user (name, group_id) VALUES (?, ?)',
                [name, groupId]
            );
            return { success: true };
        } catch (error) {
            console.error('Error creating user:', error);
            return fail(500, {
                error: 'ユーザーの作成に失敗しました'
            });
        }
    }
};
