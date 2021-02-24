import _ from 'lodash'
import './style.css'
import './style.scss'
import img from './haikei.jpg'

function component() {
  const element = document.createElement('div')
  const array = ['hello', 'webpack', '!']
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component())

document.body.classList.add('haikei')

const image = new Image()
image.src = img

document.body.appendChild(image)