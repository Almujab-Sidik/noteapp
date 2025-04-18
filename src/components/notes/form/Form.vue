<script setup lang="ts">
import Button from "../../ui/button/Button.vue";
const props = defineProps<{
  modelValue: string;
  disabled?: boolean;
  title?: string;
  btnText?: string;
  minimalChar?: number;
  maximalChar: number;
}>();

const emit = defineEmits(["update:modelValue", "submit"]);

function handleSubmit() {
  emit("submit");
}
</script>

<template>
  <h1 class="text-base font-semibold tracking-tighter mb-2">
    {{ props.title }}
  </h1>
  <div class="bg-red-100 rounded-sm p-2">
    <form
      class="flex flex-col gap-4 bg-white p-2 rounded-sm"
      @submit.prevent="handleSubmit"
    >
      <div class="flex flex-col gap-2">
        <label for="content" />
        <textarea
          ref="focusNote"
          class="p-2 border border-slate-100 rounded-xs"
          id="content"
          name="content"
          placeholder="Write your note here..."
          rows="5"
          cols="30"
          :value="props.modelValue"
          @input="
            $emit(
              'update:modelValue',
              ($event.target as HTMLTextAreaElement).value
            )
          "
        />
      </div>
      <div class="flex justify-between items-center">
        <span v-if="props.modelValue.length > props.maximalChar">
          <span class="text-red-500 text-xs"> Character limit exceeded! </span>
        </span>
        <span v-else class="flex-1"></span>
        <span class="text-right mt-2 text-muted-foreground text-xs"
          >{{ props.modelValue.length }} / {{ props.maximalChar }}</span
        >
      </div>
      <Button
        type="submit"
        :disabled="
          props.disabled || props.modelValue.length > props.maximalChar
        "
        size="sm"
        variant="outline"
        class="cursor-pointer bg-blue-600 text-white hover:bg-blue-500 hover:text-white"
        >{{ props.btnText }}</Button
      >
    </form>
  </div>
</template>
