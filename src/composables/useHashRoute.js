import { ref } from 'vue';

export function useHashRoute() {
    const currentPage = ref('temperature');

    return { currentPage };
}