<template lang="pug">
  .FixedTableLayout
    table.table
      tr
        th.th 名前
        th.th 出身地
        th.th 誕生日
        th.th E-Mail
      tr
        td.td あじ
        td.td 海
        td.td 1月23日
        td.td ajiaji@example.com
      tr
        td.td さば
        td.td 海
        td.td 4月5日
        td.td sabasaba@example.com
      tr
        td.td うなぎ
        td.td 海
        td.td 6月7日
        td.td unauna@example.com
</template>

<style lang="scss" scoped>
.FixedTableLayout {
  width: 32rem;
}

.table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
}

.th,
.td {
  border: 1px solid $color-main;
  overflow: hidden;
  padding: 0.5rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.th {
  background-color: $color-main;
  border-color: $color-background;
  color: $color-background;
}
</style>
