import { h } from 'vue';
import NullJson from '@/components/json/NullJson.vue';
import StringJson from '@/components/json/StringJson.vue';
import ObjectJson from '@/components/json/ObjectJson.vue';
import BooleanJson from '@/components/json/BooleanJson.vue';
import NumberJson from '@/components/json/NumberJson.vue';
import ArrayJson from '@/components/json/ArrayJson.vue';

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
