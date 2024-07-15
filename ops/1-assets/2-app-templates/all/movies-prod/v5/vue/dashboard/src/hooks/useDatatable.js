import { onMounted, onBeforeUnmount } from 'vue';
import $ from 'jquery';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-bs5';

const useDataTable = ({ tableRef, columns, data = [], url = null, actionCallback, isColumnHidden = false, isColumnHiddenClass = '.toggle-vis', isFilterColumn = false, isMultilang = false }) => {
  onMounted(() => {
    setTimeout(() => {
      let datatableObj = {
        dom: '<"row align-items-center"<"col-md-6" l><"col-md-6" f>><"table-responsive my-3" rt><"row align-items-center" <"col-md-6" i><"col-md-6" p>><"clear">',
        autoWidth: false,
        columns: columns,
      };

      if (url) {
        datatableObj = {
          ...datatableObj,
          processing: true,
          serverSide: true,
          ajax: {
            url: url,
          },
        };
      }

      if (data) {
        datatableObj = {
          ...datatableObj,
          data: data,
        };
      }

      if (isFilterColumn) {
        datatableObj = {
          ...datatableObj,
          initComplete: function () {
            const api = this.api();

            // For each column
            api
              .columns()
              .eq(0)
              .each(function (colIdx) {
                var cell = $('.filters th').eq($(api.column(colIdx).header()).index());
                var title = $(cell).text();
                if ($(api.column(colIdx).header()).index() >= 0) {
                  $(cell).html('<input type="text" class="form-control form-control-sm" placeholder="' + title + '"/>');
                }
              });

            api.columns().every(function () {
              var that = this;

              $('input', this.footer()).on('keyup change clear', function () {
                if (that.search() !== this.value) {
                  that.search(this.value).draw();
                }
              });
            });
          },
        };
      }

      function languageSelect() {
        return Array.from(document.querySelector('#langSelector').options)
          .filter((option) => option.selected)
          .map((option) => option.getAttribute('data-path'));
      }

      const setMultiLang = () => {
        datatableObj = {
          ...datatableObj,
          language: {
            url: languageSelect(),
          },
        };
      };
      if (isMultilang) {
        setMultiLang();
      }

      let datatable = $(tableRef.value).DataTable(datatableObj);

      if (typeof actionCallback === 'function') {
        $(datatable.table().body()).on('click', '[data-table="action"]', function () {
          actionCallback({
            id: $(this).data('id'),
            method: $(this).data('method'),
          });
        });
      }

      if (isColumnHidden) {
        $(isColumnHiddenClass).on('click', function (e) {
          e.preventDefault();
          const column = datatable.column($(this).attr('data-column'));
          column.visible(!column.visible());
        });
      }

      if (isMultilang) {
        document.querySelector('#langSelector').addEventListener('change', () => {
          $(tableRef.value).DataTable().destroy();
          setMultiLang();
          datatable = $(tableRef.value).DataTable(datatableObj);
        });
      }
    }, 0);
  });

  onBeforeUnmount(() => {
    if ($.fn.DataTable.isDataTable(tableRef.value)) {
      $(tableRef.value).DataTable().destroy();
    }

    $(tableRef.value).empty();
  });
};

export default useDataTable;
