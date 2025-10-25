const roles = document.querySelectorAll('.role-selection div')

roles.forEach((role) => {
  role.addEventListener('click', () => {
    roles.forEach((r) => r.classList.remove('active'))
    role.classList.add('active')
  })
})
