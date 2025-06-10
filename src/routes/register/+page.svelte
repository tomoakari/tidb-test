<script lang="ts">
    import type { Group } from '$lib/db';
    import { enhance } from '$app/forms';

    export let data: {
        groups: Group[];
    };

    export let form: {
        error?: string;
    };
</script>

<main class="container">
    <h1>新規ユーザー登録</h1>

    <form method="POST" use:enhance>
        {#if form?.error}
            <div class="error">
                {form.error}
            </div>
        {/if}

        <div class="form-group">
            <label for="name">名前</label>
            <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="ユーザー名を入力"
            />
        </div>

        <div class="form-group">
            <label for="group_id">所属グループ</label>
            <select id="group_id" name="group_id" required>
                <option value="">グループを選択してください</option>
                {#each data.groups as group}
                    <option value={group.id}>{group.name}</option>
                {/each}
            </select>
        </div>

        <div class="actions">
            <a href="/" class="button secondary">戻る</a>
            <button type="submit" class="button primary">登録</button>
        </div>
    </form>
</main>

<style>
    .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
    }

    h1 {
        color: #333;
        margin-bottom: 20px;
    }

    .form-group {
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        color: #666;
    }

    input, select {
        width: 100%;
        padding: 8px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
    }

    .error {
        background-color: #ffebee;
        color: #c62828;
        padding: 10px;
        border-radius: 4px;
        margin-bottom: 20px;
    }

    .actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
    }

    .button {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
        text-decoration: none;
        transition: background-color 0.3s;
    }

    .primary {
        background-color: #4CAF50;
        color: white;
    }

    .primary:hover {
        background-color: #45a049;
    }

    .secondary {
        background-color: #f5f5f5;
        color: #333;
    }

    .secondary:hover {
        background-color: #e0e0e0;
    }
</style>
