const menu = document.querySelector('.menu');
const burger = document.querySelector('.entypo-menu');
const main = document.querySelector('main')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('.imag')
const description = document.querySelector('.description')
let mediaQuery = window.matchMedia("(min-width: 1200px)")
const openmenu = () => menu.classList.toggle('open')
const bodyclick = () => menu.classList.remove('open')
const autoroll = () => {return window.scrollY;}

burger.addEventListener('click', openmenu)
main.addEventListener('click', bodyclick)


document.addEventListener('scroll', () => img1.style.cssText = `transform: translateY(${Math.max(-autoroll())*2}px);`);
document.addEventListener('scroll', () => {if (mediaQuery.matches) {
                                                if (autoroll()>900 && autoroll()<1100) img2.style.cssText = `transform: translateY(${Math.max(autoroll()-900)}px);`
                                                }
                                            
                                                else if (autoroll()>700 && autoroll()<1300) {img2.style.cssText = `transform: translateY(${Math.max(autoroll()-400)}px);`
                                                }
                                        
                                        }
                        );
document.addEventListener('scroll', () => description.style.cssText = `transform: translateY(${Math.max(-autoroll())/4}px);`);
//document.addEventListener('click', () => console.log(window.scrollY));