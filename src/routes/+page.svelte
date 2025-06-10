<script lang="ts">
    import type { UserWithGroup, Group } from '$lib/db';

    export let data: {
        users: UserWithGroup[];
        groups: Group[];
    };
</script>

<main class="container">
    <h1>ユーザー管理システム</h1>

    <div class="actions">
        <a href="/register" class="button">新規ユーザー登録</a>
    </div>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>名前</th>
                <th>所属グループ</th>
            </tr>
        </thead>
        <tbody>
            {#each data.users as user}
                <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.group_name}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</main>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
    }

    h1 {
        color: #333;
        margin-bottom: 20px;
    }

    .actions {
        margin-bottom: 20px;
    }

    .button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #4CAF50;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        transition: background-color 0.3s;
    }

    .button:hover {
        background-color: #45a049;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    th, td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f5f5f5;
        font-weight: bold;
    }

    tr:hover {
        background-color: #f9f9f9;
    }
</style>
