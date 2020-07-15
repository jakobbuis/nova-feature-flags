<template>
    <div>
        <heading class="mb-6">Feature Flags</heading>

        <p v-if="flags.length == 0" class="mb-4">
            There are no feature flags defined in the application. You can add flags to the features table using a
            migration or by editing the database manually.
        </p>

        <div class="card">
            <div class="flex border-b border-40" v-for="(flag, key) in flags">
                <div class="w-1/5 px-8 py-6">
                    <label for="photo" class="inline-block pt-2 leading-tight">
                        {{ flag.title }} <br>
                        <span class="help-text help-text mt-2">
                            {{ flag.feature }}
                        </span>
                    </label>
                </div>
                <div class="py-6 px-8 w-1/5">
                    <span class="form-file mr-4">
                        <toggle-button>
                        </toggle-button>
                    </span>
                    <div class="help-text help-text mt-2" v-if="flag.active_at">
                        Flag actived since {{ flag.active_at }}
                    </div>
                </div>

                <div class="w-3/5 px-8 py-6">
                    <p>{{ flag.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flags: [
                {
                    title: 'Specials',
                    feature: 'specials',
                    description: 'Toggle the specials UI for all schools',
                    active_at: '2020-05-01 08:13:52',
                },
                {
                    title: 'Skynet restraints',
                    feature: 'skynet_restraints',
                    description: 'Enable this flag to *disable* the Skynet constraints',
                    active_at: null,
                },
                {
                    title: 'Clinic suggestions uses machine learning',
                    feature: 'ml_suggest_clinics',
                    description: 'Enable use of machine learning algorithm to predict which clinics are of interest to the user',
                    active_at: '1989-09-03 21:05:00',
                },
            ],
        };
    },

    async created() {

    },

    methods: {
        update() {

        },
    },
};
</script>

<style scoped>
    .bg-enabled {
        background-color: var(--success);
    }

    .bg-disabled {
        background-color: var(--danger);
    }
</style>
