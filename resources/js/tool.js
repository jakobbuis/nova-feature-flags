import ToggleButton from 'vue-js-toggle-button';

Nova.booting((Vue, router, store) => {
    Vue.use(ToggleButton);
    router.addRoutes([
        {
            name: 'nova-feature-flags',
            path: '/nova-feature-flags',
            component: require('./components/Flags'),
        },
    ]);
});
