<template>
  <div class="locale-changer">
    <div class="locale-changer w-full">
      <select v-model="$i18n.locale">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
          {{ locale }}
        </option>
      </select>
    </div>
  </div>
</template>
