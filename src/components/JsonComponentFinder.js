import { h } from 'vue';
import NullJson from '@/components/NullJson.vue';
import StringJson from '@/components/StringJson.vue';
import ObjectJson from '@/components/ObjectJson.vue';
import BooleanJson from '@/components/BooleanJson.vue';
import NumberJson from '@/components/NumberJson.vue';
import ArrayJson from '@/components/ArrayJson.vue';

export function findJsonComponent(value) {
    if (value === null || value === undefined) {
        return createComponent(NullJson, value);
    }

    if (typeof value === 'string') {
        return createComponent(StringJson, value);
    }

    if (typeof value === 'boolean') {
        return createComponent(BooleanJson, value);
    }

    if (typeof value === 'number') {
        return createComponent(NumberJson, value);
    }

    if (Array.isArray(value)) {
        return createComponent(ArrayJson, value);
    }

    return createComponent(ObjectJson, value);
}

function createComponent(component, value) {
    return {
        render() {
            return h(component, { value });
        },
    };
}
