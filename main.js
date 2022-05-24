window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection()
}

function activateMenuAtCurrentSection() {
  //scrollY + viewPort / 2
  const targetLine = scrollY + innerHeight / 2

  //top section home
  const sectionTop = home.offsetTop

  //height section home
  const sectionHeight = home.offsetHeight

  //sectionTop reach oe passed target line
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  //end section
  const sectionEndsAt = sectionTop + sectionHeight

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
