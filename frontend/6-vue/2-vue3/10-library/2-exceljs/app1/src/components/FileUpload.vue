<template>
  <input type="file" @change="readExcelFile" />
</template>

<script setup>
import { ref } from 'vue';
import ExcelJS from 'exceljs';

const readExcelFile = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  try {
    // 새로운 워크북 인스턴스 생성
    const workbook = new ExcelJS.Workbook();
    // 업로드된 파일 읽기
    const arrayBuffer = await file.arrayBuffer();
    await workbook.xlsx.load(arrayBuffer);

    // 각 시트를 순회
    workbook.eachSheet((worksheet, sheetId) => {
      console.log(`시트: ${worksheet.name}`);
      // 워크시트 내에서 값을 가진 모든 행을 순회
      worksheet.eachRow((row, rowNumber) => {
        console.log('행 ' + rowNumber + ' = ' + JSON.stringify(row.values));
      });
    });
  } catch (error) {
    console.error(error);
  }
};
</script>
