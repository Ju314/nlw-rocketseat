window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  //activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  //scrollY + viewPort / 2
  const targetLine = scrollY + innerHeight / 2

  //top section home
  const sectionTop = section.offsetTop

  //height section home
  const sectionHeight = section.offsetHeight

  //sectionTop reach or passed target line
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //end section
  const sectionEndsAt = sectionTop + sectionHeight

  //sectionEnd reach or passed target line
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //boundaries
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

  //console.log(sectionTopReachOrPassedTargetLine)
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 300) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
