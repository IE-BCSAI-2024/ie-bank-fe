<template>
    <div>
        <h1>Skull</h1>
        <p>Environment variables read from file {{ env_var_file_name }}</p>
        <p>{{ msg }}</p>
        <p>Environment variables have been set in file: {{ env_var_file_name }}</p>
        <p>It it is running on the environment: {{ environment }}</p>
        <p>Backend URL is: {{ backend_url }}</p>
        <button type="button" class="btn btn-secondary">
            This is an example Skull button
        </button>

    </div>
</template>

<script>
import axios from 'axios'
export default
    {
        name: 'Skull',
        data() {
            return {
                msg: 'Hi! This is the skull component 💀',
                environment: process.env.NODE_ENV,
                env_var_file_name: process.env.VUE_APP_ENV_VAR_FILE_NAME,
                backend_url: process.env.VUE_APP_ROOT_URL
            }
        },
        methods:
        {
            getSkull() {
                const path = `${process.env.VUE_APP_ROOT_URL}/skull`;
                axios.get(path)
                    .then((response) => {
                        this.msg = response.data;
                    })
                    .catch(error => console.log(error))
            }
        },
        created() {
            this.getSkull()
        }
    }
</script>