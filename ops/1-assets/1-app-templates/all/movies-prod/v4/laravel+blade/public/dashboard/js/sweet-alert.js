
document.addEventListener('DOMContentLoaded', function () {
  const basic = document.getElementById('sweetalert-basic')
  if (basic) {
    basic.addEventListener('click', function () {
      Swal.fire({
        title: 'Hello! This is a Basic Message.',
        backdrop: `rgba(60,60,60,0.8)`,
      })
    });
  }

  const title = document.getElementById('sweetalert-title')
  if (title) {
    title.addEventListener('click', function () {
      Swal.fire({
        title: 'The Internet?',
        text: 'That thing is still around? question',
        backdrop: `rgba(60,60,60,0.8)`
      })
    });
  }

  const modeltitle = document.getElementById('sweetalert-modeltitle')
  if (modeltitle) {
    modeltitle.addEventListener('click', function () {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        backdrop: `rgba(60,60,60,0.8)`,
        footer: '<a href="">Why do I have this issue?</a>'
      })
    });
  }

  const customposition = document.getElementById('sweetalert-customposition')
  if (customposition) {
    customposition.addEventListener('click', function () {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        backdrop: `
    rgba(60,60,60,0.8)`,
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 55000
      })
    })
  }

  const customdialog = document.getElementById('sweetalert-customdialog')
  if (customdialog) {
    customdialog.addEventListener('click', function () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        backdrop: `rgba(60,60,60,0.8)`,
        confirmButtonText: 'Yes, delete it!',
        confirmButtonColor: "#c03221"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    })
  }

  const customimage = document.getElementById('sweetalert-customimage')
  if (customimage) {
    customimage.addEventListener('click', function () {
      Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: '../../assets/images/pro/plugins/img2.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        backdrop: `rgba(60,60,60,0.8)`
      })
    })
  }

  const widthandpadding = document.getElementById('sweetalert-widthpadding')
  if (widthandpadding) {
    widthandpadding.addEventListener('click', function () {
      Swal.fire({
        title: 'Custom width, padding, background.',
        width: 600,
        padding: '3em',
        background: '#fff url(../../assets/images/pro/plugins/img1.jpeg)',
        backdrop: `rgba(60,60,60,0.8)
              url("../../assets/images/pro/plugins/nyan-cat.gif")
              left top
              no-repeat`
      })
    })
  }

  const Htmldescription = document.getElementById('sweetalert-Htmldescription')
  if (Htmldescription) {
    Htmldescription.addEventListener('click', function () {
      Swal.fire({
        title: '<strong>HTML Example</strong>',
        icon: 'info',
        html:
          'You can use <b>bold text</b>, ' +
          '<a href="//sweetalert2.github.io">links</a> ' +
          'and other HTML tags',
        backdrop: `rgba(60,60,60,0.8)`,
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText:
          '<i class="fa fa-thumbs-down"></i> Cancel',
        cancelButtonAriaLabel: 'Thumbs down, cancel!'
      })
    })
  }

  const dialog = document.getElementById('sweetalert-dialog')
  if (dialog) {
    dialog.addEventListener('click', function () {
      Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
        backdrop: `
  rgba(60,60,60,0.8)`,
        confirmButtonText: 'Save',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    })
  }

  const ajaxreq = document.getElementById('sweetalert-ajaxreq')
  if (ajaxreq) {
    ajaxreq.addEventListener('click', function () {
      Swal.fire({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        backdrop: `rgba(60,60,60,0.8)`,
        confirmButtonText: 'Look up',
        showCancelButton: true,
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Request failed: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url,
            backdrop: `rgba(60,60,60,0.8)`
          })
        }
      })
    })
  }
});

