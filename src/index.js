import _ from 'lodash'
import { nijou } from './utilities'

function component() {
  const element = document.createElement('div')
  const array = ['hello', 'webpack', '!']
  element.innerHTML = _.join(array, ' ')
  return element
}             

console.log(nijou(10));

document.body.appendChild(component())