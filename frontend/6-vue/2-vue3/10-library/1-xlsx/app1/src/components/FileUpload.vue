<template>
  <div>
    <input type="file" ref="fileInput" @change="handleFileUpload" accept=".xlsx, .xls" />
    <table v-if="excelData.length > 0">
      <!-- <thead>
        <tr>
          <th v-for="header in excelData[0]" :key="header">{{ header }}</th>
        </tr>
      </thead> -->
      <tbody>
        <tr v-for="(row, rowIndex) in excelData" :key="rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import * as XLSX from 'xlsx';

const excelData = ref([]);

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const extractedData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      excelData.value = extractedData;
    };
    reader.readAsArrayBuffer(file);
  }
};
</script>
